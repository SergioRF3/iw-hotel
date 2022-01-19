<template>
    <div class="home">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          background="#ccc"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide img-src="../assets/imgHome1.jpg"></b-carousel-slide>

          <b-carousel-slide img-src="../assets/imgHome2.jpg"></b-carousel-slide>

          <b-carousel-slide img-src="../assets/imgHome3.jpg"></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="textoHome">
        <div class="tituloHome">HOTEL PLAZA ALICANTE</div>
        <p class="descripcionHome">El encanto de nuestro hotel situado en pleno centro de la ciudad de Alicante es una experiencia que cualquier turista debe vivir en la vida, junto a los servicios excepcionales que ofrecemos estar aquí alojado es más que estar en un hotel.</p>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src="../assets/imgHome4.jpg"/>
            <div class="card-body">
              <h4 style="color: white" class="card-title">Desayunos</h4>
              <p></p>
              <p class="card-text">Pruebe nuestros excelentes desayunos en el restaurante, la calidad no decepciona.</p>
            </div>
          </div>
          <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src="../assets/imgHome5.jpg"/>
            <div class="card-body">
              <h4 style="color: white" class="card-title">Minibar</h4>
              <p></p>
              <p class="card-text">En cada habitación hay una nevera con productos para su consumo que proporciona el hotel.</p>
            </div>
          </div>
          <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src="../assets/imgHome6.jpg"/>
            <div class="card-body">
              <h4 style="color: white" class="card-title">Alicante</h4>
              <p></p>
              <p class="card-text">Nuestro hotel se sitúa en un zona ideal para los turistas, recorre el centro de Alicante nada más salir del hotel.</p>
            </div>
          </div>
        </b-card-group>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>

<style>

.home{

  margin-left: 50px;
  margin-right: 50px;
  top: 202px;
  border-radius: 20px;
  overflow: hidden;  
}

.home .textoHome{

  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 200px;
  margin-right: 200px;
  text-align: center;
}

.home .textoHome .tituloHome{

  font-size: 30px;
  font-weight: 900;
  border-bottom: rgb(163, 163, 163) 1px solid;
}

.home .textoHome .descripcionHome{

  font-size: 22px;
}

</style>