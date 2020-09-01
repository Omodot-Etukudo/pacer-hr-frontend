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
          Edit Employee Salary Details
        </header>
        <hr />
        <div class="lg:grid grid-cols-1 md:flex flex-wrap sm:flex flex-wrap">
          <div class="py-5 px-5 w-1/2">
            <h3 class="mb-2 mt-4 font-semibold text-lg">
              Update Salary for
              <span class="px-2 py-1 bg-blue-200 rounded-md">{{
                this.salaryDetails.data.name
              }}</span>
            </h3>
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
                  v-model="hours"
                  placeholder="eg. 20"
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
                  :value="salaryDetails.data.benefits"
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
                    <label id="totalSalary">{{
                      this.salaryDetails.data.grosssalary
                    }}</label>
                  </p>
                  <p>
                    <span class="font-regular text-sm ">Net Salary:</span>
                    <label id="netSalary">{{
                      this.salaryDetails.data.netsalary
                    }}</label>
                  </p>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button
                @click="updateSalary"
                class="w-9/12 mr-48 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300 lg:my-0 mx-0 md:my-4 mx-0 sm:my-4 mx-0"
              >
                Update Salary
              </button>
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
import PayrollService from "@/services/PayrollService";
export default {
  data() {
    return {
      salaryDetails: null,
      id: this.$route.params.id,
    };
  },
  methods: {
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
    async updateSalary() {
      const response = await PayrollService.updateSalary(
        {
          employeeid: this.$route.params.id,
          benefits: document.getElementById("benefits").value,
          grosssalary:
            (parseFloat(document.getElementById("earningsPerHour").value) *
              this.hours +
              (parseFloat(document.getElementById("benefits").value) / 100) *
                (parseFloat(document.getElementById("earningsPerHour").value) *
                  this.hours)) *
            250,
          netsalary:
            (parseFloat(document.getElementById("earningsPerHour").value) *
              this.hours +
              (parseFloat(document.getElementById("benefits").value) / 100) *
                (parseFloat(document.getElementById("earningsPerHour").value) *
                  this.hours)) *
              250 -
            (10 / 100) *
              (parseFloat(document.getElementById("earningsPerHour").value) *
                this.hours +
                (parseFloat(document.getElementById("benefits").value) / 100) *
                  (parseFloat(
                    document.getElementById("earningsPerHour").value
                  ) *
                    this.hours)) *
              250,
        },
        this.$route.params.id
      );
      this.$router.replace({ path: "/payroll" });
      console.log(response);
      window.alert(response.message);
    },
  },
  name: "Singlesalary",
  components: { Navbar, Sidenav },
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
<style scoped></style>
