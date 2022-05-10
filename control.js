
// Regras:
// Palavra chave com 5 caracteres;
// Maximo de 6 tentetivas.

var opcaoDesejada = prompt("Bem vindo ao wordle! Selecione a opção desejada: \n1. Começar \n2. Regras \n3. Sair");
//[1 IF FUNCIONANDO]
if (opcaoDesejada == 1 || opcaoDesejada.toLowerCase == "começar") {
    // jogo inteiro
    var palavrasJogador = [];

    for (var contador = 1; contador <= 5; contador++) {
        var palavra = prompt("Agora precisamos que o jogador 1 digite 5 palavras de 5 letras, que serão sorteadas para o jogador 2 descobrir")

        if (palavra.length == 5) {
            palavrasJogador.push(palavra);
        } else {
            alert("Número de caracteres inválido. Reinicie a aplicação.");
        }
    }
    var palavraEscolhida = Math.floor(Math.random() * 5);
    palavraEscolhida = palavrasJogador[palavraEscolhida];

    var palavrasTentadas = [];
    var verificador = false;
    for (var contador2 = 1; contador2 <= 6; contador2++) {
        var tentativa = prompt("palavras tentadas:\n" + palavrasTentadas.join("\n") + "\nTentativa " + contador2);

        var mostrar = ""
        for (var contador3 = 0; contador3 < 5; contador3++) {
            var testadorDeLetra = palavraEscolhida.indexOf(tentativa[contador3])
            if (testadorDeLetra === -1) {
                mostrar += tentativa[contador3] + "# ";
            } else {
                if (tentativa[contador3] === palavraEscolhida[contador3]) {
                    mostrar += tentativa[contador3] + "! ";
                } else {
                    mostrar += tentativa[contador3] + "? ";
                }
            }
        }
        alert(mostrar);
        palavrasTentadas.push(mostrar);
        if (tentativa == palavraEscolhida) {
            break;
        }
    }
} else if (opcaoDesejada == 2 || opcaoDesejada.toLowerCase == "regras") {
    alert("Regras: \n\nDescubra a palavra certa em 6 tentativas. Depois de cada tentativa as peças mostram o quão perto você está da solução. \n\nT! U R M A \n\nA letra T! faz parte da palavra e está na posição correta. \n\nV I O? L A \n\nA letra O? faz parte da palavra mas em outra posição. \n\nP U L G# A \n\nA letra G# não faz parte da palavra. \n\nAs palavras podem possuir letras repetidas.");
    document.location.reload();
} else if (opcaoDesejada == 3 || opcaoDesejada.toLowerCase == "sair") {
    window.close();
}
