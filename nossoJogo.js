/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack!")

const novoJogo = confirm("Quer iniciar uma nova rodada?")

    function blackJack() {   
}


if (novoJogo) {
  
    const cartaUsuarioUm = comprarCarta()
    const cartaUsuarioDois = comprarCarta()
    const cartaComputadorUm = comprarCarta()
    const cartaComputadorDois = comprarCarta()

    let pontuacaoUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor
    let pontuacaoComputador = cartaComputadorUm.valor + cartaComputadorDois.valor

    console.log(`"Usuário - cartas: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} - pontuação ${pontuacaoUsuario}"`)
    console.log(`"Computador - cartas: ${cartaComputadorUm.texto} ${cartaComputadorDois.texto} - pontuação ${pontuacaoComputador}"`)

    if (pontuacaoUsuario > pontuacaoComputador) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoComputador > pontuacaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoComputador) {
        console.log("Empate!")
    }

}else{
    console.log("O jogo acabou.")
}



