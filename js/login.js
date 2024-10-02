document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  //collecting inputed data
  let loginEmail = document.getElementById("email").value.trim();
  let loginPassword = document.getElementById("password").value.trim();
  let rememberMe = document.getElementById("rememberMe").checked

  //validate input
  if (!loginEmail || !loginPassword) {
    alert("please enter both email and password")
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
      alert("Login Successful");

      //store token based on Remember Me checkbox
      if (rememberMe) {
        localStorage.setItem("userToken", data.token);
      } else {
        sessionStorage.setItem("userToken", data.token)
      }

      window.location.href = './index.html'
    } else {
      alert("login failed: Incorrect Email or Password")
    }
  })
  .catch(error => {
    console.error("Error:", error.message);
    alert("An error occured during login" + error.message)
  })
});
