<template>
    <div>
      <div class="hindividual">
        <img class="imagenHabitacion" />
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
          <ButtonComponent nombre="Reservar" />
          <ButtonComponent nombre="Bloquear" />
          <ButtonComponent nombre="Desbloquear" />
        </div>
      </div>
    </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
    name: 'HabitacionComponent',
    props: ['habitacion'],
    components: {
      ButtonComponent,
    }
};
</script>

<style>
.habitaciones{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 50px;
  position: absolute;
  justify-content: space-between;

  width: 1280px;
  height: 49px;
  left: 0px;
  top: 189px;
}

.habitaciones .listadesplegable {
  background: #B7B6B6;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 20px;
  transition: background .5s;
}

.habitaciones .labelHabitacion{

  align-items: flex-start;
  padding: 10px;

  position: static;
  width: 106px;
  height: 49px;
  left: 0px;
  top: 0px;
}

.listadesplegable:hover {
  background: rgb(143, 143, 143);
}

.hindividual{
  position: absolute;
  margin-top: 50px;
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