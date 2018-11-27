1. mixin
```jvascript
@mixin bg_image($url) {
    background-image: url('../imgs/'+$url + '@2x.png');
    @media (-webkit-min-device-pixel-radio:3),(min-device-pixel-radio:3) {
        background-image: url('../imgs/'+ $url + '@3x.png');
    }
}
<style lang="scss" scoped>  //vue文件中引用
@import "../css/ff.scss";
```