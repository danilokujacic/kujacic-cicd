module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    // or if you have custom launchers
    // browsers: ['CustomChromeHeadless'],

    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-software-rasterizer",
        ],
      },
    },
  });
};
