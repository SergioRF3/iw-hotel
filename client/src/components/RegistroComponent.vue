<template>
  <div class="formlogin">
    <div class="cuenta">
      <label id="msg">¿Ya tienes una cuenta?</label> &nbsp;
      <router-link to="/login">Inicia Sesión</router-link>
    </div>
    <div class="field">
      <label class="titulo">Nombre</label>
      <input v-model="name" type="text" id="nombre" placeholder="Jaume Aragonés" />
    </div>
    <div class="field">
      <label class="titulo">DNI</label>
      <input v-model="dni" type="text" id="dni" placeholder="11111111A" />
    </div>
    <div class="field">
      <label class="titulo">Email</label>
      <input v-model="email" type="text" id="email" placeholder="usuario@usuario.com" />
    </div>
    <div class="field">
      <label class="titulo">Contraseña</label>
      <input v-model="password" type="password" id="password" placeholder="***********" />
    </div>
    <div class="field">
      <label class="titulo">Teléfono</label>
      <input v-model="phone" type="text" id="telefono" placeholder="965123123" />
    </div>
    <div class="botones">
      <ButtonComponent nombre="Registrarse" @click="register()" />
      <ButtonComponent nombre="Volver" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import UserService from '@/services/user.service.js'
import AuthService from '@/services/auth.service.js'

export default {
  name: "RegistroComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      name: "",
      dni: "",
      email: "",
      password: "",
      phone: ""
    }
  },
  methods: {
    register(){
      UserService.createUser({'name': this.name, 'dni': this.dni, 'email': this.email, 'password': this.password, 'phone':this.phone, 'state': false, 'type': 0}).then(
        response => {
          if(response.status == 201){
            AuthService.login(this.name, this.password).then(
              response => {
                if(response == 200){
                  this.$emit('profileChange')
                  this.$router.push('/')
                }
              }
            )
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