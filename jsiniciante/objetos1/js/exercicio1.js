// EXERCICIOS DE OBJETOS

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Antonio',
    sobrenome: 'Junior',
    idade: 23,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
var pessoa = {
    nome: 'Antonio',
    sobrenome: 'Junior',
    idade: 23,
    exibirNome() {
        return `${this.nome} ${this.sobrenome}`
    },
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    nome: 'Bradock',
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return `${this.nome} está latindo!`
        } else {
            return `${this.nome} não lati para mulheres!`
        }
    }
}