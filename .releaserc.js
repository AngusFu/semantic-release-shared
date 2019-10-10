const config = require("./index");

module.exports = {
  ...config,
  plugins: [
    ...config.plugins.slice(0, -1),
    "@semantic-release/npm",
    ...config.plugins.slice(-1)
  ]
};
