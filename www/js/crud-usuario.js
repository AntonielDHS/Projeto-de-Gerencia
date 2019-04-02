

var logado = localStorage.getItem("user")
var cadastrados = localStorage.getItem("cadastrados");
var cadastrados = JSON.parse(cadastrados);
var users;
var contLog = 0;
var novoArray = [];
//function localizar ()  

function log(user) {
	if (contLog == 1) {
	 
		nomelocal.innerHTML = "Nome: <input type='text' value='" + users.nome + "' disabled/>";
		enderecolocal.innerHTML = "ENDEREÇO: <input type='text' id='endUser' value='" + users.end + "'/disabled>";
		nlocal.innerHTML = "NUMERO DA RESIDENCIA: <input type='text' id='numeroUser' value='" + users.nResid + "'disabled/>";
		bairrolocal.innerHTML = "BAIRRO: <input type='text' id='bairroUser' value='" + users.bairro + "'disabled/>";
		datalocal.innerHTML = "DATA DE NASCIMENTO : <input type='date' value='" + users.dataNascimento + "'disabled/>";
		emaillocal.innerHTML = "EMAIL: <input type='email' value='" + users.email + "'disabled/>";
	}
 else{
	nomelocal.innerHTML = "Nome: <input type='text' value='" + users.nome + "' />";
	enderecolocal.innerHTML = "ENDEREÇO: <input type='text' id='endUser' value='" + users.end + "'/d>";
	nlocal.innerHTML = "NUMERO DA RESIDENCIA: <input type='text' id='numeroUser' value='" + users.nResid + "'/>";
	bairrolocal.innerHTML = "BAIRRO: <input type='text' id='bairroUser' value='" + users.bairro + "'/>";
	datalocal.innerHTML = "DATA DE NASCIMENTO : <input type='date' value='" + users.dataNascimento + "'/>";
	emaillocal.innerHTML = "EMAIL: <input type='email' value='" + users.email + "'/>";
 }
}




function deletecont() {
	var cpfs = $("#cpfconfirm").val();
	var cont = 0;
	for (var i = 0; i < cadastrados.length; i++) {
		var usuario = JSON.parse(cadastrados[i]);
		if (usuario.cpf == cpfs) {
			if (usuario.nome == logado) {
				cont++;

			}
			else {
				swal({
                    title: "!",
                    text: "impossivel excluir conta cpf Invalido",
                    icon: "info",
                  });
			}



		} else {

			novoArray.push(JSON.stringify(usuario));



		}

	}
	localStorage.setItem("cadastrados", JSON.stringify(novoArray));
	if (cont == 1) {
		//localStorage.removeItem("cadastrados");
		window.location.href = "../index.html";
		fechaModal();
        cont = 0;
	}

}
// função para editar o dados do usuario

function abrirPagEditar(user) {
	contLog++;
	window.location.href = "editardados.html";
	log(users);


}
function editardados(){
		var nome = $("#nomeUser").val();
		var email = $("#emailUser").val();
		var endereco = $("#endUser").val();
		var cpf = $("#cpfUser").val();
		var dataNascimento = $("#dataUser").val();
		var senha = $("#senhaUser").val();
		var bairro = $("#bairroUser").val();
		var nResid = $("#numeroUser").val();

		var user = new Usuario(nome, email, senha, dataNascimento, cpf, telefone,endereco,bairro,nResid);
		logado = user.nome;
        localStorage.setItem("user" , logado);
		novoArray.push(JSON.stringify(user));
		localStorage.setItem("cadastrados", JSON.stringify(novoArray));
		

		alert("Editado!");
		location.href = "CRUD-usuario.html";
		return true;

}
function confirmDelet(){
	swal({
		title: "tem certeza?",
		text: "você está deletando sua conta permanentemente!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	  })
	  .then((willDelete) => {
		if (willDelete) {
		  swal("conta deletada!", {
			icon: "success",
			
		  });
		  deletecont();
		} else {
		  swal("cancelado");
		}
	  });
}


function ativaModal() {
	myModal.style.display = "block";
}


function fechaModal() {
	myModal.style.display = "none"
}

function deleteconta() {
	ativaModal();
}
