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
安装插件
1）npm install webpack-iconfont-plugin-nodejs --save
2）webpack.base.conf.js 第7、8行

3）webpack.base.conf.js第27行
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
4）新建存放SVG文件夹src/inconfont/svgs
5）css字体图片CSS文件导入
main.js第6行
import './iconfont/fonts/font.css'



##vconsole 调试
1）安装 npm install vconsole-webpack-plugin --save-dev
2）webpack.dev.conf.js第15行和第51行

##按需加载
在router/index.js导入路由页面用require.ensure导入 最后的一个参数'chunkname1'是用来标识是否放在同一个文件（名称一样的路由放同一JS）
const home = r => require.ensure([], () => r(require('@/components/home.vue')), 'chunkname1')

##POSTCSS
1)安装所需的POSTCSS插件
npm install autoprefixer postcss-pxtorem --save
2）修改.postcssrc.js文件把所需的插件放进去
3）在index.html加入自适应的JS
<script type="text/javascript">
      (function(doc, win) {
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
          var recalc = function() {
              var docEl = doc.documentElement,
                  clientWidth = docEl.clientWidth;
              docEl.style.fontSize = 200 * (clientWidth / 750) + 'px';
          }
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
      </script>
 4)     
 ##VUEX
 1）安装npm install --save vuex
 2)安装 Vue.js devtools 谷歌插件（可不安装，为了方便调试）
 
 vuex
 state：存储状态（变量）
getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
actions：异步操作。在组件中使用是$store.dispath('')
modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。