document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form inputs
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform basic validation (you can add more complex validation here)
  if (fullname === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
  } else {
    // You can add AJAX or other logic here to submit the form data to a server for signup.
    // For this example, we'll just display an alert.
    alert("Sign up successful!"); // Replace with your actual signup logic
  }
});
