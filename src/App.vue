<template>
  <div class="container">
    <app-header></app-header>
    <transition 
    enter-active-class="animated fadeIn delay-500ms"
    leave-active-class="animated fadeOut delay-500ms"
    appear
    mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Header from './components/header/Header.vue'

export default {
  components:{
    'app-header':Header,
  },
  created(){
    this.$store.dispatch('tryAutoLogin')
  }
};
</script>

<style>
html{
 
}
.row{
  margin-top: 15px;
  margin-bottom: 15px
}
b{
font-size: 1.5em
}
input{
  margin-bottom: 10px
}
</style>
