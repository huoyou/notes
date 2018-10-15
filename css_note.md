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