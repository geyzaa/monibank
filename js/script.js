import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); 
    //"blur" tira o foco do input, é o gatilho pra verificar 
    campo.addEventListener("invalid", evento => evento.preventDefault());
    //para tirar a mensagem automática do formulário de preenchimento e poder costumizar as mensagens
}) 

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    console.log(campo.validity);
}

