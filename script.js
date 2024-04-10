document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        var name = formData.get('name');
        var email = formData.get('email');
        var message = formData.get('message');

        if (name && email && message) {
            responseMessage.innerHTML = '<p>Sending message...</p>';
            // Here you can send the form data to your backend for processing
            setTimeout(function() {
                responseMessage.innerHTML = '<p>Message sent successfully!</p>';
                form.reset();
            }, 2000);
        } else {
            responseMessage.innerHTML = '<p>Please fill out all fields.</p>';
        }
    });
});
