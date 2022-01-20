<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Jaume Aragonés"
              v-model="form.name"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Email</label>
            <input
              type="text"
              id="email"
              placeholder="usuario@usuario.com"
              v-model="form.email"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Telefono</label>
            <input
              type="text"
              id="telefono"
              placeholder="965123123"
              v-model="form.phone"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">DNI</label>
            <input
              type="text"
              id="dni"
              placeholder="11111111A"
              v-model="form.dni"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Tipo</label>
            <input
              type="text"
              id="tipo"
              placeholder="Cliente"
              v-model="form.type"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Estado</label>
            <input
              type="text"
              id="estado"
              placeholder="Disponible"
              v-model="form.state"
            />
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent
          v-if="introducir"
          nombre="Introducir"
          v-on:click="guardarUsuario"
        />
        <ButtonComponent
          v-if="introducir == false"
          nombre="Modificar"
          v-on:click="modificarUsuario"
        />
        <ButtonComponent nombre="Limpiar" @click="botonLimpiar" />
      </div>
    </div>
    <div class="tabla">
      <b-table
        striped
        hover
        head-variant="dark"
        :fields="fields"
        :items="usuarios"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
      >
        <template #cell(actions)="data">
          <div class="acciones">
            <ButtonComponent
              nombre="Ver Detalles"
              @click="verDetalles(data.item.id)"
            />
            <ButtonComponent
              nombre="Borrar"
              @click="borrarUsuario(data.item.id)"
            />
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
      introducir: true,
      sortBy: "id",
      sortDesc: false,
      usuarios: [],
      fields: [
        {
          key: "id",
          label: "Id",
          sortable: true,
        },
        {
          key: "name",
          label: "Nombre",
          sortable: true,
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
      form: {
        id: "",
        email: "",
        name: "",
        password: "",
        dni: "",
        phone: "",
        type: "",
        state: "",
      },
    };
  },
  components: {
    ButtonComponent,
  },
  created() {
    this.getUsuarios();
  },
  methods: {
    guardarUsuario: function () {
      UserService.createUser(this.form);
      this.getUsuarios();
      this.resetForm();
    },
    borrarUsuario: function(id) {
      if(window.confirm('¿Estas seguro de que quieres borrar este usuario?')){
        UserService.deleteUser(id).then(
          res => {
            if(res.status == 200){
              this.getUsuarios()
            }
          }
        )
      }
    },
    verDetalles: function (id) {
      UserService.getUser(id).then((res) => {
        this.form.id = res.data[0].id;
        this.form.email = res.data[0].email;
        this.form.name = res.data[0].name;
        this.form.password = res.data[0].password;
        this.form.dni = res.data[0].dni;
        this.form.phone = res.data[0].phone;
        this.form.type = res.data[0].type;
        this.form.state = res.data[0].state;
        this.introducir = false;
      });
    },
    modificarUsuario: function () {
      UserService.modifyUser(this.form).then((res) => {
        if (res.status == 201) {
          this.getUsuarios();
          this.resetForm();
          this.introducir = true;
        }
      });
    },
    getUsuarios() {
      UserService.getUsers().then((res) => {
        if (res.status == 200) {
          this.usuarios = res.data.data;
        }
      });
    },
    resetForm() {
      this.form.id = "";
      this.form.name = "";
      this.form.password = "";
      this.form.dni = "";
      this.form.phone = "";
      this.form.type = "";
      this.form.state = "";
      this.introducir = true;
    },
    botonLimpiar() {
      if(window.confirm('¿Estas seguro de que quieres limpiar los datos?')){
        this.resetForm()
      }
    }
  },
};
</script>

<style>
</style>