
var todos = localStorage.getItem("produtos");
var todos = JSON.parse(todos);
var lanche;
var pedido;

$(function(){
    pedido = localStorage.getItem("pedido");// Recupera os dados armazenados
    pedido = JSON.parse(pedido); // Converte string para objeto
    if(pedido == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    	pedido = [];
    else{
    	return false;
    }
    
});

function meuPedido ( quantidade, posicao){
    this.quantidade = quantidade;
    this.posicao = posicao;
}

function lanche0(){
    var  quantidade = $("#Quantidade0").val();
    quantidade
    var posicao = 0;
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche1(){
    var  quantidade = $("#Quantidade1").val();
    quantidade
    var posicao = "1";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche2(){
    var  quantidade = $("#Quantidade2").val();
    quantidade
    var posicao = "2";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche3(){
    var  quantidade = $("#Quantidade3").val();
    quantidade
    var posicao = "3";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     
}
}
function lanche4(){
    var  quantidade = $("#Quantidade4").val();
    quantidade
    var posicao = "4";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche5(){
    var  quantidade = $("#Quantidade5").val();
    quantidade
    var posicao = "5";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche6(){
    var  quantidade = $("#Quantidade6").val();
    quantidade
    var posicao = "6";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche7(){
    var  quantidade = $("#Quantidade7").val();
    quantidade
    var posicao = "7";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
function lanche8(){
    var  quantidade = $("#Quantidade8").val();
    quantidade
    var posicao = "8";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){  window.location.href = "cardapio.html";  }, 3000); 
      
}
}
function lanche9(){
    var  quantidade = $("#Quantidade9").val();
    quantidade
    var posicao = "9";
    if(quantidade > 0){
        var snacks = new meuPedido(quantidade ,posicao);
        pedido.push(JSON.stringify(snacks));
        localStorage.setItem("pedido", JSON.stringify(pedido));
        sweetAlert("adicionado ","ao pedido com sucesso" , "success");
        setTimeout(function(){   window.location.href = "cardapio.html"; }, 3000); 
     

}
}
