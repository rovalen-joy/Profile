//highlight the active link 
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let currentSection = '';

  //determine the current section 
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

// click functionality for smooth scrolling
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth',
    });
    document.querySelectorAll('.nav-links a').forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  });
});
