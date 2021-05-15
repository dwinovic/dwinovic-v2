const path = require('path');

module.exports = {
  env: {
    HOSTNAME: process.env.HOSTNAME,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
