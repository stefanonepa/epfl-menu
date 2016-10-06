<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Menus</h1>
      <select>
        <option value="*">*</option>
        <option v-for="restaurant in restaurants" :value="restaurant"> {{ restaurant }}</li>
      </select>
    </div>
    <div class="row">
      <mymenu v-for="menu in menus" :menu="menu"></mymenu>
    </div>
  </div>
</template>

<script>
  import mymenu from './components/menu.vue'
export default {
  components: { mymenu },
  data () {
    return {
      menus: []
    }
  },
  created () {
    let self = this
    var x2js = new X2JS()
    this.$http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fmenus.epfl.ch%2Fcgi-bin%2FrssMenus'&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
    )
    .then((response) => {
      // success callback
      let allReq = x2js.xml_str2json(response.body)
      self.menus = allReq.query.results.rss.channel.item
    }, (response) => {
      // error callback
    });
  },
  computed:{
    restaurants (){
      let rests = this.menus.map((menu)=>{
        return menu.title.split(':')[0]
      })

      return [...new Set(rests)].sort();
    },
    filterredmenus(){

    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
