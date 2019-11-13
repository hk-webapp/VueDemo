<template>
  <div class="web-container">
    <header>
      <Header />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Header from "./WebHeader";
import Footer from "./WebFooter";
export default {
  name: "WebLayout",
  components: {
    Header,
    Footer,
  }
};
</script>