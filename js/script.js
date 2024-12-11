document.addEventListener('DOMContentLoaded', function(){
 const trabajo = document.querySelector('.tiempo');
 const yaVisitado = localStorage.getItem('paginaVisitada');
if (yaVisitado) {
  if (trabajo) {
        trabajo.style.display = 'block';
    }
} else {
  if (trabajo) {
        setTimeout(function () {
            trabajo.style.display = 'block';
        }, 6000);
    }
   localStorage.setItem('paginaVisitada', 'true');
}
});