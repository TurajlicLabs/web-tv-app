module.exports = {
  devServer: {
    proxy: {
      '^/iptv': {
        target: 'https://iptv-org.github.io'
      }
    }
  }
}
