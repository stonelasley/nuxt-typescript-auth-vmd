<template>
  <div>
    <h3>Users</h3>
    <ul v-for="user in users" :key="user">
      <li>{{ user }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userStore } from "~/store";

@Component
export default class HelloWorld extends Vue {
  get users() {
    return userStore.users;
  }

  async mounted() {
    await userStore.fetchUsers();
    await userStore.addNewuser("curly");
  }
}
</script>
