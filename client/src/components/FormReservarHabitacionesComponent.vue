<template>
  <div>

    <h1>Reserva de habitaciones</h1>
    
    <!-- Habitación -->
    <div class="">
      <div class="">
        <label>Número de habitación </label>
        <p>{{habitacion.number}} </p>
      </div>
      <img class="" :src="habitacion.image"/>
      <div class="">
        <label>Precio/noche: </label>
        <p>{{habitacion.price}} </p>
        <label>€</label>
      </div>
      <div class="">
        <label>Nº de camas: </label>
        <p>{{habitacion.beds}} </p>
      </div>
      <div class="">
        <label>Vistas: </label>
        <p>{{habitacion.views}} </p>
      </div>
      <div class="">
        <label>Total: </label>
        <p>5</p>
      </div>
    </div>

      <!-- Servicios -->
    <div>
      <h2> Servicios </h2>
      <ul v-for="service in services" :key="service.id">
        <li>
          <ServicioComponent :servicio=service></ServicioComponent>
        </li>
      </ul>
    </div>

    <div class="">
      <ButtonComponent nombre="Pagar" />
    </div>
</div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ServicioComponent from '@/components/ServicioComponent.vue'
import RoomService from '@/services/room.service.js'
import ServiceService from '@/services/service.service.js'

export default {
    name: 'FormReservarHabitacionesComponent',
    data() {
      return {
        habitacion: "",
        services: ""
      }
    },
    components: {
      ButtonComponent,
      ServicioComponent,      
    },
    created() {
      ServiceService.getServices().then(
        response => {
          this.services = response.data.data
        }
      )
      RoomService.getRoom(this.$route.params.id).then(
        response => {
          this.habitacion = response.data[0]
        }
      )
    },
}
</script>


<style>

</style>