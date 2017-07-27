(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["letter-paragraph"] = factory();
	else
		root["letter-paragraph"] = factory();
})(this, function() {
return webpackJsonpletter_paragraph([4],{

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Biyaheroes Developers
              		@email: developers@biyaheroes.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "bh-mj-letter-paragraph",
              			"path": "bh-mj-letter-paragraph/letter-paragraph.jsx",
              			"file": "letter-paragraph.jsx",
              			"module": "letter-paragraph",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-letter-greeting.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Biyaheroes MJML Letter Paragraph Component.
              	@end-module-documentation
              
              	@include:
              		{
              			"MJMLElement": "mjml-core",
              			"React": "react",
              			"Component": "react.Component",
              			"Column": "mjml-column",
              			"Table": "mjml-table",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(305);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(313);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(317);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(318);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(322);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(344);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _mjmlCore = __webpack_require__(30);
var _react = __webpack_require__(45);var _react2 = _interopRequireDefault(_react);
var _mjmlColumn = __webpack_require__(671);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = __webpack_require__(676);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(677);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _wichevr = __webpack_require__(678);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-letter-paragraph";

var parentTag = ["mj-container", "mj-section"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"paragraph": "" } };var




LetterParagraph = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {(0, _inherits3.default)(LetterParagraph, _Component);function LetterParagraph() {(0, _classCallCheck3.default)(this, LetterParagraph);return (0, _possibleConstructorReturn3.default)(this, (LetterParagraph.__proto__ || (0, _getPrototypeOf2.default)(LetterParagraph)).apply(this, arguments));}(0, _createClass3.default)(LetterParagraph, [{ key: "render", value: function render()
		{var
			mjAttribute = this.props.mjAttribute;var

			paragraph = this.props.paragraph;

			paragraph = (0, _wichevr2.default)(paragraph, mjAttribute("paragraph"));

			return _react2.default.createElement(_mjmlSection2.default, (0, _extends3.default)({},
				this.props, {
					padding: "10px 0px 10px 0px" }),

				_react2.default.createElement(_mjmlColumn2.default, null,
					_react2.default.createElement(_mjmlText2.default, {
							style: {
								"padding": "0px 30px 0px 30px",
								"fontSize": "17px",
								"letterSpacing": "0.5px" } },


						paragraph)));



		} }]);return LetterParagraph;}(_react.Component)) || _class;


LetterParagraph.tagName = tagName;
LetterParagraph.parentTag = parentTag;
LetterParagraph.endingTag = endingTag;
LetterParagraph.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

LetterParagraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci1wYXJhZ3JhcGguanN4Il0sIm5hbWVzIjpbInRhZ05hbWUiLCJwYXJlbnRUYWciLCJlbmRpbmdUYWciLCJkZWZhdWx0TUpNTERlZmluaXRpb24iLCJMZXR0ZXJQYXJhZ3JhcGgiLCJtakF0dHJpYnV0ZSIsInByb3BzIiwicGFyYWdyYXBoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0EsOEI7QUFDQSx5QztBQUNBLDJDO0FBQ0EscUM7O0FBRUEsa0M7O0FBRUEsSUFBTUEsVUFBVSxxQkFBaEI7O0FBRUEsSUFBTUMsWUFBWSxDQUFFLGNBQUYsRUFBa0IsWUFBbEIsQ0FBbEI7O0FBRUEsSUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxJQUFNQyx3QkFBd0I7QUFDN0IsWUFBVyxFQURrQjtBQUU3QixlQUFjO0FBQ2IsZUFBYSxFQURBLEVBRmUsRUFBOUIsQzs7Ozs7QUFRTUMsZTtBQUNJO0FBQ0FDLGNBREEsR0FDZ0IsS0FBS0MsS0FEckIsQ0FDQUQsV0FEQTs7QUFHRkUsWUFIRSxHQUdZLEtBQUtELEtBSGpCLENBR0ZDLFNBSEU7O0FBS1JBLGVBQVksdUJBQVVBLFNBQVYsRUFBcUJGLFlBQWMsV0FBZCxDQUFyQixDQUFaOztBQUVBLFVBQVM7QUFDRCxTQUFLQyxLQURKO0FBRU4sY0FBUSxtQkFGRjs7QUFJTjtBQUNFO0FBQ0MsY0FBUTtBQUNQLG1CQUFXLG1CQURKO0FBRVAsb0JBQVksTUFGTDtBQUdQLHlCQUFpQixPQUhWLEVBRFQ7OztBQU9HQyxlQVBILENBREYsQ0FKTSxDQUFUOzs7O0FBZ0JBLEc7OztBQUdGSCxnQkFBZ0JKLE9BQWhCLEdBQTBCQSxPQUExQjtBQUNBSSxnQkFBZ0JILFNBQWhCLEdBQTRCQSxTQUE1QjtBQUNBRyxnQkFBZ0JGLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUNBRSxnQkFBZ0JELHFCQUFoQixHQUF3Q0EscUJBQXhDLEM7O0FBRWVDLGUiLCJmaWxlIjoibGV0dGVyLXBhcmFncmFwaC5qc3giLCJzb3VyY2VSb290IjoiL21udC9jL1VzZXJzL3ZpbnNlL0RvY3VtZW50cy9CaXlhaGVyb2VzL2JoL2JoLW1qLWxldHRlci1wYXJhZ3JhcGgiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBCaXlhaGVyb2VzIERldmVsb3BlcnNcclxuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImJoLW1qLWxldHRlci1wYXJhZ3JhcGhcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiYmgtbWotbGV0dGVyLXBhcmFncmFwaC9sZXR0ZXItcGFyYWdyYXBoLmpzeFwiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJsZXR0ZXItcGFyYWdyYXBoLmpzeFwiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldHRlci1wYXJhZ3JhcGhcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJCaXlhaGVyb2VzIERldmVsb3BlcnNcIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiUm9ib3QgQml5YWhlcm9lcyA8cm9ib3RAYml5YWhlcm9lcy5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwiZU1haWxcIjogXCJkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXCIsXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9CaXlhaGVyb2VzL2JoLW1qLWxldHRlci1ncmVldGluZy5naXRcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0Qml5YWhlcm9lcyBNSk1MIExldHRlciBQYXJhZ3JhcGggQ29tcG9uZW50LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiTUpNTEVsZW1lbnRcIjogXCJtam1sLWNvcmVcIixcclxuXHRcdFx0XCJSZWFjdFwiOiBcInJlYWN0XCIsXHJcblx0XHRcdFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXHJcblx0XHRcdFwiQ29sdW1uXCI6IFwibWptbC1jb2x1bW5cIixcclxuXHRcdFx0XCJUYWJsZVwiOiBcIm1qbWwtdGFibGVcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5pbXBvcnQgeyBNSk1MRWxlbWVudCB9IGZyb20gXCJtam1sLWNvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCJtam1sLWNvbHVtblwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwibWptbC1zZWN0aW9uXCI7XHJcbmltcG9ydCBUZXh0IGZyb20gXCJtam1sLXRleHRcIjtcclxuXHJcbmltcG9ydCB3aWNoZXZyIGZyb20gXCJ3aWNoZXZyXCI7XHJcblxyXG5jb25zdCB0YWdOYW1lID0gXCJtai1sZXR0ZXItcGFyYWdyYXBoXCI7XHJcblxyXG5jb25zdCBwYXJlbnRUYWcgPSBbIFwibWotY29udGFpbmVyXCIsIFwibWotc2VjdGlvblwiIF07XHJcblxyXG5jb25zdCBlbmRpbmdUYWcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IGRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IHtcclxuXHRcImNvbnRlbnRcIjogXCJcIixcclxuXHRcImF0dHJpYnV0ZXNcIjoge1xyXG5cdFx0XCJwYXJhZ3JhcGhcIjogXCJcIlxyXG5cdH1cclxufTtcclxuXHJcbkBNSk1MRWxlbWVudFxyXG5jbGFzcyBMZXR0ZXJQYXJhZ3JhcGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlciggKXtcclxuXHRcdGNvbnN0IHsgbWpBdHRyaWJ1dGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0bGV0IHsgcGFyYWdyYXBoIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHBhcmFncmFwaCA9IHdpY2hldnIgKCBwYXJhZ3JhcGgsIG1qQXR0cmlidXRlICggXCJwYXJhZ3JhcGhcIiApICk7XHJcblxyXG5cdFx0cmV0dXJuICggPFNlY3Rpb25cclxuXHRcdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XHJcblx0XHRcdFx0XHRwYWRkaW5nPVwiMTBweCAwcHggMTBweCAwcHhcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxDb2x1bW4+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInBhZGRpbmdcIjogXCIwcHggMzBweCAwcHggMzBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImZvbnRTaXplXCI6IFwiMTdweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxldHRlclNwYWNpbmdcIjogXCIwLjVweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0eyBwYXJhZ3JhcGggfSBcclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHRcdFxyXG5cdFx0XHRcdFx0PC9Db2x1bW4+XHJcblx0XHRcdFx0PC9TZWN0aW9uPiApO1xyXG5cdH1cclxufVxyXG5cclxuTGV0dGVyUGFyYWdyYXBoLnRhZ05hbWUgPSB0YWdOYW1lO1xyXG5MZXR0ZXJQYXJhZ3JhcGgucGFyZW50VGFnID0gcGFyZW50VGFnO1xyXG5MZXR0ZXJQYXJhZ3JhcGguZW5kaW5nVGFnID0gZW5kaW5nVGFnO1xyXG5MZXR0ZXJQYXJhZ3JhcGguZGVmYXVsdE1KTUxEZWZpbml0aW9uID0gZGVmYXVsdE1KTUxEZWZpbml0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGV0dGVyUGFyYWdyYXBoO1xyXG4iXX0=

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[304]);
});
//# sourceMappingURL=letter-paragraph.support.js.map