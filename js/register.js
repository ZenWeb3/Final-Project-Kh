document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // collect form data
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let dob = document.getElementById("dob").value.trim();
  let gender = document.getElementById("gender").value.trim();
  let email = document.getElementById("email").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let role = document.getElementById("role").value.trim();
  let password = document.getElementById("password").value.trim();

  //checking for empty input field
  if (!firstName || !lastName || !dob || !gender || !email || !contact || !role || !password ) {
    alert("Please fill in all fields.")
    return;
  }

  // temporary password hashing using btoa method
  let hashedPassword = btoa(password);

  //object for new users
  let newUser = {
    "firstName" : firstName,
    "lastName" : lastName,
    "dob" : dob,
    "gender" : gender,
    "email" : email,
    "contact" : contact,
    "role" : role,
    "userPassword" : hashedPassword
  }

  //get users from localStorage o  r initialize a new array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  //push new users to the array
  users.push(newUser);
  
  //save the updated array back to the localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("You have successfully registered, Data has been saved");

  //redirect to the login 
  window.location.href = './login.html';
});
