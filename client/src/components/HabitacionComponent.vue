<template>
    <div>
      <div class="hindividual">
        <img class="imagenHabitacion" :src="habitacion.image"/>
        <div class="datosHabitacion">
          <label>Precio/noche: </label>
          <p>{{habitacion.price}} </p>
          <label>€</label>
        </div>
        <div class="datosHabitacion">
          <label>Nº de camas: </label>
          <p>{{habitacion.beds}} </p>
        </div>
        <div class="datosHabitacion">
          <label>Vistas: </label>
          <p>{{habitacion.views}} </p>
        </div>
        <div class="botonesHabitacion">
          <router-link :to="'/reservaHab/' + habitacion.id">
            <ButtonComponent nombre="Reservar" />
           </router-link>
          <ButtonComponent v-if="type == '0'" nombre="Bloquear" />
          <ButtonComponent v-if="type == '0'" nombre="Desbloquear" />
        </div>
      </div>
    </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
    name: 'HabitacionComponent',
    props: ['habitacion'],
    data() {
      return {
        type: localStorage.getItem('type')
      }
    },
    components: {
      ButtonComponent,
    }
};
</script>

<style>

.hindividual{
  margin: auto;
  margin-top: 125px;
  width: 906px;
  height: 339px;
  left: 187px;
  top: 288px;
}

.hindividual .imagenHabitacion{

  width: 501px;
  height: 339px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  float: left; 
}

.hindividual .datosHabitacion{
  display: flex;
  align-items: flex-start;
  padding: 30px;
  font-weight: 550;

  width: 277px;
  height: 49px;
  left: 0px;
  top: 0px;
}

.hindividual .botonesHabitacion{
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  padding: 30px;
}

</style>