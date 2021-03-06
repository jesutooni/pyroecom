<template>
  <div class="home">
    <header class="bg-blueDark lg:h-screen">
      <top-nav />

      <div
        class="text-white lg:flex items-center pb-24 h-4/5 max-w-7xl w-11/12 mx-auto mt-12"
      >
        <div class="text-center lg:text-left">
          <h1 class="text-3xl lg:text-5xl font-bold uppercase">
            Team up with trusted influencers!
          </h1>
          <p class="font-bold text-xl mt-4">
            Real creators. Upfront rates. Fast results.
          </p>
          <router-link to="register">
            <button
              class="mt-8 uppercase bg-amber py-3 px-6 rounded-sm focus:outline-none font-bold text-pale-green"
            >
              Sign up for free!
            </button></router-link
          >
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

    <section class="max-w-7xl mx-auto py-32 w-11/12">
      <h1 class="text-blueDark text-4xl font-bold text-center">
        What makes Pyroecom different?
      </h1>
      <div class="md:flex gap-6 mt-10 text-center">
        <div
          v-for="reason in reasons"
          :key="reason.title"
          class="lg:w-1/4 mb-8"
        >
          <div class="w-40 h-40 mx-auto my-7 border-4 border-amber"></div>
          <h1 class="font-bold text-gray-dark mb-3 text-lg">
            {{ reason.title }}
          </h1>
          <p class="text-gray-dark leading-7">{{ reason.body }}</p>
        </div>
      </div>
    </section>

    <section class="relative md:h-96 bg-cream md:bg-transparent">
      <div
        class="hidden md:block absolute inset-0 right-1/4 rounded-r-full bg-cream"
      ></div>
      <div
        class="md:absolute inset-0 max-w-7xl mx-auto py-12 w-11/12 md:flex gap-40"
      >
        <div class="md:w-1/2 mb-7">
          <h1 class="text-5xl text-blueDark font-bold">
            Why Influencer Marketing?
          </h1>
          <p class="mt-3 text-gray-dark leading-7">
            These days, it’s harder than ever to reach your target audience. Ad
            blockers, streaming services and viewability issues are wreaking
            havoc on traditional advertising methods. Influencers promote your
            product or service with their loyal followers, which are your
            soon-to-be customers!
          </p>
        </div>
        <div class="w-72 mx-auto md:w-1/2 border-4 border-amber h-72"></div>
      </div>
    </section>

    <section class="py-24 bg-black bg-opacity-90">
      <div class="max-w-7xl mx-auto w-11/12 text-center">
        <h1 class="text-cream text-4xl font-bold mb-8">
          A powerful, end-to-end influencer marketing platform
        </h1>

        <div class="text-cream md:flex gap-8">
          <div v-for="feature in features" :key="feature.title" class="my-16">
            <div
              class="w-32 h-32 rounded-full my-8 bg-amber mx-auto bg-opacity-90"
            ></div>
            <h1 class="text-2xl font-bold">{{ feature.title }}</h1>
            <p class="mt-6">{{ feature.body }}</p>
          </div>
        </div>

        <button
          class="text-white bg-amber px-8 py-3 uppercase rounded-md font-bold text-lg mt-7"
        >
          Check out our plans
        </button>

        <p class="text-gray-lighter mt-8">
          Want to see it in action?
          <a href="#" class="text-amber">Take a self guided tour</a>
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto py-32 w-11/12">
      <h1 class="text-4xl text-blueDark font-bold text-center">
        Don’t just take our word for it…
      </h1>
      <div class="md:flex gap-8 mt-12">
        <div
          v-for="review in reviews"
          :key="review.name"
          class="bg-pale-green rounded-tl-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden text-white text-center mb-6 md:w-1/3 p-4"
        >
          <div class="w-20 h-20 rounded-full overflow-hidden mx-auto my-6">
            <img :src="review.image" alt="" />
          </div>
          <p class="italic mb-5">{{ review.note }}</p>
          <p class="font-bold text-amber">{{ review.name }}</p>
          <p class="italic">{{ review.role }}</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-dark text-center py-16">
      <div class="md:flex justify-between max-w-5xl mx-auto md:w-11/12">
        <div v-for="stat in stats" :key="stat.figure" class="my-8">
          <h1 class="text-3xl text-white font-bold">{{ stat.figure }}</h1>
          <p class="italic text-gray-lighter">{{ stat.area }}</p>
        </div>
      </div>
    </section>

    <section class="py-32">
      <h1 class="text-4xl text-blueDark font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div class="max-w-5xl mx-auto mt-12 w-11/12">
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="bg-cream mb-3 py-1.5 px-4 cursor-pointer overflow-hidden transition-all duration-500"
        >
          <div @click="showQuestion(index)" class="flex justify-between">
            <h1 class="font-bold text-xl py-1.5">{{ question.question }}</h1>
            <div>
              <span
                :class="`text-3xl font-bold ${
                  index === currentIndex ? 'hidden' : 'block'
                }`"
                >+</span
              >
              <span
                :class="`text-3xl font-bold ${
                  index === currentIndex ? 'block' : 'hidden'
                }`"
                >-</span
              >
            </div>
          </div>
          <p
            :class="` cursor-default overflow-hiddentransition-all duration-300 ${
              index === currentIndex ? 'h-32 py-5' : 'h-0'
            }`"
          >
            {{ question.answer }}
          </p>
        </div>
      </div>
    </section>

    <footer class="bg-blueDark pt-12 text-cream">
      <div class="max-w-7xl mx-auto w-11/12 md:flex justify-between">
        <div class="mb-10">
          <h1 class="text-amber text-2xl font-bold">PYROECOM</h1>
          <p class="mt-6 leading-8">
            9380 E Bahia Drive, Suite A102 <br />
            Scottsdale, AZ 85260 <br />
            (855) 476-1597
          </p>
        </div>
        <div class="mb-8">
          <h1 class="uppercase text-lg">Get Started</h1>
          <ul class="mt-5">
            <li class="my-2.5">Brands</li>
            <li class="my-2.5">Influencers</li>
            <li class="my-2.5">Digital Marketers</li>
            <li class="my-2.5">Plans & Pricing</li>
          </ul>
        </div>
        <div class="mb-8">
          <h1 class="uppercase text-lg">Information</h1>
          <ul class="mt-5">
            <li class="my-2.5">Our Company</li>
            <li class="my-2.5">Knowledge Base</li>
            <li class="my-2.5">Blog</li>
            <li class="my-2.5">Top Influencer Marketing Tools Comparison</li>
          </ul>
        </div>
      </div>
      <p class="text-center mt-6 opacity-60">
        &copy; Pyroecom All rights reserved
      </p>
    </footer>
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
      currentIndex: false,
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
      reviews: [
        {
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Rickey Leonard",
          role: "Computer Systems Administrator",
          note: "What won me over was the way Intellifluence built trust. They took the time to know our brand, and they used that knowledge to connect us to hundreds of influencers.",
        },
        {
          image:
            "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Tiffany Doyle",
          role: "Personal Care Aide",
          note: "When we use Intellifluence, it produces quick, easy and effective results. The quality and quantity of the influencers are outstanding and I strongly believe that they can be trusted.",
        },
        {
          image:
            "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Sammy Alvarez",
          role: "IT Manager",
          note: "When it comes to making decisions, we humans aren’t always independent thinkers. We depend on our network’s opinions, advice, or perspectives for making the right decision. The influencers help solve this.",
        },
      ],
      questions: [
        {
          question: "How much does it cost to use?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Can I get a demo of it?",
          answer:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
        },
        {
          question: "What social media networks does it support",
          answer:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
        },
        {
          question: "What is influencer marketing?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "How do I get started?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Can I be a student and an influencer?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
      stats: [
        { figure: "5", area: "Years of connecting students" },
        { figure: "350+", area: "Onboarded Users" },
        { figure: "400+", area: "Closed deals" },
        { figure: "250+", area: "100% Satisfaction" },
      ],
      features: [
        {
          title: "Simple payments",
          body: "Effortlessly compensate influencers using Intellifluence Payments – the service that ensures all work is completed before influencers are paid.",
        },
        {
          title: "100,000+ creators ",
          body: "Design public offers that qualified candidates can apply to while you simultaneously find and pitch additional creators using our Discover tool.",
        },
        {
          title: "Dashboard control",
          body: "Build campaigns, stay on top of messages and complete transactions with ease using our powerful but intuitive influencer marketing platform.",
        },
        {
          title: "Best Price",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
        },
      ],
    };
  },
  methods: {
    showQuestion(index) {
      if (this.currentIndex === index) {
        this.currentIndex = null;
      } else {
        this.currentIndex = index;
      }
    },
  },
};
</script>
