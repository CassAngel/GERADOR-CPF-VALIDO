"use strict";
//FUNÇÃO PARA GERAR UM NÚMERO DE CPF VÁLIDO xxx.xxx.xxx-xx
function generateCPF() {
    const generateDigit = (base) => {
        const sum = base.split('').reduce((acc, digit, i) => {
            return acc + Number(digit) * (base.length + 1 - i);
        }, 0);
        const remainder = (sum * 10) % 11;
        return remainder === 10 ? 0 : remainder;
    };
    let base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
    const firstDigit = generateDigit(base);
    base += firstDigit;
    const secondDigit = generateDigit(base);
    base += secondDigit;
    return base.replace(/(.{3})(.{3})(.{3})(.{2})/, '$1.$2.$3-$4');
}
//Config botão
const button = document.getElementById('generate-btn');
const cpfDisplay = document.getElementById('cpf-display');
button.addEventListener('click', () => {
    const cpf = generateCPF(); //chama e armazena meus 11 numeros hehe
    cpfDisplay.textContent = ` CPF GERADO: ${cpf} `;
});
