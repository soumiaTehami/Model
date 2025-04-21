"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
const Modal = _ref => {
  let {
    message,
    onConfirm
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-box"
  }, /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("button", {
    className: "ok-button",
    onClick: onConfirm
  }, "OK")));
};
var _default = exports.default = Modal;