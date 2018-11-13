<template>
  <section>
    <div>
      <h1 class="title">Spy Surf Che Che Che</h1>
      <h2 class="subtitle">Playa La Saladita</h2>
      <router-link :to="'/category/renta-de-tablas'">lslsls</router-link>
      <router-link :to="'/category/servicios'">Servicios</router-link>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs6>
          <v-card>
            <v-card-text class="px-5">
              <router-link :to="'/category/servicios'"> Servicios </router-link>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-text class="px-5">
              <router-link :to="'/category/renta-de-tablas'">
                Renta De Tablas
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo"

export default {
  layout: "landingPage",
  components: {
    AppLogo
  }
}
</script>

<style scoped>
section {
  background-size: cover;
  background: url(/checheche.jpg) no-repeat center center fixed;
  height: 100vh;
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
