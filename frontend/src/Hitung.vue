<template>
  <div id="app">
    <div>
      Name: <input type="text" v-model="form.name"> <br />
      Harga: <input type="text" v-model.number="form.price"> <br />
      <button @click="addToCart">Add Data</button>
    </div>  
    <div>
      <ul>
        <li v-for="(cart, index) in carts" :key="index">
          {{ cart.name }} - {{ cart.price }}
          <input type="number" v-model.number="cart.price">
        </li>
      </ul>
      Total harga: {{ grandTotal }} <br />
      Nama: {{ fullName}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    carts: [
      { id: 1, name:"Jagung", price: "21000"},
      { id: 2, name:"Kaca", price: "23000"},
      { id: 3, name:"Pintu", price: "21000"},
      { id: 4, name:"Timun", price: "12000"},
      { id: 5, name:"Udang", price: "52000"},
    ],
    firstName: 'Brian',
    lastName: 'Damastu',
    total: 0,
    form:{
      name:'',
      price:0,
    }
  }),

  async mounted (){ //Hal pertama yang di load oleh halaman (bodyOnLoad)
    const response = await axios.get('http://localhost:2005/users/')
    this.users = response.data
  },

  computed:{ // Perhitungan atau Aritmatik
    grandTotal(){
      return this.carts
        .map(cart => cart.price)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
    },

    fullName(){
      return this.firstName + ' ' + this.lastName
    }
  },

  methods: { // Fungsi seperti onClick, onMouseHover
    addToCart: function () {
      this.carts.push({
        name: this.form.name,
        price: this.form.price,
      })
      this.form.name = ''
      this.form.price = 0
    },

    remove(cart) {
      const index = this.carts.indexOf(cart)
      this.carts.splice(index, 1)
    },

    pop() {
      this.carts.pop()
    }
  }


}
</script>

