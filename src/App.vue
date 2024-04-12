<style>
  .sidebar{
    padding: 20px;
  }
</style>
<template>
  <div>
    <div class="sidebar col-md-3 col-lg-2 d-md-block">
      <sideBar />
    </div>

    <div class="col-lg-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import sideBar from "./components/sidebar.vue";
import Inicio from "./components/inicio.vue";



</script>