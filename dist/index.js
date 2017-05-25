(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reactCustomizableModal = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
	_inherits(Modal, _Component);

	function Modal() {
		_classCallCheck(this, Modal);

		return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	}

	_createClass(Modal, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    zIndex = _props.zIndex,
			    className = _props.className,
			    children = _props.children,
			    onSubmit = _props.onSubmit,
			    onClose = _props.onClose,
			    noSubmit = _props.noSubmit,
			    submitText = _props.submitText,
			    closeText = _props.closeText,
			    visible = _props.visible;

			var hasZIndex = typeof zIndex !== 'undefined';
			var style = {};

			if (hasZIndex) {
				style.zIndex = zIndex;
			}

			return _react2.default.createElement(
				'div',
				{ className: "modal-background" + (visible ? " show" : ""), style: style },
				_react2.default.createElement(
					'div',
					{ className: "modal" + (visible ? " show" : "") + (className ? ' ' + className : "") },
					_react2.default.createElement(
						'div',
						{ className: 'modal-close', onClick: onClose },
						'\xD7'
					),
					_react2.default.createElement(
						'div',
						{ className: 'modal-title' },
						_react2.default.createElement(
							'div',
							{ className: 'back', onClick: onClose },
							_react2.default.createElement('i', { className: 'fa fa-arrow-circle-o-left' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'text' },
							name
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'modal-body' },
						children
					),
					_react2.default.createElement(
						'div',
						{ className: 'modal-buttons' },
						_react2.default.createElement(
							'button',
							{ className: "modal-buttons__close" + (noSubmit ? " full-width" : ""), onClick: onClose },
							closeText
						),
						!noSubmit && _react2.default.createElement(
							'button',
							{ className: 'modal-buttons__submit', onClick: onSubmit },
							submitText
						)
					)
				)
			);
		}
	}]);

	return Modal;
}(_react.Component);

Modal.propTypes = {
	name: _react.PropTypes.string.isRequired,
	zIndex: _react.PropTypes.number,
	className: _react.PropTypes.string,
	onSubmit: _react.PropTypes.func,
	onClose: _react.PropTypes.func,
	noSubmit: _react.PropTypes.bool,
	submitText: _react.PropTypes.string,
	closeText: _react.PropTypes.string,
	visible: _react.PropTypes.bool.isRequired
};
Modal.defaultProps = {
	className: '',
	onSubmit: function onSubmit() {},
	onClose: function onClose() {},
	noSubmit: false,
	submitText: 'Submit',
	closeText: 'Close'
};
exports.default = Modal;

},{"react":undefined}]},{},[1])(1)
});