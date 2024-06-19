const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/goods',
        createProxyMiddleware({
            target: 'https://file.mengzi.li',
            changeOrigin: true,
        })
    );
};