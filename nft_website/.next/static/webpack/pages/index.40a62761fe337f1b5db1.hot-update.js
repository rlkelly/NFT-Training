/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./components/wallet/connectors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/robkelly/workspace/NFT_demo/nft_website/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var contractABI = __webpack_require__(/*! ./contract-abi.json */ \"./pages/contract-abi.json\");\n\n  var contractAddress = \"0x86469F644a5C51d4a76618fa6d124b01DDC4dE22\";\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)(),\n      active = _useWeb3React.active,\n      account = _useWeb3React.account,\n      activate = _useWeb3React.activate,\n      deactivate = _useWeb3React.deactivate,\n      library = _useWeb3React.library;\n\n  function giveAway() {\n    return _giveAway.apply(this, arguments);\n  }\n\n  function _giveAway() {\n    _giveAway = (0,_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var signer, FbPumpkinsContract;\n      return _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              signer = library.getSigner();\n              FbPumpkinsContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, contractABI.abi, signer);\n              console.log('contract', FbPumpkinsContract);\n              console.log(FbPumpkinsContract.mint(0.001, 1));\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _giveAway.apply(this, arguments);\n  }\n\n  function connect() {\n    return _connect.apply(this, arguments);\n  }\n\n  function _connect() {\n    _connect = (0,_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n      return _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_5__.injected);\n\n            case 3:\n              _context2.next = 8;\n              break;\n\n            case 5:\n              _context2.prev = 5;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(_context2.t0);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 5]]);\n    }));\n    return _connect.apply(this, arguments);\n  }\n\n  function disconnect() {\n    return _disconnect.apply(this, arguments);\n  } // <button onClick={disconnect} className=\"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\">Disconnect</button>\n\n\n  function _disconnect() {\n    _disconnect = (0,_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n      return _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              try {\n                deactivate();\n              } catch (ex) {\n                console.log(ex);\n              }\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n    return _disconnect.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col items-center justify-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: connect,\n      className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n      children: \"Connect to MetaMask\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      children: [\"Connected with \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n        children: account\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 38\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      children: \"Not connected\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 64\n    }, this), active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: giveAway,\n      className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n      children: \" TEST \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 165\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"YmedqfCpuWnYn+kT3FLXNF52E/w=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiY29udHJhY3RBQkkiLCJyZXF1aXJlIiwiY29udHJhY3RBZGRyZXNzIiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiYWNjb3VudCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImxpYnJhcnkiLCJnaXZlQXdheSIsInNpZ25lciIsImdldFNpZ25lciIsIkZiUHVtcGtpbnNDb250cmFjdCIsImV0aGVycyIsImFiaSIsImNvbnNvbGUiLCJsb2ciLCJtaW50IiwiY29ubmVjdCIsImluamVjdGVkIiwiZGlzY29ubmVjdCIsImV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxXQUFXLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBM0I7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLDRDQUF4Qjs7QUFGNkIsc0JBSThCQyw4REFBWSxFQUoxQztBQUFBLE1BSXJCQyxNQUpxQixpQkFJckJBLE1BSnFCO0FBQUEsTUFJYkMsT0FKYSxpQkFJYkEsT0FKYTtBQUFBLE1BSUpDLFFBSkksaUJBSUpBLFFBSkk7QUFBQSxNQUlNQyxVQUpOLGlCQUlNQSxVQUpOO0FBQUEsTUFJa0JDLE9BSmxCLGlCQUlrQkEsT0FKbEI7O0FBQUEsV0FNZEMsUUFOYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxvVkFNN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VDLG9CQURWLEdBQ21CRixPQUFPLENBQUNHLFNBQVIsRUFEbkI7QUFFVUMsZ0NBRlYsR0FFK0IsSUFBSUMsbURBQUosQ0FBb0JYLGVBQXBCLEVBQXFDRixXQUFXLENBQUNjLEdBQWpELEVBQXNESixNQUF0RCxDQUYvQjtBQUdJSyxxQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3Qkosa0JBQXhCO0FBQ0FHLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUosa0JBQWtCLENBQUNLLElBQW5CLENBQXdCLEtBQXhCLEVBQStCLENBQS9CLENBQVo7O0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FONkI7QUFBQTtBQUFBOztBQUFBLFdBYWRDLE9BYmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVZBYTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVVaLFFBQVEsQ0FBQ2EsbUVBQUQsQ0FGbEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlJSixxQkFBTyxDQUFDQyxHQUFSOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYjZCO0FBQUE7QUFBQTs7QUFBQSxXQXFCZEksVUFyQmM7QUFBQTtBQUFBLElBNkI3Qjs7O0FBN0I2QjtBQUFBLHNWQXFCN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGtCQUFJO0FBQ0ZiLDBCQUFVO0FBQ1gsZUFGRCxDQUVFLE9BQU9jLEVBQVAsRUFBVztBQUNYTix1QkFBTyxDQUFDQyxHQUFSLENBQVlLLEVBQVo7QUFDRDs7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJCNkI7QUFBQTtBQUFBOztBQThCN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRUgsT0FBakI7QUFBMEIsZUFBUyxFQUFDLDRGQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdkLE1BQU0sZ0JBQUc7QUFBQSxpREFBcUI7QUFBQSxrQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUFrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUYzRCxFQUdHRCxNQUFNLGdCQUFHO0FBQVEsYUFBTyxFQUFFSyxRQUFqQjtBQUEyQixlQUFTLEVBQUMsNEZBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQXVKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIaEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0FyQ3VCVixJO1VBSXFDSSwwRDs7O0tBSnJDSixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcbmltcG9ydCB7IGdldFdlYjNSZWFjdENvbnRleHQgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgaW5qZWN0ZWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy93YWxsZXQvY29ubmVjdG9yc1wiXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY29udHJhY3RBQkkgPSByZXF1aXJlKFwiLi9jb250cmFjdC1hYmkuanNvblwiKTtcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDg2NDY5RjY0NGE1QzUxZDRhNzY2MThmYTZkMTI0YjAxRERDNGRFMjJcIjtcblxuICBjb25zdCB7IGFjdGl2ZSwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdpdmVBd2F5KCkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gbGlicmFyeS5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IEZiUHVtcGtpbnNDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSS5hYmksIHNpZ25lcik7XG4gICAgICBjb25zb2xlLmxvZygnY29udHJhY3QnLCBGYlB1bXBraW5zQ29udHJhY3QpO1xuICAgICAgY29uc29sZS5sb2coRmJQdW1wa2luc0NvbnRyYWN0Lm1pbnQoMC4wMDEsIDEpKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFjdGl2YXRlKGluamVjdGVkKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmxvZyhleClcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICBkZWFjdGl2YXRlKClcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5sb2coZXgpXG4gICAgfVxuICB9XG5cbiAgLy8gPGJ1dHRvbiBvbkNsaWNrPXtkaXNjb25uZWN0fSBjbGFzc05hbWU9XCJweS0yIG10LTIwIG1iLTQgdGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHctNTYgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS04MDBcIj5EaXNjb25uZWN0PC9idXR0b24+XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0fSBjbGFzc05hbWU9XCJweS0yIG10LTIwIG1iLTQgdGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHctNTYgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS04MDBcIj5Db25uZWN0IHRvIE1ldGFNYXNrPC9idXR0b24+XG4gICAgICB7YWN0aXZlID8gPHNwYW4+Q29ubmVjdGVkIHdpdGggPGI+e2FjY291bnR9PC9iPjwvc3Bhbj4gOiA8c3Bhbj5Ob3QgY29ubmVjdGVkPC9zcGFuPn1cbiAgICAgIHthY3RpdmUgPyA8YnV0dG9uIG9uQ2xpY2s9e2dpdmVBd2F5fSBjbGFzc05hbWU9XCJweS0yIG10LTIwIG1iLTQgdGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHctNTYgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS04MDBcIj4gVEVTVCA8L2J1dHRvbj4gOiA8ZGl2IC8+fVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});