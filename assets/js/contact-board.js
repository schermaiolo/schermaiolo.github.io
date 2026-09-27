(() => {
  const dialog = document.querySelector("#contact-board");
  if (!dialog) return;

  const triggers = document.querySelectorAll("[data-contact-open]");
  const closeButton = dialog.querySelector("[data-contact-close]");
  const status = dialog.querySelector("[data-contact-status]");
  const ready = dialog.querySelector("[data-contact-ready]");
  const copyButton = dialog.querySelector("[data-copy-email]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let timers = [];
  let booted = false;

  const clearTimers = () => {
    timers.forEach(window.clearTimeout);
    timers = [];
  };

  const showReady = () => {
    clearTimers();
    status.hidden = true;
    ready.hidden = false;
    dialog.classList.add("is-ready");
    booted = true;
  };

  const setStatus = (text) => {
    status.hidden = false;
    ready.hidden = true;
    status.textContent = text;
  };

  const queue = (delay, callback) => {
    timers.push(window.setTimeout(callback, delay));
  };

  const runBootSequence = () => {
    clearTimers();
    dialog.classList.remove("is-ready");

    if (reduceMotion.matches || booted) {
      showReady();
      return;
    }

    setStatus("> BOOT ROM OK");
    queue(280, () => setStatus("> BOOT ROM OK\n> GPIO INIT..."));
    queue(620, () => setStatus("> BOOT ROM OK\n> GPIO INIT...\n> SPI SETUP..."));
    queue(980, () => setStatus("> BOOT ROM OK\n> GPIO INIT...\n> SPI SETUP...\n> I2C SETUP..."));
    queue(1340, () => setStatus("> BOOT ROM OK\n> GPIO INIT...\n> SPI SETUP...\n> I2C SETUP...\n> OLED INIT..."));
    queue(1700, () => setStatus("> GPIO INIT...\n> SPI SETUP...\n> I2C SETUP...\n> OLED INIT...\n> BUFFER CLEAR"));
    queue(2040, () => setStatus("> SPI SETUP...\n> I2C SETUP...\n> OLED INIT...\n> BUFFER CLEAR\n> GETTING INFO..."));
    queue(2440, () => setStatus("> I2C SETUP...\n> OLED INIT...\n> BUFFER CLEAR\n> GETTING INFO...\n\n> CONTACT READY"));
    queue(2800, showReady);
  };

  const openDialog = () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    runBootSequence();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", openDialog);
  });

  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", clearTimers);

  copyButton?.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    const original = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "copied";
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      copyButton.textContent = "copied";
    }

    window.setTimeout(() => {
      copyButton.textContent = original;
    }, 1400);
  });
})();
