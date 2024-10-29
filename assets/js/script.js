document.addEventListener("DOMContentLoaded", function () {
    // Inputs
    const aporteInicialInput = document.getElementById('idaporteinicial');
    const aporteMensalInput = document.getElementById('idaportemensal');
    const tempoInput = document.getElementById('idtempo');

    // Elementos onde serão exibidos os resultados
    const resultadoTotal = document.getElementById('resultado-total');
    const resultados = document.querySelectorAll('.resultados');

    // Rentabilidades anuais
    const rentabilidades = {
        poupanca: 0.06, // 6%
        tesouroPrefixado: 0.10, // 10%
        tesouroSelic: 0.1165, // 11.65%
        tesouroIpca: 0.055, // 5.50%
        cdbLc: 0.13, // CDI atual aproximado
        lciLca: 0.13 // CDI atual aproximado 
    };

    // Função de cálculo
    function calcularInvestimento(inicial, mensal, periodo, rentabilidade) {
        return inicial + (mensal * periodo) * (1 + rentabilidade * (periodo / 12));
    }

    // Atualizar os resultados
    function atualizarResultados() {
        const aporteInicial = parseFloat(aporteInicialInput.value) || 0;
        const aporteMensal = parseFloat(aporteMensalInput.value) || 0;
        const tempo = parseInt(tempoInput.value) || 0;

        // Total investido (sem rentabilidade)
        const totalInvestido = aporteInicial + (aporteMensal * tempo);
        resultadoTotal.textContent = `R$ ${totalInvestido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        // Atualiza os valores de cada tipo de investimento
        resultados[0].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.poupanca).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultados[1].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.tesouroPrefixado).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultados[2].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.tesouroSelic).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultados[3].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.tesouroIpca).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultados[4].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.cdbLc).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultados[5].textContent = `R$ ${calcularInvestimento(aporteInicial, aporteMensal, tempo, rentabilidades.lciLca).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    // Atualizar resultados
    aporteInicialInput.addEventListener('input', atualizarResultados);
    aporteMensalInput.addEventListener('input', atualizarResultados);
    tempoInput.addEventListener('input', atualizarResultados);
});
