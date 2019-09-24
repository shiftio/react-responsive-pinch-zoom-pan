"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getContainerStyle = function getContainerStyle(extraStyle) {
  return _objectSpread({
    position: 'absolute',
    zIndex: 1000
  }, extraStyle);
};

var ZoomOutButton = function ZoomOutButton(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      zoomOutComponent = _ref.zoomOutComponent;

  if (zoomOutComponent) {
    return _react.default.createElement("div", {
      onClick: onClick
    }, zoomOutComponent);
  }

  return _react.default.createElement("button", {
    className: "iconButton",
    style: {
      margin: '10px'
    },
    onClick: onClick,
    disabled: disabled
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMinus
  }));
};

var ZoomInButton = function ZoomInButton(_ref2) {
  var disabled = _ref2.disabled,
      onClick = _ref2.onClick,
      zoomInComponent = _ref2.zoomInComponent;

  if (zoomInComponent) {
    return _react.default.createElement("div", {
      onClick: onClick
    }, zoomInComponent);
  }

  return _react.default.createElement("button", {
    className: "iconButton",
    style: {
      margin: '10px',
      marginLeft: '0px'
    },
    onClick: onClick,
    disabled: disabled
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlus
  }));
};

var ZoomButtons = function ZoomButtons(_ref3) {
  var scale = _ref3.scale,
      minScale = _ref3.minScale,
      maxScale = _ref3.maxScale,
      onZoomInClick = _ref3.onZoomInClick,
      onZoomOutClick = _ref3.onZoomOutClick,
      zoomInComponent = _ref3.zoomInComponent,
      zoomOutComponent = _ref3.zoomOutComponent,
      extraStyle = _ref3.extraStyle;
  return _react.default.createElement("div", {
    style: getContainerStyle(extraStyle)
  }, _react.default.createElement(ZoomOutButton, {
    onClick: onZoomOutClick,
    disabled: scale <= minScale,
    zoomOutComponent: zoomOutComponent
  }), _react.default.createElement(ZoomInButton, {
    onClick: onZoomInClick,
    disabled: scale >= maxScale,
    zoomInComponent: zoomInComponent
  }));
};

ZoomButtons.propTypes = {
  scale: _propTypes.default.number.isRequired,
  minScale: _propTypes.default.number.isRequired,
  maxScale: _propTypes.default.number.isRequired,
  onZoomInClick: _propTypes.default.func.isRequired,
  onZoomOutClick: _propTypes.default.func.isRequired
};
var _default = ZoomButtons;
exports.default = _default;