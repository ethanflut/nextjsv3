"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Cpu,Eye,EyeOff,Globe,Hexagon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/hexagon.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Cpu,Eye,EyeOff,Globe,Hexagon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/eye-off.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Cpu,Eye,EyeOff,Globe,Hexagon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/eye.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Cpu,Eye,EyeOff,Globe,Hexagon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/code.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Cpu,Eye,EyeOff,Globe,Hexagon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/cpu.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Cpu,Eye,EyeOff,Globe,Hexagon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/globe.js\");\n/* harmony import */ var app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var app_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/input */ \"(app-pages-browser)/./app/ui/input.tsx\");\n/* harmony import */ var app_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/ui/label */ \"(app-pages-browser)/./app/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stars, setStars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const generateStars = ()=>{\n            const starCount = 200;\n            const newStars = [];\n            for(let i = 0; i < starCount; i++){\n                newStars.push({\n                    left: \"\".concat(Math.random() * 100, \"%\"),\n                    top: \"\".concat(Math.random() * 100, \"%\"),\n                    animationDuration: \"\".concat(Math.random() * 30 + 10, \"s\"),\n                    size: Math.random() * 2 + 1\n                });\n            }\n            setStars(newStars);\n        };\n        generateStars();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black flex justify-center items-center p-4 relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 overflow-hidden\",\n                children: stars.map((star, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bg-white rounded-full opacity-20\",\n                        style: {\n                            left: star.left,\n                            top: star.top,\n                            width: \"\".concat(star.size, \"px\"),\n                            height: \"\".concat(star.size, \"px\"),\n                            animationDuration: star.animationDuration\n                        }\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-md z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-8 backdrop-blur-sm border border-gray-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mb-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"h-12 w-12 text-purple-500 mr-3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-4xl font-bold text-white\",\n                                        children: \"Sherny\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"space-y-6 text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-2 text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                                htmlFor: \"email\",\n                                                className: \"text-gray-300\",\n                                                children: \"Nombre de usuario\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                id: \"email\",\n                                                type: \"email\",\n                                                placeholder: \"usuario\",\n                                                className: \"bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                                htmlFor: \"password\",\n                                                className: \"text-gray-300\",\n                                                children: \"Contrase\\xf1a\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"input-rounded\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                        id: \"password\",\n                                                        type: showPassword ? \"text\" : \"password\",\n                                                        placeholder: \"••••••••\",\n                                                        className: \"bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 pr-10\",\n                                                        required: true\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        type: \"button\",\n                                                        onClick: ()=>setShowPassword(!showPassword),\n                                                        className: \"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition duration-200\",\n                                                        children: showPassword ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                            className: \"h-5 w-5\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 35\n                                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-5 w-5\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 68\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        type: \"submit\",\n                                        className: \"w-full bg-purple-600 hover:bg-purple-700 text-white transition duration-200 transform hover:scale-105\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Iniciar sesi\\xf3n\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" mt-8 flex justify-center space-x-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeatureIcon, {\n                                icon: _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeatureIcon, {\n                                icon: _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeatureIcon, {\n                                icon: _barrel_optimize_names_Code_Cpu_Eye_EyeOff_Globe_Hexagon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"0M9TMtmX4EhkbKQZQ/UWTccH2Mo=\");\n_c = LoginPage;\nfunction FeatureIcon(param) {\n    let { icon: Icon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-800 bg-opacity-50 rounded-full p-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n            className: \"h-6 w-6 text-purple-400\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Escritorio\\\\testv7c\\\\nextjsv3\\\\app\\\\page.tsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n}\n_c1 = FeatureIcon;\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginPage\");\n$RefreshReg$(_c1, \"FeatureIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNekMsNkdBQUlBOzs7Ozs7MENBQ3ZCLDhEQUFDd0M7Z0NBQVlDLE1BQU14Qyw2R0FBR0E7Ozs7OzswQ0FDdEIsOERBQUN1QztnQ0FBWUMsTUFBTXZDLDhHQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBNUZ3Qkk7S0FBQUE7QUE4RnhCLFNBQVNrQyxZQUFZLEtBQTJDO1FBQTNDLEVBQUVDLE1BQU1DLElBQUksRUFBK0IsR0FBM0M7SUFDbkIscUJBQ0UsOERBQUNwQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDbUI7WUFBS25CLFdBQVU7Ozs7Ozs7Ozs7O0FBR3RCO01BTlNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV5ZSwgRXllT2ZmLCBIZXhhZ29uLCBDb2RlLCBDcHUsIEdsb2JlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhcHAvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhcHAvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcImFwcC91aS9sYWJlbFwiO1xuXG50eXBlIFN0YXIgPSB7XG4gIGxlZnQ6IHN0cmluZztcbiAgdG9wOiBzdHJpbmc7XG4gIGFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJzLCBzZXRTdGFyc10gPSB1c2VTdGF0ZTxTdGFyW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYXRlU3RhcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzdGFyQ291bnQgPSAyMDA7XG4gICAgICBjb25zdCBuZXdTdGFyczogU3RhcltdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJDb3VudDsgaSsrKSB7XG4gICAgICAgIG5ld1N0YXJzLnB1c2goe1xuICAgICAgICAgIGxlZnQ6IGAke01hdGgucmFuZG9tKCkgKiAxMDB9JWAsXG4gICAgICAgICAgdG9wOiBgJHtNYXRoLnJhbmRvbSgpICogMTAwfSVgLFxuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtNYXRoLnJhbmRvbSgpICogMzAgKyAxMH1zYCxcbiAgICAgICAgICBzaXplOiBNYXRoLnJhbmRvbSgpICogMiArIDEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2V0U3RhcnMobmV3U3RhcnMpO1xuICAgIH07XG5cbiAgICBnZW5lcmF0ZVN0YXJzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJsYWNrIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtNCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHsvKiBCbHVycmVkIHN0YXIgYmFja2dyb3VuZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAge3N0YXJzLm1hcCgoc3RhciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgcm91bmRlZC1mdWxsIG9wYWNpdHktMjBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbGVmdDogc3Rhci5sZWZ0LFxuICAgICAgICAgICAgICB0b3A6IHN0YXIudG9wLFxuICAgICAgICAgICAgICB3aWR0aDogYCR7c3Rhci5zaXplfXB4YCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtzdGFyLnNpemV9cHhgLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogc3Rhci5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCB6LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgYmctb3BhY2l0eS04MCByb3VuZGVkLXhsIHNoYWRvdy0yeGwgcC04IGJhY2tkcm9wLWJsdXItc20gYm9yZGVyIGJvcmRlci1ncmF5LTgwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgPEhleGFnb24gY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtcHVycGxlLTUwMCBtci0zXCIgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlNoZXJueTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPk5vbWJyZSBkZSB1c3VhcmlvPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzdWFyaW9cIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXItZ3JheS03MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNTAwIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCIgXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+Q29udHJhc2XDsWE8L0xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXItZ3JheS03MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNTAwIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHByLTEwXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIHByLTMgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPEV5ZU9mZiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gOiA8RXllIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgPHA+4oCOICDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiBcbiAgICAgICAgICAgIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIOKAjiDigI4g4oCOIEluaWNpYXIgc2VzacOzbjwvcD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTggZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTZcIj5cbiAgICAgICAgICA8RmVhdHVyZUljb24gaWNvbj17Q29kZX0gLz5cbiAgICAgICAgICA8RmVhdHVyZUljb24gaWNvbj17Q3B1fSAvPlxuICAgICAgICAgIDxGZWF0dXJlSWNvbiBpY29uPXtHbG9iZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRmVhdHVyZUljb24oeyBpY29uOiBJY29uIH06IHsgaWNvbjogUmVhY3QuRWxlbWVudFR5cGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgYmctb3BhY2l0eS01MCByb3VuZGVkLWZ1bGwgcC0zXCI+XG4gICAgICA8SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtcHVycGxlLTQwMFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJFeWUiLCJFeWVPZmYiLCJIZXhhZ29uIiwiQ29kZSIsIkNwdSIsIkdsb2JlIiwiQnV0dG9uIiwiSW5wdXQiLCJMYWJlbCIsIkxvZ2luUGFnZSIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsInN0YXJzIiwic2V0U3RhcnMiLCJnZW5lcmF0ZVN0YXJzIiwic3RhckNvdW50IiwibmV3U3RhcnMiLCJpIiwicHVzaCIsImxlZnQiLCJNYXRoIiwicmFuZG9tIiwidG9wIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3RhciIsImluZGV4Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiZm9ybSIsImh0bWxGb3IiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJGZWF0dXJlSWNvbiIsImljb24iLCJJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});