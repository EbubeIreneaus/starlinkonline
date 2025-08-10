<style scoped>
:root {
  --text-color: white;
}

.head-section {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/images/roam-main.webp");
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
  background-image: url("~/assets/images/main-bg-1.webp");
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.main-bg-sec-2 .text {
  width: 40%;
  position: absolute;
  left: 10%;
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
    font-family: "Times New Roman", serif;
  }
}
</style>

<template>
  <main>
    <div class="head-section">
      <div class="head-sec-cont text-center">
        <div class="cont-text relative">
          <h1>STARLINK ROAM</h1>
          <p data-aos="fade-up">
            Unlimited high-speed, low-latency internet wherever and whenever you
            need it.
          </p>
          <OrderBtn />
        </div>
      </div>
    </div>

    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img
            src="~/assets/images/roam-img-1.webp"
            alt="djdj"
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
            <h2 data-aos="fade-up">IN-MOTION USE</h2>
            <p data-aos="fade-up">
              The Flat High Performance Starlink allows users to enjoy
              high-speed, low-latency internet while in motion. <br /><br />

              With a wide field of view and enhanced GPS capabilities, the Flat
              High Performance Starlink can connect to more satellites, allowing
              for consistent connectivity on the go.
              <br /><br />
              The hardware is designed for a permanent installation on your
              vehicle and is resilient in harsh environments.
              <br /><br />
              Currently available for order and use in select markets.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img
            src="~/assets/images/roam-img-2.webp"
            alt="hgh "
            class="img-fluid"
            loading="lazy"
            width="700"
            height="600"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">PORTABLE USE</h2>
            <br />
            <br />
            <p data-aos="fade-up">
              With network priority, users can expect download speeds of up to
              220 Mbps, upload up to 25 Mbps, and latency of 25-50 ms, enabling
              high throughput connectivity for offices of 20+ users,
              storefronts, and demanding workloads across the globe.
              <br /><br />
              With Starlink, there are no long-term contracts and no exclusivity
              requirements. Learn more about Starlink specifications here..
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img
            src="~/assets/images/roam-img-3.webp"
            alt="img 3"
            class="img-fluid w-full"
            loading="lazy"
            width="800"
            height="400"
          />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">WORK AND PLAY AT REMOTE LOCATIONS</h2>
            <br />
            <p data-aos="fade-up">
              Travel to locations where connectivity has been unreliable or
              completely unavailable. Use Starlink within your continent with
              the Regional plan, or across the world wherever Starlink provides
              service with the Global plan. <br /><br />
              For more on Starlink Roam availability, see our FAQs
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="main-bg-sec-2">
        <div class="text">
          <h2 data-aos="fade-up">PAY AS YOU GO</h2>
          <br />
          <p data-aos="fade-up">
            Pause and un-pause service at any time. Billing is in one-month
            increments, allowing users to customize their service to their
            individual travel needs.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Roaming | Starlink Online",
  ogTitle: "Roaming | Starlink Online",
  twitterTitle: "Roaming | Starlink Online",
});
useHead({
  link: [{ rel: "canonical", href: "https://starlinkonline.vercel.app/roam" }],
});
</script>
