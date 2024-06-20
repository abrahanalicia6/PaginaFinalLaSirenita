document.addEventListener("DOMContentLoaded", function() {
    const sirenitaList = document.getElementById('sirenita-list');

    sirenitaData.forEach(personaje => {
        const item = document.createElement('div');
        item.className = 'sirenita-item';
        
        const img = document.createElement('img');
        img.src = personaje.imagen;
        img.alt = personaje.nombre;
        
        const nombre = document.createElement('h3');
        nombre.textContent = personaje.nombre;
        
        const descripcion = document.createElement('p');
        descripcion.textContent = personaje.descripcion;
        
        item.appendChild(img);
        item.appendChild(nombre);
        item.appendChild(descripcion);
        
        sirenitaList.appendChild(item);
    });
});
