///<reference types="cypress"/>
describe('test suite for buying products',()=>{
  beforeEach(()=>{
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
  })
  it('Navigate to homepage',()=>{
    cy.url().should('include','www.demoblaze.com')
    cy.get('a#nava').should('have.text','\n      PRODUCT STORE')
    cy.get('.navbar-nav.ml-auto :nth-child(1) a').should('have.text','Home (current)')
    cy.get('a#cat').should('have.text','CATEGORIES')
    cy.get(`[onclick="byCat('phone')"]`).should('have.text','Phones').and('be.visible')
    cy.get(`[onclick="byCat('notebook')"]`).should('have.text','Laptops').and('be.visible')
    cy.get(`[onclick="byCat('monitor')"]`).should('have.text','Monitors').and('be.visible')
  })
  it('verify signup functionality',()=>{
    cy.get('a#signin2').click()
    cy.get('#signInModalLabel').should('have.text','Sign up')
    cy.get('#sign-username').type('sidd@yopmail.com')
    cy.get('#sign-password').type('Qwerty@123')
    cy.get('[onclick="register()"]').click()
    cy.on('window:alert',(str)=>{
      expect(str).to.equal('Sign up successful.')
    })
  })
  it('login functionality',()=>{
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('have.text','Log in')
    cy.get('#loginusername').type('sidd@yopmail.com')
    cy.get('#loginpassword').type('Qwerty@123')
    cy.get(`[onclick="logIn()"]`).click()
    cy.get('#nameofuser').should('have.text','Welcome sidd@yopmail.com')
  })
  it('verify logout functionality',()=>{
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('have.text','Log in')
    cy.get('#loginusername').type('sidd@yopmail.com')
    cy.get('#loginpassword').type('Qwerty@123')
    cy.get(`[onclick="logIn()"]`).click()
    cy.get('#nameofuser').should('have.text','Welcome sidd@yopmail.com')
    cy.get(`[onclick="logOut()"]`).click()
    cy.get('#login2').should('have.text','Log in')
  })
})