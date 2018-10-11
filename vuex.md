#### vue-cli中使用vuex的方式
一般来讲，我们都会采用vue-cli来进行实际的开发，在vue-cli中，开发和调用方式稍微不同。
```javascript
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
```

#### state.js示例：
```javascript
const state = {
    name: 'weish',
    age: 22
};

export default state;
```

#### getters.js示例（我们一般使用getters来获取state的状态，而不是直接使用state）：
```javascript
export const name = (state) => {
    return state.name;
}

export const age = (state) => {
    return state.age
}

export const other = (state) => {
    return `My name is ${state.name}, I am ${state.age}.`;
}
```

#### mutation-type.js示例（我们会将所有mutations的函数名放在这个文件里）：
```javascript
export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
```

#### mutations.js示例：
```javascript
import * as types from './mutation-type.js';

export default {
    [types.SET_NAME](state, name) {
        state.name = name;
    },
    [types.SET_AGE](state, age) {
        state.age = age;
    }
};
```

#### actions.js示例（异步操作、多个commit时）：
```javascript
import * as types from './mutation-type.js';

export default {
    nameAsyn({commit}, {age, name}) {
        commit(types.SET_NAME, name);
        commit(types.SET_AGE, age);
    }
};
```

#### modules--m1.js示例（如果不是很复杂的应用，一般来讲是不会分模块的）：
```javascript
export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
};
```

#### ndex.js示例（组装vuex）：
```javascript
import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import m1 from './modules/m1.js';
import m2 from './modules/m2.js';
import createLogger from 'vuex/dist/logger'; // 修改日志

vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false
export default new vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        m1,
        m2
    },
    plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
});
```

#### 最后将store实例挂载到main.js里面的vue上去就行了
```javascript
import store from './store/index.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
```

#### 在vue组件中使用时，我们通常会使用mapGetters、mapActions、mapMutations，然后就可以按照vue调用methods和computed的方式去调用这些变量或函数，示例如下：
```javascript
import {mapGetters, mapMutations, mapActions} from 'vuex';

/* 只写组件中的script部分 */
export default {
    computed: {
        ...mapGetters([
            'name',
            'age'
        ])
    },
    methods: {
        ...mapMutations({
            setName: 'SET_NAME',
            setAge: 'SET_AGE'
        }),
        ...mapActions([
            nameAsyn
        ])
    }
};
```