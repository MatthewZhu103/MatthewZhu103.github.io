function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    if (!email || !subject || !message) {
        alert("Please fill out all fields before sending the email.");
        return; // Prevent the email from being sent
    }
    
    emailjs.send("service_q6muw1b","template_5f8ud09", parms).then(alert("Email Sent! I'm glad you consider me as a suitable candidate and look forward to working with you in the future!"));

}


function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance) {
        const element = elements[instance];
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

const heroText = document.querySelector('.hero-text');

if (heroText) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroText.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  });

  observer.observe(heroText);
}

document.getElementById("hireButton").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.contact-title');
});

document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.navbar-nav');
});

document.getElementById("link1").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.exp-container');
});

document.getElementById("link2").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.project-section');
});

document.getElementById("link3").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.about-container');
});

document.getElementById("link4").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToElement('.contact-title');
});

document.getElementById("emailForm").addEventListener("submit", (event) => {
    event.preventDefault();
    sendMail();

    document.getElementById("emailForm").reset();
});