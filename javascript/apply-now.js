let enquiryForm = document.querySelector(".enquiry-form");
let applyBtn = document.querySelector(".apply-btn");
let enquiryModal = document.querySelector(".enqiry-form-block");
let body = document.querySelector('body');
let closeBtn = document.querySelector(".close-btn");
applyBtn.addEventListener("click", () => {
    enquiryModal.classList.toggle('xs-show');
    body.classList.toggle('overflow');
})
closeBtn.addEventListener("click", () => {
    enquiryModal.classList.toggle('xs-show');
    body.classList.toggle('overflow');
})
body.addEventListener("click", e => {
    console.log(e.target);
    if (e.target === enquiryModal) {
        enquiryModal.classList.toggle('xs-show');
        body.classList.toggle('overflow');
    }
})
document.querySelector(".btn-danger").addEventListener("click", () => {
    enquiryForm.reset();
})
enquiryForm.addEventListener("submit", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let response = {
        name: name,
        email: email,
        phone: phone,
        enquiry: message
    }
    Email.send({
        SecureToken: "39954862-801e-439e-a205-23a500f4354a",
        To: 'goupg1999@gmail.com',
        From: email,
        Subject: "Enquiry regarding insurance",
        Body: response
    }).then(
        res => alert("Thank you for showing intrest. You will be contacted soon :)")
    );
})
