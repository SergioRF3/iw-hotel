<template>
  <div class="instalaciones-public">
    <div v-for="vi in instalaciones" :key="vi.id">
      <div class="elemento-instalacion">
        <div class="titulo-instalacion">{{vi.name}}</div>
        <img class="izquierda-instalacion" :src="vi.image"/>
        <p class="texto-instalacion">{{vi.description}}</p>

      </div>
    </div>

  </div>
</template>

<script>
import InstalacionService from '@/services/facility.service.js'

export default {
    name: 'InstalacionesComponent',
    data() {
      return {
        instalaciones: ''
      }
    },
    created() {
      InstalacionService.getFacilitys().then(
        response =>{
          this.instalaciones = response.data.data
        }
      )
    }
};
</script>

<style>

.instalaciones-public{
  margin: auto;
  width: 1113px;
  height: 339px;
  left: 71px;
  top: 148px;
}

.instalaciones-public .elemento-instalacion{
  margin-bottom: 35px;
}

.instalaciones-public .titulo-instalacion{
  width: 84px;
  height: 29px;
  left: 0px;
  top: 0px;
  font-weight: 900;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 20px;
  color: #2E2E2E;
}

.instalaciones-public .izquierda-instalacion{
  float: left;
  margin-right: 30px;
  border-radius: 20px;
  width: 501px;
  height: 339px;
  left: 0px;
  top: 41px;
}

.instalaciones-public .texto-instalacion {
  text-align: justify;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  width: 530px;
  height: 321px;
  left: 557px;
  top: 50px;
  display: inline-block;
  vertical-align: top;
}

</style>