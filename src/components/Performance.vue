<template>
  <div class="ml-64 bg-gray-100">
    <Navbar /><Sidenav />
    <div class="grid grid-cols-2">
      <div class="grid grid-rows-1 mt-5">
        <div class=" ml-10">
          <h1 class="text-lg font-semibold text-black">
            Employee Performance
          </h1>
          <p class="font-light">
            Manage and report employee performance
          </p>
          <div class="bg-white shadow-md rounded-lg px-5 mr-10 py-5 my-6">
            <h1 class="font-semibold text-gray-900">
              Performance Review for August
            </h1>
            <h1 class="text-gray-500">
              Fill survey based on performance over the last month
            </h1>
            <hr class="mt-2" />
            <table class="min-w-full bg-white my-2 rounded-md" id="table">
              <thead>
                <th
                  class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Employee Id
                </th>
                <th
                  class="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Full Name
                </th>

                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  class="pl-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  GRADE
                </th>
              </thead>
              <tbody class="bg-white">
                <tr v-for="items in employees" :key="items.employeeid">
                  <td
                    class="pl-6 pr-4 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div class="text-sm leading-5 font-semibold">
                          {{ items.employeeid }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="text-sm font-semibold text-gray-700">
                        {{ items.name }}
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div
                          class="text-sm w-56 leading-5 font-semibold text-green-800 bg-green-100 px-4 py-2 rounded-full text-center content-center"
                        >
                          {{ items.role }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <select name="" id=""
                      ><option>Grade</option>
                      <option>A (5)</option>
                      <option>B (4)</option>
                      <option>C (3)</option>
                      <option>D (2)</option>
                      <option>F (1)</option></select
                    >
                  </td>
                </tr>
              </tbody>
              <button
                class=" ml-5 my-5 w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300"
              >
                Done
              </button>
            </table>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2">
        <div class="bg-white shadow-md rounded-lg px-5 mr-10 py-5 mt-24">
          <linechart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";
import linechart from "./dashboardcomponents/linechart.vue";
export default {
  methods: {
    navigateTo(route) {
      this.$router.replace(route);
    },
  },
  data() {
    return {
      employees: [
        {
          employeeid: "16ch021496",
          name: "Etukudo Omodot",
          role: "Human Resource Manager",
          grade: 5,
        },
        {
          employeeid: "DO123456789",
          name: "Dogunro Oluwatobi",
          role: "Human Resource Analyst",
          grade: 2,
        },
        {
          employeeid: "IS5427791",
          name: "Ifeyimika Soderu",
          role: "Senior IT Support Enginner",
          grade: 4,
        },
        {
          employeeid: "EA973197391",
          name: "Akhigbe Emmanuel",
          role: "Senior Cloud Enginner",
          grade: 3,
        },
      ],
    };
  },
  name: "Performance",
  components: { Navbar, Sidenav, linechart },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
