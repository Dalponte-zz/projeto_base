// {} chaves => Define um bloco de código
// [] colchetes => conjunto de dados
// () parenteses => parâmetros de função

function enviar() {
    // obter nome da página
    nome = document
            .getElementById('nome')
            .value;
    console.log(nome);
    // Obter descrição da página
    descricao = document
            .getElementById('descricao')
            .value;
    console.log(descricao);
    // Obter o selecionado do <select> 
    escolaridade = document
     .getElementById('escolaridade');
    console.log(escolaridade.selected);
    // Obter a data de nascimento
    
    
}