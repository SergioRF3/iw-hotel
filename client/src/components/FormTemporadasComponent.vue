<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Nombre</label>
            <input type="text" id="nombre" placeholder="Media1" />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Incremento %</label>
            <input type="text" id="incremento" placeholder="20" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Fecha inicio</label>
            <input type="text" id="inicio" placeholder="20-04" />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Fecha fin</label>
            <input type="text" id="fin" placeholder="18-06" />
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent nombre="Introducir" />
        <ButtonComponent nombre="Volver" />
      </div>
    </div>
    <div class="tabla">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Incremento</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- Ejemplo para hacer la tabla de las servicios
            <tr v-for="vu in valoresUsuarios" :key="vu.id">
            <th>{{vu.id}}</th>
            <td>{{vu.nombre}}</td>
            <td><button class="btn btn-danger btn-xs" @click="verDetallesUsuario(vu.id)">Ver Detalles</button></td>
            <td><button class="btn btn-primary btn-xs" @click="borrarUsuario(vu.id, $event)" >X</button></td>
            </tr>  -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
    name: 'FormTemporadasComponent',
    components: {
        ButtonComponent
    }
}
</script>

<style>

</style>