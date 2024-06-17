const inputUsuario = document.getElementById("#usuarioID");
const inputSenha = document.getElementById("#senhaID");
let usuarioLogado = null;
const btnlogin = document.querySelector("#loginID");


(() => {
    usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado) {
        window.location.href = "tmp/guest-qslueo/Área%20de%20Trabalho/g243i2t-main/logado.html";
    }
})();




function test () {

    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if (usuario){ 
      if (usuario === "user"){
        if (senha === "123" ) {
            localStorage.setItem("usuario",usuario);
            window.location.href = "tmp/guest-qslueo/Área%20de%20Trabalho/g243i2t-main/logado.html";
        }
      } 
    } else { inputUsuario.focus(); }

}


