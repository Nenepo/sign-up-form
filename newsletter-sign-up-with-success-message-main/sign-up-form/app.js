
// script.js
// Function to validate the email format using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get the button element by its ID
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Get the email input element
  const getEmail = document.getElementById('email');
  
  // Get the element to display the validation message
  const validationMessageElement = document.getElementById('validationMsg');

  // Set validation message styles
  validationMessageElement.style.color = 'hsl(0, 87%, 64%)';
  validationMessageElement.style.fontFamily = 'Roboto-bold';
  validationMessageElement.style.fontWeight = 400;
  validationMessageElement.style.fontSize = '0.7rem';

  // Check if the email is valid using the isValidEmail function
  if (getEmail.checkValidity()) {
    window.location.href = 'success.html';
   validationMessageElement.style.display = 'none';
  }
 if (getEmail.value === '') {
    validationMessageElement.textContent = 'Please fill in the email field';
  } else {
    validationMessageElement.textContent = 'Valid email required';
  }
});

// Add a keydown event listener to the email input
const getEmail = document.getElementById('email');
getEmail.addEventListener('keydown', function(event) {
  // Check if the key pressed is the Enter key (keyCode 13)
  if (event.keyCode === 13) {
    // event.preventDefault(); // Prevent the default form submission on pressing Enter
    button.click(); // Trigger the click event of the submit button
  }
});
