<template>
  <div>
    <div class="">
      <!-- <h1 class="text-2xl font-bold">Login Information</h1> -->
      <div class="bg-white px-6 py-10 my-6 shadow-md rounded-md">
        <div class="md:flex items-center gap-6">
          <div
            class="w-16 h-16 px-8 mx-auto md:mx-0 mb-6 md:mb-0 rounded-full bg-blueDark flex items-center justify-center"
          >
            <h1 class="text-white text-3xl font-bold">8</h1>
          </div>
          <div>
            <h1 class="text-4xl text-center md:text-left">
              How would you like to be compensated for your work?
            </h1>
          </div>
        </div>

        <div class="xs:flex gap-5 justify-center mt-5">
          <div>
            <input type="radio" id="Product" value="Product" />
            <label for="Product" class="ml-1.5">Free Product Ony</label>
          </div>

          <div>
            <input type="radio" id="Cash" value="Cash" />
            <label for="Cash" class="ml-1.5">Cash Only</label>
          </div>

          <div>
            <input
              type="radio"
              id="Product and Cash"
              value="Product and Cash"
            />
            <label for="Product and Cash" class="ml-1.5"
              >Free Product and Cash</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
