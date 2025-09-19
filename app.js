// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Paso 1: Crear una lista/array para guardar los nombres
let listadoAmigos = [];


// Paso 2: Agregamos la funcion para agregar amigos. 

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
    
    // Agregar nombres a la memoria del programa y limpia el campo para un nuevo nombre
    listadoAmigos.push(nombreAmigo);
    adicionAmigos.value = "";

    // LLama a la función del "Paso 3" para poder visualizar los nombres en la pantalla
    visualizarNombres();

    // Datos consola 
    console.log(nombreAmigo);
}


// Paso 3: Adición de los nombres en lista de HTML

function visualizarNombres () {
    let listado = document.getElementById("listaAmigos");
    listado.innerHTML = "";

    // Bucle de adición y verificación de los nombres
    for (let i = 0; i < listadoAmigos.length ; i++) {
        listado.innerHTML += "<li>" + listadoAmigos[i] + "</li>";
    }

    // Datos consola
    console.log(listadoAmigos);
}

// Paso 4: Sortear amigo

    // Código de validación de que hay nombres introducidos
function sortearAmigo () {
    if (listadoAmigos.length === 0) {
        alert("No hay amigos para sortear, por favor ingresa los nombres de tus amigos");
        return;
    }
    // Indice de aleatoriedad
    let amigoAleatorio = Math.floor(Math.random() * listadoAmigos.length);

    // Obtención del numero sorteado
    let nombreSorteado = listadoAmigos[amigoAleatorio];

    // Mostrar el número sorteado
    let resultadoAmigoSorteado = document.getElementById("resultado");
    resultadoAmigoSorteado.innerHTML = "<li> Tu amigo secreto es:" + nombreSorteado + "</li>";
}
