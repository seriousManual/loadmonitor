var winston = require('winston');
var Splunkstorm = require('winston-splunkstorm');

var configuration = require('./configuration');

var transports = [];

if (configuration.logging.transport) {
    transports.push(new (winston.transports[configuration.logging.transport])(configuration.logging.options));
}

var logger = new (winston.Logger)({
    transports: transports
});

module.exports = logger;