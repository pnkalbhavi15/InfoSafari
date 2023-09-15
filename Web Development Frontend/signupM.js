document.getElementById("mentor-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form inputs
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var resumeFile = document.getElementById("resume").files[0];
  var certificatesFile = document.getElementById("certificates").files[0];

  // Perform basic validation (you can add more complex validation here)
  if (fullname === "" || email === "" || !resumeFile || !certificatesFile) {
    alert("Please fill in all fields and upload the required documents.");
  } else {
    // You can add AJAX or other logic here to submit the form data and files to a server for processing.
    // For this example, we'll just display an alert.
    alert("Application submitted successfully!"); // Replace with your actual submission logic
  }
});
