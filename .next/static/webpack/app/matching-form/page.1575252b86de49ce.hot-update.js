"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/matching-form/page",{

/***/ "(app-pages-browser)/./app/matching-form/supabase.ts":
/*!***************************************!*\
  !*** ./app/matching-form/supabase.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customTheme: function() { return /* binding */ customTheme; },\n/* harmony export */   supabase: function() { return /* binding */ supabase; }\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(app-pages-browser)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://zwbtoepdlduvsbfhbify.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YnRvZXBkbGR1dnNiZmhiaWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NzcyNTEsImV4cCI6MjAyMzI1MzI1MX0.tZ2yGHs06Oo71XJoM35aIUn85Nwbc-1x-sdr5N5-oTA\");\nconst customTheme = {\n    default: {\n        colors: {\n            brand: \"hsl(0, 34%, 85%, 100%)\",\n            brandAccent: \"hsl(0, 34%, 85%, 100%)\",\n            brandButtonText: \"black\"\n        }\n    },\n    dark: {\n        colors: {\n            brandButtonText: \"white\",\n            defaultButtonBackground: \"#2e2e2e\",\n            defaultButtonBackgroundHover: \"#3e3e3e\"\n        }\n    },\n    // You can also add more theme variations with different names.\n    evenDarker: {\n        colors: {\n            brandButtonText: \"white\",\n            defaultButtonBackground: \"#1e1e1e\",\n            defaultButtonBackgroundHover: \"#2e2e2e\"\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYXRjaGluZy1mb3JtL3N1cGFiYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUU3QyxNQUFNQyxXQUFXRCxtRUFBWUEsQ0FBQyw0Q0FBNEMsb05BQW1OO0FBRTdSLE1BQU1FLGNBQWM7SUFDdkJDLFNBQVM7UUFDUEMsUUFBUTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsaUJBQWlCO1FBRW5CO0lBQ0Y7SUFDQUMsTUFBTTtRQUNKSixRQUFRO1lBQ05HLGlCQUFpQjtZQUNqQkUseUJBQXlCO1lBQ3pCQyw4QkFBOEI7UUFFaEM7SUFDRjtJQUNBLCtEQUErRDtJQUMvREMsWUFBWTtRQUNWUCxRQUFRO1lBQ05HLGlCQUFpQjtZQUNqQkUseUJBQXlCO1lBQ3pCQyw4QkFBOEI7UUFFaEM7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21hdGNoaW5nLWZvcm0vc3VwYWJhc2UudHM/ZTljOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcImh0dHBzOi8vendidG9lcGRsZHV2c2JmaGJpZnkuc3VwYWJhc2UuY29cIiwgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbnAzWW5SdlpYQmtiR1IxZG5OaVptaGlhV1o1SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTNNRGMyTnpjeU5URXNJbVY0Y0NJNk1qQXlNekkxTXpJMU1YMC50WjJ5R0hzMDZPbzcxWEpvTTM1YUlVbjg1TndiYy0xeC1zZHI1TjUtb1RBXCIpXG5cbmV4cG9ydCBjb25zdCBjdXN0b21UaGVtZSA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgYnJhbmQ6ICdoc2woMCwgMzQlLCA4NSUsIDEwMCUpJywgLy9jb2xvciBvZiBidXR0b25cbiAgICAgICAgYnJhbmRBY2NlbnQ6ICdoc2woMCwgMzQlLCA4NSUsIDEwMCUpJywgLy9vdXRsaW5lIG9mIGJ1dHRvblxuICAgICAgICBicmFuZEJ1dHRvblRleHQ6ICdibGFjaycsIC8vdGV4dCBvZiBidXR0b25cbiAgICAgICAgLy8gLi5cbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgYnJhbmRCdXR0b25UZXh0OiAnd2hpdGUnLFxuICAgICAgICBkZWZhdWx0QnV0dG9uQmFja2dyb3VuZDogJyMyZTJlMmUnLFxuICAgICAgICBkZWZhdWx0QnV0dG9uQmFja2dyb3VuZEhvdmVyOiAnIzNlM2UzZScsXG4gICAgICAgIC8vLi5cbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBZb3UgY2FuIGFsc28gYWRkIG1vcmUgdGhlbWUgdmFyaWF0aW9ucyB3aXRoIGRpZmZlcmVudCBuYW1lcy5cbiAgICBldmVuRGFya2VyOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgYnJhbmRCdXR0b25UZXh0OiAnd2hpdGUnLFxuICAgICAgICBkZWZhdWx0QnV0dG9uQmFja2dyb3VuZDogJyMxZTFlMWUnLFxuICAgICAgICBkZWZhdWx0QnV0dG9uQmFja2dyb3VuZEhvdmVyOiAnIzJlMmUyZScsXG4gICAgICAgIC8vLi5cbiAgICAgIH0sXG4gICAgfSxcbiAgfSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZSIsImN1c3RvbVRoZW1lIiwiZGVmYXVsdCIsImNvbG9ycyIsImJyYW5kIiwiYnJhbmRBY2NlbnQiLCJicmFuZEJ1dHRvblRleHQiLCJkYXJrIiwiZGVmYXVsdEJ1dHRvbkJhY2tncm91bmQiLCJkZWZhdWx0QnV0dG9uQmFja2dyb3VuZEhvdmVyIiwiZXZlbkRhcmtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/matching-form/supabase.ts\n"));

/***/ })

});