window.addEventListener('load',function(){
  document.getElementById('video').addEventListener('click',function(){
  document.getElementById('video').style.display = 'none';
  document.getElementById('videos').style.display = 'block';
  document.getElementById('slider').style.display = 'none';
  document.getElementById('videoo').style.display = 'block';
});
this.document.getElementById('videoo').addEventListener('click',function(){
  document.getElementById('video').style.display = 'block';
  document.getElementById('videoo').style.display = 'none';
  document.getElementById('videos').style.display = 'none';
  document.getElementById('slider').style.display = 'block';
});

const caveza = document.getElementById('video');
const cavezaa = document.getElementById('videoo');
document.addEventListener('scroll',() => {
 let = scroll_position = window.scrollY;
 if(scroll_position > 360){
  caveza.style.color = 'green';
  cavezaa.style.color = 'yellow';
 } else{
  caveza.style.color = '#fff';
  cavezaa.style.color = '#fff';
 }
});

 
});