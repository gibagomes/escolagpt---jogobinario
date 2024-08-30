let acertos = 0; // Inicializa o contador de acertos
let erros = 0; // Inicializa o contador de erros

// Gera um número decimal aleatório e o exibe na página
document.getElementById("gerarNumero").addEventListener("click", function() {
    const numeroDecimal = Math.floor(Math.random() * 256);
    document.getElementById("numeroDecimal").textContent = numeroDecimal;
});

// Atualiza as lâmpadas com base no valor das caixas de input
const caixas = document.querySelectorAll(".caixa");
caixas.forEach((caixa, index) => {
    caixa.addEventListener("input", function() {
        const valor = caixa.value;
        const lampada = document.getElementById(`lampada${index}`);
        if (valor === "1") {
            lampada.src = "images/lampada_acesa.webp";
        } else {
            lampada.src = "images/lampada_apagada.webp";
        }
    });
});

// Verifica se o número binário inserido é o correto
document.getElementById("verificar").addEventListener("click", function() {
    const numeroDecimal = parseInt(document.getElementById("numeroDecimal").textContent);
    let numeroBinario = "";
    caixas.forEach(caixa => {
        numeroBinario += caixa.value || "0";
    });

    const numeroUsuario = parseInt(numeroBinario, 2);
    
    let resultadoTexto = `Você marcou o número binário ${numeroBinario}, que corresponde ao número decimal ${numeroUsuario}. `;
    
    if (numeroUsuario === numeroDecimal) {
        resultadoTexto += "Parabéns! Você acertou!";
        acertos++;
    } else {
        resultadoTexto += `O número correto era ${numeroDecimal}. Tente novamente!`;
        erros++;
    }

    document.getElementById("resultado").textContent = resultadoTexto;
    document.getElementById("acertos").textContent = acertos;
    document.getElementById("erros").textContent = erros;
});

// Zera as caixas de input e redefine as lâmpadas para apagadas
document.getElementById("zerar").addEventListener("click", function() {
    caixas.forEach(caixa => {
        caixa.value = "";
        const lampada = document.getElementById(`lampada${caixa.id.slice(-1)}`);
        lampada.src = "images/lampada_apagada.webp";
    });
    document.getElementById("resultado").textContent = "";
});

// Reinicia o jogo, zerando contadores e caixas de input
document.getElementById("jogarNovamente").addEventListener("click", function() {
    acertos = 0;
    erros = 0;
    document.getElementById("acertos").textContent = acertos;
    document.getElementById("erros").textContent = erros;
    document.getElementById("resultado").textContent = "";
    caixas.forEach(caixa => {
        caixa.value = "";
        const lampada = document.getElementById(`lampada${caixa.id.slice(-1)}`);
        lampada.src = "images/lampada_apagada.webp";
    });
});
