class LoginPage {
    selectorsList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            signUpButton: "[data-test='signup']"
        }

        return selectors
    }

    accessLoginPage () {
        cy.visit('http://localhost:3000/signin')
    }

    accessSignUpPage () {
        cy.get(this.selectorsList().signUpButton).click()
    }

    loginWithAnyUser (username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }

    checkAccessInvalid () {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage