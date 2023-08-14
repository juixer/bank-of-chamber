document.getElementById('btn_login').addEventListener('click', function(){
    const emailField = document.getElementById('user_email');
    const passwordField = document.getElementById('user_password');
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    if(emailValue === 'chamber@valorant.com' && passwordValue === 'chamber7@'){
        window.location.href = 'bank.html';
    }else{
        alert("Wrong Email or Password!!")
    }
})

document.getElementById('user_password').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        const emailField = document.getElementById('user_email');
    const passwordField = document.getElementById('user_password');
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    if(emailValue === 'chamber@valorant.com' && passwordValue === 'chamber7@'){
        window.location.href = 'bank.html';
    }else{
        alert("Wrong Email or Password!!")
    }
    }
} )