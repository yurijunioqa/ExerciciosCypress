import LoginPage from "./pages/login";
import HomePage from "./pages/homepage";

const loginPage = new LoginPage()

const homePage = new HomePage()

describe('Login Real World App', () => {

  it('Login com usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('yurioliveira', '123456')
    homePage.checkHomePageSection()

  })

  it('Login com usuário inválido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('usuario', 'senha')
    loginPage.checkAccessInvalid()
  })
  
})



