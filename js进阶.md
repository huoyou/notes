1. 原型-原型链
* ![实例与实例原型的关系图](https://github.com/huoyou/notes/blob/master/imgs/prototype5.png)
* 实例对象的隐式原型始终指向构造函数的显式原型；
*  只有函数才拥有prototype属性，每一个对象都拥有__proto__属性；
*  每一个原型对象都有一个constructor属性指向它们的构造函数；
*  原型链的链接依赖__proto__这个指针，每一级的原型对象都依靠这个指针指向上一级原型对象；
*  原型链的尽头始终是null；
*  原生对象充当两面派，既是构造函数函数，也是对象；
```javascript
function Person() {
}

const person = new Person();

console.log(Person.prototype === person.__proto__);                     // true
console.log(person.constructor === Person);                            // true
console.log(Person.prototype.__proto__=== Object.prototype);        // true
console.log(Object.prototype.__proto__ === null);                 // true
console.log(Object.constructor === Function);                     // true
``` 
2. 词法作用域(静态作用域)和动态作用域
* JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了
* 而与词法作用域相对的是动态作用域，动态作用域是在函数调用的时候才决定的
```javascript
var value = 1;
function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar(); // 1
```
3. 执行上下文栈
```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // "local scope"
// 模拟上下文栈
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
```
```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
// 模拟上下文栈
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```
 
