'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/open.min.js');
} else {
    module.exports = require('./cjs/open.js');
}
