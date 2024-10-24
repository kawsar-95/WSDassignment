// homePage.js
const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.busOption = 'a[routerlink="/bus-tickets"].current';
    this.fromCityInput = '#fromcity';
    this.toCityInput = '#tocity';
    this.datePicker = '#doj';
    this.submitButton = "button[type='submit']";
  }

  async isBusSelected() {
    return await this.page.isVisible(this.busOption);
  }

  async searchOneWayTicket(from, to, date) {
    await this.page.fill(this.fromCityInput, from);
    await this.page.fill(this.toCityInput, to);
    await this.page.click(this.datePicker);
    await this.page.click(`text=${date}`);
    await this.page.click(this.submitButton);
  }
}

module.exports = HomePage;