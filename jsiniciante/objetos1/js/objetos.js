var pessoa = {
    nome: 'Antonio',
    idade: 23,
}

console.log(pessoa.nome);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));

console.log(quadrado.perimetro(5));

console.log(Math.random());


var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
    metadeHeight() {
        return this.height / 2;
    }
}

// Método para verificar se existe uma propriedade no objeto
// usar o nome do objeto ex: menu.hasOwnProperty('color');

menu.color = '#000'; // Criando uma nova propriedade de fora do escopo do objeto.

var bg = menu.backgroundColor;

