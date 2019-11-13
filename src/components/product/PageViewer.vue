
<template>
  <div class="page-viewer-container">
    <h2>{{Title}}</h2>
    <p>This a static content with dynamic title. this is a fixed content for demo.</p>
    <p>
      this part is about
      <span class="content-title">{{Title}}</span>subject.
    </p>
    <p>content content content content content content</p>

    <hr />
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "../../styles/PageComponent.scss";
export default {
  name: "pageviewer",
  computed: {
    ...mapGetters({
      products: "getProducts"
    }),
    Title() {
      return this.products &&
        this.products.find(c => c.Name === this.$route.params.id)
        ? this.products.find(c => c.Name === this.$route.params.id).Title
        : "";
    }
  },
  methods: {
    getColClass(info) {
      return info.IsNew != true ? "new-badge-hidden" : "new-badge";
    }
  }
};
</script>