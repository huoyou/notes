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


