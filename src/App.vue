<template>
  <Landing></Landing>
</template>

<style lang="postcss">
/* ===== VARIABLES ===== */

:root {
  /* Colors */
  --black: rgb(40, 40, 40);
  --glass-black: rgba(40, 40, 40, 0.2);
  --dirty-white: rgb(245, 245, 245);
  --glass-white: rgba(255, 255, 255, 0.2);
  --blue: rgb(0, 135, 255);
  --glass-blue: rgba(0, 135, 255, 0.2);
  --yellow: rgb(255, 206, 0);
  --glass-yellow: rgba(255, 206, 0, 0.2);

  /* Typography */
  --audiowide: "Audiowide", cursive;
  --exo2: "Exo 2", sans-serif;

  /* Misc */
  --padding-mobile: 1em 1em 2em 2em;
  --adding-desktop: 2em 2em 4em 4em;
}

/* General Styles */

html,
body {
  width: 100%;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--audiowide);
}

body {
  color: var(--black);
  font-family: var(--exo2);
  font-size: 1em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & #App {
    font-size: 2em;
  }
}

@media (min-width: 768px) {
  /* GENERAL STYLES */
  body {
    box-sizing: border-box;
    font-size: 1em;
  }
}
</style>


<script>
import Landing from "./components/Landing";
export default {
  components: {
    Landing
  }
};
</script>

