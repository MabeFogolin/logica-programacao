let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Insira um nome válido, não adicione vazios');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    
    if( lista.textContent == '' ){
        lista.textContent = amigo.value;
    } 
    else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    console.log(lista.textContent)
}   

function sortear(){
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    if(amigos.length < 4){
        alert('Para o sorteio ser mais divertido, é necessário 4 pessoas ou mais');
        return;
    }
    for (let i = 0; i < amigos.length; i++){
        if( i== amigos.length - 1 ){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '---> ' + amigos[0] + '<br>';

        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '---> ' + amigos[i + 1] + '<br>';
        }
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}
