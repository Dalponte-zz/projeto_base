// Ao carregar a página mudar todas as tags com classe .num para o conteúdo incrementalmente adicionando +1
window.onload = function () {
    // Obter os elementos com classe .num
    var elements = document.getElementsByClassName('num');
    // Percorrer cada um dos encontrados
    for (var i = 0; i < elements.length; i++) { // variavel "elements" é um array
        // Mudar seu conteúdo incrementalmente
        elements[i].innerHTML = i + 1; // Mais um porque o contador começa em 0
    }
};

function verifica_estoque() {

    var produtos = document.getElementsByClassName('quantidade');

    // a variavel "produtos" é um array
    console.log(produtos);

    // Percorrer cada um dos encontrados
    for (var i = 0; i < produtos.length; i++) { // variavel "elements" é um array
        // Mudar seu conteúdo incrementalmente
        console.log(produtos[i].innerHTML);

        // Adicionar classe se não houver. Se houver, remove-la.
        produtos[i].classList.toggle('teste');
    }

}


function  fatorial() {
    console.log('Calculando fatorial');
    numero = document.getElementById('numero').value;
    if (numero < 0){
        numero = numero * -1;
    }

    resultado = 1;
    for (indice = 1; indice <= numero; indice += 1) {
        resultado = resultado * indice;
    }
}
