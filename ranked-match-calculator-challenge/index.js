function matchBalance(victories, defeats) {
  let balance = victories - defeats
  if (balance < 10) {
    level = "Ferro"
  } else if (balance >= 11 && balance <= 20) {
    level = "Bronze"
  } else if (balance >= 21 && balance <= 50) {
    level = "Prata"
  } else if (balance >= 51 && balance <= 80) {
    level = "Ouro"
  } else if (balance >= 81 && balance <= 90) {
    level = "Diamante"
  } else if (balance >= 91 && balance <= 100) {
    level = "Lendário"
  } else if (balance >= 101) {
    level = "Imortal"
  } else {
    console.log("Saldo inválido")
  }
  
  console.log("O Herói tem um saldo de " + balance + " e está no nível " + level)
  
}
matchBalance(100, 50);
