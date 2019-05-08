1. 变量的声明let和const：

        let和const都是块级作用域，也就是只在临近的{}中有效
2. 模版字符串
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
3. includes(判断是否包含然后直接返回布尔值)  repeat(获取字符串重复n次)
```javascript
let str = 'hahay'
console.log(str.includes('y')) // true

let s = 'he'
console.log(s.repeat(3)) // 'hehehe'
```
4. 函数默认值
```javascript
function total(num = 200){
    console.log(num)//当num有值时，为传入参数值；当num无值时，默认为200
};
```
5. 箭头函数

        箭头函数最直观的三个特点：
        a.不需要function关键字来创建函数
        b.省略return关键字
        c.继承当前上下文的 this 关键字

```javascript
//例如：
[1,2,3].map( x => x + 1 )
//等同于：
[1,2,3].map((function(x){
    return x + 1
})
//箭头函数中的 this 指的不是window，是对象本身
function aa(){
    this.bb = 1;
    setTimeout(() => {
        this.bb++; //this指向aa
        console.log(this.bb);
    },500);
}
aa(); //2
```
6. 解构：解决一个个获取对象信息的繁琐问题
```javascript
//对象
const people = {
    name: 'lux',
    age: 20
}
const { name, age } = people
console.log(`${name} --- ${age}`)
//数组
const color = ['red', 'blue']
const [first, second] = color
console.log(first) //'red'
console.log(second) //'blue'

```
7. Spread Operator 展开运算符（也就是三个点 ... ）
* 组装数组或对象：
```javascript
//数组
const color = ['red', 'yellow'];
const colorful = [...color, 'green', 'pink'];
console.log(colorful); //[red, yellow, green, pink]

//创建新数组
const colorful1 = [...[], 'green', 'pink'];
console.log(colorful1);  //  ["green", "pink"]

//连接两个数组
var arr1 = [0,1,2];
var arr2 = [3,4,5];
arr1.push(...arr2);

//对象
const alp = { fist: 'a', second: 'b'}
const alphabets = { ...alp, third: 'c' }
console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"
```
* 获取数组或对象中的某几项：
```javascript
//数组
const number = [1,2,3,4,5]
const [first, ...rest] = number
console.log(rest) //2,3,4,5
//对象
const user = {
    username: 'lux',
    gender: 'female',
    age: 19,
    address: 'peking'
}
const { username, ...rest } = user
console.log(rest) //{"address": "peking", "age": 19, "gender": "female"}
```
* 组合新对象：
```javascript
const first = {
    a: 1,
    b: 2,
    c: 6,
}
const second = {
    c: 3,
    d: 4
}
const total = { ...first, ...second }
console.log(total) // { a: 1, b: 2, c: 3, d: 4 }
```
* 实例1(应用Math.max取出一个数组中的最大值)
```javascript
//ES5的写法
Math.max.apply(null,[14,3,77]);
//ES6写法
Math.max(...[14,3,77]);
//等同于
Math.max(14,3,77)
```
8. import 和 export：
```javascript
//a.js
var sex="boy";
var echo=function(value){
　　console.log(value)
}
export {sex,echo}  
//通过向大括号中添加sex，echo变量并且export输出，就可以将对应变量值以sex、echo变量标识符形式暴露给其他文件而被读取到
//不能写成export sex这样的方式，如果这样就相当于export "boy",外部文件就获取不到该文件的内部变量sex的值，因为没有对外输出变量接口,只是输出的字符串。

// b.js
// 通过import获取a.js文件的内部变量，{}括号内的变量来自于a.js文件export出的变量标识符。
import {sex,echo} from "./a.js" 
console.log(sex)   // boy
echo(sex) // boy
```
9. CLASS：
```javascript
class Animal {
    constructor(){
        console.log('我是一个动物');
    }
}

class Person extends Animal {
    constructor(){
    super();
        console.log('我是一个程序员');
    }
}
let aa = new Person();
```
9. includes  验证数组中是否存在某个元素，这样更加直观简单
```javascript
let arr = ['react', 'angular', 'vue'];
if (arr.includes('react'))
{
    console.log('React存在');
}
```
10. 指数运算符**

```javascript
console.log(7**3); //7的3次方
```
11. Object.values()遍历对象的属性值，无需使用使用属性名：
```javascript
// 不使用ES8
let obj = {a: 1, b: 2, c: 3};
Object.keys(obj).forEach((key) =>
{
    console.log(obj[key]); // 输出1, 2, 3
});
// 等同于
let obj = {a: 1, b: 2, c: 3}
Object.values(obj).forEach(value =>
{
    console.log(value); // 输出1, 2, 3
});

```
12. Object.entries()遍历对象的属性名和属性值：
```javascript
let obj = {a: 1, b: 2, c: 3};
Object.entries(obj).forEach(([key, value]) =>
{
    console.log(key + ": " + value); // 输出a: 1, b: 2, c: 3
})
```
13. Async/Await
```javascript
// 使用Promise
axios.get(`/q?query=${query}`)
    .then(response => response.data)
    .then(data =>
    {
        this.props.processfetchedData(data);
    })
    .catch(error => console.log(error));

// 使用Async/Await
async fetchData(query) =>
{
    try
    {
        const response = await axios.get(`/q?query=${query}`);
        const data = response.data;
        return data;
    }
    catch (error)
    {
        console.log(error)
    }
}
 
fetchData(query).then(data =>
{
    this.props.processfetchedData(data)
})

```
14. map用法
```javascript
    // 组合新数组
    var arr = [
        {
            'model': 'li',
            'fields':
            {
                "number": "TASK_20190422_006",
                "department": "产品技术中心"
            }   
        },
        {
            'model': 'zhao',
            'fields':
            {
                "number": "DS_20190401_001",
                "department": "联合利丰"
            }   
        }
    ]
    let data3 = arr.map(el => {
        let obj = {}
        obj = el.fields;
        obj.model = el.model;
        return obj;
    })
    console.log('---data3---', data3)  // [{'model': 'li', "number": "TASK_20190422_006","department": "产品技术中心"},{'model': 'zhao',"number": "DS_20190401_001","department": "联合利丰"}]
    // 抽取新数组
    let data4 = arr.map(_=>_.model);
    console.log('---data4---', data4)  //  ["li", "zhao"]

```
15. find && findIndex
```javascript
    // find
    var cc = [{name:'li',age:'18'},{name:'ls',age:'23'}]
    let aa = cc.find(el=>el.name == 'li')
    console.log(aa) //{name: "li", age: "18"}
    // findIndex
    var rr = [{name:'li',age:'18'},{name:'ls',age:'23'}]
    let tt = rr.findIndex(el=>el.name == 'ls')
    console.log(tt) // 1
```