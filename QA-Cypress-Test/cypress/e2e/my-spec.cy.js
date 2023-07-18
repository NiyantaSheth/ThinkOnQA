describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })
 
  it('Valid Test to add a customer',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('Deep');
      cy.get('input[placeholder = "Phone"]').should('exist').type('11111111111');
      cy.get('input[placeholder = "Email"]').should('exist').type('Chandra@vomoto.com');
      cy.contains('Add').click({ force: true })
  })

  it('Valid Test to add another customer',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('Ankita');
      cy.get('input[placeholder = "Phone"]').should('exist').type('44444444444');
      cy.get('input[placeholder = "Email"]').should('exist').type('Swara@vomoto.com');
      cy.contains('Add').click({ force: true })
  })

  it('Test to add a customer with an invalid name',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('1234@');
      cy.get('input[placeholder = "Phone"]').should('exist').type('2222222222');
      cy.get('input[placeholder = "Email"]').should('exist').type('Daniel@vomoto.com');
      cy.contains('Add').click({ force: true })
  
   })

   it('Test to add a customer with an invalid phone',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('Pankaj');
      cy.get('input[placeholder = "Phone"]').should('exist').type('1178905abc');
      cy.get('input[placeholder = "Email"]').should('exist').type('Rathod@vomoto.com');
      cy.contains('Add').click({ force: true })
  
   })

   it('Test to add a customer with an invalid email',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('Sanjana');
      cy.get('input[placeholder = "Phone"]').should('exist').type('3333333333');
      cy.get('input[placeholder = "Email"]').should('exist').type('Abcexamplecom');
      cy.contains('Add').click({ force: true })
  
   })

   it('Validation for duplicate customer',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('Ankita');
      cy.get('input[placeholder = "Phone"]').should('exist').type('44444444444');
      cy.get('input[placeholder = "Email"]').should('exist').type('Swara@vomoto.com');
      cy.get("[name='add']").click({ force: true })
  
   })


   it('Validation with null data',()=>{
      cy.get('input[placeholder = "Name"]').should('exist').type('');
      cy.get('input[placeholder = "Phone"]').should('exist').type('');
      cy.get('input[placeholder = "Email"]').should('exist').type('');
      cy.get("[name='add']").click({ force: true })
  
   })


   it('Edit phonenumber for a customer',()=>{
      
      cy.get('td').contains('Chandra@vomoto.com').next().contains('edit').click();
      cy.get('td').contains('11111111111').clear().type('1234567890').next().next().click()
      
  
   })

   it('Edit name for a customer',()=>{
      
      cy.get('td').contains('Chandra@vomoto.com').next().contains('edit').click();
      cy.get('td').contains('Deep').clear().type('Rajendra').next().next().next().click()
     
   })

   it('Edit email address for a customer',()=>{
      
      cy.get('td').contains('Chandra@vomoto.com').next().contains('edit').click();
      cy.get('td').contains('Chandra@vomoto.com').clear().type('Kajal@vomoto.com').next().click()
     
   })

   it('Delete a customer',()=>{
      
      cy.get('td').contains('Kajal@vomoto.com').next().next().contains('delete').click();
     
     
   })

});