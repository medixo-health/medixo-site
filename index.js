document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("whatsappWelcomeModal");
  const closeBtn = document.getElementById("closeWelcomeModal");
  const welcomeForm = document.getElementById("welcomeWhatsAppForm");
  const inlineCallIcon = document.getElementById("inlineCallIcon");
  const phoneNumber = "918310721403";
  const waNumber = "919686248218";

  // 🚫 Hide floating call icon if exists
  const floatingCallIcon = document.getElementById("callIcon");
  if (floatingCallIcon) {
    floatingCallIcon.style.display = "none";
  }

  // Show modal only once per session
  if (!sessionStorage.getItem("welcomeModalShown")) {
    modal.style.display = "flex";
    sessionStorage.setItem("welcomeModalShown", "true");
  }

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (floatingCallIcon) {
      floatingCallIcon.style.display = "none";
    }
  });
  
// toggle on mobile
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      collapseInstance.hide();
    }
  });
});


  // WhatsApp Join logic
  welcomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("welcomeName").value.trim();
    const email = document.getElementById("welcomeEmail").value.trim();

    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    const msg = `Hi, I'm ${name} (${email}). I'd like to learn more about Medixo.`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = waUrl;
    } else {
      window.open(waUrl, "_blank");
    }

    modal.style.display = "none";
    if (floatingCallIcon) {
      floatingCallIcon.style.display = "none";
    }
  });

  // Inline call icon behavior
  inlineCallIcon.addEventListener("click", () => {
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert(`Call us at: ${waNumber}`);
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navbar links
  document.querySelectorAll('a.nav-link-custom[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade-in animation on scroll for elements with .animate-fade-in-up
  const animatedSections = document.querySelectorAll('.animate-fade-in-up');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedSections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
    const bookNowBtn = document.getElementById("bookNowBtn");
    const desktopNumberDisplay = document.getElementById("desktopNumberDisplay");
    const phoneNumber = "+918310721403";

    function isMobile() {
      return /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    }

    bookNowBtn.addEventListener("click", () => {
      if (isMobile()) {
        // On mobile: open phone dialer
        window.location.href = `tel:${phoneNumber}`;
      } else {
        // On desktop: show the number below button
        desktopNumberDisplay.style.display = "block";
      }
    });
  });
  
/* image book */
document.getElementById("offerLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("bookingModal").style.display = "flex";
});

// Close modal function
function closeBookingModal() {
  document.getElementById("bookingModal").style.display = "none";
}

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("bookName").value.trim();
  const email = document.getElementById("bookEmail").value.trim();
  const date = document.getElementById("bookDate").value;

  if (!name || !email || !date) {
    alert("Please fill in all fields.");
    return;
  }

  const message = `Hello, I am ${name}. I want to book an appointment for full body health checkup on ${date} `;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/919686248218?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");

  // Close modal
  document.getElementById("bookingModal").style.display = "none";
  this.reset();
});

/* contact us */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const whatsappMessage = `Hi, I'm ${name} (${email}). Here's my message: ${message}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const phoneNumber = "919686248218";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = whatsappURL;
  } else {
    window.open(whatsappURL, "_blank");
  }

  const successMsg = document.getElementById("contactSuccess");
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.style.display = "none";
    this.reset();
  }, 3000);
});

/* why choose */

const items = document.querySelectorAll('.why-list .why-item');
const images = document.querySelectorAll('.why-image img');
let current = 0;
const total = items.length;
const transitionDuration = 800; 

function showSlide(nextIndex) {
  if(nextIndex === current) return; // no change

  // Fade out current
  items[current].classList.remove('active');
  images[current].classList.remove('active');

  // After fade out duration, fade in next
  setTimeout(() => {
    items[nextIndex].classList.add('active');
    images[nextIndex].classList.add('active');
    current = nextIndex;
  }, transitionDuration);
}

function nextSlide() {
  const next = (current + 1) % total;
  showSlide(next);
}

// Initialize first slide
items[current].classList.add('active');
images[current].classList.add('active');

// Auto cycle every 4 seconds
setInterval(nextSlide, 4000);

/* footer */
document.addEventListener("DOMContentLoaded", function () {
  const serviceLinks = document.querySelectorAll(".service-link");
  const modal = new bootstrap.Modal(document.getElementById("serviceModal"));
  const messageBox = document.getElementById("serviceMessage");

  serviceLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const serviceName = this.getAttribute("data-service");

      messageBox.innerHTML = `
        <p class="mb-2">You have selected <strong>"${serviceName}" service</strong>.</p>
        <p class="mb-3">For further assistance and guidence , please contact us.</p>
        <p class="fw-semibold text-warning">Call us: +91 9686248218</p>
      `;

      modal.show();
    });
  });
});
