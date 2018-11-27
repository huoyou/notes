1. 安装node.js环境
2. npm install -g weex-toolkit
3. weex create awesome-app
4. cd awesome-app
5. npm install
6. npm i weex-ui@latest -S
7. npm i babel-plugin-component babel-preset-stage-0 -D
8. 同时修改.babelrc如下
```javascript
{
  "presets": ["es2015", "stage-0"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "weex-ui",
        "libDir": "packages",
        "style": false
      }
    ]
  ]
}
```
9. npm start
#### vue中使用vue
1. 安装node-sass 和 sass-loader
```jvascript
npm i node-sass sass-loader --save-dev
```
2. 打开webpack.base.config.js在loaders里面加上
```javascript
  {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
  },   
```
3. vue文件中引用
```jvascript
<style lang="scss" scoped="" type="text/css"></style>   
@import "../css/ff.scss";
```
#### win10系统下报错处理
1. error MSB4132: 无法识别工具版本“2.0”。可用的工具版本为 "4.0"。
```node
npm config set msvs_version 2012 --global
```