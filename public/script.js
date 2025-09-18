// Mobile menu toggle
function toggleMobileMenu() {
  const navUl = document.querySelector('.navbar ul');
  const toggle = document.querySelector('.mobile-menu-toggle');
  navUl.classList.toggle('active');
  toggle.classList.toggle('active');
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
    userMsg.style.marginBottom = "10px";
    userMsg.style.padding = "12px 16px";
    userMsg.style.textAlign = "right";
    userMsg.className = "user-message";
    messages.appendChild(userMsg);

    // Show typing indicator
    const typingIndicator = document.createElement("p");
    typingIndicator.innerHTML = "Sanjeevani Bot: <span class='loading'></span>";
    typingIndicator.style.marginBottom = "10px";
    typingIndicator.style.padding = "12px 16px";
    typingIndicator.style.textAlign = "left";
    typingIndicator.className = "bot-message";
    messages.appendChild(typingIndicator);

    // Simulate bot response delay
    setTimeout(() => {
      messages.removeChild(typingIndicator);
      
      const botMsg = document.createElement("p");
      botMsg.textContent = "Sanjeevani Bot: I'm here to help you with " + input.value + ". How can I support you today?";
      botMsg.style.marginBottom = "10px";
      botMsg.style.padding = "12px 16px";
      botMsg.style.textAlign = "left";
      botMsg.className = "bot-message";
      messages.appendChild(botMsg);
      
      messages.scrollTop = messages.scrollHeight;
    }, 1200);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
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
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
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
