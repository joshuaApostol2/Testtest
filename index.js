const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://digi.wisp.uno:13373/' });
});
server.listen(8080, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
