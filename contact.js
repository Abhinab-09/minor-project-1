
document.addEventListener('DOMContentLoaded', function() {
  

  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
  

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