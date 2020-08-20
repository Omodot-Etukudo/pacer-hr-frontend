<template>
  <div class="max-h-24">
    <header class="text-xl font-semibold mb-1 mx-4 leading-loose text-blue-900">
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 inline-block">
        <path
          fill-rule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-"
          clip-rule="evenodd"
        ></path>
      </svg>
      My Tasks
    </header>
    <div>
      <div class="">
        <div class="grid grid-cols-8 ">
          <div class="col-span-7">
            <input
              type="text"
              placeholder="Add a task here"
              v-model="newTodo"
              class="bg-gray-200 w-full h-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
          </div>
          <div>
            <button
              @click="addTodo(newTodo)"
              class="w-full bg-blue-900 hover:bg-blue-700 text-white h-full font-medium py-2 px-4 focus:outline-none transition transition-colors duration-300"
            >
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- //TASK OBJECT -->
        <div v-if="tasks.length >= 1" class="overflow-x-hidden">
          <div class="overflow-y-scroll">
            <div
              class="grid grid-cols-9 border-l-4 border-blue-900 my-2"
              v-for="items in tasks"
              :key="items.task"
            >
              <div class="py-4 px-5 col-span-8 overflow-hidden break-words">
                <p class="mb-1 text-lg font-semibold max-w-9/12">
                  {{ items.task }}
                </p>
                <p class="text-md font-Regular text-gray-500">
                  {{ items.addedAt }}
                </p>
              </div>
              <div>
                <button
                  class="focus:outline-none"
                  @click="deleteTodo(items.task)"
                  title="Delete"
                >
                  <svg fill="red" viewBox="0 0 20 20" class="w-6 my-8">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="tasks.length == 0" class="pb-10 border-0 shadow-none">
          <img class="mx-auto mt-16" src="@/assets/illustrations/notask.png" />
          <p class="text-black font-semibold text-center my-3 text-xl">
            No pending tasks
          </p>
          <p class="text-gray-600 font-regular text-md text-center mt-3 mb-10">
            Tasks you add will appear here
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      tasks: [],
      name: localStorage.getItem("name")
    };
  },
  mounted() {},
  methods: {
    addTodo(newTodo) {
      if (newTodo.trim() === "") {
        console.log("Err");
      } else {
        this.tasks.push({ task: newTodo, addedAt: "6th August 2020" });
        this.newTodo = null;
      }
    },
    deleteTodo(deletedTask) {
      let filteredArray = this.tasks.filter(a => a.task !== deletedTask);
      this.tasks = filteredArray;
    }
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
