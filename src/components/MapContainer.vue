<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import {ROAST_CONFIG} from '@/conf/config.js';
export default {
  props: {
    'latitude': {  // 经度
      type: Number,
      default: function () {
        return 120.21
      }
    },
    'longitude': {  // 纬度
      type: Number,
      default: function () {
        return 30.29
      }
    },
    'zoom': {   // 缩放级别
      type: Number,
      default: function () {
        return 4
      }
    }
  },
  data(){
    return{
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      //map:null,
    }
  },
  methods:{
    initMap(){
      AMapLoader.load({
        key:ROAST_CONFIG.GAODE_MAPS_JS_API_KEY,             // 申请好的Web端开发者Key，首次调用 load 时必填
        version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins:['AMap.Scale'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        this.map = new AMap.Map("container",{  //设置地图容器id
          viewMode:"3D",    //是否为3D地图模式
          zoom: this.zoom,          //初始化地图级别
          center: [this.latitude, this.longitude], //初始化地图中心点位置
        });
      }).catch(e=>{
        console.log(e);
      })
    },
  },
  mounted(){
    //DOM初始化完成进行地图初始化
    this.initMap();
  }
}
</script>

<style scoped>
#container{
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>