<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Número</label>
            <input type="text" id="numero" placeholder="123" v-model="form.number"/>
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Precio</label>
            <input type="text" id="precio" placeholder="150" v-model="form.price"/>
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Planta</label>
            <input type="text" id="planta" placeholder="2" v-model="form.floor"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Número de camas</label>
            <input type="text" id="habitaciones" placeholder="1" v-model="form.beds"/>
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Estado</label>
            <input type="text" id="estado" placeholder="Disponible" v-model="form.state"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="field">
            <label class="titulo">Vistas</label>
            <input type="text" id="vistas" placeholder="Vistas al mar" v-model="form.views"/>
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent
          v-if="introducir"
          nombre="Introducir"
          @click="createRoom"
        />
        <ButtonComponent
          v-if="introducir == false"
          nombre="Modificar"
          @click="modifyRoom"
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
        :items="habitaciones"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
      >
        <template #cell(actions)="data">
          <div class="acciones">
            <ButtonComponent
              nombre="Ver Detalles"
              @click="getRoom(data.item.id)"
            />
            <ButtonComponent
              nombre="Borrar"
              @click="deleteRoom(data.item.id)"
            />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import RoomService from "@/services/room.service.js";

export default {
  name: "FormHabitacionesComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      introducir: true,
      sortBy: "id",
      sortDesc: false,
      habitaciones: [],
      fields: [
        {
          key: "id",
          label: "Id",
          sortable: true,
        },
        {
          key: "number",
          label: "Número",
          sortable: true,
        },
        {
          key: "price",
          label: "Precio",
        },
        {
          key: "floor",
          label: "Planta",
        },
        {
          key: "beds",
          label: "Número de Camas",
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
        image: "",
        views: "",
        price: "",
        floor: "",
        beds: "",
        state: "",
      },
    };
  },
  created() {
    this.getRooms();
  },
  methods: {
    getRooms() {
      RoomService.getRooms().then((res) => {
        if (res.status == 200) {
          this.habitaciones = res.data.data;
        }
      });
    },
    getRoom(id) {
      RoomService.getRoom(id).then((res) => {
        if (res.status == 200) {
          this.form.id = res.data[0].id;
          this.form.number = res.data[0].number;
          this.form.image = res.data[0].image;
          this.form.views = res.data[0].views;
          this.form.price = res.data[0].price;
          this.form.floor = res.data[0].floor;
          this.form.beds = res.data[0].beds;
          this.form.state = res.data[0].state;
          this.introducir = false;
        }
      });
    },
    createRoom(){
      RoomService.createRoom(this.form).then(
        res => {
          if(res.status == 201){
            this.getRooms();
            this.resetForm()
          }
        }
      )
    },
    modifyRoom(){
      RoomService.modifyRoom(this.form).then(
        res => {
          if (res.status == 201) {
            this.getRooms()
            this.resetForm()
          }
        }
      )
    },
    deleteRoom(id) {
      if(window.confirm('¿Estas seguro que quieres borrar esta habitación?')){
        RoomService.deleteRoom(id).then(
          res => {
            if(res.status == 200){
              this.getRooms()
            }
          }
        )
      }
    },
    resetForm() {
      this.form.id = '';
      this.form.number = '';
      this.form.image = '';
      this.form.views = '';
      this.form.price = '';
      this.form.floor = '';
      this.form.beds = '';
      this.form.state = '';
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