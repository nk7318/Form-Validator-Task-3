// script.js

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerText = '';

    if (username.length < 3) {
        errorMessage.innerText = 'Username must be at least 3 characters long.';
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.innerText = 'Please enter a valid email address.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.innerText = 'Password must be at least 6 characters long.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match.';
        return false;
    }

    alert('Signup successful!');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
