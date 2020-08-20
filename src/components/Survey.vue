<template>
  <div>
    <Navbar />
    <div class="px-20 pt-10">
      <div class="grid grid-cols-5">
        <div class=" col-span-1">
          <button
            class="text-blue-700 underline focus:outline-none"
            @click="navigateTo()"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="w-6 inline-block"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path></svg
            >Back to Performace
          </button>
        </div>
        <div class="col-span-3 mx-10 shadow-md px-6 py-6">
          <div>
            <p class="text-2xl font-semibold">
              Employee Survey for Adejoke Adedeji
            </p>
            <p class="font-regular text-gray-700">
              Please answer the following questions
            </p>
            <hr class="my-2" />
          </div>
          <div class="mt-10">
            <h1 class="text-lg font-semibold text-gray-700">
              <span
                ><div
                  class="float-left mr-4 mb-2 px-3 py-1 font-semibold text-md bg-blue-200 text-blue-900 rounded-full"
                >
                  1
                </div>
                Has this employee performed this past month?</span
              >
            </h1>
            <textarea
              class="w-3/4 bg-gray-200 px-4 py-4 focus:outline-none my-2 h-32 text-lg"
            ></textarea>
            <h1 class="text-lg font-semibold text-gray-700 mt-10">
              <span
                ><div
                  class="float-left mr-4 mb-2 px-3 py-1 font-semibold text-md bg-blue-200 text-blue-900 rounded-full"
                >
                  2
                </div>
                Has this employee achieved most or all set targets?</span
              >
            </h1>
            <select
              class="block appearance-none my-2 w-3/12 bg-blue-100 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>--Select an Option--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <h1 class="text-lg font-semibold text-gray-700 mt-12">
              <span
                ><div
                  class="float-left mr-4 mb-2 px-3 pb-2 pt-1 font-semibold text-md bg-blue-200 text-blue-900 rounded-full"
                >
                  3
                </div>
                Assign a Grade to this Employee</span
              >
            </h1>
            <input
              type="radio"
              class="mr-2 w-4 h-4 mt-6 "
              value="5"
              required
              name="grade"
            /><label class="text-lg font-semibold" for="excellent"
              >Excellent</label
            ><input
              type="radio"
              class="mr-2 w-4 h-4 mt-6 ml-6"
              value="4"
              required
              name="grade"
            /><label class="text-lg font-semibold" for="verygood"
              >Very Good</label
            >
            <input
              type="radio"
              class="mr-2 w-4 h-4 mt-6 ml-6"
              value="3"
              required
              name="grade"
            /><label class="text-lg font-semibold" for="good">Good</label>
            <input
              type="radio"
              class="mr-2 w-4 h-4 mt-6 ml-6"
              value="2"
              required
              name="grade"
            /><label class="text-lg font-semibold" for="fair">Fair</label>
            <input
              type="radio"
              class="mr-2 w-4 h-4 mt-6 ml-6"
              value="1"
              required
              name="grade"
            /><label class="text-lg font-semibold" for="poor">poor</label>
            <button
              @click="postJob"
              class="w-4/12 mt-12 ml-12 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300"
            >
              Finish
            </button>
          </div>
        </div>
        <div>
          <div class="shadow-md w-full mx-4 px-2 py-2 rounded-md">
            <img
              src="@/assets/illustrations/performance-illustration.svg"
              alt="Review"
            />
          </div>
          <h1 class="mt-5 ml-4 text-xl font font-semibold text-blue-900">
            Individual Performace Survey
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  methods: {
    navigateTo() {
      this.$router.replace(`/performance`);
    },
  },
  data() {
    return {};
  },
  components: { Navbar },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
