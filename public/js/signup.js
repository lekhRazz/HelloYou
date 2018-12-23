var password=document.getElementById('password'),
    confirmPassword=document.getElementById('confirmPassword'),
    btnSubmit=document.getElementById('submitBtn'),
    labelErrorMessage=document.getElementById('labelErrorMessage');

confirmPassword.addEventListener('keypress',()=>{
    if(password.value===confirmPassword.value){
        labelErrorMessage.innerHTML=' ';
        btnSubmit.removeAttribute("disabled");
    }else{
        labelErrorMessage.innerHTML='Password doesnot match';
    }
});