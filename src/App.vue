<template>
  <div>
    <b-form-select v-model="themeClass" :options="themes"></b-form-select>
    <div id="app" v-bind:class="[themeClass]">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      themeClass: '',
      themes: ['black', 'green']
    }
  },
  created () {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.black{
  background: black;
}

.green{
  background: green;
}
</style>
