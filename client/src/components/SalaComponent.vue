<template>
  <div>
    <div>
      <div class="sindividual">
        <img class="imagenSala" />
        <div class="datosSala">
          <label>Precio/dia: </label>
          <p>{{sala.price}} </p>
          <label>€</label>
        </div>
        <div class="datosSala">
          <label>Aforo: </label>
          <p>{{sala.capacity}} </p>
        </div>
        <div class="datosSala">
          <p>Esta sala con capacidad de {{sala.capacity}} personas...</p>
        </div>
        <div class="datosSala">
          <div class="botonesSala">
            <ButtonComponent nombre="Reservar" />
            <ButtonComponent nombre="Bloquear" />
            <ButtonComponent nombre="Desbloquear" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
    name:'SalasComponent',
    components: {
      ButtonComponent,
    },
    props: ['sala']
};
</script>

<style>

.salas{
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

.salas .listadesplegablesalas {
  background: #B7B6B6;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 20px;
  transition: background .5s;
}

.salas .labelSala{

  align-items: flex-start;
  padding: 10px;

  position: static;
  width: 106px;
  height: 49px;
  left: 0px;
  top: 0px;
}

.listadesplegablesalas:hover {
  background: rgb(143, 143, 143);
}

.sindividual{
  position: absolute;
  margin-top: 50px;
  width: 906px;
  height: 339px;
  left: 187px;
  top: 288px;
}

.sindividual .imagenSala{

  width: 501px;
  height: 339px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  float: left; 
}

.sindividual .datosSala{
  display: flex;
  align-items: flex-start;
  padding: 30px;
  font-weight: 550;

  width: 400px;
  height: 49px;
  left: 0px;
  top: 0px;
}

.sindividual .botonesSala{
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  padding: 30px;
}

</style>