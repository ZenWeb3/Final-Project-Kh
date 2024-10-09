document.addEventListener("DOMContentLoaded", () => {
  // Capture login time and date when the user logs in
  const loginTime = new Date()
  const loginDate = loginTime.toISOString().split('T')[0]
  const loginTimeStr = loginTime.toISOString().split('T')[1]  // Get time in HH:MM:SS.SSSZ format

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


    // Calendar logic
    const calendarDays = document.getElementById('calendarDays');
    const currentMonth = document.getElementById('currentMonth');
    const today = new Date();
    let date = new Date(today.getFullYear(), today.getMonth(), 1);

    // Function to render the calendar
    function renderCalendar() {
        const month = date.getMonth();
        const year = date.getFullYear();
        currentMonth.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Clear previous days
        calendarDays.innerHTML = '';

        // Padding for days before the first of the month
        const startDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
        for (let i = 0; i < startDay; i++) {
            const emptyDiv = document.createElement('div');
            calendarDays.appendChild(emptyDiv);
        }

        // Add days of the month
        for (let day = 1; day <= lastDate; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }
            dayDiv.innerText = day;
            calendarDays.appendChild(dayDiv);
        }
    }

    // Initial render
    renderCalendar();

    // Clock Functionality
    function setDate() {
      const now = new Date();
    
      // Get current time components
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
    
      // Get clock hands
      const secondHand = document.querySelector('.second-hand');
      const minuteHand = document.querySelector('.minute-hand');
      const hourHand = document.querySelector('.hour-hand');
    
      // Calculate degrees for each hand
      const secondDegrees = ((seconds / 60) * 360) + 90; // 90 is offset to fix initial positioning
      const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    
      // Apply rotation
      secondHand.style.transform = `rotate(${secondDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
      // Update time display
      const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      document.getElementById('timeDisplay').textContent = timeString;
    }
    
    // Run clock every second
    setInterval(setDate, 1000);
    
    // Initialize clock
    setDate();

    // StopClock func starts here 

    // Assigning the necessesities to their unique variables
    const globalBtn = document.querySelector(".btns")
    const punchInDiv = document.querySelector(".punchInDiv")
    const punchActiveDiv = document.querySelector(".punch-active-div")
    const stopBreakDiv = document.querySelector(".stopBreak")
    const punchInBtn = document.getElementById("punchInBtn")
    const startBreakBtn = document.getElementById("breakInBtn")
    const stopBreakBtn = document.getElementById("stopBreakBtn")
    const punchOutBtn = document.getElementById("punchOutBtn")

    let workTime = 0
    let breakTime = 0
    let workInterval, breakInterval
    let isWorkActive = false
    let isBreakActive = false
    
    // Update the work stopClock display
    const  updatedWorkClock = () => {
      const hour = Math.floor(workTime / 3600)
      const minutes = Math.floor((workTime % 3600 ) / 60)
      const seconds = workTime % 60

      document.getElementById("workTimer").textContent =
      `${String(hour)} Hr ${String(minutes).padStart(2,"0")} Mins ${String(seconds).padStart(2, "0")} Secs  `
    }

    // Update the break stopClock display
    const updatedBreakClock = () => {
      const hour = Math.floor(breakTime / 3600)
      const minutes = Math.floor((breakTime % 3600 ) / 60)
      const seconds = breakTime % 60

      document.getElementById("breakTimer").textContent =
      `${String(hour)} Hr ${String(minutes).padStart(2,"0")} Mins ${String(seconds).padStart(2, "0")} Secs  `
    }
    updatedWorkClock()
    updatedBreakClock()

    // Punch in - start work clock
    punchInBtn.addEventListener("click", () => {
      globalBtn.style.display = 'none'
      punchActiveDiv.style.display = 'flex'

      if (!isWorkActive) {
        workInterval = setInterval ( () => {
          workTime++;
          updatedWorkClock()
        }, 1000)
        isWorkActive = true
      } 
    })

    // Start Break - Start break clock
    startBreakBtn.addEventListener("click", () => {
      punchActiveDiv.style.display = 'none'
      globalBtn.style.display = 'block'
      punchInDiv.style.display = 'none'
      stopBreakDiv.style.display ='flex'

       // Pause work clock
       if (isWorkActive) {
       clearInterval(workInterval);
       isWorkActive = false
      }

      if (!isBreakActive) {
        breakInterval = setInterval ( () => {
          breakTime ++
          updatedBreakClock()
        }, 1000)
        isBreakActive = true
      }
    })

    // Stop Break - Stop Break Clock
    stopBreakBtn.addEventListener("click", () => {
      globalBtn.style.display = 'none'
      punchActiveDiv.style.display = 'flex'
      stopBreakDiv.style.display ='none'
      if (isBreakActive) {
        clearInterval(breakInterval)
        isBreakActive = false
      }

      if (!isWorkActive) {
        workInterval = setInterval ( () => {
          workTime++;
          updatedWorkClock()
        }, 1000)
        isWorkActive = true
      }
    })

    punchOutBtn.addEventListener("click", () => {
      if (isWorkActive) {
        clearInterval(workInterval)
      }
      if (isBreakActive) {
        clearInterval(breakInterval)
      }

      // Capture the punch out time 
      const punchOutTime = new Date()
      const punchOutDate = punchOutTime.toISOString().split("T")[0]
      const punchOutTimeStr = punchOutTime.toISOString().split('T')[1]  // Get time in HH:MM:SS.SSSZ format
      

      // Capture working hours and break hours
      const workHours = formatTime(workTime, true)
      const breakhours = formatTime(breakTime, true)

      // Dashboard payload
      const postData = {
        "date": loginDate,
        "time_in": `${loginTimeStr}`,  // Fix time_in format
        "time_out": `${punchOutTimeStr}`,  // Fix time_out format
        "break_hours": breakhours,
        "working_hours": workHours
      }

      const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken")

      // Send the data to the server Via POST request
      fetch("https://attendance-management-system-api.onrender.com/upload_attendance_report", {
        method : "POST",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      }).then(response => response.json())
        .then (data => {
          console.log("Attendance has been saved successfully", data)
        })
        .catch(error => console.error("Error submitting attendance:",error))
    })

          // Function to change the time format
          const formatTime = (timeInSeconds, standardFormat = false) => {
            const hours = Math.floor(timeInSeconds / 3600)
            const minutes = Math.floor((timeInSeconds % 3600 ) / 60)
            const seconds = timeInSeconds % 60
            if (standardFormat) {
              return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2, "0")}`
            } else {
              return `${String(hours)} Hr ${String(minutes).padStart(2,"0")} Mins ${String(seconds).padStart(2, "0")} Secs `
            }
          }
});
