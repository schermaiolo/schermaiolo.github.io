---
layout: project
nav: prj
title: "Touhou Fumo Companion"
date: 2026-07-22
kind: PRJ
selected: true
order: 1
stack:
  - TypeScript
  - Lua
  - VS Code
  - Code-OSS
  - Pragtical
  - Pixel Art
summary: "Reactive Touhou fumo companions for VS Code and Pragtical — animated, configurable, and editor-aware."
github: https://github.com/schermaiolo/touhou-fumo-companion
---

Reactive Touhou fumo companions for **VS Code**, **Open VSX / Code-OSS compatible editors**, and **Pragtical**.
The extension adds animated characters that react to editor events, spin, blink, perform character-specific animations, and can be configured independently.

![Touhou Fumo Companion spinning roster, including Cirno]({{ '/assets/images/projects/touhou-fumo-companion/spin-showcase.gif' | relative_url }})

## Latest update — v2.0.0: grab, throw, bounce!

Version 2.0.0 introduces drag-and-throw physics in both editors and a redesigned settings page for VS Code.

### VS Code

Grab a Fumo from the Explorer or Bottom Panel, drag her, and flick to throw. With the optional **Bounce inside the code editor** setting enabled, Fumos can fly through the code area, bounce, and return home.

![VS Code Fumo drag-and-throw]({{ '/assets/images/projects/touhou-fumo-companion/v2-vscode-drag-and-throw.gif' | relative_url }})

The new dedicated settings page groups **Basics**, **Fumos**, **Movement**, **Reaction Rules**, and **Advanced**, with a sprite preview beside each Fumo's settings.

![VS Code Fumo movement settings]({{ '/assets/images/projects/touhou-fumo-companion/v2-settings-movement.png' | relative_url }})

### Pragtical

Drag and throw Fumos across the Pragtical window with gravity and bouncing, followed by a return to their home position. **Grab & Throw** is enabled by default for new installations and can be turned off in the plugin settings.

![Pragtical Fumo drag-and-throw]({{ '/assets/images/projects/touhou-fumo-companion/v2-pragtical-grab-and-throw.gif' | relative_url }})

## What it includes

- animated Fumo companions inside supported editors
- click/manual reactions with configurable messages
- editor-aware reactions, including typing, newline, and custom event rules
- random and manual spin animations
- drag-and-throw interactions in VS Code and Pragtical
- character-specific behavior
- independent per-character configuration
- VS Code Marketplace and Open VSX distribution
- Pragtical integration

## Fumos in action — reactions and animations

The Fumos do more than bounce. Click one for her manual reaction, or configure editor events and custom rules to trigger animations and messages while you work. These demonstrations show a few of the available behaviors.

### VS Code

| Click reactions | Writing reactions |
| :---: | :---: |
| <img src="{{ '/assets/images/projects/touhou-fumo-companion/vscode-click-reactions.gif' | relative_url }}" alt="VS Code Fumos reacting when clicked" width="280" loading="lazy"> | <img src="{{ '/assets/images/projects/touhou-fumo-companion/vscode-writing-reactions.gif' | relative_url }}" alt="VS Code Fumos reacting to typing and editor events" width="280" loading="lazy"> |
| Crazy spin | Editor Pet |
| <img src="{{ '/assets/images/projects/touhou-fumo-companion/crazy-spin.gif' | relative_url }}" alt="VS Code Fumos performing a crazy spin" width="220" loading="lazy"> | <img src="{{ '/assets/images/projects/touhou-fumo-companion/vscode-editor-pet.gif' | relative_url }}" alt="A small Fumo Editor Pet in VS Code" width="220" loading="lazy"> |

### Pragtical

A regular click still triggers the manual reaction; dragging instead picks up the Fumo for the new physics interaction.

<p align="center">
  <img src="{{ '/assets/images/projects/touhou-fumo-companion/pragtical-click-reactions.gif' | relative_url }}" alt="Pragtical Fumos reacting to clicks" width="390" loading="lazy">
</p>

| Crazy spin | Editor Pet |
| :---: | :---: |
| <img src="{{ '/assets/images/projects/touhou-fumo-companion/pragtical-crazy-spin.gif' | relative_url }}" alt="Pragtical Fumos performing crazy spin animations" width="210" loading="lazy"> | <img src="{{ '/assets/images/projects/touhou-fumo-companion/pragtical-editor-pet.gif' | relative_url }}" alt="Pragtical Editor Pet near the cursor" width="220" loading="lazy"> |

## Hand-edited animation work

A large part of the project is the animation asset pipeline. Starting from base idle sprites, additional animation frames and rotational views are edited manually pixel by pixel.

![Hand-edited Youmu animation and rotation sheet]({{ '/assets/images/projects/touhou-fumo-companion/youmu-sheet.png' | relative_url }})

[View the source on GitHub](https://github.com/schermaiolo/touhou-fumo-companion)

## Distribution and public contribution

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=schermaiolo.touhou-fumo-companion)
- [Open VSX Registry](https://open-vsx.org/extension/schermaiolo/touhou-fumo-companion)
- [Pragtical plugins PR #47](https://github.com/pragtical/plugins/pull/47)
