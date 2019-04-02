var pedido = localStorage.getItem("pedido");
var pedido = JSON.parse(pedido);
var produtos;
var pedidoFinalizado = [];
var ped;
var  total = 0;
var soma = parseFloat(total)+parseFloat(JSON.parse(localStorage.getItem("total")));

$(function () {
    produtos = localStorage.getItem("produtos");// Recupera os dados armazenados
    produtos = JSON.parse(produtos); // Converte string para objeto
    if (produtos == null) // Caso não haja conteúdo, iniciamos um vetor vazio
        produtos = [];
    else {
        carregarPedidos();
    }

});

function carregarPedidos() {
    var meusProdutos = document.getElementById("my-prod");
    meusProdutos.innerHTML = "<table id='produtTable' '></table>";
    var table = document.getElementById("produtTable");
    for (var i = 0; i < produtos.length; i++) {
        for (var k = 0; k < pedido.length; k++) {
            ped = JSON.parse(pedido[k]);
            if (ped.posicao == i) {
                var produto = produtos[i];
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');

                var imagem = document.createElement('img');
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var br = document.createElement('br');
                var h5 = document.createElement('h5');
                var h6 = document.createElement('h6');
                var center1 = document.createElement('center');
                var center2 = document.createElement('center');
                var center3 = document.createElement('center');
                var valor = produto.preco;
                var valor1 = ped.quantidade;
                var pre = parseFloat(valor) * parseFloat(valor1);


                h6.setAttribute('color', '#00e676');
                imagem.setAttribute('src', produto.imagem);

                center1.appendChild(br);
                center1.appendChild(imagem);
                td1.appendChild(center1);

                h5.innerHTML = produto.nome;
                span2.innerHTML = produto.descricao;
                center2.appendChild(h5);
                center2.appendChild(span2);

                h6.innerHTML = "quantidade:" + "" + ped.quantidade;
                span1.innerHTML = "R$:" + " " + (pre).toFixed(2);
                center3.appendChild(h6);
                center3.appendChild(span1);



                td3.appendChild(center3);
                td2.appendChild(center2);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
                soma = pre;
                total += (soma);

            }

        }

    }
    localStorage.setItem("total", JSON.stringify(total));
    if (pedido.length != 0) {
        $(function () {
            var meutotal = document.getElementById("totalId");
            meutotal.innerHTML = "<div id='produtTable'></div>";
            var div = document.getElementById("produtTable");
            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            var h5 = document.createElement('h5');
            var center1 = document.createElement('center');
            var center2 = document.createElement('center');
            
           h5.innerHTML = "Total : R$: " + total;
           center1.appendChild(h5);
           span1.appendChild(center1);

           span2.innerHTML = "<button onclick = 'finalizar()'>Finalizar Pedido</button>";
           center2.appendChild(span2);

            
            div.appendChild(span1);
            div.appendChild(span2);
            




        });
    }
}

function finalizar(){
    
    swal("Good job!", "You clicked the button!", "success");
    localStorage.removeItem("pedido");
    setTimeout(function(){ location.href="compras.html"; }, 3000);
    
    
}