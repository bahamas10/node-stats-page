var routes = {
      'process': require('./process')
    };


module.exports = function(url) {
  var parts = url.split('/').slice(1),
      route = routes[parts[0]];

  // Index page
  if (!parts[0]) return function(cb) { cb(null, Object.keys(routes)); };

  // Not routable
  if (!route) return undefined;

  return route(parts.slice(1));
};
