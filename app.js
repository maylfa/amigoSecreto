//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let inputNome = document.getElementById("nomeAmigo");
    let nome = inputNome.value.trim()

    if(nome == "") {
        alert("Por favor, insira um nome.")
        return
    }
    amigos.push(nome)
    inputNome.value = ""
    atualizarLista()
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for(let amigo of amigos) {
        let li = document.createElement("li")
        li.textContent = amigo
        lista.appendChild(li)
    }
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.")
        return
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[indiceSorteado]
    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`
}
    

 