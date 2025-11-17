// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Services dropdown toggle
  const servicesBtn = document.getElementById('services-btn');
  const servicesMenu = document.getElementById('services-menu');
  const servicesDropdown = document.getElementById('services-dropdown');
  
  if (servicesBtn && servicesMenu) {
    servicesBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      servicesMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (servicesDropdown && !servicesDropdown.contains(e.target)) {
        servicesMenu.classList.add('hidden');
      }
    });
  }

  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Form submission handler
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // In a real application, you would send this data to a server
      // For now, we'll just show an alert
      alert('Thank you for your submission! We will contact you soon.\n\nNote: This is a demo. In production, this would be sent to a server.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
});

