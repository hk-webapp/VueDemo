<template>
  <div class="app-header">
    <h2>Vue Demo</h2>
    <span class="app-header-menu">
      <router-link :to="{name:'rootPage'}">Home</router-link>
    </span>

    <UserStatus />
  </div>
</template>

<script>
import UserStatus from "../user/UserStatus";

export default {
  name: "webHeader",
  components: {
    UserStatus
  }
};
</script>