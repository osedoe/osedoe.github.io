<template>
  <div class="jumbotron">
    <h1> {{ title1 }} </h1>
    <h1> {{ title2 }} </h1>
    <h1> {{ title3 }} </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: `Hola`,
      title2: `I'm Jose`,
      title3: `A Full Stack Web Developer from the Canary Islands.`
    };
  }
};
</script>

<style>
.jumbotron {
  grid-column: 2/3;
}

@media (min-width: 768px) {
  .jumbotron {
    grid-column: 3/4;
    margin: 0 auto;
  }
}
</style>
