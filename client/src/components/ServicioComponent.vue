<template>
  <div>
    <div class="row">
      <div class="column">
        <p>{{servicio.name}} </p>
      </div>
      <div class="column" >
        <p>{{servicio.price}}€</p>
      </div>
      <div class="column">
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

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>