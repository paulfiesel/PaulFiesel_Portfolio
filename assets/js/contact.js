/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
}

// serviceID - templateID - #form - publickKey

contactForm.addEventListener('submit', sendEmail)