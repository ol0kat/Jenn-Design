  // Get the form element
  var form = document.getElementById("contact-form");

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate the form
    if (validateForm()) {
      // If the form is valid, send the message
      sendMessage();
    } else {
      // If the form is not valid, display an error message
      displayErrorMessage();
    }
  });

  // Function to validate the form
  function validateForm() {
    // Get the email and message fields
    var emailField = document.getElementById("email");
    var messageField = document.getElementById("message");

    // Check if the email and message fields are empty
    if (emailField.value === "" || messageField.value === "") {
      return false; // Form is not valid
    }

    return true; // Form is valid
  }

  // Function to send the message
  function sendMessage() {
    // Get the email and message fields
    var emailField = document.getElementById("email");
    var messageField = document.getElementById("message");

    // Send the message using your preferred method (e.g., AJAX request)
    // Replace this with your actual implementation

    // Display a success message
    var successMessage = document.querySelector(".contact_success");
    successMessage.style.display = "block";
    form.reset(); // Reset the form fields
  }

  // Function to display an error message
  function displayErrorMessage() {
    var errorMessage = document.querySelector(".empty_notice");
    errorMessage.style.display = "block";
  }
