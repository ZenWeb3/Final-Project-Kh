window.onload = () => {

    //fetch user details from local storage
    let firstName = localStorage.getItem("firstName") 
    let lastName = localStorage.getItem("lastName") 

    //if user is found display the full name
    if (firstName && lastName) {
        //insert the name into the userName div
        let userNameDiv = document.getElementById("userName");
        let dropdownProfileDiv = document.getElementById("dropdownProfile");
        dropdownProfileDiv.innerHTML = `<p class="fw-bold text-center"> ${firstName} ${lastName}`
        userNameDiv.innerHTML = `<h1>${firstName} ${lastName}</h1>`
    }
}
