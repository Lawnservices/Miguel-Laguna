document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("miFormulario").addEventListener("submit", function(event){
      // Permite que el formulario se envíe
      alert("Form sent successfully");

      // Limpia los campos después de un breve retardo
      setTimeout(function(){
        document.getElementById("miFormulario").reset();
      }, 1000); // 1 segundo de espera antes de limpiar los campos (opcional)
    });







});