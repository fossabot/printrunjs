module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      // mark SerialPort as external because it cannot run in the browser
      externals: ['serialport']
    }
  }
}
