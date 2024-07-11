$.checkName = (span, value) => {
    let regex = /\d/g;
    if (! value.match(regex) && value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    $(`#${span}`).html("This name is not blank and is alphabetic");
    $(`#${span}`).css({"display": "block"})
    return false;
}

$.checkEmail = (span, value) => {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (value.match(regex) && value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    $(`#${span}`).html("This email is not correct in format");
    $(`#${span}`).css({"display": "block"})
    return false;
}

$.checkPhone = (span, value) => {
    let regex = /\d{10}/;
    if (value.match(regex) && value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    $(`#${span}`).html("This phone is not correct in format with 11 digits");
    $(`#${span}`).css({"display": "block"})
    return false;
}


$.checkPassword = (span, value) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (value.match(regex) && value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    $(`#${span}`).html("This password is needed at least 1 digit, 1 uppercase letter, 1 special letter and its length is at least 6 to 10 characters");
    $(`#${span}`).css({"display": "block"})
    return false;
}

$.checkPosition = (span, value) => {
    if (["male", "female", "others"].includes(value)) { 
        $(`#${span}`).html("");
        return true
    } 
    
    $(`#${span}`).html("The salary must be in [\"Male\", \"Female\", \"Others\"]");
    $(`#${span}`).css({"display": "block"})
    return false;
}
