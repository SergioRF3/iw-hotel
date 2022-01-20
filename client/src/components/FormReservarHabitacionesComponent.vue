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
        <p>{{reserva.total}} </p>
      </div>
    </div>

      <!-- Servicios -->
    <div>
      <h2> Servicios </h2>
      <ul v-for="servicio in servicios" :key="servicio.id">
        <li>
          <ServicioComponent :servicio=servicio></ServicioComponent>
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


export default {
    name: 'FormReservarHabitacionesComponent',
    props: ['habitacion'],
    components: {
      ButtonComponent,
      ServicioComponent,      
    }
}
</script>


<style>

</style>