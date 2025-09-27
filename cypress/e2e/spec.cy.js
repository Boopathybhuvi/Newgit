// describe('template spec', () => {
//   it('Page',{'smoke} () => 

//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('[id="username"]').type('student')
//     cy.get('[type="password"]').type('Password123')
//     cy.get('[id="submit"]').click()
//     cy.get('[class="post-title"]').should('have.text',"Logged In Successfully");
//   })
// }
// })
// //     describe('template spec', () => {
// //   it('Page', () => {
// //     cy.visit('https://practicetestautomation.com/practice-test-login/')
// //     cy.get('[id="username"]').type('student')
// //      cy.get('[type="password"]').type('incorrectPassword')
// //      cy.get('[id="submit"]').click()
// //      cy.get('[id="error"]').should('be.visible')
// //      cy.get('[id="error"]').should('have.text',"Your password is invalid!")
// //     })
// // })
 
// //Amazon workout
// //  cy.visit('https://www.amazon.in/')
// //  cy.get('[type="text"]').type('mobile')
// //  cy.get('[id="nav-search-submit-text"] [type="submit"]').click()
 
//NPX CYPRESS GRIP

// describe('Test', () => {
//     it('Page',()=>{
//     cy.visit('https://practicetestautomation.com/practice-test-login/')


// })

//  it('possitive test',{tags:"@smoke"},() =>{

//     cy.log('hello')
//  })
//   it('negative test',{tags:"@smoke"},() =>{

//     cy.log('hi')
//  })
// })

//Amazon workout
describe('Amazon', () => {
it('Mobile searching',() => {
 cy.visit('https://www.amazon.in/')
 cy.get('[type="text"]').type('mobile')
 cy.get('[id="nav-search-submit-text"] [type="submit"]').click()





    


})
})