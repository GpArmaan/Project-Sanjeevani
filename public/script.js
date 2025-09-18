// Mobile menu toggle
function toggleMobileMenu() {
  const navUl = document.querySelector('.navbar ul');
  navUl.classList.toggle('active');
}

// Handle Enter key press in chat input
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Enhanced send message function with animations
function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() !== "") {
    // Add user message with animation
    const userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input.value;
    userMsg.style.opacity = "0";
    userMsg.style.transform = "translateX(-20px)";
    userMsg.style.transition = "all 0.3s ease";
    userMsg.style.marginBottom = "10px";
    userMsg.style.padding = "8px 12px";
    userMsg.style.background = "#e3f2fd";
    userMsg.style.borderRadius = "15px";
    userMsg.style.textAlign = "right";
    messages.appendChild(userMsg);
    
    // Animate user message
    setTimeout(() => {
      userMsg.style.opacity = "1";
      userMsg.style.transform = "translateX(0)";
    }, 10);

    // Show typing indicator
    const typingIndicator = document.createElement("p");
    typingIndicator.innerHTML = "Sanjeevani Bot: <span class='loading'></span>";
    typingIndicator.style.opacity = "0";
    typingIndicator.style.transform = "translateX(20px)";
    typingIndicator.style.transition = "all 0.3s ease";
    typingIndicator.style.marginBottom = "10px";
    typingIndicator.style.padding = "8px 12px";
    typingIndicator.style.background = "#f8f9fa";
    typingIndicator.style.borderRadius = "15px";
    typingIndicator.style.textAlign = "left";
    messages.appendChild(typingIndicator);
    
    setTimeout(() => {
      typingIndicator.style.opacity = "1";
      typingIndicator.style.transform = "translateX(0)";
    }, 300);

    // Simulate bot response delay
    setTimeout(() => {
      messages.removeChild(typingIndicator);
      
      const botMsg = document.createElement("p");
      botMsg.textContent = "Sanjeevani Bot: I'm here to help you with " + input.value + ". How can I support you today?";
      botMsg.style.opacity = "0";
      botMsg.style.transform = "translateX(20px)";
      botMsg.style.transition = "all 0.3s ease";
      botMsg.style.marginBottom = "10px";
      botMsg.style.padding = "8px 12px";
      botMsg.style.background = "#e8f5e8";
      botMsg.style.borderRadius = "15px";
      botMsg.style.textAlign = "left";
      messages.appendChild(botMsg);
      
      setTimeout(() => {
        botMsg.style.opacity = "1";
        botMsg.style.transform = "translateX(0)";
      }, 10);
      
      messages.scrollTop = messages.scrollHeight;
    }, 1500);

    input.value = "";
  }
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animated');
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 86, 210, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 86, 210, 0.3)';
  } else {
    navbar.style.background = 'rgba(0, 86, 210, 0.95)';
    navbar.style.boxShadow = 'none';
  }
}

// Event listeners
window.addEventListener('scroll', () => {
  animateOnScroll();
  handleNavbarScroll();
});

window.addEventListener('load', animateOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add some interactive feedback for buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
