---
sidebar_position: 3
---

# Troubleshooting Guide

This guide will help you resolve common issues that may occur when using Re:Cod|Arr.

## Common Installation Issues

### Application Won't Start

If Re:Cod|Arr fails to start after installation:

1. **Check System Requirements**: Ensure your system meets the [minimum requirements](./intro#system-requirements)
2. **Check Logs**: Review the application logs located at:
   - Windows: `%AppData%\RecodArr\logs`
   - macOS: `~/Library/Logs/RecodArr`
   - Linux: `/var/log/recodarr` or `~/.config/recodarr/logs`
3. **Firewall Settings**: Make sure the required ports are not blocked by your firewall
4. **Run as Administrator/Root**: Try running the application with elevated privileges

### Database Connection Issues

If you encounter database-related errors:

1. **Check Database Settings**: Verify your database configuration is correct
2. **Database Permissions**: Ensure the user has appropriate permissions
3. **Reset Database**: As a last resort, you can reset the database (make a backup first!)

## Performance Issues

### Slow Application Performance

If the application is running slowly:

1. **Hardware Resources**: Check CPU, memory, and disk usage
2. **Database Optimization**: Run the built-in database optimization tool
3. **Clear Cache**: Go to Settings > Maintenance > Clear Cache

### High Memory Usage

If Re:Cod|Arr is consuming excessive memory:

1. **Limit Background Tasks**: Reduce the number of concurrent tasks
2. **Adjust Memory Allocation**: Configure memory limits in advanced settings
3. **Update Application**: Ensure you're running the latest version

## Media Management Issues

### Media Not Being Recognized

If Re:Cod|Arr isn't detecting your media files:

1. **Check File Permissions**: Ensure Re:Cod|Arr has access to your media directories
2. **Verify Path Configuration**: Confirm that your media paths are correctly configured
3. **File Naming**: Make sure your files follow the naming conventions
4. **Force Rescan**: Initiate a manual scan of your media library

## Network Issues

### API Connection Problems

If you're having trouble connecting to external APIs:

1. **Check Internet Connection**: Verify your server has internet access
2. **API Keys**: Ensure all API keys are valid and correctly entered
3. **Proxy Settings**: Check your proxy configuration if using one
4. **Rate Limiting**: Some APIs have rate limits that may temporarily block requests

## Getting Help

If you're still experiencing issues:

1. **Search the Documentation**: Many common issues are already documented
2. **Check GitHub Issues**: See if others have reported the same problem
3. **Community Forums**: Post in our community forums for assistance
4. **Submit a Bug Report**: If you've found a new issue, submit a detailed bug report

## Reporting Bugs

When reporting bugs, please include:

1. Re:Cod|Arr version
2. Operating system and version
3. Detailed steps to reproduce the issue
4. Relevant logs and error messages
5. Screenshots if applicable 