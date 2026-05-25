var today = new Date();
var todayHours = today.getHours();
var greetin;
let mensaje = 'We have the best prices';
if (todayHours >= 18){
 greetin = 'Good Evening ';
} else if (todayHours >= 12){
 greetin = 'Good Afternoon ';
} else if (todayHours >= 0){
 greetin = 'Good Morning ';
} else{
 greetin = 'Welcome, thank you for visiting us.';
}
document.getElementById('demo').textContent = greetin + ' ' + mensaje;

 
setTimeout(() => {
 const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = dias [new Date().getDay()];
const feliz = 'Happy';
document.getElementById('usa').textContent = `${feliz} ${day}`;
 
}, 9000);
 
 
 