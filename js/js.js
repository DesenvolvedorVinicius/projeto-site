document.getElementById("botao").disabled = true;

    document.getElementById("input").addEventListener("input", function(event){

    var conteudo = document.getElementById("input").checked;

    //valida conteudo do input 
    if (conteudo!== null && conteudo !== '') {
        //habilita o botão
        document.getElementById("botao").disabled = false;
    } else {
        document.getElementById("botao").disabled = true;
    }
});