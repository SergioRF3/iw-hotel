<template>
  <div>
    <div class="">
      <div class="">
        <label>Nombre</label>
        <p>{{servicio.name}} </p>
      </div>
      <div class="">
        <label>Precio: </label>
        <p>{{servicio.price}} </p>
        <label>€</label>
      </div>
      <div class="">
        <ButtonComponent nombre="Añadir" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
    name:'ServicioComponent',
    components: {
      ButtonComponent,
    },
    props: ['servicio']
};
</script>

<style>

</style>