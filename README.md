# 自动用svg生成iconfont字体图标，支持热更新

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report

## SVG修改
webpack 第8行
var dir = 'src/iconfont'
webpack37行
plugins: [
    new WebpackIconfontPluginNodejs({
      fontName: 'my-icons',
      cssPrefix: 'ico',
      svgs: path.join(dir, 'svgs/*.svg'),
      // template: path.join(dir, 'css.njk'),
      fontsOutput: path.join(dir, 'fonts/'),
      cssOutput: path.join(dir, 'fonts/font.css'),
      htmlOutput: path.join(dir, 'fonts/_font-preview.html'),
      jsOutput: path.join(dir, 'fonts/fonts.js'),
      // formats: ['ttf', 'woff', 'svg'],
    }),
],
## css字体图片CSS文件导入
main.js第6行
import './iconfont/fonts/font.css'
