"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/message.tsx":
/*!************************************!*\
  !*** ./src/components/message.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageContainer */ \"./src/components/MessageContainer.tsx\");\n\n\nconst messages = [\n    {\n        content: \"aaaaaaaa\",\n        userId: 1\n    },\n    {\n        content: \"bbbbbbb\",\n        userId: 2\n    },\n    {\n        content: \"cccccc\",\n        userId: 2\n    },\n    {\n        content: \"ddddddd\",\n        userId: 1\n    },\n    {\n        content: \"eeeeeee\",\n        userId: 2\n    }\n];\nconst Message = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: messages.map((message, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        message: message\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\damie\\\\Desktop\\\\messenger-app\\\\frontend\\\\src\\\\components\\\\message.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\damie\\\\Desktop\\\\messenger-app\\\\frontend\\\\src\\\\components\\\\message.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border-2 w-full\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\damie\\\\Desktop\\\\messenger-app\\\\frontend\\\\src\\\\components\\\\message.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 rounded text-white p-2 mt-3\",\n                        children: [\n                            \" \",\n                            \"Envoyer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\damie\\\\Desktop\\\\messenger-app\\\\frontend\\\\src\\\\components\\\\message.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\damie\\\\Desktop\\\\messenger-app\\\\frontend\\\\src\\\\components\\\\message.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\damie\\\\Desktop\\\\messenger-app\\\\frontend\\\\src\\\\components\\\\message.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBa0Q7QUFFbEQsTUFBTUMsV0FBVztJQUNmO1FBQ0VDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRCxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7Q0FDRDtBQUNELE1BQU1DLFVBQVUsSUFBTTtJQUNwQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUNFSixTQUFTTSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVTtvQkFDaEMscUJBQU8sOERBQUNULHlEQUFnQkE7d0JBQWFRLFNBQVNBO3VCQUFoQkM7Ozs7O2dCQUNoQzs7Ozs7OzBCQUVGLDhEQUFDSjs7a0NBQ0MsOERBQUNLO3dCQUFNSixXQUFVO3dCQUFrQkssTUFBSzs7Ozs7O2tDQUN4Qyw4REFBQ0M7d0JBQU9OLFdBQVU7OzRCQUNmOzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7S0FqQk1GO0FBbUJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2UudHN4PzMyMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lc3NhZ2VDb250YWluZXIgZnJvbSBcIi4vTWVzc2FnZUNvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSBbXHJcbiAge1xyXG4gICAgY29udGVudDogXCJhYWFhYWFhYVwiLFxyXG4gICAgdXNlcklkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29udGVudDogXCJiYmJiYmJiXCIsXHJcbiAgICB1c2VySWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb250ZW50OiBcImNjY2NjY1wiLFxyXG4gICAgdXNlcklkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29udGVudDogXCJkZGRkZGRkXCIsXHJcbiAgICB1c2VySWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb250ZW50OiBcImVlZWVlZWVcIixcclxuICAgIHVzZXJJZDogMixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBNZXNzYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPE1lc3NhZ2VDb250YWluZXIga2V5PXtpbmRleH0gbWVzc2FnZT17bWVzc2FnZX0gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItMiB3LWZ1bGxcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkIHRleHQtd2hpdGUgcC0yIG10LTNcIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIEVudm95ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuIl0sIm5hbWVzIjpbIk1lc3NhZ2VDb250YWluZXIiLCJtZXNzYWdlcyIsImNvbnRlbnQiLCJ1c2VySWQiLCJNZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/message.tsx\n"));

/***/ })

});