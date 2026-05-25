// Botón like
document.getElementById("likeBtn").onclick = async () => {
  const ref = doc(db, "likes", userID);
  const exists = await getDoc(ref);

  if (exists.exists()) {
    alert("You already liked it. 👍");
    return;
  }

  await setDoc(ref, { fecha: Date.now() });
  loadLikes();
  alert("Thank you for your like! 🎉");
};

let colores = ['#22a6ce', '#0d1f3d','green','blue'];
let index = 0;

setInterval(() => {
document.getElementById('likeBtn').style.backgroundColor = colores[index];
index = (index + 1) % colores.length;
}, 1000);