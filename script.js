// Color override function - applies colors from Supabase or other sources
function applyCustomColors(primaryColor, accentColor) {
  if (primaryColor) {
    document.documentElement.style.setProperty('--primary', primaryColor);
  }
  if (accentColor) {
    document.documentElement.style.setProperty('--accent', accentColor);
    // Also set secondary to accent if only two colors provided
    document.documentElement.style.setProperty('--secondary', accentColor);
  }
}

// Function to fetch and apply colors from Supabase
// This will be called when the page loads if colors are available in Supabase
async function loadColorsFromSupabase() {
  // Check if we have a site ID or other identifier
  // This is a placeholder - replace with actual Supabase query
  // Example: const { data } = await supabase.from('free_websites').select('primary_color, accent_color').eq('id', siteId).single();
  
  // For now, check URL parameters or localStorage for testing
  const urlParams = new URLSearchParams(window.location.search);
  const primaryColor = urlParams.get('primary') || localStorage.getItem('primaryColor');
  const accentColor = urlParams.get('accent') || localStorage.getItem('accentColor');
  
  if (primaryColor || accentColor) {
    applyCustomColors(primaryColor, accentColor);
  }
  
  // TODO: Replace with actual Supabase query when ready
  // Example implementation:
  /*
  try {
    const { data, error } = await supabase
      .from('free_websites')
      .select('primary_color, accent_color')
      .eq('id', window.SITE_ID) // or get from URL/meta tag
      .single();
    
    if (!error && data) {
      applyCustomColors(data.primary_color, data.accent_color);
    }
  } catch (err) {
    console.error('Error loading colors from Supabase:', err);
  }
  */
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Load colors from Supabase or other sources
  loadColorsFromSupabase();
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

