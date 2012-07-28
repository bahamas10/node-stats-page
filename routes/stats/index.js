module.exports = function(parts) {
  return function(cb) {
    var stats = {
      'arch'        : process.arch,
      'argv'        : process.argv,
      'cwd'         : process.cwd(),
      'env'         : process.env,
      'execPath'    : process.execPath,
      'features'    : process.features,
      'getgid'      : process.getgid(),
      'getuid'      : process.getuid(),
      'memoryUsage' : process.memoryUsage(),
      'pid'         : process.pid,
      'platform'    : process.platform,
      'uptime'      : process.uptime(),
      'uvCounters'  : process.uvCounters(),
      'version'     : process.version,
      'versions'    : process.versions
    };
    cb(null, stats);
  };
};
