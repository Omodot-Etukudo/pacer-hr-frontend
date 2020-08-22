<template>
  <div class="ml-64">
    <Navbar />
    <employeesidenav />
    <div class="px-10 py-5 bg-gray-100">
      <h1 class="text-lg font-semibold text-black">My Finances</h1>
      <p class="font-light">
        View your current finance details
      </p>
      <div class="grid grid-rows-3 my-20">
        <div
          class="bg-white w-full shadow-md py-8 px-10 rounded-lg grid grid-cols-3 row-span-1"
        >
          <div class="grid grid-cols-5 flex-shrink-0">
            <div
              class="rounded-full bg-gray-300 w-24 h-24 text-center font-regular text-6xl col-span-1"
            >
              E
            </div>
            <div class="col-span-3 mx-6">
              <p class="text-2xl font-semibold mt-2">
                {{ this.name }}
              </p>
              <p class="text-gray-700 my-1">
                {{ this.salaryDetails.data.role }}
              </p>
              <p class="text-blue-700 text-sm">
                {{ this.salaryDetails.data.email }}
              </p>
            </div>
          </div>
          <div class="text-right mr-5">
            <p>TOTAL SALARY</p>
            <p class="text-3xl font-semibold ">
              {{ this.salaryDetails.data.grosssalary }}
            </p>
          </div>
          <div class="text-right  mr-5">
            <p>NET SALARY</p>
            <p class="text-3xl font-semibold ">
              {{ this.salaryDetails.data.netsalary }}
            </p>
          </div>
        </div>
        <div
          class="row-span-2 bg-white w-full shadow-md py-8 px-10 rounded-lg my-5 grid grid-cols-3"
        >
          <div></div>
          <div class="text-right mr-5">
            <p>BENEFITS</p>
            <p class="mb-10 font-light text-gray-600">
              This changes based on your performance
            </p>
            <p class="text-4xl font-semibold text-gray-700">
              {{ this.salaryDetails.data.benefits }}%
            </p>
          </div>
          <div class="text-right mr-5">
            <p>TAX DEDUCTIONS</p>
            <p class="mb-10 font-light text-gray-600">
              This may increase over time
            </p>
            <p class="text-4xl font-semibold text-gray-700">8.3%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import employeesidenav from "../employeecomponents/employeesidenav";
// import EmployeeService from "@/services/EmployeeService.js";
import PayrollService from "../../services/PayrollService.js";
export default {
  methods: {
    navigateTo() {},
  },
  data() {
    return {
      salaryDetails: null,
      id: localStorage.getItem("userid"),
      name: localStorage.getItem("name"),
    };
  },

  name: "SingleEmployee",
  components: { Navbar, employeesidenav },

  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.salaryDetails = await PayrollService.getSalaryById(this.id);
  },
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
