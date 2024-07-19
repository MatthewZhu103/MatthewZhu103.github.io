function sendMail(){
    let parms = {
        reply_to : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    
    emailjs.send("service_q6muw1b","template_5f8ud09", parms).then(alert("Email Sent! I'm glad you consider me as a suitable candidate and look forward to working with you in the future!"));

}


function scrollTo() {
    document.getElementById('contactInformation').scrollIntoView({ behavior: 'smooth' });
  }



