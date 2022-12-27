<template>
  <div id="individual-cafe-map">

  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import {ROAST_CONFIG} from '@/conf/config.js';
export default {
  name: "IndividualCafeMap",
  data() {
    return {
      map:null,
      makers: [],
      infoWindow: [],
    }
  },
  computed:{
    cafeLoadStatus(){
      return this.$store.getters["cafes/getCafeLoadStatus"];
    },
    cafe(){
      return this.$store.getters["cafes/getCafe"];
    }
  },
  watch:{
    cafeLoadStatus() {
      if (this.cafeLoadStatus === 2) {
        this.displayIndividualCafeMap();
      }
    }
  },
  methods:{
    displayIndividualCafeMap() {
      AMapLoader.load({
        key: ROAST_CONFIG.GAODE_MAPS_JS_API_KEY,             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        //存储AMap
        this.map = new AMap.Map("individual-cafe-map", {  //设置地图容器id
          viewMode: "3D",    //是否为3D地图模式
          center: [parseFloat(this.cafe.latitude), parseFloat(this.cafe.longitude)],
          zoom: 13,
        });
        //设置所哟标记点
        var marker = new AMap.Marker({
          position: new AMap.LngLat(parseFloat(this.cafe.latitude), parseFloat(this.cafe.longitude)),
        });
        this.map.add(marker);
      }).catch(e => {
        console.log(e);
      })
    }
  }


}
</script>

<style scoped>
  div#individual-cafe-map {
    width: 700px;
    height: 500px;
    margin: auto;
    margin-bottom: 200px;
  }
</style>