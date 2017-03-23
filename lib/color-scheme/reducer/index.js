'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorScheme = function ColorScheme() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { changed: false };
	var action = arguments[1];
	var type = action.type;
	var payload = action.payload;

	switch (type) {
		case 'SCHEME_SWITCHED':
			return _extends({}, state, {
				changed: true,
				schemeProperties: payload
			});
		default:
			return state;
	}
};

exports.default = ColorScheme;
module.exports = exports['default'];