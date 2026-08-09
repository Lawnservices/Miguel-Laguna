fetch("https://www.creantunegocio.com/api/trabajos")
.then(res => res.json())
.then(trabajos => {

    const lista = document.getElementById("lista-trabajos");

    const tabla = document.createElement("table");

    tabla.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Dirección</th>
                <th>Fecha</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = tabla.querySelector("tbody");

    trabajos.forEach(trabajo => {

        const fila = document.createElement("tr");

        // Convertir la fecha a la fecha local de Maryland
        const fecha = new Date(trabajo.fecha);

        const fechaLocal = fecha.toLocaleDateString("es-US", {
            timeZone: "America/New_York",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });

        fila.innerHTML = `
            <td>${trabajo.id}</td>
            <td>${trabajo.direccion}</td>
            <td>${fechaLocal}</td>
            <td>
                <button onclick="borrarTrabajo(${trabajo.id})">
                    Borrar
                </button>
            </td>
        `;

        tbody.appendChild(fila);
    });

    lista.appendChild(tabla);

})
.catch(error => {
    console.error("Error:", error);
});


function borrarTrabajo(id) {

    if (!confirm("¿Quieres borrar este trabajo?")) {
        return;
    }

    fetch(`https://www.creantunegocio.com/api/trabajos/${id}`, {
        method: "DELETE"
    })
    .then(res => res.text())
    .then(data => {

        console.log(data);

        location.reload();

    })
    .catch(error => {
        console.error("Error:", error);
    });
}