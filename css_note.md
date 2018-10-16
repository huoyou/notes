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
