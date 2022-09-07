/// <reference types='Cypress' />
const { createBrowserHistory } = require("history")

describe('searches',() => {

    beforeEach("wait for API",() => {
        cy.intercept('GET','http://localhost:3000/projects').as('api1')
        cy.intercept('GET','http://localhost:3000/employees').as('api2')
    })

    it('user can search for an employee & filter by status', () => {
        
        cy.visit('http://localhost:3001/database')

        cy.wait('@api1')
        cy.wait('@api2')
        
        //typing 'John' in the text field
        cy.findByRole('searchbox', {  name: /search/i}).type("John")
        //pressing button Search
        cy.findByRole('button', {  name: /search/i}).click()
        //pressing button status filters
        cy.findByRole('button', {  name: /status filters/i}).click()
        //chosing New status
        cy.findByRole('button', {  name: /new/i}).click()
    })
})