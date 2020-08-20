<template>
  <div class="ml-64">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5 bg-gray-100">
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
        <div></div>
      </div>
      <div class="grid grid-cols-3 my-10">
        <div class="col-span-1 grid grid-rows-1 gap-0">
          <div class=" row-span-1">
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
              >Back to Employees
            </button>
            <div class="mt-10">
              <div
                class="rounded-full bg-blue-900 w-20 h-20 text-center py-3 font-regular text-4xl text-white mb-5"
              >
                {{ employeeDetails.user.name.charAt(0) }}
              </div>
              <h3 class="mb-2">Full Name</h3>
              <input
                type="text"
                :value="employeeDetails.user.name.toUpperCase()"
                class="py-3 px-5 bg-bl focus:shadow-md focus:outline-none font-regular text-xl"
              />
              <p class="text-md text-blue-800 underline font-regular my-1"></p>
              <h3 class="mb-2 mt-4">Email Address</h3>
              <input
                type="text"
                :value="employeeDetails.user.email"
                class="py-3 px-5 focus:shadow-md transition-3ms focus:outline-none font-regular text-xl"
              />
            </div>
          </div>
        </div>
        <div class="col-span-2 px-4 py-4 bg-white shadow-md">
          <div class="bg-white  overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Job Details
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                Employee major Job Details
              </p>
              <hr class="mt-2" />
            </div>
            <div>
              <dl>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-md font-semibold text-gray-800">
                    Job Title
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <input
                      type="text"
                      class="py-3 px-5  transition-shadow focus:outline-none text-lg w-full focus:shadow-md "
                      :value="employeeDetails.user.role.toUpperCase()"
                    />
                  </dd>
                </div>
                <div
                  class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-md font-semibold text-gray-800">
                    Work Location
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <input
                      type="text"
                      class="py-3 px-5 transition-3ms focus:outline-none text-lg w-full focus:shadow-md "
                      value="Remote"
                    />
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-md font-semibold text-gray-800">
                    Contract Type
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <input
                      type="text"
                      class="py-3 px-5 transition-3ms focus:outline-none text-lg w-full focus:shadow-md"
                      value="Full Time"
                    />
                  </dd>
                </div>
                <div
                  class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-md font-semibold text-gray-800">
                    Hire Date
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <input
                      type="text"
                      class="py-3 px-5 transition-3ms focus:outline-none text-lg w-full focus:shadow-md"
                      :value="employeeDetails.user.hiredate.slice(0, 10)"
                    />
                  </dd>
                </div>
                <div class="py-2 my-4 px-6 text-right">
                  <button
                    class="text-red-800 font-semibold mr-5 hover:shadow-md px-4 py-3"
                  >
                    Delete Employee
                  </button>
                  <button
                    class="bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
                  >
                    Confirm
                  </button>
                </div>
              </dl>
            </div>
          </div>
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
    navigateTo() {
      this.$router.replace(`/employees`);
    }
  },
  data() {
    return {
      employeeDetails: null
    };
  },

  name: "SingleEmployee",
  components: { Navbar, Sidenav },

  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }

    this.employeeDetails = await EmployeeService.getEmployeeById(
      this.$route.params.id
    );
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#avatar {
  border: 1px solid rgb(9, 9, 27);
}
input[type="text"],
input[type="email"],
input[type="password"],
#select {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
#select:focus {
  border: 1px solid #2a4365;
  box-shadow: 10px;
}
</style>
