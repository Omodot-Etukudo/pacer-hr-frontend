<template>
  <div class="ml-64">
    <Navbar />
    <employeesidenav />
    <div class="px-10 py-5 bg-gray-100">
      Employee Performance
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import employeesidenav from "../employeecomponents/employeesidenav";
import EmployeeService from "../../services/EmployeeService.js";
export default {
  methods: {
    navigateTo() {
      this.$router.replace(`/employees`);
    },
  },
  data() {
    return {
      employeeDetails: null,
    };
  },

  name: "employeeperformance",
  components: { Navbar, employeesidenav },

  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({ path: "/login" });
      window.alert("You need to login first");
    }

    this.employeeDetails = await EmployeeService.getEmployeeById(
      this.$route.params.id
    );
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
</style>
