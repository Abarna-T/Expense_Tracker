var form=document.getElementById("form");
var firstName=document.getElementById("first_name");
var secondName=document.getElementById("second_name");
var email=document.getElementById("email");
var password=document.getElementById("password");
var password2=document.getElementById("confirm_password");
console.log(form);
function submit()
{
    console.log(password.value);
    if(password.value!==password2.value)
    {
        document.getElementById("correct_password").innerHTML="password does not match !"
    }

}