<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Media1"
              v-model="form.name"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Incremento %</label>
            <input
              type="text"
              id="incremento"
              placeholder="20"
              v-model="form.increment"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="field">
            <label class="titulo">Fecha inicio</label>
            <input
              type="text"
              id="inicio"
              placeholder="20-04"
              v-model="form.start"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="titulo">Fecha fin</label>
            <input type="text" id="fin" placeholder="18-06" v-model="form.end" />
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent
          v-if="introducir"
          nombre="Introducir"
          @click="createSeason"
        />
        <ButtonComponent
          v-if="introducir == false"
          nombre="Modificar"
          @click="modifySeason"
        />
        <ButtonComponent nombre="Limpiar" @click="botonLimpiar" />
      </div>
    </div>
    <div class="tabla">
      <b-table
        striped
        hover
        head-variant="dark"
        :fields="fields"
        :items="temporadas"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
      >
        <template #cell(actions)="data">
          <div class="acciones">
            <ButtonComponent
              nombre="Ver Detalles"
              @click="getSeason(data.item.id)"
            />
            <ButtonComponent
              nombre="Borrar"
              @click="deleteSeason(data.item.id)"
            />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import SeasonService from "@/services/season.service.js";

export default {
  name: "FormTemporadasComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      introducir: true,
      sortBy: "id",
      sortDesc: false,
      temporadas: [],
      fields: [
        {
          key: "id",
          label: "Id",
          sortable: true,
        },
        {
          key: "name",
          label: "Nombre",
          sortable: true,
        },
        {
          key: "increment",
          label: "Incremento",
        },
        {
          key: "actions",
          label: "Acciones",
        },
      ],
      form: {
        id: "",
        name: "",
        increment: "",
        start: "",
        end: "",
      },
    };
  },
  created() {
    this.getSeasons();
  },
  methods: {
    getSeasons() {
      SeasonService.getSeasons().then((res) => {
        if (res.status == 200) {
          this.temporadas = res.data.data;
        }
      });
    },
    getSeason(id) {
      SeasonService.getSeason(id).then((res) => {
        if ((res.status == 200)) {
          this.form.id = res.data[0].id;
          this.form.name = res.data[0].name;
          this.form.increment = res.data[0].increment;
          this.form.start = res.data[0].start;
          this.form.end = res.data[0].end;
          this.introducir = false;
        }
      });
    },
    createSeason() {
      SeasonService.createSeason(this.form).then((res) => {
        if (res.status == 201) {
          this.getSeasons();
          this.resetForm();
        }
      });
    },
    modifySeason() {
      SeasonService.modifySeason(this.form).then((res) => {
        if (res.status == 201) {
          this.getSeasons();
          this.resetForm();
        }
      });
    },
    deleteSeason(id) {
      console.log('lol')
      if (window.confirm("¿Estas seguro que quieres borrar esta temporada?")) {
        SeasonService.deleteSeason(id).then(
          (res) => {
          if (res.status == 200) {
            this.getSeasons();
          }
        });
      }
    },
    resetForm() {
      this.form.id = '';
      this.form.name = '';
      this.form.increment = '';
      this.form.start = '';
      this.form.end = '';
      this.introducir = true;
    },
    botonLimpiar() {
      if(window.confirm('¿Estas seguro de que quieres limpiar los datos?')){
        this.resetForm()
      }
    }
  },
};
</script>

<style>
</style>