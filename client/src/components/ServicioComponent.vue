<template>
  <div>
    <div class="servicios">
      <div class="datosServicio">
        <label>Nombre: </label>
        <p>{{servicio.name}} </p>
      </div>
      <div class="datosServicio">
        <label>Precio: </label>
        <p>{{servicio.price}} </p>
        <label>€</label>
      </div>
      <div class="datosServicio">
        <ButtonComponent v-if="!added" @click="addService()" nombre="Añadir" />
        <ButtonComponent v-if="added" @click="subPrice()" nombre="Quitar" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
    name:'ServicioComponent',
    data() {
      return {
        added: false
      }
    },
    components: {
      ButtonComponent,
    },
    props: ['servicio'],
    methods: {
      addService(){
        this.added = true
        this.$emit('addPrice', this.servicio.price)
      },
      subPrice(){
        this.added=false
        this.$emit('subPrice', this.servicio.price)
      }
    },
};
</script>

<style>

.servicios{

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 50px;

  width: 400px;
  height: 120px;
}

.servicios .datosServicio{

  display: flex;
  align-items: flex-start;
  padding: 10px 20px;
  margin-right: 100px;
}

</style>