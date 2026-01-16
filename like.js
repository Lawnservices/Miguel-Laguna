import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 TU CONFIGURACIÓN REAL (ya la tienes)
const firebaseConfig = {
  apiKey: "AIzaSyBdgyKF9kdRS-CnkJadRopwu1GJup1ey2k",
  authDomain: "likes-web-1992b.firebaseapp.com",
  projectId: "likes-web-1992b",
  storageBucket: "likes-web-1992b.firebasestorage.app",
  messagingSenderId: "736088589267",
  appId: "1:736088589267:web:8ab8d81dfb82ef0487e526"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ID único por navegador
let userID = localStorage.getItem("likeID");
if (!userID) {
  userID = crypto.randomUUID();
  localStorage.setItem("likeID", userID);
}

// Cargar total de likes
async function loadLikes() {
  const snap = await getDocs(collection(db, "likes"));
  document.getElementById("totalLikes").textContent = snap.size;
}
loadLikes();

// Botón like
document.getElementById("likeBtn").onclick = async () => {
  const ref = doc(db, "likes", userID);
  const exists = await getDoc(ref);

  if (exists.exists()) {
    alert("Ya diste like 👍");
    return;
  }

  await setDoc(ref, { fecha: Date.now() });
  loadLikes();
  alert("¡Gracias por tu like! 🎉");
};
