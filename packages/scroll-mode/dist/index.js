'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/scroll-mode.min.js');
} else {
    module.exports = require('./cjs/scroll-mode.js');
}
