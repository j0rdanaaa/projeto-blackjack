    function desafioBlackJack (){
      let usuario = []
      let pc = []

      let novoJogo = confirm('Bem vindo ao jogo Blackjack!\nQuer inciar uma nova rodada?')

      if(novoJogo){
         
         let darCartas = false
         while(!darCartas){
            usuario.push(comprarCarta())
            usuario.push(comprarCarta())
            pc.push(comprarCarta())
            pc.push(comprarCarta())

          if (
            (usuario[0].valor === 11 && usuario[1].valor === 11) ||
             (pc[0].valor === 11 && pc[1].valor === 11)
          ) {
          usuario = []
          pc = []
          } else {
            darCartas = true
          }
          }
          

         let textoUsuario = `Jogador:`
         let textoPc = `Computador:`

         let valorUsuario = 0
         let valorPc = 0

         for (let i = 0; i < usuario.length; i++) {
         textoUsuario += usuario[i].texto + " "
         valorUsuario += usuario[i].valor 
         
         }
         for (let i = 0; i < pc.length; i++){
         textoPc += pc[i].texto + " "
         valorPc += pc[i].valor
         }

         let comprandoCarta = true

         while (comprandoCarta) {
         if (valorUsuario > 21){
         break
         }
         let  confirmandoCompra = confirm(`${textoUsuario} \nA carta revelada do computador é ${pc[0].texto}` + "\n"+
         "Deseja comprar mais uma carta?") 

         if(confirmandoCompra) {
            let cartas = comprarCarta()
            usuario.push(cartas)
            valorUsuario += cartas.valor
            textoUsuario += `${cartas.texto}`
          } else {
            comprandoCarta = false
          }
          }
          while (valorPc <= valorUsuario && valorUsuario <= 21){

            let newCarta = comprarCarta()
            pc.push(newCarta)
            valorPc += newCarta.valor
            textoPc += `${newCarta.texto}`
          }
          let resultado = ""

          if (valorUsuario > 21){
          resultado = "O computador ganhou!!"
          }else if (valorPc > 21){
          resultado = "O jogador ganhou!"

          }else if(valorPc > valorUsuario) {
          resultado = "O computador ganhou!"

          }else if(valorUsuario > valorPc) {
          resultado = "o Jogador ganhou"
          } else {
          resultado = "Empate!"
          }
        
          alert(`${textoUsuario} \nPontuação do jogador: ${valorUsuario}\n${textoPc} \nPontuação do computador: ${valorPc}\n${resultado}`)
        
       
       
      } else {
         let fimDoJogo = alert(`O jogo acabou!`)
      }
   }

        
      
    desafioBlackJack()