<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Número</label>
            <input
              type="text"
              id="numero"
              placeholder="123"
              v-model="form.number"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Planta</label>
            <input
              type="text"
              id="planta"
              placeholder="0"
              v-model="form.floor"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Aforo</label>
            <input
              type="text"
              id="aforo"
              placeholder="90"
              v-model="form.capacity"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Precio</label>
            <input
              type="text"
              id="precio"
              placeholder="60"
              v-model="form.price"
            />
          </div>
        </div>
        <div class="col-6">
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
      <div class="row">
        <div class="col-12">
          <div class="field">
            <label class="titulo">Descripción</label>
            <input
              type="text"
              id="descripcion"
              placeholder="Aire acondicionado, wifi"
              v-model="form.description"
            />
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent
          v-if="introducir"
          nombre="Introducir"
          @click="guardarSala"
        />
        <ButtonComponent
          v-if="introducir == false"
          nombre="Modificar"
          @click="modificarSala"
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
        :items="salas"
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
              @click="borrarSala(data.item.id)"
            />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import HallService from "@/services/hall.service.js";
export default {
  name: "FormSalasComponent",
  data() {
    return {
      introducir: true,
      sortBy: "id",
      sortDesc: false,
      salas: [],
      fields: [
        {
          key: "id",
          label: "Id",
          sortable: true,
        },
        {
          key: "number",
          label: "Numero",
          sortable: true,
        },
        {
          key: "price",
          label: "Precio",
          sortable: true,
        },
        {
          key: "capacity",
          label: "Aforo",
          sortable: true,
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
        number: "",
        floor: "",
        capacity: "",
        description: "",
        image: "image.jpg",
        price: "",
        state: "",
      },
    };
  },
  components: {
    ButtonComponent,
  },
  created() {
    this.listarSalas();
  },
  methods: {
    llamarFile() {
      document.getElementById("file").click();
    },
    listarSalas() {
      HallService.getHalls().then((res) => {
        if (res.status == 200) {
          this.salas = res.data.data;
        }
      });
    },
    verDetalles: function (id) {
      HallService.getHall(id).then((res) => {
        if (res.status == 200) {
          this.form.id = res.data[0].id;
          this.form.number = res.data[0].number;
          this.form.floor = res.data[0].floor;
          this.form.capacity = res.data[0].capacity;
          this.form.description = res.data[0].description;
          this.form.image = res.data[0].image;
          this.form.price = res.data[0].price;
          this.form.state = res.data[0].state;
          this.introducir = false;
        }
      });
    },
    guardarSala() {
      // no funciona por el autoincrementado
      HallService.createHall(this.form).then((res) => {
        if (res.status == 201) {
          this.listarSalas();
          this.resetForm();
        }
      });
    },
    modificarSala() {
      HallService.modifyHall(this.form).then((res) => {
        if (res.status == 201) {
          this.listarSalas();
          this.resetForm();
        }
      });
    },
    borrarSala(id) {
      if (window.confirm("¿Estas seguro que quieres borrar esta sala")) {
        HallService.deleteHall(id).then((res) => {
          if (res.status == 200) {
            this.listarSalas();
          }
        });
      }
    },
    resetForm() {
      this.form.id = "";
      this.form.number = "";
      this.form.floor = "";
      this.form.capacity = "";
      this.form.description = "";
      this.form.image = "image.jpg";
      this.form.price = "";
      this.form.state = "";
      this.introducir = true;
    },
    botonLimpiar() {
      if (window.confirm("¿Estas seguro de que quieres limpiar los datos?")) {
        this.resetForm();
      }
    },
  },
};
</script>

<style>
.input-file {
  display: block;
  background-color: white;
  border: none;
  padding: 5px 0px 5px 10px;
  border-radius: 10px;
  text-align: left;
  color: black;
}

.ph {
  color: grey;
}

input#file {
  width: 0.1;
  height: 0.1;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
</style>