class hero {
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
  atacar() {
    let ataque = " "
    if (this.tipo == "Guerreiro") {
    ataque = "Espada";
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    else if (this.tipo == "Mago") {
      ataque = "Magia";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    else if (this.tipo == "Monge") {
      ataque = "Artes marciais";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    else if (this.tipo == "Ninja") {
      ataque = "Shuriken";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } 
    else {
      console.log("Tipo inválido.")
    }
  }
}

let heroiUm = new hero('Herói 1', 105, 'Monge')
heroiUm.atacar()
let heroiDois = new hero('Herói 2', 216, 'Guerreiro')
heroiDois.atacar()
let heroiTres = new hero('Herói 3', 94, 'Mago')
heroiTres.atacar()
let heroiQuatro = new hero('Herói 4', 302, 'Ninja')
heroiQuatro.atacar()
