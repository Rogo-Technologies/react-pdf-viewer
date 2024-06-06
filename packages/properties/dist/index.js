'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/properties.min.js');
} else {
    module.exports = require('./cjs/properties.js');
}
