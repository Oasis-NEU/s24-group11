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

/***/ "(app-pages-browser)/./app/matching-form/page.tsx":
/*!************************************!*\
  !*** ./app/matching-form/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabase */ \"(app-pages-browser)/./app/matching-form/supabase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"(app-pages-browser)/./node_modules/@supabase/auth-ui-react/dist/index.es.js\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"(app-pages-browser)/./node_modules/@supabase/auth-ui-shared/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//login page\nfunction Login() {\n    _s();\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        _supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.getSession().then((param)=>{\n            let { data: { session } } = param;\n            setSession(session);\n        });\n        const { data: { subscription } } = _supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setSession(session);\n        });\n        return ()=>subscription.unsubscribe();\n    }, []);\n    const logOut = ()=>{\n        _supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.signOut();\n    };\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_4__.Auth, {\n            supabaseClient: _supabase__WEBPACK_IMPORTED_MODULE_1__.supabase,\n            appearance: {\n                theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_3__.customTheme\n            },\n            providers: []\n        }, void 0, false, {\n            fileName: \"/Users/yumikochow/Desktop/s24-group11/app/matching-form/page.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Logged in\"\n                }, void 0, false, {\n                    fileName: \"/Users/yumikochow/Desktop/s24-group11/app/matching-form/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>logOut(),\n                    children: \" log out \"\n                }, void 0, false, {\n                    fileName: \"/Users/yumikochow/Desktop/s24-group11/app/matching-form/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yumikochow/Desktop/s24-group11/app/matching-form/page.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Login, \"my2JknXsLNPscnT9b+5uRmb6O9A=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYXRjaGluZy1mb3JtL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVxQztBQUNNO0FBQ0c7QUFFUTtBQUV0RCxZQUFZO0FBQ1osU0FBU0s7O0lBQ0wsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFNO0lBRTVDQyxnREFBU0EsQ0FBQztRQUNORiwrQ0FBUUEsQ0FBQ1EsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQztnQkFBQyxFQUFFQyxNQUFNLEVBQUVMLE9BQU8sRUFBRSxFQUE0QjtZQUM1RUMsV0FBV0Q7UUFDZjtRQUVBLE1BQU0sRUFDRkssTUFBTSxFQUFFQyxZQUFZLEVBQUUsRUFDekIsR0FBR1osK0NBQVFBLENBQUNRLElBQUksQ0FBQ0ssaUJBQWlCLENBQUMsQ0FBQ0MsUUFBYVI7WUFDOUNDLFdBQVdEO1FBQ2Y7UUFFQSxPQUFPLElBQU1NLGFBQWFHLFdBQVc7SUFDekMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsU0FBUztRQUNYaEIsK0NBQVFBLENBQUNRLElBQUksQ0FBQ1MsT0FBTztJQUN6QjtJQUVBLElBQUksQ0FBQ1gsU0FBUztRQUNWLHFCQUNBLDhEQUFDSCx5REFBSUE7WUFDRGUsZ0JBQWdCbEIsK0NBQVFBO1lBQ3hCbUIsWUFBWTtnQkFBRUMsT0FBT2hCLGlFQUFXQTtZQUFDO1lBQ2pDaUIsV0FBVyxFQUFFOzs7Ozs7SUFHckIsT0FBTztRQUNILHFCQUNJLDhEQUFDQzs7OEJBQ0csOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFPQyxTQUFTLElBQU1UOzhCQUFVOzs7Ozs7Ozs7Ozs7SUFHN0M7QUFHSjtHQXZDU1g7S0FBQUE7QUF5Q1QsK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21hdGNoaW5nLWZvcm0vcGFnZS50c3g/MTA1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4vc3VwYWJhc2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtdWktcmVhY3QnXG5pbXBvcnQgeyBUaGVtZVN1cGEgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtdWktc2hhcmVkXCIgLy90aGlzIGdpdmVzIHVzIGEgZGVmYXVsdCBkZXNpZ24gZm9yIHN1cGFiYXNlLCB3b3JraW5nIG9uIGNoYW5naW5nIHRoaXNcbmltcG9ydCB7IGN1c3RvbVRoZW1lIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXNoYXJlZFwiXG5cbi8vbG9naW4gcGFnZVxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gdXNlU3RhdGU8YW55PihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3VwYWJhc2UuYXV0aC5nZXRTZXNzaW9uKCkudGhlbigoeyBkYXRhOiB7IHNlc3Npb24gfSB9OiB7IGRhdGE6IHsgc2Vzc2lvbjogYW55fX0pID0+IHtcbiAgICAgICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGRhdGE6IHsgc3Vic2NyaXB0aW9uIH0sXG4gICAgICAgIH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChfZXZlbnQ6IGFueSwgc2Vzc2lvbjogYW55KSA9PiB7XG4gICAgICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb24pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XG4gICAgfTtcblxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gIChcbiAgICAgICAgPEF1dGhcbiAgICAgICAgICAgIHN1cGFiYXNlQ2xpZW50PXtzdXBhYmFzZX1cbiAgICAgICAgICAgIGFwcGVhcmFuY2U9e3sgdGhlbWU6IGN1c3RvbVRoZW1lIH19IC8vaGVyZSBpcyBvdXIgZGVmYXVsdCBkZXNpZ25cbiAgICAgICAgICAgIHByb3ZpZGVycz17W119XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Mb2dnZWQgaW48L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PiBsb2cgb3V0IDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGgiLCJjdXN0b21UaGVtZSIsIkxvZ2luIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJhdXRoIiwiZ2V0U2Vzc2lvbiIsInRoZW4iLCJkYXRhIiwic3Vic2NyaXB0aW9uIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJfZXZlbnQiLCJ1bnN1YnNjcmliZSIsImxvZ091dCIsInNpZ25PdXQiLCJzdXBhYmFzZUNsaWVudCIsImFwcGVhcmFuY2UiLCJ0aGVtZSIsInByb3ZpZGVycyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/matching-form/page.tsx\n"));

/***/ })

});