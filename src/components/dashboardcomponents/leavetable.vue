<template>
  <div class="px-4 py-4">
    <div
      class="align-middle inline-block min-w-full sm:rounded-lg border-b border-gray-100"
      v-if="approvedleave.data.length > 0"
    >
      <table class="min-w-full ">
        <thead>
          <th
            class="pl-6 pr-2 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
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
        </thead>
        <tbody class="bg-white">
          <tr
            v-for="items in approvedleave.data"
            :key="items.employeeid"
            id="table"
          >
            <td
              class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-blue-900"
            >
              {{ items.employeeid.toUpperCase() }}
            </td>
            <td
              class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 font-semibold "
            >
              {{ items.name.toUpperCase() }}
            </td>
            <td
              class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 font-semibold"
            >
              {{ items.role.toUpperCase() }}
            </td>
            <td
              class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 font-semibold"
            >
              {{ items.duration.toUpperCase() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="approvedleave.data.length == 0" class="pb-10">
      <img class="mx-auto mt-16" src="@/assets/illustrations/noleave.png" />
      <p class="text-black font-semibold text-center my-3 text-xl">
        No Employees on leave
      </p>
      <p class="text-gray-600 font-regular text-md text-center mt-3 mb-10">
        Approved leave requests will appear here
      </p>
    </div>
  </div>
</template>

<script>
import LeaveService from "@/services/LeaveService.js";
export default {
  data() {
    return {
      approvedleave: null
    };
  },
  async mounted() {
    this.approvedleave = await LeaveService.getApprovedLeave();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table:nth-child(odd) {
  background-color: #f9fbff;
}
</style>
