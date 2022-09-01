"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["methods"],{

/***/ "./src/modules/APIsGET&POST.js":
/*!*************************************!*\
  !*** ./src/modules/APIsGET&POST.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAnime\": () => (/* binding */ getAnime),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst getAnime = async (url) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': '27a477cbdamsh49c8e3678f442ecp14a4f5jsn0efcece4205d',\n      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',\n    },\n  };\n  const response = await fetch(url, options).then((res) => res.json());\n  return response.data;\n};\n\nconst getLikes = async (url) => {\n  const response = await fetch(url).then((res) => res.json());\n  return response;\n};\n\n//# sourceURL=webpack://todo-list/./src/modules/APIsGET&POST.js?");

/***/ }),

/***/ "./src/modules/methods.js":
/*!********************************!*\
  !*** ./src/modules/methods.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadData)\n/* harmony export */ });\n/* harmony import */ var _APIsGET_POST_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIsGET&POST.js */ \"./src/modules/APIsGET&POST.js\");\n\n\nasync function loadData(movieList, url) {\n  const list = await (0,_APIsGET_POST_js__WEBPACK_IMPORTED_MODULE_0__.getAnime)(url);\n\n  list.forEach((movie, i) => {\n    const li = document.createElement('li');\n    li.innerHTML = `<img src=\"${movie.image}\"><h2>${movie.title}</h2>\n            <div class=\"container\">\n            <button id=\"cmnt-${i}\"class=\"learn-more\">\n              <span class=\"circle\" aria-hidden=\"true\">\n                <span class=\"icon arrow\"></span>\n              </span>\n              <span class=\"button-text\">Comment</span>\n            </button>\n          </div>\n            <div class=\"toggle\">\n        <input type=\"checkbox\" class=\"heart-check\">\n      \n        <label for=\"heart-check\" class=\"heart\">\n          <svg viewBox=\"0 0 24 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <path class=\"initial\" d=\"M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.777264,4 12.5417153,6.29330284 11.8189091,6.29330284 C11.0961029,6.29330284 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z\"></path>\n            <path class=\"stroke\" fill=\"none\" d=\"M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.4628072,4 10.284995,6.64162063 10.284995,8.70392731 C10.284995,10.0731789 10.8851209,10.9874447 11.8189091,10.9874447 C12.7526973,10.9874447 13.3528232,10.0731789 13.3528232,8.70392731 C13.3528232,6.64162063 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z\"></path>\n          </svg>\n        </label>\n      </div>\n      <p class=\"card-body__likes like-text\"> 0 likes</p>`;\n    movieList.appendChild(li);\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/methods.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/methods.js"));
/******/ }
]);