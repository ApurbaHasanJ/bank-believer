// Login page
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail === 'apurbahasanj@gmail.com' && userPassword === 'secret' ){
        window.location.href = 'account.html';
    }
    else{
        alert('Your Email and Password do not match. Please try again.')
    }
    console.log(userEmail,userPassword);
});


