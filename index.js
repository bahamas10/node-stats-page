var http = require('http'),
    router = new require('routes').Router(),
    routes = require('./routes')(router),
    server;

module.exports = start;

/**
 * Start the webserver on a given host and port
 */
function start(port, host) {
  port = port || 8745;
  server = http.createServer(on_request).listen(port, host);
  return router;
}

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
