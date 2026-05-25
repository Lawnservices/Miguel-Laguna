document.addEventListener('DOMContentLoaded', function(){
const time = document.querySelector('.servicio');

const yaVisitado = localStorage.getItem('paginaVisitada');
if (yaVisitado) {
  if (time) {
        time.style.display = 'block';
    }
} else {
  if (time) {
        setTimeout(function () {
            time.style.display = 'block';
        }, 6000);
    }
   localStorage.setItem('paginaVisitada', 'true');
}

const fotoss = document.querySelectorAll('.fotos');
   fotoss.forEach((elemento) =>{
    setTimeout(function(){
      elemento.style.display = 'block';
    },3000)

  });

  
   
 

});