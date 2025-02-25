// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Implementa una función para agregar amigos

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreDeAmigo); 
        limpiarCaja();
        mostrarListaDeAmigos()
    }
}

function limpiarCaja() {
    document.document.getElementById('amigo').value = '';
}

// Implementa una función para actualizar la lista de amigos

function mostrarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let element = amigos[i];
    
        let liElementHtml = document.createElement("li");
        liElementHtml.textContent = element;
        listaAmigos.appendChild(liElementHtml);
      }
}

// Implementa una función para sortear los amigos

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, inserte al menos dos nombres de sus amigos.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[indiceAleatorio];
    }
}
