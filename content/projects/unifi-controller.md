---
date: '2026-02-20'
title: 'Home Unify Controller'
github: 'https://github.com/damienfoster'
external: ''
tech:
  - Ubuntu Server
  - Docker
  - UniFi SDN
  - 802.1Q VLAN Tagging
  - Linux Administration
showInProjects: true
---
Architected a containerized network management layer by deploying a UniFi SDN controller via Docker on an Ubuntu-based HP Mini-PC. Implemented strict 802.1Q VLAN tagging across dual access points to enforce logical segmentation between IoT, Guest, and Internal traffic, mirroring enterprise-grade security architecture in a compact edge environment.

**Key Technical Achievements:**
* **Containerized Deployment:** Leveraged Docker to isolate the SDN controller, ensuring easy portability and consistent environment variables across host migrations.
* **Network Segmentation:** Orchestrated strict **802.1Q VLAN tagging** across dual access points to enforce logical separation between IoT, Guest, and Internal traffic.
* **Linux Systems Management:** Optimized the host Ubuntu Server for minimal resource overhead and configured persistent volume mounts for database stability.
* **Traffic Engineering:** Implemented granular stateful firewall rules to manage inter-VLAN routing and prevent lateral movement from untrusted devices.
