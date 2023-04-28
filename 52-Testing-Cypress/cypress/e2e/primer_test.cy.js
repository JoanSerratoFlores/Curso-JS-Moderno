/// <reference types="cypress"/>

describe("Carga la pagina principal", () => {

  it("Carga la página principal", () => {

    cy.visit("http://127.0.0.1:5500/52-Testing-Cypress/");

    //Verificar el elemento y su texto
    cy.contains('[data-cy="titulo-proyecto"]', "Administrador de Pacientes de Veterinaria");

    //Verificar que exista
    cy.get('[data-cy="titulo-proyecto"]').should("exist");

    //Verificar que existe el elemento y contenga un texto
    cy.get('[data-cy="titulo-proyecto"]')
    .invoke('text')
    .should('equal','Administrador de Pacientes de Veterinaria');

    //Verificar el texto de las citas
    cy.get('[data-cy="citas-heading"]')
    .invoke('text')
    .should('equal','No hay Citas, comienza creando una') 

    cy.get('[data-cy="citas-heading"]')
    .invoke('text')
    .should('not.equal','Juan Pablo') 
    
  });

});
