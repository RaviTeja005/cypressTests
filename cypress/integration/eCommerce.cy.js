///<reference types="cypress"/>
import Homepage from "../POM/Homepage"
describe('test suite for magento ecommerce',()=>{
  beforeEach(()=>{
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  it('validate if homw page is visible',()=>{
    const homePage= new Homepage()
    cy.title().should('include','Home Page - Magento eCommerce ')
    homePage.getTitile()
    homePage.getCreateAccountbtn()
    homePage.getpageTitle()
  })
  it('validate features on homepage',()=>{
    cy.get('#ui-id-5').trigger('mouseover')
    cy.get('[role="menu"]').eq(4).should('be.visible')
    cy.get('#ui-id-17').invoke('show')
    cy.get('#ui-id-17').trigger('mouseover')
    cy.get('[role="menu"]').eq(5).contains('Hoodies & Sweatshirts').click()
  })
  it('create new customer',()=>{
    cy.get('ul.header.links:nth-child(2) li.authorization-link').click()
    cy.get('#block-new-customer-heading').eq(0).should('have.text','New Customers')
    cy.get('.primary>a').contains('Create an Account').click()
    cy.get('.base').should('have.text','Create New Customer Account')
    cy.get('#firstname').type('chris')
    cy.get('#lastname').type('john')
    cy.get('#email_address').type('john@yopmail.com')
    cy.get('input#password').type('Qwerty@123')
    cy.get('#password-confirmation').type('Qwerty@123')
    cy.get('.action.submit.primary').click()
    cy.get('[role="alert"]').should('have.text','\n\nThank you for registering with Fake Online Clothing Store.\n\n')
  })
  it('signin',()=>{
    cy.get('ul.header.links:nth-child(2) li.authorization-link').click()
    cy.get('.page-title').should('have.text','\nCustomer Login ')
    cy.get('#email').type('john@yopmail.com')
    cy.get('[name="login[password]"]').type('Qwerty@123')
    cy.get('.action.login.primary').contains('Sign In').click()

  })
})