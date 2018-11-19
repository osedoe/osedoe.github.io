<template>
   <header>
        <Logo></Logo>
        <Jumbotron></Jumbotron>
    </header>
</template>

<script>
import Logo from "./Logo";
import Jumbotron from "./Jumbotron";
export default {
  components: {
    Logo,
    Jumbotron
  },
  props: [],
  data() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style>
header {
  align-content: center;
  background: var(--dirty-white);
  background-size: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  min-height: 800px;
  position: relative;
}

@media (min-width: 768px) {
  header {
    grid-template-columns: 6fr 1fr 5fr 1fr;
  }
}
</style>
