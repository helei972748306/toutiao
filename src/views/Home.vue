<!--  主页的组件-->
<template>
<div class=''>
  <div class="tt-home-header">
    <span>头条</span>
  </div>
  <div class="tt-home-content">
    <div class="tt-home-content-left">
      <Navlist></Navlist>
    </div>
    <div class="tt-home-content-middle">
      <Write></Write>
    </div>
    <div class="tt-home-content-right">
      登录
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Navlist from '../components/Navlist'
import Write from '../components/Write'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  Navlist,
  Write
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang = 'less' scoped>
  .tt-home-header {
    width: 100%;
    min-width: 1220px;
    height: 34px;
    line-height: 34px;
    background-color: #000;
    padding-left:10px;
  span {
    color: #f5f5f5;
    cursor: default;
  }
}
.tt-home-content {
  width: 80%;
  margin: 0 auto;
  margin-top: 16px;
  height: 100%;
  /* min-height: 1500px; */
  display: flex;
  
  .tt-home-content-left {
    flex: 1;
  }

  .tt-home-content-middle {
    flex: 3;
  }

  .tt-home-content-right {
    flex: 2;
  }
}

</style>