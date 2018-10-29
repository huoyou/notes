* 判断JS数据类型的四种方法
```javascript
// typeof
弊端：[],{},null结果都是object;

// Object.prototype.toString.call
Object.prototype.toString.call([1,2,3]) //[object Array]

// instanceof
[] instanceof Object //true
[] instanceof Array //true
[] instanceof Number //false

// constructor
true.constructor == Boolean //true
new Number(1).constructor == Number //true
''.constructor == String //true
new Array().constructor == Array //true
new Object().constructor == Object //true
new Object().constructor == Array //false
```
* v-model
```javascript
<input v-model="message">
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```
* Vue和React的区别

        相同点：
        1.都支持服务器端渲染

        2.都有Virtual DOM,组件化开发,通过props参数进行父子组件数据的传递,都实现webComponent规范

        3.数据驱动视图

        4.都有支持native的方案,React的React native,Vue的weex

        5.都有管理状态，React有redux,Vue有自己的Vuex（自适应vue，量身定做）

        不同点：
        1.React严格上只针对MVC的view层,Vue则是MVVM模式

        2.virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制

        3.组件写法不一样, React推荐的做法是 JSX + inline style, 也就是把HTML和CSS全都写进JavaScript了,即'all in js';Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,jd写在同一个文件;

        4.数据绑定: vue实现了数据的双向绑定,react数据流动是单向的

        5.state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理；

* gulp和webpack区别

        1.gulp是一种工具，我们可以用它来优化前端的工作流程，比如自动刷新页面、combo、压缩css、js、编译less等等。具体体现为：在gulp的配置文件中书写一个个的task，webpack则是一种打包工具，或者说是一种模块化解决方案，实际上很大一部分人刚开始使用webpack的方式就是通过gulp-webpack这个插件，写好task来使用webpack对前端的一些文件进行打包;

        2.gulp的处理任务需要自己去写，webpack则有现成的解决方案，只需要在webpack.config.js配置好即可;
* 防止重复发送Ajax请求

        1.用户点击之后按钮disabled;
        2.函数节流
        3.abort掉上一个请求。
* 事件模型

        1.事件捕获阶段(capturing phase)。事件从document一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。
        2.事件处理阶段(target phase)。事件到达目标元素, 触发目标元素的监听函数。
        3.事件冒泡阶段(bubbling phase)。事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。
* 什么是原型链

        每一个对象都会在内部链接到另一个对象(该对象的原型对象)，该对象有一个原型prototype，当访问对象的属性或是方法的时候，不仅仅会在原对象上查找，还会顺着原型链在原型对象的原型链上查找，直到查到null(所有原型链的顶层)为止。原型是JavaScript实现继承的基础，new关键字做的主要的事情就是将实例对象的__proto__属性指向原型对象的prototype。
* 图片懒加载与预加载

        1.图片懒加载的原理就是暂时不设置图片的src属性，而是将图片的url隐藏起来，比如先写在data-src里面，等某些事件触发的时候(比如滚动到底部，点击加载图片)再将图片真实的url放进src属性里面，从而实现图片的延迟加载
        2.图片预加载，是指在一些需要展示大量图片的网站，实现图片的提前加载。从而提升用户体验。常用的方式有两种，一种是隐藏在css的background的url属性里面，一种是通过javascript的Image对象设置实例对象的src属性实现图片的预加载
* ES6常用特性

        变量定义(let和const,可变与不可变，const定义对象的特殊情况)
        解构赋值
        模板字符串
        数组新API(例：Array.from(),entries(),values(),keys())
        箭头函数(rest参数，扩展运算符，::绑定this)
        Set和Map数据结构(set实例成员值唯一存储key值，map实例存储键值对(key-value))
        Promise对象(前端异步解决方案进化史，generator函数，async函数)
        Class语法糖(super关键字)
* XSS与CSRF介绍

        1.XSS是一种跨站脚本攻击，是属于代码注入的一种，攻击者通过将代码注入网页中，其他用户看到会受到影响(代码内容有请求外部服务器);
        2.CSRF是一种跨站请求伪造，冒充用户发起请求，完成一些违背用户请求的行为(删帖，改密码，发邮件，发帖等)
        防御方法举例:
        1.对一些关键字和特殊字符进行过滤(<>,?,script等)，或对用户输入内容进行URL编码(encodeURIComponent);
        2.Cookie不要存放用户名和密码，对cookie信息进行MD5等算法散列存放，必要时可以将IP和cookie绑定;
* JavaScript的内存生命周期
```javascript
var a = 20;  // 在内存中给数值变量分配空间
alert(a + 100);  // 使用内存
a = null; // 使用完毕之后，释放内存空间
//JavaScript有自动垃圾收集机制，那么这个自动垃圾收集机制的原理是什么呢？其实很简单，就是找出那些不再继续使用的值，然后释放其占用的内存。垃圾收集器会每隔固定的时间段就执行一次释放操作。
//在JavaScript中，最常用的是通过标记清除的算法来找到哪些对象是不再继续使用的，因此a = null其实仅仅只是做了一个释放引用的操作，让 a 原本对应的值失去引用，脱离执行环境，这个值会在下一次垃圾收集器执行操作时被找到并释放。而在适当的时候解除引用，是为页面获得更好性能的一个重要方式。
//在局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。但是全局变量什么时候需要自动释放内存空间则很难判断，因此在我们的开发中，需要尽量避免使用全局变量。
```
* 堆(heap)，栈(stack)与队列(queue)
1.栈数据结构
栈空间先进后出，后进先出（基础数据类型：Undefined、Null、Boolean、Number、String）
2.堆数据结构
堆数据结构是一种树状结构。它的存取数据的方式，则与书架与书非常相似。（引用类型：Func,Arr,Obj）
3.队列
先进先出。在JavaScript中，理解队列数据结构的目的主要是为了清晰的明白事件循环（Event Loop）的机制到底是怎么回事。























































