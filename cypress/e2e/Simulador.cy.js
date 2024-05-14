
describe('Simulador basico V1',()=>{
    beforeEach(()=>{
    cy.visit('./UI/index.html');
  });
    it('verifica o funcionamento geral ',()=> {
      cy.get(':nth-child(5) > :nth-child(1)').click();
      cy.get(':nth-child(5) > :nth-child(2)').click();
      cy.get(':nth-child(8) > .btn').click();

      cy.get(':nth-child(23) > .btn').click();
      cy.get('body > :nth-child(5) > :nth-child(1)').click();
      
      
      }); 
});