document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    function highlightNav() {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (
          window.scrollY >= sectionTop - window.innerHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - window.innerHeight / 3
        ) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightNav);
  
    // Initial highlight on page load
    highlightNav();
  });
  
//MOBILE NAVBAR
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    
});