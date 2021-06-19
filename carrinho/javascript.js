function removerItem(idd){
    localStorage.removeItem(idd);
    location.reload()
}
function inicializarCarrinho(idd) {
    var containerProdutos = document.getElementById("produtosCarrinho");
    val = JSON.parse(localStorage.getItem(idd));
    containerProdutos.innerHTML += `
    <div class="produtoItem">
        <img src="../doc/camisas/`+ val.img +`" class="produtoImg">
        <div class="nomePreco">
            <h1 class="produtoNome">`+ val.nome +`</h1>
            <p class="produtoPreco">R$`+ val.preco +`,00</p>
            <p class="produtoQnt">Quantidade: `+ val.qnt +`</p>
            <button class="botaoSubmitC" onclick="removerItem(`+ val.id +`)">Remover item</button> 
        </div>
    </div>`;
    preco = val.preco * val.qnt;
    return preco;
    }
function lancarDesconto(){
    var input = document.getElementById("inputDesconto").value;
    
    var cupom = localStorage.getItem("Cupom");
    if (cupom == input){
        totalP = totalP * 0.9;
        total.innerHTML = `Total = R$`+ totalP +`<br>
        <form><input id="botaoDesconto" type="text" placeholder="Cupom">
        <button onclick="lancarDesconto()" type="submit" disabled>Lançar Cupom</button></form>
        <button id="botaoSubmitCa">Concluir Compra</button>`;;
        alert("Cupom Ok!")
    }
    else{alert("Cupom Inválido!")}
}
var totalP = 0
for (var c = 0; c < 14; c++){
    if (localStorage.getItem(c) != null){
        totalP += inicializarCarrinho(c);
    }
}
var total = document.getElementById("total");
total.innerHTML += `Total = R$`+ totalP +`,00<br>
<form><input id="inputDesconto" type="text" placeholder="Cupom">
<button id="botaoDesconto" onclick="lancarDesconto()" type="submit">Lançar Cupom</button></form>`;
total.innerHTML += `<button id="botaoSubmitCa">Concluir Compra</button>`