window.onload = function () {
  // Simulated mentor data (you should replace this with actual mentor data)
  var mentorData = {
    fullName: "John Doe",
    email: "john@example.com",
    bio: "Experienced software engineer with expertise in web development.",
    specialties: ["JavaScript", "React", "Node.js", "SQL"],
    education: "Bachelor's in Computer Science",
    experience: "10+ years in software development",
    linkedInProfile: "https://www.linkedin.com/in/johndoe",
    githubProfile: "https://github.com/prayashi447",
  };

  // Get the container for displaying mentor details
  var mentorDetailsContainer = document.getElementById("mentor-details");

  // Create and populate the mentor details HTML
  var mentorDetailsHTML = `
        <h3>${mentorData.fullName}</h3>
        <p><strong>Email:</strong> ${mentorData.email}</p>
        <p><strong>Education:</strong> ${mentorData.education}</p>
        <p><strong>Experience:</strong> ${mentorData.experience}</p>
        <p><strong>Bio:</strong> ${mentorData.bio}</p>
        <p><strong>Specialties:</strong></p>
        <ul>
    `;

  mentorData.specialties.forEach(function (specialty) {
    mentorDetailsHTML += `<li>${specialty}</li>`;
  });

  mentorDetailsHTML += `</ul>`;

  // Add LinkedIn and GitHub profiles with links
  mentorDetailsHTML += `
        <p><strong>LinkedIn:</strong> <a href="${mentorData.linkedInProfile}" target="_blank">${mentorData.linkedInProfile}</a></p>
        <p><strong>GitHub:</strong> <a href="${mentorData.githubProfile}" target="_blank" class="github-link">${mentorData.githubProfile}</a></p>
    `;

  // Set the HTML of the mentor details container
  mentorDetailsContainer.innerHTML = mentorDetailsHTML;
};
