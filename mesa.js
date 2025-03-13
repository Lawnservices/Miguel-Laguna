let usa = document.querySelectorAll('td');
usa.forEach(colores =>{
colores.style.fontSize = '20px';
});

setTimeout(()=>{
 const tel = document.getElementsByClassName('tel');
 if(tel.length > 0){
  tel[0].style.color = 'blue';
 }
 },7000)
 

setTimeout(()=>{
 let usas = document.querySelector('.servicio');
 usas.style.color = '#003349';
 usas.style.fontSize = '20px';
},6000)
 