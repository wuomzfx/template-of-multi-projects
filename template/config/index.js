// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var projectName = path.resolve(__dirname, '..').split(path.sep).pop()
var projectsRoot = path.resolve(__dirname, '../../../')

module.exports = {
  projectsRoot,
  build: {
    // 静态资源通过时间戳or哈希值更新，如果是时间戳，设置为后台输出的模版语言
    {{#if assetsTimestamp}}
    assetsVersionMode: '{{ timestampTemplate }}',
    {{else}}
    assetsVersionMode: 'hash',
    {{/if}}
    env: require('./prod.env'),
    index: `${projectsRoot}/dist/${projectName}/index.html`,
    assetsRoot: `${projectsRoot}/dist/`,
    assetsSubDirectory: `${projectName}/static`,
    assetsPublicPath: '{{ assetsPublicPath }}',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    assetsVersionMode: 'hash',
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
