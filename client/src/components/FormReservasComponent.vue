<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Usuario</label>
            <input type="text" id="nombre" placeholder="Jaume Aragonés" />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Número de sala o habitación</label>
            <input type="text" id="numero" placeholder="012" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Fecha de inicio</label>
            <input type="text" id="inicio" placeholder="20-01-2022" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Fecha salida</label>
            <input type="text" id="salida" placeholder="24-01-2022" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Estado</label>
            <input type="text" id="estado" placeholder="Disponible" />
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
            <th scope="col">Usuario</th>
            <th scope="col">Número</th>
            <th scope="col">Entrada</th>
            <th scope="col">Salida</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- Ejemplo para hacer la tabla de las usuarios
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
    name: 'FormReservasComponent',
    components: {
        ButtonComponent
    }
}
</script>

<style>

</style>