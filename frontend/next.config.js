const path = require('path');
module.exports = { outputFileTracingRoot: path.resolve(__dirname), distDir: process.env.NODE_ENV === 'production' ? '.next-production' : '.next' };
