// Scroll suave para los enlaces del menú y botón
document.querySelectorAll('nav a, .btn').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const targetId = this.hash.substring(1);
      const target = document.getElementById(targetId);
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});
