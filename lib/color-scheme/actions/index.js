'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var switchScheme = exports.switchScheme = function switchScheme(schemeName) {
	return {
		type: 'SCHEME_SWITCHED',
		payload: schemeName
	};
};