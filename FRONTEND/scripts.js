// Open the callback popup when the website is loaded
window.onload = function () {
    document.getElementById('callbackPopup').style.display = 'block';
  };
  
  // Close the callback popup
  function closePopup() {
    document.getElementById('callbackPopup').style.display = 'none';
  }
  
  // Submit form function (you can customize this based on your needs)
  function submitForm() {
    // Add your form submission logic here
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form submission
    document.getElementById('reservationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Custom submission logic
        submitForm();
    });

    // Function to submit the form
    function submitForm() {
        // You can perform any custom logic here, like making an AJAX request to submit the form data
        
        // Redirect to the confirmation page
        window.location.href = 'confirmation.html?success=true';
    }

    // Add event listener to the home button
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', function() {
        returnHome();
    });

    // Function to return home
    function returnHome() {
        window.location.href = 'kr.html'; // Change kr.html to your home page
    }
});
function returnHome() {
  window.location.href = "index.html"; // Replace "index.html" with the URL of your home page
}
document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Show confirmation message
  document.getElementById("confirmationMessage").style.display = "block";
})

