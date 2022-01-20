<template>
  <div class="instalaciones">
    <div class="form">
      <div class="row">
        <div class="col-12">
          <div class="field">
            <label class="titulo">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Instalación"
              v-model="form.name"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="field">
            <label class="titulo">Descripción</label>
            <textarea
              name="textarea"
              id="textarea"
              placeholder="Introduce aqui la descripción de la instalación"
              cols="30"
              rows="6"
              v-model="form.description"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="botones">
        <ButtonComponent
          v-if="introducir"
          nombre="Introducir"
          @click="createFacility"
        />
        <ButtonComponent
          v-if="introducir == false"
          nombre="Modificar"
          @click="modifyFacility"
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
        :items="instalaciones"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
      >
        <template #cell(actions)="data">
          <div class="acciones">
            <ButtonComponent
              nombre="Ver Detalles"
              @click="getFacility(data.item.id)"
            />
            <ButtonComponent
              nombre="Borrar"
              @click="deleteFacility(data.item.id)"
            />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import FacilityService from "@/services/facility.service.js";

export default {
  name: "FormInstalacionesComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      introducir: true,
      sortBy: "id",
      sortDesc: false,
      instalaciones: [],
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
          key: "actions",
          label: "Acciones",
        },
      ],
      form: {
        id: "",
        name: "",
        image: "",
        description: "",
      },
    };
  },
  created() {
    this.getFacilitys();
  },
  methods: {
    getFacilitys() {
      FacilityService.getFacilitys().then((res) => {
        if (res.status == 200) {
          this.instalaciones = res.data.data;
        }
      });
    },
    getFacility(id) {
      FacilityService.getFacility(id).then((res) => {
        if (res.status == 200) {
          this.form.id = res.data[0].id;
          this.form.name = res.data[0].name;
          this.form.image = res.data[0].image;
          this.form.description = res.data[0].description;
          this.introducir = false;
        }
      });
    },
    createFacility() {
      FacilityService.createFacility(this.form).then(
        res => {
          if(res.status == 201){
            this.getFacilitys()
            this.resetForm()
          }
        }
      )
    },
    modifyFacility() {
      console.log('lol')
      FacilityService.modifyFacility(this.form).then(
        res => {
          if(res.status == 201){
            this.getFacilitys()
            this.resetForm()
          }
        }
      )
    },
    deleteFacility(id){
      if(window.confirm('¿Estas seguro de borrar esta instalación?')){
        FacilityService.deleteFacility(id).then(
          res => {
            if(res.status == 200){
              this.getFacilitys()
            }
          }
        )
      }
    },
    resetForm() {
      this.form.id = '';
      this.form.name = '';
      this.form.image = '';
      this.form.description = '';
      this.introducir = true
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
.acciones {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.tabla {
  margin: 10vh auto;
  width: 80%;
}
.table th {
  border-top: 0px;
}
tr th:first-child {
  border-radius: 20px 0px 0px 0px;
}
tr th:last-child {
  border-radius: 0px 20px 0px 0px;
}

.form {
  width: 60%;
  background-color: #b5b2b2;
  margin: auto;
  border-radius: 20px;
  padding: 30px 30px 10px;
}
.field {
  margin-top: 10px;
  display: flex;
  flex-flow: column;
}
.field label {
  display: flex;
  color: black;
  margin-left: 10px;
}

.field input {
  background-color: white;
  border-width: 0px;
  padding: 5px 0px 5px 10px;
  border-radius: 10px;
}

.field textarea {
  background-color: white;
  border-width: 0px;
  padding: 5px 0px 5px 10px;
  border-radius: 10px;
}

.cuenta {
  display: flex;
  flex-flow: row;
}

.cuenta a {
  display: block;
  font-weight: bold;
  color: #f6fb26;
  text-decoration: none;
  text-decoration: underline;
}

.cuenta label {
  margin-left: 10px;
  font-weight: bold;
  color: black;
}

.botones {
  display: flex;
  flex-flow: row;
  padding: 30px 10px 10px;
}
</style>