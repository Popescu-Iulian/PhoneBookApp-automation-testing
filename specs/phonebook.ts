import { browser, element, by } from 'protractor';

describe('Adding new contact test', () => {
	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('https://popescu-iulian.github.io/Phone-Book-app/');
	});

	it('Add a contact', () => {
		element(by.className('name')).sendKeys('Iulian');
		browser.sleep(2000);
		element(by.className('phone')).sendKeys('73452675843');
		browser.sleep(2000);
		element(by.className('btn')).click();
		browser.sleep(2000);
	});
});
