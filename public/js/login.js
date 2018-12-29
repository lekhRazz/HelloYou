

var userName = document.getElementById('userName'),
    password = document.getElementById('password'),
    username_error=document.getElementById('username-error'),
    password_error=document.getElementById('password-error');


userName.addEventListener('click',function(){
    username_error.style.display="none";
});

password.addEventListener('click',function(){
    password_error.style.display="none";
});


// window.addEventListener('load', function(){
//     username_error.style.display="none";
//     password_error.style.display="none";
// });

