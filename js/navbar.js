window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70; 
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id'); 
    }
  });

  // 3) Update nav link .active
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

// Smooth scrolling on nav link click
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offsetTop = target.offsetTop - 60; // Adjust for sticky nav

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });

    // Mark link as active
    document.querySelectorAll('.nav-links a').forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  });
});
