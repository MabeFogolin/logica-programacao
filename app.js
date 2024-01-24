//Minha ideia + da Luri
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

function comprar() {
  let quantidade = parseInt(document.getElementById('qtd').value);
  let tipoIngresso = document.getElementById('tipo-ingresso').value;

  if(quantidade <= 0 ){
    alert('Insira uma quantidade válida');
  }
  else if (tipoIngresso == 'superior' && quantidade <= qtdSuperior) {
    qtdSuperior = qtdSuperior - quantidade;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
     alert('Compra realizada com sucesso');
  } 
  else if (tipoIngresso == 'inferior' && quantidade <= qtdInferior) {
    qtdInferior = qtdInferior - quantidade;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
     alert('Compra realizada com sucesso');
  } 
  else if (tipoIngresso == 'pista' && quantidade <= qtdPista) {
    qtdPista = qtdPista - quantidade;
    document.getElementById('qtd-pista').textContent = qtdPista;
     alert('Compra realizada com sucesso');
  }
  else{
    alert('Esta quantidade não está disponível');
  }
  quantidade = (document.getElementById('qtd').value = 0);
  console.log('Parabéns, você finalizou o desafio!!!');
}

//Solução da aula
// function comprar() {
//   let tipo = document.getElementById('tipo-ingresso');
//   let qtd = parseInt(document.getElementById('qtd').value);

//   if (qtd < 0){
//     alert('Insira uma quantidade válida')
//   }
//   else if (tipo.value == 'pista') {
//       comprarPista(qtd);
//   } else if (tipo.value == 'superior') {
//       comprarSuperior(qtd);
//   } else {
//       comprarInferior(qtd);
//   }
// }

// function comprarPista(qtd) {
//   let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
//   if (qtd > qtdPista) {
//       alert('Quantidade indisponível para tipo pista');
//   } else {
//       qtdPista = qtdPista - qtd;
//       document.getElementById('qtd-pista').textContent = qtdPista;
//       alert('Compra realizada com sucesso!');
//   }
// }

// function comprarSuperior(qtd) {
//   let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
//   if (qtd > qtdSuperior) {
//       alert('Quantidade indisponível para tipo superior');
//   } else {
//       qtdSuperior = qtdSuperior - qtd;
//       document.getElementById('qtd-superior').textContent = qtdSuperior;
//       alert('Compra realizada com sucesso!');
//   }

// }
// function comprarInferior(qtd) {
//   let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
//   if (qtd > qtdInferior) {
//       alert('Quantidade indisponível para tipo inferior');
//   } else {
//       qtdInferior = qtdInferior - qtd;
//       document.getElementById('qtd-inferior').textContent = qtdInferior;
//       alert('Compra realizada com sucesso!');
//   }
// }
     


