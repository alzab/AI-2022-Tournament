<template>
  <div id="app">
    <DrawVis/>
  </div>
</template>

<script>
import DrawVis from './components/DrawVis.vue'

export default {
  name: 'App',
  components: {
    DrawVis
  },
  created() {
    document.title = process.env.VUE_APP_TITLE;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
