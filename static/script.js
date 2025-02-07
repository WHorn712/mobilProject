// script.js
function personalizarMovel() {
    const acabamentoSelecionado = document.querySelector('input[name="acabamento"]:checked').nextElementSibling.textContent;
    const corSelecionada = document.querySelector('input[name="cor"]:checked').nextElementSibling.textContent;
    const medidaSelecionada = document.querySelector('input[name="medida"]:checked').nextElementSibling.textContent;

    alert(`Configurações selecionadas:\nAcabamento: ${acabamentoSelecionado}\nCor: ${corSelecionada}\nMedida: ${medidaSelecionada}`);
}