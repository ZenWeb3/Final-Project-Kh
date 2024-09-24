// Function to show the spinner
function showSpinner() {
    document.querySelector('.spinner-container').style.display = 'flex'; // Show the spinner
}

// Function to hide the spinner
function hideSpinner() {
    document.querySelector('.spinner-container').style.display = 'none'; // Hide the spinner
}

// Function to start the process and show the spinner
function startProcess(url) {
    showSpinner();
    setTimeout(() => {
        window.location.href = url; // Navigate to the new page after the spinner shows
    }, 1000);
}
