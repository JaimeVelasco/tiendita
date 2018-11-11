<template>
  <section>
    <div>
      <h1 class="title">
        Agusto en La Saladita
      </h1>
      <h2 class="subtitle">Portal de pagos en linea</h2>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo"

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
section {
  background-size: cover;
  background: url(/checheche.jpg) no-repeat center center fixed;
}

.title,
.subtitle {
  text-align: center;
  padding: 1rem;
}

.title {
  font-size: 10vw;
  padding-bottom: 0.5em;
}

.subtitle {
  padding-bottom: 3em;
}
</style>
