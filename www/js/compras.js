var pedido = localStorage.getItem("total");
var pedido = JSON.parse(pedido);
var produtos;
var ped;

$(function () {
    produtos = localStorage.getItem("produtos");// Recupera os dados armazenados
    produtos = JSON.parse(produtos); // Converte string para objeto
    if (produtos == null) {// Caso não haja conteúdo, iniciamos um vetor vazio
        produtos = [];
         pedido = [];
}
    else {
        carregarPedidos();
    }

});

function carregarPedidos() {
    var meusProdutos = document.getElementById("my-prod");
    meusProdutos.innerHTML = "<div id='produtTable' '></div>";
    var table = document.getElementById("produtTable");
                var spam3 = document.createElement('span');
                var br = document.createElement('br');
                var center1 = document.createElement('div');
                

                
               spam3.innerHTML = "Pedido de R$:"+ " " + (pedido).toFixed(2) + " " + "foi aprovado"; 

                center1.appendChild(br);
           
                center1.appendChild(spam3);
    
                table.appendChild(center1);


}