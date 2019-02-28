const path = require("path")
console.log(typeof __dirname)

module.exports = {
  target:"web",
  mode:"development",
  entry:path.resolve(__dirname,"./ES6/index.js"),
  output:{
    path:__dirname,
    filename:"index.js"
  },
  module:{
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:"babel-loader"
      }
    ]
  }
}