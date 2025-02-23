class HomePage {
    selectorsList () {
        const selectors = {
            homePageSection: "[data-test='main']",
            newTransactionButton: "[data-test='nav-top-new-transaction']"
            
        }

        return selectors
    }

    checkHomePageSection () {
        cy.get(this.selectorsList().homePageSection).should('be.visible')
    }

    performNewTransaction () {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    
}

export default HomePage