// Select the form and individual fields from the DOM
const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Function to validate email
function checkEmail() {
  // Regular expression pattern for validating email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  // Check if email matches the pattern
  if (!emailInput.value.match(emailPattern)) {
    // Add 'invalid' class if email doesn't match pattern
    return emailField.classList.add("invalid");
  }
  // Remove 'invalid' class if email matches pattern
  emailField.classList.remove("invalid");
}

// Hide and Show Password functionality
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    // Select the input field within the same parent element
    const pInput = eyeIcon.parentElement.querySelector("input");
    // Toggle between password and text type
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      pInput.type = "text";
    } else {
      eyeIcon.classList.replace("bx-show", "bx-hide");
      pInput.type = "password";
    }
  });
});

// Function to validate password
function createPass() {
  // Regular expression pattern for password validation
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,}$/;
  // Check if password matches the pattern
  if (!passInput.value.match(passPattern)) {
    // Add 'invalid' class if password doesn't match pattern
    return passField.classList.add("invalid");
  }
  // Remove 'invalid' class if password matches pattern
  passField.classList.remove("invalid");
}

// Function to validate password confirmation
function confirmPass() {
  // Check if confirmed password matches the original or is empty
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    // Add 'invalid' class if passwords don't match or confirmed password is empty
    return cPassField.classList.add("invalid");
  }
  // Remove 'invalid' class if passwords match
  cPassField.classList.remove("invalid");
}

// Function to show success message
function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  const container = document.querySelector(".container");

  // Show success message and hide the form
  successMessage.style.display = "block";
  container.classList.add("hidden");

  // Hide the success message and show the form again after 3 seconds
  setTimeout(function () {
    successMessage.style.display = "none";
    container.classList.remove("hidden");
  }, 3000);
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  // Perform validation checks
  checkEmail();
  createPass();
  confirmPass();

  // If all fields are valid, show success message and reset the form
  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    showSuccessMessage();
    form.reset();
  }
});

// Real-time validation feedback for input fields
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);
