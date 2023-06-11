// Get the form element
var contactForm = document.getElementById("contact-form");

// Add a submit event listener to the form
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the email and message fields
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("message");

  // Create a FormData object with the form data
  var formData = new FormData();
  formData.append("email", emailField.value);
  formData.append("message", messageField.value);

  // Send the form data to Formspree using fetch
  fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
  .then(function(response) {
    if (response.ok) {
      // Display a success message
      var successMessage = document.querySelector(".contact_success");
      successMessage.style.display = "block";
      contactForm.reset(); // Reset the form fields
    } else {
      // Display an error message
      console.error("Error sending message:", response.statusText);
    }
  })
  .catch(function(error) {
    console.error("Error sending message:", error);
  });
});
