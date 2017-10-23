
// Declarar uma função chamada exemplo_1
function exemplo_1() {
    // Acessar o console do navegador e escrever uma mensagem de inicio
    console.log('Exemplo 1: iniciando script...');

    // Acessar o documento html e obter o elemento que tiver o ID "ex1-numero" e acessar a propriedade "value".
    // Armazenar o conteúdo da propriedade "value" dentro de uma variavel chamada "numero"
    var numero = document.getElementById('ex1-numero').value;

    // Acessar o documento html e obter o elemento que tiver o ID "ex1-resultado" 
    // Colocar o conteúdo da variavel "numero" como conteúdo (HTML interno) deste elemento
    document.getElementById('ex1-resultado').innerHTML = numero;

    console.log('Exemplo 1: Script terminado!');
}

// Declarar uma função chamada exemplo_2
function exemplo_2() {
    console.log('Exemplo 2: iniciando script...');
    
    // Oter primeiro valor
    numero1 = document.getElementById('ex2-numero1').value;
    // Obter segundo valor
    numero2 = document.getElementById('ex2-numero2').value;

    // calcular
    resultado = numero1 * numero2;

    // Apresentar o resultado
    document.getElementById('ex2-resultado').innerHTML = resultado;

    console.log('Exemplo 2: Script terminado!');
}