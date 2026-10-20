async function darLike(id) {
    const res = await fetch(`https://www.creantunegocio.com/api/like/${id}`, { method: "POST" });
    const data = await res.json();

    const btn = document.getElementById("btnLike");

    if (!data.ok) {
        // Ya dio like → cambiar botón
        btn.textContent = "❤️ Thank you";
        btn.classList.add("disabled");
        btn.disabled = true;
    } else {
        // Like nuevo → cambiar botón
        btn.textContent = "❤️ Thank you";
        btn.classList.add("disabled");
        btn.disabled = true;
    }

    cargarLikes(id);
}

async function cargarLikes(id) {
    const res = await fetch(`https://www.creantunegocio.com/api/likes/${id}`);
    const data = await res.json();
    document.getElementById("totalLikes").textContent = data.likes;
}

// Cargar likes al entrar
cargarLikes(12);