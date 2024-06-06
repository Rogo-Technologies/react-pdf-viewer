'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/attachment.min.js');
} else {
    module.exports = require('./cjs/attachment.js');
}
