class MenuPage {
    selectorsList () {
        const selectors = {
            balanceField: "[data-test='sidenav-user-balance']"     
        }

        return selectors
    }

    checkBalance () {
        return cy.get(this.selectorsList().balanceField)
          .invoke('text')
          .then((balanceText) => {
            // Remove "$", espaços e converte para número
            return parseFloat(balanceText.replace('$', '').trim());
          });
      }
}    



export default MenuPage