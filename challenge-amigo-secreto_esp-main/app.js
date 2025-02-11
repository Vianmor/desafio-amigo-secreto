// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crear un array para almacenar nombres

let amigos = [];


function agregarAmigo() {
    const nuevoAmigo = document.getElementById("amigo"); // este método busca en el archivo index.html el elemento id="amigo"
    const placeholder = nuevoAmigo.value.trim(); // Obtiene el texto de nuevoAmigo, trim se usa para limpiar espacios

    if (placeholder != "") {  // Guarda en el arreglo  siempre y cuando la caja de texto no este vacia
        amigos.push(placeholder);
        actualizarLista(); // mandamos Llamar a la función
        nuevoAmigo.value = "";
    }else{
        alert("Por favor, inserte un nombre");
        }
}

//Función para actualizar la lista de amigos

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpia las entradas antes de agregar nuevos elementos
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crea un elementode  tipo lista "list item"
        li.textContent = amigo; // Obtiene el texto de li
        lista.appendChild(li); // Agrega al último elemento
    });
}

//Función para sortear la lista de amigos

function sortearAmigo() {
    if (amigos.length == 0) { // con esta condición se ejecuta el arreglo mientras no este vacio.
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let sortearAmigo = amigos[Math.floor(Math.random() * amigos.length)]; 
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es:${sortearAmigo}</li>`;
   
}



