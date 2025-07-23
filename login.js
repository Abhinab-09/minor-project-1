document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = form.querySelector("input[name='email']");
  const passwordInput = form.querySelector("input[name='password']");
  const buttons = form.querySelectorAll("button.btn");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      if (btn.textContent.trim().toLowerCase() === "login") {
        alert(`Login successful!\nEmail: ${emailInput.value}`);
        
      } else if (btn.textContent.trim().toLowerCase() === "register") {
        alert(`Registration successful!\nEmail: ${emailInput.value}`);
     
      }
    });
  });
});
