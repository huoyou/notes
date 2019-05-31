#### vue引用vant转换单位
1. npm install px2rem-loader --save-dev 安装插件
2. 然后在vue-cli项目找到built/utils文件，在里面加上以下代码：
```javascript
var px2remLoader = {
  loader: 'px2rem-loader',
  options: {
    remUnit: 100     //根据common.js换算单位具体计算
  }
}
```
然后在generateLoaders函数里面插入px2remLoader ，再重启 npm run dev服务即可。
```javascript
 function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader,px2remLoader] : [cssLoader]
```
3. 内存泄漏
```javascript
 // 全局安装increase-memory-limit
 npm install -g increase-memory-limit
 // 进入工程目录，执行：
 increase-memory-limit
 // 打包时 cli2  (不适用cli3)
 "build": "node --max_old_space_size=4096 build/build.js"
 ```
