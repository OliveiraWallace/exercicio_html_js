// Seleciona os elementos que vamos monitorar (formulario)
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');


formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulario

    const campaA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Uso do "textContent" por ser mais seguro que "innerHTML", pois trabalha apenas com textos e não leva em conta as tags
    if (campaA > campoB) {
        mensagem.textContent = 'Formulário válido: Campo B é maior que campo A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que campo A.';
        mensagem.style.color = 'red';
    }
});
