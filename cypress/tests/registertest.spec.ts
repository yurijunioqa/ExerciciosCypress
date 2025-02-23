import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";

const loginPage = new LoginPage()
const registrationPage = new RegistrationPage()

describe('Registration', () => {

    beforeEach(() => {
        loginPage.accessLoginPage();
        loginPage.accessSignUpPage(); 
      });

    it('Registration with success', () => {
      registrationPage.fillSignUpForm('John', 'John', 'johnjohn', '123456', '123456')
      registrationPage.submitRegistration()
      cy.location('pathname').should('equal', '/signin')
    })

    it('Registration with error', () => {
      registrationPage.fillSignUpForm('John', 'John', 'JohnJohn', '123456', '1')
      registrationPage.checkSubmitRegistrationButton()
    })
    
  })
  
    