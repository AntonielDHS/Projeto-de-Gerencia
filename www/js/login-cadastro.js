var reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`~-]+@[a-z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var cadastrados;



function ativaModal() {
    myModal.style.display = "block";
}


function fechaModal() {
    myModal.style.display = "none";
}

function Usuario(nome, email, senha, dataNascimento, cpf, telefone, endereco, bairro, nResid) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.endereco = endereco;
    this.nResid = nResid;
    this.bairro = bairro;
    this.telefone = telefone;
    this.cpf = cpf;
    this.senha = senha;
    
}

$(function () {
    cadastrados = localStorage.getItem("cadastrados");
    cadastrados = JSON.parse(cadastrados);
    if (cadastrados == null){
        cadastrados = [];
    }
});

function cadastrar() {
    var nome = $("#nomeClient").val();
    var email = $("#emailClient").val();
    var endereco = $("#endClient").val();
    var cpf = $("#cpfClient").val();
    var telefone = $("#TelefoneClient").val();
    var dataNascimento = $("#dataClient").val();
    var senha = $("#senhaClient").val();
    var confirma = $("#senhaClientConfirm").val();
    var nResid = $("#numClient").val();
    var bairro = $("#bairroClient").val();
    
    //verifica se tem algum campo vazio
    if (nome == "" || email == "" || senha == "" || confirma == "" || dataNascimento == "" || cpf == "" || endereco == "" ||nResid == "" || bairro == "") {
          sweetAlert("Obrigatario","preencher todos os campos","info");

    }
    else {
        //verifica se o email bate com a expressão regular 'exemplo@exemplo.com'
        if (!reEmail.test(email)) {
            var campo1 = document.getElementById('emailClient');
            campo1.setCustomValidity('O email não atende aos requisitos Tente algo como nome@exemplo.com .');
        }
        else if (senha != confirma) {
            alert("ERROR:Senhas diferentes!");
        }
        else {
            //Verifica se já existe algum usuário cadastrado com esse email
            if (emailExists(email)) {
                sweetAlert("Erro!","ja existe outra conta cadastrada com esse email!","error");
            } else {                
                //Se nenhum erro ocorreu, crio um usuário novo
                var user = new Usuario(nome, email, senha, dataNascimento, cpf, telefone, endereco,bairro ,nResid);
                //O converto com JSON
                var toJson = JSON.stringify(user);
                //E o adiciono ao array de usuários;
                cadastrados.push(toJson);
                localStorage.setItem("cadastrados", JSON.stringify(cadastrados));
                 sweetAlert("enviado","cadastrado com sucesso!" , "success");
                setTimeout(function(){ window.location.href = "../index.html"; }, 3000); 
                 
                
            }

        }
    }
    return false;
}

function logar() {
    var email = $("#ID-Login").val();
    var senha = $("#ID-Senha").val();
    var master = "admin";
    var checkEmail = email.localeCompare(master);
    var checkSenha = senha.localeCompare(master);
    if (checkEmail == 0 && checkSenha == 0) {
        console.log("entrou");
        localStorage.setItem("user", "Master");
        location.href = "html/cadastrarProdutos.html";
        return true;
    }
    //autentica o login e redireciona a pagina
    for (var i in cadastrados) {
        user = JSON.parse(cadastrados[i]);
        if (user.email == email && user.senha == senha) {
            localStorage.setItem("user", buscarPorEmail(email));

            window.location.href = "html/novo.html";
            return true;
        }
    }
    sweetAlert("Error","Email ou senha incorretos!","error");
    return false;
}

function emailExists(email) {
    for (var i in cadastrados) {
        var user = JSON.parse(cadastrados[i]);
        if (user.email == email) {

            nomelocal.innerHTML = user.nome;
            emaillocal.innerHTML = user.email;
            cpflocal.innerHTML = user.cpf;
            return true;
        }
    }
    return false;
}

function buscarPorEmail(email) {
    for (var i in cadastrados) {
        var user = JSON.parse(cadastrados[i]);
        if (user.email == email) {
            return user.nome;
        }
    }
    return null;
}





