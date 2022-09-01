"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["APIs"],{

/***/ "./src/modules/APIsGET&POST.js":
/*!*************************************!*\
  !*** ./src/modules/APIsGET&POST.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\nconst getMovies= async (url) => {\n    const options = { \n        method: \"GET\",\n        headers: {\n          \"X-RapidAPI-Key\": \"27a477cbdamsh49c8e3678f442ecp14a4f5jsn0efcece4205d\",\n          \"X-RapidAPI-Host\": \"anime-db.p.rapidapi.com\",\n        },\n    };\n    const response = await fetch(url, options).then(res => res.json())\n    return response.data;\n};\n\n//# sourceURL=webpack://todo-list/./src/modules/APIsGET&POST.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/APIsGET&POST.js"));
/******/ }
]);