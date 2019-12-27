<template>
  <div id="app">

    <div id="Navbar">
      <TopBar />
    </div>

    <div  id="Button">
      <MyButton>Save</MyButton>
      <MyPrimaryButton>Delete</MyPrimaryButton>
      <MyButton>Update</MyButton>
      <MyButton>Delete</MyButton>
    </div>

    <div id="Kotak">
      <div>
        <h1>Home</h1>
        <Score :value="homeScore"/>
        <MyButton @tekan="minus('home')">-</MyButton>
        <MyButton @tekan="plus('home')">+</MyButton>
      </div>

      <div>
        <h1>Away</h1>
        <Score :value="awayScore"/>
        <MyButton @tekan="minus('away')">-</MyButton>
        <MyButton @tekan="plus('away')">+</MyButton>
      </div>
    </div>
    
    <div id="Kotak2">
       <div style="float: left; width: 400px;">
        <Score2 label="homeScore2" :value2="homeScore2" @update="updateScore">
          Score2
        </Score2>
      </div>

      <div style="float: right width: 400px;">
        <Score2 label="awayScore2" :value2="awayScore2" @update="updateScore">
          Away2
        </Score2>
      </div>
    </div>

    <div id="DataBackend">
      <ul>
        <li v-for="(user, index) in users" :key="index"> <!-- mengulang harus ada field pembeda (unik field), maka daripada itu ditambah (user, index)-->
          {{ user.name}} - {{ user.email}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import TopBar from './components/TopBar'
import MyButton from './components/MyButton'
import MyPrimaryButton from './components/MyPrimaryButton'
import Score from './components/Score'
import Score2 from './components/Score2'

import axios from 'axios'

export default {
  data: () => ({
    users: [],
    homeScore: 21,
    awayScore: 0,
    homeScore2: 0,
    awayScore2: 0,
  }),

  async mounted (){
    const response = await axios.get('http://localhost:2005/users/')
    this.users = response.data
  },

  components: {
    TopBar,
    MyButton,
    MyPrimaryButton,
    Score,
    Score2,
  },

  methods: {
    plus(side) {
      if (side === 'home') {
        this.homeScore++
      } else {
        this.awayScore++
      }
    },

    minus(side) {
      if (side === 'home') {
        this.homeScore--
      } else {
        this.awayScore--
      }
    },

    updateScore({score, label}) {
      this[label] = score
    },
  }


}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
