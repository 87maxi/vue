module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://api:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }