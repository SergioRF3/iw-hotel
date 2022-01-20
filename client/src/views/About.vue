<template>
  <div class="aboutFondo">
      <div class="aboutElemento">
        <div class="aboutTitulo">Sobre nosotros</div>
        <img class="aboutImagen" src="../assets/imgAbout1.jpg"/>
        <p class="aboutTexto">Como empresa queremos ofrecer siempre el mejor servicio, para ello tenemos reuniones periódicamente pensando que ofrecer que sea mejor que lo anterior a los clientes.</p>

      </div>
      <div class="aboutElemento">
        <img class="aboutImagen" src="../assets/imgAbout2.jpg"/>
        <p class="aboutTexto">LÍDERES. Somos líderes en nuestro sector de nuestra ciudad, fuimos condecorados como el mejor servicio de hotel, por tanto hay fiabilidad de que la experiencia sea buena.</p>

      </div>
      <div class="aboutElemento">
        <img class="aboutImagen" src="../assets/imgAbout3.jpg"/>
        <p class="aboutTexto">DISCLAIMER: Esta web es un proyecto para la asignatura de Ingieniería Web de la carrera Ingeniería Informática de la Universidad de Alicante realizado por Alejandro Aguado Muñoz, Andrés Felipe López Franco, Joaquín José Cerdan López y Sergio Ruiz Francés, por tanto es un proyecto sin ánimo de lucro de un producto que realmente no existe.</p>

      </div>

  </div>
</template>

<script>

export default {
    name: 'About'
}
</script>

<style>

.aboutFondo {

  margin: auto;
  width: 1113px;
  height: 339px;
  left: 71px;
  top: 148px;
  border-radius: 20px;
}

.aboutFondo .aboutElemento {
  margin-bottom: 35px;
}

.aboutFondo .aboutTitulo {

  width: 500px;
  height: 50px;
  font-weight: 900;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 20px;
  color: #2E2E2E;
}

.aboutFondo .aboutImagen {
  float: left;
  margin-right: 30px;
  border-radius: 20px;
  width: 501px;
  height: 339px;
  left: 0px;
  top: 41px;
}

.aboutFondo .aboutTexto {

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
