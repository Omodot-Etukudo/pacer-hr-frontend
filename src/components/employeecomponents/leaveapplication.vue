<template>
  <div class="ml-64">
    <Navbar />
    <employeesidenav />
    <div class="px-10 py-5 bg-gray-100">
      <h1 class="text-lg font-semibold text-black">Leave Application</h1>
      <p class="font-light">Plan on taking a break? Apply here</p>
      <div class="grid grid-cols-2 pr-10">
        <div
          class="mt-20 mb-32 bg-white rounded-md shadow-md w-12/12 px-8 py-10 col-span-1"
        >
          <h1 class="text-lg leading-6 font-medium text-gray-900 mb-2">
            Complete this form for leave application
          </h1>
          <hr class="mb-10" />
          <div>
            <div class="grid grid-cols-2 ">
              <div>
                <label for="startdate" class="font-semibold my-1"
                  >Start Date</label
                >
                <p>
                  <input
                    type="text"
                    v-model="startdate"
                    required
                    class="py-3 px-3 bg-blue-100 focus:outline-none text-lg w-3/4"
                  />
                </p>
              </div>
              <div class="text-right">
                <label for="duration" class="font-semibold my-1 text-left"
                  >Duration</label
                >
                <p>
                  <input
                    v-model="duration"
                    type="text"
                    required
                    class="py-3 px-3 bg-blue-100 focus:outline-none text-lg w-3/4"
                  />
                </p>
              </div>
            </div>
            <div class="mt-10">
              <label for="reason" class="font-semibold my-1 text-left"
                >Reason for leave application</label
              >
              <textarea
                id="textarea"
                v-model="reason"
                class="form-textarea block w-full h-40 px-3 py-3 bg-blue-100 focus:outline-none max-h-40 mb-10 rounded-md"
                rows="3"
                placeholder="Enter your reason"
              ></textarea>
              <button
                @click="submit"
                class="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
        <div
          class="col-span-1 rounded-md w-3/4 bg-white mt-20 mb-32 ml-40 shadow-sm py-10 px-5"
        >
          <h1 class="font-semibold ">Request History</h1>
          <hr />
          <table>
            <thead>
              <th><h1 class=" mr-32 mt-5">Reason</h1></th>
              <th><h1 class="mr-20 mt-5">Start Date</h1></th>
              <th><h1 class="mt-5">Status</h1></th>
            </thead>
            <tbody v-for="items in requests" :key="items.reason">
              <td>
                <h1 class="my-6">{{ items.reason }}</h1>
              </td>
              <td>
                <h1>{{ items.startdate }}</h1>
              </td>
              <td>
                <div
                  v-if="items.status == 'Pending'"
                  class="my-6 px-2 py-1 bg-orange-200 text-orange-900 font-semibold rounded-md text-center"
                >
                  {{ items.status }}
                </div>
                <div
                  v-if="items.status == 'Approved'"
                  class="my-6 px-2 py-1 bg-green-200 rounded-md text-center"
                >
                  {{ items.status }}
                </div>
                <div
                  v-if="items.status == 'Rejected'"
                  class="my-6 px-2 py-1 bg-red-200 rounded-md text-center"
                >
                  {{ items.status }}
                </div>
              </td>
              <td>
                <h1
                  title="Delete Request"
                  class="text-xl font-semibold text-red-700 ml-4 cursor-pointer"
                >
                  x
                </h1>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import employeesidenav from "../employeecomponents/employeesidenav";
import LeaveService from "../../services/LeaveService";

export default {
  methods: {
    navigateTo() {
      this.$router.replace(`/employees`);
    },
    async submit() {
      const response = await LeaveService.postLeave({
        employeeid: localStorage.getItem("userid"),
        name: localStorage.getItem("name"),
        role: localStorage.getItem("role"),
        reason: this.reason,
        duration: this.duration,
        startdate: this.startdate,
      });
      if (response.success) {
        window.alert("Application Submitted");
        (this.reason = ""), (this.duration = ""), (this.startdate = "");
      } else {
        window.alert("Could not submit application");
        (this.reason = ""), (this.duration = ""), (this.startdate = "");
      }
    },
  },
  data() {
    return {
      employeeDetails: null,

      requests: [
        {
          reason: "Medical Check-Up",
          startdate: "20-02-20",
          status: "Approved",
        },
        {
          reason: "Annual Vacation",
          startdate: "30-04-20",
          status: "Rejected",
        },
        {
          reason: "Sick Leave",
          startdate: "05-07-20",
          status: "Pending",
        },
      ],
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
#pill {
  border: 1px solid gray;
}
</style>
