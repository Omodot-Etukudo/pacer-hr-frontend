<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5">
      <div class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap">
        <div class="colspan-3">
          <h1 class="text-lg font-semibold text-black">
            Job Application Management
          </h1>
          <p class="font-light">
            Post Jobs openings and Manage job applicants
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div
        class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap mt-16"
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
            @click="sortBy('firstname')"
          >
            Sort by Name
          </button>
        </div>
        <div class="px-10">
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
            v-if="applications.data.length > 0"
          >
            <table class="min-w-full bg-white">
              <thead>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applicant ID
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Full Name
                </th>

                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Job Opening
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Resume/CV
                </th>
                <th
                  class="pl-6 pr-2 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact Details
                </th>
                <th
                  class="px-2 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </thead>
              <tbody
                class="bg-white"
                id="table"
                v-for="items in applications.data"
                :key="items.applicantid"
              >
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div class="text-sm leading-5 font-semibold">
                          00{{ items.applicantid }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 ">
                        <div
                          class="h-10 w-10 rounded-full bg-green-300 font-bold text-md text-green-900 text-center py-2"
                        >
                          {{ items.firstname.charAt(0)
                          }}{{ items.lastname.charAt(0) }}
                        </div>
                      </div>
                      <div class="ml-2">
                        <div class="text-sm font-semibold">
                          {{ items.firstname }} {{ items.lastname }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ items.role }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div
                          class="text-sm leading-5 font-semibold text-red-800 tracking-wide"
                        >
                          <a v-bind:href="items.resume" target="_blank">View</a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div class="text-sm font-semibold underline">
                          {{ items.email }}
                        </div>
                        <h3 class="text-sm">{{ items.phone }}</h3>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-4 cursor-pointer"
                    @click="deleteApplicant(items.applicantid)"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="#ad0000"
                      class="x-circle w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <div class="py-40">
              <img
                class="mx-auto  w-1/12"
                src="@/assets/illustrations/noleave.png"
              />
              <p class="text-black font-semibold text-center my-3 text-2xl">
                No Pending applicants currently
              </p>
              <p
                class="text-gray-700 font-regular text-lg text-center mt-3 mb-64"
              >
                Job applicants will appear here
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
import RecruitmentService from "@/services/RecruitmentService.js";
export default {
  data() {
    return {
      applications: null,
    };
  },
  methods: {
    async deleteApplicant(body) {
      const response = await RecruitmentService.deleteApplicant(body);
      let filterArray = this.applications.data.filter((a) => a.body !== body);
      this.applications.data = filterArray;
      window.location.reload();
      window.alert(response.message);
    },
    navigateTo() {
      this.$router.go(1);
    },
    sortBy(prop) {
      this.applications.data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  name: "Employees",
  components: { Navbar, Sidenav },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.applications = await RecruitmentService.getApplicants();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
