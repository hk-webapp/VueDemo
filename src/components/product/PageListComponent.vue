
<template>
  <div class="page-container">
    <div class="ss-row">
      <div class="ss-col-4" v-for="(info,index) in products" v-bind:key="index">
        <div class="page-item">
          <div :class=" getColClass(info)">
            <span class="rotate-span">New</span>
          </div>
          <div class="page-item-header">
            <img
              :src="getImgUrl(info.IntroImg)"
              @error="onErrorHandler($event)"
              class="page-item-img"
              :alt="info.Title"
            />
            <div class="page-item-title">
              <router-link :to="{name:'pageviewer' ,params:{id: info.Name} }">{{info.Title}}</router-link>
            </div>
          </div>
          <div class="page-item-info">{{info.IntroInfo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "../../styles/PageComponent.scss";
export default {
  name: "pagelistcomponent",
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  methods: {
    onErrorHandler(event) {
      // eslint-disable-next-line
      console.log(454, event);
      // ele=>alert(ele.class='img-not-found')
    },
    getColClass(info) {
      return info.IsNew != true ? "new-badge-hidden" : "new-badge";
    },
    getImgUrl(img) {
      try {
        return require("../../assets/images/" + img);
      } catch {
        return null;
      }
    }
  }
};
</script>