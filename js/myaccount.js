
let cropper;

// Fetch user profile photo (GET request)
function fetchAvatar() {
  const getToken = () => {
    return localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
  };
  const token = getToken();

  fetch("https://attendance-management-system-api.onrender.com/get_profile_picture", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const avatarUrl = data.picture_url || "https://www.w3schools.com/howto/img_avatar.png"; // a condition to display the unique pfp if it exists or the default
    
      // Update all avatar images across the page
      const avatarImages = document.querySelectorAll(".userImage");
      avatarImages.forEach(img => {
        img.src = avatarUrl;
      });
    })
    .catch(error => {
      console.error("Error fetching avatar:", error);
    });
}

// Function to handle previewing the image
function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const modal = document.getElementById("imageModal");
      const imageCropper = document.getElementById("imageCropper");

      imageCropper.src = e.target.result;
      modal.style.display = "flex"; // Show modal

      // Initialize Cropper.js on the image after the modal is shown
      if (cropper) {
        cropper.destroy(); // Destroy the old cropper if it exists
      }
      cropper = new Cropper(imageCropper, {
        aspectRatio: 0, // Example: Force square aspect ratio
        viewMode: 0,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: true,
      });
    };
    reader.readAsDataURL(file);
  }
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  if (cropper) {
    cropper.destroy(); // Destroy the cropper instance when closing
  }
  window.location.reload()
}

