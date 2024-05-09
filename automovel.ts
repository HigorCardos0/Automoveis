import prompt from 'prompt-sync';


               export class Funcionamento{
                protected _combustivel:number;
                protected _bateria:number = 100;
                protected _pneuPressao:number;
                protected _desgaste:number = 0;
                protected _partida:number = 0;
                protected _energia:number = 0;
                protected _marchaAtual:number = 0;
                protected _temperatura:number = 0;
                protected _vidaPneu:number = 100;
                constructor(combustivel:number,pneuPressao:number) {
                    this._combustivel = combustivel;
                    this._pneuPressao = pneuPressao;
                }
                public ligarChave():void{
                  this._energia += 1;
                  this._bateria -= 30;
                  let teclado = prompt();
                  let option: number = 0;

                  while(option != 3){
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
                 };
               };
             };
           };
              
              
              export class automovel extends Funcionamento{
                protected _nome:string;
                protected _velocidadeAtual:number = 0;
                protected _rpm:number = 0;
                protected _trocarMarcha:boolean;
                protected _rpmMaxima:number;            
                protected _velocidadeMax:number;
                protected _preco:number;
                constructor(nome:string,trocarMarcha:boolean,rpmMax:number,
                  topspeed:number,combustivel:number,pneuPressao:number) {
                  super(combustivel,pneuPressao)
                    this._nome = nome;
                    this._trocarMarcha = trocarMarcha;
                    this._rpmMaxima = rpmMax;
                    this._velocidadeMax = topspeed;
                    this._preco = this.preco();
                };
                  
                    public set settest(newname : string) {
                    this._nome = newname;
                    };
                    
                    public get nomePelaClasse() : string {
                      return this._nome;
                    };
        
                  public painel():void{
                    if(this._energia == 1 && this._bateria > 10){
                    console.log('======================');
                    console.log(`Rotação atual ${this._rpm}\nvelocidade atual ${this._velocidadeAtual} \n marcha atual ${this._marchaAtual}`);
                    this._bateria -= 30;
                    }else{
                    console.log('Painel indisponivel pois a chave não esta ligada ou a bateria acabou !')
                    };
                    };

                    public partida():void{
                    if(this._energia == 1 && this._bateria > 10){
                      this._partida =+ 1;
                       console.log('======================');
                       console.log(`${this._nome} esta pronto para uso!!!`);
                       this._bateria += 60; 
                    }else{
                       console.log(`Falta de energia impossivel ligar ${this._nome} verifique se a chave esta ligada`)
                    };
                    };

                   public acelerar():void{
                    if(this._velocidadeAtual < this._velocidadeMax && this._rpm < this._rpmMaxima && this._partida == 1){
                      let teclado = prompt();
                      let option: number = 0;
    
                      while(option != 8){
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
                          if(this._velocidadeAtual < 40 && this._marchaAtual == 1 && this._partida == 1){
                              this._velocidadeAtual = 30
                              this._rpm = 6
                              console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                          }else{
                            console.log('Essa velocidade não é possivel pois nao cumpre com algum dos requisitos necessario do motor');
                          };
                          break;
                         case 2:
                          if(this._velocidadeAtual < 70 && this._partida == 1){
                            if(this._marchaAtual == 1 || this._marchaAtual == 2 || this._marchaAtual == 3){
                              this._velocidadeAtual = 70;
                              this._rpm = 8;

                              console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                            }else{
                              console.log('Marcha incorreta impossivel acelerar');
                            };
                          }else{
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                             console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                          };
                          break;
                         case 3:
                          if(this._velocidadeAtual < 119 && this._partida == 1){
                            if(this._marchaAtual == 2 || this._marchaAtual == 3 || this._marchaAtual == 4){
                              this._velocidadeAtual = 120;
                              this._rpm = 10;
                              console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                            }else{
                              console.log('Marcha incorreta impossivel acelerar');
                            };
                          }else{
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                             console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                          };
                          break;
                          case 4:
                           if(this._velocidadeAtual < 169 && this._partida == 1){
                            if(this._marchaAtual >= 3){
                              this._velocidadeAtual = 170;
                              this._rpm = 11;
                              console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                            }else{
                              console.log('Marcha incorreta impossivel acelerar');
                            };
                          }else{
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                             console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                           };
                            break;
                         case 5:
                          if(this._velocidadeAtual < 200 && this._partida == 1){
                            if(this._marchaAtual >= 4){
                              this._velocidadeAtual = 200;
                              this._rpm += 8;
                              console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                            }else{
                              console.log('Marcha incorreta impossivel acelerar');
                            };
                          }else{
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                             console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                          };
                          break;
                         case 6:
                          if(this._velocidadeAtual < 241 && this._partida == 1){
                            if(this._marchaAtual >= 5){
                              this._velocidadeAtual = 240;
                              this._rpm += 9;
                              console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                            }else{
                              console.log('Marcha incorreta impossivel acelerar');
                            };
                          }else{
                            console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                             console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                          };
                           break;
                          case 7:
                            if(this._velocidadeAtual < 271 && this._partida == 1){
                              if(this._marchaAtual == 6){
                                this._velocidadeAtual = this._velocidadeMax -= 1;
                                this._rpm = this._rpmMaxima;
                                 console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                              }else{
                                console.log('Marcha incorreta impossivel acelerar');
                              };
                            }else{
                              console.log('Não e possivel acelerar nessa velocidade pois sua velocidade esta mais alta que a solicitada ou a moto nao esta ligada');
                               console.log(`${this._velocidadeAtual} Km/h ${this._rpm} Rpm`);
                            };
                            break;
                      };
                    };
                  }else{
                    console.log('Sistema não autorizou acelerar verifique se a moto esta ligada');
                  };
                };

                    public frear():void{
                      if(this._velocidadeAtual > 1 && this._partida == 1){
                    let teclado = prompt();
                    let option: number = 0;
    
                    while(option != 8){
                    console.log('+=================================+');
                    console.log('||1 Frear gradativamente(Parar)  ||');
                    console.log('||1 Frear bruscamente(emergencia)||');
                    console.log('+=================================+');
     
                      option = +teclado("Escolha uma marcha!");
    
                      switch (option) {
                         case 1:
                             if(this._velocidadeAtual > 100){
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 80;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 50;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 30;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 0;
                              console.log(`${this._nome} parou, velocidade atual ${this._velocidadeAtual} `);
                             }else if( this._velocidadeAtual > 200) {
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 180;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 150;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 130;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 90;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 40;
                              console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                              this._velocidadeAtual = 0;
                              console.log(`${this._nome} parou, velocidade atual ${this._velocidadeAtual} `);
                             }else if(this._velocidadeAtual < 1){
                              console.log(`${this._nome} Ja esta parado`)
                             };
                            break;
                        case 2:
                          if(this._velocidadeAtual > 100){
                            console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                            this._velocidadeAtual = 30;
                            this._vidaPneu -= 30;
                            console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                            this._velocidadeAtual = 0;
                            console.log(`${this._nome} parou, velocidade atual ${this._velocidadeAtual} o pneu foi gasto em ${this._vidaPneu}% `);
                          }else if(this._velocidadeAtual > 150){
                            console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                            this._velocidadeAtual = 100;
                            this._vidaPneu -= 30;
                            console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                            console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                            this._velocidadeAtual = 40;
                            this._vidaPneu -= 30
                            console.log(`Reduzindo velocidade, velocidadew atual ${this._velocidadeAtual}`);
                            this._velocidadeAtual = 0;
                            console.log(`${this._nome} parou, velocidade atual ${this._velocidadeAtual} o pneu foi gasto em ${this._vidaPneu}% `);
                          }
                            break;
                   }
                  }
                }else{
                  console.log(`${this._nome} Esta parado`);
                }
              }

                   public trocarMarcha():void{      
                    if(this._energia == 1){                              
                  let teclado = prompt();
                  let option: number = 0;

                  while(option != 8){
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
                      if(this._velocidadeAtual >= 0 && this._velocidadeAtual < 50){
                        this._marchaAtual = 1
                         console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação esta em ${this._rpm}!`);
                         console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      }else{
                         console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                      };
                      break;
                   case 2:
                        this._marchaAtual = 0
                        console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação esta em ${this._rpm}!`);
                        console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      break;
                   case 3:
                      if(this._velocidadeAtual < 150 && this._velocidadeAtual > 50){
                        this._marchaAtual = 2
                        this._rpm -= 5
                        console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação atual esta em ${this._rpm}!`);
                        console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      }else{
                        console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                      };
                      break;
                   case 4:
                      if(this._velocidadeAtual < 183 && this._velocidadeAtual > 69){
                        this._marchaAtual = 3
                        this._rpm -= 5;
                        console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação atual esta em ${this._rpm}!`);
                        console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      }else{
                        console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                      };
                      break; 
                   case 5:
                      if(this._velocidadeAtual < 210 && this._velocidadeAtual > 90){
                        this._marchaAtual = 4
                        this._rpm -= 5;
                        console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação atual esta em ${this._rpm}!`);
                        console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      }else{
                         console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                      };
                      break;
                   case 6:
                      if(this._velocidadeAtual < 250 && this._velocidadeAtual > 110){
                        this._marchaAtual = 5;
                       this._rpm -= 5;
                       console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação atual esta em ${this._rpm}!`);
                       console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      }else{
                       console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                      };
                      break;
                   case 7:
                      if(this._velocidadeAtual < 271 && this._velocidadeAtual > 140){
                        this._marchaAtual = 6
                       this._rpm -= 5;
                       console.log(`Você engatou a ${this._marchaAtual} marcha sua rotação atual esta em ${this._rpm}!`);
                       console.log(`Velocidade atual ${this._velocidadeAtual}!`);
                      }else{
                       console.log('Impossivel engatar essa marcha pois sua velocidade esta muito alta ou muito baixa');
                      };
                      break;  
                  };
                };
              };
            };

                   public computadorDeBordo():void{
                    if(this._energia == 1){
                    console.log('Bateria atual '+ this._bateria+'%');
                    console.log('Combustivel atual '+ this._combustivel);
                    console.log('Funcionamento do motor ' + this._desgaste);
                    };
                   };

                   public preco():number{
                    return Math.floor(Math.random()*37000);
                   };
                  };

                  export class MotoEsportiva extends automovel{
                    carenagem:boolean
                    trackDay:boolean
                    constructor(nome:string,trocarMarcha:boolean,rpmmax:number,topspeed:number,carenagem:boolean,
                      trackDay:boolean,combustivel:number,pneuPressao:number){

                        super(nome,trocarMarcha,rpmmax,topspeed,combustivel,pneuPressao);
                        this.carenagem = carenagem;
                        this.trackDay = trackDay;
                  }
                };
