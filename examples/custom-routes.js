var stats_page = require('..');

stats_page.add_route('/custom', function(cb) { cb(null, 'My Custom Route'); });

stats_page.start(8745, 'localhost');
