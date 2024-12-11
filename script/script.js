document.addEventListener('DOMContentLoaded', function(){
 const time = document.querySelector('.servicio');
 if(time){
  setTimeout(function(){
   time.style.display = 'block';
  },2000);

 }
 const fotoss = document.querySelectorAll('.fotos');
   fotoss.forEach((elemento) =>{
    setTimeout(function(){
      elemento.style.display = 'block';
    },3000)

  });

  
   
 

});