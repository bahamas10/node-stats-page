Stats Server for Node Applications
==================================

Create a /stats page http-server for a server application

What this means is make useful application information available via http

Usage
-----

``` js
var stats_page = require('stats-page');
stats_page.start(port[, host]);
```

Example
-------

To create a stats server for your application use the following code

``` js
var stats_page = require('stats-page');
stats_page.start(8745);
```

This will fire up a stats server on port 8745 that you can query


    $ curl -sS localhost:8745/ | json

``` json
[
  "process"
]
```

This returns the next route you can query

    $ curl -sS localhost:8745/process | json

``` json
[
  "argv",
  "cwd",
  "env",
  "execPath",
  "features",
  "getgid",
  "getuid",
  "memoryUsage",
  "pid",
  "platform",
  "uptime",
  "uvCounters",
  "version",
  "versions"
]
```

Then drill in further to get some meaningful information

    $ curl -sS localhost:8745/process/argv | json

``` json
[
  "node",
  "/Users/dave/dev/node-stats-page/examples/simple.js"
]
```

    $ curl -sS localhost:8745/process/memoryUsage | json

``` json
{
  "rss": 14368768,
  "heapTotal": 5343936,
  "heapUsed": 2799240
}
```

    $ curl -sS localhost:8745/process/uptime | json
    32
    $ curl -sS localhost:8745/process/version | json
    v0.6.15

This provides a lot of information you can gather about your app while it
is running.  You can use this for alerting, graphing, etc.

To disable the server for whatever reason, you simply invoke the `close` method

``` js
stats_page.close();
```

**NOTE:** stats-server will listen on `0.0.0.0` by default (as does `http.createServer`),
you can specify a second argument to the `start` method of 'localhost' to restrict
access.

Customization
-------------

You will no doubt have information specific to your app that you would like to
expose.  You can add your own routes using the `add\_route` function

``` js
stats_page.add_route('/custom', function(cb) {
  cb(null, 'My Custom Route');
});
```

then when you query

    curl -sS localhost:8745/custom | json
    My Custom Route

you will get your data

The first argument is the url path, and the second argument is a function to run
when the url is queried.  The function takes one argument, a callback to run
with a possible error, and data to send to the user (it will be JSON.stringifed
for you).


Install
-------

    npm install stats-page


License
-------

MIT Licensed
