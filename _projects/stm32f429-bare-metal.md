---
layout: project
nav: prj
title: "STM32F429I Discovery Bare-Metal Labs"
date: 2026-04-12
kind: PRJ
selected: true
order: 3
stack:
  - C
  - STM32F429
  - Bare Metal
  - OpenOCD
  - ARM GCC
summary: "A minimal bare-metal STM32F429I Discovery project built from scratch with custom startup code, linker script, direct register access, LCD bring-up, interrupts, and debug output."
github: https://github.com/schermaiolo/stm32f429i_discovery_bare_metal_labs
---

A bare-metal STM32F429I-Discovery project built without a vendor framework.

The project starts from startup code and a linker script, configures the microcontroller directly through registers, and gradually builds toward more complete board functionality.

![STM32F429I Discovery demo]({{ '/assets/images/projects/stm32f429-bare-metal/demo.gif' | relative_url }})

## Current scope

- custom interrupt vector table and startup code
- custom GNU linker script
- register-level peripheral configuration
- 168 MHz clock configuration
- SysTick millisecond timebase
- on-board LED control
- USART2 debug output
- SPI ILI9341 LCD bring-up
- EXTI user/external button handling
- RGB565 sprite rendering
- Make and optional CMake build flows
- OpenOCD flashing

## Why this repository exists

The goal is to keep the hardware visible rather than hiding it behind a framework:

```text
reset
  |
  v
startup code
  |
  v
linker-defined memory layout
  |
  v
clock / SysTick / GPIO / USART / SPI / EXTI
  |
  v
display + input
  |
  v
small interactive demos
```

It is both a working firmware project and a progressively documented bare-metal reference.

[View the source on GitHub](https://github.com/schermaiolo/stm32f429i_discovery_bare_metal_labs)
