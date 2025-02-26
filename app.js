let amigos = [];

// Implementa una función para agregar amigos

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;

    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    } 
    
    if (amigos.includes(nombreDeAmigo)) {
        alert('Este amigo ya está en la lista.');
        return;
    }

    amigos.push(nombreDeAmigo); 
    mostrarListaDeAmigos()
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Implementa una función para actualizar la lista de amigos

function mostrarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Implementa una función para sortear los amigos

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, inserte al menos dos nombres de sus amigos.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo secreto sorteado es: ${amigos[indiceAleatorio]}</p>`;
    document.getElementById('listaAmigos').style.display = 'none';
}
