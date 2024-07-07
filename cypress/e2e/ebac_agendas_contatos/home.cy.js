/// <reference types="cypress" />


describe('Teste para a home', () => {
    beforeEach(()=> {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    
    it('Deve verificar botão adicionar e adicionar um novo contato', () => {
        cy.get('.adicionar').click()
        cy.get('input[type="text"]').type('Guilherme')
        cy.get('input[type="email"]').type('guilherme@ebac.com.br')
        cy.get('input[type="tel"]').type('11965851869')
        cy.get('.adicionar').click()
    })

    it('Deve fazer a alteração do primeiro contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('sofia')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('sofia@ebac.com.br')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('11965851869')
        cy.get('.alterar').click()
    })

    it('Deve deletar o primeiro contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})