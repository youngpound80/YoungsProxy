const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/proxy', createProxyMiddleware({
  router: (req) => req.query.url,
  changeOrigin: true,
}));

app.get('/', (req, res) => {
  res.send('Proxy is running!');
});

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});