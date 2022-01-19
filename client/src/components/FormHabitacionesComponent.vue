<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Número</label>
            <input type="text" id="numero" placeholder="123" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Precio</label>
            <input type="text" id="precio" placeholder="150" />
          </div>
        </div>
        <div class="col-4">
          <div class="field">
            <label class="titulo">Planta</label>
            <input type="text" id="planta" placeholder="2" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Número de habitaciones</label>
            <input type="text" id="habitaciones" placeholder="1" />
          </div>
        </div>
        <div class="col-8">
          <div class="field">
            <label class="titulo">Vistas</label>
            <input type="text" id="vistas" placeholder="Vistas al mar" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="field">
            <label class="titulo">Imagen</label>
            <input type="text" id="imagen" placeholder="imagen.jpg" />
          </div>
        </div>
        <div class="col-8">
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
            <th scope="col">Número</th>
            <th scope="col">Precio</th>
            <th scope="col">Planta</th>
            <th scope="col">NumCamas</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- Ejemplo para hacer la tabla de las habitaciones
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
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "FormHabitacionesComponent",
  components: {
    ButtonComponent,
  },
};
</script>

<style>
</style>