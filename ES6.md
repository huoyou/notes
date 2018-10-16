1. let 
* 声明的变量，只在let命令所在的代码块内有效。
```javascript
//使用var
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

//使用let
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```
* 声明的变量，只在let命令所在的代码块内有效。
* let不允许在相同作用域内，重复声明同一个变量。
```javascript
// 报错
function func() {
  let a = 10;
  var a = 1;
}

function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
2. const
* const声明一个只读的常量。一旦声明，常量的值就不能改变。
* 只声明不赋值，就会报错。
3. 模版字符串
```javascript
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
//写成
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
//模板字符串中嵌入变量，需要将变量名写在${}之中。
```
