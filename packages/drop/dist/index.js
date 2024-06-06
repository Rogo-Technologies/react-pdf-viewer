'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/drop.min.js');
} else {
    module.exports = require('./cjs/drop.js');
}
