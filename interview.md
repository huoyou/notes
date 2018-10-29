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



