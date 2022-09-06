///<reference types="cypress"/>
describe('Test suite on acme login page',()=>{
beforeEach(()=>{
  cy.visit('https://demo.applitools.com/')      
})
  it('validate if home page is visible',()=>{
    cy.url().should('include','applitools')
    cy.get('.auth-header').should('have.text','\n        Login Form\n      ')
    cy.get('div>label').contains('Username').should('be.visible')
    cy.get('div>label').contains('Password').should('be.visible')
    cy.get('#username').type('loginuser1@yopmail.com')
    cy.get('#password').type('qwertyuiop')
    cy.get('#log-in').click()
    cy.get('#time').contains('Your nearest branch closes in: 30m 5s').should('be.visible')
    cy.get('.element-header').eq(0).contains('Financial Overview').should('exist')
    cy.get('.element-header').eq(1).contains('Recent Transactions').should('exist')

  })
  it('validate if user is able to login without credentials',()=>{
    cy.get('#log-in').click()
  })
})