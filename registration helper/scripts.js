document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;


    // Display a simple result message
    const result = `Thank you, ${name}. Your registration is complete.`;
    document.getElementById('result').textContent = result;

    // Reset the form
    document.getElementById('registrationForm').reset();
});
