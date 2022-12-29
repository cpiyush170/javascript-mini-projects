
// grabbing elements from DOM tree
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2')


form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent the form from submitting to server on clicking submit
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    var format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (usernameValue === '') {
        // show error and add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else if (!isValidUsername(usernameValue)) {
        if (usernameValue.length < 6) {
            setErrorFor(username, 'Username should be at least 6 characters');
        }
        else if (usernameValue == parseInt(usernameValue)) {
            setErrorFor(username, 'Username cannot contain numbers only')
        }
        else if (format.test(usernameValue)) {
            setErrorFor(username, 'Special characters are not allowed');
        }
        else {
            // add success class
            setSuccessFor(username);
        }
    }
    else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        // show error and add error class
        setErrorFor(email, 'Email cannot be blank');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }
    else {
        // add success class
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password should be minimum of 8 characters');
    }
    else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    }
    else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password does not match');
    }
    else if (password2Value.length < 8) {
        setErrorFor(password2, 'Password should be minimum of 8 characters');
    }
    else {
        setSuccessFor(password2);
    }

    // showing success message
    if (document.querySelectorAll('.form-control')[0].classList.contains('success') && document.querySelectorAll('.form-control')[1].classList.contains('success') && document.querySelectorAll('.form-control')[2].classList.contains('success') && document.querySelectorAll('.form-control')[3].classList.contains('success')) {
        form.submit();
        alert('Form submitted successfully');
    }



}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message;
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidUsername(username) {
    //Minimum 6 characters
    // Only numbers are not allowed at least one character should be there
    // No special characters allowed except _
    // No space allowed
    // Character only is allowed
    const usernameRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    return usernameRegex.test(username);
}


