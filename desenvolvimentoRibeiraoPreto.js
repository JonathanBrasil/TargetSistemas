// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

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

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
// além de informar a quantidade de vezes em que ela ocorre.

function contadorA(str) {

    let palavra = str.toLowerCase();
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === 'a') {
            contador++;
        }
    }

    // Verificar se a letra 'a' foi encontrada e retornar o resultado
    if (contador > 0) {
        return `A letra 'a' aparece  ${contador} vezes na string.`;
    } else {
        return "A letra 'a' não aparece na string";
    }
}

let texto = "Teste para estágio de Desenvolvimento, Target";
let resultado = contadorA(texto);
console.log(resultado); 


//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

indice = 12
SOMA = 0
K = 1

while (K < indice) {
    K = K + 1; 
    SOMA = SOMA + K;
  }

  console.log(SOMA)

//   SOMA = 77

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____

a = 9; //numeros impares
b = 128; //Dobro do numero anterior
c = 49; //Numeros ao quadrado
d = 100; //Numeros positivos ao quadrado
e = 13; //soma dos 2 anteriores
f = 20;


// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, 
// mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
//  Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

/* Antes de ir até uma das deixaria o interruptor 1 ligado por tempo suficiente até esquentar a lampada;
Após isso desligaria o interruptor 1 e deixaria somente o interruptor 2 ligado e iria até uma das salas; 

Ao chegar na sala, se a lampada estiver desligada e quente = interruptor 1;
caso esteja ligada =  interruptor 2
caso esteja desligada e fria = interruptor 3; 

Dessa forma consigo garantir descobrir o interruptor de uma das salas na primeira ida;
O proximo passo seria, a partir disso, descobrir o interruptor da proxima sala e ultima: 

- Após descobrir o interruptor de uma das salas, deixaria esse e outro interruptor desligado
- com dois interruptores desligados e outro ligado, iria até outra sala:
Caso esteja desligado, por elimanção saberei a qual pertence e se ligado também. 
*/




