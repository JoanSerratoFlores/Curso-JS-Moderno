/// <reference types="cypress"/>

describe("Llena los campos para una nueva cita y la elimina", () => {

    it("Campos nueva cita", () => {
  
      cy.visit("http://127.0.0.1:5500/52-Testing-Cypress/");

        cy.get('[data-cy=mascotaInput]')
        .type('Hook');

        cy.get('[data-cy=propietarioInput]')
        .type('Juan');

        cy.get('[data-cy=telefonoInput]')
        .type('8129427584');

        cy.get('[data-cy=fechaInput]')
        .type('2020-12-03');

        cy.get('[data-cy=horaInput]')
        .type('20:30');

        cy.get('[data-cy=sintomasTextarea]')
        .type('Solo Come y Duerme');

        cy.get('[data-cy=submitCita]')
        .click();

        cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal','Administra tus Citas')

        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
        .invoke('text')
        .should('equal','Se agregó correctamente')

        cy.get('[data-cy="alerta"]')
        .should('have.class','alert-success')

    });

    it('Elimina la cita', () => {

        cy.get('[data-cy="btn-eliminar"]')
        .click();

        cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal','No hay Citas, comienza creando una')

        cy.screenshot();

    })

}); 