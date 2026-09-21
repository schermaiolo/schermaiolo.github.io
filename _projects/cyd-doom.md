---
layout: project
nav: prj
title: "CYD Doom — ESP-IDF + LVGL"
date: 2026-09-06
kind: PRJ
selected: true
order: 2
stack:
  - C
  - ESP-IDF
  - LVGL
  - ESP32
  - DMA
  - GBADoom
summary: "Native ESP-IDF Doom port for the ESP32 Cheap Yellow Display, with LVGL rendering, microSD WAD support and physical joystick input."
github: https://github.com/schermaiolo/cyd_doom_idf_lvgl
---

A native **ESP-IDF** Doom port for the ESP32 Cheap Yellow Display, using **LVGL** as the display owner and targeting the classic ESP32 without PSRAM.

![Doom running on the CYD]({{ '/assets/images/projects/cyd-doom/gameplay.gif' | relative_url }})

## Highlights

- native ESP-IDF build
- LVGL 9.5 launcher and gameplay presentation
- ST7789 320×240 output over SPI
- working Doom-through-LVGL indexed-I8 presentation path
- two 5120-byte DMA buffers for LCD transfers
- microSD WAD discovery, validation, installation, and verification
- Funduino joystick/button input
- no PSRAM dependency

## Hardware

The target is an ESP32-2432S028R-style **Cheap Yellow Display**.

![ESP32 Cheap Yellow Display]({{ '/assets/images/projects/cyd-doom/cyd.jpg' | relative_url }})

The physical control setup uses a Funduino Joystick Shield V1.A.

![Funduino Joystick Shield]({{ '/assets/images/projects/cyd-doom/funduino.jpg' | relative_url }})

## WAD management

The launcher can discover compatible WAD files on microSD, validate them, install them to flash, and launch the game.

![WAD selection screen]({{ '/assets/images/projects/cyd-doom/wad-menu.jpg' | relative_url }})

## Rendering path

```text
GBADoom framebuffer
        |
        v
indexed-I8 view
        |
        v
LVGL refresh / flush callback
        |
        v
palette lookup + nearest-neighbor scaling
        |
        v
two DMA buffers
        |
        v
ST7789 320x240 panel
```

This keeps LVGL in control of the display lifecycle while still avoiding a second full-screen RGB565 framebuffer.

[View the source on GitHub](https://github.com/schermaiolo/cyd_doom_idf_lvgl)
