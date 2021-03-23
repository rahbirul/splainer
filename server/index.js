const http = require('http');
const  httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const ES_HOST = process.env.ELASTICSEARCH_HOST

const server = http.createServer(function(req, res){
  if (req.url.startsWith('/es_proxy') === true)
  {
    req.url = req.url.replace('/es_proxy', '');
    proxy.web(req, res, {target: ES_HOST});
  } else {
    res.writeHead(404, {"Content-Length": 0});
    res.end();
  }
});

console.log("listening on port 9001")
server.listen(9001);
