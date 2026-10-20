export function saludar()  {

  document.getElementById('btnLike').addEventListener('click', () => {

     document.getElementById('leave').textContent = 'share our website for free';


     setTimeout(() => {
     document.getElementById('leave').textContent = 'One click to leave your like';
      

     }, 6000);

  });
  
}

 