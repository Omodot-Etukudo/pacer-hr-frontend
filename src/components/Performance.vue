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
                  class="pl-1 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Go to Survey
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
                    <div class="flex items-center" title="Open Survey">
                      <button
                        @click="
                          navigateTo({ path: `/performance/${employeeid}` })
                        "
                        class="rounded-full w-10 px-2 py-2 bg-blue-100 text-white hover:shadow-md focus:outline-none transition transition-colors transition-shadow duration-300"
                        title="Open Survey"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="#1F487E"
                          class="chevron-double-right w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
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
    }
  },
  data() {
    return {
      employees: [
        {
          employeeid: "16ch021496",
          name: "Etukudo Omodot",
          role: "Human Resource Manager"
        },
        {
          employeeid: "DO123456789",
          name: "Dogunro Oluwatobi",
          role: "Human Resource Analyst"
        },
        {
          employeeid: "IS5427791",
          name: "Ifeyimika Soderu",
          role: "Senior IT Support Enginner"
        },
        {
          employeeid: "EA973197391",
          name: "Akhigbe Emmanuel",
          role: "Senior Cloud Enginner"
        }
      ]
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
