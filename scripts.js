// scripts.js
console.log('JavaScript is working!');


/* 

PLAN:
- Create form with email, country, zip code, password, and password confirmation
- Create styles invalid styles
- Work on validation criteria:
    - Email
        - Must not be empty
    - Country
        - Must not be empty
    - Zip
        - Must not be empty
    - Password
        - Must not be empty
        - Must be between 12 - 16 chars long
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
- Will limit countries to USA, FRA, and GER.
*/
