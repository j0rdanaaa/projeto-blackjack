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

const jogo = confirm("Quer iniciar uma nova rodada?")
if( jogo === true) 
    console.log("Iniciando uma nova rodada")
   


if (jogo) {
    const carta1User = comprarCarta()
    const carta2User = comprarCarta()
    const carta1Pc = comprarCarta()
    const carta2Pc = comprarCarta()

    let pontuacaoUsuario = carta1User.valor + carta2User.valor
    let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

    console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

    if (pontuacaoUsuario => 21) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoPc => 21) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoPc) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}

