<style scoped>
:root {
  --text-color: white;
}

.head-section {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/images/avi-main.webp");
  background-size: cover;
}

div img {
  object-fit: cover;
  object-position: center;
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
  bottom: 5px;

  width: 100%;
}

.head-sec-cont .order-btn button {
  padding: 20px 100px;
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
  top: 30%;
}

.main-bg-sec-2 .text a {
  margin-top: 30px;
  background-color: transparent;
}

.customerquote div {
  font-family: "Arial Nargrid grid-cols-12 Bold", sans-serif;
  font-size: large;
  text-align: center;
  line-height: 37px;
}

.customerquote div p {
  margin-top: 10px;
}

.btm .hr-line {
  height: 200px !important;
  border: 1px solid white;
  /* background-color: white; */
}

@media screen and (max-width: 992px) {
  .head-section {
    /* background-image: url('~/assets/images/bg-main-p.jpg'); */
    background-size: cover;
    background-position: center;
  }

  .cont-text {
    width: 100%;
  }

  .main-bg-sec-2 .text {
    width: 90%;
    margin: auto;
    top: 10%;
  }
}
</style>
<template>
  <main>
    <div class="head-section">
      <div class="head-sec-cont text-center">
        <div class="cont-text relative">
          <h1>STARLINK AVIATION</h1>

          <p
            >High-speed, low-latency, in-flight internet with connectivity
            across the globe. Reserve now with deliveries starting in
            2023.</p
          >

          <OrderBtn />
        </div>
      </div>
    </div>
    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img src="~/assets/images/avi-img-1.webp" alt="aviation image 1" class="img-fluid" />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">STREAMING, VIDEO CALLS, GAMING & MORE AT ANY ALTITUDE</h2>

            <p data-aos="fade-up">
              Starlink can deliver up to 350 Mbps to each plane, enabling all
              passengers to access streaming-capable internet at the same time.
              <br /><br />
              With latency as low as 20 ms, passengers can engage in activities
              previously not functional in flight, including video calls, online
              gaming, virtual private networks and other high data rate
              activities.
            </p>
            
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img src="~/assets/images/avi-img-2.webp" alt="Aviation Image 2" class="img-fluid" />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">GLOBAL COVERAGE</h2>
            <p data-aos="fade-up">
              As the world's largest satellite constellation with coverage over
              land, the oceans and polar regions, Starlink is positioned to
              connect passengers wherever your flight routes evolve.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img src="~/assets/images/avi-img-3.webp" alt="Aviation Image 3" class="img-fluid" />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">SUPERIOR TECHNOLOGY</h2>
            <p
            data-aos="fade-up"
              >Starlink's low-profile Aero Terminal features an electronically
              steered phased array antenna, which enables new levels of
              reliability, redundancy and performance.</p
            >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img src="~/assets/images/avi-img-4.webp" alt="Aviation Image 4" class="img-fluid" />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">CONVENIENT INSTALL</h2>
            <p data-aos="fade-up">
              Starlink's simplified design enables installations during minimal
              downtime and combines well with other routine maintenance checks.
              <br /><br />
              Your Starlink Aviation Kit includes your Aero Terminal, power
              supply, 2 wireless access points, and harnesses.
            </p>
   
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img src="~/assets/images/avi-img-5.webp" alt="Avition Image 5" class="img-fluid" />
        </div>
        <div
          class="lg:col-span-6 col-span-12 flex justify-center items-center mt-5"
        >
          <div class="w-[75%] text-start">
            <h2 data-aos="fade-up">HARDWARE & SERVICE</h2>
            <p data-aos="fade-up">
              No long-term contracts and all plans include unlimited data. Your
              hardware is under warranty for as long as you subscribe to the
              service.
            </p>
        
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Starlink Online | Aviation Industry',
  ogTitle: 'Starlink Online | Aviation Industry',
  twitterTitle: 'Starlink Online | Aviation Industry'
})
useHead({
  link: [
    {rel: 'canonical', href: 'https://starlinkonline.vercel.app/aviation'}
  ]
})
</script>
