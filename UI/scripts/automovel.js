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
        var option = 0;
        while (option != 3) {
            console.log('+===========================+');
            console.log('||1 Aguardar 40 segundos   ||');
            console.log('||2 Aguardar 70 segundos   ||');
            console.log('||3 Parar de aguardar      ||');
            console.log('+===========================+');

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
const _Funcionamento = Funcionamento;

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
            console.log("Rota\u00E7\u00E3o atual ".concat(this._rpm, "\nvelocidade atual ").concat(this._velocidadeAtual, " \n marcha atual ").concat(this._marchaAtual));
            this._bateria -= 30;
        }
        else {
            console.log('Painel indisponivel pois a chave não esta ligada ou a bateria acabou !');
        }
        ;
    };
    ;
    automovel.prototype.ignicao = function () {
        this._energia += 1;
        this._bateria -= 30;
        alert("Chave ligada pronta para partida")
        }
    ;
    automovel.prototype.partida = function () {
        if (this._energia == 1 && this._bateria > 10) {
            this._partida = +1;
            alert("".concat(this._nome, " esta pronto para uso!!!"));
            this._bateria += 60;
        }
        else {
            alert("Falta de energia impossivel ligar ".concat(this._nome, " verifique se a chave esta ligada"));
        }
        ;
    };
    ;
    automovel.prototype.acelerar30 = function () {
        if (this._velocidadeAtual < 40 && this._marchaAtual == 1 ) {
            this._velocidadeAtual = 30;
            this._rpm = 3;
            this.painel2();
        }
        else {
            alert('Essa velocidade não é possivel pois nao cumpre com algum dos requisitos necessario do motor');
        }
        ;
    }

    automovel.prototype.acelerar70 = function () {
        if (this._marchaAtual < 4) {
            if (this._marchaAtual == 1) {
                this._velocidadeAtual = 70;
                this._rpm = 10;
                this.painel2();
            }else if( this._marchaAtual == 2 ){
                this._velocidadeAtual = 70;
                this._rpm = 7;
                this.painel2();
            }else if(this._marchaAtual == 3){
                this._velocidadeAtual = 70;
                this._rpm = 3;
                this.painel2();
            }
        }else {
            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
        }
        ;
    }

    automovel.prototype.acelerar120 = function () {
        if (this._marchaAtual > 1 && this._marchaAtual < 5) {
            if (this._marchaAtual == 2) {
                this._velocidadeAtual = 120;
                this._rpm = 10;
                this.painel2();
            }else if(this._marchaAtual == 3){
                this._velocidadeAtual = 120;
                this._rpm = 7;
                this.painel2();
            }else if(this._marchaAtual == 4){
                this._velocidadeAtual = 120;
                this._rpm = 5;
                this.painel2();
            }else {
                console.log('Marcha incorreta impossivel acelerar');
            };
        }else {
            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
        };
    };
    
    automovel.prototype.acelerar170 = function () {
        if (this._marchaAtual > 2) {
            if (this._marchaAtual == 3) {
                this._velocidadeAtual = 170;
                this._rpm = 13;
                this.painel2();
            }else if(this._marchaAtual == 4){
                this._velocidadeAtual = 170;
                this._rpm = 9;
                this.painel2();
            }else if(this._marchaAtual == 5){
                this._velocidadeAtual = 170;
                this._rpm = 7;
                this.painel2();
            }else if(this._marchaAtual == 6){
                this._velocidadeAtual = 170;
                this._rpm = 6;
                this.painel2();
            }else {
                console.log('Marcha incorreta impossivel acelerar');
            };
            
        }else{
            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
        };
    };

    automovel.prototype.acelerar200 = function () {
        if (this._marchaAtual > 3) {
            if (this._marchaAtual == 4) {
                this._velocidadeAtual = 200;
                this._rpm = 13;
                this.painel2();
            }else if(this._marchaAtual == 5){
                this._velocidadeAtual = 200;
                this._rpm = 9;
                this.painel2();
            }else if(this._marchaAtual == 6){
                this._velocidadeAtual = 200;
                this._rpm = 8;
                this.painel2();
            }else {
                console.log('Marcha incorreta impossivel acelerar');
            };
        }else {
            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
        };
    };

    automovel.prototype.acelerar240 = function () {
        if (this._velocidadeAtual > 4) {
            if (this._marchaAtual == 5) {
                this._velocidadeAtual = 240;
                this._rpm = 13;
                this.painel2();
            }else if(this._marchaAtual == 6){
                this._velocidadeAtual = 240;
                this._rpm = 11;
                this.painel2();
            }else {
                console.log('Marcha incorreta impossivel acelerar');
            };
        }else {
            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
        };
    };

    automovel.prototype.acelerar269 = function () {
        if (this._marchaAtual > 5) {
            if (this._marchaAtual == 6) {
                this._velocidadeAtual = 269;
                this._rpm = this._rpmMaxima;
                this.painel2();
            }
            else {
                console.log('Marcha incorreta impossivel acelerar');
            };
        }else {
            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
            console.log("".concat(this._velocidadeAtual, " Km/h ").concat(this._rpm, " Rpm"));
        };
    };

    automovel.prototype.painel2 = function () {
        const speed = document.getElementById("Velocidade");
        const rpm = document.getElementById("Rotação");
        const marchaFuncionando = document.getElementById("Marcha");
       
        speed.textContent = this._velocidadeAtual;
        rpm.textContent = this._rpm;
        marchaFuncionando.textContent = this._marchaAtual;
    }
  

    automovel.prototype.freiarGradativo = function () {
        if (this._velocidadeAtual > 1){
            if (this._velocidadeAtual > 100) {
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 80;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 50;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 30;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 0;
                console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " "));
            }
            else if (this._velocidadeAtual > 200) {
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 180;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 150;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 130;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 90;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 40;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 0;
                console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " "));
            }
            else if (this._velocidadeAtual > 29) {
                this._velocidadeAtual = 30;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 15;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 0;
                console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " "));;
            }
            ;
        }else{
            console.log("".concat(this._nome, " Esta parado"));
        }
    }

    automovel.prototype.freiarBrusco = function () {
        if (this._velocidadeAtual > 1){
            if (this._velocidadeAtual > 100) {
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 30;
                this._vidaPneu -= 30;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 0;
                console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " vida do pneu " ).concat(this._vidaPneu, "% "));
            }
            else if (this._velocidadeAtual > 150) {
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 100;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 40;
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));
                this._velocidadeAtual = 0;
                this._vidaPneu -= 50;
                console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " vida do pneu ").concat(this._vidaPneu, "% "));
            }  else if (this._velocidadeAtual > 30) {
                console.log("Reduzindo velocidade, velocidade atual ".concat(this._velocidadeAtual));;
                this._velocidadeAtual = 30;
                this._vidaPneu -= 15;
                console.log("velocidade atual ".concat(this._velocidadeAtual));;
                this._velocidadeAtual = 0;
                console.log("".concat(this._nome, " parou, velocidade atual ").concat(this._velocidadeAtual, " vida do pneu").concat(this._vidaPneu, "% "));
             } 
        }else{
            console.log("".concat(this._nome, " Esta parado"));
        }
    }
   

    automovel.prototype.marcha1 = function () {
        if (this._velocidadeAtual >= 0 && this._velocidadeAtual < 50) {
            this._marchaAtual = 1;
            this.painel2();
        }
        else {
            alert('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
        }
        ;
    }

    automovel.prototype.neutro = function () {
         this._marchaAtual = 0;
         this.painel2();
    }

    automovel.prototype.marcha2 = function () {
        if (this._velocidadeAtual < 150) {
            if(this._velocidadeAtual == 70){
                this._marchaAtual = 2;
                this._rpm = 7;
                this.painel2();
            }else if(this._velocidadeAtual == 120){
                this._marchaAtual = 2;
                this._rpm = 10;
                this.painel2();
            };
        }else{
            alert('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
        };
    };

    automovel.prototype.marcha3 = function () {
        if (this._velocidadeAtual < 183) {
            if(this._velocidadeAtual == 70){
                this._marchaAtual = 3;
                this._rpm = 5;
                this.painel2();
            }else if(this._velocidadeAtual == 120){
                this._marchaAtual = 3;
                this._rpm = 7;
                this.painel2();
            }else if(this._velocidadeAtual == 170){
                this._marchaAtual = 3;
                this._rpm = 13;
                this.painel2();
            }
        }else{
            alert('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
        }
        ;
    }

    automovel.prototype.marcha4 = function () {
        if (this._velocidadeAtual < 210) {
            if(this._velocidadeAtual == 120){
                this._marchaAtual = 4;
                this._rpm = 5;
                this.painel2();
            }else if(this._velocidadeAtual == 170){
                this._marchaAtual = 4;
                this._rpm = 9;
                this.painel2();
            }else if(this._velocidadeAtual == 200){
                this._marchaAtual = 4;
                this._rpm = 13;
                this.painel2();
            }
        }else {
            alert('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
        };
    };

    automovel.prototype.marcha5 = function () {
        if (this._velocidadeAtual < 250) {
            if(this._velocidadeAtual == 170){
                this._marchaAtual = 5;
                this._rpm = 7;
                this.painel2();
            }else if(this._velocidadeAtual == 200){
                this._marchaAtual = 5;
                this._rpm = 9;
                this.painel2();
            }else if(this._velocidadeAtual == 240){
                this._marchaAtual = 5;
                this._rpm = 13;
                this.painel2();
            };
        }else {
            alert('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
        }
        ;
    }
    
    automovel.prototype.marcha6 = function () {
        if (this._velocidadeAtual < 271) {
            if(this._velocidadeAtual == 170){
                this._marchaAtual = 6;
                this._rpm = 6;
                this.painel2();
            }else if(this._velocidadeAtual == 200){
                this._marchaAtual = 6;
                this._rpm = 8;
                this.painel2();
            }else if(this._velocidadeAtual == 240){
                this._marchaAtual = 6;
                this._rpm = 11;
                this.painel2();
            }else if(this._velocidadeAtual == 269){
                this._marchaAtual = 6;
                this._rpm = _rpmMaxima;
                this.painel2();
            }
        }else {
            alert('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
        };
    };

    automovel.prototype.acelerar = function () {
        if (this._energia == 1 && this.partida ==1) {
           
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
const _automovel = automovel;
// export { _automovel as automovel };
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
const _MotoEsportiva = MotoEsportiva;
// export { _MotoEsportiva as MotoEsportiva };
;
 const z800 = new MotoEsportiva('z800', true, 14, 270, false, false, 20, 42);


