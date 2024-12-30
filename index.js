//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
// Função para calcular a posição final do herói
function calcularPosicaoFinal(posicaoInicial, totalPassos) {
  // Verifica se os valores são números inteiros positivos
  if (!Number.isInteger(posicaoInicial) || posicaoInicial < 0 || !Number.isInteger(totalPassos) || totalPassos < 0) {
    return "Valores de entrada inválidos. Por favor, insira números inteiros positivos.";
  }

  return posicaoInicial + totalPassos;
}

// Primeira entrada
const posicaoInicial1 = parseInt(gets());
const totalPassos1 = parseInt(gets());
const posicaoFinal1 = calcularPosicaoFinal(posicaoInicial1, totalPassos1);
print("Posicao final do heroi:", posicaoFinal1);