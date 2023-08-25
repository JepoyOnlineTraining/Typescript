/// <reference types="cypress" />

class HomePage {


    public page = "test"

    google(){

        cy.visit("https://google.com")

    }

    checkPage(title: string){

        cy.title().should('eq', title)

    }


}


export default new HomePage();