var http = require('http'),
    route = require('./routes'),
    custom_routes = {},
    server;

module.exports.start = start;
module.exports.stop = stop;
module.exports.add_route = add_route;

/**
 * Start the webserver on a given host and port
 */
function start(port, host) {
  port = port || 8745;
  if (!server) server = http.createServer(on_request).listen(port, host);
}

/**
 * Stop the webserver
 */
function stop() {
  if (server) server.close();
  server = undefined;
}

/**
 * Add a custom route
 */
function add_route(url, func) {
  custom_routes[url] = func;
}

/**
 * Request callback for the server
 */
function on_request(req, res) {
  var func = custom_routes[req.url] || route(req.url);

  if (typeof func !== 'function')
    return res.end(JSON.stringify({'error': 'Route not found'}));

  func(function(err, out) {
    if (err) {
      res.write(JSON.stringify({'error':err}));
    } else {
      res.write(JSON.stringify(out));
    }
    res.end();
  });
}
