import { browser, element, by } from 'protractor';

describe('Calculator test', () => {
	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('https://popescu-iulian.github.io/Phone-Book-app/');
	});

	it('Add a contact', () => {
		element(by.className('name')).sendKeys('Iulian');
		element(by.className('phone')).sendKeys('73452675843');
		element(by.className('btn')).click();
	});
});
