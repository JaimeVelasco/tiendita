<template>
  <div class="root">
    <header>
      <router-link :to="'/'" class="logo"> <AppLogo /> </router-link>
      <nav>
        <ul>
          <li>
            <router-link :to="'/category/servicios'">Servicios</router-link>
          </li>
          <li><router-link :to="'/vendor'">Nosotros</router-link></li>
        </ul>
      </nav>
      <div ref="cart" class="cart">
        <a href="#" class="snipcart-checkout">
          <div class="snipcart-summary">
            🛒 <span class="snipcart-total-items" /> Cosas en carrito
            <span class="snipcart-total-price" />
          </div>
        </a>
      </div>
    </header>

    <section class="sidebar">
      <ul class="categories">
        <li
          v-for="category in this.$store.state.globalData.categoryTree"
          v-if="category.slug"
          :key="category._id"
          class="category"
        >
          <router-link :to="'/category/' + category.slug.current">
            {{ category.title }}
          </router-link>
          <ul v-if="category.children" class="sub-categories">
            <li
              v-for="subCategory in category.children"
              v-if="subCategory.slug"
              :key="category._id + subCategory._id"
            >
              <router-link :to="'/category/' + subCategory.slug.current">
                {{ subCategory.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="content"><nuxt /></section>

    <div class="footer">Spy Surf Che Che Che en Playa La Saladita, México</div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue"

export default {
  components: {
    AppLogo
  },
  mounted() {
    if (!window.Snipcart) {
      throw new Error(
        "Snipcart not found. Make sure snipcart is loaded on page. For more info, see https://docs.snipcart.com/getting-started/installation"
      )
    }
    const cart = this.$refs.cart
    let timeoutId
    window.Snipcart.subscribe("item.adding", () => {
      cart.classList.add("pop")
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        cart.classList.remove("pop")
      }, 220)
    })
  }
}
</script>

<style scoped>
@media only screen and (min-width: 500px) {
  .root {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 15rem auto;
    grid-template-rows: 5em minmax(calc(100vh - 12rem), auto) 5em;
    grid-template-areas:
      "header   header"
      "sidebar  content"
      "footer   footer";
  }
}

header {
  grid-area: header;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}

section.sidebar {
  grid-area: sidebar;
  border-right: 1px solid #ddd;
}

section.content {
  grid-area: content;
  padding: 1rem;
}

@media only screen and (min-width: 500px) {
  section.content {
    padding: 0rem 1rem 1rem 0rem;
  }
}

.snipcart-checkout {
  text-decoration: none;
}

.snipcart-total-price {
  font-weight: 600;
}

.footer {
  grid-area: footer;
  text-align: center;
  padding: 1em;
  border-top: 1px solid #ddd;
  color: #999;
}

.logo {
  display: flex;
  align-items: center;
}

@media only screen and (min-width: 500px) {
  .logo {
    font-size: 1.5em;
    margin-right: 0.25em;
  }
}

nav {
  display: flex;
  align-items: center;
}

nav > ul {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

nav > ul > li {
  padding: 0.5em;
}

nav > ul > li > a {
  text-decoration: inherit;
}

.cart {
  padding: 0.5em;
  margin-left: auto;
  transition: all 0.1s ease-in;
  transform: scale(1);
}

.cart.pop {
  color: #3cae21;
  transform: scale(0.9);
}

nav :global(li) {
  display: block;
}

ul.categories {
  font-weight: 500;
  display: none;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
}

.sub-categories {
  padding: 0;
  margin: 0;
  padding-left: 0.8rem;
}

.sub-categories li {
  display: block;
  margin: 0.5em;
  padding: 0;
}

@media only screen and (min-width: 500px) {
  ul.categories {
    display: block;
  }
}

.category {
  display: block;
  margin: 0 0 0.1rem 0;
  padding: 0;
}

.category .nuxt-link-active {
  font-weight: 700;
}

ul.categories :global(a) {
  text-decoration: none;
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
