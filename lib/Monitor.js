var os = require('os');

var ptic = require('ptic');
var cpuu = require('cputilization');

function Monitor(interval, logger) {
    var that = this;

    this._interval = interval;
    this._logger = logger;

    this._ticker = new ptic(interval);

    this._ticker.on('tick', function() {
        var load = os.loadavg();
        var freeMem = os.freemem();

        cpuu(function(error, sample) {
            if (error) {
                console.log(error);
                return;
            }

            that._logger.info({
                app: 'loadMonitor',
                mod: 'loadMonitor',
                load1m: load[0],
                load10m: load[1],
                load15m: load[2],
                freeMem: freeMem,
                cpuUsage: sample.percentageBusy()
            });
        });
    })
}

Monitor.prototype.start = function() {
    this._ticker.start();
};

module.exports = Monitor;