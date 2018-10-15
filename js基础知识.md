* 对作用域上下文和this的理解，看下列代码：
```javascript
var User = {
 count: 1,
 getCount: function() {
  return this.count;
 }
};
console.log(User.getCount()); // what?
var func = User.getCount;
console.log(func()); // what?
// 问两处console输出什么？为什么？
// 答案:是1和undefined。
// func是在window的上下文中被执行的，所以不会访问到count属性。
```
* javascript的typeof返回哪些数据类型.

        string,boolean,number,undefined,function,object
* 例举3种强制类型转换和2种隐式类型转换?

        强制（parseInt,parseFloat,number）
        隐式（==  ===）
* IE和标准下有哪些兼容性的写法
```javascript
var ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
Var target = ev.srcElement||ev.target
```
* 事件委托是什么
        利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！       
* 看下面代码，给出输出结果。
```javascript
for(var i = 1; i <= 3; i++){  //建议使用let 可正常输出i的值
  setTimeout(function(){
      console.log(i);   
  },0); 
} 
//答案：4 4 4。
//原因：Javascript事件处理器在线程空闲之前不会运行。

//解决办法：加一层闭包，i以局部变量形式传递给内存函数    
for( var i=0; i<ps.length; i++ ) {       
    (function () {     
      var temp = i;//调用时局部变量     
      ps[i].onclick = function() {       
        alert(temp);       
      }     
    })();     
}
```
* Javascript的事件流模型都有什么?
        “事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
        “事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
        “DOM事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡
* 回答以下代码，alert的值分别是多少？
```javascript
<script>
     var a = 100;  
     function test(){  
    	alert(a);  
   	 a = 10;  //去掉了var 就变成定义了全局变量了
    	alert(a);  
}  
test();
alert(a);
</script>
//正确答案是： 100， 10， 10
```
* new操作符具体干了什么呢?
        1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
        2. 属性和方法被加入到 this 引用的对象中。
        3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。
* 希望获取到页面中所有的checkbox怎么做？(不使用第三方框架)
```javascript
var inputs = document.getElementsByTagName("input");//获取所有的input标签对象
var checkboxArray = [];//初始化空数组，用来存放checkbox对象。
for(var i=0;i<inputs.length;i++){
  var obj = inputs[i];
  if(obj.type=='checkbox'){
     checkboxArray.push(obj);
  }
}
```
* 写一个function，清除字符串前后的空格。（兼容所有浏览器）
```javascript
String.prototype.trim= function(){
    return this.replace(/^\s+/,"").replace(/\s+$/,"");
}
```
* Cookie在客户机上是如何存储的
        Cookies就是服务器暂存放在你的电脑里的文本文件，好让服务器用来辨认你的计算机。当你在浏览网站的时候，Web服务器会先送一小小资料放在你的计算机上，Cookies 会帮你在网站上所打的文字或是一些选择都记录下来。当下次你再访问同一个网站，Web服务器会先看看有没有它上次留下的Cookies资料，有的话，就会依据Cookie里的内容来判断使用者，送出特定的网页内容给你。
* 如何获取javascript三个数中的最大值和最小值？
```javascript
Math.max(a,b,c);//最大值
Math.min(a,b,c)//最小值
```
* javascript是面向对象的，怎么体现javascript的继承关系？
        使用prototype原型来实现。
* 程序中捕获异常的方法？
```javascript
try{
 
}catch(e){
 
}finally{
 
}
```
* Ajax原理
```javascript
//创建对象
var xhr = new XMLHttpRequest();
//打开请求
xhr.open('GET', 'example.txt', true);
//发送请求
xhr.send(); 
//接收响应
xhr.onreadystatechange =function(){}
//当readystate值从一个值变为另一个值时，都会触发readystatechange事件。
//当readystate==4时，表示已经接收到全部响应数据。
//当status ==200时，表示服务器成功返回页面和数据。
//如果(2)和(3)内容同时满足，则可以通过xhr.responseText，获得服务器返回的内容。
```
* js中的3种弹出式消息提醒（警告窗口，确认窗口，信息输入窗口）的命令式什么？
        alert
        confirm
        prompt
*  以下代码执行结果
```javascript
//第一种情况
var a=1;
function fn1(){
    alert(a);
    var a=2;
}
fn1(); // undefined
alert(a); // 1 (查找全局的a)
//第二种情况
var a=1;
function fn1(){
    alert(a);
    a=2;
}
fn1(); // 1
alert(a); // 2
//第三种情况
var a=1;
function fn1(a){
    alert(a); //参数实际上就是一个局部变量，可以理解成var a;
    a=2;
}
fn1(); // 1
alert(a); // 2
```
* 浏览器的滚动距离：
```javascript
//可视区域距离页面顶部的距离
scrollTop=document.documentElement.scrollTop||document.body.scrollTop
```
* 可视区的大小：
```javascript
window.innerHeight //可视区高度，包含滚动条宽度
window.innerWidth  //可视区宽度，包含滚动条宽度
document.documentElement.clientWidth //可视区宽度，不包含滚动条宽度
document.documentElement.clientHeight //可视区高度，不包含滚动条宽度
```
* 节点的种类有几种，分别是什么？
        元素节点：nodeType ===1;
        文本节点：nodeType ===3;
        属性节点：nodeType ===2;
* innerHTML和outerHTML的区别
        innerHTML(元素内包含的内容）
        outerHTML(自己以及元素内的内容）
* offsetWidth offsetHeight和clientWidth clientHeight的区别
        (1)offsetWidth （content宽度+padding宽度+border宽度）
        (2)offsetHeight（content高度+padding高度+border高度）
        (3)clientWidth（content宽度+padding宽度）
        (4)clientHeight（content高度+padding高度）
* 闭包的好处
        (1)希望一个变量长期驻扎在内存当中(不被垃圾回收机制回收)
        (2)避免全局变量的污染
        (3)私有成员的存在
        (4)安全性提高
* JS设置css样式的几种方式
```javascript
/* 1.直接设置style属性 */
element.style.height = '100px';
/* 2.直接设置属性 */
element.setAttribute('height', '100px');
/* 3.使用setAttribute设置style属性 */
element.setAttribute('style', 'height: 100px !important');
/* 4.使用setProperty设置属性，通过第三个参数设置important */
element.style.setProperty('height', '300px', 'important');
/* 5.设置cssText */
element.style.cssText += 'height: 100px !important';
```
* 阻止默认行为
```javascript
function stopDefault( e ) {
    // 阻止默认浏览器动作(W3C)
    if ( e && e.preventDefault ) {
        e.preventDefault();
    } else {
        // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
}
```
* 阻止冒泡
```javascript
function stopBubble(e) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if ( e && e.stopPropagation ) {
        // 因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        // 否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}
```
* 数组去重
```javascript
function uniqu3 (arr) {
    return [... new Set(arr)];
}
```
* 找出数组中的最大值
```javascript
// reduce
var arr = [6, 4, 1, 8, 2, 11, 3];
function max (prev, next) {
    return Math.max(prev, next)
}
console.log(arr.reduce(max));

// ES6
function max (arr) {
    return Math.max(...arr);
}
console.log(max(arr));
```
* 