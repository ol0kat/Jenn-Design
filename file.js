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

  // Create an object with the form data
  var formData = {
    email: emailField.value,
    message: messageField.value
  };

  // Send the message using Formspree
  $.ajax({
    type: "POST",
    url: "https://formspree.io/p__tison@outlook.com",
    data: formData,
    dataType: "json",
    success: function(response) {
      // Display a success message
      var successMessage = document.querySelector(".contact_success");
      successMessage.style.display = "block";
      form.reset(); // Reset the form fields
    },
    error: function(error) {
      // Display an error message
      console.error("Error sending message:", error);
    }
  });
}
