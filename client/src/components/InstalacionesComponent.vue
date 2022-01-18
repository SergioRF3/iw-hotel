<template>
  <div class="instalaciones">
    <div>
      <div class="titulo">TITULO</div>
      <img class="izquierda"/>
      <p class="texto"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam corporis ipsam nobis porro expedita blanditiis sit magni iusto reprehenderit at illo tempore exercitationem officiis repellat natus hic eos ab, tenetur nesciunt impedit atque veniam a voluptatum? Error corrupti laboriosam nulla eius. Fugit quisquam repellendus, dolor quos facere necessitatibus. Assumenda, dolor, qui at adipisci fugiat voluptatibus voluptatem id rerum error unde veniam hic alias</p>

    </div>

  </div>
</template>

<script>
export default {
    name: 'InstalacionesComponent'
}
</script>

<style>

.instalaciones{
  margin: auto;
  width: 1113px;
  height: 339px;
  left: 71px;
  top: 148px;
}

.instalaciones .titulo{
  width: 84px;
  height: 29px;
  left: 0px;
  top: 0px;
  color: #2E2E2E;
}

.instalaciones .izquierda{
  float: left;
  margin-right: 30px;
  border-radius: 20px;
  width: 501px;
  height: 339px;
  left: 0px;
  top: 41px;
}

.instalaciones .texto {
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