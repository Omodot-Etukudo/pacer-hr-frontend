<template>
  <div class="text-center">
    <div class="text-justify">
      <img
        class="w-3/12 mx-auto my-auto mt-10"
        src="../assets/illustrations/error-404.svg"
      />
      <h1 class="text-center mt-12 mb-4 text-3xl font-bold text-blue-900">
        Connection Lost
      </h1>
      <h3 class="text-center mb-2 text-lg font-semibold">
        Looks like the page you're trying to visit doesn't exist
      </h3>
      <h3 class="text-center text-lg">Please check the URL and try again</h3>
    </div>
    <button
      @click="goHome"
      class="lg:w-2/12 md:w-4/12 sm:w-6/12 my-12 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-2 rounded focus:outline-none transition transition-colors duration-300"
    >
      Go to Dashboard
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.replace({ path: "/dashboard" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
