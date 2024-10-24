// searchResultsPage.js
const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.departingTicketText = 'text=Choose Departing Ticket';
    this.busTypeAC = '#bus-type-1';
    this.operatorGreenLine = '#operator-24';
    this.operatorShohag = '#operator-173';
    this.lowToHighButton = 'button:has-text("Low to High")';
    this.bookTicketButton = 'button.btn-book-ticket:first-of-type';
    this.availableSeats = 'button.btn-seat.seat-available';
  }

  async isDepartingTicketVisible() {
    return await this.page.isVisible(this.departingTicketText);
  }

  async selectBusTypeAndOperator() {
    await this.page.click(this.busTypeAC);
    await this.page.click(this.operatorGreenLine);
    await this.page.click(this.operatorShohag);
  }

  async selectLowestPriceTicket() {
    await this.page.click(this.lowToHighButton);
    await this.page.click(this.bookTicketButton);
  }

  async selectSeats(numberOfSeats) {
    const seatButtons = await this.page.$$(this.availableSeats);
    if (seatButtons.length < numberOfSeats) {
      throw new Error(`Not enough available seats to select ${numberOfSeats} tickets.`);
    }
    for (let i = 0; i < numberOfSeats; i++) {
      await seatButtons[i].click();
      await this.page.waitForTimeout(500); // Adjust as needed
    }
  }
}

module.exports = SearchResultsPage;