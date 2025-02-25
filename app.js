// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Implementa una función para agregar amigos

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        // amigos.push(console.log(nombreDeAmigo)); 
        amigos.push(nombreDeAmigo); 
        limpiarCaja();
        mostrarListaDeAmigos()
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Implementa una función para actualizar la lista de amigos

function mostrarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let element = amigos[i];
    
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        lista.appendChild(listaHTML);
      }
}

