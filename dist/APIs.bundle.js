"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone2_kanban"] = self["webpackChunkcapstone2_kanban"] || []).push([["APIs"],{

/***/ "./src/modules/APIsGET&POST.js":
/*!*************************************!*\
  !*** ./src/modules/APIsGET&POST.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAnime\": () => (/* binding */ getAnime),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst getAnime = async (url) => {\r\n  const options = {\r\n    method: 'GET',\r\n    headers: {\r\n      'X-RapidAPI-Key': '27a477cbdamsh49c8e3678f442ecp14a4f5jsn0efcece4205d',\r\n      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',\r\n    },\r\n  };\r\n  const response = await fetch(url, options).then((res) => res.json());\r\n  return response.data;\r\n};\r\n\r\nconst getLikes = async (url) => {\r\n  const response = await fetch(url).then((res) => res.json());\r\n  return response;\r\n};\r\n\r\nasync function getComments(url) {\r\n  const response = await fetch(url).then((res) => res.json());\r\n  return response;\r\n}\r\n\r\nconst postComments = async (id, username, comment, url) => {\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username,\r\n      comment,\r\n    }),\r\n  });\r\n};\r\n\r\nconst postLikes = async (id, url) => {\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://capstone2-kanban/./src/modules/APIsGET&POST.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/APIsGET&POST.js"));
/******/ }
]);