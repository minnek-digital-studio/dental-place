const releaseItConfig = require('@minnek/config-release-it');

module.exports = {
    ...releaseItConfig,
    "@release-it/bumper": {
      "out": [
        {
          "file": "package.json",
          "path": ["version"]
        },
        {
          "file": "composer.json",
          "path": ["version"]
        }
      ]
    }
};
