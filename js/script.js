document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in
  let userLoggedIn = localStorage.getItem("userToken") || sessionStorage.getItem("userToken"); // Assuming userToken is stored in localStorage

  if (!userLoggedIn) {
    Swal.fire({
      title: "Oops!",
      text: "Please login to continue!",
      icon: "info",
      showConfirmButton: false
    });
    // redirect after a delay
    setTimeout(() => {
      window.location.href = './login.html';
    }, 1500);
  }
});

window.onload = () => {

  // Get user token
  const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken")

// Fetch user details from the server using promises
fetch("https://attendance-management-system-api.onrender.com/get_account_details", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => {
  // Extract firstName and lastName from the API response
  let firstName = data.First_Name;
  let lastName = data.Last_Name;

  // If user is found, display the full name
  if (firstName && lastName) {
    // Insert the name into the userName div and dropdownProfile div
    let userNameDiv = document.getElementById("userName");
    let dropdownProfileDiv = document.getElementById("dropdownProfile");

    dropdownProfileDiv.innerHTML = `<p class="fw-bold text-center"> ${firstName} ${lastName}</p>`;
    userNameDiv.innerHTML = `<h1>${firstName} ${lastName}</h1>`;
  }
})
.catch(error => {
  console.error("Error fetching user details:", error);
});


  // LogOut btn functionality
  const logoutBtn = document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("userToken") ||
    sessionStorage.removeItem("userToken");

    // Redirect user to the login page
    window.location.href = './login.html'
  });
};

