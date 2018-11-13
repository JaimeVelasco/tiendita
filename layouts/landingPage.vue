<template>
  <v-app light>
    <v-layout column wrap fill-height pa-0>
      <section class="content"><nuxt /></section>
    </v-layout>
    <v-footer class="pa-3">
      Spy Surf Che Che Che en Playa La Saladita, México
      <v-spacer />
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    binding() {
      const binding = {}

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

      return binding
    }
  }
}
</script>

<style scoped>
section.content {
  padding: 0;
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
