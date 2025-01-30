var today = new Date();
var todayHours = today.getHours();
var greetin;

if (todayHours >= 18){
 greetin = 'Good evening';
} else if (todayHours >= 12){
 greetin = 'Good afternoon';
} else if (todayHours >= 0){
 greetin = 'Good morning';
} else{
 greetin = 'Welcome, thank you for visiting us.';
}
document.getElementById('demo').textContent = greetin;

document.getElementById('year').textContent = new Date () .getFullYear();