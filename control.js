
// Regras:
// Palavra chave com 5 caracteres;
// Maximo de 6 tentetivas.

debugger


var opcaoDesejada = prompt("Bem vindo ao worlde! Selecione a opção desejada: \n1. Começar \n2. Regras \n3. Sair");
 //[1 IF FUNCIONANDO]
if (opcaoDesejada == 1 || opcaoDesejada.toLowerCase == "começar") {
    // jogo inteiro
    var palavrasJogador = [];

    for (var contador = 1; contador <= 1; contador++) {
        var palavra = prompt("Agora precisamos que o jogador 1 digite 5 palavras de 5 letras, que serão sorteadas para o jogador 2 descobrir")
        
        if (palavra.length == 5) {
            palavrasJogador.push(palavra);
        } else {
            alert("Número de caracteres inválido. Reinicie a aplicação.");
        }
    }
    var palavraEscolhida = Math.floor(Math.random() * 5);
    palavraEscolhida = palavrasJogador[palavraEscolhida];
    
    var verificador = false;
    for (var segundoContador = 1; segundoContador <= 6; segundoContador ++) {
        var tentativa = prompt("");
        if (tentativa == palavraEscolhida){
            verificador = true;
            break;
        } else {
        // Casca
        // aviao
            for (terceiroContador = 0; terceiroContador < 5; terceiroContador++)
                for (quartoContador = 0; quartoContador < 5; quartoContador++)
                    if (palavraEscolhida[terceiroContador] == tentativa[contadorContador])
                        var acumuladora = acumuladora++;
        }
    }


} else if (opcaoDesejada == 2 || opcaoDesejada.toLowerCase == "regras") {
    alert("Regras: \n\nDescubra a palavra certa em 6 tentativas. Depois de cada tentativa as peças mostram o quão perto você está da solução. \n\nT! U R M A \n\nA letra T! faz parte da palavra e está na posição correta. \n\nV I O? L A \n\nA letra O? faz parte da palavra mas em outra posição. \n\nP U L G# A \n\nA letra G# não faz parte da palavra. \n\nOs acentos são preenchidos automaticamente, e não são considerados nas dicas. \n\nAs palavras podem possuir letras repetidas.");
} else if (opcaoDesejada == 3 || opcaoDesejada.toLowerCase == "sair") {
    window.close();
}

