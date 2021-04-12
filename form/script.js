// Simple way : bunch of if statements and completely refactor the code so that we could do it in a better way of doing it rather than bunch of if statements.

//  Step 1: Pull in all the DOM elements we basically need.

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Step 4: Type the below code and check whether we are able to render the error message appropriately 

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// Step 5: showSuccess function

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Step 7: Email validation function: Grab the reg exp from internet

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Step 2: Add a event listener to the form: Add EventListener takes in 2 params: the event we are looking for and then the function we need to run for that event

form.addEventListener('submit', function(e){
// Inspect the same and try submitting the form

// Step 3: Prevent Form Submission
    e.preventDefault();
    // console.log('submit');

    // console.log(username.value);

    // if(username.value === ''){
    //     alert('Username is required');
    // }

    if(username.value === ''){
        showError(username, 'Username is required');
    }else {
        showSuccess(username);
    }
    
    // Step 6: Copy paste the above code for other fields.
    // Step 8: Adding the email else if 
    if(email.value === ''){
        showError(email, 'Email is required');
    }else if(!isValidEmail(email.value)){
        // change the error message to Email is not valid!
        showError(email, 'Email is not valid!');
    }else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    }else {
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Confirm Password is required');
    }else {
        showSuccess(password2);
    }


});


