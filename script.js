Here's a basic JavaScript code for a digital marketing company website:

// Add event listener to the navigation links

document.querySelectorAll('header nav a').forEach(link => {

  link.addEventListener('click', event => {

    event.preventDefault();

    const sectionId = link.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });

  });

});

// Add event listener to the call-to-action button

document.querySelector('button').addEventListener('click', () => {

  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });

});

// Form submission handler

document.querySelector('form').addEventListener('submit', event => {

  event.preventDefault();

  const name = document.querySelector('input[type="text"]').value;

  const email = document.querySelector('input[type="email"]').value;

  const message = document.querySelector('textarea').value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Add code to send the form data to the server or email

});

// Animate the sections on scroll

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 2) {

      section.classList.add('animate');

    }

  });

});