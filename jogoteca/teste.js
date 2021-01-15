const a = "Comprei rapadura e salsa com entusiasmo raríssimo";

function solucao(frase) {
    var resposta = "";
    let splitFrase = frase.split(' ');
    for (var i = 0; i < splitFrase.length; i++) {
        resposta += splitFrase[i][0];
    }
    return resposta;
} 


console.log(solucao(a));