// Helper function to format time in HH:MM:SS AM/PM format
const formatTime = (timeStr) => {
    let [hours, minutes, seconds] = timeStr.split(":");
    let period = "AM";

    hours = parseInt(hours);
    seconds = seconds.split(".")[0];  // Removing milliseconds

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minutes}:${seconds} ${period}`;
};

const formatTimeClock = (clockStr) => {
    let [hours, minutes, seconds] =clockStr.split(":")
  
    hours = parseInt(hours);
    minutes = parseInt(minutes)
    seconds = parseInt( seconds.split(".")[0]);  // Removing milliseconds

    return `${hours} Hr ${minutes} Mins ${seconds} Secs`
}

const getAttendanceTable = (data) => {
    const tableBody = document.getElementById("attendance-table-body")
    tableBody.innerHTML = "" // Clear existing content

   data.forEach(row => {
    tableBody.innerHTML += `
       <tr>
            <td class="td-style">${row.date}</td>
            <td class="td-style">${formatTime(row.time_in)}</td>
            <td class="td-style">${formatTime(row.time_out)}</td>
            <td class="td-style">${formatTimeClock(row.break_hours)}</td>
            <td class="td-style">${formatTimeClock(row.working_hours)}</td>
       </tr>
    `
   });
  
    
}

// Get request - display attendance record
document.addEventListener("DOMContentLoaded", () => {
    // Function to getv token either from localStorage or sessionStorage
    const getToken = () => {
        return localStorage.getItem("userToken") || sessionStorage.getItem("userToken")
    } 

    const token = getToken()


    fetch("https://attendance-management-system-api.onrender.com/get_attendance_report", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        getAttendanceTable(data)
    })
    .catch(error => {
        console.error("There was a problem dispalying data:", error)
        alert("Failed to display content. please try again later")
    })
})

document.getElementById("exportBtn").addEventListener("click", () => {
    alert("Feature Coming Soon")
})