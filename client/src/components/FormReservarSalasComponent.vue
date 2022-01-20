<template>
  <div>
    <h1>Reserva de salas</h1>

    <!-- Salas -->
    <div class="">
      <div class="">
        <label>Número de sala: </label>
        <p>{{sala.number}} </p>
      </div>
      <img class="" :src="sala.image"/>
      <div class="">
        <label>Precio/dia: </label>
        <p>{{sala.price}} </p>
        <label>€</label>
      </div>
      <div class="">
        <label>Aforo: </label>
        <p>{{sala.capacity}} </p>
      </div>
      <div class="">
        <p>Esta sala con capacidad de {{sala.capacity}} personas...</p>
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

export default {
    name: 'FormReservarSalasComponent',
    props: ['habitacion'],
    components: {
      ButtonComponent,
    }
}
</script>

<style>

</style>