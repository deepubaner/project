const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

// SIGNUP FUNCTION
document.querySelector('.sign-up-container form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('.sign-up-container input[placeholder="Name"]').value;
    const email = document.querySelector('.sign-up-container input[placeholder="Email"]').value;
    const password = document.querySelector('.sign-up-container input[placeholder="Password"]').value;

    if (email && password) {
        localStorage.setItem(email, JSON.stringify({ name, password }));
        alert("Account created! Now please sign in.");
        container.classList.remove('right-panel-active'); // Switch to sign-in
    } else {
        alert("Please fill all fields");
    }
});

// LOGIN FUNCTION
document.querySelector('.sign-in-container form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('.sign-in-container input[placeholder="Email"]').value;
    const password = document.querySelector('.sign-in-container input[placeholder="Password"]').value;

    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
        alert("Login successful!");
        // Redirect to your dashboard or page
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password");
    }
});