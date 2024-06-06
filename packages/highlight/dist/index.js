'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/highlight.min.js');
} else {
    module.exports = require('./cjs/highlight.js');
}
