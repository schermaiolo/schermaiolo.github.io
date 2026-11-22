---
layout: project
nav: prj
title: "TinySR-Jetson"
date: 2026-11-22
kind: PRJ
selected: true
order: 3
stack:
  - C++
  - CUDA
  - TensorRT
  - ONNX
  - Jetson
summary: "Native C++/CUDA/TensorRT deployment of TinySR on NVIDIA Jetson Orin Nano, with ONNX export, TensorRT engine generation and numerical validation against the PyTorch reference."
github: https://github.com/schermaiolo/TinySR-Jetson
---

**TinySR-Jetson** is an unofficial NVIDIA Jetson deployment port of [Microtreei/TinySR](https://github.com/Microtreei/TinySR), the official implementation of *TinySR: Pruning Diffusion for Real-World Image Super-Resolution*.

The goal was not to rewrite TinySR as a different model. I wanted to preserve the upstream inference pipeline while making it practical to execute on a resource-constrained **Jetson Orin Nano 8 GB** without keeping Python and PyTorch in the runtime path.

## Why I made it

The original PyTorch implementation was the reference and starting point. On the Orin Nano, however, the full inference path could run into memory pressure and allocator failures.

That made the project an interesting embedded-AI exercise: identify the inference stages, export them cleanly, rebuild them for TensorRT, reproduce the glue logic in native code, and then prove that the result still matches the reference closely enough.

## Target platform

The validated target is:

- NVIDIA Jetson Orin Nano 8 GB
- JetPack 6.2.3
- L4T R36.5.2
- CUDA 12.6
- TensorRT 10.3
- C++17

## Pipeline

The native pipeline keeps the same high-level structure:

```text
input
  ↓
VAE encoder
  ↓
transformer
  ↓
residual latent
  ↓
VAE decoder
  ↓
super-resolved output
```

The model stages are exported to **ONNX**, converted into **TensorRT engines**, and executed by a native **C++/CUDA/TensorRT** runtime.

There is no Python interpreter in the final inference path.

## Validation

The standalone port was validated end-to-end on the Orin Nano:

| Check | Result |
| --- | ---: |
| ONNX exports | 3 / 3 |
| TensorRT engine builds | 3 / 3 |
| 30-run pipeline mean | 205.67 ms |
| 30-run pipeline P95 | 206.43 ms |
| PSNR vs PyTorch reference | 53.29 dB |
| Transformer relative RMSE | 0.2202% |
| Transformer values within tolerance | 99.881% |

These numbers are intended as validation of this specific Jetson deployment, not as a benchmark claim against the TinySR paper.

## Example

{% include tinysr-comparison.html %}

One example from the Jetson tests. The reconstructed image illustrates 4× super-resolution; it is **not a ground-truth reference**.

## Current scope

The Jetson port is intentionally narrower than the full upstream Python implementation.

The validated path focuses on the fixed deployment configuration used for the port, including the 4× super-resolution flow. Arbitrary-resolution processing and the upstream AdaIN path are not currently part of the native runtime.

The repository contains the deployment and conversion work rather than pretending to be a replacement for TinySR itself.

## Upstream

TinySR-Jetson is an **independent, unofficial port**.

The original model, paper and PyTorch implementation belong to the TinySR authors. After publishing the port, I opened [Microtreei/TinySR issue #5](https://github.com/Microtreei/TinySR/issues/5) to share the work with the original project, thank the authors, and ask for guidance about redistribution of converted model artifacts.

Until that is clear, the repository stays focused on the porting code, conversion workflow and reproducible results rather than presenting converted checkpoints or TensorRT engines as upstream-provided artifacts.

## Links

- [TinySR-Jetson](https://github.com/schermaiolo/TinySR-Jetson)
- [Original TinySR repository](https://github.com/Microtreei/TinySR)
- [Upstream issue #5](https://github.com/Microtreei/TinySR/issues/5)
