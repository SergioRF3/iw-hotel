<template>
  <div>
    <div class="habitaciones">
      <select class="listadesplegable" name="Camas" id="camas">
        <option value="0" selected disabled hidden>NºCamas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">+4</option>
      </select>

      <select class="listadesplegable" name="Vistas" id="vistas">
        <option value="0" selected disabled hidden>Vistas</option>
        <option value="1">??</option>
      </select>

      <select class="listadesplegable" name="Precio" id="precio">
        <option value="0" selected disabled hidden>Precio</option>
        <option value="20">+20€/noche</option>
        <option value="40">+40€/noche</option>
        <option value="60">+60€/noche</option>
        <option value="80">+80€/noche</option>
        <option value="100">+100€/noche</option>
      </select>
    </div>
    <div>
      <div class="hindividual">
        <img class="imagenHabitacion" />
        <div class="datosHabitacion">
          <label>Precio/noche: </label>
          <p>100</p>
          <label>€</label>
        </div>
        <div class="datosHabitacion">
          <label>Nº de camas: </label>
          <p>2</p>
        </div>
        <div class="datosHabitacion">
          <label>Vistas: </label>
          <p>Playa</p>
        </div>
        <div class="botonesHabitacion">
          <ButtonComponent nombre="Reservar" />
          <ButtonComponent nombre="Bloquear" />
          <ButtonComponent nombre="Desbloquear" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
    name: 'HabitacionesComponent',
    components: {
      ButtonComponent,
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

.listadesplegable:hover {
  background: rgb(143, 143, 143);
}

.hindividual{
  position: absolute;
  margin-top: 50px;
  width: 906px;
  height: 339px;
  left: 187px;
  top: 288px;
}

.hindividual .imagenHabitacion{

  width: 501px;
  height: 339px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  float: left; 
}

.hindividual .datosHabitacion{
  display: flex;
  align-items: flex-start;
  padding: 30px;
  font-weight: 550;

  width: 277px;
  height: 49px;
  left: 0px;
  top: 0px;
}

.hindividual .botonesHabitacion{
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  padding: 30px;
}

</style>