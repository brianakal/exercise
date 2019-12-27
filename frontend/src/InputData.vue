<template>
  <div>
      <form @submit.prevent="saveData">
        Nama : <input type="text" v-model="form.name" /> <br />
        Email : <input type="email" v-model="form.email" />  <br />
        Password : <input type="password" v-model="form.password" />  <br />
        <button type="submit">Add Data Sequelize</button>
        <button type="button" @click="saveDataQuery">Add Data Query</button>
        <button type="button" @click="saveDataDuaTableQuery">Add Data Dua Table Query</button>
      </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    form: {
      name:"",
      email:"",
      password:""
    }
  }),

  methods: {
    async saveData() {
      const response = await axios.post("http://localhost:2005/users/addDataSequelize", this.form);
    },
    async saveDataQuery() {
      const response = await axios.post("http://localhost:2005/users/addDataQuery", this.form);
    },
    async saveDataDuaTableQuery() {
      const response = await axios.post("http://localhost:2005/users/saveDataDuaTableQuery", this.form);
    },
  }
}
</script>