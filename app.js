// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos una variable de tipo array para almacenar los nombres.
let amigos = []


// Usamos la función "agregarAmigo" para añadir el nombre de un amigo.
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value.trim();
    // Se utiliza if para cuando no se agrega un nombre.
    if (nombreAmigo == ""){
        // Si el nombre esta vacion, se muestra una alerta.
        alert("Por favor, ingrese un nombre");
        return
    }

    // Contar cuántas veces ya aparece el nombre
    let contador = amigos.filter(n => n.startsWith(nombreAmigo)).length;

    if (contador > 0) {
        // Si ya existe, le agregamos un número (Luis segundo, Luis tercero, etc.)
        nombreAmigo = nombreAmigo + " " + (contador + 1);
    }

    // Almacenamos los nombre en una variable llamada "amigos".
    amigos.push(nombreAmigo);
    // Limpiamos el campo, para agregar un nuevo nombre.
    document.getElementById("amigo").value = "";
    actualizarLista();
}


function actualizarLista(){
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaActualizada.appendChild(li);
    })
}


function sortearAmigo(){
    if (amigos.length == 0){
        alert("NO hay amigos disponibles");
        return;
    }
    let numeroAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[numeroAmigo];
    document.getElementById("resultado").textContent = "El amigo secreto es:" + amigoSecreto 
}
