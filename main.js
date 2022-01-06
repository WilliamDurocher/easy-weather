/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg_dark.jpg */ "./src/assets/bg_dark.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg_light.jpg */ "./src/assets/bg_light.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-dark: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n    --bg-light: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed\n}\n\nhtml {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: var(--bg-dark);\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: whitesmoke;\n}\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 4rem;\n    width: 100vw;\n    height: 100%;\n    min-height: 100%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n/* todo media here */\n.weather-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.main-desc {\n    font-size: 42px;\n    font-weight: 700;\n    padding-bottom: 1rem;\n}\n\n\n.main-temp-container {\n    display: flex;\n    gap: 3rem;\n}\n\n.main-temp-icon {\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n}\n\n.main-temp {\n    font-size: 36px;\n    font-weight: 800;\n    height: 60px;\n    line-height: 60px;\n    border: 2px solid white;\n    border-radius: 15px;\n    width: auto;\n    padding: 0 10px;\n    text-align: center;\n    align-self: center;\n    white-space: nowrap;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    padding-top: 2rem;\n}\n\n.detail {\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon {\n    text-align: center;\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n}\n\n.detail-info-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.detail-name {\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: 600;\n}\n\n.detail-value {\n    font-size: 20px;\n    font-weight: 400;\n}\n\n/*** MAIN-RIGHT ***/\n\n.weather-main-info-right {\n    text-align: right;\n}\n\n.city {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.date, .time {\n    font-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container {\n    display: grid;\n    gap: 20px;\n    margin-top: 50px;\n    justify-items: flex-end;\n\n}\n\n.options-search-container {\n    display: flex;\n    gap: 5px;\n}\n\n.options-search-container>span:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.search {\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n    padding-left: 7px;\n\n}\n\n#themeLight {\n    display: inline;\n}\n\n#themeDark {\n    display: None;\n}\n\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% {\n        left: -3px;\n    }\n\n    100% {\n        right: -3px;\n    }\n}\n\n.error-message {\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n    padding-right: 90px;\n}\n\n.btn {\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n.btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n#unitC {\n\n    display: none;\n}\n\n#unitF {\n    display: inline;\n}\n\n\n/*** FORECAST SWITCH CONTAINER ***/\n\n\n.switch-container {\n    display: flex;\n    gap: 10px;\n    padding-bottom: 15px;\n\n}\n\n.forecast-switch {\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n.forecast-switch-selected {\n    background-color: white;\n    color: black;\n\n}\n\n/*** daily ***/\n\n.daily-container {\n    display: flex;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.daily {\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.daily-day {\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n\n.daily-temp {\n    font-size: 28px;\n    font-weight: 800;\n}\n\n.daily-low-temp {\n    font-size: 15px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container {\n    display: none;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.hourly {\n    display: flex;\n    flex-direction: column;\n    gap: 27px;\n}\n\n.hourly-hour {\n    font-weight: 600;\n    font-size: 22px;\n}\n\n.hourly-temp {\n    font-weight: 800;\n    font-size: 28px;\n}\n\n.btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}\n\n@media (max-width: 1300px) {\n    .main-container {\n        padding: 3rem;\n    }\n}\n\n@media (max-width: 1200px) {\n    .main-container {\n        padding: 3rem;\n    }\n}\n\n@media (max-width: 1100px) {\n    .main-container {\n        padding: 2.5rem;\n    }\n}\n\n@media (max-width: 1000px) {\n    .main-container {\n        padding: 1.5rem;\n    }\n\n\n}\n\n@media (max-width: 550px) {\n\n    .main-desc {\n        font-size: 100%;\n    }\n\n    .main-temp-icon {\n        font-size: 3em;\n    }\n\n    .detail-icon {\n        font-size: 1.5em;\n    }\n\n    .options-search-btn {\n        font-size: 1em;\n    }\n\n    .hourly-icon, .daily-icon {\n        font-size: 2em;\n        margin-left: auto;\n    }\n\n    .weather-main-info-right div {\n        font-size: 90%;\n    }\n\n    .main-details-container :not(i) div {\n        font-size: 80%;\n\n    }\n\n    .main-details-container {\n        grid-template-columns: none;\n        gap: 0;\n        padding-top: 0;\n    }\n\n    .detail {\n        max-height: 50px;\n\n    }\n\n    .daily-container, .hourly-container {\n        flex-direction: column;\n        align-items: center;\n        gap: 15px 0;\n\n\n    }\n\n    .switch-container {\n        justify-content: center;\n    }\n\n\n    .daily, .hourly {\n        flex-direction: row;\n        width: 60%;\n\n    }\n\n    .hourly-hour, .daily-day {\n        padding-right: 35px;\n        text-align: right;\n        margin-right: auto;\n\n    }\n\n    .forecast-container :not(i) div {\n        font-size: 92%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg-dark: url('./assets/bg_dark.jpg') no-repeat center center fixed;\n    --bg-light: url('./assets/bg_light.jpg') no-repeat center center fixed\n}\n\nhtml {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: var(--bg-dark);\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: whitesmoke;\n}\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 4rem;\n    width: 100vw;\n    height: 100%;\n    min-height: 100%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n/* todo media here */\n.weather-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.main-desc {\n    font-size: 42px;\n    font-weight: 700;\n    padding-bottom: 1rem;\n}\n\n\n.main-temp-container {\n    display: flex;\n    gap: 3rem;\n}\n\n.main-temp-icon {\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n}\n\n.main-temp {\n    font-size: 36px;\n    font-weight: 800;\n    height: 60px;\n    line-height: 60px;\n    border: 2px solid white;\n    border-radius: 15px;\n    width: auto;\n    padding: 0 10px;\n    text-align: center;\n    align-self: center;\n    white-space: nowrap;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    padding-top: 2rem;\n}\n\n.detail {\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon {\n    text-align: center;\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n}\n\n.detail-info-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.detail-name {\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: 600;\n}\n\n.detail-value {\n    font-size: 20px;\n    font-weight: 400;\n}\n\n/*** MAIN-RIGHT ***/\n\n.weather-main-info-right {\n    text-align: right;\n}\n\n.city {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.date, .time {\n    font-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container {\n    display: grid;\n    gap: 20px;\n    margin-top: 50px;\n    justify-items: flex-end;\n\n}\n\n.options-search-container {\n    display: flex;\n    gap: 5px;\n}\n\n.options-search-container>span:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.search {\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n    padding-left: 7px;\n\n}\n\n#themeLight {\n    display: inline;\n}\n\n#themeDark {\n    display: None;\n}\n\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% {\n        left: -3px;\n    }\n\n    100% {\n        right: -3px;\n    }\n}\n\n.error-message {\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n    padding-right: 90px;\n}\n\n.btn {\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n.btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n#unitC {\n\n    display: none;\n}\n\n#unitF {\n    display: inline;\n}\n\n\n/*** FORECAST SWITCH CONTAINER ***/\n\n\n.switch-container {\n    display: flex;\n    gap: 10px;\n    padding-bottom: 15px;\n\n}\n\n.forecast-switch {\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n.forecast-switch-selected {\n    background-color: white;\n    color: black;\n\n}\n\n/*** daily ***/\n\n.daily-container {\n    display: flex;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.daily {\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.daily-day {\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n\n.daily-temp {\n    font-size: 28px;\n    font-weight: 800;\n}\n\n.daily-low-temp {\n    font-size: 15px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container {\n    display: none;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.hourly {\n    display: flex;\n    flex-direction: column;\n    gap: 27px;\n}\n\n.hourly-hour {\n    font-weight: 600;\n    font-size: 22px;\n}\n\n.hourly-temp {\n    font-weight: 800;\n    font-size: 28px;\n}\n\n.btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}\n\n@media (max-width: 1300px) {\n    .main-container {\n        padding: 3rem;\n    }\n}\n\n@media (max-width: 1200px) {\n    .main-container {\n        padding: 3rem;\n    }\n}\n\n@media (max-width: 1100px) {\n    .main-container {\n        padding: 2.5rem;\n    }\n}\n\n@media (max-width: 1000px) {\n    .main-container {\n        padding: 1.5rem;\n    }\n\n\n}\n\n@media (max-width: 550px) {\n\n    .main-desc {\n        font-size: 100%;\n    }\n\n    .main-temp-icon {\n        font-size: 3em;\n    }\n\n    .detail-icon {\n        font-size: 1.5em;\n    }\n\n    .options-search-btn {\n        font-size: 1em;\n    }\n\n    .hourly-icon, .daily-icon {\n        font-size: 2em;\n        margin-left: auto;\n    }\n\n    .weather-main-info-right div {\n        font-size: 90%;\n    }\n\n    .main-details-container :not(i) div {\n        font-size: 80%;\n\n    }\n\n    .main-details-container {\n        grid-template-columns: none;\n        gap: 0;\n        padding-top: 0;\n    }\n\n    .detail {\n        max-height: 50px;\n\n    }\n\n    .daily-container, .hourly-container {\n        flex-direction: column;\n        align-items: center;\n        gap: 15px 0;\n\n\n    }\n\n    .switch-container {\n        justify-content: center;\n    }\n\n\n    .daily, .hourly {\n        flex-direction: row;\n        width: 60%;\n\n    }\n\n    .hourly-hour, .daily-day {\n        padding-right: 35px;\n        text-align: right;\n        margin-right: auto;\n\n    }\n\n    .forecast-container :not(i) div {\n        font-size: 92%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormData": () => (/* binding */ getFormData),
/* harmony export */   "getCoordinatesUrl": () => (/* binding */ getCoordinatesUrl),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getWeatherForecastUrl": () => (/* binding */ getWeatherForecastUrl),
/* harmony export */   "getWeatherForecast": () => (/* binding */ getWeatherForecast)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


function getFormData() {

    const cityName = document.getElementById('srch').value;

    if (cityName) {

        return _utils__WEBPACK_IMPORTED_MODULE_0__.formatCityName(cityName);
    }
    return '';
}


function getCoordinatesUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb47f2dd8a7d411cc47497189075f8a6`;
}

function getWeatherForecastUrl(coordinates, units) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=bb47f2dd8a7d411cc47497189075f8a6`;
}


//first call that gives us current weather, is only used to get coordinates, which gets us access to other api with more data
async function getCoordinates(url) {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        const coords = {
            lon: weatherData.coord.lon,
            lat: weatherData.coord.lat,
            name: weatherData.name,
            country: weatherData.sys.country
        };
        return coords;
    } catch (error) {
        console.error(error);
    }
}

//gets current weather, 7 day and 24h forecast
async function getWeatherForecast(url) {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        return weatherData;
    } catch (error) {
        console.error(error);

    }

}



