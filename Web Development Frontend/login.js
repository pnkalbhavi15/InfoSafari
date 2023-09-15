document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form inputs
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform basic validation (you can add more complex validation here)
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
  } else {
    // You can add AJAX or other logic here to submit the form data to a server for authentication.
    // For this example, we'll just display an alert.
    alert("Login successful!"); // Replace with your actual login logic
  }
});
