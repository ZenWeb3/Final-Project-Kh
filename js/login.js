document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  //collecting inputed data
  let loginEmail = document.getElementById("email").value.trim();
  let loginPassword = document.getElementById("password").value.trim();

  //checking for empty input field
  if (!loginEmail || !loginPassword) {
    alert("Please fill in all fields.");
    return;
  }

  // retrive data fro, localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  //hashing the inputed login password
  let hashedLoginPassword = btoa(loginPassword);

  //checking if any user matches the login details
  let matchingUser = users.some(
    (users) =>
      users.email === loginEmail && users.userPassword === hashedLoginPassword
  );

  if (matchingUser) {
    alert("Login Successful");

    // redirect user to dashboard
    window.location.href = "./index.html";

    //save the logged in email to localStorage
    localStorage.setItem("currentUserEmail", loginEmail)
  } else {
    alert("Incorrect Username or Password. Please try again");
  }
});
