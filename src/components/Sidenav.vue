<template>
  <div class="fixed">
    <section
      class="inset-y-0 left-0 max-w-full h-full max-h-full flex shadow-lg fixed"
    >
      <div class="relative w-64 max-w-md">
        <div
          class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
        ></div>
        <div
          class="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl bg-blue-900 px-1"
        >
          <header class="px-4 ">
            <h2 class="mx-10 font-semibold text-white text-2xl">
              <img src="@/assets/logo-White.svg" class="w-4/4" />
            </h2>
          </header>

          <div class="relative flex-1 py-16">
            <h3 class="ml-5 text-gray-600 text-sm font-semibold my-2">MAIN</h3>
            <div>
              <button
                id="dashboard"
                @click="navigateTo({ path: '/dashboard' })"
                class="w-full py-4 rounded-lg border-white focus:outline-none focus:font-semibold focus:bg-blue-800  text-white text-lg text-left px-8 hover:bg-blue-800 transition transition-colors duration-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-6 inline-block"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                Dashboard
              </button>
            </div>
            <div>
              <h3 class="ml-5 text-gray-600 text-sm font-semibold my-2">
                EMPLOYEES
              </h3>
              <button
                id="employees"
                @click="navigateTo({ path: '/employees' })"
                class="w-full rounded-lg py-4 border-r-0 border-white bg-blue-900 focus:font-semibold focus:outline-none focus:bg-blue-800  text-white text-lg text-left pl-8 pr-2 hover:bg-blue-800 transition transition-colors duration-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-6 inline-block"
                >
                  <path
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                  ></path>
                </svg>
                Manage Employees
              </button>
            </div>
            <div>
              <button
                id="payroll"
                @click="navigateTo({ path: '/performance' })"
                class="w-full py-4 rounded-lg border-r-0 border-white bg-blue-900 focus:outline-none focus:font-semibold focus:bg-blue-800  text-white text-lg text-left pl-8 hover:bg-blue-800 transition transition-colors duration-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="inline-block w-6"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                Performance
              </button>
            </div>
            <div>
              <button
                id="payroll"
                @click="navigateTo({ path: '/payroll' })"
                class="w-full rounded-lg py-4 border-r-0 border-white bg-blue-900 focus:outline-none focus:font-semibold focus:bg-blue-800  text-white text-lg text-left pl-8 hover:bg-blue-800 transition transition-colors duration-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-6 inline-block"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Payroll
              </button>
            </div>
            <div>
              <button
                id="leaverequests"
                @click="navigateTo({ path: '/leave' })"
                class="w-full rounded-lg py-4 border-r-0 border-white bg-blue-900 focus:outline-none focus:font-semibold focus:bg-blue-800 text-white text-lg text-left pl-8 hover:bg-blue-800 transition transition-colors duration-00"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-6 inline-block"
                >
                  <path
                    d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                  ></path>
                  <path
                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                  ></path>
                </svg>
                Leave Requests
              </button>
            </div>
            <div>
              <h3 class="ml-5 text-gray-600 text-sm font-semibold my-2">
                RECRUITMENT
              </h3>

              <button
                id="recruitment"
                @click="navigateTo({ path: '/postedjobs' })"
                class="w-full rounded-lg py-4 border-r-0 border-white bg-blue-900 focus:outline-none focus:font-semibold focus:bg-blue-800  text-white text-lg text-left pl-8 hover:bg-blue-800 transition transition-colors duration-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-5 inline-block"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a4 4 0 004 4h3v3a1 1 0 102 0v-3h3a4 4 0 000-8 4 4 0 00-8 0 4 4 0 00-4 4zm9 4H9V9.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 9.414V14z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Posted Jobs
              </button>
              <button
                id="recruitment"
                @click="navigateTo({ path: '/recruitment' })"
                class="w-full rounded-lg py-4 border-r-0 border-white bg-blue-900 focus:outline-none focus:font-semibold focus:bg-blue-800  text-white text-lg text-left pl-8 hover:bg-blue-800 transition transition-colors duration-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-6 inline-block"
                >
                  <path
                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                  ></path>
                </svg>
                Job Applications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navigateTo(route) {
      this.$router.replace(route);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  overflow-y: hidden;
  overflow-x: hidden;
}
/* #dashboard:hover,
#recruitment:hover,
#employees:hover,
#payroll:hover,
#leaverequests:hover {
  border-right: 4px solid white;
  transition-duration: 200ms;
  transition-delay: 100ms;
  background-color: #2c5282;
  color: rgb(216, 216, 216);
} */
/* #dashboard:active,
#recruitment:active,
#employees:active,
#payroll:active,
#leaverequests:active {
  border-right: 4px solid white;
  transition-duration: 200ms;
  transition-delay: 100ms;
  background-color: #2c5282;
  color: rgb(216, 216, 216);
} */
</style>
