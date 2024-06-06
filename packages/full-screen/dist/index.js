'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/full-screen.min.js');
} else {
    module.exports = require('./cjs/full-screen.js');
}
