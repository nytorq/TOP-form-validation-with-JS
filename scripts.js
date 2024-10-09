// scripts.js
const body = document.querySelector('body');
const form = document.createElement('form');
form.noValidate = true;
const formHeader = document.createElement('h1');
formHeader.innerText = 'Form Header'
const emailLabel = document.createElement('label');
emailLabel.innerText = 'Email:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.autocomplete = 'username';
// emailInput.required = true;
const countryLabel = document.createElement('label');
countryLabel.innerText = 'Country:';
const countryInput = document.createElement('select');
// countryInput.required = true;
const USAOption = document.createElement('option');
USAOption.innerText = "USA";
const FRAAOption = document.createElement('option');
FRAAOption.innerText = "FRA";
const GEROption = document.createElement('option');
GEROption.innerText = "GER";
countryInput.append(USAOption, FRAAOption, GEROption);
const zipLabel = document.createElement('label');
zipLabel.innerText = 'Zip Code:';
const zipInput = document.createElement('input');
zipInput.type = 'text';
zipInput.id = 'zipInput'
// zipInput.required = true;
const pwLabel = document.createElement('label');
pwLabel.innerText = 'Password:';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.autocomplete = 'new-password';
passwordInput.minLength = 12;
passwordInput.id = "passwordInput";
const pwRequirements = document.createElement('span');
pwRequirements.classList.add('passwordRequirements');
const pwReq1 = document.createElement('div');
pwReq1.innerText = '- Must contain a lowercase letter.';
const pwReq2 = document.createElement('div');
pwReq2.innerText = '- Must contain an uppercase letter.';
const pwReq3 = document.createElement('div');
pwReq3.innerText = '- Must contain a number.';
const pwReq4 = document.createElement('div');
pwReq4.innerText = '- Must contain a special character, (e.g., !@#$%^&*)';
const pwReq5 = document.createElement('div');
pwReq5.innerText = '- Must be at least 12 characters';
pwRequirements.append(pwReq1, pwReq2, pwReq3, pwReq4, pwReq5)
// passwordInput.required = true;
const pwConfLabel = document.createElement('label');
pwConfLabel.innerText = 'Confirm Password:';
const passwordConfInput = document.createElement('input');
passwordConfInput.type = 'password';
passwordConfInput.autocomplete = 'new-password';
passwordConfInput.id = "passwordConfInput";
const pwConfRequirements = document.createElement('span');
pwConfRequirements.classList.add('passwordConfRequirements');
const pwConfReq1 = document.createElement('div');
pwConfReq1.innerText = '- Must match above password';
pwConfRequirements.append(pwConfReq1)
// passwordConfInput.required = true;
const submitButton = document.createElement('button');
submitButton.innerText = "Submit";
form.append(formHeader, emailLabel, emailInput, countryLabel, countryInput, zipLabel, zipInput, pwLabel,
    passwordInput, pwRequirements, pwConfLabel, passwordConfInput, pwConfRequirements, submitButton)
body.appendChild(form);

function zipValidator() {
    let countryValue = countryInput.value;
    let zipValue = zipInput.value;
    
    function validateZipCode(zip, country) {
        const zipCodeRegex = {
            'USA': /^\d{5}(?:-\d{4})?$/,
            'GER': /^\d{5}$/,
            'FRA': /^\d{5}$/
        }

        if (zipCodeRegex[country].test(zip)) {
            zipInput.setCustomValidity("")
        } else if (!zipCodeRegex[country].test(zip)) {
            zipInput.setCustomValidity("This zip doesn't look right.")
        }
        zipInput.reportValidity();
    }

    validateZipCode(zipValue, countryValue)
}

addGlobalEventListener('change', '#zipInput', zipValidator);

function passwordValidator() {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    passwordValue = passwordInput.value;

    function validatePassword(password) {
        if (passwordPattern.test(password)) {
            passwordInput.setCustomValidity("")
        } else if (!passwordPattern.test(password)) {
            passwordInput.setCustomValidity("Not right")
        }
        passwordInput.reportValidity();
    }

    validatePassword(passwordValue);
}

addGlobalEventListener('change', '#passwordInput', passwordValidator);

function passwordConfValidator() {
    let passwordValue = passwordInput.value;
    let passwordConfValue = passwordConfInput.value;
    // console.log(passwordValue)
    // console.log(passwordConfValue)
    // console.log(passwordValue === passwordConfValue)
    if (passwordValue === passwordConfValue) {
        passwordConfInput.setCustomValidity("")
        console.log('looks good');
    } else if (passwordValue !== passwordConfValue) {
        passwordConfInput.setCustomValidity("Looks like your password doesn't match")
        console.log('looks bad');
    }
    passwordConfInput.reportValidity();

    // function validatePasswordConf() {
        
    // }

    // validatePasswordConf();
}

addGlobalEventListener('change', '#passwordConfInput', passwordConfValidator);

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    })
}

/* 

PLAN:
- Create form with email, country, zip code, password, and password confirmation
- Create styles invalid styles
- Work on validation criteria:
    - Email
        - Must not be empty
    - Country
        - Must not be empty
        - Must be USA, FRA or GER
    - Zip
        - Must not be empty
        - Depends on country chosen
    - Password
        - Must not be empty
        - Min length > 12
        - Must contain:
            - Uppercase letters (A-Z)
            - Lowercase letters (a-z)
            - Numbers (0-9)
            - Special characters (e.g., !@#$%^&*)
    - Password confirm
        - Must not be empty
        - Must match password
Form-wide requirements
    - All inputs must have valid contents

REQUIREMENTS:
- All validation should be done in JS files.
- Upon submission and valid form entries, give user success message.
- Validation should be done upon blur of any input
- Styling should be done via :valid and :invalid

NOTES
Use built-in form validation for:
    - All inputs to be required
    - min length on email > 4 characters (i.e. "@" and roughly ".tld")
    - min and max length on country to ensure 3 characters, i.e. USA or FRA.
    - type should be correctly assigned
Where to use pattern attribute?
    - Email
    - Country
    - Zip - this'll be hard to create from scratch
    - Password- def
- Use validationMessage for password requirements
- Use the validity object to get details on what's wrong exactly.
- Custom messages are done through setCustomValidity()
- Might need novalidate to turn off browser validation and to force the form to rely upon my own validation
- Will limit countries to USA, FRA, and GER, per this example: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api
*/
