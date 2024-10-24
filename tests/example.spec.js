// example.spec.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/homePage');
const SearchResultsPage = require('../pageObjects/searchResultsPage');

test('verify bus booking on Shohoz', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await homePage.navigate('https://www.shohoz.com/');

  // Verify Bus is selected by default
  const isBusSelected = await homePage.isBusSelected();
  expect(isBusSelected).toBeTruthy();

  // Search for one-way ticket
  await homePage.searchOneWayTicket('Dhaka', 'Chittagong', '30');

  // Wait for search results to load
  const isTextVisible = await searchResultsPage.isDepartingTicketVisible();
  expect(isTextVisible).toBeTruthy();

  // Select Bus Type and Operator
  await searchResultsPage.selectBusTypeAndOperator();

  // Select the lowest price ticket and book
  await searchResultsPage.selectLowestPriceTicket();

  // Verify booking details
  await searchResultsPage.selectSeats(4);
});