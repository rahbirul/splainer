const http = require('http');
const  httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const ES_HOST = process.env.ELASTICSEARCH_HOST

const server = http.createServer(function(req, res){
  proxy.web(req, res, {target: ES_HOST})
});

console.log("listening on port 9001")
server.listen(9001);
