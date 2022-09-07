/// <reference types='Cypress' />

describe('adding a new project', () => {

    const randNumber = Math.floor(Math.random() * 100) + 10;
    const num_str = randNumber.toString()
    const projectName = 'Project' + num_str
    const topicName = 'Topic' + num_str
    const leaderName = 'Alexandru'

    beforeEach("wait for API",() => {
        cy.intercept('GET','http://localhost:3000/projects').as('api1')
        cy.intercept('GET','http://localhost:3000/employees').as('api2')
    })

    afterEach("cleanup: reseting database", () => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`http://localhost:3000/projects/${projectName}`,options)
        //cy.resetDb()????
    })

    it('creating a new project', () => {
        cy.visit('http://localhost:3001/projects')
        
        cy.wait('@api1')
        cy.wait('@api2')

        cy.findByRole('button', {  name: /\+/i}).click()
        

        cy.findByPlaceholderText(/enter name/i).type(projectName)
        cy.findByPlaceholderText(/enter topic/i).type(topicName)
        cy.findByRole('combobox', {  name: /default select example/i}).select(leaderName)
        cy.findByPlaceholderText(/members/i).click()
        cy.findByText('Jane').click()
        cy.findByText('Alice').click()
        cy.findByRole('button', {  name: /submit/i}).click({force: true})
        cy.wait(1000)
        
    })

})