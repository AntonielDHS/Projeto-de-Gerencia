var produtos;
var cont = 0;

function myFunction() {
	//var posLanche = $("#myBnt").value();
	var x = document.getElementById("myBnt").value;
	localStorage.setItem("posição",JSON.stringify(x));
	alert(x);
  }

$(function(){
    produtos = localStorage.getItem("produtos");// Recupera os dados armazenados
    produtos = JSON.parse(produtos); // Converte string para objeto
    if(produtos == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    	produtos = [];
    else{
    	carregarProdutos();
    }
    
});

function lanche (imagem, nome, ingredientes,descricao,preco){
	this.imagem=imagem;
	this.nome=nome;
    this.ingredientes=ingredientes;
	this.descricao=descricao;
	this.preco=preco;
}

function carregarProdutos(){
	var meusProdutos = document.getElementById("my-prod");
    	meusProdutos.innerHTML = "<table id='produtTable' '></table></tabe>";
    	var table = document.getElementById("produtTable");
		for(var i in produtos){
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
    		var center1 = document.createElement('div');
			var center2 = document.createElement('div');
			var center3 = document.createElement('div');

			h6.setAttribute('color','#00e676');
            imagem.setAttribute('src',produto.imagem);
    		
    		center1.appendChild(br);
    		center1.appendChild(imagem);
    		td1.appendChild(center1);

    		h5.innerHTML = produto.nome;
    		span2.innerHTML = produto.descricao;
    		center2.appendChild(h5);
			center2.appendChild(span2);

			h6.innerHTML = "apartir de";
    		span1.innerHTML = "R$:" + " " + produto.preco;
    		center3.appendChild(h6);
			center3.appendChild(span1);
			


            td3.appendChild(center3);
    		td2.appendChild(center2);
    		tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
    		table.appendChild(tr);
    	}
	}



$(function (){
	var meusProdutos = document.getElementById("my-prod");
    	meusProdutos.innerHTML = "<table id='produtTable'></table></table>";
    	var table = document.getElementById("produtTable");
		for(var i in produtos){
			var produto = produtos[i];
			var tr = document.createElement('tr');
    		var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
    		var imagem = document.createElement('img');
    		var span1 = document.createElement('span');
    		var span2 = document.createElement('span');
    		var br = document.createElement('br');
			var h4 = document.createElement('h3');
			var h6 = document.createElement('h6');
    		var center1 = document.createElement('center');
			var center2 = document.createElement('center');
			var center3 = document.createElement('div');
			

			h6.setAttribute('color','#00e676');
			imagem.setAttribute('src',produto.imagem);
			
    		
    		center1.appendChild(br);
    		center1.appendChild(imagem);
    		td1.appendChild(center1);
            
    		h4.innerHTML = produto.nome;
    		span2.innerHTML = produto.descricao;
    		center2.appendChild(h4);
			center2.appendChild(span2);

			h6.innerHTML = "               apartir de";
    		span1.innerHTML ="             <a  class='preco' href='produtoUnid"+cont+".html'>R$:"+ produto.preco +"</a>" ;
    		center3.appendChild(h6);
			center3.appendChild(span1);
		
			


            td3.appendChild(center3);
    		td2.appendChild(center2);
    		tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);

			table.appendChild(tr);

			cont+=1;
			
    	}
	});

function showImage(input){
	if(input.files && input.files[0]){
		var reader = new FileReader();

		reader.onload = function(e){
			$('#img-upload').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

function addProdutos(){
    var nome = $("#myProd").val();
    var descricao= $("#descricao").val();
	var ingredientes= $("#ingredientes").val();
	var imagem = document.getElementById("img-upload");
	var preco = $("#preco").val();
	//Testa se foi ou não escolhida uma imagem
	if(imagem.src==""){
		alert("Erro, foto não selecionada!");
	}else if(ingredientes==""||nome==""||preco==""){ //Testa se todos os campos foram preenchidos
		alert("Preencha todos os campos!");
	}else{
		/*Para o salvamento da imagem dentro do local storage
		foi feito uma cópia da imagem para dentro de um atributo canvas.
		Este atributo posteriormete foi convertido para base64
		para que seja possivel colocá-lo dentro do local storage
		*/
		var imgCanvas = document.createElement("canvas");
    	var imageContext = imgCanvas.getContext("2d");
   		imgCanvas.width = 50;
	    imgCanvas.height = 50;
	    imageContext.drawImage(imagem, 0, 0, 50, 50);
	    imagem = imgCanvas.toDataURL("image/png");

	    var produto = new lanche(imagem,nome,ingredientes,descricao,preco);
	    produtos.push(produto);
	    localStorage.setItem("produtos",JSON.stringify(produtos));
	    setTimeout(function(){ sweetAlert("adicionado com sucesso" ,"fechando em 3s" , "success"); }, 3000);
	    fechaModal();
	    carregarProdutos();
	}
}