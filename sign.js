document.getElementById('signupform').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && email && password) {
        
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        console.log('Sign Up form submitted:', username, email, password);
        window.location.href = 'login.html';
    } else {
        alert('Please fill out all fields.');
    }
});
