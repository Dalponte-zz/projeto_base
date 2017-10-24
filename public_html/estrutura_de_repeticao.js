function calcular() {

    numero = document.getElementById('numero');
// obter o elemento lista 
    elemento = document.getElementById('lista');
// // Estrutura de repeticao FOR
// ; representa "fim do comando"

    elemento.innerHTML = '';

    for (indice = 10; // A iniciar
            indice > 0; // Teste a cada loop
            indice -= 1) { // Ao finalizar loop

        resultado = numero.value * indice;

        if (indice % 10 == 0) {
            cor = 'verde';
        } else {
            cor = 'vermelho';
        }

        elemento.innerHTML +=
                '<li class="' + cor + '">' + indice +
                ' x ' + numero.value +
                ' = ' + resultado +
                '</li>';

        taboada_2 = document.getElementById('taboada2');
        for (indice2 = 1; indice2 < 3; indice2++) {

            taboada_2.innerHTML += '<li>' + indice2
                    + ' x ' + indice
                    + ' = ' + indice2 * indice
                    + '</li>';

        } // Finaliza taboada 2


    } // Finaliza bloco o for

} // Finaiza boco da funcao