function validate() {
    let button = document.getElementById('submit');
    button.type = 'button'
    button.addEventListener('click', onClick);

    let companyCheck = document.getElementById('company');
    companyCheck.addEventListener('change', () => {
        let companyDisplay = document.getElementById('companyInfo');
        if (companyCheck.checked == true) {
            companyDisplay.style.display = "block"
        } else {
            companyDisplay.style.display = "none"
        }
    });

    function onClick() {
        let valid = true;

        let username = document.querySelector('#username')
        let email = document.querySelector('#email')
        let password = document.querySelector('#password')
        let confirmPassword = document.querySelector('#confirm-password')
        let checkBox = document.getElementById("company")

        let usernameValidator = /^[A-Za-z0_9]*$/g;
        let emailValidator = /^[^@.]+@[^@]*\.[^@]*$/g;
        let passwordValidator = /^[\w]{5,15}$/g;

        if (username.value.length < 3 || username.value.length > 20 || !usernameValidator.test(username.value)) {
            username.style.borderColor = "red";
            valid = false;
        } else {
            username.style.borderColor = '';
        }

        if (!emailValidator.test(email.value)) {
            email.style.borderColor = "red";
            valid = false;
        } else {
            email.style.borderColor = '';
        }

        if (passwordValidator.test(password.value) == null) {
            password.style.borderColor = "red";
            valid = false;
        } else {
            password.style.borderColor = '';
        }

        if (passwordValidator.test(confirmPassword.value) == null) {
            confirmPassword.style.borderColor = "red";
            valid = false;
        } else {
            confirmPassword.style.borderColor = '';
        }

        if (password.value !== confirmPassword.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            valid = false;
        } else {
            confirmPassword.style.borderColor = '';
            password.style.borderColor = '';
        }

        if (checkBox.checked) {
            let companyNumber = document.getElementById("companyNumber");
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
                valid = false;
            } else {
                companyNumber.style.borderColor = '';
            }
        }

        let validStyle = document.getElementById("valid");
        validStyle.style.display = valid ? "block" : "none";

    }
}