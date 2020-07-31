<!--  -->
<template>
  <div class="middle-content">
    <div class="middle-content-header">
      <span 
      v-for="item in tabChange"
      @click="handleChange(item.id)"
      :class ="type===item.id?'active':''"
      >
        {{item.text}}</span>
      
    </div>
    <div class="tt" v-show="showChange">
      <div class="middle-content-mid">
        <textarea name id cols="30" rows="10" placeholder="有什么新鲜事想告诉大家"></textarea>
        <!-- <p class="title-num">0/2000字</p> -->
      </div>
      <div class="middle-content-footer">
        <div class="middle-footer-left">
          <img src="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/toutiao.com/image-icon.png" alt />
          <span>图片</span>
        </div>
        <div class="middle-footer-right">发布</div>
      </div>
    </div>
    <div class="artical" v-show="!showChange">
      <p>写文章</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      showChange:true,
      type:"tt",
      tabChange:[
        {id:"tt",text:"写微头条"},
        {id:"article",text:"写文章"}
      ]

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleChange(type){
      this.type = type
      this.showChange = !this.showChange
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang = 'less' scoped>
.middle-content {
  width: 95%;
  border: 1px solid #e8e8e8;
  .middle-content-header {
    display: flex;
    height: 44px;
    border-bottom: 1px solid #e8e8e8;
    span {
      margin-left: 30px;
      height: 44px;
      line-height: 44px;
      cursor: pointer;
    }
    .active{
      color: powderblue;
      border-bottom: 2px solid #ED4040;
    }
  }

  .middle-content-mid {
    position: relative;
    textarea {
      width: 100%;
      height: 100px;
      display: block;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 1.4;
      padding: 13px 19px;
      border: 0;
      outline: 0;
      resize: none;
      background-color: #f4f5f6;
      transition: all 0.5s;
      animation-duration: 0.8s;
      animation-fill-mode: both;
    }
    /* .title-num {
      font-size: 12px;
      position: absolute;
      z-index: 3;
      bottom: 15px;
      right: 10px;
      display: inline-block;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50px;
      padding: 0 8px;
      color: #fff;
    } */
  }

  .middle-content-footer {
    border-top: 1px solid #e8e8e8;
    height: 40px;
    display: flex;
    justify-content: space-between;
    div {
      height: 40px;
      width: 100px;
      line-height: 40px;
      text-align: center;
    }
    .middle-footer-left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        border-style: none;
        margin-right: 4px;
        cursor: pointer;
      }
      span {
        font-size: 14px;
        cursor: pointer;
      }
    }
    .middle-footer-right {
      width: 120px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      background-color: #ed4040;
      color: #fff;
      opacity: 0.6;
      cursor: pointer;
    }
  }
}
</style>