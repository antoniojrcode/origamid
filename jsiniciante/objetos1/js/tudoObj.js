var nome = 'André';

nome.length; // Conta os caracteres
nome.charAt(1); // Diz a posição do caractere, iniciando por 0 no índice.
nome.replace('ré','rei'); // Primeiro argumento é o que desejo alterar e o segundo ele troca. Ex: Andrei

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

var btn = document.querySelector('.btn'); //Seleciona uma classe CSS

btn.addEventListener('click', function(){
    alert('Cliquei');
});