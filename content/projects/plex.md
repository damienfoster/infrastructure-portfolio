---
date: '2026-02-21'
title: 'Home Plex Media Server'
github: 'https://github.com/damienfoster'
external: ''
tech:
  - Docker
  - Ubuntu Server
  - Linux Filesystem
  - Storage Management
  - Networking
showInProjects: true
---

Engineered a high-availability media server architecture by migrating legacy services from Raspberry Pi to an x86-64 HP ProDesk Mini environment. Designed and deployed a containerized stack featuring **Plex, Radarr, Sonarr, SABnzbd, and Prowlarr** using Docker Compose.

**Key Technical Achievements:**
* **Storage & Filesystem Architecture:** Orchestrated a 14TB external storage array utilizing persistent bind mounts and standardized Linux filesystem hierarchies. 
* **Security & Permissions:** Managed complex UID/GID mapping to ensure secure, consistent container access to local and network-attached storage.
* **Network Optimization:** Resolved cross-VLAN mDNS and routing issues to ensure seamless media delivery across segmented home network zones.
* **Performance Engineering:** Debugged hardware acceleration (QuickSync) and transcoding behaviors to optimize CPU utilization during high-bitrate playback.

Demonstrates advanced Linux proficiency, container orchestration, and real-world troubleshooting of complex application networking.
