let jogosAlugados = 1;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');


     if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados --;
    } 

        else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogosAlugados ++;
            }
    let palavraJogo = jogosAlugados > 1 ? 'jogos' : 'jogo';
    let palavraAlugado = jogosAlugados > 1 ? 'alugados' : 'alugado';
    console.log(`No total, há ${jogosAlugados} ${palavraJogo} ${palavraAlugado}`);     
        
}

    
    




