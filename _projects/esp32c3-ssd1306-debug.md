---
layout: project
nav: prj
title: "ESP32-C3 SSD1306 Debug Console"
date: 2026-03-14
kind: PRJ
selected: false
order: 4
stack:
  - C
  - ESP-IDF
  - ESP32-C3
  - SSD1306
  - LVGL
summary: "A small OLED debug console for ESP32-C3 using a custom SSD1306 driver, framebuffer rendering, and a printf-style display API."
github: https://github.com/schermaiolo/esp32c3_ssd1306_debug
---

A lightweight hardware debug console built around an **ESP32-C3 SuperMini** and a **128×64 SSD1306 OLED**.

The idea is to expose useful runtime state directly on the device instead of requiring a serial terminal for every quick check.

![Debug demo]({{ '/assets/images/projects/esp32c3-ssd1306-debug/repo/demo.gif' | relative_url }})

## Features

- custom SSD1306 driver using the ESP-IDF I²C master API
- framebuffer-based rendering
- Minimal LVGL integration
- lightweight display abstraction
- Simple `display_printf()` function for emebedded status output
- Example rendering (checkerboard test pattern)
- minimal hardware setup

## Hardware

| OLED | ESP32-C3 |
|---|---|
| SDA | GPIO4 |
| SCL | GPIO5 |
| VCC | 3V3 |
| GND | GND |

The default SSD1306 address is `0x3C`.

## Architecture

```text
ESP32-C3
│
├── LVGL
│
└── Display module
     │
     ├── SSD1306 driver
     │    └── I²C communication
     │
     └── Debug console API
          └── display_printf()
```

Example:

```c
display_printf("Hello world");
display_printf("Tick %d", counter);
```

The result is a tiny rolling log/status display that can be useful for bring-up, diagnostics, or standalone demonstrations.

[View the source on GitHub](https://github.com/schermaiolo/esp32c3_ssd1306_debug)
