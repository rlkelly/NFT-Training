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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./components/wallet/connectors.js\");\n/* harmony import */ var _components_incrementButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/incrementButton */ \"./components/incrementButton.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/robkelly/workspace/NFT_demo/nft_website/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var contractABI = __webpack_require__(/*! ./contract-abi.json */ \"./pages/contract-abi.json\");\n\n  var contractAddress = \"0x86469F644a5C51d4a76618fa6d124b01DDC4dE22\";\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_5__.useWeb3React)(),\n      active = _useWeb3React.active,\n      account = _useWeb3React.account,\n      activate = _useWeb3React.activate,\n      deactivate = _useWeb3React.deactivate,\n      library = _useWeb3React.library;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),\n      numPumpkins = _useState[0],\n      setNumPumpkins = _useState[1];\n\n  function mint() {\n    return _mint.apply(this, arguments);\n  }\n\n  function _mint() {\n    _mint = (0,_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var signer, FbPumpkinsContract;\n      return _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(numPumpkins);\n              signer = library.getSigner();\n              FbPumpkinsContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractAddress, contractABI.abi, signer);\n              console.log('contract', FbPumpkinsContract);\n              console.log(FbPumpkinsContract.mint(1, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther('0.001')\n              }));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _mint.apply(this, arguments);\n  }\n\n  function connect() {\n    return _connect.apply(this, arguments);\n  }\n\n  function _connect() {\n    _connect = (0,_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n      return _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_6__.injected);\n\n            case 3:\n              _context2.next = 8;\n              break;\n\n            case 5:\n              _context2.prev = 5;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(_context2.t0);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 5]]);\n    }));\n    return _connect.apply(this, arguments);\n  }\n\n  function disconnect() {\n    return _disconnect.apply(this, arguments);\n  }\n\n  function _disconnect() {\n    _disconnect = (0,_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n      return _Users_robkelly_workspace_NFT_demo_nft_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              try {\n                deactivate();\n              } catch (ex) {\n                console.log(ex);\n              }\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n    return _disconnect.apply(this, arguments);\n  }\n\n  function updatePumpkin() {\n    setNumPumpkins(numPumpkins + 1);\n  } // <button onClick={disconnect} className=\"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\">Disconnect</button>\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col items-center justify-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: connect,\n      className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n      children: \"Connect to MetaMask\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      children: [\"Connected with \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n        children: account\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 38\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      children: \"Not connected\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 64\n    }, this), active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex flex-col items-center justify-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: mint,\n        className: \"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800\",\n        children: \" MINT PUMPKINS \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_incrementButton__WEBPACK_IMPORTED_MODULE_7__.default, {\n        numPumpkins: numPumpkins,\n        setNumPumpkins: updatePumpkin\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"+7Bsm+bMBkqMxqiR0HVgWFEeEVY=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_5__.useWeb3React];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiY29udHJhY3RBQkkiLCJyZXF1aXJlIiwiY29udHJhY3RBZGRyZXNzIiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiYWNjb3VudCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImxpYnJhcnkiLCJ1c2VTdGF0ZSIsIm51bVB1bXBraW5zIiwic2V0TnVtUHVtcGtpbnMiLCJtaW50IiwiY29uc29sZSIsImxvZyIsInNpZ25lciIsImdldFNpZ25lciIsIkZiUHVtcGtpbnNDb250cmFjdCIsImV0aGVycyIsImFiaSIsInZhbHVlIiwiY29ubmVjdCIsImluamVjdGVkIiwiZGlzY29ubmVjdCIsImV4IiwidXBkYXRlUHVtcGtpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUEzQjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsNENBQXhCOztBQUY2QixzQkFJOEJDLDhEQUFZLEVBSjFDO0FBQUEsTUFJckJDLE1BSnFCLGlCQUlyQkEsTUFKcUI7QUFBQSxNQUliQyxPQUphLGlCQUliQSxPQUphO0FBQUEsTUFJSkMsUUFKSSxpQkFJSkEsUUFKSTtBQUFBLE1BSU1DLFVBSk4saUJBSU1BLFVBSk47QUFBQSxNQUlrQkMsT0FKbEIsaUJBSWtCQSxPQUpsQjs7QUFBQSxrQkFNU0MsK0NBQVEsQ0FBQyxDQUFELENBTmpCO0FBQUEsTUFNdEJDLFdBTnNCO0FBQUEsTUFNVEMsY0FOUzs7QUFBQSxXQVFkQyxJQVJjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdWQVE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaO0FBQ01LLG9CQUZWLEdBRW1CUCxPQUFPLENBQUNRLFNBQVIsRUFGbkI7QUFHVUMsZ0NBSFYsR0FHK0IsSUFBSUMsbURBQUosQ0FBb0JoQixlQUFwQixFQUFxQ0YsV0FBVyxDQUFDbUIsR0FBakQsRUFBc0RKLE1BQXRELENBSC9CO0FBSUlGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRyxrQkFBeEI7QUFDQUoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxrQkFBa0IsQ0FBQ0wsSUFBbkIsQ0FBd0IsQ0FBeEIsRUFBMkI7QUFBQ1EscUJBQUssRUFBRUYsMkRBQUEsQ0FBd0IsT0FBeEI7QUFBUixlQUEzQixDQUFaOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUjZCO0FBQUE7QUFBQTs7QUFBQSxXQWdCZEcsT0FoQmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVZBZ0I3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVVZixRQUFRLENBQUNnQixtRUFBRCxDQUZsQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSUlULHFCQUFPLENBQUNDLEdBQVI7O0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FoQjZCO0FBQUE7QUFBQTs7QUFBQSxXQXdCZFMsVUF4QmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1ZBd0I3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Usa0JBQUk7QUFDRmhCLDBCQUFVO0FBQ1gsZUFGRCxDQUVFLE9BQU9pQixFQUFQLEVBQVc7QUFDWFgsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxFQUFaO0FBQ0Q7O0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F4QjZCO0FBQUE7QUFBQTs7QUFnQzdCLFdBQVNDLGFBQVQsR0FBeUI7QUFDdkJkLGtCQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDRCxHQWxDNEIsQ0FvQzdCOzs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFVyxPQUFqQjtBQUEwQixlQUFTLEVBQUMsNEZBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR2pCLE1BQU0sZ0JBQUc7QUFBQSxpREFBcUI7QUFBQSxrQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUFrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUYzRCxFQUdHRCxNQUFNLGdCQUNMO0FBQUssZUFBUyxFQUFDLDJDQUFmO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUVRLElBQWpCO0FBQXVCLGlCQUFTLEVBQUMsNEZBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxnRUFBRDtBQUFpQixtQkFBVyxFQUFFRixXQUE5QjtBQUEyQyxzQkFBYyxFQUFFZTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZ0JBSUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBaER1QjFCLEk7VUFJcUNJLDBEOzs7S0FKckNKLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXG5pbXBvcnQgeyBnZXRXZWIzUmVhY3RDb250ZXh0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2FsbGV0L2Nvbm5lY3RvcnNcIlxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xuaW1wb3J0IEluY3JlbWVudEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2luY3JlbWVudEJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRyYWN0QUJJID0gcmVxdWlyZShcIi4vY29udHJhY3QtYWJpLmpzb25cIik7XG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg4NjQ2OUY2NDRhNUM1MWQ0YTc2NjE4ZmE2ZDEyNGIwMUREQzRkRTIyXCI7XG5cbiAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICBjb25zdCBbbnVtUHVtcGtpbnMsIHNldE51bVB1bXBraW5zXSA9IHVzZVN0YXRlKDApO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG1pbnQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhudW1QdW1wa2lucyk7XG4gICAgICBjb25zdCBzaWduZXIgPSBsaWJyYXJ5LmdldFNpZ25lcigpO1xuICAgICAgY29uc3QgRmJQdW1wa2luc0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLmFiaSwgc2lnbmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdjb250cmFjdCcsIEZiUHVtcGtpbnNDb250cmFjdCk7XG4gICAgICBjb25zb2xlLmxvZyhGYlB1bXBraW5zQ29udHJhY3QubWludCgxLCB7dmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKCcwLjAwMScpfSkpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGRlYWN0aXZhdGUoKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmxvZyhleClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQdW1wa2luKCkge1xuICAgIHNldE51bVB1bXBraW5zKG51bVB1bXBraW5zICsgMSk7XG4gIH1cblxuICAvLyA8YnV0dG9uIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9IGNsYXNzTmFtZT1cInB5LTIgbXQtMjAgbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdy01NiBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMFwiPkRpc2Nvbm5lY3Q8L2J1dHRvbj5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3R9IGNsYXNzTmFtZT1cInB5LTIgbXQtMjAgbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdy01NiBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMFwiPkNvbm5lY3QgdG8gTWV0YU1hc2s8L2J1dHRvbj5cbiAgICAgIHthY3RpdmUgPyA8c3Bhbj5Db25uZWN0ZWQgd2l0aCA8Yj57YWNjb3VudH08L2I+PC9zcGFuPiA6IDxzcGFuPk5vdCBjb25uZWN0ZWQ8L3NwYW4+fVxuICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bWludH0gY2xhc3NOYW1lPVwicHktMiBtdC0yMCBtYi00IHRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZyB3LTU2IGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwXCI+IE1JTlQgUFVNUEtJTlMgPC9idXR0b24+XG4gICAgICAgICAgPEluY3JlbWVudEJ1dHRvbiBudW1QdW1wa2lucz17bnVtUHVtcGtpbnN9IHNldE51bVB1bXBraW5zPXt1cGRhdGVQdW1wa2lufSAvPlxuICAgICAgPC9kaXY+KSA6IDxkaXYgLz59XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});