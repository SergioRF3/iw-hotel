<template>
  <div class="navbar">
    <div v-if="publico" class="na">
      <div class="logo">
        <img src="#"/>
      </div>
      <nav class="navb">
        <router-link to="/">Home</router-link>
        <router-link to="/instalaciones">Instalaciones</router-link>
        <router-link to="/habitaciones">Habitaciones</router-link>
        <router-link to="/salas">Salas</router-link>
        <router-link to="/about">Sobre nosotros</router-link>
      </nav>
      <router-link class="login" to="/login">Login</router-link>
    </div>
    <div v-if="admin" class="na">
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
      <router-link class="login" to="/perfil">Usuario</router-link>
    </div>
    <div class="rv">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      publico: false,
      admin: false,
    };
  },
  props: {
    navbar: {
      type: String,
      default: "public",
    },
  },
  created() {
    if (this.navbar == "public") {
      this.publico = true;
    } else {
      if (this.navbar == "admin") {
        this.admin = true;
      }
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
.rv {
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
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