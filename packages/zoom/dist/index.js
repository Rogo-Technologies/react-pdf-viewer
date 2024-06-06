'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/zoom.min.js');
} else {
    module.exports = require('./cjs/zoom.js');
}
