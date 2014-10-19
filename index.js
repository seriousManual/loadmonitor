var configuration = require('./lib/configuration');
var logger = require('./lib/logger');
var Monitor = require('./lib/Monitor');

(new Monitor(configuration.interval, logger)).start();