let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let savePassword = document.getElementById('savePassword')

// arrow function 
const generatePW = (len) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeric = '0123456789';
    const symbol = '!@#$%^&*()_+[]{}|;:,.<>?';

    const data = lowercase + uppercase + numeric + symbol;
    let generator = '';

    for (let i = 0; i < len; i++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }
    return generator;
}

// arrow function
const getPassword = () => {
    const panjang = parseInt(passwordLength.value);
    console.log(panjang)

    if (isNaN(panjang)) {
        alert('masukkan angka yang valid');
        return;
    } else if (panjang < 8) {
        alert('panjang inputan minimum 8');
        return;
    } else if (panjang > 20) {
        alert('panjang inputan maksimal 20');
        return;
    }

    const newPassword = generatePW(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
        alert('password has been genereted');
    }, 1000);
}

// arrow funsction
const savePW = () => {
    const passwordValue = password.value;

    if (!passwordValue) {
        alert('generate password terlebih dahulu sebelum menyimpan password');
    }

    // document.title = password.value;
    // savePassword.setAttribute('href', 'data:text/plain;charset=utf,' + 
    //     encodeURIComponent(`password saya: ${document.title}`))
    // savePassword.setAttribute('download', 'myPasswordGeneratedLOG.txt')

    const newWindow = window.open('', '_blank');

    newWindow.document.writeln(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>password saved</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color:rgb(122, 120, 120);
                }
                .card {
                    padding: 40px;
                    border-radius: 10px;
                    background-color: white;
                    box-shadow: 0 0 10px rgba(0,0,0,0.2);
                    display: flex;
                    justify-content: center;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>Password Kamu:</h2>
                <p style="font-size: 1.5rem; font-weight: bold;">${passwordValue}</p>
            </div>
        </body>
        </html> `)

    setTimeout(() => {
        alert('berhasil disimpan')
    }, 1000);
}


// arrow function
const showpw = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}