// Function to upload the cropped image
function cropImage() {
  const canvas = cropper.getCroppedCanvas();

  // Convert the cropped canvas to a Blob and append it to FormData
  canvas.toBlob((blob) => {
    const formData = new FormData();
    formData.append("image", blob, "avatar.png"); // 'image' is the key expected by the backend

    // Get the token for authorization
    const getToken = () => {
      return localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
    };
    const token = getToken();

    // Send the POST request to upload the cropped image
    fetch("https://attendance-management-system-api.onrender.com/upload_profile_pic", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}` // Authorization header
      },
      body: formData // FormData object containing the image
    })
      .then(response => response.json())
      .then(data => {
        if (data.picture_url) {
          // Update the displayed avatar image with the new URL
          const avatarImages = document.querySelectorAll(".userImage");
          avatarImages.forEach(img => {
            img.src = data.picture_url;
          });

          alert("Avatar uploaded successfully!"); // Show the alert first
          closeModal(); // Close the modal after saving

          // Delay the page reload so the alert and modal close actions have time
          setTimeout(() => {
            window.location.reload(); // Reload the current page
          }, 1000); // Delay reload by 1 second (1000 ms)
        }
      })
      .catch(error => {
        console.error("Error uploading avatar:", error);
      });
  }, "image/png"); // Convert canvas to Blob in PNG format
}

// Function to update the avatar (PUT request)
function updateAvatar() {
  const canvas = cropper.getCroppedCanvas();

  // Convert the cropped canvas to an image Blob for upload
  canvas.toBlob((blob) => {
    const formData = new FormData();
    formData.append("image", blob); // 'image' is the field name the API expects

    // Get the token for authorization
    const getToken = () => {
      return localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
    };
    const token = getToken();

    // Send the PUT request to update the avatar
    fetch("https://attendance-management-system-api.onrender.com/update_profile_pic", {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.picture_url) {
          // Optionally, reload the avatar to reflect the update
          const avatarImages = document.querySelectorAll(".userImage");
          avatarImages.forEach(img => {
            img.src = data.picture_url;
          });
        } 
      })
      .catch(error => {
        console.error("Error updating avatar:", error);
        alert("Failed to update avatar.");
      });
  }, "image/png");
}

// Call fetchAvatar on page load to display the user's current avatar
document.addEventListener("DOMContentLoaded", fetchAvatar);

//account details function
document.addEventListener("DOMContentLoaded", () => {
  const accountForm = document.getElementById("accountDetailsForm");
  const editIcon = document.getElementById("editIcon");
  const saveBtn = document.getElementById("saveBtn");
  const discardBtn = document.getElementById("discardBtn");
  const actionButtons = document.getElementById("actionButtons");
  const inputs = accountForm.querySelectorAll("input, select");
  const passwordResetForm = document.getElementById("passwordResetForm");
  const accountDetailsForm = document.getElementById("accountDetailsForm");
  const resetPasswordForm = document.getElementById("resetPasswordForm");

  // Function to get the token from localStorage or sessionStorage
  const getToken = () => {
    return localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
  };

  const token = getToken();
  console.log("Fetched token:", token);

  // Fetch user details and populate form
  fetch("https://attendance-management-system-api.onrender.com/get_account_details", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}` // Retrieve token stored either in the localStorage or sessionStorage
    }
  })
    .then(response => response.json())
    .then(data => {
      // Displaying user  names and role using the get request 
      let accountUserNameDiv = document.getElementById("accountUserNameDiv");
      let accountUserRoleDiv = document.getElementById("accountUserRoleDiv");

      accountUserNameDiv.innerHTML = `<h1 class="text-center usernameStyle"> ${data.First_Name} ${data.Last_Name}</h1>`;
      accountUserRoleDiv.innerHTML = `<p class="text-center userRoleStyle"> ${data.Role} </p>`;

      // Populate the fields with the unique user data
      console.log("userdata:", data);
      document.getElementById("employeeId").value = data.Employee_ID;
      document.getElementById("email").value = data.Official_Email_ID;
      document.getElementById("firstName").value = data.First_Name;
      document.getElementById("lastName").value = data.Last_Name;
      document.getElementById("dob").value = data.Date_Of_Birth;
      document.getElementById("gender").value = data.Gender;
      console.log("gender from backend:", data.Gender);
      document.getElementById("contact").value = data.Phone_Number;
      document.getElementById("role").value = data.Role;
    })
    .catch(error => {
      console.error("Error fetching user details:", error);
      alert("Failed to load account details.");
    });

  // Make form editable
  editIcon.addEventListener("click", () => {
    inputs.forEach(input => input.removeAttribute("disabled"));
    editIcon.style.display = "none"; // Hide edit icon
    actionButtons.classList.remove("d-none"); // Show save/discard buttons
    passwordResetForm.style.display = "none";
    accountDetailsForm.style.display = "block";
  });

  // Discard changes (reset to original values)
  discardBtn.addEventListener("click", () => {
    inputs.forEach(input => input.setAttribute("disabled", true));
    actionButtons.classList.add("d-none");
    editIcon.style.display = "inline";
    // Optionally, reload data to reset any modified fields
    location.reload(); 
  });

  // Save updated data (PUT request)
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Collect updated data
    const updatedDetails = {
      First_Name: document.getElementById("firstName").value,
      Last_Name: document.getElementById("lastName").value,
      Date_Of_Birth: document.getElementById("dob").value,
      Gender: document.getElementById("gender").value,
      Phone_Number: document.getElementById("contact").value,
      Role: document.getElementById("role").value
    };

    // Send updated data to backend
    fetch("https://attendance-management-system-api.onrender.com/update_account_details", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(updatedDetails)
    })
      .then(response => response.json())
      .then(data => {
        alert("Account details updated successfully!");

        // Update the values in localStorage
        localStorage.setItem("firstName", updatedDetails.First_Name);
        localStorage.setItem("lastName", updatedDetails.Last_Name);
        localStorage.setItem("userRole", updatedDetails.Role);

        // Reload page to reflect changes immediately
        window.location.reload();

        // Disable fields and hide save/discard buttons
        inputs.forEach(input => input.setAttribute("disabled", true));
        actionButtons.classList.add("d-none");
        editIcon.style.display = "inline";
      })
      .catch(error => {
        console.error("Error updating user details:", error);
        alert("Failed to update account details.");
      });
  });

  // Change password functionality
  document.getElementById("changePassword").addEventListener("click", () => {
    // Show the password reset form
    passwordResetForm.style.display = "block";
    accountDetailsForm.style.display = "none";
    editIcon.style.display = "block";
  });

  // Cancel button functionality
  document.getElementById("cancelBtn").addEventListener("click", () => {
    // Hide form
    passwordResetForm.style.display = "none";
    accountDetailsForm.style.display = "block";

    // Reset form fields
    resetPasswordForm.reset();
  });

  // Handle the password reset form submission
  resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Fetch values at the time of form submission
    const oldPassword = document.getElementById("oldPassword").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match");
      return;
    }

    if (oldPassword === newPassword) {
      alert("Old Password and New Password cannot be the same");
      return;
    }

    // Prepare data to send to backend
    const passwordData = {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_newpassword: confirmPassword
    };

    // Send the password request to the backend
    fetch("https://attendance-management-system-api.onrender.com/change_passsword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(passwordData)
    })
    .then(response => response.json())
    .then((data) => {
      if (data) {
        // alert user
        alert("Password reset successfully!");

        //redirect user to the login page by removing the user token from either storages
        localStorage.removeItem("userToken") || sessionStorage.removeItem("userToken")
        
        window.location.href = './login.html'
      } else {
        alert("Incorrect old password. Please try again later");
      }
    })
    .catch(error => {
      console.error("Encountered an error:", error);
      alert("An error occurred. Please try again.");
    });
  });
});
