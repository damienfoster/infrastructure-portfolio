---
date: '1'
title: 'Enterprise Edge Security & VLAN Segmentation'
cover: './demo.png'
github: 'https://github.com/damienfoster'
external: '#'
tech:
  - pfSense
  - WireGuard VPN
  - Unifi Networking
  - ntopng
  - Traffic Shaping
---

Architected and deployed a custom pfSense security gateway to manage a multi-segmented enterprise-grade home network.

- Established strict **VLAN segmentation** using Unifi hardware to isolate Management, IoT, Guest, and Lab environments, controlled via granular stateful firewall rules.
- Engineered a high-performance **WireGuard VPN tunnel** for secure, low-latency remote access to internal network resources.
- Implemented **ntopng** for deep packet inspection and netflow analysis, providing real-time visibility into bandwidth utilization and potential security anomalies.
- Configured **bandwidth shaping (FQ_CoDel)** to prioritize mission-critical traffic and eliminate bufferbloat during high-utilization periods.
