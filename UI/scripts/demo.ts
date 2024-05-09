import prompt from 'prompt-sync';
import { z800 } from './automovel';


let teclado = prompt();
let option: number = 0;

while(option != 7){
    console.log('+===========================+');
    console.log('||0 Ligar chave            ||');
    console.log('||1 Partida                ||');
    console.log('||2 Acelerar               ||');
    console.log('||3 Frear                  ||');
    console.log('||4 Trocar marcha          ||');
    console.log('||5 Painel                 ||');
    console.log('||6 Computador de bordo    ||');
    console.log('||7 Desligar motor e sair  ||');
    console.log('+===========================+');

option = +teclado("Escolha uma ação!");

switch (option) {
    case 0:
        z800.ligarChave();
        break;
    case 1:
        z800.partida();
        break;
    case 2:
        z800.acelerar();
        break;
    case 3:
        z800.frear();
        break; 
    case 4:
        z800.trocarMarcha();
        break;
    case 5:
        z800.painel();
        break;
    case 5:
        z800.computadorDeBordo();
        break;    
}};