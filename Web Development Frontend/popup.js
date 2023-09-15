function showCustomAlert(type) {
  const modalId = type === "yes" ? "custom-alert-yes" : "custom-alert-no";
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(closeCustomAlert, 3000);
}

function closeCustomAlert(type) {
  const modalId = type === "yes" ? "custom-alert-yes" : "custom-alert-no";
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  clearTimeout();
}
