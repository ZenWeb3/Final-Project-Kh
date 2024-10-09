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

  // if there isnt a token found
  const userLoggedIn =
    localStorage.getItem("userToken") || sessionStorage.getItem("userToken");

  if (!userLoggedIn) {
    alert("Login to continue.");
    window.location.href = './login.html'

    setTimeout(() => {
      alert("Redirecting please wait");
    }, 1000);
  }
};

