<template>
  <div class="home">
    <header class="bg-blueDark lg:h-screen">
      <top-nav />

      <div
        class="text-white lg:flex items-center h-4/5 max-w-7xl w-11/12 mx-auto mt-12"
      >
        <div class="text-center lg:text-left">
          <h1 class="text-3xl lg:text-5xl font-bold uppercase">
            Team up with trusted influencers!
          </h1>
          <p class="font-bold text-xl mt-4">
            Real creators. Upfront rates. Fast results.
          </p>
          <button
            class="mt-8 uppercase bg-amber py-3 px-6 rounded-sm focus:outline-none font-bold text-pale-green"
          >
            Sign up for free!
          </button>
          <p class="mt-5">
            Want to know more?
            <a href="#" class="text-amber">See how it works</a>
          </p>
        </div>

        <div class="mt-12 lg:mt-0 lg:flex">
          <div class="w-72 h-80 mx-auto border-amber border-2 lg:mr-8"></div>
          <div class="w-72 h-80 mx-auto border-amber border-2 mt-12"></div>
        </div>
      </div>
    </header>

    <section class="max-w-7xl mx-auto py-16 w-11/12">
      <h1 class="text-blueDark text-4xl font-bold">
        What makes Pyroecom different?
      </h1>
      <div class="lg:flex gap-5 mt-10 text-center">
        <div v-for="reason in reasons" :key="reason.title">
          <h1 class="font-bold">{{ reason.title }}</h1>
          <p>{{ reason.body }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import nav from "@/components/Nav.vue";
export default {
  name: "Home",
  components: {
    "top-nav": nav,
  },
  data() {
    return {
      reasons: [
        {
          title: "Real influencers",
          body: "We’re the largest warm influencer marketing network in the world (every influencer joined on their own).",
        },
        {
          title: "No long-term contracts",
          body: "Enjoy peace of mind knowing there are never any lengthy commitments, minimum budgets or spends, ever!",
        },
        {
          title: "An All-in-One Solution",
          body: "Influencer Discovery, Payments and messaging tools built-in so you never have to go off-platform.",
        },
        {
          title: "Amazing ROI",
          body: "Maximize your budget with the best dollar-to-real influencer ratio in the industry.",
        },
      ],
    };
  },
};
</script>
