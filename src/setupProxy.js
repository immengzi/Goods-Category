const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://file-1309028215.cos.ap-nanjing.myqcloud.com',
            changeOrigin: true,
        })
    );
};