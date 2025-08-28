// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listadoAmigos = [];


// Paso 1: Agregamos la funcion para agregar amigos. 

function agregarAmigo() {
    let añadeAmigos = document.getElementById("amigo");
    let nombreAmigo = añadeAmigos.value.trim();

// En caso de que el dato de ingreso este en blanco
    if (nombreAmigo === "") {
        alert("Por favor ingresa el nomnbre de alguno de tus amigos.")
        return;
    } else if (listadoAmigos.includes(nombreAmigo)) {
        alert("Parece ser que este nombre ya esta en la lista, añade uno diferente.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    añadeAmigos.value = "";

    //console.log(nombreAmigo);
}

