var stats_page = require('..')(8745, 'localhost', function() {
  console.log('Listening on http://%s:%d', 'localhost', 8745);
});

stats_page.addRoute('/custom', function(req, res) {
  res.end('My Custom Route');
});
