'use strict';

/**
 * Next.js calls `os.networkInterfaces()` during dev-server startup to print LAN URLs.
 * macOS 15 (Sequoia) sandboxing can cause that native call to throw `uv_interface_addresses`
 * errors in some environments. This lightweight patch wraps the call so the dev server
 * can continue even when the OS refuses to expose interfaces.
 */
const os = require('os');

if (typeof os.networkInterfaces === 'function') {
  const originalNetworkInterfaces = os.networkInterfaces;

  os.networkInterfaces = () => {
    try {
      return originalNetworkInterfaces();
    } catch (error) {
      console.warn(
        '[dev-server] Unable to read network interfaces, continuing with localhost only.',
      );
      console.warn(error);
      return {};
    }
  };
}





