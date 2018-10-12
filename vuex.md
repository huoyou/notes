#### 状态管理模式、集中式存储管理 一听就很高大上，蛮吓人的。在我看来 vuex 就是把需要共享的变量全部存储在一个对象里面，然后将这个对象放在顶层组件中供其他组件使用。这么说吧，将vue想作是一个js文件、组件是函数，那么vuex就是一个全局变量，只是这个“全局变量”包含了一些特定的规则而已。
```javascript
const store = new Vuex.Store({
    state: {
        name: 'weish',
        age: 22
    },
    getters: {
        personInfo(state) {
            return `My name is ${state.name}, I am ${state.age}`;
        }
    }
    mutations: {
        SET_AGE(state, age) {
            commit(age, age);
        }
    },
    actions: {
        nameAsyn({commit}) {
            setTimeout(() => {
                commit('SET_AGE', 18);
            }, 1000);
        }
    },
    modules: {
        a: modulesA
    }
}
```
这个就是最基本也是完整的vuex代码；vuex 包含有五个基本的对象：

* state：存储状态。也就是变量。`...mapState写在computed中`；
* getters：派生状态。需要对state统一进行进一步处理，比如金钱需要统一转换成人命币的千分符，则可使用getter进行统一转换。外部调用方式：  store.getters.personInfo()。就和vue的computed差不多。`...mapGetters也写在computed中`；
* mutations：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。`...mapMutations也写在computed中`.
* actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。`...mapActions也写在computed中`.
* modules：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。

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
    age: 22,
    price: 9880
};

export default state;
```

#### getters.js示例（我们一般使用getters来获取state的状态，而不是直接使用state）：
```javascript
export const name1 = (state) => {
    return state.name + "getter";
}

export const age1 = (state) => {
    return state.age + "getter"
}
export const price = (state) => {
    return state.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export const other = (state) => {
    return `My name is ${state.name}, I am ${state.age}.`;
}
```

#### mutation-type.js示例（我们会将所有`mutations`的函数名放在这个文件里）：
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
    nameAsyn({commit}, name) {
        commit(types.SET_NAME, name);
    },
    ageAsyn({commit}, age) {
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

#### index.js示例（组装vuex）：
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

* 在vue组件中使用时，我们通常会使用`mapGetters`、`mapActions`、`mapMutations`，然后就可以按照vue调用methods和computed的方式去调用这些变量或函数，示例如下：

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这件衣服值{{price}}</h2>
    <h1>hello,我是 {{name}} ,我今年 {{age}} 岁</h1>
    <h1>hello,我是 {{name1}} ,我今年 {{age1}} 岁</h1>
    <h1>{{other}}</h1>
    <button @click="setName('uzi')">mutation改变姓名</button>
    <button @click="setName1">state改变姓名</button>
    <button @click="setAge(20)">mutation改变年龄</button>
    <button @click="nameAsyn('iboy')">actions改变姓名</button>
    <button @click="ageAsyn(30)">actions改变年龄</button>
  </div>
</template>
```javascript
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapState(['name','age']),
    ...mapGetters(["name1", "age1","other","price"])
  },
  methods: {
    ...mapMutations({
      setName: "SET_NAME",
      setAge: "SET_AGE"
    }),
    ...mapActions(['nameAsyn','ageAsyn']),
    setName1() {
      this.$store.state.name = "xiaogou";
      this.$store.state.age++;
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
```

参考处：[https://segmentfault.com/a/1190000012015742](https://segmentfault.com/a/1190000012015742)