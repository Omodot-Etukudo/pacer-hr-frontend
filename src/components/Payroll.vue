<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5">
      <div class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap">
        <div class="colspan-3">
          <h1 class="text-lg font-semibold text-black">Payroll Management</h1>
          <p class="font-light">
            Create and manage salary accounts
          </p>
        </div>
        <div></div>
        <div></div>
        <div class="px-8">
          <button
            class="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
            type="button"
            @click="navigateTo('Createsalary')"
          >
            New salary account
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
            @click="sortBy('name')"
          >
            Sort by Name
          </button>
        </div>
        <div>
          <button
            class="w-full hover:text-black text-gray-500 font-regular py-3 px-2 focus:outline-none hover:bg-gray-100 rounded-lg transition transition-colors duration-300 "
            type="button"
            @click="sortBy('role')"
          >
            Sort by Department
          </button>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden">
        <div class="my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200"
          >
            <table class="min-w-full " v-if="salary_accounts.data.length > 0">
              <thead>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Employee ID
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Full Name
                </th>

                <th
                  class="px-12 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Gross Salary ($)
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Benefits
                </th>
                <th
                  class="px-12 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Net Salary ($)
                </th>
              </thead>
              <tbody
                class="bg-white"
                id="table"
                v-for="items in salary_accounts.data"
                :key="items.name"
              >
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div
                          class="text-sm leading-5 font-medium text-black font-semibold"
                        >
                          {{ items.employeeid.toUpperCase() }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ items.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <div
                          class="h-10 w-10 rounded-full bg-green-300 font-semibold text-xl text-green-900 text-center py-1"
                        >
                          {{ items.name.charAt(0) }}
                        </div>
                      </div>
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900 font-semibold"
                        >
                          {{ items.name }}
                        </div>
                        <div class="text-xs leading-5 text-gray-500">
                          {{ items.role.toUpperCase() }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="pl-20 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-md leading-5 text-gray-900">
                      {{ items.grosssalary }}
                    </div>
                  </td>
                  <td
                    class="pl-12 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-md leading-5 text-gray-900">
                      {{ items.benefits }}%
                    </div>
                  </td>
                  <td
                    class="pl-16 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-md leading-5 text-gray-900 font-semibold">
                      {{ items.netsalary }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else-if="salary_accounts.length == 0">
              <img
                class="mx-auto mt-16"
                src="@/assets/illustrations/noleave.png"
              />
              <p class="text-black font-semibold text-center my-3 text-xl">
                No Salary Accounts Created
              </p>
              <p
                class="text-gray-600 font-regular text-md text-center mt-3 mb-64"
              >
                Employee Salary Accounts will appear here
              </p>
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
import PayrollService from "@/services/PayrollService.js";

export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    sortBy(prop) {
      this.salary_accounts.data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  data() {
    return {
      salary_accounts: null,
    };
  },

  components: { Navbar, Sidenav },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.salary_accounts = await PayrollService.getSalary();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
