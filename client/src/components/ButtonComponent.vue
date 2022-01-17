<template>
  <div class="button"><a>{{nombre}}</a></div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        nombre: {
            type: String,
            default: ''
        }
    }

}
</script>

<style scoped>
.button {
    display: flex;
    flex-direction: row;
}
.button a{
    display: block;
    padding: 10px 15px;
    background: black;
    border-radius: 20px;
    font-size: 14px;
    color: #FFFFFF;
    margin-right: 10px;
}

</style>