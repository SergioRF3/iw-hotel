<template>
  <div class="perfil">
    <div class="avatar">
      <div class="imagen"></div>
    </div>
    <div class="datos">
      <div class="row">
        <div class="col-10 text-left">
          <label>Usuario</label>
        </div>
        <div class="col-2">
          <b-icon-pencil-fill />
        </div>
      </div>
      <div class="row">
        <div class="col-10 text-left">
          <label>usuarios@usuarios.com</label>
        </div>
        <div class="col-2">
          <b-icon-pencil-fill />
        </div>
      </div>
      <div class="row">
        <div class="col-10 text-left">
          <label>48484848X</label>
        </div>
        <div class="col-2">
          <b-icon-pencil-fill />
        </div>
      </div>
      <div class="row">
        <div class="col-10 text-left">
          <label>+34 655 655 655</label>
        </div>
        <div class="col-2">
          <b-icon-pencil-fill />
        </div>
      </div>
      <div class="botones">
        <ButtonComponent nombre="Cambiar contraseña" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "PerfilComponent",
  components: {
    ButtonComponent,
  },
};
</script>

<style>
.avatar {
  width: 360px;
  margin: 20px 20px;
  background-color: #b5b2b2;
  border-radius: 50%;
}
.datos {
  width: 55%;
  height: 400px;
  background-color: #b5b2b2;
  border-radius: 20px;
  padding: 55px 110px 10px;
  color: black;
}
.datos .row{
    margin-bottom: 20px;
}
.perfil {
  display: flex;
  flex-flow: row;
  width: 80%;
  margin: auto;
  border-radius: 20px;
  padding: 0;
}
</style>