<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Usuario</label>
            <input type="text" id="nombre" placeholder="usuario@usuario.com" v-model="form.email"/>
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Número de sala o habitación</label>
            <input type="text" id="numero" placeholder="012" v-model="form.room_id"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Fecha de inicio</label>
            <input type="text" id="inicio" placeholder="20-01-2022" v-model="form.start"/>
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Fecha salida</label>
            <input type="text" id="salida" placeholder="24-01-2022" v-model="form.end"/>
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Estado</label>
            <input type="text" id="estado" placeholder="Disponible" v-model="form.state"/>
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent
          v-if="introducir"
          nombre="Introducir"
          @click="createReservation"
        />
        <ButtonComponent
          v-if="introducir == false"
          nombre="Modificar"
          @click="modifyReservation"
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
        :items="reservas"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
      >
        <template #cell(actions)="data">
          <div class="acciones">
            <ButtonComponent
              nombre="Ver Detalles"
              @click="getReservation(data.item.id)"
            />
            <ButtonComponent
              nombre="Borrar"
              @click="deleteReservation(data.item.id)"
            />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ReservationService from '@/services/reservation.service.js'
import UserService from '@/services/user.service.js'

export default {
  name: "FormReservasComponent",
  data() {
    return {
      introducir: true,
      sortBy: "id",
      sortDesc: false,
      reservas: [],
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
          key: "name",
          label: "Usuario",
          sortable: true,
        },
        {
          key: "start",
          label: "Entrada",
          sortable: true,
        },
        {
          key: "end",
          label: "Salida",
          sortable: true,
        },
        {
          key: "actions",
          label: "Acciones",
        },
      ],
      form: {
        id: "",
        start: "",
        end: "",
        state: "",
        total: "",
        room_id: "",
        hall_id: "",
        user_id: "",
        name: '',
        number:'',
        email:''
      },
    };
  },
  components: {
    ButtonComponent,
  },
  created(){
    this.getReservations()
  },
  methods: {
    getReservations() {
      ReservationService.getReservations().then(
        res => {
          if(res.status == 200){
            this.reservas = res.data
          }
        }
      )
    },
    getReservation(id) {
      ReservationService.getReservation(id).then(
        res => {
          if(res.status == 200){
            this.form.id = res.data[0].id
            this.form.start = res.data[0].start
            this.form.end = res.data[0].end
            this.form.state = res.data[0].state
            this.form.total = res.data[0].total
            this.form.room_id = res.data[0].room_id
            this.form.hall_id = res.data[0].hall_id
            this.form.user_id = res.data[0].user_id
            this.form.name = res.data[0].name
            this.form.number = res.data[0].number
            this.introducir = false
          }
        }
      )
    },
    createReservation() {
      console.log('que pasa')
      UserService.getUserByEmail(this.form.email).then(
        res => {
          if(res.status == 200){
            this.form.user_id = res.data[0].id
            ReservationService.createReservation(this.form).then(
              resp => {
                if(resp.status == 201){
                  this.getReservations()
                  this.resetForm()
                }
                console.log(resp)
              }
            )
          }
          else{
            console.log(res)
          }
        }
      )
    },
    modifyReservation(){
      UserService.getUserByEmail(this.form.email).then(
        res => {
          if(res.status == 200){
            this.form.user_id = res.data[0].id
            ReservationService.modifyReservation(this.form).then(
              resp => {
                if(resp.status == 201){
                  this.getReservations()
                  this.resetForm()
                }
              }
            )
          }
        }
      )
    },
    deleteReservation(id) {
      ReservationService.deleteReservation(id).then(
        res => {
          if(res.status == 200){
            this.getReservations()
          }
        }
      )
    },
    resetForm() {
      this.form.id = ''
      this.form.start = ''
      this.form.end = ''
      this.form.state = ''
      this.form.total = ''
      this.form.room_id = ''
      this.form.hall_id = ''
      this.form.user_id = ''
      this.form.name = ''
      this.form.number = ''
      this.introducir = true
    },
    botonLimpiar() {
      if(window.confirm('¿Estas seguro de que quieres limpiar los datos?')){
        this.resetForm()
      }
    }
  }
};
</script>

<style>
</style>