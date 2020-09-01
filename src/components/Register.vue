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
        <div class=" my-auto pl-10">
          <p class="font-semibold text-2xl text-right">
            Create Employee Account
          </p>
          <p class="text-right text-lg font-light">
            Fill the form below to continue
          </p>
        </div>
      </div>
      <form autocomplete="off">
        <div class="grid grid-cols-3 my-10">
          <div class="col-span-1 grid grid-rows-1 gap-0">
            <div class=" row-span-1">
              <div class="mt-10">
                <div
                  class="rounded-full bg-blue-900 w-20 h-20 text-center pt-5 font-regular text-4xl text-white pl-5 mb-5"
                >
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-10 "
                  >
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 font-semibold">Full Name</h3>
                <input
                  type="text"
                  v-model="name"
                  autocomplete="off"
                  required
                  class="py-2 px-5 bg-white focus:outline-none font-normal text-xl"
                />
                <p
                  class="text-md text-blue-800 underline font-regular my-1"
                ></p>
                <h3 class="mb-2 mt-4 font-semibold">Employee ID</h3>
                <input
                  v-model="employeeid"
                  required
                  autocomplete="anyrandomstring"
                  type="text"
                  class="py-2 px-5 bg-white focus:outline-none font-normal text-xl"
                />
                <h3 class="mb-2 mt-4 font-semibold">Email Address</h3>
                <input
                  v-model="email"
                  required
                  autocomplete="anyrandomstring"
                  type="email"
                  class="py-2 px-5 bg-white focus:outline-none font-normal text-xl"
                />
                <h3 class="mb-2 mt-4 font-semibold">Set Password</h3>
                <input
                  v-model="password"
                  required
                  autocomplete="anyrandomstring"
                  type="password"
                  class="py-2 px-5 bg-white focus:outline-none font-normal text-xl"
                />
              </div>
            </div>
          </div>
          <div class="col-span-2 px-10 py-10 bg-white shadow-lg rounded-lg">
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
                        v-model="role"
                        required
                        placeholder="eg. Product Manager"
                        type="text"
                        class="py-3 px-5 font-normal bg-blue-100 focus:outline-none text-lg w-full"
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
                        v-model="location"
                        required
                        type="text"
                        class="py-3 px-5 bg-blue-100 focus:outline-none text-lg w-full"
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
                        v-model="contracttype"
                        required
                        type="text"
                        class="py-3 px-5 bg-blue-100 focus:outline-none text-lg w-full"
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
                        v-model="hiredate"
                        required
                        placeholder="eg. 2020/06/25"
                        type="text"
                        class="py-3 px-5 bg-blue-100 focus:outline-none text-lg w-full"
                      />
                    </dd>
                  </div>
                  <div class="py-2 my-4 px-6 text-center">
                    <button
                      @click="register"
                      class=" w-2/4 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
                    >
                      Continue
                    </button>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";
import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  methods: {
    navigateTo(route) {
      this.$router.go(route);
    },
    async register() {
      const response = await AuthenticationService.register({
        employeeid: this.employeeid,
        name: this.name.trim(),
        email: this.email.trim(),
        password: this.password.trim(),
        role: this.role.trim(),
        hiredate: this.hiredate.trim(),
      });
      window.alert(response.message + ", proceed to create a Salary Account.");
      this.$router.replace({ path: "/createsalary" });
    },
  },
  mounted() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.employeeid = "";
    this.role = "";
    this.location = "";
    this.contacttype = "";
    this.hiredate = "";
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
  },
  data() {
    return {};
  },

  name: "SingleEmployee",
  components: { Navbar, Sidenav },
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
