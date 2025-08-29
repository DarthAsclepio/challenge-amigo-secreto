// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Variables:
let listadoAmigos = [];


// Paso 1: Agregamos la funcion para agregar amigos. 

function agregarAmigo() {
    let adicionAmigos = document.getElementById("amigo");
    let nombreAmigo = adicionAmigos.value.trim();

    // En caso de que el dato de ingreso este en blanco hace solicitud a colocar un nombre
    if (nombreAmigo === "") {
        alert("Por favor ingresa el nomnbre de alguno de tus amigos.")
        return;
    } else if (listadoAmigos.includes(nombreAmigo)) {
        alert("Parece ser que este nombre ya esta en la lista, añade uno diferente.");
        return;
    }

    listadoAmigos.push(nombreAmigo);
    adicionAmigos.value = "";

    // LLama a la función para poder visualizar los nombres en la pantalla
    visualizarNombres();


    console.log(nombreAmigo);
}


// Paso 2: Adición de los nombres en lista de HTML

function visualizarNombres () {
    let listado = document.getElementById("listaAmigos");
    listado.innerHTML = "";

    for (let i = 0; i < listadoAmigos.length ; i++){
        listado.innerHTML += "<li>" + listadoAmigos[i] + "</li>";
    }

    console.log(listadoAmigos);

}