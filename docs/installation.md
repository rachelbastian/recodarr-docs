---
sidebar_position: 2
---

# Installation Guide

This guide will walk you through the process of installing Re:Cod|Arr on your system.

## Installation Methods

Re:Cod|Arr can be installed using several methods:

### Method 1: Direct Download

1. Visit the [Re:Cod|Arr releases page](https://github.com/your-github-username/recodarr/releases)
2. Download the appropriate installer for your operating system:
   - Windows: `RecodArr-Setup-x.x.x.exe`
   - macOS: `RecodArr-x.x.x.dmg`
   - Linux: `recodarr-x.x.x.AppImage` or `.deb`/`.rpm` packages

3. Run the installer and follow the on-screen instructions

### Method 2: Package Managers

#### Windows (Chocolatey)

```powershell
choco install recodarr
```

#### macOS (Homebrew)

```bash
brew install recodarr
```

#### Linux (Debian/Ubuntu)

```bash
# Add GPG key
curl -s https://recodarr.example.com/gpg | sudo apt-key add -

# Add repository
echo "deb https://recodarr.example.com/apt stable main" | sudo tee /etc/apt/sources.list.d/recodarr.list

# Update package list
sudo apt update

# Install Re:Cod|Arr
sudo apt install recodarr
```

### Method 3: Docker

```bash
docker pull recodarr/recodarr:latest

docker run -d \
  --name=recodarr \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -p 8080:8080 \
  -v /path/to/config:/config \
  -v /path/to/media:/media \
  --restart unless-stopped \
  recodarr/recodarr:latest
```

## Post-Installation Setup

After installing Re:Cod|Arr, follow these steps to get started:

1. Open Re:Cod|Arr by:
   - Windows: Launch from the Start Menu
   - macOS: Open from Applications folder
   - Linux: Run `recodarr` from terminal or use application launcher

2. Open your web browser and navigate to:
   - `http://localhost:8080` (if installed locally)
   - Or the IP address of your server: `http://your-server-ip:8080`

3. Create an admin account when prompted during first-time setup

4. Configure your media libraries by following the initial setup wizard

## Updating Re:Cod|Arr

### Automatic Updates

Re:Cod|Arr can check for updates automatically. To enable this feature:

1. Go to Settings > General
2. Enable "Automatically check for updates"
3. Select your preferred update channel (Stable, Beta, or Nightly)

### Manual Updates

To update manually, simply download and install the latest version. Your settings and data will be preserved.

## Troubleshooting Installation

If you encounter issues during installation:

- Ensure your system meets the [minimum requirements](./intro#system-requirements)
- Check that you have administrative/root privileges
- Verify that the required ports are not in use by another application
- Review the installation logs for specific error messages

For more detailed troubleshooting, see our [Troubleshooting Guide](./troubleshooting). 