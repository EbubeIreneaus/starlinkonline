<template>
  <div class="py-20 ">
    <section class="customerquote grid max-w-3xl mx-auto">
      <h2 class="text-center my-3 text-3xl font-extrabold !mb-12">
        Customer Quote
      </h2>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <blockquote class="text-lg ">
              It’s an entirely different world...Before Starlink we had to
              ration data and we couldn’t stream. Now we have files downloading,
              Pandora playing, Zoom going and there’s no latency whatsoever.
            </blockquote>
            <p class="mt-5 font-bold text-lg ">Martins D. from Califonia, USA</p>
          </div>
          <div class="mb-5 swiper-slide">
            <blockquote class="text-lg">
              Absolute game changer! There’s no overpromising and
              underdelivering like our old slow provider. Plug it in and show
              Dishy the sky, that’s it! In under 5 minutes we’ve gone from the
              forgotten to having the fastest internet connection in the area.
            </blockquote>
            <p class="mt-5 font-bold text-lg ">
              Hilary B. from Southern England
            </p>
          </div>
          <div class=" mb-5 swiper-slide">
            <blockquote class="text-lg">
              Millions are not connected to the Internet — we're thrilled to say
              that we're no longer among them. Blistering fast and online in
              minutes, Starlink ends a six-year journey.
            </blockquote>
            <p class="mt-5 font-bold text-lg text-center">Henshaw V. from Australia</p>
          </div>
        </div>

        <div class="my-5">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

const swiperRef = ref<Swiper | null>(null);

onMounted(() => {
  swiperRef.value = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20, 
    modules: [Autoplay, Pagination],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "!bg-amber-400",
      type: "bullets",

    },
    autoplay: {
      delay: 5000,
    },
  });
});
</script>

<style></style>
