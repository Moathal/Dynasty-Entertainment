"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone2_kanban"] = self["webpackChunkcapstone2_kanban"] || []).push([["methods"],{

/***/ "./src/modules/APIsGET&POST.js":
/*!*************************************!*\
  !*** ./src/modules/APIsGET&POST.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAnime\": () => (/* binding */ getAnime),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst getAnime = async (url) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': '27a477cbdamsh49c8e3678f442ecp14a4f5jsn0efcece4205d',\n      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',\n    },\n  };\n  const response = await fetch(url, options).then((res) => res.json());\n  return response.data;\n};\n\nconst getLikes = async (url) => {\n  const response = await fetch(url).then((res) => res.json());\n  return response;\n};\n\n//# sourceURL=webpack://capstone2-kanban/./src/modules/APIsGET&POST.js?");

/***/ }),

/***/ "./src/modules/methods.js":
/*!********************************!*\
  !*** ./src/modules/methods.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Methods)\n/* harmony export */ });\n/* harmony import */ var _APIsGET_POST_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIsGET&POST.js */ \"./src/modules/APIsGET&POST.js\");\n\n\nclass Methods {\n  constructor() {\n    this.animes = [];\n  }\n\n  async loadData(movieList, animeAPI) {\n    const list = await (0,_APIsGET_POST_js__WEBPACK_IMPORTED_MODULE_0__.getAnime)(animeAPI);\n    list.forEach((anime, i) => {\n      const li = document.createElement('li');\n      li.innerHTML = `<img src=\"${anime.image}\"><h2 id=\"title-${i}\">${anime.title}</h2>\n                  <div class=\"container\">\n                  <button id=\"cmntb-${i}\"class=\"learn-more\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\n                    <span class=\"circle\" aria-hidden=\"true\">\n                      <span id=\"cmnti-${i}\" class=\"icon arrow\"></span>\n                    </span>\n                    <span id=\"cmntt-${i}\" class=\"button-text\">Comment</span>\n                  </button>\n                </div>\n                  <div id=\"liked-${i}\" class=\"toggle\">\n              <input id=\"likei-${i}\" type=\"checkbox\" class=\"heart-check\">\n            \n              <label id=\"likel-${i}\" for=\"heart-check\" class=\"heart\">\n                <svg id=\"likes-${i}\" viewBox=\"0 0 24 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <path id=\"likep-${i}\" class=\"initial\" d=\"M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.777264,4 12.5417153,6.29330284 11.8189091,6.29330284 C11.0961029,6.29330284 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z\"></path>\n                  <path class=\"stroke\" fill=\"none\" d=\"M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.4628072,4 10.284995,6.64162063 10.284995,8.70392731 C10.284995,10.0731789 10.8851209,10.9874447 11.8189091,10.9874447 C12.7526973,10.9874447 13.3528232,10.0731789 13.3528232,8.70392731 C13.3528232,6.64162063 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z\"></path>\n                </svg>\n              </label>\n            </div>\n            <p class=\"card-body__likes like-text\"> <span id=\"span-${i}\"></span> 0 likes</p>`;\n      movieList.appendChild(li);\n      const item = {\n        id: i,\n        title: anime.title,\n        synopsis: anime.synopsis,\n        image: anime.image,\n        likes: 0,\n        comments: 0,\n      };\n      this.animes.push(item);\n    });\n    this.itemsCounter();\n  }\n\n  loadModalInfo(index) {\n    const anime = this.animes[index];\n    document.getElementById('animeDescription').innerText = anime.synopsis;\n    document.getElementById('modal-title').innerText = anime.title;\n    document.getElementById('modal-image').setAttribute('src', anime.image);\n    document.getElementById('exampleModalLabel').innerText = anime.title;\n    const comments = document.querySelector('.comments');\n    comments.id = `anime-${index}`;\n    comments.innerHTML = '';\n    if (Array.isArray(anime.comments)) {\n      this.commentsCounter(index);\n      anime.comments.forEach((comment) => {\n        const card = document.createElement('div');\n        card.className = 'card';\n        card.innerHTML = `<div class=\"card\">\n                  <div class=\"comment-head\">\n                  <h5 class=\"username\">${comment.username}</h5>\n                  <span class=\"date\">${comment.creation_date}</span>\n                  </div>\n                  <p class=\"comment-block\">${comment.comment}</p>\n                </div>`;\n        comments.appendChild(card);\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://capstone2-kanban/./src/modules/methods.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/methods.js"));
/******/ }
]);