<template>
  <div>
    <h1>Reserva de salas</h1>

    <!-- Salas -->
    <div class="hreserva">
      <img class="fotoReserva" :src="sala.image"/>
        <div class="datosReserva">
          <label>Número de sala: </label>
          <p>{{sala.number}} </p>
        </div>
      <div class="datosReserva">
        <label>Precio/dia: </label>
        <p>{{sala.price}} </p>
        <label>€</label>
      </div>
      <div class="datosReserva">
        <label>Aforo: </label>
        <p>{{sala.capacity}} </p>
      </div>
      <div class="datosReserva">
        <p>Esta sala con capacidad de {{sala.capacity}} personas...</p>
      </div>
      <div class="datosReserva">
        <label>Total: </label>
        <p>{{sala.price}} </p>
      </div>
    </div>

       <!-- Servicios -->
    <div class="hreserva">
      <h2> Servicios </h2>
      <ul class="tablaServicios" v-for="service in services" :key="service.id">
        <li>
          <ServicioComponent @addPrice=addPrice @subPrice=subPrice :servicio=service></ServicioComponent>
        </li>
      </ul>

    <div class="hreserva">
        <h3>Total Reserva: {{total}}</h3>
        <ButtonComponent nombre="Pagar" />
     </div>
      </div>
    </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ServicioComponent from '@/components/ServicioComponent.vue'
import HallService from '@/services/hall.service.js'
import ServiceService from '@/services/service.service.js'

export default {
    name: 'FormReservarSalasComponent',
    components: {
      ButtonComponent,
      ServicioComponent
    },
    data() {
      return {
        sala: "",
        total: "",
        services: ""
      }
    },
    created() {
      ServiceService.getServices().then(
        response => {
          this.services = response.data.data
        }
      )
      HallService.getHall(this.$route.params.id).then(
        response => {
          this.sala = response.data[0]
          this.total = this.sala.price  

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
}

</style>