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

describe('Transactions', () => {

    beforeEach(() => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser('broskibroski', '123456')
      });

      it('Send money with funds', () => {
        menuPage.checkBalance().then((balance) => {
          const amountToSend = 10;
        homePage.performNewTransaction()
        transactionPage.selectContact()
        transactionPage.fillAmount(amountToSend)
        transactionPage.leaveNote('Pix de Teste')
        transactionPage.payTransaction()
        transactionPage.paymentSuccessCheck()
        menuPage.checkBalance().then((newBalance) => {
          expect(newBalance).to.equal(balance - amountToSend)
        })
      })
    })

    it.only('Send money without enough funds', () => {
      menuPage.checkBalance().then((balance) => {
        const amountToSend = balance + 1;
      homePage.performNewTransaction()
      transactionPage.selectContact()
      transactionPage.fillAmount(amountToSend)
      transactionPage.leaveNote('Pix de Teste')
      transactionPage.payTransaction()
      transactionPage.paymentFailureCheck()
      })
    })
})
