<style scoped>
:root {
  --text-color: white;
}

.head-section {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/images/maritime-main.webp");
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

/* .head-sec-cont .order-btn button {
  padding: 10px 100px;
  margin: auto;
} */

.main-bg-sec-2 {
  background-image: url("~/assets/images/maritime-img-3.webp");
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.main-bg-sec-2 .text {
  width: 40%;
  position: absolute;
  left: 7%;
  top: 40%;
}

.btm .hr-line {
  height: 200px !important;
  border: 1px solid white;
  /* background-color: white; */
}

@media screen and (max-width: 992px) {
  .head-section {
    /* background-image: url('~/assets/images/business-main-min.jpg'); */
    background-size: cover;
    background-position: center;
  }

  .main-bg-sec-2 .text {
    width: 90%;
    margin: auto;
    top: 20%;
    font-family: "Times New Roman", serif;
  }
}
</style>

<template>
  <main>
    <div class="head-section">
      <div class="head-sec-cont text-center">
        <div class="cont-text position-relative">
          <h1>STARLINK MARITIME</h1>
          <p data-aos="fade-up">
            Global maritime coverage for boats of all sizes with up to 220 Mbps
            download while at sea.
          </p>

          <OrderBtn />
        </div>
      </div>
    </div>

    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 py-4">
          <img
            src="~/assets/images/maritime-img-1.webp"
            alt="image 1"
            class="img-fluid"
            loading="lazy"
            width="600"
            height="355"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">GLOBAL MARITIME COVERAGE</h2>
            <p data-aos="fade-up"
              >Starlink service is now global, providing connectivity to the
              vast majority of the Earth’s oceans and seas. Deliveries are
              available in most countries where Starlink provides service.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img
            src="~/assets/images/maritime-img-2.webp"
            alt="image 2"
            class="img-fluid"
            loading="lazy"
            width="700"
            height="800"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">HIGHER SPEED, LOW LATENCY</h2>
            <br />
            <br />
            <p data-aos="fade-up"
              >With network priority, users can expect download speeds of up to
              220 Mbps, upload up to 25 Mbps, and latency of 25-50 ms, enabling
              high throughput connectivity for offices of 20+ users,
              storefronts, and demanding workloads across the globe.</p
            >
            <br /><br />
            <p data-aos="fade-up"
              >With Starlink, there are no long-term contracts and no
              exclusivity requirements. Learn more about Starlink specifications
              here.</p
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="main-bg-sec-2">
        <div class="text">
          <h2 data-aos="fade-up">SECURE FLEET MANAGEMENT, REMOTE MONITORING</h2>
          <br />
          <p data-aos="fade-up">
            Remotely monitor and manage your Starlink fleet from a single
            portal. Starlink implements end-to-end encryption to protect your
            data and confidentiality of user traffic.</p
          >
  
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img
            src="~/assets/images/maritime-img-4.webp"
            alt="img 4"
            class="img-fluid"
            loading="lazy"
            width="700"
            height="700"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">PAY AS YOU GO</h2>
            <br />
            <br />
            <p data-aos="fade-up"
              >Pause and un-pause service at any time. Billing is in one-month
              increments, allowing users to customize their service to their
              individual travel needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Maritime Industry | Starlink Online',
  ogTitle: 'Maritime Industry | Starlink Online',
  twitterTitle: 'Maritime Industry | Starlink Online'
})
useHead({
  link: [
    {rel: 'canonical', href: 'https://starlinkonline.vercel.app/maritime'}
  ]
})
</script>
