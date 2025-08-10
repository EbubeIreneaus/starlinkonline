function toDollar(m: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(m);
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("money", {
    mounted(el, binding) {
      return (el.innerText = toDollar(Number(binding.value)));
    },
    updated(el, binding) {
      return (el.innerText = toDollar(Number(binding.value)));
    },
    getSSRProps() {
      return {};
    },
  });
});
