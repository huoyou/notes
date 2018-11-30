* 参考处：[https://www.cnblogs.com/lzn-net/p/5655271.html](https://www.cnblogs.com/lzn-net/p/5655271.html)
* 参考处：[https://www.jianshu.com/p/088f5ce6d79a](https://www.jianshu.com/p/088f5ce6d79a)
* 参考处：[https://blog.csdn.net/allvenacm/article/details/78357754](https://blog.csdn.net/allvenacm/article/details/78357754)

* 添加环境变量。在用户环境变量里双击path，进入编辑状态，把adb.exe路径添加到后面，注意需要用;分号与前面的环境变量隔开。（例如：";E:\android\android-sdk-windows\platform-tools"）。
#### 删除link
1. npm uninstall -s -D -O react-native-video
2. 进入项目下的android目录下，然后打开setting.gradle，删除下面两行依赖：
```javascript
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android')
```
3. 然后进入android/app目录下，打开build.gradle，删除dependencies代码块内的一行依赖：
```javascript
 compile project(':react-native-video')
```
4. 打开android/app/src/main/java/com/包名/MainApplication.java,找到RN调用的原生方法new ReactVideoPackage(),删除这行代码,import com.brentvatne.react.ReactVideoPackage;
#### 编译 react-native-image-crop-picker 报错：Could not find com.github.yalantis:ucrop:2.2.1-native
1. android/build.gradle，并行配置多个 maven 源：
```javascript
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        maven { 
            url "https://jitpack.io" 
        }
        maven {
            url 'https://maven.google.com/'
            name 'Google'
        }  
    }
}
```