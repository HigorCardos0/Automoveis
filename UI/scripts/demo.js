"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var automovel_1 = require("./automovel");
var teclado = (0, prompt_sync_1.default)();
var option = 0;
while (option != 7) {
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
            automovel_1.z800.ligarChave();
            break;
        case 1:
            automovel_1.z800.partida();
            break;
        case 2:
            automovel_1.z800.acelerar();
            break;
        case 3:
            automovel_1.z800.frear();
            break;
        case 4:
            automovel_1.z800.trocarMarcha();
            break;
        case 5:
            automovel_1.z800.painel();
            break;
        case 5:
            automovel_1.z800.computadorDeBordo();
            break;
    }
}
;
