<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5">
      <div class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap">
        <div class="colspan-3">
          <h1 class="text-lg font-semibold text-black">
            <div class="flex overflow-hidden my-2">
              <img
                class="inline-block h-8 w-8 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            Employee Directory
          </h1>
          <p class="font-light">
            View and manage workers in the organizations
          </p>
        </div>
        <div></div>
        <div></div>
        <div class="px-8">
          <button
            class="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
            type="button"
            @click="navigateTo('register')"
          >
            Add New Employee
          </button>
        </div>
      </div>
      <!-- SEARCH AND FILTER SECTION -->
      <div
        class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap mt-24"
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
          >
            Sort by Name
          </button>
        </div>
        <div class="px-10">
          <button
            class="w-full hover:text-black text-gray-500 font-regular py-3 px-2 focus:outline-none hover:bg-gray-100 rounded-lg transition transition-colors duration-300 "
            type="button"
          >
            Sort by Department
          </button>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-4 gap-10 md:flex-wrap gap-5 my-10 sm:flex-wrap gap-5 my-10"
      >
        <div
          class="text-center shadow-lg bg-white py-8 rounded-t-lg"
          v-for="items in users.data"
          :key="items.employeeid"
        >
          <div
            class="bg-green-300 font-semibold text-xl text-green-900 text-center py-2 rounded-full w-12 h-12 mx-auto"
            title="My Profile"
          >
            {{ items.name.charAt(0) }}
          </div>
          <p class="font-semibold my-1 text-lg">{{ items.name }}</p>
          <p class="mb-1 text-sm text-gray-600">
            {{ items.role.toUpperCase() }}
          </p>
          <p class="text-blue-800 font-semibold underline my-2 text-sm">
            {{ items.email }}
          </p>
          <p>
            <button
              class="focus:outline-none w-full pt-2 text-blue-800 font-bold"
              @click="navigateTo({ path: `/employees/${items.employeeid}` })"
            >
              View More <span class="font-bold">></span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";
import EmployeeService from "@/services/EmployeeService.js";

export default {
  methods: {
    navigateTo(route) {
      this.$router.replace(route);
    },
  },
  data() {
    return {
      users: null,
    };
  },

  name: "Employees",
  components: { Navbar, Sidenav },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.users = await EmployeeService.getEmployees();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#avatar {
  border: 1px solid rgb(9, 9, 27);
}
</style>
