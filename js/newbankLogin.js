document.getElementById('login-submit').addEventListener('click', () => {

    console.log('hello submit');

    const userEmail = document.getElementById('user_email');

    const userEmailValur = userEmail.value;
    // console.log(userEmailValur);
    // userEmail.value = '';

    const userPassword = document.getElementById('user_password');

    const userPasswordValue = userPassword.value;
    // userPassword.value = '';

    if (userEmailValur == 'sanjuhassan560@gmail.com' && userPassword == 'sanju') {
        window.location.href = 'banking.html';
    } else {
        console.log('ther user show the valid user and password');
    }


})