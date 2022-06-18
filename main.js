let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon")
let form = document.getElementById("form");


// Event Listerner.
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    engine();
});

// Engine that call all the validation function.
let engine = function(){
    nameValidator(username.value);
    emailValidator(email.value);
    passValidator(password.value);

}


// User name validation functions.
let nameValidator = function(userName){

    if(trimVal(userName) === ""){
        errorMsg[0].innerHTML = "User name cannot be empty.";
        setErrorOpacity(0);
    }
    else{
        
        if(userNameCheck(userName)){
            if(lengthCheck(userName)){
                errorMsg[0].innerHTML = "";
                setSuccessOpacity(0);
            }
            else{
                errorMsg[0].innerHTML = "User Name is too short.";
                setErrorOpacity(0);
            }
            
        }
        else{
            errorMsg[0].innerHTML = "Unvalid user name.";
            setErrorOpacity(0);
        }
        
    }

}


let setErrorOpacity = function(indexVal){
    successIcon[indexVal].style.opacity = "0";
    failureIcon[indexVal].style.opacity = "1";
}

let setSuccessOpacity = function(indexVal){
    successIcon[indexVal].style.opacity = "1";
    failureIcon[indexVal].style.opacity = "0";
}

// Reguler Expresion of User Name Checker
let userNameCheck = function(userName){
    let regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/ ;
    return regex.test(userName);
}

// Remove Before and Ending Spaces.
let trimVal = (textVal) => textVal.trim();


// Length check of user name.
let lengthCheck = function(userName){
    return ((userName.length) > 4);
}


// Email Validation Functions.
let emailValidator = function(emailVal){
    if(trimVal(emailVal) === ""){
        errorMsg[1].innerHTML = "Email cannot be empty.";
        setErrorOpacity(1);
    }
    else{
        
        if(checkString(emailVal) === true){
            errorMsg[1].innerHTML = "";
            setSuccessOpacity(1);
        }
        else{
            errorMsg[1].innerHTML = "Unvalid Email";
            setErrorOpacity(1);
        }
        
    }
}

// Reguler Expresion of Email Validation.
let checkString = function(emailVal){
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(emailVal);
}




// Password Validation Functions.

let passValidator = function(passVal){
    if(trimVal(passVal) === ""){
        errorMsg[2].innerHTML = "Password cannot be empty.";
        setErrorOpacity(2);
    }
    else{

        if(passLength(passVal)){
            errorMsg[2].innerHTML = "";
            setSuccessOpacity(2);
        }
        else{
            errorMsg[2].innerHTML = "Password is too short.";
            setErrorOpacity(2);
        }
        
    }
}

// Password Length check.

let passLength = function(passVal){
    return (passVal.length >= 8);
}
