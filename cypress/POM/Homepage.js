class Homepage
{
getTitile()
{
  return cy.get('.message.global.demo div>p').should('have.text','This is a demo store. No orders will be fulfilled.')
}
getCreateAccountbtn()
{
  return  cy.get('li>a').contains('Create an Account').click()
}
getpageTitle()
{
  return cy.get('.page-title>span').should('have.text','Create New Customer Account')
}



}

export default Homepage;