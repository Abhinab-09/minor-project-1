
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
  document.body.setAttribute('data-theme', 'light');
  themeToggle.textContent = '🌙';
} else {
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
  

  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      console.log('Form submitted:', formValues);
      
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }});