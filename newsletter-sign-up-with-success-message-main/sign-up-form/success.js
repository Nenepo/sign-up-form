// Get the email from the URL query parameters (if provided)
const urlParams = new URLSearchParams(window.location.search);
const emailFromQuery = urlParams.get('email');

// Update the email in the HTML span element
const emailSpan = document.getElementById('personalEmail');
emailSpan.textContent = emailFromQuery;
// Get the email from the browser's local storage (if provided)
const emailFromLocalStorage = localStorage.getItem('userEmail');

// Determine which email to display (priority: query parameter > local storage)
const emailToDisplay = emailFromQuery || emailFromLocalStorage;

// Update the email in the HTML span element
const emailSpan = document.getElementById('personalEmail');
emailSpan.textContent = emailToDisplay;

 // Get the "Dismiss message" button
 const dismissButton = document.querySelector('.btn2');

 // Add a click event listener to the "Dismiss message" button
 dismissButton.addEventListener('click', function() {
   // Hide the success message container when the button is clicked
   const successMessageContainer = document.querySelector('.message');
   successMessageContainer.style.display = 'none';
 });