var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var massageError = document.getElementById('massage-error');
var submitError = document.getElementById('submit-error');
// name//
function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write a full name";
        return false;
    }


    nameError.innerHTML = '<i class="fa-solid fa-circle-check"> </i>';
    return true;

}

// phone//

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone No should be 10 digits";
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }


    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"> </i>';
    return true;

}
// // email//
function validateemail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"> </i>';
    return true;

}
// massage//

function validateMassage() {
    var massage = document.getElementById('contact-massage').value;
    var required = 30;
    var right = required - massage.length;


    if (right > 0) {
        massageError.innerHTML = right + 'more characters required';
        return false;

    }

    massageError.innerHTML = '<i class="fa-solid fa-circle-check"> </i>';
    return true;
}

// submit// 

function validateForm() {
    if (!validateName() & !validatePhone() & !validateemail() & !validateMassage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none' }, 3000)
        return false;
    }
    window.location.assign("file:///E:/shooping/index.html");
}

