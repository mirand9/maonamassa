
const btnAumentar = document.getElementById('Aumentar');
const btnDiminuir = document.getElementById('Diminuir');
const btnResetar = document.getElementById('Resetar');
const btnTema = document.getElementById('Alterar-tema'); // Lembre de atualizar o ID no HTML para 'Alterar-tema' se necessário
const meuBody = document.body;

let tamanhoAtual = localStorage.getItem("fontSize") || 16;

addEventListener('DOMContentLoaded', function() {
    meuBody.style.fontSize = tamanhoAtual + 'px';
});

btnAumentar.addEventListener('click', function() {
    tamanhoAtual = tamanhoAtual +2;
    meuBody.style.fontSize = tamanhoAtual + 'px';
    localStorage.setItem("fontSize", tamanhoAtual);
    
});

btnDiminuir.addEventListener('click', function() {
    tamanhoAtual = tamanhoAtual -2;
    meuBody.style.fontSize = tamanhoAtual + 'px';
    localStorage.setItem("fontSize", tamanhoAtual);
});

btnResetar.addEventListener('click', function() {
    tamanhoAtual = 16;
    meuBody.style.fontSize = tamanhoAtual + 'px';
    localStorage.setItem("fontSize", tamanhoAtual);
   
});   


btnTema.addEventListener('click', function() {
    meuBody.classList.toggle('dark-mode');
});


