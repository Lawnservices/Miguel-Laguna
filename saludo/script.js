document.getElementById('year').textContent = new Date () .getFullYear();

setInterval(()=>{
 const masa = document.getElementsByClassName('logo');
 masa[0].style.color = 'green';
},6000);
 