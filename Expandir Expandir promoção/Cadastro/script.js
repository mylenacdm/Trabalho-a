const senha = document.getElementById("password1");
const confirmarsenha = document.getElementById("password2");
const nomeInput = document.getElementById("name");
const botaoCadastro = document.getElementById("Cadastro");
const botaoEntrar = document.getElementById("Entrar");

botaoCadastro.addEventListener("click", function () {
  let nome = nomeInput.value;
  let senhaConf = senha.value;
  let senhaConf2 = confirmarsenha.value;

  if (
    nome.length < 3 ||
    senhaConf.length < 8 ||
    senhaConf2.length < 8 ||
    senhaConf !== senhaConf2
  ) {
    let mensagem = "";
    if (nome.length < 3)
      mensagem = "Digite um nome com pelo menos 3 caracteres.";
    else if (senhaConf.length < 8)
      mensagem = "Digite pelo menos 8 caracteres para a senha.";
    else if (senhaConf2.length < 8)
      mensagem = "Digite pelo menos 8 caracteres para a senha2.";
    else if (senhaConf !== senhaConf2) mensagem = "As senhas não conferem.";
    alert(mensagem);
    return;
  }
  localStorage.setItem(nome, senhaConf);
  alert("Cadastro realizado com sucesso!");
});
