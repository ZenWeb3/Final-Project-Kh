window.onload = () => {

    //get looged in user email 
    let currentUserEmail = localStorage.getItem("currentUserEmail");

    //get all registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //find the user by matching email
    let currentUser = users.find(users => users.email === currentUserEmail)

    //if user is found display the full name
    if (currentUser) {
        let firstName = currentUser.firstName;
        let lastName = currentUser.lastName;

        //insert the name into the userName div
        let userNameDiv = document.getElementById("userName");
        let dropdownProfileDiv = document.getElementById("dropdownProfile");
        dropdownProfileDiv.innerHTML = `<p class="fw-bold text-center"> ${firstName} ${lastName}`
        userNameDiv.innerHTML = `<h1>${firstName} ${lastName}</h1>`
    }
}
