
describe('Simulador basico V1',()=>{
    beforeEach(()=>{
    cy.visit('./UI/index.html');
  });
    it('verifica o encaminhamento de pagina',()=> {
      cy.get('h1').contains("Simulador");
      cy.get(':nth-child(5) > :nth-child(1)').click();
      cy.get(':nth-child(5) > :nth-child(2)').click();
      cy.get(':nth-child(8) > .btn').click();
      cy.get('h1').contains("Simulador Z800");
      }); 
    
    it('Verifica o funcionamento do painel (Marchas e Velocidade)',()=>{
      //Set up
      cy.get(':nth-child(5) > :nth-child(1)').click();
      cy.get(':nth-child(5) > :nth-child(2)').click();
      cy.get(':nth-child(8) > .btn').click();

      //Funcionamento da 1 marcha 30Km/h

      //Clicando e verificando se esta na marcha e aceleração estão corretas
      cy.get(':nth-child(23) > .btn > button').click();
      cy.get(':nth-child(5) > :nth-child(1) > button').click();
      cy.get('.Painel > :nth-child(1)').contains('30')
      cy.get('.Painel > :nth-child(3)').contains('1');


      //Funcionamento da 2 marcha 70Km/h

      cy.get(':nth-child(5) > :nth-child(2) > button').click();
      cy.get(':nth-child(19) > .btn > button').click();
      cy.get('.Painel > :nth-child(1)').contains('70')
      cy.get('.Painel > :nth-child(3)').contains("2");
      

      //Funcionamento da 3 marcha 120Km/h

      cy.get(':nth-child(17) > .btn > button').click();
      cy.get(':nth-child(3) > button').click();
      cy.get('.Painel > :nth-child(1)').contains('120');
      cy.get('.Painel > :nth-child(3)').contains("3");


      //Funcionamento da 4 marcha 170Km/h

      cy.get(':nth-child(4) > button').click();
      cy.get(':nth-child(15) > .btn > button').click();
      cy.get('.Painel > :nth-child(1)').contains('170');
      cy.get('.Painel > :nth-child(3)').contains("4");


      //Funcionamento da 5 marcha 200Km/h e 240Km/h

      cy.get(':nth-child(5) > .btn-orange > button').click();
      cy.get(':nth-child(13) > .btn-orange > button').click();
      cy.get('.Painel > :nth-child(1)').contains('200');
      cy.get('.Painel > :nth-child(3)').contains("5");

      //240Km/h

      cy.get(':nth-child(6) > button').click();
      cy.get('.Painel > :nth-child(1)').contains('240');


      //Funcionamento da 6 marcha 269Km/h

      cy.get(':nth-child(11) > .btn-red > button').click();
      cy.get('.btn-black > button').click();
      cy.get('.Painel > :nth-child(1)').contains('269');
      cy.get('.Painel > :nth-child(3)').contains("6");
    });
});