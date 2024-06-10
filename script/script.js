const inputUsuario = document.querySelector("#usuarioID");
const inputSenha = document.querySelector("#senhaID");
let usuarioLogado = null;
const btnlogin = document.querySelector("#loginID");


(() => {
    usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado) {
        window.location.href = "tmp/guest-v0yydi/%C3%81rea%20de%20Trabalho/g243i2t-main/logado.html";
    }
})();


btnlogin.onclick = (e) => {
    e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if (usuario){ 
      if (usuario === "user"){
        if (senha === "123" ) {
            localStorage.setItem("usuario",usuario);
            window.location.href = "tmp/guest-v0yydi/%C3%81rea%20de%20Trabalho/g243i2t-main/logado.html";
        }
      } 
    } else { inputUsuario.focus }

}