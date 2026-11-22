---
layout: activity
nav: activity
title: "TinySR-Jetson published and shared upstream"
date: 2026-11-22
kind: ACTIVITY
activity_type: REL
project: tinysr-jetson
summary: "Published TinySR-Jetson, a native C++/CUDA/TensorRT deployment of TinySR for Jetson Orin Nano, and shared the port with the upstream project through issue #5."
external_url: https://github.com/schermaiolo/TinySR-Jetson
---

Published **[TinySR-Jetson](https://github.com/schermaiolo/TinySR-Jetson)**, an independent Jetson deployment port of TinySR built around **ONNX, TensorRT, CUDA and C++**.

The validated native pipeline runs on a Jetson Orin Nano 8 GB and reproduces the upstream inference flow through separate VAE encoder, transformer and VAE decoder TensorRT engines, with numerical validation against the PyTorch reference.

## Example: 4× super-resolution

{% include tinysr-comparison.html %}

The output is a model-generated reconstruction, not a ground-truth image.

After publishing the repository, I also opened **[Microtreei/TinySR issue #5](https://github.com/Microtreei/TinySR/issues/5)** to share the port with the original project, thank the authors for their work, and ask for guidance before redistributing converted model or TensorRT artifacts derived from the upstream checkpoints.
