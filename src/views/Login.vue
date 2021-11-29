<template>
  <div class="h-screen">
    <div class="bg-blueDark lg:w-5/12 px-4 text-white h-full flex items-center">
      <div class="max-w-lg mx-auto w-11/12">
        <h1 class="text-2xl font-bold">
          Log in to <span class="text-amber">Pyroecom</span>
        </h1>
        <form action="">
          <input
            type="email"
            placeholder="Enter your email address"
            v-model="email"
            class="w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            v-model="password"
            class="w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />

          <button
            type="submit"
            class="w-full my-6 bg-amber uppercase text-black font-bold rounded-lg py-2.5"
          >
            Login
          </button>
        </form>

        <p class="text-center my-8">
          Don't have an account?
          <router-link to="/register" class="text-amber">Register</router-link>
        </p>
        <p class="text-center">Forgot password?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
