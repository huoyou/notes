1. 安装node.js环境
2. npm install -g weex-toolkit
3. weex create awesome-app
4. cd awesome-app
5. npm install
6. npm i weex-ui@latest -S
7. npm i babel-plugin-component babel-preset-stage-0 -D
8. 同时修改.babelrc如下
```javascript
{
  "presets": ["es2015", "stage-0"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "weex-ui",
        "libDir": "packages",
        "style": false
      }
    ]
  ]
}
```
9. npm start