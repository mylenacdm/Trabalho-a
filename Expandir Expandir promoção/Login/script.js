document.addEventListener("DOMContentLoaded", () => {
  //essa função é executada antes de tudo, ela é executada antes de carregar o html da tela e tal

  //aqui seria legal validar se o loggedUser salvo no localStorage está na lista de usuários cadastrados,
  //se tiver tudo ok redirecionar para a tela principal, afinal o usuário já fez login (usar windows.location.href("") )

  window.onload();
});

const senha = document.getElementById("Passwordlog");
const nomeInput = document.getElementById("namelog");
const form = document.getElementById("loginForm");
let loginOK = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = nomeInput.value;
  let senhaConf = senha.value;
  for (let i = 0, len = localStorage.length; i < len; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    if (key == nome && value == senhaConf) {
      loginOK = true;
      e.target.submit();
    }
  }

  if (!loginOK) alert("Informações de login inválidas");
});
