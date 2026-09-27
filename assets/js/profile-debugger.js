(() => {
  const dialog = document.querySelector("#profile-debugger");
  if (!dialog) return;

  const windowEl = dialog.querySelector(".profile-terminal-window");
  const triggers = document.querySelectorAll("[data-profile-open]");
  const closeButton = dialog.querySelector("[data-profile-close]");
  const commandOutput = dialog.querySelector("[data-profile-command-output]");
  const output = dialog.querySelector("[data-profile-output]");
  const readyLine = dialog.querySelector(".profile-terminal-ready-line");
  const tabs = [...dialog.querySelectorAll("[data-profile-tab]")];
  const panels = [...dialog.querySelectorAll("[data-profile-panel]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let typingTimer = null;
  let activeName = "overview";
  let runId = 0;

  const stopTyping = () => {
    runId += 1;

    if (typingTimer !== null) {
      window.clearTimeout(typingTimer);
      typingTimer = null;
    }

    windowEl.classList.remove("is-typing");
  };

  const hidePanels = () => {
    panels.forEach((panel) => {
      panel.hidden = true;
      panel.classList.remove("is-active");
    });
  };

  const showPanel = (name) => {
    const panel = panels.find((item) => item.dataset.profilePanel === name);
    if (!panel) return;

    panel.hidden = false;
    panel.classList.add("is-active");
    output.scrollTop = 0;
  };

  const finishCommand = (name, id) => {
    if (id !== runId) return;

    showPanel(name);
    output.classList.remove("is-waiting");
    windowEl.classList.remove("is-typing");
  };

  const typeCommand = (name, command) => {
    stopTyping();
    const id = runId;

    hidePanels();
    commandOutput.textContent = "";
    output.classList.add("is-waiting");
    windowEl.classList.add("is-typing");

    if (reduceMotion.matches) {
      commandOutput.textContent = command;
      finishCommand(name, id);
      return;
    }

    let index = 0;

    const tick = () => {
      if (id !== runId) return;

      commandOutput.textContent = command.slice(0, index);
      index += 1;

      if (index <= command.length) {
        typingTimer = window.setTimeout(tick, 19);
        return;
      }

      typingTimer = window.setTimeout(() => {
        finishCommand(name, id);
        typingTimer = null;
      }, 140);
    };

    tick();
  };

  const activateTab = (name, focus = false, animate = true) => {
    activeName = name;

    const activeTab = tabs.find((tab) => tab.dataset.profileTab === name);
    if (!activeTab) return;

    tabs.forEach((tab) => {
      const active = tab === activeTab;
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.classList.toggle("is-active", active);
    });

    if (focus) activeTab.focus();

    if (!animate) {
      stopTyping();
      hidePanels();
      commandOutput.textContent = activeTab.dataset.profileCommand || "";
      output.classList.remove("is-waiting");
      showPanel(name);
      return;
    }

    typeCommand(name, activeTab.dataset.profileCommand || "");
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.profileTab === activeName && !windowEl.classList.contains("is-typing")) return;
      activateTab(tab.dataset.profileTab);
    });

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let next = index;

      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;

      activateTab(tabs[next].dataset.profileTab, true);
    });
  });

  const openDialog = () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    activateTab("overview", false, true);
  };

  triggers.forEach((trigger) => trigger.addEventListener("click", openDialog));
  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", stopTyping);
})();
