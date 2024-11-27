document.getElementById("button").addEventListener('click', () => {
    const name = document.getElementById("name").value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();

    // Check if all fields are filled
    if (!name || !email || !phone) {
        alert("All fields are required. Please fill out every field.");
        return;
    }

    // Name validation
    if (name.length > 25) {
        alert("Name cannot be more than 25 characters");
        return;
    }
    if (!email.includes('@')) {
        alert("Enter valid email id");
        return;
    }

    // Phone number validation without regex
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone number. It must contain exactly 10 digits.");
        return;
    }

    alert("You have successfully registered");
});