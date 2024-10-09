document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in
  let userLoggedIn = localStorage.getItem("userToken") || sessionStorage.getItem("userToken"); // Assuming userToken is stored in localStorage

  if (!userLoggedIn) {
    alert("Login to continue.");
    window.location.href = './login.html';

    // Optional: Another alert after redirect with a delay
    setTimeout(() => {
      alert("Redirecting, please wait");
    }, 1000);
  }
});

window.onload = () => {
  //fetch user details from local storage
  let firstName = localStorage.getItem("firstName");
  let lastName = localStorage.getItem("lastName");

  //if user is found display the full name
  if (firstName && lastName) {
    //insert the name into the userName div
    let userNameDiv = document.getElementById("userName");
    let dropdownProfileDiv = document.getElementById("dropdownProfile");
    dropdownProfileDiv.innerHTML = `<p class="fw-bold text-center"> ${firstName} ${lastName}</p>`;
    userNameDiv.innerHTML = `<h1>${firstName} ${lastName}</h1>`;
  }

  // LogOut btn functionality
  const logoutBtn = document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("userToken") ||
    sessionStorage.removeItem("userToken");

    // Redirect user to the login page
    window.location.href = './login.html'
  });
};

