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
        <div></div>
      </div>
      <div class="px-10 py-16 my-16 bg-white rounded-lg shadow-lg">
        <header class="text-lg leading-6 font-medium text-gray-900 mb-2">
          Add New Employee to Payroll
        </header>
        <hr />
        <form>
          <div class="lg:grid grid-cols-2 md:flex flex-wrap sm:flex flex-wrap">
            <div class="px-5 py-5">
              <h3 class="mb-2 mt-4 font-semibold text-lg">Personal Details</h3>
              <h3 class="mb-5 mt-0 font-regular text-md text-gray-700">
                Fill out employee personal details to continue
              </h3>
              <h3 class="mb-4 mt-4 font-semibold">Employee ID</h3>
              <input
                v-model="employeeid"
                placeholder="Enter a valid Employee ID"
                required
                type="text"
                class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-3/4"
              />
              <h3 class="mb-4 mt-4 font-semibold">Employee's Full Name</h3>
              <input
                v-model="name"
                id="nom"
                required
                placeholder="Must be an existing employee"
                @change="addName()"
                type="text"
                class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-3/4"
              />
              <h3 class="mb-4 mt-4 font-semibold">Employee Job Title</h3>
              <input
                v-model="role"
                placeholder="eg. Product Manager"
                required
                type="text"
                class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-3/4"
              />
              <h3 class="mb-4 mt-4 font-semibold">Employee's Email Address</h3>
              <input
                v-model="email"
                placeholder="eg. john.doe@gmail.com"
                id="nom"
                required
                @change="addName()"
                type="email"
                class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-3/4"
              />
            </div>
            <div class="py-5 px-5">
              <h3 class="mb-2 mt-4 font-semibold text-lg">Salary Details</h3>
              <h3 class=" mt-0 font-regular text-md text-gray-700">
                Fill out employee hourly rates to compute total earnings
              </h3>
              <h3 class="mb-4 mt-6 mt-4 font-semibold">
                Earnings Per Hour ($)
              </h3>
              <input
                id="earningsPerHour"
                placeholder="eg. 15"
                v-model="earningsPerHour"
                required
                @change="calculateSalary()"
                type="text"
                class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-3/4"
              />
              <div class="grid grid-cols-2">
                <div>
                  <h3 class="mb-4 mt-4 font-semibold">Hours Per Week</h3>
                  <input
                    id="hours"
                    placeholder="eg. 20"
                    v-model="hours"
                    @change="calculateSalary()"
                    required
                    type="text"
                    class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-2/4"
                  />
                </div>
                <div>
                  <h3 class="mb-4 mt-4 font-semibold">
                    Additional Benefits (%)
                  </h3>
                  <input
                    @change="calculateSalary()"
                    placeholder="eg. 10"
                    v-model="benefits"
                    id="benefits"
                    type="text"
                    class="py-2 px-5 bg-blue-100 focus:outline-none font-regular text-xl w-2/4"
                  />
                </div>
              </div>
              <div class="grid grid-row-1">
                <div class="grid grid-cols-1">
                  <div
                    class="px-0 py-5 text-xl font-semibold w-full text-left"
                  ></div>
                  <div class="pb-5 pr-40 text-2xl font-semibold mt-4  mb-2">
                    <p>
                      <span class="font-regular text-sm ">Annual Salary:</span>
                      $<label id="totalSalary">000,000</label>
                    </p>
                    <p>
                      <span class="font-regular text-sm ">Net Salary:</span>
                      $<label id="netSalary">000,000</label>
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <button
                  @click="addSalary"
                  class="w-9/12 mr-48 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
                >
                  Add to Payroll
                </button>
              </div>
            </div>
          </div>
        </form>
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
      this.$router.go(route);
    },
    calculateSalary() {
      var total;
      var annualsalary;
      var netsalary;
      var eph = document.getElementById("earningsPerHour").value;
      var hrs = document.getElementById("hours").value;
      var ben = document.getElementById("benefits").value;
      total = parseFloat(eph * hrs) + parseFloat((ben / 100) * (eph * hrs));
      annualsalary = total * 250;
      netsalary = annualsalary - (10 / 100) * annualsalary;
      if (!isNaN(annualsalary) && !isNaN(netsalary)) {
        document.getElementById("totalSalary").innerHTML = annualsalary;
        document.getElementById("netSalary").innerHTML = netsalary;
      }
    },
    addName() {
      var na = document.getElementById("nom").value;
      document.getElementById("employeename").innerHTML = na;
    },
    async addSalary() {
      const response = await PayrollService.addSalary({
        employeeid: this.employeeid,
        name: this.name,
        email: this.email,
        role: this.role,
        grosssalary:
          (this.earningsPerHour * this.hours +
            (this.benefits / 100) * (this.earningsPerHour * this.hours)) *
          250,
        benefits: this.benefits,
        netsalary:
          (this.earningsPerHour * this.hours +
            (this.benefits / 100) * (this.earningsPerHour * this.hours)) *
            250 -
          (10 / 100) *
            (this.earningsPerHour * this.hours +
              (this.benefits / 100) * (this.earningsPerHour * this.hours)) *
            250,
      });
      if (response.success) {
        this.$router.replace({ path: "/payroll" });
        window.alert("Salary account successfully added");
      } else {
        window.alert("Invalid Employee ID");
        (this.employeeid = ""),
          (this.email = ""),
          (this.name = ""),
          (this.role = "");
      }
    },
  },
  data() {
    return {};
  },

  name: "Createsalary",
  components: { Navbar, Sidenav },
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
#avatar {
  border: 1px solid rgb(9, 9, 27);
}
input[type="text"],
input[type="email"] {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
}
input[type="text"]:focus,
input[type="email"]:focus {
  border: 1px solid #2a4365;
  box-shadow: 10px;
}
</style>
