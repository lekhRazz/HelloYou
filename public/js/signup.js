var password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword'),
    btnSubmit = document.getElementById('submitBtn'),
    labelErrorMessage = document.getElementById('labelErrorMessage');

confirmPassword.addEventListener('keyup', () => {
    if (password.value != confirmPassword.value) {
        labelErrorMessage.innerHTML = 'Password doesnot match';
        
    } else {
        labelErrorMessage.innerHTML = ' ';
        btnSubmit.removeAttribute("disabled");
    }
});