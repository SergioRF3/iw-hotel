<template>
  <div>
    <div class="salas">
      <select class="listadesplegablesalas" name="Aforo" id="aforo">
        <option value="0" selected disabled hidden>Aforo</option>
        <option value="50">+50 personas</option>
        <option value="100">+100 personas</option>
        <option value="200">+200 personas</option>
        <option value="400">+400 personas</option>
      </select>

      <select class="listadesplegablesalas" name="Precio" id="precio">
        <option value="0" selected disabled hidden>Precio</option>
        <option value="100">+100€/dia</option>
        <option value="200">+200€/dia</option>
        <option value="300">+300€/dia</option>
        <option value="400">+400€/dia</option>
        <option value="500">+500€/dia</option>
      </select>

      <label class="labelSala">Entrada:</label>
      <input class="listadesplegablesalas" id="fechaEntrada" type="date">
      <label class="labelSala">Salida:</label>
      <input class="listadesplegablesalas" id="fechaSalida" type="date">
    </div>
    <ul v-for="sala in salas" :key="sala.id">
      <li>
        <SalaComponent :sala=sala></SalaComponent>
      </li>
    </ul>
  </div>
</template>

<script>
import SalaComponent from '@/components/SalaComponent.vue'
import SalaService from '@/services/hall.service.js'

export default {
  name:'SalasComponent',
  components: {
    SalaComponent
  },
  data() {
    return {
      salas: ''
    }
  },
  created() {
    SalaService.getHalls().then(
      response =>{
        this.salas = response.data.data
      }
    )
  },
};
</script>

<style>


.sindividual{
  margin: auto;
  margin-top: 125px;
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