<template>
  <div>
    <div class="habitaciones">
      <select v-model="beds" class="listadesplegable" name="Camas" id="camas">
        <option value="0" selected disabled hidden>NºCamas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">+4</option>
      </select>

      <select v-model="views" class="listadesplegable" name="Vistas" id="vistas">
        <option value="0" selected disabled hidden>Vistas</option>
        <option value="piscina">Piscina</option>
        <option value="playa">Playa</option>
        <option value="ciudad">Ciudad</option>
      </select>

      <select v-model="price" class="listadesplegable" name="Precio" id="precio">
        <option value="0" selected disabled hidden>Precio</option>
        <option value="20">+20€/noche</option>
        <option value="40">+40€/noche</option>
        <option value="60">+60€/noche</option>
        <option value="80">+80€/noche</option>
        <option value="100">+100€/noche</option>
      </select>

      <label class="labelHabitacion">Entrada:</label>
      <input class="listadesplegable" id="fechaEntrada" type="date">
      <label class="labelHabitacion">Salida:</label>
      <input class="listadesplegable" id="fechaSalida" type="date">
    </div>
    <ul v-for="habitacion in habitaciones" :key="habitacion.id">
      <li>
        <HabitacionComponent :habitacion=habitacion></HabitacionComponent>
      </li>
    </ul>
  </div>
</template>

<script>
import HabitacionComponent from "@/components/HabitacionComponent.vue";
import HabitacionService from '@/services/room.service.js'

export default {
  name: 'HabitacionesComponent',
  components: {
    HabitacionComponent
  },
  data() {
    return {
      habitaciones: '',
      beds: 0,
      views: 0,
      price: 0,
    }
  },
  created() {
    HabitacionService.getRooms(this.beds, this.views, this.price).then(
      response =>{
        this.habitaciones = response.data
      }
    )
  },
  methods: {
    getRooms(){
      HabitacionService.getRooms(this.beds, this.views, this.price).then(
        response =>{
          this.habitaciones = response.data  
        }
      )
    }
  },
  watch: {
    beds(){
      this.getRooms()
    },
    views(){
      this.getRooms()
    },
    price(){
      this.getRooms()
    }
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

</style>