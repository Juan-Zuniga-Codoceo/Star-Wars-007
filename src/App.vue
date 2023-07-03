<template>
  <div id="app">
    <navigation></navigation>
    <transition name="router-anim" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
  export default {
    name: 'nav-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    //watch: {},
    components: {
      "navigation": Nav
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  }
</script>
<style>
body{
  background-image: url("@/assets/star-wars-1.jpeg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router-anim-enter-active{

  animation: coming .5s;

  animation-delay: .5s;

  opacity: 0;

}

.router-anim-leave-active{

  animation: going .5s;

}

@keyframes coming{

  from{

    transform: translateX(-50px);

    opacity:0

  }

  to{

    transform: translateX(0px);

    opacity:1

  }

}


@keyframes going{

  0%{

    transform: translateX(0px);

  }

  100%{

    transform: translateX(-50px);

    opacity:0

  }
}
</style>
