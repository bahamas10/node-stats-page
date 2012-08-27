var routes = {
      'ping'    : require('./ping'),
      'process' : require('./process'),
      'stats'   : require('./stats')
    };


module.exports = function(router) {
  router.addRoute('/', all);

  Object.keys(routes).forEach(function(route) {
    router.addRoute('/' + route + '/:type?', routes[route]);
  });
};

function all(req, res) {
  res.end(JSON.stringify(Object.keys(routes)));
}
