// auth.js

const API_BASE_URL = '/api/users'; // Base URL for user-related API

// Function to handle signup
async function handleSignup(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch(`${API_BASE_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Signup successful! Please log in.');
            window.location.href = '/login'; // Redirect to login page
        } else {
            alert(data.message || 'Signup failed!');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Function to handle login
async function handleLogin(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            localStorage.setItem('token', data.token); // Save the JWT token for future requests
            window.location.href = '/'; // Redirect to the homepage
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Attach event listeners to the forms
document.getElementById('signup-form')?.addEventListener('submit', handleSignup);
document.getElementById('login-form')?.addEventListener('submit', handleLogin);
