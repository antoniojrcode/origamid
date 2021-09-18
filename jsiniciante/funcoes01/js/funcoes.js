function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado();

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if(cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

addEventListener('click', function() {
    console.log('Clicou');
});

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(30, 1.80);
//console.log(imc2(80, 1.80));

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(29));


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`

}

console.log(totalPaises);