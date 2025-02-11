document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Display confirmation message
        let confirmationMsg = document.getElementById("confirmationMessage");
        confirmationMsg.style.display = "block";

        // Hide the message after 3 seconds
        setTimeout(function() {
            confirmationMsg.style.display = "none";
        }, 3000);

        // Clear the form fields
        this.reset();
    });
});
