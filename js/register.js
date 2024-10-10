// import swal from 'sweetalert';
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // collect form data
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let dob = document.getElementById("dob").value.trim();
  let gender = document.getElementById("gender").value.trim();
  let email = document.getElementById("email").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let role = document.getElementById("role").value;
  let password = document.getElementById("password").value.trim();

  console.log("Selected Role:", role);


  // Checking for empty input fields
  if (!firstName || !lastName || !dob || !gender || !email || !contact || !role || !password) {
    return;
  }

  // Object for new users
  let newUser = {
    First_Name: firstName,
    Last_Name: lastName,
    Date_Of_Birth: dob,
    Gender: gender,
    Onpassive_Email: email,
    password: password,
    Contact_No: contact,
    Role: role
  };

  // Send data to backend API
  fetch("https://attendance-management-system-api.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data => {
    console.log("Response from server:", data.Role); // Log the entire response

    // Adjust this based on the actual response structure
    if (data) {
      Swal.fire({
        "title" : "Registered Successfully!", 
        "text" : "Redirecting to the login page!", 
        "icon" : "success",
        showConfirmButton : false
      });
      
      setTimeout( () => {
        window.location.href = './login.html'
      }, 1500)
    } else {
      Swal.fire("Registration failed", "Tryagain Later", "error");
    }
})
.catch(error => {
    console.error("Error:", error);
});

});
