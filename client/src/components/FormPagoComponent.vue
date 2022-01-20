<template>
  <div>

    <h1> Pago </h1>

    <div class="formPago">
    <div class="field">
      <label class="titulo">Cantidad</label>
      <input v-model="payment.amount" type="number" id="cantidad" placeholder="0.00" />
    </div>
    <div class="field">
      <label class="titulo">Concepto</label>
      <input v-model="payment.concept" type="text" id="nombre" placeholder="Concepto" />
    </div>
    <div class="field">
      <label class="titulo">Referencia</label>
      <input v-model="payment.reference" type="text" id="referencia" placeholder="Referencia" />
    </div>
    
    <div class="total">
      
      <h4>Tarjeta de crédito</h4>

    </div>
    <div class="field">
      <label class="titulo">Titular</label>
      <input v-model="payment.creditCard.owner" type="text" id="titular" placeholder="Titular" />
    </div>
    <div class="field">
      <label class="titulo">Número</label>
      <input v-model="payment.creditCard.number"  type="number" id="numero" placeholder="Número" />
    </div>
    <div class="field">
      <label class="titulo">CCV</label>
      <input v-model="payment.creditCard.ccv"  type="text" id="ccv" placeholder="CCV" />
    </div>
    <div class="field">
      <label class="titulo">Fecha de expiración</label>
      <input v-model="payment.creditCard.expiry"  type="text" id="expiracion" placeholder="Fecha de expiración" />
    </div>
    <div class="total">
       <ButtonComponent @click="pay()" nombre="Pagar" />
    </div>
  </div>

    <!-- 
      "amount": 40.4,
      "concept": "Compra tienda",
      "reference": "124234x",
      "creditCard": {
      "owner": "Pepa Cerdá",
      "number": "4016978883523921",
      "ccv": 123,
      "expiry": "05/2025"
    -->

  </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import PaymentService from "@/services/payment.service.js";

export default {
    name: 'FormPagoComponent',
    components: {
    ButtonComponent,
  },
  data() {
    return {
      payment: {
        amount: "",
        concept: "",
        reference: "",
        creditCard: {
          owner: "",
          number: "",
          ccv: "",
          expiry: ""
        }
      }
    }
  },
  methods: {
    pay(){
      PaymentService.getToken().then(
        response => {
          PaymentService.postPayment(this.payment, response.data.authToken).then(
            response => {
              console.log(response)
            }
          )
        }
      )
    }
  },
}
</script>

<style>
.total{
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.formPago {
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
  padding: 5px 0px 5px 5px;
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