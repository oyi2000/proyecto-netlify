// Efecto de scroll suave para el menú
document.querySelectorAll('nav a, .btn').forEach(link => {
  link.addEventListener('click', function (e) {
    // Si el enlace contiene un hash (referencia a id)
    if(this.hash !== "") {
      e.preventDefault();
      const targetId = this.hash.substring(1);
      const target = document.getElementById(targetId);
      
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});
