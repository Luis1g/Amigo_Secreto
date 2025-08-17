// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos una variable de tipo array para almacenar los nombres.
let amigos = []


// Usamos la función "agregarAmigo" para añadir el nombre de un amigo.
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    // Se utiliza if para cuando no se agrega un nombre.
    if (nombreAmigo == ""){
        // Si el nombre esta vacion, se muestra una alerta.
        alert("⚠️ Por favor, ingrese un nombre");
        return
    }

        // Verificamos si el nombre ya existe en el arreglo
    if (amigos.includes(nombreAmigo)){
        alert("⚠️ El amigo '" + nombreAmigo + "' ya existe. Agrega apellido o un nombre diferente.");
        return;
    }
    // Almacenamos los nombre en una variable llamada "amigos".
    amigos.push(nombreAmigo);
    // Limpiamos el campo, para agregar un nuevo nombre.
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Esta función se encarga de actualizar la lista con los nombres de nuestros amigos
function actualizarLista(){
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = "";
    // Recorre todos los elementos de amigo
    amigos.forEach(amigo => {
        // Crea un nuevo elemento en la lista <li>
        let li = document.createElement("li");
        // Coloca el texto dentro del <li>
        li.textContent = amigo;
        // Inserta el <li> al final del contenedor listaActualizada
        listaActualizada.appendChild(li);
    })
}

//  Función para sortear uno de los amigo que agregamos
function sortearAmigo(){
    // Usamos condicional en el que si la variable amigos no contine nombres, aparece una alerta
    if (amigos.length == 0){
        alert("No hay amigos disponibles");
        return;
    }
    // Le damos un valor de entero a cada nombre en la lista, elegimos uno con Math.random() y lo guardamos en la variable numeroAmigo
    let numeroAmigo = Math.floor(Math.random() * amigos.length);
    // Accedemos al nombre del indice aleatorio obtenido
    let amigoSecreto = amigos[numeroAmigo];
    // Imprimimos la frase con el nombre del amigo sorteado
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSecreto 
}
