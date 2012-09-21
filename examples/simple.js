var stats_page = require('..').listen(8745, 'localhost', function() {
  console.log('Listening on http://%s:%d', 'localhost', 8745);
});