/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CITY": () => (/* binding */ DEFAULT_CITY),
/* harmony export */   "unitInfo": () => (/* binding */ unitInfo)
/* harmony export */ });

// Constants variables

const DEFAULT_CITY = 'Montreal';

const unitInfo = {
    IMPERIAL: {
        name: "imperial",
        temp_display: " °F",
        windspeed_display: " mph",
    },
    METRIC:
    {
        name: "metric",
        temp_display: " °C",
        windspeed_display: " km/h",
    },
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unit": () => (/* binding */ unit)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions */ "./src/apiFunctions.js");
/* harmony import */ var _uiFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiFunctions */ "./src/uiFunctions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");






//Default variables initialization
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const loadingScreen = document.querySelector('.loading-screen');

// buttons section
const searchBtn = document.querySelector('.options-search-btn');
const searchInput = document.querySelector('.search');
const errorMessage = document.querySelector('.error-message');
const unitBtnC = document.getElementById('unitC');
const unitBtnF = document.getElementById('unitF');
const lightThemeBtn = document.getElementById('themeLight');
const darkThemeBtn = document.getElementById('themeDark');

// forecast section
const dailyForecastBtn = document.getElementById('daily');
const hourlyForecastBtn = document.getElementById('hourly');
const dailyForecastContainer = document.querySelector('.daily-container');
const hourlyForecastContainer = document.querySelector('.hourly-container');


// default values
let unit = _constants__WEBPACK_IMPORTED_MODULE_3__.unitInfo.METRIC.name;
let lastCity = _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CITY;
let unitChange = false;


