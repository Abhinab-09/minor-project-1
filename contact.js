// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Theme Toggle Functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Toggle between light/dark theme
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  // Simple form submission handler for contact page
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // Here you would normally send the data to a server
      console.log('Form submitted:', formValues);
      
      // Show a simple success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Smooth scrolling for anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Simple product hover effect enhancement
  const productImages = document.querySelectorAll('.product-image');
  productImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });
    
    image.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });
});