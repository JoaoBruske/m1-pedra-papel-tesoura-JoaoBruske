/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2) {
    let vencedor;
  
    if (player1 === "Pedra" && player2 === "Tesoura") {
      vencedor = "Jogador 1";
    } else if (player1 === "Papel" && player2 === "Pedra") {
      vencedor = "Jogador 1";
    } else if (player1 === "Tesoura" && player2 === "Papel") {
      vencedor = "Jogador 1";
    } else if (player2 === "Pedra" && player1 === "Tesoura") {
      vencedor = "Jogador 2";
    } else if (player2 === "Tesoura" && player1 === "Papel") {
      vencedor = "Jogador 2";
    } else if (player2 === "Papel" && player1 === "Pedra") {
      vencedor = "Jogador 2";
    } else {
      return "Empate!";
    }
  
    return `${vencedor} venceu!`;
  }