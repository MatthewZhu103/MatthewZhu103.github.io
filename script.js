function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    
    emailjs.send("service_q6muw1b","template_5f8ud09", parms).then(alert("Email Sent! I'm glad you consider me as a suitable candidate and look forward to working with you in the future!"));

}


function scrollToElement(elementSelector, instance = 0, offset = 70) {
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance) {
        const element = elements[instance];
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}


document.getElementById("hireButton").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.contact-container');
});

document.getElementById("link1").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.exp-container');
});

document.getElementById("link2").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.project-container');
});

document.getElementById("link3").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.about-container');
});

document.getElementById("link4").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.contact-container');
});

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    sendMail();
});