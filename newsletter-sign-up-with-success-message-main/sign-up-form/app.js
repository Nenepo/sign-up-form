// document.querySelector('form-mail').addEventListener('submit', function(event) {
//   // event.preventDefault();
//   const emailInput = document.getElementById('email');
//   const email = emailInput.value.trim();
//   const emailValidationMessage = document.getElementById('validationMsg');
//   const emailSpan = document.getElementById('personalEmail');
//   if (email === '') {
//       emailValidationMessage.textContent = 'Please enter your email';
//       emailInput.classList.add('invalid');
//       return;
//   }

//   if (!isValidEmail(email)) {
//       emailValidationMessage.textContent = 'Valid email required';
//       emailInput.classList.add('invalid');
//       return;
//   }

//   else{emailInput.classList.remove('invalid');}
//   // Set the email address as the content of the span element
//   emailSpan.textContent = email;

//   // Form submission successful, redirect to success message page
  
//   // window.location.href = `success.html?email=${encodeURIComponent(email)}`;
// });

function isValidEmail(email) {
  // Use a regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get the button element by its ID (outside the previous function)
const button = document.getElementById('myButton');
// Add a click event listener to the button
button.addEventListener('click', function() {
  const getEmail = document.getElementById('email');
  const validationMessageElement = document.getElementById('validationMsg');
  validationMessageElement.textContent = 'Valid email required';
  validationMessageElement.style.color = '  hsl(0, 87%, 64%)';
  validationMessageElement.style.fontFamily=  'Roboto-bold' ;
  validationMessageElement.style.fontWeight = 400;
  validationMessageElement.style.fontSize= '0.7rem';
  if (getEmail.checkValidity()) {
      window.location.href = 'success.html';
  } else {
    validationMessageElement.textContent = 'Valid email required';
  }
});
const getEmail = document.getElementById('email');
// Add a keydown event listener to the email input
getEmail.addEventListener('keydown', function(event) {
  // Check if the key pressed is the Enter key (keyCode 13)
  if (event.keyCode === 13) {
    // event.preventDefault(); // Prevent the default form submission on pressing Enter
    button.click(); // Trigger the click event of the submit button
  }
});
