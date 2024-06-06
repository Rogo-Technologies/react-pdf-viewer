'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/bookmark.min.js');
} else {
    module.exports = require('./cjs/bookmark.js');
}
