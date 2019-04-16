#### 安装
1. npm install wepy-cli -g
2. wepy init standard wepy-demo
3. cd wepy-demo
4. npm install
5. wepy build --watch
此时在项目目录下生成一个dist文件夹，使用微信开发者工具打开dist文件夹即可预览效果
在微信开发者工具中关闭es6转es5选项，否则后报错
#### 注意点
1.this.$apply()使用场景：
 // 不过有个前提，method里面的方法是不用这个的，但methods里面只能放bindtap这类方法，所以你自己定义的其他方法，或者写在onshow里面，就必须得用this.$apply()。
 // 异步更新数据
 // 手动刷新DOM
