describe('Signup Itera', () => {
//Berhasil Signup Akun
  it('Signup Success', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Dawit')
    cy.get('#Surname').type('Test')
    cy.get('#E_post').type('test@gmail.com')
    cy.get('#Mobile').type('085292478852')
    cy.get('#Username').type('Daw01235')
    cy.get('#Password').type('123456Daw')
    cy.get('#ConfirmPassword').type('123456Daw')
    cy.get('#submit').click()
    cy.get('.label-success')
  })
//Username Exist
  it('Signup Username Exist', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Dawit')
    cy.get('#Surname').type('Test')
    cy.get('#E_post').type('test@gmail.com')
    cy.get('#Mobile').type('085292478852')
    cy.get('#Username').type('Daw01235')
    cy.get('#Password').type('123456Daw')
    cy.get('#ConfirmPassword').type('123456Daw')
    cy.get('#submit').click()
    cy.get('.label-danger')
  })
//Firstname Empthy
  it('Signup Firstname Empthy',() => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName')
    cy.get('#Surname').type('Test')
    cy.get('#E_post').type('test@gmail.com')
    cy.get('#Mobile').type('085292478852')
    cy.get('#Username').type('Daw01234')
    cy.get('#Password').type('123456Daw')
    cy.get('#ConfirmPassword').type('123456Daw')
    cy.get('#submit').click()
    cy.get('#FirstName-error')

  })
})