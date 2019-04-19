#### 安装
1. npm install wepy-cli -g
2. wepy init standard wepy-demo
3. cd wepy-demo
4. npm install
5. wepy build --watch 此时在项目目录下生成一个dist文件夹，使用微信开发者工具打开dist文件夹即可预览效果 在微信开发者工具中关闭es6转es5选项，否则后报错
#### 注意点
1. this.apply()使用场景：
* 不过有个前提，method里面的方法是不用这个的，但methods里面只能放bindtap这类方法，所以你自己定义的其他方法，或者写在onshow里面，就必须得用this.apply()。 
* 异步更新数据 
* 手动刷新DOM
* PS：对于性能要求较高的应用，不要频繁的调用$apply()更新DOM，可以根据实际情况更新父组件向子组件传递数据，通过props的方式传递
* 如果需要传递动态数据，加上.sync的修饰符就可以解决（:prop.snyc='item'）
* 如果需要子组件数据同步到父组件，需要在定义props的时候设置twoWay:true
* 所有异步数据传递必须用$apply，同步的话才能使用.sync

2. this 运用
        小程序里修改data 里面的属性或者赋值都需要利用this.setdata()而wepy 基本就是利用this.属性即可。如果是异步返回或者更新dom需要this.$apply()触发脏值检测

3. 页面跳转
* navigateTo() 和 redirectTo() 的差别。
        1.navigateTo()保留当前页面，跳转到应用内的某个页面(即：显示顶部导航栏左上角返回按钮，可以有返回路径）
        2.redirectTo()关闭当前页面，跳转到应用内的某个页面（即：不显示左上角返回按钮，如需要返回在页面内自己添加按钮写路径或者利用wx.navigateBack()和 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
* 简单来说如果你需要tabbar有返回就用navigateTo，不需要就用redirectTo
* 只能用 switchTab() 跳转到 tabbar 页面
#### 文件上传
1. 上传文件没有传统html中的文件域(<input type="file"/>)，要想上传文件只能使用API： uploadFile()
#### mixin
1. wepy的mixin，与vue中的mixin执行顺序相反
* wepy中，会先执行组件自身的，再执行mixin中的
* vue中对于钩子函数，会先执行mixin中的，再执行组件自身的；vue中methods如果和mixin同名，那么只会执行自身的方法
#### arrayBuffer和base64互转
1. wx.arrayBufferToBase64(arrayBuffer)
2. wx.base64ToArrayBuffer(base64)
#### 同名组件共享同一实例及数据
1. 循环渲染组件时，容易出现组件数据相互污染。可以用最外层的组件监听事件冒泡以修改数据，同时触发事件的组件用setTimeout包裹，保证执行顺序。
#### 
