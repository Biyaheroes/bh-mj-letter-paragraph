"use strict";function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}Object.defineProperty(exports, "__esModule", { value: !0 });var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf),_classCallCheck2 = require("babel-runtime/helpers/classCallCheck"),_classCallCheck3 = _interopRequireDefault(_classCallCheck2),_createClass2 = require("babel-runtime/helpers/createClass"),_createClass3 = _interopRequireDefault(_createClass2),_possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2),_inherits2 = require("babel-runtime/helpers/inherits"),_inherits3 = _interopRequireDefault(_inherits2),_class,_mjmlCore = require("mjml-core"),_react = require("react"),_react2 = _interopRequireDefault(_react),_mjmlColumn = require("mjml-column"),_mjmlColumn2 = _interopRequireDefault(_mjmlColumn),_mjmlSection = require("mjml-section"),_mjmlSection2 = _interopRequireDefault(_mjmlSection),_mjmlText = require("mjml-text"),_mjmlText2 = _interopRequireDefault(_mjmlText),_wichevr = require("wichevr"),_wichevr2 = _interopRequireDefault(_wichevr),tagName = "mj-letter-paragraph",parentTag = ["mj-container", "mj-section"],endingTag = !1,defaultMJMLDefinition = { content: "", attributes: { paragraph: "" } },LetterParagraph = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {function LetterParagraph() {return (0, _classCallCheck3.default)(this, LetterParagraph), (0, _possibleConstructorReturn3.default)(this, (LetterParagraph.__proto__ || (0, _getPrototypeOf2.default)(LetterParagraph)).apply(this, arguments));}return (0, _inherits3.default)(LetterParagraph, _Component), (0, _createClass3.default)(LetterParagraph, [{ key: "render", value: function render() {var mjAttribute = this.props.mjAttribute,paragraph = this.props.paragraph;return paragraph = (0, _wichevr2.default)(paragraph, mjAttribute("paragraph")), _react2.default.createElement(_mjmlSection2.default, this.props, _react2.default.createElement(_mjmlColumn2.default, null, _react2.default.createElement(_mjmlText2.default, { padding: "10px 30px 10px 30px", "font-size": "15px", "letter-spacing": "0.5px" }, paragraph)));} }]), LetterParagraph;}(_react.Component)) || _class;LetterParagraph.tagName = tagName, LetterParagraph.parentTag = parentTag, LetterParagraph.endingTag = endingTag, LetterParagraph.defaultMJMLDefinition = defaultMJMLDefinition, exports.default = LetterParagraph;
//# sourceMappingURL=letter-paragraph.js.map

//# sourceMappingURL=letter-paragraph.support.js.map