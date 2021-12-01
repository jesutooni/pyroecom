<template>
  <div class="bg-cream">
    <top-nav />
    <section class="flex items-center flex-wrap bg-white shadow-sm">
      <Transactions class="w-80 flex-grow" />
      <MarketPlace class="w-80 flex-grow" />
      <Earnings class="w-80 flex-grow" />
    </section>

    <main class="mt-12 flex items-center">
      <section class="mx-5 flex-grow">
        <div class="bg-white shadow-sm">
          <info />
        </div>
        <div class="mt-8 bg-white shadow-sm">
          <SocialAccounts />
        </div>

        <div class="mt-8 flex gap-8">
          <NewOpportunities class="flex-grow" />
          <RecentTransactions class="flex-grow" />
        </div>
      </section>

      <aside class="bg-white h-full border-black border"></aside>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Inside/Nav.vue";
import Transactions from "@/components/Inside/Transactions.vue";
import MarketPlace from "@/components/Inside/MarketPlace.vue";
import Earnings from "@/components/Inside/Earnings.vue";

import Info from "@/components/Inside/Info.vue";
import SocialAccounts from "@/components/Inside/SocialAccounts.vue";

import NewOpportunities from "@/components/Inside/NewOpportunities.vue";
import RecentTransactions from "@/components/Inside/RecentTransactions.vue";

export default {
  components: {
    "top-nav": Nav,
    Transactions,
    MarketPlace,
    Earnings,
    Info,
    SocialAccounts,
    NewOpportunities,
    RecentTransactions,
  },
};
</script>
