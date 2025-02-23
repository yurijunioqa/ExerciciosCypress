class RegistrationPage {
    selectorsList () {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signUpSubmitButton: "[data-test='signup-submit']"
        }

        return selectors
    }

    fillSignUpForm (firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }

    submitRegistration () {
        cy.get(this.selectorsList().signUpSubmitButton).click()
    }

    checkSubmitRegistrationButton () {
        cy.get(this.selectorsList().signUpSubmitButton).should('be.disabled')
    }
}

export default RegistrationPage