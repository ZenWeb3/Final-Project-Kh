let cropper;

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
        cropper.destroy(); // Destroy the old cropper if exists
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
}

// Crop the image and save
function cropImage() {
  const canvas = cropper.getCroppedCanvas();
  const avatarImage = document.getElementById("avatarImage");

  // Convert the cropped canvas to an image URL and set it as the avatar
  avatarImage.src = canvas.toDataURL("image/png");

  closeModal(); // Close the modal after saving
}
let accountUserNameDiv = document.getElementById("accountUserNameDiv")
let accountUserRoleDiv = document.getElementById("accountUserRoleDiv")

let firstName = localStorage.getItem("firstName")
let lastName = localStorage.getItem("lastName")
let userRole = localStorage.getItem("userRole")

accountUserNameDiv.innerHTML = `<h1 class= "text-center usernameStyle"> ${firstName} ${lastName}</h1>`
accountUserRoleDiv.innerHTML = `<p class= "text-center userRoleStyle"> ${userRole} </p>`


//account details function
document.addEventListener("DOMContentLoaded", () => {
  const accountForm = document.getElementById("accountDetailsForm");
  const editIcon = document.getElementById("editIcon");
  const saveBtn = document.getElementById("saveBtn");
  const discardBtn = document.getElementById("discardBtn");
  const actionButtons = document.getElementById("actionButtons");
  const inputs = accountForm.querySelectorAll("input, select");

  // Function to get the token from localStorage or sessionStorage
 const getToken = () => {
    return localStorage.getItem("userToken") || sessionStorage.getItem("userToken")
  }
  
  const token = getToken();
  console.log("Fetched token:", token);

  // Fetch user details and populate form
  fetch("https://attendance-management-system-api.onrender.com/get_account_details", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}` // retrive token  stored either in the localStorage or sessionStorage
    }
  })
    .then(response => response.json())
    .then(data => {
      //populate the fields with the unique user data
      console.log("userdata:", data)
      document.getElementById("employeeId").value = data.Employee_ID;
      document.getElementById("email").value = data.Official_Email_ID;
      document.getElementById("firstName").value = data.First_Name;
      document.getElementById("lastName").value = data.Last_Name;
      document.getElementById("dob").value = data.Date_Of_Birth;
      document.getElementById("gender").value = data.Gender;
      console.log("gender from backend:", data.Gender)
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
        "Authorization": `Bearer ${(token)}`
      },
      body: JSON.stringify(updatedDetails)
    })
      .then(response => response.json())
      .then(data => {
        alert("Account details updated successfully!");

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
});





