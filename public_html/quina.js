function jogar() {
    console.log('sorteando');
    obter_numeros();

    acertos = 0; // Contador
    sortear_numero(); // Sorteia um numero e verifica se teve acertos
    sortear_numero(); // Sorteia um numero e verifica se teve acertos
    sortear_numero(); // Sorteia um numero e verifica se teve acertos
    sortear_numero(); // Sorteia um numero e verifica se teve acertos
    sortear_numero(); // Sorteia um numero e verifica se teve acertos

    document.getElementById('resultado').value = acertos;

} // fechamento do bloco da função

function sortear_numero() {
    sorteio = Math.trunc(Math.random() * 10) + 1;
    /* Testar somente se o número sorteado é igual a 
     *  algum numero informado
     */
    if (sorteio == num1 || sorteio == num2 || sorteio == num3
            || sorteio == num4 || sorteio == num5) {
        acertos = acertos + 1;
    }
} // Fecha função sortear_numero

function obter_numeros() {
    num1 = document.getElementById('num-1').value;
    num2 = document.getElementById('num-2').value;
    num3 = document.getElementById('num-3').value;
    num4 = document.getElementById('num-4').value;
    num5 = document.getElementById('num-5').value;
}