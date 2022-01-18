<template>
  <div class="form">
    <div class="row">
      <div class="col-6">
        <div class="field">
          <label class="titulo">Nombre</label>
          <input type="text" id="nombre" placeholder="Instalación" />
        </div>
      </div>
      <div class="col-6">
        <div class="field">
          <label class="titulo">Imagen</label>
          <input type="text" id="nombre" placeholder="imagen.jpg" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="field">
          <label class="titulo">Descripción</label>
          <textarea name="textarea" id="textarea" placeholder="Introduce aqui la descripción de la instalación" cols="30" rows="6"></textarea>
        </div>
      </div>
    </div>
    <div class="botones">
      <ButtonComponent nombre="Introducir" />
      <ButtonComponent nombre="Volver" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "FormInstalacionesComponent",
  components: {
    ButtonComponent,
  },
};
</script>

<style>
.form {
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
  padding: 5px 0px 5px 10px;
  border-radius: 10px;
}

.field textarea{
    background-color: white;
    border-width: 0px;
    padding: 5px 0px 5px 10px;
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