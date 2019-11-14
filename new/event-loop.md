* ![实例与实例原型的关系图](https://github.com/huoyou/notes/blob/master/imgs/eventLoop.webp)
// [参考来源](https://mp.weixin.qq.com/s/nQgsEQorv00fr4XqU764bA "https://mp.weixin.qq.com/s/nQgsEQorv00fr4XqU764bA ")
// 因为我们仅仅需要记住几个 MicroTask 即可，排除法！别的都是 MacroTask。MicroTask 包括：Process.nextTick、Promise.then catch finally(注意我不是说 Promise)、MutationObserver。
```javascript
console.log(1);
setTimeout(function(){
    console.log(2)
    process.nextTick(function(){
        console.log(3)
    })
    new Promise(function(resolve){
        console.log(4)
        resolve();
    }).then(function() {
      console.log(5)
    })
})
process.nextTick(function(){
    console.log(6)
})
new Promise(function(resolve){
    console.log(7)
    resolve();
}).then(function() {
  console.log(8)
})
setTimeout(function(){
    console.log(9)
    process.nextTick(function(){
        console.log(10)
    })
    new Promise(function(resolve){
        console.log(11)
        resolve();
    }).then(function() {
      console.log(12)
    })
})
// 1,7,6,8,2,4,3,5,9,11,10,12
```
```javascript
setImmediate(function(){
  console.log(1);
},0);
setTimeout(function(){
  console.log(2);
},0);
new Promise(function(resolve){
  console.log(3);
  resolve();
  console.log(4);
}).then(function(){
  console.log(5);
});
console.log(6);
process.nextTick(function(){
  console.log(7);
});
console.log(8);
// 3 4 6 8 7 5 2 1
// micro-task   优先级 process.nextTick 高于 Promise.then
// macro-task   优先级 setTimeout 高于 setImmediate
```
