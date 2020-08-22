<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5">
      <div class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap">
        <div class="colspan-3">
          <h1 class="text-lg font-semibold text-black">
            Posted Jobs
          </h1>
          <p class="font-light">
            View and manage previously posted jobs
          </p>
        </div>
        <div></div>
        <div></div>
        <div class="px-8">
          <button
            @click="navigateTo('createjob')"
            class="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
            type="button"
          >
            Post Job Opening
          </button>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap mt-16"
      >
        <div class="colspan-3">
          <div class="grid grid-cols-9">
            <div class="col-span-1 py-3">
              <svg fill="gray" viewBox="0 0 20 20" class="w-6 inline-block">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="col-span-8">
              <form>
                <input
                  type="text"
                  placeholder="Press enter to search"
                  class="focus:outline-none w-full px-4 py-3 text-lg bg-gray-100"
                />
              </form>
            </div>
          </div>
        </div>
        <div></div>
        <div class="px-10">
          <button
            class="w-full hover:text-black text-gray-500 font-regular py-3 px-2 focus:outline-none hover:bg-gray-100 rounded-lg transition transition-colors duration-300 "
            type="button"
            @click="sortBy('name')"
          >
            Sort by Name
          </button>
        </div>
        <div class="px-10">
          <button
            class="w-full hover:text-black text-gray-500 font-regular py-3 px-2 focus:outline-none hover:bg-gray-100 rounded-lg transition transition-colors duration-300 "
            type="button"
            @click="sortBy('role')"
          >
            Sort by Department
          </button>
        </div>
      </div>
      <div v-if="postedjobs.data.length > 0">
        <div
          class="grid grid-flow-row"
          v-for="items in postedjobs.data"
          :key="items.name"
        >
          <div
            class="shadow-md rounded-lg mx-10 px-10 my-5 py-5 mt-4 bg-white overflow-hidden max-h-1/6"
            id="jobpost"
          >
            <p class="font-semibold text-xl">{{ items.role.toUpperCase() }}</p>
            <div
              class="mt-2 flex items-center text-md font-semibold text-green-700 sm:mr-6 mt-4 "
            >
              <div class="bg-green-100 px-2 py-1 rounded-full">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 inline-block"
                  viewBox="0 0 20 20"
                  fill="#0B5D1E"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ items.location }}
              </div>

              <div
                class="flex items-center text-md font-semibold text-blue-700 ml-10 bg-green-100 px-2 py-1 rounded-full"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="#1F487E"
                  class="briefcase w-5 h-5 mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  ></path>
                </svg>
                {{ items.contracttype }}
              </div>
            </div>
            <p class="mt-4 mb-2 text-gray-800 text-lg"></p>
            <div
              class="lg:grid grid-cols-10 md:flex flex-wrap sm:flex flex-wrap"
            >
              <div
                class="col-span-9 pb-4 text-black text-md text-justify w-11/12"
              >
                {{ items.jobdescription.slice(0, 356) }}...
              </div>
              <div class="col-span-1 mx-auto">
                <button
                  @click="deleteJob(items.role)"
                  class="text-red-900 bg-red-100 rounded-md focus:outline-none font-semibold px-6 py-3 hover:shadow-md text-lg transition transition-shadow duration-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="postedjobs.data.length == 0" class="my-40">
        <img
          class="mx-auto mt-16 w-2/12 my-4"
          src="@/assets/illustrations/inbox-zero.svg"
        />
        <p class="text-black font-semibold text-center my-3 text-2xl">
          No Jobs openings
        </p>
        <p class="text-gray-700 font-regular text-center my-3 text-lg">
          Job openings posted would appear here
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";
import RecruitmentService from "@/services/RecruitmentService.js";

export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    deleteJob(role) {
      let filterArray = this.postedjobs.data.filter((a) => a.role !== role);
      this.postedjobs.data = filterArray;
      RecruitmentService.deleteJob(role);
    },
    sortBy(prop) {
      this.postedjobs.data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  data() {
    return {
      postedjobs: null,
    };
  },

  name: "PostedJobs",
  components: { Navbar, Sidenav },

  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.postedjobs = await RecruitmentService.getAllJobs();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
