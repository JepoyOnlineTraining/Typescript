/// <reference types="cypress" />

import HomePage from "../tsdemo"

describe('My TestSuite', ()=>{

    it('visit Google.com', ()=>{

        HomePage.google()

        HomePage.checkPage("Google")

    })

})