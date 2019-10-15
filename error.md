1. v-lazy默认listenEvents事件,如果加入wheel和mousewheel会使得自定义的滚轮事件失效;
2. vue-particles(Vue粒子特效);
3. vue-awesome-swiper3.0.4版本会导致uglifyjs-webpack-plugin打包编译报错;
4. requestAnimationFrame兼容性写法:
```javascript
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
```
5. 子组件图片上传成功后,重新校验,调用this.$refs.ruleFormRef.validateField('imageUrl');
6. element防止$message大量弹出(main.js中引入即可):
```javascript
import ElementUI, { Message } from 'element-ui';
Vue.use(ElementUI);
// 为了实现Class的私有属性
const showMessage = Symbol('showMessage');
  /**
   *  重写ElementUI的Message
   *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
   */
class MyMessage {
    success (options:any, single:boolean = true) {
      this[showMessage]('success', options, single)
    }
    warning (options:any, single:boolean = true) {
      this[showMessage]('warning', options, single)
    }
    info (options:any, single:boolean = true) {
      this[showMessage]('info', options, single)
    }
    error (options:any, single:boolean = true) {
      this[showMessage]('error', options, single)
    }
    [showMessage] (type:any, options:any, single:boolean) {
      if (single) {
        // 判断是否已存在Message
        if (document.getElementsByClassName('el-message').length === 0) {
          // @ts-ignore
          Message[type](options)
        }
      } else {
        // @ts-ignore
        Message[type](options)
      }
    }
}
// @ts-ignore
Vue.prototype.$message = new MyMessage();
```
7. form中validator校验,model与ref需一致,且不要用v-model,要用:model;
8. 引入外部文件（图片、js等）出现403 forbidden的问题:页面中引入外网的链接资源，会产生一个新的http请求。
   为了安全（URL里可能包含用户信息），浏览器一般都会给这写请求头加上表示来源的referrer 字段。 
   此时我们需要隐藏外部链接中的referrer，在head标签中加入meta，代码如下：
```html
<meta name="referrer" content="no-referrer"/>
```
9. video src动态变更不生效,解决方法:this.$refs.video.src = res.data.video_url;
10. UglifyJSPlugin移除console.log只在NODE_ENV = ''prodoction''下生效;
11. 优雅的清楚setTimeout:
```javascript
let timer = setTimeout(_=>{
  this.isLoading = false;
},2000);
this.$once('hook:beforeDestroy', () => {
  clearInterval(timer);
  timer = null;
})
```
