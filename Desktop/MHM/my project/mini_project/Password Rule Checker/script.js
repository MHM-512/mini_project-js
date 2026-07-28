const hasMinimumLength = (password) => {
    return password.length >= 8;
};

const hasNumber = (password) => {
    for (const charcter of password) {
        if (charcter >= 0 && charcter <= 9) return true;
    } return false;
    // modull 2 
    //  return /\d/.test(password)
};
const hasUppercaseLetter = (password) => {
    for (const charcter of password) {
        if (charcter >= 'A' && charcter <= 'Z') {
            return true;
        } return false;
    };
    // modull 2 
    //  return /[A-Z]/.test(password);
}

const getFailedRules = (password) => {
const failedRules = [];
if(!hasMinimumLength(password)=== true ){
    failedRules.push('minimum length');
}
if(!hasNumber(password) ===true){
    failedRules.push('number');
}
if(!hasUppercaseLetter(password) === true){
    failedRules.push('uppercase letter');
}
return failedRules;
};

const validatePassword = (password) => {
const failedRules = getFailedRules(password);
return {
    valid: failedRules.length === 0 , 
    failedRules
};  
};


console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));