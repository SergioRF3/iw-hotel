<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Nombre</label>
            <input type="text" id="nombre" placeholder="Jaume Aragonés" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Email</label>
            <input type="text" id="email" placeholder="usuario@usuario.com" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Telefono</label>
            <input type="text" id="telefono" placeholder="965123123" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">DNI</label>
            <input type="text" id="dni" placeholder="11111111A" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Tipo</label>
            <input type="text" id="tipo" placeholder="Cliente" />
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
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Estado</th>
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
    name: 'FormUsuariosComponent',
    components: {
        ButtonComponent
    }
}
</script>

<style>

</style>