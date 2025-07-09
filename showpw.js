function showpw() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function conpass() {
    const conpassbtn = document.getElementById('conpass');
    if (conpassbtn.type == 'password') {
        conpassbtn.type = 'text';
    } else {
        conpassbtn.type = 'password';
    }
}