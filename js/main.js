const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    // ghostClass: "fantasma"
    dragClass: "drag",


    onEnd: () => {
        console.log('Se insertó un elemento');
    },
    group: "lista-personas",
    store: {
        // guardamos el orden de la lista
        set: (sortable) => {
                const orden = sortable.toArray();
                localStorage.setItem(sortable.options.group.name, orden.join('|'));
        },



// obtenemos el orden de la lista
        get: (sortable)  => {
            const orden = localStorage.getItem(sortable.options.group.name);
            return orden ? orden.split('|') : [];
        }
    }
});   


