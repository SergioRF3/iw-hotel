<template>
  <div>
    <div>
      <div class="sindividual">
        <img class="imagenSala" :src="sala.image"/>
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
            <router-link :to="'/reservaSala/' + sala.id">
              <ButtonComponent nombre="Reservar" />
            </router-link>
            <ButtonComponent v-if="type == '0'" nombre="Bloquear" />
            <ButtonComponent v-if="type == '0'" nombre="Desbloquear" />
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
    props: ['sala'],
    data() {
        return {
            type: localStorage.getItem('type')
        }
    },
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


</style>