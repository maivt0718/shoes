$.checkName = (span, value) => {
    if (value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    $(`#${span}`).html("This name is not blank");
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
    let regex = /0\d{9}/;
    if (value.match(regex) && value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    $(`#${span}`).html("This phone is not correct in format with 10 digits, starting with 0");
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

$.checkGender = (span, value) => {
    let temp = $.removeVietnameseTones(value).trim().toLowerCase();
    if (["male", "female", "others"].includes(temp)) { 
        $(`#${span}`).html("");
        return true
    } 
    
    $(`#${span}`).html("The gender must be in [\"Male\", \"Female\", \"Others\"]");
    $(`#${span}`).css({"display": "block"})
    return false;
}

$.checkDate = (span, value) => {
    let regex = /\d{2}\/\d{2}\/\d{4}/g;
    if (value.match(regex) && value.length > 0) { 
        $(`#${span}`).html("");
        return true
    } 
    
    $(`#${span}`).html("The date must be in format dd/mm/yyyy");
    $(`#${span}`).css({"display": "block"})
    return false;
}

