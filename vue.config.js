module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-weather/" : "/",
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV !== "production"
  },
  configureWebpack: {
    devtool: "source-map"
  }
};
