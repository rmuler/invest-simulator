document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os inputs
    const aporteInicialInput = document.getElementById('idaporteinicial');
    const aporteMensalInput = document.getElementById('idaportemensal');
    const tempoInput = document.getElementById('idtempo');

    // Seleciona os elementos onde serão exibidos os resultados
    const resultadoTotal = document.getElementById('resultado-total');
    const resultados = document.querySelectorAll('.resultados');

    // Rentabilidades anuais
    const rentabilidades = {
        poupanca: 0.06, // 6%
        tesouroPrefixado: 0.10, // 10%
        tesouroSelic: 0.1165, // 11.65%
        tesouroIpca: 0.055, // 5.50%
        cdbLc: 0.13, // CDI atual aproximado (pode ser atualizado)
        lciLca: 0.13 // CDI atual aproximado (pode ser atualizado)
    };

    // Função de cálculo
    function calcularInvestimento(inicial, mensal, periodo, rentabilidade) {
        return inicial + (mensal * periodo) * (1 + rentabilidade * (periodo / 12));
    }

    // Função para atualizar os resultados
    function atualizarResultados() {
        const aporteInicial = parseFloat(aporteInicialInput.value) || 0;
        const aporteMensal = parseFloat(aporteMensalInput.value) || 0;
        const tempo = parseInt(tempoInput.value) || 0;

        // Calcula o total investido (sem rentabilidade)
        const totalInvestido = aporteInicial + (aporteMensal * tempo);
        resultadoTotal.textContent = `R$ ${totalInvestido.toFixed(2)}`;

        // Atualiza os valores de cada tipo de investimento
        resultados[0].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.poupanca).toFixed(2)}`;
        resultados[1].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.tesouroPrefixado).toFixed(2)}`;
        resultados[2].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.tesouroSelic).toFixed(2)}`;
        resultados[3].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.tesouroIpca).toFixed(2)}`;
        resultados[4].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.cdbLc).toFixed(2)}`;
        resultados[5].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.lciLca).toFixed(2)}`;
    }

    // Adiciona eventos de input para atualizar os resultados ao alterar os valores
    aporteInicialInput.addEventListener('input', atualizarResultados);
    aporteMensalInput.addEventListener('input', atualizarResultados);
    tempoInput.addEventListener('input', atualizarResultados);
});
