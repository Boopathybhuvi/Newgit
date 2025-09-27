describe('saucedemo', () => {
 it('orders', () => {
  cy.visit('https://www.saucedemo.com/v1/') 
  cy.get('input[type="text"]').type('standard_user')
  cy.get('input[data-test="password"]').type('secret_sauce')
  cy.get('[type="submit"]').click()

  // cy.get('input[type="text"]').type('standard_user')
  // cy.get('input[name="password"]').type('wrong')
  // cy.get('[class="btn_action"]').click()
  // cy.get('[class="btn_action"]').should('be.visible')
  
  cy.get('[class="product_sort_container"]').select('Price (low to high)')

  cy.get('[id="inventory_container"] [class="inventory_item"]').each(($productcards)=>{
    if($productcards.text().includes('Onesie')){
      cy.wrap($productcards).find('[class="btn_primary btn_inventory"]').click()
    }
  
  if($productcards.text().includes('Light')){
      cy.wrap($productcards).find('[class="btn_primary btn_inventory"]').click()
    }
    if($productcards.text().includes('Bolt')){
      cy.wrap($productcards).find('[class="btn_primary btn_inventory"]').click()
    }
  })

// cy.get('.inventory_item')
//   .eq(0).within(() => {               // eq(0) → 1st product (index starts from 0)
//    cy.get('button').click()
  
//   })
  
//    cy.get('.inventory_item')
//   .eq(1).within(() => {               // eq(1) → 2nd product (index starts from 0)
//    cy.get('button').click()
 
//   })

//   cy.get('.inventory_item')
//   .eq(2).within(() => {               // eq(2) → 3rd product (index starts from 0)
//    cy.get('button').click()
 
//   })
 
  
//   cy.get('[class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x "]').click()

//    cy.get('[class="btn_action checkout_button"]').click()

//   cy.url().should('eq',"https://www.saucedemo.com/v1/checkout-step-one.html")

//   cy.get('input[id="first-name"]').type('Boopathy')
//   cy.get('input[id="last-name"]').type('Babu')
//   cy.get('input[id="postal-code"]').type('7777777')
//   cy.get('[type="submit"]').click()
//   cy.get('a[class="btn_action cart_button"]').click()
//   cy.get('[class="complete-header"]').should('have.text','THANK YOU FOR YOUR ORDER')





 })
 })
