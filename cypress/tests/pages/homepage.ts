class HomePage {
    selectorsList () {
        const selectors = {
            homePageSection: "[data-test='main']",
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            mineTransactionButton: "[data-test='nav-personal-tab']",
            emptyTransactionText: "[data-test='empty-list-header']",
            transactionList: "[data-test='transaction-list']"
        }

        return selectors
    }

    checkHomePageSection () {
        cy.get(this.selectorsList().homePageSection).should('be.visible')
    }

    performNewTransaction () {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    checkMineTransactions () {
        cy.get(this.selectorsList().mineTransactionButton).click()
    }

    confirmEmptyTransactionList () {
        cy.get(this.selectorsList().emptyTransactionText).should('contain', 'No Transactions')
    }

    confirmTransactionList () {
        cy.get(this.selectorsList().transactionList).should('be.visible')
    }
}

export default HomePage