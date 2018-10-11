#### vue-cli中使用vuex的方式
一般来讲，我们都会采用vue-cli来进行实际的开发，在vue-cli中，开发和调用方式稍微不同。

        ├── index.html
        ├── main.js
        ├── components
        └── store
            ├── index.js          # 我们组装模块并导出 store 的地方
            ├── state.js          # 跟级别的 state
            ├── getters.js        # 跟级别的 getter
            ├── mutation-types.js # 根级别的mutations名称（官方推荐mutions方法名使用大写）
            ├── mutations.js      # 根级别的 mutation
            ├── actions.js        # 根级别的 action
            └── modules
                ├── m1.js         # 模块1
                └── m2.js         # 模块2

#### state.js示例：
```javascript
const state = {
    name: 'weish',
    age: 22
};

export default state;
```

#### getters.js示例（我们一般使用getters来获取state的状态，而不是直接使用state）：