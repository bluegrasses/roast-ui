<template>
  <div id="container">

  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import {ROAST_CONFIG} from '@/conf/config.js';

export default {
  //接收组件传递参数
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
  data() {
    return {
      map:null,
      makers: [],
    }
  },
  methods: {
    //初始化地图
    initMap() {
      AMapLoader.load({
        key: ROAST_CONFIG.GAODE_MAPS_JS_API_KEY,             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        //存储AMap
        this.map = new AMap.Map("container", {  //设置地图容器id
          viewMode: "3D",    //是否为3D地图模式
          zoom: this.zoom,          //初始化地图级别
          center: [this.latitude, this.longitude], //初始化地图中心点位置
        });
        //设置所哟标记点
        this.buildMarkers();
      }).catch(e => {
        console.log(e);
      })
    },

// 为所有咖啡店创建点标记
    buildMarkers() {
      this.markers = [];
      for (var i = 0; i <this.cafes.length ; i++) {
        var marker = new AMap.Marker({
          position: new AMap.LngLat(parseFloat(this.cafes[i].latitude), parseFloat(this.cafes[i].longitude)),
          title: this.cafes[i].name
        });
        // 将每个点标记放到点标记数组中
        this.markers.push(marker);
      }
      console.log("this markers",this.markers)
      // 将创建的点标记添加到已有的地图实例：
      this.map.add(this.markers);
    },
  //  从地图上移除所有点标记
    clearMarkers() {
      this.map.remove(this.markers);
    },
  },

  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  computed: {
    cafes() {
      return this.$store.getters['cafes/getCafes'];
    }
  },
  watch:{
    cafes(){
      this.clearMarkers();
      this.buildMarkers();
    }
  }

}
</script>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>