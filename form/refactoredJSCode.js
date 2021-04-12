
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Step 9: checkEmail
function checkEmail(input){
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, `Email is not valid!`);
    }
}

// Step 8: password match
function checkPasswordsMatch(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input);
    }else{
        showError(input2, 'Passwords do not match!');
    }
}

// Step 2:
// creating a new function which accepts the array of inputs
function checkRequired(inputArr){
    // forEach loops through the entire array..
    inputArr.forEach( function(input){
        //Step 3: check the output
        console.log(input.value);
        if(input.value.trim() === ''){
          // Step 4 & Step 5 getFieldName():
            showError(input, `${getFieldName(input)} is required!`);
            // To get field name with first letter capital we get the name from id name
            // Step 6: check the result
        }else{
            showSuccess(input);
        }
    });
}
// Step 6: getFieldName() 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Step 7 : here

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} chars.`);
    }else {
        showSuccess(input);
    }
}


// Step 1: checkrequired method passing all input elements as array
form.addEventListener('submit', function(e){


    e.preventDefault();
    
    // I am going to remove allthese bunch of if statements..
    // Creating a new function called checkRequired(input) for each of the inputs lets have an array of inputs passed to the function

    checkRequired([username, email, password, password2]);

    // Step 7 above: 
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    // checkEmail
    checkEmail(email);

    // Step 8 above
    checkPasswordsMatch(password, password2);
});


