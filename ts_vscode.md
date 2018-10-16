1. 安装Visual Studio Code
2. 安装Node.js
3. npm install -g typescript (升级版本：npm update -g typescript)(查看版本：tsc -v)
4. npm install -g typings
5. typings install dt~node –global
6. 创建ts_demo目录
7. 在命令行cmd下进入ts_demo目录
8. cd ts_demo
9. 输入：npm init，创建package.json
10. tsc -init, 修改tsconfig.json如下：
```javascript
{
    "compilerOptions": {
        "module": "commonjs", //遵循的JavaScript模块规范。主要的候选项有：commonjs、AMD和es6。
        "target": "es6", //编译之后生成的JavaScript文件需要遵循的标准。有三个候选项：es3、es5、es2015。
        "noImplicitAny": false, //为false时，如果编译器无法根据变量的使用来判断类型时，将用any类型代替。为true时，将进行强类型检查，无法推断类型时，提示错误。
        "sourceMap": true, //编译时是否生成对应的source map文件。这个文件主要用于前端调试。当前端js文件被压缩引用后，出错时可借助同名的source map文件查找源文件中错误位置。
        "allowJs": true,
        "outDir": "./out", //生成的js和js.map的目录
    },
    "include": [ // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
        "./src/*.ts",
        "./src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```
11. 按ctrl + shift + b编译
12. 按F5开始调试会生成： launch.json
```javascript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "program": "${workspaceFolder}/out/hello.js",
            "sourceMaps": true,
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```
