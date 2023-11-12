const {src, dest, series} = require("gulp")
const webpack = require("webpack")
const wpConfig = require("./webpack.config.js")

const webpackCompiler = webpack(wpConfig)

const bundle = done => {
  webpackCompiler.run((err, stats) => {
    if(err) console.log(err)
    console.log(stats.toString({colors: true}))
  })
  done()
}

const buildCSS = () => (
  src("./src/index.css")
  .pipe(require("gulp-postcss")())
  .pipe(require("gulp-replace")("../public/", "./"))
  .pipe(dest("./dist"))
)

module.exports.default = series(bundle, buildCSS)