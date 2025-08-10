<template>
  <div class="bg-black text-white overflow-x-hidden">
    <header>
      <nav class="flex justify-between">
        <div class="mt-1 font-extrabold font-arial text-xl uppercase">
          StarLink
        </div>

        <ul
          class="hidden lg:flex items-center justify-between *:text-lg *:!font-playfair *:font-semibold"
        >
          <li><nuxt-link to="/">Residential</nuxt-link></li>
          <li><nuxt-link to="/business">Business</nuxt-link></li>
          <li><nuxt-link to="/roam">Roam</nuxt-link></li>
          <li><nuxt-link to="/mobility">Mobility</nuxt-link></li>
          <li><nuxt-link to="/aviation">Aviation</nuxt-link></li>
          <li><nuxt-link to="/maritime">Maritime</nuxt-link></li>
          <li><nuxt-link to="/contact">Support</nuxt-link></li>
        </ul>
        <button
          type="button"
          class="ring-2 p-3 rounded-xl bg-white"
          @click="show_sidebar = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
            ></path>
          </svg>
        </button>
      </nav>

      <div
        class="offcanvas offcanvas-end shadow-lg"
        :class="{ 'offcanvas-open': show_sidebar }"
        tabindex="-1"
      >
        <div class="offcanvas-header mb-4">
          <button
            type="button"
            class="p-4"
            @click="show_sidebar = false"
            aria-label="Navbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1"
                x1="7.534"
                x2="27.557"
                y1="7.534"
                y2="27.557"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f44f5a"></stop>
                <stop offset=".443" stop-color="#ee3d4a"></stop>
                <stop offset="1" stop-color="#e52030"></stop>
              </linearGradient>
              <path
                fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
                d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
              ></path>
              <linearGradient
                id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2"
                x1="27.373"
                x2="40.507"
                y1="27.373"
                y2="40.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#a8142e"></stop>
                <stop offset=".179" stop-color="#ba1632"></stop>
                <stop offset=".243" stop-color="#c21734"></stop>
              </linearGradient>
              <path
                fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)"
                d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="offcanvas-body">
          <div>
            <ul class="nav-menu-mobile *:text-lg *:font-arial">
              <li><nuxt-link to="/">Residential</nuxt-link></li>
              <li><nuxt-link to="/business">Business</nuxt-link></li>
              <li><nuxt-link to="/roam">Roam</nuxt-link></li>
              <li><nuxt-link to="/mobility">Mobility</nuxt-link></li>
              <li><nuxt-link to="/aviation">Aviation</nuxt-link></li>
              <li><nuxt-link to="/maritime">Maritime</nuxt-link></li>
              <li><nuxt-link to="/contact">Support</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <slot />

    <footer>
      <div class="btm flex flex-col justify-center items-center">
        <div class="hr-line my-5"></div>
        <nuxt-link
          to="/pyt/order"
          class="mb-1 ring hover:ring-2 px-7 py-2.5 rounded-lg hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-linear"
          >ORDER NOW</nuxt-link
        >
        <p class="mb-4">
          By clicking Sign Up, you agree to our
          <span style="text-decoration: underline">privacy policy</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const show_sidebar = ref(false);

useSeoMeta({
  title: "Starlink Online Shopping & Installation",
  description:
    "Buy Starlink today – get unlimited browsing and downloads up to 300 Mb/s, all from the comfort of your home. Worldwide delivery available.",
  ogDescription:
    "Buy Starlink today – get unlimited browsing and downloads up to 300 Mb/s, all from the comfort of your home. Worldwide delivery available.",
  ogTitle: "Starlink Online",
  ogUrl: "https://starlinkonline.vercel.app",
  ogImage: "https://starlinkonline.vercel.app/og-image.jpg",
  twitterTitle: "Starlink Online",
  twitterDescription:
    "Buy Starlink today – get unlimited browsing and downloads up to 300 Mb/s, all from the comfort of your home. Worldwide delivery available.",
  twitterImage: "https://starlinkonline.vercel.app/og-image.jpg",
  ogSiteName: "Starlink Online",
  twitterCreator: "@EbubeIreneaus",
});
</script>

<style scoped>
a {
  text-decoration: none;
}
header {
  width: 100vw;
  position: absolute;
  top: 0%;
}
nav {
  align-items: center;
  height: 100px;
  width: 80%;
  margin: auto !important;
}
nav ul {
  max-width: 80%;
  height: 100%;
  margin: 0%;
}
ul li {
  list-style-type: none;
}
nav ul a {
  padding: 5px 10px;
}
nav .router-link-active {
  border-bottom: 1px solid white;
}

.offcanvas {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 17% !important;
  background-color: black;
  padding: 10px;
  z-index: 9999;
  transform: translateX(300vh);
  transition: all 0.5s ease-in-out !important;
  overflow-y: auto;
}
.offcanvas-open {
  transform: translateY(0);
}
.offcanvas ul {
  text-align: left;
  padding-inline-start: 0%;
  width: 100%;
}
.offcanvas-body a {
  border-bottom: 1px solid whitesmoke;
  display: block;
  padding: 20px 5px;
  color: var(--text-color);
}
.nav-menu-mobile a {
  padding: 10px 5px;
  border: none;
}
@media screen and (max-width: 992px) {
  .offcanvas {
    width: 95% !important;
  }
}

.btm .hr-line {
  height: 200px !important;
  border: 1px solid white;
  /* background-color: white; */
}
</style>