async function getWeatherData(InitialLoad = false) {
    try {

        loadingScreen.style.display = 'block';

        let cityName = InitialLoad ? _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CITY : _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getFormData();

        if (unitChange) {
            cityName = lastCity;
            unitChange = false;
        }

        // do nothing if search btn is clicked with no text
        if (!cityName) {
            loadingScreen.style.display = 'none';
            return;
        }

        // need to keep the previous city in memory in case user switches units, which require a new api call 
        lastCity = cityName;


        // api calls, get coordinates first, then send them to second call
        const requestCoordsUrl = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordinatesUrl(cityName);
        const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordinates(requestCoordsUrl);

        //call that gives us all needed data to show page
        const requestWeatherUrl = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecastUrl(coords, unit);
        const weather = await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecast(requestWeatherUrl);

        weather.name = coords.name;
        weather.country = coords.country;

        _uiFunctions__WEBPACK_IMPORTED_MODULE_2__.renderWeatherData(weather, unit);

    } catch (error) {
        //if city does not exist, we still have to keep the old one in memory
        lastCity = document.querySelector('.city').innerText;
        searchInput.classList.add('input-error');
        errorMessage.style.display = "inline";

        setTimeout(function () {
            searchInput.classList.remove('input-error');
            errorMessage.style.display = "none";
        }, 1500);

    }
    loadingScreen.style.display = 'none';


    searchInput.value = '';
}

// initial call that renders screen with default city
getWeatherData(true);

searchBtn.addEventListener('click', () => {
    getWeatherData();
});

// keyboard enter event 
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getWeatherData();
    }
});

unitBtnF.addEventListener('click', () => {
    unit = _constants__WEBPACK_IMPORTED_MODULE_3__.unitInfo.IMPERIAL.name;
    unitChange = true;
    getWeatherData();

    unitBtnF.style.display = 'none';
    unitBtnC.style.display = 'inline';
});

unitBtnC.addEventListener('click', () => {
    unit = _constants__WEBPACK_IMPORTED_MODULE_3__.unitInfo.METRIC.name;
    unitChange = true;
    getWeatherData();

    unitBtnC.style.display = 'none';
    unitBtnF.style.display = 'inline';
});

darkThemeBtn.addEventListener('click', () => {
    lightThemeBtn.style.display = 'inline';
    darkThemeBtn.style.display = 'none';

    document.querySelector('html').style.background = rootStyles.getPropertyValue('--bg-dark');

});

lightThemeBtn.addEventListener('click', () => {
    lightThemeBtn.style.display = 'none';
    darkThemeBtn.style.display = 'inline';

    document.querySelector('html').style.background = rootStyles.getPropertyValue('--bg-light');


});

dailyForecastBtn.addEventListener('click', () => {
    dailyForecastBtn.classList.add('forecast-switch-selected');
    hourlyForecastBtn.classList.remove('forecast-switch-selected');

    dailyForecastContainer.style.display = 'flex';
    hourlyForecastContainer.style.display = 'none';
});


hourlyForecastBtn.addEventListener('click', () => {
    hourlyForecastBtn.classList.add('forecast-switch-selected');
    dailyForecastBtn.classList.remove('forecast-switch-selected');
    hourlyForecastContainer.style.display = 'flex';
    dailyForecastContainer.style.display = 'none';
});






/***/ }),

/***/ "./src/uiFunctions.js":
/*!****************************!*\
  !*** ./src/uiFunctions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderWeatherData": () => (/* binding */ renderWeatherData),
/* harmony export */   "unitTempDisplay": () => (/* binding */ unitTempDisplay),
/* harmony export */   "unitWindDisplay": () => (/* binding */ unitWindDisplay)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");





// current weather variables
const currentWeatherDesc = document.querySelector('.main-desc');
const currentWeatherIcon = document.querySelector('.main-temp-icon');
const currentWeatherTemp = document.querySelector('.main-temp');

// details section variables
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const rain = document.getElementById('rain');
const wind = document.getElementById('windSpeed');

// right side info variables
const cityName = document.querySelector('.city');
const cityDate = document.querySelector('.date');
const cityTime = document.querySelector('.time');

// forecast variables
const dailyForecastArray = document.querySelectorAll('.daily');
const hourlyForecastArray = document.querySelectorAll('.hourly');

let unitTempDisplay;
let unitWindDisplay;


function renderCurrentWeather(weather) {
    const currentWeather = weather.current;

    currentWeatherDesc.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeEachWord(currentWeather.weather[0].description);
    currentWeatherIcon.classList.add(_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(currentWeather.weather[0].icon));
    currentWeatherTemp.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(currentWeather.temp);

    feelsLike.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(currentWeather.feels_like);
    humidity.innerText = currentWeather.humidity + "%";
    rain.innerText = (weather.hourly[0].pop * 100) + "%"
    wind.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatWindSpeed(currentWeather.wind_speed);
}

function renderLocalisationInfo(weather) {
    cityName.innerText = weather.name;
    cityDate.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getDate(weather.current.dt);
    cityTime.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getHourMinutes(weather.current.dt);

}

// renders a 7 day forecast
function renderDailyForecast(weather) {
    for (let i = 0; i < dailyForecastArray.length; i++) {

        // we are ignoring the first 'daily' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i + 1;

        dailyForecastArray[i].querySelector('.daily-day').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getWeekDay(weather.daily[weatherDataIndex].dt);
        dailyForecastArray[i].querySelector('.daily-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.daily[weatherDataIndex].temp.day);
        dailyForecastArray[i].querySelector('.daily-low-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.daily[weatherDataIndex].temp.min);
        dailyForecastArray[i].querySelector('.daily-icon').classList.add(_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(weather.daily[weatherDataIndex].weather[0].icon));

    }
}

// renders a 8 hour forecast
function renderHourlyForecast(weather) {

    for (let i = 0; i < hourlyForecastArray.length; i++) {

        // we are ignoring the first 'hourly' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i + 1;

        hourlyForecastArray[i].querySelector('.hourly-hour').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getHour(weather.hourly[weatherDataIndex].dt);
        hourlyForecastArray[i].querySelector('.hourly-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.hourly[weatherDataIndex].temp);
        hourlyForecastArray[i].querySelector('.hourly-icon').classList.add(_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(weather.hourly[weatherDataIndex].weather[0].icon));

    }
}


// main function that will render the whole page
function renderWeatherData(weather) {
    unitTempDisplay = _index__WEBPACK_IMPORTED_MODULE_2__.unit == _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.METRIC.name ? _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.METRIC.temp_display : _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.IMPERIAL.temp_display;
    unitWindDisplay = _index__WEBPACK_IMPORTED_MODULE_2__.unit == _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.METRIC.name ? _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.METRIC.windspeed_display : _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.IMPERIAL.windspeed_display;

    renderCurrentWeather(weather);
    renderLocalisationInfo(weather);
    renderDailyForecast(weather);
    renderHourlyForecast(weather);
}



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatTemp": () => (/* binding */ formatTemp),
/* harmony export */   "formatWindSpeed": () => (/* binding */ formatWindSpeed),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "getHourMinutes": () => (/* binding */ getHourMinutes),
/* harmony export */   "capitalizeEachWord": () => (/* binding */ capitalizeEachWord),
/* harmony export */   "getWeekDay": () => (/* binding */ getWeekDay),
/* harmony export */   "getHour": () => (/* binding */ getHour),
/* harmony export */   "formatCityName": () => (/* binding */ formatCityName),
/* harmony export */   "getIcon": () => (/* binding */ getIcon)
/* harmony export */ });
/* harmony import */ var _uiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiFunctions */ "./src/uiFunctions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



// using UNIX timestamp given by API, we can format our date and time however we want. these are pretty specific utils but could be used anywhere

function getDate(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function getWeekDay(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday: "long" });
}

