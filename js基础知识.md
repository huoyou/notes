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
