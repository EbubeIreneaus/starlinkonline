<style scoped>
:root {
  --text-color: white;
}

.head-section {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/images/business-main.webp");
  background-size: cover;
}

.head-sec-cont {
  position: absolute;
  width: 100%;
  height: calc(100vh - 110px);
  top: 110px;
  color: var(--text-color);
}

.cont-text {
  width: 50%;
  height: 100%;
  margin: auto;
}


.head-sec-cont .order-btn {
  bottom: 15px;
  width: 100%;
}

.head-sec-cont .order-btn button {
  padding: 10px 100px;
  margin: auto;
}
.main-bg-sec-2 {
  background-image: url("~/assets/images/bus-sec-2.webp");
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.main-bg-sec-2 .text {
  width: 40%;
  position: absolute;
  right: 7%;
  top: 40%;
}
.btm .hr-line {
  height: 200px !important;
  border: 1px solid white;
  /* background-color: white; */
}

@media screen and (max-width: 992px) {
  .head-section {
    background-image: url("~/assets/images/business-main-min.webp");
    background-size: cover;
    background-position: center;
  }
  .main-bg-sec-2 .text {
    width: 90%;
    margin: auto;
    top: 20%;
  }
}
</style>

<template>
  <main>
    <div class="head-section">
      <div class="head-sec-cont text-center">
        <div class="cont-text relative">
          <h1 class="text-4xl font-extrabold mb-2">STARLINK BUSINESS</h1>
          <p data-aos="fade-up">
            High-speed, low-latency broadband internet to rural and remote
            businesses across the globe. <br />
            Interested in Backhaul? Request a Sales Consultation.
          </p>

          <OrderBtn />
        </div>
      </div>
    </div>

    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img
            src="~/assets/images/business-img-1.webp"
            alt="business image 1"
            class="img-fluid mx-auto object-cover",
            loading="lazy"
            width="600"
            height="700"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up" class="text-3xl font-extrabold mb-4">
              HIGHER RELIABILITY FOR HIGH DEMAND USERS
            </h2>
            <p data-aos="fade-up">
              With a higher gain antenna, additional throughput allocation, and
              better extreme weather performance, businesses can ensure
              bandwidth for critical operations 24/7.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img
            src="~/assets/images/business-img-2.webp"
            alt="image 2"
            class="img-fluid"
            loading="lazy"
            width="600"
            height="700"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up" class="text-3xl font-extrabold mb-4">
              HIGHER SPEED, LOW LATENCY
            </h2>

            <p data-aos="fade-up" class="mb-4">
              With network priority, users can expect download speeds of up to
              220 Mbps, upload up to 25 Mbps, and latency of 25-50 ms, enabling
              high throughput connectivity for offices of 20+ users,
              storefronts, and demanding workloads across the globe.
            </p>

            <p data-aos="fade-up">
              With Starlink, there are no long-term contracts and no exclusivity
              requirements. Learn more about Starlink specifications here.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="main-bg-sec-2">
        <div class="text">
          <h2 data-aos="fade-up" class="text-3xl font-extrabold mb-4">
            UNLIMITED SERVICE LOCATIONS
          </h2>

          <p data-aos="fade-up">
            Starlink is ideal for rural and remote locations. Order as many
            Starlink kits as needed and manage all of them from a single
            centralized account.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Starlink Online | Business',
  ogTitle: 'Starlink Online | Business',
   twitterTitle: 'Starlink Online | Business'
})

useHead({
  link: [
    {rel: 'canonical', href: 'https://starlinkonline.vercel.app/business'}
  ]
})
</script>
