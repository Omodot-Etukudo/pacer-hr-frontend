<template>
  <div>
    <nav class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          ></div>
          <!-- MY PROFILE -->
          <div class="ml-10 ">
            <div>
              <h3
                class="text-blue-900 font-semibold text-right text-lg"
                id="username"
              >
                <p id="try">{{ id }}</p>
              </h3>
              <p class="text-sm text-gray-500 text-right" id="job">
                {{ job }}
              </p>
            </div>
          </div>
          <div class="ml-5 relative">
            <div>
              <button
                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
              >
                <div
                  class="text-green-900 font-semibold text-3xl bg-green-300 rounded-full w-12 h-12 text-center"
                  title="My Profile"
                >
                  <h2>
                    {{ avatar }}
                  </h2>
                </div>
              </button>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              @click="logout"
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="logout"
            >
              <img
                src="../assets/icons/log-out.png"
                alt="Log Out"
                title="Log Out"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: localStorage.getItem("name"),
      job: localStorage.getItem("role").toUpperCase(),
      avatar: localStorage.getItem("name").charAt(0),
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.replace(route);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("userid");
      localStorage.removeItem("role");
      this.$router.replace({ path: "/login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
