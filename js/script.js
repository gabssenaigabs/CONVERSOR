import { valores } from './formulas.js';

const categoriaSelect = document.getElementById("categoria");
const origemSelect = document.getElementById("origem");
const destinoSelect = document.getElementById("destino");
const resultadoDiv = document.getElementById("resultado");

window.atualizarUnidades = function () {
    const categoria = categoriaSelect.value;
    const unidades = valores[categoria].unidades;

    origemSelect.innerHTML = "";
    destinoSelect.innerHTML = "";

    unidades.forEach(unidade => {
        origemSelect.add(new Option(unidade, unidade));
        destinoSelect.add(new Option(unidade, unidade));
    });
};

window.converter = function () {
    const categoria = categoriaSelect.value;
    const valor = parseFloat(document.getElementById("valor").value);
    const origem = origemSelect.value;
    const destino = destinoSelect.value;

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Por favor, insira um valor válido.";
        return;
    }

    const resultado = valores[categoria].converter(valor, origem, destino);
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
};

atualizarUnidades();
