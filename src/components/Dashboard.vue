<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 ">
      <h1 class="text-lg font-semibold text-black">Dashboard</h1>
      <h1 class="text-2xl font-semibold mt-2 text-gray-700">
        Hello &#128075;, {{ name }}
      </h1>
      <div
        class="lg:grid grid-cols-4 gap-12 md:flex flex-wrap sm:flex flex-wrap my-5"
      >
        <!-- DASHBOARD DATA INDICATOR -->
        <!-- TOTAL EMPLOYEES -->
        <div
          class="w-10/12 px-3 py-6 shadow-md grid grid-cols-2 gap-0 bg-white rounded-md"
        >
          <div class="w-10 my-auto mx-auto">
            <img
              id="dashimg"
              class="h-10 w-10 rounded-full"
              title="My Profile"
              :src="require(`../assets/icons/dashboard-icons/total.png`)"
            />
          </div>
          <div>
            <h3 class="text-black font-semibold text-left text-3xl">
              00{{ employeenumber.data.length }}
            </h3>
            <p class="text-sm text-gray-600 text-left font-medium">
              Total Employees
            </p>
          </div>
        </div>
        <!-- TOTAL PRESENT -->
        <div
          class="w-10/12 px-3 py-6 shadow-md grid grid-cols-2 gap-0 bg-white rounded-md"
        >
          <div class="w-10 my-auto mx-auto">
            <img
              id="dashimg"
              class="h-10 w-10 rounded-full"
              title="My Profile"
              :src="
                require(`../assets/icons/dashboard-icons/employee-icon.png`)
              "
            />
          </div>
          <div>
            <h3 class="text-black font-semibold text-left text-3xl">
              00{{ this.presentEmployees }}
            </h3>
            <p class="text-sm text-gray-600 text-left font-medium">
              Total Present
            </p>
          </div>
        </div>
        <!-- TOTAL ON LEAVE -->
        <div
          class="w-10/12 px-3 py-6 shadow-md grid grid-cols-2 gap-0 bg-white rounded-md"
        >
          <div class="w-10 my-auto mx-auto">
            <img
              id="dashimg"
              class="h-10 w-10 rounded-full"
              title="My Profile"
              :src="require(`../assets/icons/dashboard-icons/onleave-icon.png`)"
            />
          </div>
          <div>
            <h3 class="text-black font-semibold text-left text-3xl">
              00{{ approvedleave.data.length }}
            </h3>
            <p class="text-sm text-gray-600 text-left font-medium">
              Total On Leave
            </p>
            <button class=" text-xs text-blue-700 focus:outline-none ">
              View on Leave>>
            </button>
          </div>
        </div>
        <!-- TOTAL LEAVE REQUESTS -->
        <div
          class="w-10/12 px-3 py-6 shadow-md grid grid-cols-2 gap-0 bg-white rounded-md"
        >
          <div class="w-10 my-auto mx-auto">
            <img
              id="dashimg"
              class="h-10 w-10 rounded-full"
              title="My Profile"
              :src="require(`../assets/icons/dashboard-icons/leave-icon.png`)"
            />
          </div>
          <div>
            <h3 class="text-black font-semibold text-left text-3xl">
              00{{ leaverequest.data.length }}
            </h3>
            <p class="text-sm text-gray-600 text-left font-medium">
              Leave Requests
            </p>
            <button
              @click="navigateTo('leave')"
              class=" text-xs text-blue-700 focus:outline-none"
            >
              Go to requets>>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="lg:grid grid-cols-5 ml-6 lg:mr-16 md:flex flex-wrap md:mr-5 sm:flex flex-wrap sm:mr-5"
    >
      <div
        class="lg:grid grid-rows-2 col-span-3 md:grid grid-rows-3 col-span-2 sm:grid grid-rows-2 col-span-2"
      >
        <div class="shadow-lg rounded-md mx-5 my-5 px-4 py-4 bg-white">
          <h2 class="text-xl font-semibold text-blue-900 ml-3">
            Average Employee Performance
          </h2>
          <linechart />
        </div>

        <div class="shadow-lg bg-white mx-5 my-5 rounded-md">
          <header class="py-3 px-5 text-blue-900 font-semibold text-xl">
            Employees on Leave
          </header>
          <hr class="border-1 border-gray-200" />
          <leavetable />
        </div>
      </div>
      <div
        id="taskContainer"
        class="shadow-lg col-span-2 mx-5 py-4 mt-6 rounded-lg overflow-hidden bg-white"
      >
        <todolist />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";
import todolist from "./dashboardcomponents/todolist.vue";
import leavetable from "./dashboardcomponents/leavetable.vue";
import linechart from "./dashboardcomponents/linechart.vue";
import EmployeeService from "@/services/EmployeeService.js";
import LeaveService from "@/services/LeaveService.js";
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  data() {
    return {
      name: localStorage.getItem("name"),
      employeenumber: null,
      approvedleave: null,
      leaverequest: null,
      presentEmployees: null
    };
  },
  name: "Dashboard",
  components: { Navbar, Sidenav, todolist, leavetable, linechart },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.employeenumber = await EmployeeService.getEmployees();
    this.approvedleave = await LeaveService.getApprovedLeave();
    this.leaverequest = await LeaveService.getLeaveRequest();
    const a = parseInt(this.employeenumber.data.length);
    const b = parseInt(this.leaverequest.data.length);
    this.presentEmployees = a - b;
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#taskContainer {
  height: 28rem;
  max-height: 35rem;
}
</style>
