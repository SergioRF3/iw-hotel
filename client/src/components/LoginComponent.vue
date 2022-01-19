<template>
  <div class="formlogin">
    <div class="cuenta">
      <label id="msg">No tienes cuenta.</label> &nbsp;
      <router-link to="/registro">Registrate</router-link>
    </div>
    <div class="field">
      <label class="titulo">Usuario</label>
      <input v-model="email" type="text" id="usuario" placeholder="usuario@usuario.com" />
    </div>
    <div class="field">
      <label class="titulo">Contraseña</label>
      <input v-model="password" type="password" id="password" placeholder="***********" />
    </div>
    <div class="botones">
      <ButtonComponent nombre="Iniciar Sesión" @click="checkLogin()"/>
      <button @click="checkLogin()">Iniciar sesion</button>
      <ButtonComponent nombre="Volver" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue"
import AuthService from "@/services/auth.service.js"

export default {
  name: "LoginComponent",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  components: {
    ButtonComponent,
  },
  methods: {
    checkLogin(){
      AuthService.login(this.email, this.password).then(
        response => {
          if(response == 200){
            this.$router.push('/')
          }
        }
      )
    } 
  },
};
</script>

<style>
.formlogin {
  width: 60%;
  background-color: #b5b2b2;
  margin: auto;
  border-radius: 20px;
  padding: 30px 30px 10px;
}
.field {
  margin-top: 10px;
  display: flex;
  flex-flow: column;
}
.field label {
  display: flex;
  color: black;
  margin-left: 10px;
}

.field input {
  background-color: white;
  border-width: 0px;
  padding: 5px 0px 5px 5px;
  border-radius: 10px;
}

.cuenta {
  display: flex;
  flex-flow: row;
}

.cuenta a {
  display: block;
  font-weight: bold;
  color: #f6fb26;
  text-decoration: none;
  text-decoration: underline;
}

.cuenta label {
  margin-left: 10px;
  font-weight: bold;
  color: black;
}

.botones {
  display: flex;
  flex-flow: row;
  padding: 30px 10px 10px;
}
</style>