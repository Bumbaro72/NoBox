/* Animacije deley */

document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animiraj-start');
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.animiraj-me').forEach(el => {
      observer.observe(el);
    });
  });