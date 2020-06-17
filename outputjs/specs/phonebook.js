'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var protractor_1 = require('protractor');
describe('Calculator test', function () {
	beforeEach(function () {
		protractor_1.browser.waitForAngularEnabled(false);
		protractor_1.browser.get(
			'https://popescu-iulian.github.io/Phone-Book-app/'
		);
	});

	it('Add a contact', function () {
		protractor_1.element(protractor_1.by.className('name')).sendKeys('Iulian');
		protractor_1
			.element(protractor_1.by.className('phone'))
			.sendKeys('73452675843');
		protractor_1.element(protractor_1.by.className('btn')).click();
	});
});
