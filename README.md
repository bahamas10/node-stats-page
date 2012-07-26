Stats Server for Node Applications
==================================

Create a /stats page http-server for a server application

Fire up an http server that you can query for stats on a running node process

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
  "ping",
  "process"
]
```

This returns the next route you can query

    $ curl -sS localhost:8745/process | json

``` json
[
  "arch",
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
    $ curl -sS localhost:8745/ping | json
    pong

To disable the server for whatever reason, you simply invoke the `close` method

``` js
stats_page.close();
```

**NOTE:** stats-page will listen on `0.0.0.0` by default (as does `http.createServer`),
you can specify a second argument to the `start` method of 'localhost' to restrict
access.

Customization
-------------

You will no doubt have information specific to your app that you would like to
expose.  You can add your own routes using the `add_route` function

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

FAQ
---

### Are there any other routes than /process ?

`process` had the easiest stats to expose.  If you have any more stats that are generic
enough to expose fork and make a pull request.

### Does this work with connect/middle-ware/express/some framework?

I don't know.

License
-------

MIT Licensed
