<template>
  <div class="lg:mx-auto md:mx-auto sm:mx-auto">
    <div>
      <header class="grid grid-row grid-cols-2 gap-64 w-full mx-auto mt-10">
        <div class="mx-auto">
          <img class="w-40 mb-10 sm:ml-10 ml-10 " src="@/assets/logo.png" />
        </div>
        <div class="mx-auto">
          <button
            @click="navigateTo({ name: 'Careers' })"
            class="h-10 mx-10 border border-blue-900 transition transition-colors duration-300  bg-transparent hover:bg-blue-700 hover:border-blue-700 hover:text-white text-blue-900 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Careers
          </button>
        </div>
      </header>
    </div>
    <h1 class="text-center text-lg py-2 font-regular text-gray-500 mt-5">
      Welcome to Pacer-HR!
    </h1>
    <form
      class="bg-white shadow-md rounded px-8 pt-0 pb-8 mb-4 w-full max-w-md mx-auto mt-30"
    >
      <h1 class="text-center text-3xl pt-4 font-regular">
        Sign In
      </h1>
      <hr class="my-3" />
      <form method="post">
        <div class="mb-6">
          <input
            v-model="employeeid"
            name="employeeid"
            class="bg-gray-200 rounded w-full py-3 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            type="text"
            placeholder="Pacer-HR Domain"
          />
        </div>
        <div class="mb-5">
          <input
            class="bg-gray-200 rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            v-model="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button
            @click="Login"
            class="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none transition transition-colors duration-300"
            type="button"
          >
            Sign in to your account
          </button>
        </div>
      </form>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Pacer-HR. All rights reserved.
    </p>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  data() {
    return {
      employeeid: "",
      password: "",
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async Login() {
      const response = await AuthenticationService.login({
        employeeid: this.employeeid,
        password: this.password,
      });
      localStorage.setItem("token", response.token);
      localStorage.setItem("userid", response.userid);
      localStorage.setItem("name", response.employeename);
      localStorage.setItem("role", response.role);
      if (
        localStorage
          .getItem("role")
          .toLowerCase()
          .trim() == "human resource manager"
      ) {
        this.$router.push("dashboard");
      } else if (
        response.success &&
        localStorage
          .getItem("role")
          .toLowerCase()
          .trim() != "human resource manager"
      ) {
        this.$router.push("employeedashboard");
      } else {
        window.alert("Incorrect Pacer-HR Domain or Password");
        (this.employeeid = ""), (this.password = "");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-page {
  text-align: center;
}
</style>
