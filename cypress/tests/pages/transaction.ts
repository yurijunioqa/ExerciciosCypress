class TransactionPage {
    selectorsList () {
        const selectors = {
            contactList: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[data-test='transaction-create-amount-input']",
            transactionNoteField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-form'] [data-test='transaction-create-submit-payment']",
            paymentSuccessAlert: "[data-test='alert-bar-undefined']"
        }

        return selectors
    }

    selectContact() {
        cy.get(this.selectorsList().contactList).click()
    }

    fillAmount (amount) {
        cy.get(this.selectorsList().amountField).type(amount)
    }

    leaveNote (note) {
        cy.get(this.selectorsList().transactionNoteField).type(note)
    }

    payTransaction () {
        cy.get(this.selectorsList().payButton).click()
    }

    paymentSuccessCheck () {
        cy.get(this.selectorsList().paymentSuccessAlert).should('be.visible')
    }

    paymentFailureCheck () {
        cy.get(this.selectorsList().paymentSuccessAlert).should('not.be.visible')
    }
}   

export default TransactionPage