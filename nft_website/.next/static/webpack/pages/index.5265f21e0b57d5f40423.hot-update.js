/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/incrementButton.js":
/*!***************************************!*\
  !*** ./components/incrementButton.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/robkelly/workspace/NFT_demo/nft_website/components/incrementButton.js\";\n\nfunction decrement(e) {\n  var btn = e.target.parentNode.parentElement.querySelector('button[data-action=\"decrement\"]');\n  var target = btn.nextElementSibling;\n  var value = Number(target.value);\n  value--;\n  target.value = value;\n}\n\nfunction increment(e) {\n  var btn = e.target.parentNode.parentElement.querySelector('button[data-action=\"decrement\"]');\n  var target = btn.nextElementSibling;\n  var value = Number(target.value);\n  value++;\n  target.value = value;\n} // const decrementButtons = document.querySelectorAll(\n//   `button[data-action=\"decrement\"]`\n// );\n//\n// const incrementButtons = document.querySelectorAll(\n//   `button[data-action=\"increment\"]`\n// );\n// //\n// // decrementButtons.forEach(btn => {\n// //   btn.addEventListener(\"click\", decrement);\n// // });\n// //\n// // incrementButtons.forEach(btn => {\n// //   btn.addEventListener(\"click\", increment);\n// // });\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n  var numPumpkins = props.numPumpkins,\n      setNumPumpkins = props.setNumPumpkins;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    \"class\": \"custom-number-input h-10 w-32\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"custom-input-number\",\n      \"class\": \"w-full text-gray-700 text-sm font-semibold\",\n      children: \"Counter Input\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-action\": \"decrement\",\n        \"class\": \" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          \"class\": \"m-auto text-2xl font-thin\",\n          children: \"\\u2212\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        \"class\": \"outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none\",\n        name: \"custom-input-number\",\n        value: props.numPumpkins\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onChange: function onChange(e) {\n          return setNumPumpkins(numPumpkins + 1);\n        },\n        \"data-action\": \"increment\",\n        \"class\": \"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          \"class\": \"m-auto text-2xl font-thin\",\n          children: \"+\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmNyZW1lbnRCdXR0b24uanM/NTFjZiJdLCJuYW1lcyI6WyJkZWNyZW1lbnQiLCJlIiwiYnRuIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidmFsdWUiLCJOdW1iZXIiLCJpbmNyZW1lbnQiLCJwcm9wcyIsIm51bVB1bXBraW5zIiwic2V0TnVtUHVtcGtpbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNwQixNQUFNQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUFULENBQW9CQyxhQUFwQixDQUFrQ0MsYUFBbEMsQ0FDVixpQ0FEVSxDQUFaO0FBR0EsTUFBTUgsTUFBTSxHQUFHRCxHQUFHLENBQUNLLGtCQUFuQjtBQUNBLE1BQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDTixNQUFNLENBQUNLLEtBQVIsQ0FBbEI7QUFDQUEsT0FBSztBQUNMTCxRQUFNLENBQUNLLEtBQVAsR0FBZUEsS0FBZjtBQUNEOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJULENBQW5CLEVBQXNCO0FBQ3BCLE1BQU1DLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQVQsQ0FBb0JDLGFBQXBCLENBQWtDQyxhQUFsQyxDQUNWLGlDQURVLENBQVo7QUFHQSxNQUFNSCxNQUFNLEdBQUdELEdBQUcsQ0FBQ0ssa0JBQW5CO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNOLE1BQU0sQ0FBQ0ssS0FBUixDQUFsQjtBQUNBQSxPQUFLO0FBQ0xMLFFBQU0sQ0FBQ0ssS0FBUCxHQUFlQSxLQUFmO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsNkJBQWUsb0NBQVNHLEtBQVQsRUFBZ0I7QUFBQSxNQUNyQkMsV0FEcUIsR0FDV0QsS0FEWCxDQUNyQkMsV0FEcUI7QUFBQSxNQUNSQyxjQURRLEdBQ1dGLEtBRFgsQ0FDUkUsY0FEUTtBQUU3QixzQkFDRTtBQUFLLGFBQU0sK0JBQVg7QUFBQSw0QkFDRTtBQUFPLGFBQU8sRUFBQyxxQkFBZjtBQUFxQyxlQUFNLDRDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBSyxlQUFNLG1FQUFYO0FBQUEsOEJBQ0U7QUFBUSx1QkFBWSxXQUFwQjtBQUFnQyxpQkFBTSxvSEFBdEM7QUFBQSwrQkFDRTtBQUFNLG1CQUFNLDJCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBTSxrTUFBM0I7QUFBOE4sWUFBSSxFQUFDLHFCQUFuTztBQUF5UCxhQUFLLEVBQUVGLEtBQUssQ0FBQ0M7QUFBdFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0E7QUFBUSxnQkFBUSxFQUFFLGtCQUFBWCxDQUFDO0FBQUEsaUJBQUlZLGNBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQWYsQ0FBbEI7QUFBQSxTQUFuQjtBQUF3RCx1QkFBWSxXQUFwRTtBQUFnRixpQkFBTSxzR0FBdEY7QUFBQSwrQkFDRTtBQUFNLG1CQUFNLDJCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2luY3JlbWVudEJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRlY3JlbWVudChlKSB7XG4gIGNvbnN0IGJ0biA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b25bZGF0YS1hY3Rpb249XCJkZWNyZW1lbnRcIl0nXG4gICk7XG4gIGNvbnN0IHRhcmdldCA9IGJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGxldCB2YWx1ZSA9IE51bWJlcih0YXJnZXQudmFsdWUpO1xuICB2YWx1ZS0tO1xuICB0YXJnZXQudmFsdWUgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50KGUpIHtcbiAgY29uc3QgYnRuID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbltkYXRhLWFjdGlvbj1cImRlY3JlbWVudFwiXSdcbiAgKTtcbiAgY29uc3QgdGFyZ2V0ID0gYnRuLm5leHRFbGVtZW50U2libGluZztcbiAgbGV0IHZhbHVlID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gIHZhbHVlKys7XG4gIHRhcmdldC52YWx1ZSA9IHZhbHVlO1xufVxuXG4vLyBjb25zdCBkZWNyZW1lbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbi8vICAgYGJ1dHRvbltkYXRhLWFjdGlvbj1cImRlY3JlbWVudFwiXWBcbi8vICk7XG4vL1xuLy8gY29uc3QgaW5jcmVtZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4vLyAgIGBidXR0b25bZGF0YS1hY3Rpb249XCJpbmNyZW1lbnRcIl1gXG4vLyApO1xuLy8gLy9cbi8vIC8vIGRlY3JlbWVudEJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuLy8gLy8gICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlY3JlbWVudCk7XG4vLyAvLyB9KTtcbi8vIC8vXG4vLyAvLyBpbmNyZW1lbnRCdXR0b25zLmZvckVhY2goYnRuID0+IHtcbi8vIC8vICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNyZW1lbnQpO1xuLy8gLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgbnVtUHVtcGtpbnMsIHNldE51bVB1bXBraW5zIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLW51bWJlci1pbnB1dCBoLTEwIHctMzJcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tLWlucHV0LW51bWJlclwiIGNsYXNzPVwidy1mdWxsIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+Q291bnRlciBJbnB1dFxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGgtMTAgdy1mdWxsIHJvdW5kZWQtbGcgcmVsYXRpdmUgYmctdHJhbnNwYXJlbnQgbXQtMVwiPlxuICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aW9uPVwiZGVjcmVtZW50XCIgY2xhc3M9XCIgYmctZ3JheS0zMDAgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNDAwIGgtZnVsbCB3LTIwIHJvdW5kZWQtbCBjdXJzb3ItcG9pbnRlciBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm0tYXV0byB0ZXh0LTJ4bCBmb250LXRoaW5cIj7iiJI8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciB3LWZ1bGwgYmctZ3JheS0zMDAgZm9udC1zZW1pYm9sZCB0ZXh0LW1kIGhvdmVyOnRleHQtYmxhY2sgZm9jdXM6dGV4dC1ibGFjayAgbWQ6dGV4dC1iYXNlY3Vyc29yLWRlZmF1bHQgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTcwMCAgb3V0bGluZS1ub25lXCIgbmFtZT1cImN1c3RvbS1pbnB1dC1udW1iZXJcIiB2YWx1ZT17cHJvcHMubnVtUHVtcGtpbnN9PjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIG9uQ2hhbmdlPXtlID0+IHNldE51bVB1bXBraW5zKG51bVB1bXBraW5zICsgMSl9IGRhdGEtYWN0aW9uPVwiaW5jcmVtZW50XCIgY2xhc3M9XCJiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS00MDAgaC1mdWxsIHctMjAgcm91bmRlZC1yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibS1hdXRvIHRleHQtMnhsIGZvbnQtdGhpblwiPis8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/incrementButton.js\n");

/***/ })

});