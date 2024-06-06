'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/locale-switcher.min.js');
} else {
    module.exports = require('./cjs/locale-switcher.js');
}
