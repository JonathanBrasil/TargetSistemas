// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

indice = 13
SOMA = 0
K = 0

while (K < indice) {
    K = K + 1; 
    SOMA = SOMA + K;
  }

  console.log(SOMA)

  //Resultado: 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
// próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function pertenceFibonacci(numero) {
    if (numero < 0) return false;

    let a = 0;
    let b = 1;

    while (a <= numero) {
        if (a === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

let numero = 91;
console.log(pertenceFibonacci(numero));

//91 não pertence


// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamentoDiario = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];

function calcularFaturamento(faturamentoDiario) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    for (let i = 0; i < faturamentoDiario.length; i++) {
        let valor = faturamentoDiario[i].valor;
        

        if (valor > 0) {
            somaFaturamento += valor;
            diasComFaturamento++;

            if (valor < menorValor) {
                menorValor = valor;
            }

            if (valor > maiorValor) {
                maiorValor = valor;
            }
        }
    }

    let mediaMensal = somaFaturamento / diasComFaturamento;
    let diasAcimaMedia = 0;

    for (let i = 0; i < faturamentoDiario.length; i++) {
        if (faturamentoDiario[i].valor > mediaMensal) {
            diasAcimaMedia++;
        }
    }

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaMedia: diasAcimaMedia
    };
}

// Teste
const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);






// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let SP = 67836.43
let RJ = 36678.66
let MG = 29299.88
let ES = 27165.48
let Outros = 19848.53

total = SP + RJ + MG + ES + Outros

function percentual(estado){
    porcentagem = estado / total * 100
    return porcentagem
}

console.log(percentual(SP)+"%")

//Resultado para SP: 37.5141362850136%



// 5) Escreva um programa que inverta os caracteres de um string.


function inverter(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

let texto = "Estagio Analise e Desenvolvimento";
console.log(inverter(texto));



