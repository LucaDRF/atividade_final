const itens = [
    {
        id: 0,
        nome: 'Camisa Likin Park Estilo 1',
        img: "lp.jpg",
        preco: 35,
        qnt: 0
    },
    {
        id: 1,
        nome: 'Camisa Likin Park Estilo 2',
        img: 'lp2.jpg',
        preco: 35,
        qnt: 0
    },
    {
        id: 2,
        nome: 'Camisa Likin Park Estilo 3',
        img: 'lp3.jpg',
        preco: 35,
        qnt: 0
    },
    {
        id: 3,
        nome: 'Camisa Ac/Dc',
        img: 'ac dc].jpg',
        preco: 40,
        qnt: 0
    },
    {
        id: 4,
        nome: 'Camisa Guns N Roses',
        img: 'guns n roses.jpg',
        preco: 40,
        qnt: 0
    },
]
const itens1 = [
    {
        id: 5,
        nome: 'Camisa Black Sabbath',
        img: "black sabbath.jpg",
        preco: 30,
        qnt: 0
    },
    {
        id: 6,
        nome: 'Camisa Kiss',
        img: "kiss 2.jpg",
        preco: 30,
        qnt: 0
    },
    {
        id: 7,
        nome: 'Camisa System of A Down',
        img: "sos.jpg",
        preco: 30,
        qnt: 0
    },
    {
        id: 8,
        nome: 'Camisa Rolling Stones',
        img: "rolling stones.jpg",
        preco: 30,
        qnt: 0
    },
    {
        id: 9,
        nome: 'Camisa Queen',
        img: "queen.jpg",
        preco: 30,
        qnt: 0
    },
]
const itens2 = [
    {
        id: 10,
        nome: 'Camisa The Strokes',
        img: "camiseta-the-strokes-5.jpg",
        preco: 30,
        qnt: 0
    },
    {
        id: 11,
        nome: 'Camisa Pink Floyd Estilo 1',
        img: "pink floyd.jpg",
        preco: 40,
        qnt: 0
    },
    {
        id: 12,
        nome: 'Camisa Pink Floyd Estilo Especial',
        img: "floyd the wall.jpg",
        preco: 50,
        qnt: 0
    },
    {
        id: 13,
        nome: 'Camisa The Killers',
        img: "the killers.jpg",
        preco: 30,
        qnt: 0
    },
    {
        id: 14,
        nome: 'Camisa Pearl Jam',
        img: "pearl jam.jpg",
        preco: 35,
        qnt: 0
    },
]
function adicionarCarrinho(idd){
    var nome = '';
    var obj = {}
    itens.map((val) =>{
        if (val.id == idd){nome = itens;}
    })
    itens1.map((val) =>{
        if (val.id == idd){nome = itens1;}  
    })
    itens2.map((val) =>{
        if (val.id == idd){nome = itens2;}
    })
    nome.map((val) =>{
        if (val.id == idd){
            obj = val;
            obj.qnt += 1;}
        }
    )
    localStorage.setItem(idd, JSON.stringify(obj));

}
function inicializarLoja(nome, id) {
    var containerProdutos = document.getElementById(id);
    nome.map(function sla (val){
        containerProdutos.innerHTML += `
        <div class="produtoItem">
            <img src="../doc/camisas/`+ val.img +`" class="produtoImg">
            <div class="nomePreco">
                <h1 class="produtoNome">`+ val.nome +`</h1>
                <p class="produtoPreco">R$`+ val.preco +`,00</p>
            </div>
            <button onclick="adicionarCarrinho(`+ val.id +`)" class="produtoBotao" key=`+ val.id +`>Adicionara ao carrinho!</button>
        </div>
        `;
    })
}
inicializarLoja(itens, 'produtos');
inicializarLoja(itens1, 'produtos1');
inicializarLoja(itens2, 'produtos2');
