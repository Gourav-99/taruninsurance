let enquiryForm = document.querySelector(".enquiry-form");
let applyBtn = document.querySelector(".apply-btn");
let enquiryModal = document.querySelector(".enqiry-form-block");
let body = document.querySelector('body');
let closeBtn = document.querySelector(".close-btn");
applyBtn.addEventListener("click", () => {
    closeModalPupup();
})
closeBtn.addEventListener("click", () => {
    closeModalPupup();
})
body.addEventListener("click", e => {
    if (e.target === enquiryModal) {
        closeModalPupup();
    }
})
document.querySelector(".btn-danger").addEventListener("click", () => {
    enquiryForm.reset();
})
closeModalPupup = () => {
    enquiryModal.classList.toggle('xs-show');
    body.classList.toggle('overflow');
}
validatePhoneNumber = (input_str) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}
enquiryForm.addEventListener("submit", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    if (!validatePhoneNumber(phone)) {
        alert("!Please enter a valid phone number");
        phone = '';
        document.getElementById("phone").focus();
    } else {
        let response = {
            from_name: name,
            email_id: email,
            mobile_number: phone,
            message: message
        }
        emailjs.send("service_ahpu3jj", "template_kwkp4nc", response).then(res => alert("Thank you for showing intrest. You will be contacted soon :)")).then(() => closeModalPupup()).catch(err => console.log(err))
    }
})