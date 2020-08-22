<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <employeesidenav />
    <div class="px-10 ">
      <h1 class="text-lg font-semibold text-black">Dashboard</h1>
      <h1 class="text-2xl font-semibold mt-2 text-gray-700">
        Hello &#128075;, {{ name }}
      </h1>
      <div class="grid grid-cols-3 gap-20 my-10">
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
              :src="require(`../../assets/icons/dashboard-icons/total.png`)"
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
                require(`../../assets/icons/dashboard-icons/employee-icon.png`)
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
              :src="
                require(`../../assets/icons/dashboard-icons/onleave-icon.png`)
              "
            />
          </div>
          <div>
            <h3 class="text-black font-semibold text-left text-3xl">
              00{{ approvedleave.data.length }}
            </h3>
            <p class="text-sm text-gray-600 text-left font-medium">
              Total On Leave
            </p>
            <button class=" text-xs text-blue-700 focus:outline-none "></button>
          </div>
        </div>
        <!-- TOTAL LEAVE REQUESTS -->
      </div>
      <div class="grid grid-cols-5 ml-6 mr-16 gap-20">
        <div class="grid col-span-3 ">
          <div class="shadow-lg rounded-md mx-0 my-5 px-4 py-4 bg-white">
            <div>
              <h2 class="text-base font-semibold text-blue-900 ml-3">
                Recent Job Openings
              </h2>
              <hr class="mt-2" />
            </div>
            <div v-if="jobs.data.length > 0">
              <div
                class="grid grid-cols-5 px-3 py-4"
                v-for="item in jobs.data"
                :key="item.index"
              >
                <div class="col-span-4">
                  <p class="font-semibold text-lg">{{ item.role }}</p>
                  <p class="text-sm text-gray-800 my-1">{{ item.location }}</p>
                  <div
                    class="float-left mr-6 px-3 my-2 bg-white rounded-lg  text-gray-700"
                    id="card-item"
                  >
                    {{ item.contracttype }}
                  </div>
                  <div
                    class="ml-2 px-3 my-2 bg-white float-left rounded-lg text-gray-700"
                    id="card-item"
                  >
                    {{ item.salary }}
                  </div>
                </div>
                <div>
                  <button
                    class="bg-blue-200 text-blue-900 font-semibold rounded-md px-8 py-2 my-6"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            <div v-else-if="jobs.data.length == 0" class="my-40">
              <img
                class="mx-auto mt-16 w-3/12 my-4"
                src="@/assets/illustrations/inbox-zero.svg"
              />
              <p class="text-black font-semibold text-center my-3 text-xl">
                No Job Openings
              </p>
              <p class="text-gray-700 font-regular text-center my-3 text-md">
                Jobs Posted would appear here
              </p>
            </div>
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
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import employeesidenav from "../employeecomponents/employeesidenav.vue";
import todolist from "../dashboardcomponents/todolist.vue";
import EmployeeService from "../../services/EmployeeService.js";
import LeaveService from "../../services/LeaveService.js";
import RecruitmentService from "@/services/RecruitmentService.js";

export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  data() {
    return {
      name: localStorage.getItem("name"),
      employeenumber: null,
      presentEmployees: null,
      approvedleave: null,
      jobs: null,
    };
  },
  name: "employeedashboard",
  components: { Navbar, employeesidenav, todolist },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.approvedleave = await LeaveService.getApprovedLeave();
    this.employeenumber = await EmployeeService.getEmployees();
    const a = parseInt(this.employeenumber.data.length);
    const b = parseInt(this.approvedleave.data.length);
    this.presentEmployees = a - b;
    this.jobs = await RecruitmentService.getAllJobs();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#taskContainer {
  height: 28rem;
  max-height: 35rem;
}
#card-item {
  border: 1px solid gray;
}
</style>
