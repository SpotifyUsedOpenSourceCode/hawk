'use strict';

// Export sub-modules

exports.sntp = require('sntp');

exports.server = require('./server');

exports.client = require('./client');

exports.crypto = require('./crypto');

exports.utils = require('./utils');


exports.uri = {
    authenticate: exports.server.authenticateBewit,
    getBewit: exports.client.getBewit
};
