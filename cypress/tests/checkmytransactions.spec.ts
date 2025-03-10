import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";
import HomePage from "./pages/homepage";
import TransactionPage from "./pages/transaction";
import MenuPage from "./pages/menu";

const loginPage = new LoginPage()
const registrationPage = new RegistrationPage()
const homePage = new HomePage()
const transactionPage = new TransactionPage()
const menuPage = new MenuPage()

describe('Check Mine Transactions', () => {

    it('Check if there is no transactions', () => {
      
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser('johncalvin', '123456')  
      homePage.checkMineTransactions()
      homePage.confirmEmptyTransactionList()
    })
  
    it('Check if transactions exist', () => {
      
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser('Yurijohn', '123456')  
        homePage.checkMineTransactions()
        homePage.confirmTransactionList()
      })
    
  })
  