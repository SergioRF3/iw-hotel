<template>
  <div>

    <h1>Reserva de habitaciones</h1>
    
    <!-- Habitación -->
    <div class="hreserva">
      <img class="fotoReserva" :src="habitacion.image"/>
      <div class="datosReserva">
        <label>Nº de habitación: {{habitacion.number}}</label>
      </div>
      <div class="datosReserva">
        <label>Precio/noche: {{habitacion.price}}€</label>
      </div>
      <div class="datosReserva">
        <label>Nº de camas: {{habitacion.beds}}</label>
      </div>
      <div class="datosReserva">
        <label>Vistas: {{habitacion.views}} </label>
      </div>
      <div class="datosReserva">
        <label>Total: {{habitacion.price}}€</label>
      </div>
    </div>

      <!-- Servicios -->
    <div class="hreserva">
      <h2> Servicios </h2>
      <ul class="tablaServicios" v-for="service in services" :key="service.id">
          <ServicioComponent @addPrice=addPrice @subPrice=subPrice :servicio=service></ServicioComponent>
      </ul>
      <div class="total">
        <h3>Total Reserva: {{total}}€</h3>
        <ButtonComponent nombre="Pagar"/>
      </div>
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
        services: "",
        total: "",
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
          this.total = this.habitacion.price  
        }
      )
    },
    methods: {
      addPrice(newPrice){
        this.total += newPrice
      },
      subPrice(newPrice){
        this.total -= newPrice
      }
    },
}
</script>


<style>

.hreserva{
  margin: auto;
  margin-top: 125px;
  width: 906px;
  height: 339px;
  left: 187px;
  top: 288px;
}

.hreserva .fotoReserva{

  width: 501px;
  height: 339px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  float: left; 
}

.hreserva .datosReserva {

  display: flex;
  align-items: flex-start;
  padding: 30px;
  font-weight: 550;

  width: 277px;
  height: 49px;
  left: 0px;
  top: 0px;
}

.hreserva .tablaServicios{

  border-radius: 20px;
  background-color: rgb(36, 36, 36);
  box-shadow: 7px 7px 15px black;
  color: white;
  align-content: center;
}

.total{
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>