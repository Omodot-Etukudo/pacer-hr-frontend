<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5">
      <div class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap">
        <div class="colspan-3">
          <h1 class="text-lg font-semibold text-black">
            Leave and Time-off requests
          </h1>
          <p class="font-light">
            Manage all leave and time-off requests
          </p>
        </div>
        <div></div>
        <div></div>
        <div class="px-8 grid grid-cols-4 gap-5 shadow-md px-10 py-2 bg-white">
          <div class="col-span-1 ">
            <svg fill="currentColor" viewBox="0 0 20 20" class=" w-8 my-8">
              <path
                fill-rule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="col-span-3 text-xl mx-0 py-5">
            You have
            <span class="font-bold"
              >{{ leaverequest.data.length }} leave request(s)</span
            >
          </div>
        </div>
      </div>
      <!-- SEARCH AND FILTER SECTION -->
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
          >
            Sort by Name
          </button>
        </div>
        <div class="px-10">
          <button
            class="w-full hover:text-black text-gray-500 font-regular py-3 px-2 focus:outline-none hover:bg-gray-100 rounded-lg transition transition-colors duration-300 "
            type="button"
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
            <table class="min-w-full " v-if="leaverequest.data.length > 0">
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
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  reason
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start Date
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </thead>
              <tbody class="bg-white" id="table">
                <tr
                  id="table"
                  v-for="items in leaverequest.data"
                  :key="items.id"
                >
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ items.employeeid }}
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
                          class="text-md leading-5 font-semibold  text-gray-900"
                        >
                          {{ items.name }}
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
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ items.duration }}
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
                          {{ items.reason }}
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
                          {{ items.startdate.substring(0, 10) }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-0">
                        <button
                          @click="approveRequest(items)"
                          title="Approve"
                          class="mr-4 rounded-full bg-green-600 text-white px-4 py-2 focus:outline-none shadow-md"
                        >
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-5"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg></button
                        ><button
                          title="Reject"
                          @click="deleteRequest(items.employeeid)"
                          class="ml-4 rounded-full bg-red-400 text-red-900 px-3 py-2 focus:outline-none shadow-md"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            class="w-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else-if="leaverequest.data.length == 0" class="my-40">
              <img
                class="mx-auto  w-1/12 "
                src="@/assets/illustrations/noleave.png"
              />
              <p class="text-black font-semibold text-center my-3 text-2xl">
                No Leave Requests
              </p>
              <p
                class="text-gray-700 font-regular text-lg text-center mt-3 mb-64"
              >
                Leave Requests will appear here
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
import LeaveService from "@/services/LeaveService.js";
export default {
  data() {
    return {
      leaverequest: null,
    };
  },
  methods: {
    deleteRequest(employeeid) {
      console.log(employeeid);
      LeaveService.deleteRequest(employeeid);
      let filteredArray = this.leaverequest.data.filter(
        (a) => a.employeeid !== employeeid
      );
      this.leaverequest.data = filteredArray;
    },
    approveRequest(body) {
      LeaveService.deleteRequest(body.employeeid);
      LeaveService.approveLeave({
        employeeid: body.employeeid,
        name: body.name,
        role: body.role,
        duration: body.duration,
      });
      let filteredArray = this.leaverequest.data.filter(
        (a) => a.employeeid !== body.employeeid
      );
      this.leaverequest.data = filteredArray;
    },
  },
  name: "Leaverequest",
  components: { Navbar, Sidenav },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }
    this.leaverequest = await LeaveService.getLeaveRequest();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
