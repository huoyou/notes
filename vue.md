1. 内存泄漏
```javascript
 // 全局安装increase-memory-limit
 npm install -g increase-memory-limit
 // 进入工程目录，执行：
 increase-memory-limit
 // 打包时 cli2  (不适用cli3)
 "build": "node --max_old_space_size=4096 build/build.js"
 ```
