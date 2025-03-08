let usa = document.querySelectorAll('td');
usa.forEach(colores =>{
colores.style.fontSize = '20px';
});

setInterval(()=>{
 const tel = document.getElementsByClassName('tel');
 if(tel.length > 0){
  tel[0].style.color = 'blue';
 }
 },7000)
 

setInterval(()=>{
 let usas = document.querySelector('.servicio');
 usas.style.color = '#003349';
 usas.style.fontSize = '20px';
},6000)
 