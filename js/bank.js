document.getElementById('login-submit').addEventListener('click', () => {
    const emailField = document.getElementById('user_email');
    const userEmail = emailField.value;


    const passwordField = document.getElementById('user_password');
    const userPassword = passwordField.value;


    if (userEmail == 'sontan@baap.com' && userPassword == 'sanju') {
        window.location.href = 'banking.html';
    } else {
        console.log('ther user show the valid user and password');
    }
})