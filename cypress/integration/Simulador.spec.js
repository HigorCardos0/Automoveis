
describe('Simulador basico V1',()=>{
    beforeEach(()=>{
    cy.visit('./UI/index.html');
  });
    it('verifica ',()=> {
      cy.get(':nth-child(5) > :nth-child(1)').should('be.visible');
      }); 
});