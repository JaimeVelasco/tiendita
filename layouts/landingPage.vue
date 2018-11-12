<template>
  <div class="home">
    <section class="content"><nuxt /></section>

    <div class="footer">Spy Surf Che Che Che en Playa La Saladita, México</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  height: 100vh;
  min-height: 100%;
}

section.content {
  padding: 1rem;
}

@media only screen and (min-width: 500px) {
  section.content {
    padding: 0;
  }
}
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
