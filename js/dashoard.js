document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("onTimeChart").getContext("2d");
  const ctx2 = document.getElementById("latePercentageChart").getContext("2d");
  const ctx3 = document.getElementById("breakHoursChart").getContext("2d");
  const ctx4 = document.getElementById("workHoursChart").getContext("2d");

  // Create gradient for the chart
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(76, 175, 80, 0.5)"); // Start color (green)
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Fade to white

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 200);
  gradient2.addColorStop(0, "rgba(255, 0, 0, 0.5)"); // Start color (semi-transparent red)
  gradient2.addColorStop(0.5, "rgba(255, 153, 153, 0.5)"); // Mid color (lighter red)
  gradient2.addColorStop(1, "rgba(255, 255, 255, 0)"); // Fade to white

  const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient3.addColorStop(0, 'rgba(255, 179, 127, 1)'); // Start color in rgba format
  gradient3.addColorStop(1, 'rgba(255, 122, 0, 0)');   // End color (orange to transparent)

  const gradient4 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient4.addColorStop(0, 'rgba(2, 222, 238, 1)'); // Start color (solid)
  gradient4.addColorStop(1, 'rgba(0, 186, 200, 0)'); // End color (transparent)



  const onTimeChart = new Chart(ctx, {
    type: "line", // Line chart
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Example labels
      datasets: [
        {
          label: "",
          data: [40, 75, 55, 100, 65], // Example data points
          backgroundColor: gradient, // Fill below the line
          borderColor: "rgba(76, 175, 80, 1)", // Line color
          fill: true, // Fill the area below the line
          tension: 0.4, // Smooth curves
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
        },
        y: {
          grid: {
            display: false, // Hide the x-axis grid lines
            drawBorder: false,
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
          beginAtZero: true,
          max: 100,
          border: {
            display: false, // Hide the y-axis border line
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });

  // Late Chart
  const latePercentageChart = new Chart(ctx2, {
    type: "line", // Line chart
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Example labels
      datasets: [
        {
          label: "",
          data: [50, 20, 85, 45, 40, 90], // Example data points
          backgroundColor: gradient2, // Fill below the line
          borderColor: "rgba(255, 0, 0, 0.5)", // Line color
          fill: true, // Fill the area below the line
          tension: 0.4, // Smooth curves
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
        },
        y: {
          grid: {
            display: false, // Hide the x-axis grid lines
            drawBorder: false,
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
          beginAtZero: true,
          max: 100,
          border: {
            display: false, // Hide the y-axis border line
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });

  // Total break hours
   const breakHoursChart = new Chart(ctx3, {
    type: "line", // Line chart
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Example labels
      datasets: [
        {
          label: "",
          data: [ 40, 20, 100, 65, 50, 13], // Example data points
          backgroundColor: gradient3, // Fill below the line
          borderColor: "rgb(255, 155, 0)", // Line color
          fill: true, // Fill the area below the line
          tension: 0.4, // Smooth curves
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
        },
        y: {
          grid: {
            display: false, // Hide the x-axis grid lines
            drawBorder: false,
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
          beginAtZero: true,
          max: 100,
          border: {
            display: false, // Hide the y-axis border line
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });

  // Total working hours
  const workHoursChart = new Chart(ctx4, {
    type: "line", // Line chart
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Example labels
      datasets: [
        {
          label: "",
          data: [ 40, 85, 45, 100, 65], // Example data points
          backgroundColor: gradient4, // Fill below the line
          borderColor: "rgb(2, 200, 200)", // Line color
          fill: true, // Fill the area below the line
          tension: 0.4, // Smooth curves
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
        },
        y: {
          grid: {
            display: false, // Hide the x-axis grid lines
            drawBorder: false,
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
          beginAtZero: true,
          max: 100,
          border: {
            display: false, // Hide the y-axis border line
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });

});
