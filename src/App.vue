<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div> -->
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-dark bg-inverse navbar-fixed-top">
        <router-link to="/" class="navbar-brand text-success">Vin-UI 组件</router-link>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a href="http://vinettepang.me" target="_blank" class="nav-link"><i class="fa fa-home"></i>个人站</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-flag"></i> Hot</a>
          </li> -->
        </ul>
      </nav>
    </div>
    <div class="container" style="margin-top: 80px">
      <div class="row">
      <div class="col-xs-12 col-md-9 push-md-3 col-xl-9 push-xl-3">
          <router-view></router-view>
        </div>
        <div class="col-xs-12 col-md-3 pull-md-9 col-xl-3 pull-xl-9">
          <sidebar></sidebar>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Siderbar from './components/Sidebar.vue'

export default {
    components: {
        'sidebar': Siderbar
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
</style>
