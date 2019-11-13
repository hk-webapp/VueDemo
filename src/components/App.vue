<template>
  <div id="app-0630">
    <component v-bind:is="currentLayout"></component>
  </div>
</template>

<script>
import WebLayout from "./layouts/WebLayout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../styles/app.scss";

export default {
  name: "app",
  computed: {
    currentLayout() {
      return WebLayout;
    }
  }
};
</script>

