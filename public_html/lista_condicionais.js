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


function verificar_faixa_etaria() {
    dia = document.getElementById('ex1-dia').value;
    mes = document.getElementById('ex1-mes').value;
    ano = document.getElementById('ex1-ano').value;

    hoje = new Date();
    idade = hoje.getFullYear() - ano;

    mes_maior = mes > hoje.getMonth() + 1;//verifica mes
    mes_igual = mes == hoje.getMonth() + 1;//verifica mes
    dia_maior = dia > hoje.getDate();// verifica dia

    if (mes_maior) {
        idade = idade - 1;
    }
    if (mes_igual && dia_maior) {
        idade = idade - 1;
    }
    console.log(idade);

    if (idade < 13) {
        faixa_etaria = 'Criança';
    } else if (idade < 18) {
        faixa_etaria = 'Adolecente';
    } else if (idade < 26) {
        faixa_etaria = 'Jovem';
    } else if (idade < 60) {
        faixa_etaria = 'Adulto'
    } else {
        faixa_etaria = 'Idoso';
    }
    
    document.getElementById('ex1-resultado').innerHTML = faixa_etaria;
}