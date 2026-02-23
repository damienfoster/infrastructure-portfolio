---
date: '2'
title: 'Proxmox Virtualization & Infrastructure Lab'
cover: './demo.png'
github: 'https://github.com/damienfoster'
external: '#'
tech:
  - Proxmox VE
  - ZFS Storage
  - LXC Containers
  - KVM Virtualization
  - Resource Orchestration
---

Developed a robust Type-1 hypervisor environment to simulate enterprise data center operations and host critical network services.

- Deployed **Proxmox VE** on dedicated hardware, utilizing **ZFS RAIDZ-1** storage pools to ensure data integrity and high-performance I/O for virtual disks.
- Orchestrated a hybrid environment of **LXC containers** for lightweight services and **KVM virtual machines** for full OS isolation, optimizing hardware resource allocation.
- Configured **automated backup policies** and snapshotting to facilitate rapid disaster recovery and system state rollbacks during configuration testing.
- Integrated **real-time monitoring** for CPU, RAM, and thermal metrics to maintain system health and prevent resource contention across the virtual infrastructure.
