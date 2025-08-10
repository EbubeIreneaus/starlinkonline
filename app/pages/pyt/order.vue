<template>
  <div class="mt-20">
    <section class="bg-black py-8 antialiased md:py-16">
      <form
        @submit.prevent="submit()"
        class="mx-auto max-w-screen-xl px-4 2xl:px-0"
      >
        <ol
          class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base"
        >
          <li
            class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
          >
            <span
              class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
            >
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Cart
            </span>
          </li>

          <li
            class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
          >
            <span
              class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
            >
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Checkout
            </span>
          </li>

          <li class="flex shrink-0 items-center">
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Order summary
          </li>
        </ol>

        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div class="min-w-0 flex-1 space-y-8">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Quantity
              </h2>
              <input
                type="number"
                id="quantity"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Quantity"
                required
                v-model="form.quantity"
              />
            </div>
            <div class="space-y-4">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery Details
              </h2>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    for="your_name"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    v-memo="form.name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>

                <div>
                  <label
                    for="your_email"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email*
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    v-model="form.email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label
                      for="select-country-input-3"
                      class="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country*
                    </label>
                  </div>
                  <select
                    id="select-country-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected>Nigeria</option>
                    <option>United States</option>
                    <option value="AS">Australia</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label
                      for="select-city-input-3"
                      class="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City*
                    </label>
                  </div>
                  <select
                    id="select-city-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected>Enugu</option>
                    <option>Abuja</option>
                    <option>Lagos</option>
                    <option>San Francisco</option>
                    <option value="NY">New York</option>
                    <option value="LA">Los Angeles</option>
                    <option value="CH">Chicago</option>
                    <option value="HU">Houston</option>
                  </select>
                </div>

                <div>
                  <label
                    for="phone-input-3"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number*
                  </label>
                  <div class="flex items-center">
                    <div class="relative w-full">
                      <input
                        type="text"
                        id="phone-input"
                        v-model="form.phone"
                        class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="company_name"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Flowbite LLC"
                  />
                </div>

                <div>
                  <label
                    for="vat_number"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    VAT number
                  </label>
                  <input
                    type="text"
                    id="vat_number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="DE42313253"
                  />
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Payment
              </h3>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div
                  class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="credit-card"
                        aria-describedby="credit-card-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="credit-card"
                        class="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        Credit Card
                      </label>
                      <p
                        id="credit-card-text"
                        class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Pay with your credit card
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="pay-on-delivery"
                        class="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        Payment on delivery
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        +$15 payment processing fee
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="paypal-2"
                        aria-describedby="paypal-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="paypal-2"
                        class="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        Paypal account
                      </label>
                      <p
                        id="paypal-text"
                        class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Connect to your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery Methods
              </h3>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div
                  class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="dhl"
                        aria-describedby="dhl-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="dhl"
                        class="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        $15 - DHL Fast Delivery
                      </label>
                      <p
                        id="dhl-text"
                        class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it by tommorow
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="fedex"
                        aria-describedby="fedex-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="fedex"
                        class="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        Free Delivery - FedEx
                      </label>
                      <p
                        id="fedex-text"
                        class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it in 1 week
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="express"
                        aria-describedby="express-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="express"
                        class="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        $49 - Express Delivery
                      </label>
                      <p
                        id="express-text"
                        class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"
          >
            <div class="flow-root">
              <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    Subtotal
                  </dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    <span v-money="pricing.amount * form.quantity"></span>
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    Savings
                  </dt>
                  <dd class="text-base font-medium text-green-500">0</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    Store Pickup
                  </dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    <span v-money="pricing.pickup"></span>
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    Tax
                  </dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    <span v-money="pricing.tax"></span>
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">
                    <span
                      v-money="
                        pricing.amount * form.quantity +
                        pricing.tax +
                        pricing.pickup
                      "
                    ></span>
                  </dd>
                </dl>
              </div>
            </div>

            <div class="space-y-3">
              <button
                :disabled="isLoading"
                type="submit"
                class="flex w-full items-center justify-center rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-medium hover:bg-slate-800 focus:ring-2 focus:ring-slate-300"
              >
                {{ isLoading ? "Processing wait.." : "Proceed to Payment" }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
declare function FlutterwaveCheckout(option: any): any;
declare let Swal: any

const isLoading = ref(false);
const config = useRuntimeConfig();
useHead({
  link: [
    { rel: "canonical", href: "https://starlinkonline.vercel.app/pyt/order" },
  ],
  script: [
    { src: "https://checkout.flutterwave.com/v3.js" },
    { src: "https://cdn.jsdelivr.net/npm/sweetalert2@11" },
  ],
});

const pricing = {
  tax: 50,
  pickup: 0,
  amount: 355,
};

const form = reactive({
  quantity: 1,
  email: "",
  name: "",
  phone: "",
});

async function submit() {
  try {
    isLoading.value = true;
    const modal = FlutterwaveCheckout({
      public_key: config.public.FLW_PUBLIC,
      tx_ref: "#order-" + "283747478",
      amount: Number(
        (pricing.amount * form.quantity + pricing.tax + pricing.pickup) * 500
      ),
      currency: "NGN",
      payment_options: "card, opay, banktransfer, account, credit, ussd",
      customer: {
        email: form.email,
        phone_number: form.phone,
        name: form.name,
      },
      customizations: {
        title: "Starlink Online",
        description: "Payment for your order",
        logo: "https://starlinkonline.vercel.app/og-image.jpg",
      },
      callback: async (response: any) => {
        if (response.status == "completed") {
          try {
            const res = await new Promise<{ success: boolean }>(
              (resolve, reject) => {
                setTimeout(() => {
                  resolve({ success: true });
                }, 3000);
              }
            );
            if (res.success) {
              Swal.fire({
                title: "Payment Successful",
                text: "Your order is en route",
                icon: "success",
              });
              modal.close();
            }
          } catch (err) {
            console.log(err);
          }
        }
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped></style>
