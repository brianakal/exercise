<template>
  <div>
    <button @click="toggleUserList">Toggle show / hide</button>
    <button @click="getUsers">Reload User List</button>
    <div v-if="$store.state.users.show_users">
      <ul v-if="users.length">
        <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
      </ul>
      <div v-if="!users.length">No data</div>
    </div>
    <div>
      <!-- Cuti : {{ dashboard.cuti }} -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      users: data => data.users.users
    })
  },

  mounted() {
    // this.getUsers();
  },

  methods: {
    ...mapMutations({
      toggleUserList: "users/toggleUserList"
    }),
    ...mapActions({
      getUsers: "users/fetchUsers"
    })
  }
};
</script>
