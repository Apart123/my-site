module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // target: "http://test.my-site.com",
        target: "http://localhost:7001",
      }
    }
  },
  configureWebpack: require("./webpack.config"),
}