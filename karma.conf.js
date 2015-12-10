var webpackConfig = require("./webpack.config.js");
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "jasmine-matchers"],
    files: [
      "spec/**/*spec.js"
    ],
    exclude: [
      "**/*.swp"
    ],
    preprocessors: {
      "spec/**/*spec.js": ["webpack"]
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["PhantomJS2"],
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}