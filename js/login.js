// import swal from 'sweetalert';
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  //collecting inputed data
  let loginEmail = document.getElementById("email").value.trim();
  let loginPassword = document.getElementById("password").value.trim();
  let rememberMe = document.getElementById("rememberMe").checked

  //validate input
  if (!loginEmail || !loginPassword) {
    return;
  }

  //convert to x-www-form-urlencoded format
  const formBody = `Email_ID=${encodeURIComponent(loginEmail)}&password=${encodeURIComponent(loginPassword)}`;


  // send login data to backend for validation
  fetch ("https://attendance-management-system-api.onrender.com/login", {
    method: "POST",
    headers: {
      "content-type":"application/x-www-form-urlencoded"
    },
    body: formBody
  } )
  .then(async response => {
    const data = await response.json();

    // if successful save token
    if (data.token) {
      //store token based on Remember Me checkbox
      if (rememberMe) {
        localStorage.setItem("userToken", data.token);
      } else {
        sessionStorage.setItem("userToken", data.token)
      }
      Swal.fire({
        title: "Login Successful!",
        text: "Redirecting to the Dashboard!",
        icon: "success",
        showConfirmButton: false
      })
      setTimeout( () => {
        window.location.href = './index.html'
      }, 1500)
    } else {
      Swal.fire("Login Failed", "Incorrect email or password", "error");
      Swal.fire({
        title: "Login Failed!",
        text: "Incorrect email or password!",
        icon: "error",
        showConfirmButton: false
      });
    }
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
});
