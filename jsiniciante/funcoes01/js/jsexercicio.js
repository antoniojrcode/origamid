// Crie uma função para verificar se um valor é True
function verificarValor(valor) {
    return !!valor; // !! duas vezes exclamação diz se é falso ou true 
}

// Crie uma função matemática que retorna o perímetro de um quadrado
//lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado1, lado2, lado3, lado4) { //Eu
    const perimetro = lado1 + lado2 + lado3 + lado4;
    return perimetro;
}

function perimetroQuadrado(lado) { //professor
    return lado * 4;
}

// crie uma função que retorne o seu nome completo
// ela deve possuir os parêmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `Seu nome completo: ${nome} ${sobrenome}`; //Template String
}

// crie uma função que verifica se um número é par

function verificarNumero(valor) { 
    //Resolvido
    if((valor % 2) === 0) {
        return 'É par';
    } else {
        return 'É impar';
    }
}

// crie uma função que retorne o tipo de dado do argumento passado nela(typeof)

function tipoDado(dado) {
    return typeof dado;
}

addEventListener('scroll', function() {
    console.log('Seu nome: Antonio JUnior');
});

//Corrija o erro abaixo

var totalPaises = 193

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

// function jaVisitei(paisesVisitados) {
//     var totalPaises = 193;
//     return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
// }


console.log(precisoVisitar(20));
console.log(jaVisitei(20));