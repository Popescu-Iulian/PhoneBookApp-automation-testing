'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
exports.config = {
	framework: 'jasmine',
	capabilities: {
		browserName: 'chrome'
	},
	specs: ['./specs/phonebook.js'],
	// seleniumAddress: 'http://localhost:4444/wd/hub'
	directConnect: true
};
