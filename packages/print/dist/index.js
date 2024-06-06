'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/print.min.js');
} else {
    module.exports = require('./cjs/print.js');
}
