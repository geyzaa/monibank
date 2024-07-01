const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); 
}) //"blur" tira o foco do input, é o gatilho pra verificar 

function verificaCampo(campo) {

}