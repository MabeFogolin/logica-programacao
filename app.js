let totalGeral  = 0;
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
  totalGeral += preco;
  let total = document.getElementById('valor-total');
  total.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
  // total.innerHTML = `<p class="carrinho__total">
  //  <span class="texto-azul" id="valor-total"> Total: ${totalGeral}</span> </p> `;
}

function limpar(){
  totalGeral = 0;
  document.getElementById('valor-total').innerHTML = 'R$ 0';
  document.getElementById('lista-produtos').innerHTML = '';

}