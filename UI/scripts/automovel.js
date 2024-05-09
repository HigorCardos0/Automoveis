"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.z800 = exports.MotoEsportiva = exports.automovel = exports.Funcionamento = void 0;
var prompt_sync_1 = require("prompt-sync");
var Funcionamento = /** @class */ (function () {
    function Funcionamento(combustivel, pneuPressao) {
        this._bateria = 100;
        this._desgaste = 0;
        this._partida = 0;
        this._energia = 0;
        this._marchaAtual = 0;
        this._temperatura = 0;
        this._vidaPneu = 100;
        this._combustivel = combustivel;
        this._pneuPressao = pneuPressao;
    }
    Funcionamento.prototype.ligarChave = function () {
        this._energia += 1;
        this._bateria -= 30;
        var teclado = (0, prompt_sync_1.default)();
        var option = 0;
        while (option != 3) {
            console.log('+===========================+');
            console.log('||1 Aguardar 40 segundos   ||');
            console.log('||2 Aguardar 70 segundos   ||');
            console.log('||3 Parar de aguardar      ||');
            console.log('+===========================+');
            option = +teclado("Escolha uma ação!");
            switch (option) {
                case 1:
                    this._bateria -= 40;
                    console.log('Aguardando');
                    break;
                case 2:
                    this._bateria -= 60;
                    console.log('Aguardando');
                    break;
            }
            ;
        }
        ;
    };
    ;
    return Funcionamento;
}());
exports.Funcionamento = Funcionamento;
;
var automovel = /** @class */ (function (_super) {
    __extends(automovel, _super);
    function automovel(nome, trocarMarcha, rpmMax, topspeed, combustivel, pneuPressao) {
        var _this = _super.call(this, combustivel, pneuPressao) || this;
        _this._velocidadeAtual = 0;
        _this._rpm = 0;
        _this._nome = nome;
        _this._trocarMarcha = trocarMarcha;
        _this._rpmMaxima = rpmMax;
        _this._velocidadeMax = topspeed;
        _this._preco = _this.preco();
        return _this;
    }
    ;
    Object.defineProperty(automovel.prototype, "settest", {
        set: function (newname) {
            this._nome = newname;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(automovel.prototype, "nomePelaClasse", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    ;
    automovel.prototype.painel = function () {
        if (this._energia == 1 && this._bateria > 10) {
            console.log('======================');
            console.log("Rota\u00E7\u00E3o atual ".concat(this._rpm, "\nvelocidade atual ").concat(this._velocidadeAtual, " \n marcha atual ").concat(this._marchaAtual));
            this._bateria -= 30;
        }
        else {
            console.log('Painel indisponivel pois a chave não esta ligada ou a bateria acabou !');
        }
        ;
    };
    ;
    automovel.prototype.partida = function () {
        if (this._energia == 1 && this._bateria > 10) {
            this._partida = +1;
            console.log('======================');
            console.log("".concat(this._nome, " esta pronto para uso!!!"));
            this._bateria += 60;
        }
        else {
            console.log("Falta de energia impossivel ligar ".concat(this._nome, " verifique se a chave esta ligada"));
        }
        ;
    };
    ;
    automovel.prototype.acelerar = function () {
        if (this._velocidadeAtual < this._velocidadeMax && this._rpm < this._rpmMaxima && this._partida == 1) {
            var teclado = (0, prompt_sync_1.default)();
            var option = 0;
            while (option != 8) {
                console.log('+===========================+');
                console.log('||1 30                     ||');
                console.log('||2 70                     ||');
                console.log('||3 120                    ||');
                console.log('||4 170                    ||');
                console.log('||5 200                    ||');
                console.log('||6 240                    ||');
                console.log('||7 269                    ||');
                console.log('||8 parar de acelerar      ||');
                console.log('+===========================+');
                option = +teclado("Escolha uma velocidade !");
                switch (option) {
                    case 1:
                        if (this._velocidadeAtual < 40 && this._marchaAtual == 1 && this._partida == 1) {
                            this._velocidadeAtual = 30;
                            this._rpm = 6;
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        else {
                            console.log('Essa velocidade não é possivel pois nao cumpre com algum dos requisitos necessario do motor');
                        }
                        ;
                        break;
                    case 2:
                        if (this._velocidadeAtual < 70 && this._partida == 1) {
                            if (this._marchaAtual == 1 || this._marchaAtual == 2 || this._marchaAtual == 3) {
                                this._velocidadeAtual = 70;
                                this._rpm = 8;
                                console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                            }
                            else {
                                console.log('Marcha incorreta impossivel acelerar');
                            }
                            ;
                        }
                        else {
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        ;
                        break;
                    case 3:
                        if (this._velocidadeAtual < 119 && this._partida == 1) {
                            if (this._marchaAtual == 2 || this._marchaAtual == 3 || this._marchaAtual == 4) {
                                this._velocidadeAtual = 120;
                                this._rpm = 10;
                                console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                            }
                            else {
                                console.log('Marcha incorreta impossivel acelerar');
                            }
                            ;
                        }
                        else {
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        ;
                        break;
                    case 4:
                        if (this._velocidadeAtual < 169 && this._partida == 1) {
                            if (this._marchaAtual >= 3) {
                                this._velocidadeAtual = 170;
                                this._rpm = 11;
                                console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                            }
                            else {
                                console.log('Marcha incorreta impossivel acelerar');
                            }
                            ;
                        }
                        else {
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        ;
                        break;
                    case 5:
                        if (this._velocidadeAtual < 200 && this._partida == 1) {
                            if (this._marchaAtual >= 4) {
                                this._velocidadeAtual = 200;
                                this._rpm += 8;
                                console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                            }
                            else {
                                console.log('Marcha incorreta impossivel acelerar');
                            }
                            ;
                        }
                        else {
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        ;
                        break;
                    case 6:
                        if (this._velocidadeAtual < 241 && this._partida == 1) {
                            if (this._marchaAtual >= 5) {
                                this._velocidadeAtual = 240;
                                this._rpm += 9;
                                console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                            }
                            else {
                                console.log('Marcha incorreta impossivel acelerar');
                            }
                            ;
                        }
                        else {
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        ;
                        break;
                    case 7:
                        if (this._velocidadeAtual < 271 && this._partida == 1) {
                            if (this._marchaAtual == 6) {
                                this._velocidadeAtual = this._velocidadeMax -= 1;
                                this._rpm = this._rpmMaxima;
                                console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                            }
                            else {
                                console.log('Marcha incorreta impossivel acelerar');
                            }
                            ;
                        }
                        else {
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
                        }
                        ;
                        break;
                }
                ;
            }
            ;
        }
        else {
            console.log('Sistema não autorizou acelerar verifique se a moto esta ligada');
        }
        ;
    };
    ;
    automovel.prototype.frear = function () {
        if (this._velocidadeAtual > 1 && this._partida == 1) {
            var teclado = (0, prompt_sync_1.default)();
            var option = 0;
            while (option != 8) {
                console.log('+=================================+');
                console.log('||1 Frear gradativamente(Parar)  ||');
                console.log('||1 Frear bruscamente(emergencia)||');
                console.log('+=================================+');
                option = +teclado("Escolha uma marcha!");
                switch (option) {
                    case 1:
                        if (this._velocidadeAtual > 100) {
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 80;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 50;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 30;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 0;
                            console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " "));
                        }
                        else if (this._velocidadeAtual > 200) {
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 180;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 150;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 130;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 90;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 40;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 0;
                            console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " "));
                        }
                        else if (this._velocidadeAtual < 1) {
                            console.log("".concat(this._nome, " Ja esta parado"));
                        }
                        ;
                        break;
                    case 2:
                        if (this._velocidadeAtual > 100) {
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 30;
                            this._vidaPneu -= 30;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 0;
                            console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " o pneu foi gasto em ").concat(this._vidaPneu, "% "));
                        }
                        else if (this._velocidadeAtual > 150) {
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 100;
                            this._vidaPneu -= 30;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 40;
                            this._vidaPneu -= 30;
                            console.log("Reduzindo velocidade, velocidadew atual ".concat(this._velocidadeAtual));
                            this._velocidadeAtual = 0;
                            console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " o pneu foi gasto em ").concat(this._vidaPneu, "% "));
                        }
                        break;
                }
            }
        }
        else {
            console.log("".concat(this._nome, " Esta parado"));
        }
    };
    automovel.prototype.trocarMarcha = function () {
        if (this._energia == 1) {
            var teclado = (0, prompt_sync_1.default)();
            var option = 0;
            while (option != 8) {
                console.log('+===========================+');
                console.log('||1 1 marcha               ||');
                console.log('||2   neutro               ||');
                console.log('||3 2 marcha               ||');
                console.log('||4 3 marcha               ||');
                console.log('||5 4 marcha               ||');
                console.log('||6 5 marcha               ||');
                console.log('||7 6 marcha               ||');
                console.log('||8 Parar as trocas        ||');
                console.log('+===========================+');
                option = +teclado("Escolha uma marcha!");
                switch (option) {
                    case 1:
                        if (this._velocidadeAtual >= 0 && this._velocidadeAtual < 50) {
                            this._marchaAtual = 1;
                            console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o esta em ").concat(this._rpm, "!"));
                            console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        }
                        else {
                            console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                        }
                        ;
                        break;
                    case 2:
                        this._marchaAtual = 0;
                        console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o esta em ").concat(this._rpm, "!"));
                        console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        break;
                    case 3:
                        if (this._velocidadeAtual < 150 && this._velocidadeAtual > 50) {
                            this._marchaAtual = 2;
                            this._rpm -= 5;
                            console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o atual esta em ").concat(this._rpm, "!"));
                            console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        }
                        else {
                            console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                        }
                        ;
                        break;
                    case 4:
                        if (this._velocidadeAtual < 183 && this._velocidadeAtual > 69) {
                            this._marchaAtual = 3;
                            this._rpm -= 5;
                            console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o atual esta em ").concat(this._rpm, "!"));
                            console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        }
                        else {
                            console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                        }
                        ;
                        break;
                    case 5:
                        if (this._velocidadeAtual < 210 && this._velocidadeAtual > 90) {
                            this._marchaAtual = 4;
                            this._rpm -= 5;
                            console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o atual esta em ").concat(this._rpm, "!"));
                            console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        }
                        else {
                            console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                        }
                        ;
                        break;
                    case 6:
                        if (this._velocidadeAtual < 250 && this._velocidadeAtual > 110) {
                            this._marchaAtual = 5;
                            this._rpm -= 5;
                            console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o atual esta em ").concat(this._rpm, "!"));
                            console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        }
                        else {
                            console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                        }
                        ;
                        break;
                    case 7:
                        if (this._velocidadeAtual < 271 && this._velocidadeAtual > 140) {
                            this._marchaAtual = 6;
                            this._rpm -= 5;
                            console.log("Voc\u00EA engatou a ".concat(this._marchaAtual, " marcha sua rota\u00E7\u00E3o atual esta em ").concat(this._rpm, "!"));
                            console.log("Velocidade atual ".concat(this._velocidadeAtual, "!"));
                        }
                        else {
                            console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                        }
                        ;
                        break;
                }
                ;
            }
            ;
        }
        ;
    };
    ;
    automovel.prototype.computadorDeBordo = function () {
        if (this._energia == 1) {
            console.log('Bateria atual ' + this._bateria + '%');
            console.log('Combustivel atual ' + this._combustivel);
            console.log('Funcionamento do motor ' + this._desgaste);
        }
        ;
    };
    ;
    automovel.prototype.preco = function () {
        return Math.floor(Math.random() * 37000);
    };
    ;
    return automovel;
}(Funcionamento));
exports.automovel = automovel;
;
var MotoEsportiva = /** @class */ (function (_super) {
    __extends(MotoEsportiva, _super);
    function MotoEsportiva(nome, trocarMarcha, rpmmax, topspeed, carenagem, trackDay, combustivel, pneuPressao) {
        var _this = _super.call(this, nome, trocarMarcha, rpmmax, topspeed, combustivel, pneuPressao) || this;
        _this.carenagem = carenagem;
        _this.trackDay = trackDay;
        return _this;
    }
    return MotoEsportiva;
}(automovel));
exports.MotoEsportiva = MotoEsportiva;
;
exports.z800 = new MotoEsportiva('z800', true, 14, 270, false, false, 20, 42);
