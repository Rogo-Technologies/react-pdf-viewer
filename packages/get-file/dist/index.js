'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/get-file.min.js');
} else {
    module.exports = require('./cjs/get-file.js');
}