function getHourMinutes(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
}

function getHour(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).toLowerCase();
}

function formatTemp(temp) {
    let tempStr = String(temp);
    return tempStr.substring(0, tempStr.indexOf(".")) + _uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitTempDisplay;
}

function formatWindSpeed(wind) {
    if (_uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitWindDisplay == _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.IMPERIAL.windspeed_display) {
        return wind + _uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitWindDisplay;
    } else {
        return String(Math.round(wind * 3.6)) + _uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitWindDisplay;
    }
}

function capitalizeEachWord(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function formatCityName(str) {
    return str
        .replace(/(\s+$|^\s+)/g, '')
        .replace(/(,\s+)/g, ',')
        .replace(/(\s+,)/g, ',')
        .replace(/\s+/g, '+');
}

// switch statement that looks for the original codes from openWeather API, and returns FA icons.
function getIcon(iconCode) {
    switch (iconCode) {
        case "01n":
        case "01d":
            return "fa-sun";
        case "02n":
        case "02d":
            return "fa-cloud-sun";
        case "03n":
        case "03d":
            return "fa-cloud";
        case "04n":
        case "04d":
            return "fa-cloud";
        case "09n":
        case "09d":
            return "fa-cloud-showers-heavy";
        case "10n":
        case "10d":
            return "fa-cloud-sun-rain";
        case "11n":
        case "11d":
            return "fa-bolt";
        case "13n":
        case "13d":
            return "fa-snowflake";
        case "50n":
        case "50d":
            return "fa-smog";
        default:
            return;
    }
}


/***/ }),

/***/ "./src/assets/bg_dark.jpg":
/*!********************************!*\
  !*** ./src/assets/bg_dark.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cc48721d48fe68b9df3.jpg";

/***/ }),

