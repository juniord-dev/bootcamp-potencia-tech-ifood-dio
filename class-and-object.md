# Classes e objetos

## Trabalhando com classes e objetos

> Como boa prática, as classes devem ter um método construtor. Exemplo:
~~~
class formaDeBolo {
  constructor(saborMassa, saborRecheio){
    this.saborMassa = saborMassa
    this.saborRecheio = saborRecheio
  }
}
~~~

### Instanciando um novo bolo (objeto da classe):
~~~
let boloFesta = new formaDeBolo("chocolate", "nutella")
console.log(boloFesta) // Saída -> formaDeBolo { saborMassa: 'massa de chocolate', saborRecheio: 'recheio de nutella'}
~~~

### Para retornar uma variável/propriedade do objeto:
~~~
console.log(boloFesta.saborRecheio)
Saída -> recheio de nutella
~~~

### Adicionando métodos (funções) à uma classe:
~~~
class formaDeBolo {
  constructor(saborMassa, saborRecheio){
    this.saborMassa = saborMassa
    this.saborRecheio = saborRecheio
  }

  escrever() {
    console.log('Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}.')
  }

}
boloFesta.escrever()

// Saída -> Um delicioso bolo de chocolate com recheio de nutella.
~~~
> Para adicionar um método à uma classe, não é necessário chamar "function" antes do mesmo.