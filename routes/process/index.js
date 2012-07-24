var routes = {
      'arch'        : function(cb) { cb(null, process.arch); },
      'argv'        : function(cb) { cb(null, process.argv); },
      'cwd'         : function(cb) { cb(null, process.cwd()); },
      'env'         : function(cb) { cb(null, process.env); },
      'execPath'    : function(cb) { cb(null, process.execPath); },
      'features'    : function(cb) { cb(null, process.features); },
      'getgid'      : function(cb) { cb(null, process.getgid()); },
      'getuid'      : function(cb) { cb(null, process.getuid()); },
      'memoryUsage' : function(cb) { cb(null, process.memoryUsage()); },
      'pid'         : function(cb) { cb(null, process.pid); },
      'platform'    : function(cb) { cb(null, process.platform); },
      'uptime'      : function(cb) { cb(null, process.uptime()); },
      'uvCounters'  : function(cb) { cb(null, process.uvCounters()); },
      'version'     : function(cb) { cb(null, process.version); },
      'versions'    : function(cb) { cb(null, process.versions); },
    };

module.exports = function(parts) {
  if (!parts[0]) return function(cb) { cb(null, Object.keys(routes)); };
  return routes[parts[0]];
};
