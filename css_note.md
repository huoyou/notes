* 左右两边定宽，中间自适应
```html

<!-- float方法 -->
<div id="left">我是左边</div>
<div id="right">我是右边</div>
<div id="center">我是中间</div>
#left {
    width: 100px;
    float: left;
    background-color: red;
}
#right {
    width: 100px;
    float: right;
    background-color: pink;
}
#center {
    background-color: blue;
}

<!-- 绝对定位方法 -->
<div id="left">我是左边</div>
<div id="right">我是右边</div>
<div id="center">我是中间</div>
 #left {
    width: 100px;
    background-color: red;
    position: absolute;
    left: 0;
}
#right {
    width: 100px;
    background-color: pink;
    position: absolute;
    right: 0;
}
#center {
    background-color: blue;
}

<!-- flex -->
 <div style="display:flex;">
    <div id="left">我是左边</div>
    <div id="center">我是中间</div>
    <div id="right">我是右边</div>
</div>
#left {
    width: 100px;
    background-color: red;
}
#right {
    width: 100px;
    background-color: pink;
}
#center {
    background-color: blue;
    flex: 1;
}
```
* 对MVC、MVVM的理解

        MVC：是一种Web架构的模式。特点：把业务逻辑、模型数据、用户界面分离开来，让开发者将数据与表现解耦。
        MVC三要素：Model（数据模型）、View（视图）、Contorller（控制器）
        MVVM：是一种基于前端开发的架构模式。核心是提供对View 和 ViewModel 的双向数据绑定，View和Model之间并没有直接的联系，而是通过ViewModel进行交互，View的变动，自动反映在ViewModel上，反之亦然，这样就保证视图和数据的一致性。
        MVVM：View UI布局，展示数据、Model 管理数据、Controller 响应用户操作，并将 Model 更新到 View 上
* 跨域请求资源的方法有哪些

        （1）JSONP（jsonp 跨域 get 请求） ：这种方式主要是通过动态插入一个script标签。浏览器对script的资源引用没有同源限制，同时资源加载到页面后会立即执行（没有阻塞的情况下）。
        （2）proxy 代理：这种方式首先将请求发送给后台服务器，通过服务器来发送请求，然后将请求的结果传递给前端。
        （3）cors：这是现代浏览器支持跨域资源请求的一种方式。
        （4）XDR：这是IE8、IE9提供的一种跨域解决方案，功能较弱只支持get跟post请求，而且对于协议不同的跨域是无能为力的，比如在http协议下发送https请求。
* 页面导入样式时，使用link和@import有什么区别 

        （1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
        （2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
        （3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题; 

* html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

        (1)绘画 canvas;
        (2)用于媒介回放的 video 和 audio 元素;
        (3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
        (4)sessionStorage 的数据在浏览器关闭后自动删除;
        (5)语意化更好的内容元素，比如 article、footer、header、nav、section;
        (6)表单控件，calendar、date、time、email、url、search;
        (7)新的技术webworker, websocket, Geolocation;
