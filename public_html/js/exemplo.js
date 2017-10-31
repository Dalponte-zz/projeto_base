function publicar() {
    $('.link').addClass('azul');
    $('#conteudo').css('padding', '20px');
    $('#conteudo').css('font-family', 'calibri');

    $('#conteudo').css('color', 'green');
}
function expandir(gatilho) {
    console.log(gatilho);

    /* verificar se a tag que tem a classe .expancao
     * possui a classe .visivel dentro do atributo "class"
     */
    if ($('.expancao').hasClass('visivel')) {
        // Se houver a classe visivel, deve remove-la
        $(gatilho).html('Expandir');
        $('.expancao').removeClass('visivel');
    } else {
        // Se não houver, deve adiciona-la
        $(gatilho).html('Ocultar'); // Muda o conteúdo da tag
        $('.expancao').addClass('visivel'); // Adiciona a classe
    }
}

function auto_destruir() {
    for (var indice = 0; indice < 200; indice++) {
        setTimeout(function () {
            $('body').css('background-color', 'red');
        }, 1000).setTimeout(function () {
            $('body').css('background-color', 'blue');
        }, 1000);

    }
}