<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Nombre</label>
            <input type="text" id="nombre" placeholder="Jaume Aragonés" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Email</label>
            <input type="text" id="email" placeholder="usuario@usuario.com" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Telefono</label>
            <input type="text" id="telefono" placeholder="965123123" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">DNI</label>
            <input type="text" id="dni" placeholder="11111111A" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Tipo</label>
            <input type="text" id="tipo" placeholder="Cliente" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Estado</label>
            <input type="text" id="estado" placeholder="Disponible" />
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent nombre="Introducir" />
        <ButtonComponent nombre="Volver" />
      </div>
    </div>
    <div class="tabla">
      <b-table striped hover :fields="fields" :items="usuarios">
        <template #cell(actions)>
          <div class="acciones">
            <ButtonComponent nombre="Ver Detalles" />
            <ButtonComponent nombre="Borrar" />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import UserService from "@/services/user.service.js";

export default {
  name: "FormUsuariosComponent",
  data() {
    return {
      usuarios: [],
      fields: [
        {
          key: "id",
          label: "Id",
        },
        {
          key: "name",
          label: "Nombre",
        },
        {
          key: "type",
          label: "Tipo",
        },
        {
          key: "state",
          label: "Estado",
        },
        {
          key: "actions",
          label: "Acciones",
        },
      ],
    };
  },
  components: {
    ButtonComponent,
  },
  created() {
    UserService.getUsers().then((res) => {
      if (res.status == 200) {
        this.usuarios = res.data.data;
      }
    });
  },
};
</script>

<style>
</style>