var http = require('http'),
    router = new require('routes').Router(),
    routes = require('./routes')(router),
    server = http.createServer(on_request);

module.exports = server;
module.exports.router = router;

/**
 * Request callback for the server
 */
function on_request(req, res) {
  var route = router.match(req.url);

  // Route not found
  if (!route) {
    res.statusCode = 404;
    return res.end();
  }

  // Route it
  return route.fn(req, res, route);
}
