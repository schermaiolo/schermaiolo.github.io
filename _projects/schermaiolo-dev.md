---
layout: project
nav: prj
title: "schermaiolo.dev"
date: 2026-09-19
kind: PRJ
selected: false
order: 5
stack:
  - Jekyll
  - GitHub Pages
  - HTML
  - CSS
summary: "My personal technical home on the web: projects, short updates, and thoughts, built as a small static Jekyll website."
github: https://github.com/schermaiolo/schermaiolo.github.io
---

`schermaiolo.dev` is my personal technical website: a lightweight place for projects, project updates, and longer write-ups.

The site is deliberately static. Jekyll turns Markdown into the final pages, GitHub Pages handles deployment, and the source remains versioned like any other software project.

## Goals

- keep the homepage small and fast
- collect public embedded/software projects in one place
- publish technical write-ups

## Workflow

```text
       Markdown
          |
          v
        Jekyll
          |
          v
   static HTML + CSS
          |
          v
     GitHub Pages
          |
          v
   schermaiolo.dev
```

## Why static?

For a personal engineering site, there is very little reason to introduce a database or application server. Static pages are easy to version, back up, migrate, and self-host later if I decide to move away from GitHub Pages.

[View the source on GitHub](https://github.com/schermaiolo/schermaiolo.github.io)
