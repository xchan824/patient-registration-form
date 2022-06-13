let username = document.querySelector('#username');
let password = document.querySelector('#password');
let usernameError = document.querySelector('#username-error');
let passwordError = document.querySelector('#password-error');

let form = document.querySelector('#signin');

form.addEventListener('submit', function(e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    checkUsername();
    checkPassword();
    login();
});

const checkUsername = () => {
    if (username.value == '') {
        usernameError.textContent = 'Username cannot be blank';
        username.classList.add('invalid-input');
    } else if (!(username.value == 'admin')) {
        usernameError.textContent = 'Username not registered in database';
        username.classList.remove('invalid-input');
    } else {
        usernameError.textContent = '';
        username.classList.remove('invalid-input');
    }
}

const checkPassword = () => {
    if ((username.value == '') && (password.value == '')) {
        usernameError.textContent = 'Username cannot be blank';
        username.classList.add('invalid-input');
        passwordError.textContent = 'Password cannot be blank';
        password.classList.add('invalid-input');
    } else if (password.value == '') {
        usernameError.textContent = '';
        username.classList.remove('invalid-input');
        passwordError.textContent = 'Password cannot be blank';
        password.classList.add('invalid-input');
    } else if ((username.value == '') && !(password.value == 'password')) {
        usernameError.textContent = 'Username cannot be blank';
        username.classList.add('invalid-input');
        passwordError.textContent = '';
        password.classList.remove('invalid-input');
    } else if (!(username.value == 'admin') && !(password.value == 'password')) {
        usernameError.textContent = 'Username not registered in database';
        username.classList.add('invalid-input');
        passwordError.textContent = '';
        password.classList.remove('invalid-input');
    } else if ((username.value == 'admin') && !(password.value == 'password')) {
        usernameError.textContent = '';
        username.classList.remove('invalid-input');
        passwordError.textContent = 'Incorrect password';
        password.classList.add('invalid-input');
    } else {
        passwordError.textContent = '';
        password.classList.remove('invalid-input');
    }
}

const login = () => {
    if ((username.value == 'admin') && (password.value == 'password')) {
        alert('Login successful');
        window.location.href="/form/form.html";
    }
}
