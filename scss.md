#### mixin
```jvascript
@mixin bg_image($url) {
    background-image: url('../imgs/'+$url + '@2x.png');
    @media (-webkit-min-device-pixel-radio:3),(min-device-pixel-radio:3) {
        background-image: url('../imgs/'+ $url + '@3x.png');
    }
}

```
#### vue中使用saa
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