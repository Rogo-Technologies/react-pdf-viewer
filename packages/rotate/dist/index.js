'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/rotate.min.js');
} else {
    module.exports = require('./cjs/rotate.js');
}
