<template>
  <div class="max-h-24 "><canvas id="performance"></canvas></div>
</template>

<script>
import Chart from "chart.js";
export default {
  methods: {
    createChart() {
      const ctx = document.getElementById("performance");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              // one line graph
              label: "Average Employee Performance",
              data: [3.5, 2, 4.2, 4.6, 3, 3.5, 4],
              backgroundColor: [
                "rgba(195,218,254,.5)",
                // Blue
              ],
              borderColor: ["rgba(0,17,60,1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      });
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.createChart("performance");
  },
};
</script>
<style scoped></style>