/***/ "./src/assets/bg_light.jpg":
/*!*********************************!*\
  !*** ./src/assets/bg_light.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95ee8f6eae28638d2e32.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLGNBQWMsTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL3VpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JnX2RhcmsuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmdfbGlnaHQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZy1kYXJrOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICAtLWJnLWxpZ2h0OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkXFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLyogdG9kbyBtZWRpYSBoZXJlICovXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1kZXNjIHtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLm1haW4tdGVtcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5tYWluLXRlbXAtaWNvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWFpbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcblxcblxcbi8qKiogREVUQUlMIFNFQ1RJT04gKioqL1xcblxcbi5tYWluLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kZXRhaWwtaWNvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNzBweDtcXG59XFxuXFxuLmRldGFpbC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZXRhaWwtdmFsdWUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qKiogTUFJTi1SSUdIVCAqKiovXFxuXFxuLndlYXRoZXItbWFpbi1pbmZvLXJpZ2h0IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGF0ZSwgLnRpbWUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi8qKiogT1BUSU9OUyBDT05UQUlORVIqKiovXFxuXFxuLm9wdGlvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG59XFxuXFxuLm9wdGlvbnMtc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ub3B0aW9ucy1zZWFyY2gtY29udGFpbmVyPnNwYW46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuXFxufVxcblxcbiN0aGVtZUxpZ2h0IHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jdGhlbWVEYXJrIHtcXG4gICAgZGlzcGxheTogTm9uZTtcXG59XFxuXFxuXFxuLmlucHV0LWVycm9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IHNoYWtlIC4xcyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBsZWZ0OiAtM3B4O1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgcmlnaHQ6IC0zcHg7XFxuICAgIH1cXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3VuaXRDIHtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3VuaXRGIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4vKioqIEZPUkVDQVNUIFNXSVRDSCBDT05UQUlORVIgKioqL1xcblxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG5cXG59XFxuXFxuLmZvcmVjYXN0LXN3aXRjaCB7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcmVjYXN0LXN3aXRjaC1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbi8qKiogZGFpbHkgKioqL1xcblxcbi5kYWlseS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxufVxcblxcbi5kYWlseSB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRhaWx5LWRheSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGFpbHktdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmRhaWx5LWxvdy10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKioqIEhPVVJMWSAqKiovXFxuXFxuLmhvdXJseS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxufVxcblxcbi5ob3VybHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI3cHg7XFxufVxcblxcbi5ob3VybHktaG91ciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmhvdXJseS10ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gICAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuXFxuICAgIC5tYWluLWRlc2Mge1xcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLXRlbXAtaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgfVxcblxcbiAgICAuZGV0YWlsLWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgfVxcblxcbiAgICAub3B0aW9ucy1zZWFyY2gtYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB9XFxuXFxuICAgIC5ob3VybHktaWNvbiwgLmRhaWx5LWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcblxcbiAgICAud2VhdGhlci1tYWluLWluZm8tcmlnaHQgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWRldGFpbHMtY29udGFpbmVyIDpub3QoaSkgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xcblxcbiAgICB9XFxuXFxuICAgIC5tYWluLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5kZXRhaWwge1xcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcXG5cXG4gICAgfVxcblxcbiAgICAuZGFpbHktY29udGFpbmVyLCAuaG91cmx5LWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTVweCAwO1xcblxcblxcbiAgICB9XFxuXFxuICAgIC5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuXFxuICAgIC5kYWlseSwgLmhvdXJseSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG5cXG4gICAgfVxcblxcbiAgICAuaG91cmx5LWhvdXIsIC5kYWlseS1kYXkge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdC1jb250YWluZXIgOm5vdChpKSBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiA5MiU7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnRkFBb0U7SUFDcEU7QUFDSjs7QUFFQTtJQUNJLDBEQUEwRDtJQUMxRCwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7Ozs7QUFJQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7Ozs7QUFJQSx1QkFBdUI7O0FBRXZCO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0Esa0NBQWtDOzs7QUFHbEM7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7O0lBRWxCOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLE1BQU07UUFDTixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCOztJQUVwQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsV0FBVzs7O0lBR2Y7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7OztJQUdBO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7O0lBRWQ7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjs7SUFFdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnLWRhcms6IHVybCgnLi9hc3NldHMvYmdfZGFyay5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgLS1iZy1saWdodDogdXJsKCcuL2Fzc2V0cy9iZ19saWdodC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZFxcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi8qIHRvZG8gbWVkaWEgaGVyZSAqL1xcbi53ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuXFxuLm1haW4tZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi5tYWluLXRlbXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubWFpbi10ZW1wLWljb24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5cXG5cXG4vKioqIERFVEFJTCBTRUNUSU9OICoqKi9cXG5cXG4ubWFpbi1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5kZXRhaWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGV0YWlsLWljb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5kZXRhaWwtaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGV0YWlsLXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKioqIE1BSU4tUklHSFQgKioqL1xcblxcbi53ZWF0aGVyLW1haW4taW5mby1yaWdodCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRhdGUsIC50aW1lIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4vKioqIE9QVElPTlMgQ09OVEFJTkVSKioqL1xcblxcbi5vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxuXFxufVxcblxcbi5vcHRpb25zLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm9wdGlvbnMtc2VhcmNoLWNvbnRhaW5lcj5zcGFuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcblxcbn1cXG5cXG4jdGhlbWVMaWdodCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuI3RoZW1lRGFyayB7XFxuICAgIGRpc3BsYXk6IE5vbmU7XFxufVxcblxcblxcbi5pbnB1dC1lcnJvciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAuMXMgbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUge1xcbiAgICAgICAgbGVmdDogLTNweDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHJpZ2h0OiAtM3B4O1xcbiAgICB9XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiN1bml0QyB7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN1bml0RiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLyoqKiBGT1JFQ0FTVCBTV0lUQ0ggQ09OVEFJTkVSICoqKi9cXG5cXG5cXG4uc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuXFxufVxcblxcbi5mb3JlY2FzdC1zd2l0Y2gge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4vKioqIGRhaWx5ICoqKi9cXG5cXG4uZGFpbHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiBhdXRvO1xcbn1cXG5cXG4uZGFpbHkge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kYWlseS1kYXkge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmRhaWx5LXRlbXAge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5kYWlseS1sb3ctdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyoqKiBIT1VSTFkgKioqL1xcblxcbi5ob3VybHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiBhdXRvO1xcbn1cXG5cXG4uaG91cmx5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyN3B4O1xcbn1cXG5cXG4uaG91cmx5LWhvdXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5ob3VybHktdGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gLjQpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcXG4gICAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAyLjVyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICB9XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcbiAgICAubWFpbi1kZXNjIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbi10ZW1wLWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgIH1cXG5cXG4gICAgLmRldGFpbC1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG5cXG4gICAgLm9wdGlvbnMtc2VhcmNoLWJ0biB7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgfVxcblxcbiAgICAuaG91cmx5LWljb24sIC5kYWlseS1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItbWFpbi1pbmZvLXJpZ2h0IGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDkwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1kZXRhaWxzLWNvbnRhaW5lciA6bm90KGkpIGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXG5cXG4gICAgfVxcblxcbiAgICAubWFpbi1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAuZGV0YWlsIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLmRhaWx5LWNvbnRhaW5lciwgLmhvdXJseS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE1cHggMDtcXG5cXG5cXG4gICAgfVxcblxcbiAgICAuc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcblxcbiAgICAuZGFpbHksIC5ob3VybHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuXFxuICAgIH1cXG5cXG4gICAgLmhvdXJseS1ob3VyLCAuZGFpbHktZGF5IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG5cXG4gICAgfVxcblxcbiAgICAuZm9yZWNhc3QtY29udGFpbmVyIDpub3QoaSkgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOTIlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YSgpIHtcblxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXRDaXR5TmFtZShjaXR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlc1VybChjaXR5KSB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9YmI0N2YyZGQ4YTdkNDExY2M0NzQ5NzE4OTA3NWY4YTZgO1xufVxuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3RVcmwoY29vcmRpbmF0ZXMsIHVuaXRzKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9JHt1bml0c30mYXBwaWQ9YmI0N2YyZGQ4YTdkNDExY2M0NzQ5NzE4OTA3NWY4YTZgO1xufVxuXG5cbi8vZmlyc3QgY2FsbCB0aGF0IGdpdmVzIHVzIGN1cnJlbnQgd2VhdGhlciwgaXMgb25seSB1c2VkIHRvIGdldCBjb29yZGluYXRlcywgd2hpY2ggZ2V0cyB1cyBhY2Nlc3MgdG8gb3RoZXIgYXBpIHdpdGggbW9yZSBkYXRhXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgICAgICBsb246IHdlYXRoZXJEYXRhLmNvb3JkLmxvbixcbiAgICAgICAgICAgIGxhdDogd2VhdGhlckRhdGEuY29vcmQubGF0LFxuICAgICAgICAgICAgbmFtZTogd2VhdGhlckRhdGEubmFtZSxcbiAgICAgICAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufVxuXG4vL2dldHMgY3VycmVudCB3ZWF0aGVyLCA3IGRheSBhbmQgMjRoIGZvcmVjYXN0XG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3QodXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgICBnZXRGb3JtRGF0YSxcbiAgICBnZXRDb29yZGluYXRlc1VybCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBnZXRXZWF0aGVyRm9yZWNhc3RVcmwsXG4gICAgZ2V0V2VhdGhlckZvcmVjYXN0LFxufTsiLCJcbi8vIENvbnN0YW50cyB2YXJpYWJsZXNcblxuY29uc3QgREVGQVVMVF9DSVRZID0gJ01vbnRyZWFsJztcblxuY29uc3QgdW5pdEluZm8gPSB7XG4gICAgSU1QRVJJQUw6IHtcbiAgICAgICAgbmFtZTogXCJpbXBlcmlhbFwiLFxuICAgICAgICB0ZW1wX2Rpc3BsYXk6IFwiIMKwRlwiLFxuICAgICAgICB3aW5kc3BlZWRfZGlzcGxheTogXCIgbXBoXCIsXG4gICAgfSxcbiAgICBNRVRSSUM6XG4gICAge1xuICAgICAgICBuYW1lOiBcIm1ldHJpY1wiLFxuICAgICAgICB0ZW1wX2Rpc3BsYXk6IFwiIMKwQ1wiLFxuICAgICAgICB3aW5kc3BlZWRfZGlzcGxheTogXCIga20vaFwiLFxuICAgIH0sXG59XG5leHBvcnQge1xuICAgIERFRkFVTFRfQ0lUWSxcbiAgICB1bml0SW5mbyxcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgKiBhcyBhcGlGdW5jIGZyb20gJy4vYXBpRnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIHVpRnVuYyBmcm9tICcuL3VpRnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuLy9EZWZhdWx0IHZhcmlhYmxlcyBpbml0aWFsaXphdGlvblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG5jb25zdCByb290U3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KTtcblxuY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpO1xuXG4vLyBidXR0b25zIHNlY3Rpb25cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXNlYXJjaC1idG4nKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcbmNvbnN0IHVuaXRCdG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRDJyk7XG5jb25zdCB1bml0QnRuRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0RicpO1xuY29uc3QgbGlnaHRUaGVtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZUxpZ2h0Jyk7XG5jb25zdCBkYXJrVGhlbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWVEYXJrJyk7XG5cbi8vIGZvcmVjYXN0IHNlY3Rpb25cbmNvbnN0IGRhaWx5Rm9yZWNhc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseScpO1xuY29uc3QgZGFpbHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1jb250YWluZXInKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1jb250YWluZXInKTtcblxuXG4vLyBkZWZhdWx0IHZhbHVlc1xubGV0IHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWU7XG5sZXQgbGFzdENpdHkgPSBjb25zdGFudHMuREVGQVVMVF9DSVRZO1xubGV0IHVuaXRDaGFuZ2UgPSBmYWxzZTtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShJbml0aWFsTG9hZCA9IGZhbHNlKSB7XG4gICAgdHJ5IHtcblxuICAgICAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGxldCBjaXR5TmFtZSA9IEluaXRpYWxMb2FkID8gY29uc3RhbnRzLkRFRkFVTFRfQ0lUWSA6IGFwaUZ1bmMuZ2V0Rm9ybURhdGEoKTtcblxuICAgICAgICBpZiAodW5pdENoYW5nZSkge1xuICAgICAgICAgICAgY2l0eU5hbWUgPSBsYXN0Q2l0eTtcbiAgICAgICAgICAgIHVuaXRDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgc2VhcmNoIGJ0biBpcyBjbGlja2VkIHdpdGggbm8gdGV4dFxuICAgICAgICBpZiAoIWNpdHlOYW1lKSB7XG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuZWVkIHRvIGtlZXAgdGhlIHByZXZpb3VzIGNpdHkgaW4gbWVtb3J5IGluIGNhc2UgdXNlciBzd2l0Y2hlcyB1bml0cywgd2hpY2ggcmVxdWlyZSBhIG5ldyBhcGkgY2FsbCBcbiAgICAgICAgbGFzdENpdHkgPSBjaXR5TmFtZTtcblxuXG4gICAgICAgIC8vIGFwaSBjYWxscywgZ2V0IGNvb3JkaW5hdGVzIGZpcnN0LCB0aGVuIHNlbmQgdGhlbSB0byBzZWNvbmQgY2FsbFxuICAgICAgICBjb25zdCByZXF1ZXN0Q29vcmRzVXJsID0gYXBpRnVuYy5nZXRDb29yZGluYXRlc1VybChjaXR5TmFtZSk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGFwaUZ1bmMuZ2V0Q29vcmRpbmF0ZXMocmVxdWVzdENvb3Jkc1VybCk7XG5cbiAgICAgICAgLy9jYWxsIHRoYXQgZ2l2ZXMgdXMgYWxsIG5lZWRlZCBkYXRhIHRvIHNob3cgcGFnZVxuICAgICAgICBjb25zdCByZXF1ZXN0V2VhdGhlclVybCA9IGFwaUZ1bmMuZ2V0V2VhdGhlckZvcmVjYXN0VXJsKGNvb3JkcywgdW5pdCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBhcGlGdW5jLmdldFdlYXRoZXJGb3JlY2FzdChyZXF1ZXN0V2VhdGhlclVybCk7XG5cbiAgICAgICAgd2VhdGhlci5uYW1lID0gY29vcmRzLm5hbWU7XG4gICAgICAgIHdlYXRoZXIuY291bnRyeSA9IGNvb3Jkcy5jb3VudHJ5O1xuXG4gICAgICAgIHVpRnVuYy5yZW5kZXJXZWF0aGVyRGF0YSh3ZWF0aGVyLCB1bml0KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vaWYgY2l0eSBkb2VzIG5vdCBleGlzdCwgd2Ugc3RpbGwgaGF2ZSB0byBrZWVwIHRoZSBvbGQgb25lIGluIG1lbW9yeVxuICAgICAgICBsYXN0Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JykuaW5uZXJUZXh0O1xuICAgICAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1lcnJvcicpO1xuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICB9XG4gICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG4vLyBpbml0aWFsIGNhbGwgdGhhdCByZW5kZXJzIHNjcmVlbiB3aXRoIGRlZmF1bHQgY2l0eVxuZ2V0V2VhdGhlckRhdGEodHJ1ZSk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xufSk7XG5cbi8vIGtleWJvYXJkIGVudGVyIGV2ZW50IFxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGdldFdlYXRoZXJEYXRhKCk7XG4gICAgfVxufSk7XG5cbnVuaXRCdG5GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uSU1QRVJJQUwubmFtZTtcbiAgICB1bml0Q2hhbmdlID0gdHJ1ZTtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xuXG4gICAgdW5pdEJ0bkYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB1bml0QnRuQy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG59KTtcblxudW5pdEJ0bkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdW5pdCA9IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMubmFtZTtcbiAgICB1bml0Q2hhbmdlID0gdHJ1ZTtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xuXG4gICAgdW5pdEJ0bkMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB1bml0QnRuRi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG59KTtcblxuZGFya1RoZW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxpZ2h0VGhlbWVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIGRhcmtUaGVtZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnN0eWxlLmJhY2tncm91bmQgPSByb290U3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJy0tYmctZGFyaycpO1xuXG59KTtcblxubGlnaHRUaGVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsaWdodFRoZW1lQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGFya1RoZW1lQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zdHlsZS5iYWNrZ3JvdW5kID0gcm9vdFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCctLWJnLWxpZ2h0Jyk7XG5cblxufSk7XG5cbmRhaWx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cblxuaG91cmx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG91cmx5Rm9yZWNhc3RCdG4uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3Qtc3dpdGNoLXNlbGVjdGVkJyk7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5leHBvcnQge1xuICAgIHVuaXQsXG59XG5cblxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdW5pdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5cbi8vIGN1cnJlbnQgd2VhdGhlciB2YXJpYWJsZXNcbmNvbnN0IGN1cnJlbnRXZWF0aGVyRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWRlc2MnKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRlbXAtaWNvbicpO1xuY29uc3QgY3VycmVudFdlYXRoZXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGVtcCcpO1xuXG4vLyBkZXRhaWxzIHNlY3Rpb24gdmFyaWFibGVzXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNMaWtlJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuY29uc3QgcmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluJyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRTcGVlZCcpO1xuXG4vLyByaWdodCBzaWRlIGluZm8gdmFyaWFibGVzXG5jb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG5jb25zdCBjaXR5RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5jb25zdCBjaXR5VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XG5cbi8vIGZvcmVjYXN0IHZhcmlhYmxlc1xuY29uc3QgZGFpbHlGb3JlY2FzdEFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5Jyk7XG5jb25zdCBob3VybHlGb3JlY2FzdEFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseScpO1xuXG5sZXQgdW5pdFRlbXBEaXNwbGF5O1xubGV0IHVuaXRXaW5kRGlzcGxheTtcblxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSB3ZWF0aGVyLmN1cnJlbnQ7XG5cbiAgICBjdXJyZW50V2VhdGhlckRlc2MuaW5uZXJUZXh0ID0gdXRpbHMuY2FwaXRhbGl6ZUVhY2hXb3JkKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgIGN1cnJlbnRXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKHV0aWxzLmdldEljb24oY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5pY29uKSk7XG4gICAgY3VycmVudFdlYXRoZXJUZW1wLmlubmVyVGV4dCA9IHV0aWxzLmZvcm1hdFRlbXAoY3VycmVudFdlYXRoZXIudGVtcCk7XG5cbiAgICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcChjdXJyZW50V2VhdGhlci5mZWVsc19saWtlKTtcbiAgICBodW1pZGl0eS5pbm5lclRleHQgPSBjdXJyZW50V2VhdGhlci5odW1pZGl0eSArIFwiJVwiO1xuICAgIHJhaW4uaW5uZXJUZXh0ID0gKHdlYXRoZXIuaG91cmx5WzBdLnBvcCAqIDEwMCkgKyBcIiVcIlxuICAgIHdpbmQuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0V2luZFNwZWVkKGN1cnJlbnRXZWF0aGVyLndpbmRfc3BlZWQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2NhbGlzYXRpb25JbmZvKHdlYXRoZXIpIHtcbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSB3ZWF0aGVyLm5hbWU7XG4gICAgY2l0eURhdGUuaW5uZXJUZXh0ID0gdXRpbHMuZ2V0RGF0ZSh3ZWF0aGVyLmN1cnJlbnQuZHQpO1xuICAgIGNpdHlUaW1lLmlubmVyVGV4dCA9IHV0aWxzLmdldEhvdXJNaW51dGVzKHdlYXRoZXIuY3VycmVudC5kdCk7XG5cbn1cblxuLy8gcmVuZGVycyBhIDcgZGF5IGZvcmVjYXN0XG5mdW5jdGlvbiByZW5kZXJEYWlseUZvcmVjYXN0KHdlYXRoZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhaWx5Rm9yZWNhc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgZmlyc3QgJ2RhaWx5JyB3ZWF0aGVyIG9iamVjdCwgYXMgaXQgaXMgdGhlIHNhbWUgYXMgdGhlICdjdXJyZW50JyB3ZWF0aGVyXG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YUluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1kYXknKS5pbm5lclRleHQgPSB1dGlscy5nZXRXZWVrRGF5KHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0uZHQpO1xuICAgICAgICBkYWlseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmRhaWx5LXRlbXAnKS5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0udGVtcC5kYXkpO1xuICAgICAgICBkYWlseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmRhaWx5LWxvdy10ZW1wJykuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcCh3ZWF0aGVyLmRhaWx5W3dlYXRoZXJEYXRhSW5kZXhdLnRlbXAubWluKTtcbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1pY29uJykuY2xhc3NMaXN0LmFkZCh1dGlscy5nZXRJY29uKHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0ud2VhdGhlclswXS5pY29uKSk7XG5cbiAgICB9XG59XG5cbi8vIHJlbmRlcnMgYSA4IGhvdXIgZm9yZWNhc3RcbmZ1bmN0aW9uIHJlbmRlckhvdXJseUZvcmVjYXN0KHdlYXRoZXIpIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cmx5Rm9yZWNhc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgZmlyc3QgJ2hvdXJseScgd2VhdGhlciBvYmplY3QsIGFzIGl0IGlzIHRoZSBzYW1lIGFzIHRoZSAnY3VycmVudCcgd2VhdGhlclxuICAgICAgICBsZXQgd2VhdGhlckRhdGFJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgIGhvdXJseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmhvdXJseS1ob3VyJykuaW5uZXJUZXh0ID0gdXRpbHMuZ2V0SG91cih3ZWF0aGVyLmhvdXJseVt3ZWF0aGVyRGF0YUluZGV4XS5kdCk7XG4gICAgICAgIGhvdXJseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmhvdXJseS10ZW1wJykuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcCh3ZWF0aGVyLmhvdXJseVt3ZWF0aGVyRGF0YUluZGV4XS50ZW1wKTtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3RBcnJheVtpXS5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWljb24nKS5jbGFzc0xpc3QuYWRkKHV0aWxzLmdldEljb24od2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0ud2VhdGhlclswXS5pY29uKSk7XG5cbiAgICB9XG59XG5cblxuLy8gbWFpbiBmdW5jdGlvbiB0aGF0IHdpbGwgcmVuZGVyIHRoZSB3aG9sZSBwYWdlXG5mdW5jdGlvbiByZW5kZXJXZWF0aGVyRGF0YSh3ZWF0aGVyKSB7XG4gICAgdW5pdFRlbXBEaXNwbGF5ID0gdW5pdCA9PSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWUgPyBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLnRlbXBfZGlzcGxheSA6IGNvbnN0YW50cy51bml0SW5mby5JTVBFUklBTC50ZW1wX2Rpc3BsYXk7XG4gICAgdW5pdFdpbmREaXNwbGF5ID0gdW5pdCA9PSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWUgPyBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLndpbmRzcGVlZF9kaXNwbGF5IDogY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLndpbmRzcGVlZF9kaXNwbGF5O1xuXG4gICAgcmVuZGVyQ3VycmVudFdlYXRoZXIod2VhdGhlcik7XG4gICAgcmVuZGVyTG9jYWxpc2F0aW9uSW5mbyh3ZWF0aGVyKTtcbiAgICByZW5kZXJEYWlseUZvcmVjYXN0KHdlYXRoZXIpO1xuICAgIHJlbmRlckhvdXJseUZvcmVjYXN0KHdlYXRoZXIpO1xufVxuXG5leHBvcnQge1xuICAgIHJlbmRlcldlYXRoZXJEYXRhLFxuICAgIHVuaXRUZW1wRGlzcGxheSxcbiAgICB1bml0V2luZERpc3BsYXksXG59IiwiaW1wb3J0IHsgdW5pdFdpbmREaXNwbGF5LCB1bml0VGVtcERpc3BsYXkgfSBmcm9tIFwiLi91aUZ1bmN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJ1xuXG4vLyB1c2luZyBVTklYIHRpbWVzdGFtcCBnaXZlbiBieSBBUEksIHdlIGNhbiBmb3JtYXQgb3VyIGRhdGUgYW5kIHRpbWUgaG93ZXZlciB3ZSB3YW50LiB0aGVzZSBhcmUgcHJldHR5IHNwZWNpZmljIHV0aWxzIGJ1dCBjb3VsZCBiZSB1c2VkIGFueXdoZXJlXG5cbmZ1bmN0aW9uIGdldERhdGUodW5peFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkodW5peFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJNaW51dGVzKHVuaXhUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXIxMjogdHJ1ZSB9KS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VyKHVuaXhUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRlbXAodGVtcCkge1xuICAgIGxldCB0ZW1wU3RyID0gU3RyaW5nKHRlbXApO1xuICAgIHJldHVybiB0ZW1wU3RyLnN1YnN0cmluZygwLCB0ZW1wU3RyLmluZGV4T2YoXCIuXCIpKSArIHVuaXRUZW1wRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2luZFNwZWVkKHdpbmQpIHtcbiAgICBpZiAodW5pdFdpbmREaXNwbGF5ID09IGNvbnN0YW50cy51bml0SW5mby5JTVBFUklBTC53aW5kc3BlZWRfZGlzcGxheSkge1xuICAgICAgICByZXR1cm4gd2luZCArIHVuaXRXaW5kRGlzcGxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQod2luZCAqIDMuNikpICsgdW5pdFdpbmREaXNwbGF5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2hXb3JkKHN0cikge1xuICAgIHZhciBzcGxpdFN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdFN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBzcGxpdFN0cltpXSA9IHNwbGl0U3RyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3BsaXRTdHJbaV0uc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICByZXR1cm4gc3BsaXRTdHIuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRDaXR5TmFtZShzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvKCxcXHMrKS9nLCAnLCcpXG4gICAgICAgIC5yZXBsYWNlKC8oXFxzKywpL2csICcsJylcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJysnKTtcbn1cblxuLy8gc3dpdGNoIHN0YXRlbWVudCB0aGF0IGxvb2tzIGZvciB0aGUgb3JpZ2luYWwgY29kZXMgZnJvbSBvcGVuV2VhdGhlciBBUEksIGFuZCByZXR1cm5zIEZBIGljb25zLlxuZnVuY3Rpb24gZ2V0SWNvbihpY29uQ29kZSkge1xuICAgIHN3aXRjaCAoaWNvbkNvZGUpIHtcbiAgICAgICAgY2FzZSBcIjAxblwiOlxuICAgICAgICBjYXNlIFwiMDFkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1zdW5cIjtcbiAgICAgICAgY2FzZSBcIjAyblwiOlxuICAgICAgICBjYXNlIFwiMDJkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1jbG91ZC1zdW5cIjtcbiAgICAgICAgY2FzZSBcIjAzblwiOlxuICAgICAgICBjYXNlIFwiMDNkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1jbG91ZFwiO1xuICAgICAgICBjYXNlIFwiMDRuXCI6XG4gICAgICAgIGNhc2UgXCIwNGRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWNsb3VkXCI7XG4gICAgICAgIGNhc2UgXCIwOW5cIjpcbiAgICAgICAgY2FzZSBcIjA5ZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtY2xvdWQtc2hvd2Vycy1oZWF2eVwiO1xuICAgICAgICBjYXNlIFwiMTBuXCI6XG4gICAgICAgIGNhc2UgXCIxMGRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWNsb3VkLXN1bi1yYWluXCI7XG4gICAgICAgIGNhc2UgXCIxMW5cIjpcbiAgICAgICAgY2FzZSBcIjExZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtYm9sdFwiO1xuICAgICAgICBjYXNlIFwiMTNuXCI6XG4gICAgICAgIGNhc2UgXCIxM2RcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLXNub3dmbGFrZVwiO1xuICAgICAgICBjYXNlIFwiNTBuXCI6XG4gICAgICAgIGNhc2UgXCI1MGRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLXNtb2dcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG59XG5leHBvcnQge1xuICAgIGZvcm1hdFRlbXAsXG4gICAgZm9ybWF0V2luZFNwZWVkLFxuICAgIGdldERhdGUsXG4gICAgZ2V0SG91ck1pbnV0ZXMsXG4gICAgY2FwaXRhbGl6ZUVhY2hXb3JkLFxuICAgIGdldFdlZWtEYXksXG4gICAgZ2V0SG91cixcbiAgICBmb3JtYXRDaXR5TmFtZSxcbiAgICBnZXRJY29uLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=