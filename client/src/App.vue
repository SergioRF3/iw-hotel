<template>
  <div id="app">
    <NavbarComponent :navbar="profile" @profileChange="modifyProfile()"/>
    <router-view @profileChange="modifyProfile()"/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  },
  data() {
    return {
      profile: ''
    }
  },
   created() {
    this.modifyProfile()
  },
  methods: {
    modifyProfile(){
      switch (localStorage.getItem('type')) {
        case '0':
          this.profile = "public"
          break;
        case '1':
          this.profile = "usuario"
          break;
        case '2': 
          this.profile = "admin"
          break;
        default:
          this.profile = "public"
          break;
      }
    }
  },

}
</script>


<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
