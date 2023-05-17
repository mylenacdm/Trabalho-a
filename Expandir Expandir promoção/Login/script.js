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
