var routes = {
      'arch'        : process.arch,
      'argv'        : process.argv,
      'cwd'         : process.cwd,
      'env'         : process.env,
      'execPath'    : process.execPath,
      'features'    : process.features,
      'getgid'      : process.getgid,
      'getuid'      : process.getuid,
      'memoryUsage' : process.memoryUsage,
      'pid'         : process.pid,
      'platform'    : process.platform,
      'uptime'      : process.uptime,
      'uvCounters'  : process.uvCounters,
      'version'     : process.version,
      'versions'    : process.versions,
    };

module.exports = function(req, res, route) {
  if (!route.params.type) return res.end(JSON.stringify(Object.keys(routes)));

  if (!routes[route.params.type]) return res.end();

  var func = routes[route.params.type],
      value = func;
  if (typeof func === 'function') {
    value = func();
  }

  res.end(JSON.stringify(value));
};
