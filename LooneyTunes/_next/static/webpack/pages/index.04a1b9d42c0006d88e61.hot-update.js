webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Components_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Head */ \"./Components/Head/index.js\");\n/* harmony import */ var _Components_VideoPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/VideoPlayer */ \"./Components/VideoPlayer/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/shoe/Code/LooneyTunes/src/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_Component) {\n  Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      playlistUrl: \"video/1/output.m3u8\"\n    };\n    _this.changePlaylist = _this.changePlaylist.bind(Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_Users_shoe_Code_LooneyTunes_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home, [{\n    key: \"changePlaylist\",\n    value: function changePlaylist(videoNumber) {\n      this.setState({\n        playlistUrl: \"video/\".concat(videoNumber, \"/output.m3u8\")\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_Head__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          title: \"Merry Meolodies\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.tunes,\n            children: \"Looney Tunes Player\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.description,\n            children: \"Please select an episode to get started\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.grid,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              href: \"#video\",\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.card,\n              onClick: function onClick() {\n                return _this2.changePlaylist(1);\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                children: \"The Tale of Two Kittens\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 18\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              href: \"#video\",\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.card,\n              onClick: function onClick() {\n                return _this2.changePlaylist(2);\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"Learn about Next.js in an interactive course with quizzes!\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              href: \"#video\",\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.card,\n              onClick: this.changePlaylist(3),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                children: \"Deploy \\u2192\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_VideoPlayer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n              id: \"video\",\n              playlistUrl: this.state.playlistUrl\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://github.com/shoesCodeFor\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: [\"Written by Schuyler Ankele\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/github.svg\",\n              alt: \"Vercel Logo\",\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.logo\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJzdGF0ZSIsInBsYXlsaXN0VXJsIiwiY2hhbmdlUGxheWxpc3QiLCJiaW5kIiwidmlkZW9OdW1iZXIiLCJzZXRTdGF0ZSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0dW5lcyIsImRlc2NyaXB0aW9uIiwiZ3JpZCIsImNhcmQiLCJmb290ZXIiLCJsb2dvIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVc7QUFEQSxLQUFiO0FBR0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixzSkFBdEI7QUFMaUI7QUFNbkI7Ozs7bUNBRWVDLFcsRUFBYTtBQUMxQixXQUFLQyxRQUFMLENBQWM7QUFDWkosbUJBQVcsa0JBQVdHLFdBQVg7QUFEQyxPQUFkO0FBR0Q7Ozs2QkFFUTtBQUFBOztBQUNQLDBCQUNFO0FBQUssaUJBQVMsRUFBRUUsK0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQSxnQ0FDRSxxRUFBQyx3REFBRDtBQUFNLGVBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFHRTtBQUFNLG1CQUFTLEVBQUVELCtEQUFNLENBQUNFLElBQXhCO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFRiwrREFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUcscUJBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFTRTtBQUFLLHFCQUFTLEVBQUVKLCtEQUFNLENBQUNLLElBQXZCO0FBQUEsb0NBQ0U7QUFBSyxrQkFBSSxFQUFDLFFBQVY7QUFBbUIsdUJBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sSUFBckM7QUFBMkMscUJBQU8sRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ1YsY0FBTCxDQUFvQixDQUFwQixDQUFOO0FBQUEsZUFBcEQ7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUEsdUNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBTUU7QUFBSyxrQkFBSSxFQUFDLFFBQVY7QUFBbUIsdUJBQVMsRUFBRUksK0RBQU0sQ0FBQ00sSUFBckM7QUFBMkMscUJBQU8sRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ1YsY0FBTCxDQUFvQixDQUFwQixDQUFOO0FBQUEsZUFBcEQ7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBV0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFDZ0IsdUJBQVMsRUFBRUksK0RBQU0sQ0FBQ00sSUFEbEM7QUFDd0MscUJBQU8sRUFBRSxLQUFLVixjQUFMLENBQW9CLENBQXBCLENBRGpEO0FBQUEsc0NBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLGVBNkJFO0FBQUEsbUNBQ0UscUVBQUMsK0RBQUQ7QUFBYSxnQkFBRSxFQUFDLE9BQWhCO0FBQXdCLHlCQUFXLEVBQUUsS0FBS0YsS0FBTCxDQUFXQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBcUNFO0FBQVEsbUJBQVMsRUFBRUssK0RBQU0sQ0FBQ08sTUFBMUI7QUFBQSxpQ0FDRTtBQUNFLGdCQUFJLEVBQUMsaUNBRFA7QUFFRSxrQkFBTSxFQUFDLFFBRlQ7QUFHRSxlQUFHLEVBQUMscUJBSE47QUFBQSxrRUFNRTtBQUFLLGlCQUFHLEVBQUMsYUFBVDtBQUF1QixpQkFBRyxFQUFDLGFBQTNCO0FBQXlDLHVCQUFTLEVBQUVQLCtEQUFNLENBQUNRO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFrREQ7Ozs7RUFsRWdCQywrQzs7QUFxRUpqQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkJ1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4uL0NvbXBvbmVudHMvVmlkZW9QbGF5ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXlsaXN0VXJsOiBgdmlkZW8vMS9vdXRwdXQubTN1OGAsXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlUGxheWxpc3QgPSB0aGlzLmNoYW5nZVBsYXlsaXN0LmJpbmQodGhpcyk7XG4gfVxuXG4gIGNoYW5nZVBsYXlsaXN0KHZpZGVvTnVtYmVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGF5bGlzdFVybDogYHZpZGVvLyR7dmlkZW9OdW1iZXJ9L291dHB1dC5tM3U4YCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SGVhZCB0aXRsZT1cIk1lcnJ5IE1lb2xvZGllc1wiLz5cbiAgXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50dW5lc30+XG4gICAgICAgICAgICBMb29uZXkgVHVuZXMgUGxheWVyXG4gICAgICAgICAgPC9oMT5cbiAgXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgUGxlYXNlIHNlbGVjdCBhbiBlcGlzb2RlIHRvIGdldCBzdGFydGVkXG4gICAgICAgICAgPC9wPlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgPGRpdiBocmVmPVwiI3ZpZGVvXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VQbGF5bGlzdCgxKX0+XG4gICAgICAgICAgICAgIDxoMz5UaGUgVGFsZSBvZiBUd28gS2l0dGVuczwvaDM+XG4gICAgICAgICAgICAgIDxwPjxpbWcgLz48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGhyZWY9XCIjdmlkZW9cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZVBsYXlsaXN0KDIpfT5cbiAgICAgICAgICAgICAgPGgzPjwvaDM+XG4gICAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGhyZWY9XCIjdmlkZW9cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVBsYXlsaXN0KDMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDM+RGVwbG95ICZyYXJyOzwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIGlkPVwidmlkZW9cIiBwbGF5bGlzdFVybD17dGhpcy5zdGF0ZS5wbGF5bGlzdFVybH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gIFxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hvZXNDb2RlRm9yXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBXcml0dGVuIGJ5IFNjaHV5bGVyIEFua2VsZVxuICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2l0aHViLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})