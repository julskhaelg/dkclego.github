document.getElementById('loginform').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username && password) {
        if (username === storedUsername && password === storedPassword) {
            alert('Log in successful!');
            localStorage.setItem('isLoggedIn', 'true'); // set flag
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});
