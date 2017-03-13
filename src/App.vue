<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/Happy">页面一</router-link>
    <router-link to="/Unhappy">页面二</router-link>
    <router-link to="/User/13">用户界面</router-link>
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
    <br>
    <button @click='status=!status'>显示/隐藏</button>
    <transition name="slide-fade" >
      <p v-show="status">我是内容内容内容</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return{
      status:true
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('页面路由发生了改变')
    }
  }
}
</script>
 
<style>
.animaite-box{
  position:relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(100px);
  opacity: 0;
}
</style>
