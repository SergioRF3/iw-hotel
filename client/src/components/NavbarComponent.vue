<template>
  <div class="navbar">
      <div class="na">
        <img src="#">
        <nav class="navb">
        <router-link to="/">Home</router-link> 
        <router-link to="/instalaciones">Instalaciones</router-link> 
        <router-link to="/habitaciones">Habitaciones</router-link> 
        <router-link to="/salas">Salas</router-link> 
        <router-link to="/about">Sobre nosotros</router-link> 
        </nav>
        <a href="#" class="login">login</a>
      </div>
      <div class="rv">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavbarComponent'
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
    color: #5A5A5A;
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
    color: #F6FB26;
}
    
</style>