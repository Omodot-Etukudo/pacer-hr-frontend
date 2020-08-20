<template>
  <div class="ml-64 bg-gray-100">
    <Navbar />
    <Sidenav />
    <div class="px-10 py-5">
      <div class="lg:grid grid-cols-4 md:grid grid-cols-3 sm:flex flex-wrap">
        <div class="colspan-3">
          <h1 class="text-lg font-semibold text-black">Post Job Openings</h1>
          <p class="font-light">
            Create and post job openings
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="px-10 py-16 my-16 bg-white rounded-lg shadow-lg">
        <header class="text-lg leading-6 font-medium text-gray-900 mb-2">
          Post a New Job
        </header>
        <hr />
        <form>
          <div
            class="lg:grid grid-cols-6 gap-2 md:flex flex-wrap sm:flex flex-wrap"
          >
            <div class="px-5 py-5 col-span-3">
              <h3 class="mb-2 mt-4 font-semibold text-lg">Job Details</h3>
              <h3 class="mb-5 mt-0 font-regular text-md text-gray-700">
                Fill out job details to continue
              </h3>
              <h3 class="mb-4 mt-4 font-semibold">Job Title</h3>
              <input
                v-model="role"
                required
                type="text"
                placeholder="eg. Product Manager"
                class="py-3 px-3 bg-blue-100 focus:outline-none text-lg w-3/4"
              />
              <div class="grid grid-cols-2 gap-10 w-3/4">
                <div>
                  <h3 class="mb-4 mt-4 font-semibold">Contract Type</h3>
                  <select
                    v-model="contracttype"
                    id="select"
                    class="block appearance-none w-full bg-blue-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Full-Time</option>
                    <option>Internship</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div class="pl-0">
                  <h3 class="mb-4 mt-4 font-semibold">Location</h3>
                  <select
                    v-model="location"
                    id="select"
                    class="block appearance-none w-full bg-blue-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Remote</option>
                    <option>Lagos, Nigeria</option>
                    <option>Abuja, Nigeria</option>
                  </select>
                </div>
              </div>
              <h3 class="mb-4 mt-4 font-semibold">Salary Range</h3>
              <input
                v-model="salary"
                placeholder="eg. $102,000 - $110,000"
                required
                type="text"
                class="py-3 px-3 bg-blue-100 focus:outline-none text-lg w-3/4"
              />
            </div>

            <div class="col-span-3 px-5 py-5">
              <h3 class="mb-2 mt-4 font-semibold text-lg">
                Job Description and Requirements
              </h3>
              <h3 class="mb-5 mt-0 font-regular text-md text-gray-700">
                Fill out description and requirements to continue
              </h3>
              <h3 class="mb-4 mt-4 font-semibold">Job Description</h3>
              <textarea
                id="textarea"
                v-model="jobdescription"
                class="form-textarea mt-1 block w-full h-40 px-3 py-3 bg-blue-100 focus:outline-none max-h-40"
                rows="3"
                placeholder="Enter Job Description"
              ></textarea>
              <h3 class="mb-4 mt-4 font-semibold">Job Requirements</h3>
              <textarea
                id="textarea"
                v-model="jobrequirement"
                class="form-textarea mt-1 block w-full h-40 px-3 py-3 bg-blue-100 focus:outline-none max-h-40 mb-10"
                rows="3"
                placeholder="Enter Job Requirements"
              ></textarea>
              <button
                @click="postJob"
                class="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded focus:outline-none transition transition-colors duration-300"
              >
                Post Job
              </button>
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
import RecruitmentService from "@/services/RecruitmentService.js";
export default {
  data() {
    return {};
  },
  methods: {
    async postJob() {
      const response = await RecruitmentService.postJob({
        role: this.role,
        jobdescription: this.jobdescription,
        contracttype: this.contracttype,
        jobrequirement: this.jobrequirement,
        location: this.location,
        salary: this.salary,
      });
      if (response.success) {
        this.$router.replace({ path: "/postedjobs" });
        window.alert("Job Successfully Posted");
      } else {
        (this.role = ""),
          (this.jobdescription = ""),
          (this.contracttype = ""),
          (this.jobrequirement = ""),
          (this.location = ""),
          (this.salary = "");
        window.alert("Could not post job");
      }
    },
  },
  name: "Createjob",
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
#textarea {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
}

#textarea:focus {
  border: 1px solid #2a4365;
  transition: border 1s;
}
input[type="text"],
input[type="email"],
#select {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
}
input[type="text"]:focus,
input[type="email"]:focus,
#select:focus {
  border: 1px solid #2a4365;
  box-shadow: 10px;
}
</style>
