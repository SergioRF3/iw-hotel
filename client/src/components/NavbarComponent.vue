<template>
  <div class="navbar">
    <div v-if="navbar == 'public'" class="na">
      <div class="logo">
        <img src="#"/>
      </div>
      <nav class="navb">
        <router-link to="/"><b-icon-house-door-fill scale="1.3" /></router-link>
        <router-link to="/instalaciones">Instalaciones</router-link>
        <router-link to="/habitaciones">Habitaciones</router-link>
        <router-link to="/salas">Salas</router-link>
        <router-link to="/about">Sobre nosotros</router-link>
      </nav>
      <router-link class="login" to="/login">Login</router-link>
    </div>
    <div v-if="navbar == 'usuario'" class="na">
      <div class="logo">
        <img src="#"/>
      </div>
      <nav class="navb">
        <router-link to="/"><b-icon-house-door-fill scale="1.3" /></router-link>
        <router-link to="/instalaciones">Instalaciones</router-link>
        <router-link to="/habitaciones">Habitaciones</router-link>
        <router-link to="/salas">Salas</router-link>
        <router-link to="/about">Sobre nosotros</router-link>
      </nav>
      <router-link class="login" to="/perfil">{{user}}</router-link>
      <router-link class="login" to="/" @click.native="removeCredentials(), $emit('profileChange')">Logout</router-link>
    </div>
    <div v-if="navbar == 'admin'" class="na">
      <div class="logo">
        <img src="#"/>
      </div>
      <nav class="navb">
        <router-link to="/admin/instalaciones">Instalaciones</router-link>
        <router-link to="/admin/habitaciones">Habitaciones</router-link>
        <router-link to="/admin/salas">Salas</router-link>
        <router-link to="/admin/usuarios">Usuarios</router-link>
        <router-link to="/admin/reservas">Reservas</router-link>
        <router-link to="/admin/servicios">Servicios</router-link>
        <router-link to="/admin/temporadas">Temporada</router-link>
      </nav>
      <router-link class="login" to="/perfil">{{user}}</router-link>
      <router-link class="login" to="/" @click.native="removeCredentials(), $emit('profileChange')">Logout</router-link>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth.service.js"

export default {
  name: "NavbarComponent",
  data() {
    return {
      user: localStorage.getItem('name')
    }
  },
  props: ['navbar'],
  methods: {
    removeCredentials(){
      AuthService.logout()
    }
  },
};
</script>

<style scoped>
.logo {
  width: 41px;
  height: 41px;
}
.logo img {
  width: 100%;
  height: 100%;
}
 
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
  margin-bottom: 10vh;
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