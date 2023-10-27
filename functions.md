# Trabalhando com funções!

## Chamando funções simples

~~~
function inserirPao(){
  console.log("Preparando para inserir o pão")
  console.log("Finalizado) 
}

function torrar(){
  inserirPao() --> Função dentro de função
  console.log("Torrando pão")
}

torrar() --> Chamada de função
~~~

## Boas práticas

1. Executar apenas **uma ação** ou ter apenas **um objetivo** dentro de cada função.
> Exemplo:
~~~
function getData() { --> Primeira
  console.log("Pegando dados do usuário")
}
function checkValues() { --> Segunda
  console.log("Validando dados")
}
function sendToDatabase() { --> Terceira 
  console.log("Cadastrando dados")
}
~~~
2. Ter uma função *main* para **unir outras funções** em comum.
> Exemplo:
~~~
function main() {
  getData()
  checkValues()
  sendToDatabase()
}
main()
~~~
---

## Funções com parâmetros
> function(parâmetro){}
~~~
function torrar(pao){
  console.log("Torrada feita com " + pao)
}
torrar("pão de forma") // Exibe: 'Torrada feita com pão de forma'
torrar("pão de forma") // Exibe: 'Torrada feita com pão integral'
~~~

-> Variáveis utilizadas dentro de uma função não podem ser acessadas fora dela.

### Interpolação de strings
> ${parâmetro/variável}
~~~
function createStringConnection(databaseName, user, pass) {
  console.log('connect:CONNECT;user=${user};passa=${pass};initial_database=${databaseName})
}
~~~

### Detalhes importantes:
* Caso um parâmetro não seja inserido ao chamar a função, é importante ter um parâmetro _defalt_.
    - Exemplo:
    ~~~
    function torrar(pao, nome = "Cliente"){
    console.log("Torrada feita com " + pao)
    console.log("Ele é um pedido de " + nome)
    }
    torrar("pão de forma")
      ~~~
* Se for necessário passar muitos parâmetros, é ideal criar mais funções.

## Funções com retorno
> Exibindo apenas o resultado
~~~
function soma(numA, numB){
  let somatorio = numA + numB
  console.log(somatorio)
}
soma(1,2)
~~~
> Retornando valor para utilizar externamente.
~~~
function soma(numA, numB) {
  let somatorio = numA + numB
  return resultado
}

let resultado = soma(5, 10)
console.log("O resultado dessa função é " + resultado)
~~~
> * Uma função só pode retornar um único valor.

> Exemplo de função completa para pegar o primeiro nome de uma pessoa:
~~~
function getFirstName(name) {
  let firstName = name.split(" ")[0] // Divide o nome a cada "espaço" e retorna o primeiro índice do array.
  return firstName
}

let userName = getFirstName("Junior Dantas")
console.log("Seja bem-vindo, " + userName)

// Saída => "Seja bem vindo, Junior"
~~~
> Caso queira solicitar o caractere que separa os nomes:
~~~
function getFirstName(name, splitChar = " ") // Pede o caractere que divide o nome e adiciona um padrão, caso não seja informado. {
  let firstName = name.split(splitChar)[0] // Divide o nome a cada "caractere" e retorna o primeiro índice do array.
  return firstName
}
~~~
