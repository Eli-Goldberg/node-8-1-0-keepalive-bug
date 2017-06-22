# Node 8.1.0 Keepalive bug
Node 8.1.0 has an http bug - that kills connections when keepAlive is sent from the client.
This causes Chrome browser to retry POST requests (invisible in Dev-Tools network section).
Check this out by running the example (make sure you're running with Node 8.1.0):

> npm i
> npm start

Then surf: http://localhost:9090

UPDATE: this has been fixed in node 8.1.2
