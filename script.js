// Puedes agregar interacciones en JavaScript si lo deseas
// Este código es para agregar animación de desplazamiento suave cuando se hace clic en los enlaces del menú

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Ajustamos para que la cabecera no tape el contenido
      behavior: 'smooth'
    });
  });
});
