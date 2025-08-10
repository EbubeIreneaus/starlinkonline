<template>
  <main>
    <div class="head-section">
      <div class="head-sec-cont text-center">
        <div class="cont-text relative">
          <h1>ORDER STARLINK</h1>
          <div>
            End year sales:
            <b><span class="line-through">$500</span> $355</b>
          </div>
          <p class="p-4" data-aos="fade-up">
            Connect to high-speed, low-latecy internet across the globe, even in
            the most remote and rural locations
          </p>

          <OrderBtn />
        </div>
      </div>
    </div>
    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img
            src="~/assets/images/main-img-1.webp"
            alt="main image 1"
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
            <h2 class="mb-4 text-3xl font-extrabold" data-aos="fade-up">
              STREAMING, VIDEO CALLS, ONLINE GAMING & MORE
            </h2>
            <p class="text-base mb-5" data-aos="fade-up">
              With Starlink, users can engage in activities that historically
              have not been possible with satellite internet.
            </p>
           

            <p class="text-base" data-aos="fade-up">
              Starlink’s high-speed, low-latency service is made possible via
              the world’s largest constellation of highly advanced satellites
              operating in a low orbit around the Earth.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img
            src="~/assets/images/main-img-2.webp"
            alt="main image 2"
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
            <h2 class="mb-4 text-3xl font-extrabold" data-aos="fade-up">EASY SELF-INSTALL</h2>
            <p class="mb-6" data-aos="fade-up">
              Your Starlink Kit arrives with everything you need to get online
              in minutes including your Starlink, WiFi router, cables and base.
            </p>
          

            <nux-link
              to="/pyt/order"
              class="learn-more btn btn-outline-light px-5 py-2"
              >VIEW INSTALL</nux-link
            >
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img
            src="~/assets/images/main-img-3.webp"
            alt="main image 3"
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
            <h2 class="mb-4 text-3xl font-extrabold" data-aos="fade-up">NO CONTRACTS, 30-DAY TRIAL</h2>
            <p data-aos="fade-up">
              Long term contracts prevent both parties from making sensible
              changes when necessary.
            </p>
            <br />
            <p data-aos="fade-up">
              With Starlink, it’s a fair deal both ways. Starlink can adjust
              terms and pricing as needed, and customers can cancel at any time,
              for any reason.
            </p>
            <br />
            <p class="mb-5" data-aos="fade-up">
              Try any Starlink Service for 30 days and, if not satisfied, return
              the hardware for a full refund..
            </p>
          

            <nuxt-link to="" class="learn-more btn btn-outline-light px-5 py-2"
              >VIEW INSTALL</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="main-bg-sec-2">
        <div class="text">
          <h2 class="text-3xl font-extrabold" data-aos="fade-up">TRAVEL WITH STARLINK</h2>
          <p data-aos="fade-up">
            With Starlink’s Mobile plans, you can take your high-speed,
            low-latency internet service with you wherever you go. <br /><br />
            Pause and resume your plan based on your travel needs and stay
            connected in any location where Starlink is available.
          </p>
         
        </div>
      </div>
    </section>

    <section>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12">
          <img
            src="~/assets/images/main-img-4.webp"
            alt="main image 4"
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
            <h2 class="mb-4 text-3xl font-extrabold" data-aos="fade-up">LEADER IN SPACE SUSTAINABILITY</h2>
            <p data-aos="fade-up">
              Starlink not only leads the industry in innovations to reduce
              satellite brightness, but also on-orbit debris mitigation —
              meeting or exceeding all regulatory and industry standards.
            </p>
      
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 col-span-12 order-2">
          <img
            src="~/assets/images/main-img-5.webp"
            alt="main image 5"
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
            <h2 class="mb-4 text-3xl font-extrabold" data-aos="fade-up">ENGINEERED BY SPACEX</h2>
            <p data-aos="fade-up">
              SpaceX is leveraging its experience in building rockets and
              spacecraft to deploy the world’s most advanced broadband internet
              system. As the world’s leading provider of launch services – and
              the only provider with an orbital class reusable rocket – SpaceX
              has deep experience with both spacecraft and on-orbit operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  link: [
    {rel: 'canonical', href: 'https://starlinkonline.vercel.app/'}
  ]
})
</script>

<style scoped>
.head-section {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/images/bg-main.jpg");
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
  bottom: 5px;

  width: 100%;
}

.head-sec-cont .order-btn button {
  padding: 20px 100px;
  margin: auto;
}

div a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  font-family: "Times New Roman", serif;
}

.main-bg-sec-2 .text a {
  margin-top: 30px;
  background-color: transparent;
}
.customerquote div {
  font-family: "Arial Narrow Bold", sans-serif;
  font-size: large;
  text-align: center;
  line-height: 37px;
}
.customerquote div p {
  margin-top: 10px;
}
@media screen and (max-width: 992px) {
  .head-section {
    background-image: url("~/assets/images/bg-main-small.webp");
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
