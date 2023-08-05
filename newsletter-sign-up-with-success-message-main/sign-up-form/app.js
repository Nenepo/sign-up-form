//change the page using javascript

// Get the button element by its ID
  const button = document.getElementById('myButton');

  // Add a click event listener to the button
  button.addEventListener('click', function() {
      // Replace 'desired-page.html' with the URL of the page you want to link to
      const getEmail = document.getElementById('Email');
      const validationMessage = ('Valid email required');
      if(getEmail.checkValidity()){
        window.location.href = 'success.html';
     }
     else{
      document.innerHTML.getElementById('validationMsg') = validationMessage;
     }
      // window.location.href = 'success.html';
  });
