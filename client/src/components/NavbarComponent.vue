<template>
  <div class="navbar">
    <div v-if="publico" class="na">
      <img src="#" />
      <nav class="navb">
        <router-link to="/">Home</router-link>
        <router-link to="/instalaciones">Instalaciones</router-link>
        <router-link to="/habitaciones">Habitaciones</router-link>
        <router-link to="/salas">Salas</router-link>
        <router-link to="/about">Sobre nosotros</router-link>
      </nav>
      <a href="#" class="login">login</a>
    </div>
    <div v-if="admin" class="na">
      <img src="#" />
      <nav class="navb">
        <router-link to="/">Instalaciones</router-link>
        <router-link to="/">Habitaciones</router-link>
        <router-link to="/">Salas</router-link>
        <router-link to="/">Usuarios</router-link>
        <router-link to="/">Reservas</router-link>
        <router-link to="/">Servicios</router-link>
        <router-link to="/">Temporada</router-link>
      </nav>
      <a href="#" class="login">login</a>
    </div>
    <div class="rv">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data(){
        return {
            publico: false,
            admin: false
        }
    },
    props:{
        navbar: {
            type: String,
            default: "public"
        }
    },
    created() {
        if(this.navbar == "public"){
            this.publico = true
        }else{
            if(this.navbar == "admin"){
                this.admin = true
            }
        }
    }
}
</script>

<style scoped>
.na {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 50px 0px;
  width: 100%;
}

.login {
  color: #5a5a5a;
  text-decoration: none;
}

.navb {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 15px;
  background: #000000;
  border-radius: 30px;
}

.navb a {
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: white;
  padding: 0px 10px;
  text-decoration: none;
}

.navb a.router-link-exact-active {
  color: #f6fb26;
}
</style>