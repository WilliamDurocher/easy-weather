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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: whitesmoke;\n}\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 4rem;\n    width: 100vw;\n    height: 100%;\n    min-height: 100%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n/* todo media here */\n.weather-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.main-desc {\n    font-size: 42px;\n    font-weight: 700;\n    padding-bottom: 1rem;\n}\n\n\n.main-temp-container {\n    display: flex;\n    gap: 3rem;\n}\n\n.main-temp-icon {\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n}\n\n.main-temp {\n    font-size: 36px;\n    font-weight: 800;\n    height: 60px;\n    line-height: 60px;\n    border: 2px solid white;\n    border-radius: 15px;\n    width: auto;\n    padding: 0 10px;\n    text-align: center;\n    align-self: center;\n    white-space: nowrap;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    padding-top: 2rem;\n}\n\n.detail {\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon {\n    text-align: center;\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n}\n\n.detail-info-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.detail-name {\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: 600;\n}\n\n.detail-value {\n    font-size: 20px;\n    font-weight: 400;\n}\n\n/*** MAIN-RIGHT ***/\n\n.city {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.date, .time {\n    font-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container {\n    display: grid;\n    gap: 20px;\n    margin-top: 50px;\n\n\n}\n\n.options-search-container {\n    display: flex;\n    gap: 5px;\n}\n\n.options-search-container>span:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.search {\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n    padding-left: 7px;\n\n}\n\n.search::placeholder {\n    font-size: 16px;\n\n}\n\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% {\n        left: -3px;\n    }\n\n    100% {\n        right: -3px;\n    }\n}\n\n.error-message {\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n}\n\n.btn {\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n.btn:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n#unitC {\n\n    display: none;\n}\n\n#unitF {\n    display: inline;\n}\n\n\n/*** FORECAST SWITCH CONTAINER ***/\n\n.forecast-container {}\n\n.switch-container {\n    display: flex;\n    gap: 10px;\n    padding-bottom: 15px;\n}\n\n.forecast-switch {\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n.forecast-switch-selected {\n    background-color: white;\n    color: black;\n\n}\n\n\n/*** daily ***/\n\n.daily-container {\n    display: flex;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.daily {\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.daily-day {\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n\n.daily-temp {\n    font-size: 28px;\n    font-weight: 800;\n}\n\n.daily-low-temp {\n    font-size: 15px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container {\n    display: none;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.hourly {\n    display: flex;\n    flex-direction: column;\n    gap: 27px;\n}\n\n.hourly-hour {\n    font-weight: 600;\n    font-size: 22px;\n}\n\n.hourly-temp {\n    font-weight: 800;\n    font-size: 28px;\n}\n\n.hourly-icon {}\n\n.btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}\n\n@media (max-width: 1300px){\n    .main-container{\n        padding: 3.5rem;\n    }\n}\n@media (max-width: 1200px){\n    .main-container{\n        padding: 3rem;\n    }\n}\n\n@media (max-width: 1100px){\n    .main-container{\n        padding: 2.5rem;\n    }\n}\n@media (max-width: 1000px){\n    .main-container{\n        padding: 1.5rem;\n    }\n}\n\n@media (max-width: 550px) {\n    .daily-container, .hourly-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: url('./assets/bg_dark.jpg') no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: whitesmoke;\n}\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 4rem;\n    width: 100vw;\n    height: 100%;\n    min-height: 100%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n/* todo media here */\n.weather-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.main-desc {\n    font-size: 42px;\n    font-weight: 700;\n    padding-bottom: 1rem;\n}\n\n\n.main-temp-container {\n    display: flex;\n    gap: 3rem;\n}\n\n.main-temp-icon {\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n}\n\n.main-temp {\n    font-size: 36px;\n    font-weight: 800;\n    height: 60px;\n    line-height: 60px;\n    border: 2px solid white;\n    border-radius: 15px;\n    width: auto;\n    padding: 0 10px;\n    text-align: center;\n    align-self: center;\n    white-space: nowrap;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    padding-top: 2rem;\n}\n\n.detail {\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon {\n    text-align: center;\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n}\n\n.detail-info-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.detail-name {\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: 600;\n}\n\n.detail-value {\n    font-size: 20px;\n    font-weight: 400;\n}\n\n/*** MAIN-RIGHT ***/\n\n.city {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.date, .time {\n    font-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container {\n    display: grid;\n    gap: 20px;\n    margin-top: 50px;\n\n\n}\n\n.options-search-container {\n    display: flex;\n    gap: 5px;\n}\n\n.options-search-container>span:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.search {\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n    padding-left: 7px;\n\n}\n\n.search::placeholder {\n    font-size: 16px;\n\n}\n\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% {\n        left: -3px;\n    }\n\n    100% {\n        right: -3px;\n    }\n}\n\n.error-message {\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n}\n\n.btn {\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n.btn:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n#unitC {\n\n    display: none;\n}\n\n#unitF {\n    display: inline;\n}\n\n\n/*** FORECAST SWITCH CONTAINER ***/\n\n.forecast-container {}\n\n.switch-container {\n    display: flex;\n    gap: 10px;\n    padding-bottom: 15px;\n}\n\n.forecast-switch {\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n.forecast-switch-selected {\n    background-color: white;\n    color: black;\n\n}\n\n\n/*** daily ***/\n\n.daily-container {\n    display: flex;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.daily {\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.daily-day {\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n\n.daily-temp {\n    font-size: 28px;\n    font-weight: 800;\n}\n\n.daily-low-temp {\n    font-size: 15px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container {\n    display: none;\n    text-align: center;\n    justify-content: space-between;\n    padding-top: auto;\n}\n\n.hourly {\n    display: flex;\n    flex-direction: column;\n    gap: 27px;\n}\n\n.hourly-hour {\n    font-weight: 600;\n    font-size: 22px;\n}\n\n.hourly-temp {\n    font-weight: 800;\n    font-size: 28px;\n}\n\n.hourly-icon {}\n\n.btn:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}\n\n@media (max-width: 1300px){\n    .main-container{\n        padding: 3.5rem;\n    }\n}\n@media (max-width: 1200px){\n    .main-container{\n        padding: 3rem;\n    }\n}\n\n@media (max-width: 1100px){\n    .main-container{\n        padding: 2.5rem;\n    }\n}\n@media (max-width: 1000px){\n    .main-container{\n        padding: 1.5rem;\n    }\n}\n\n@media (max-width: 550px) {\n    .daily-container, .hourly-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
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

async function getWeatherForecast(url) {
    try{
        const response = await fetch(url);
        const weatherData = await response.json();
    
        return weatherData;
    }catch (error){
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


const DEFAULT_CITY = 'Montreal';

const unitInfo ={
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


const loadingScreen = document.querySelector('.loading-screen');
const searchBtn = document.querySelector('.options-search-btn');
const searchInput = document.querySelector('.search');
const errorMessage = document.querySelector('.error-message');
const unitBtnC = document.getElementById('unitC');
const unitBtnF = document.getElementById('unitF');
const themeSwitchBtn = document.getElementById('theme');
const dailyForecastBtn = document.getElementById('daily');
const hourlyForecastBtn = document.getElementById('hourly');
const dailyForecastContainer = document.querySelector('.daily-container');
const hourlyForecastContainer = document.querySelector('.hourly-container');


//default vals
let unit = _constants__WEBPACK_IMPORTED_MODULE_3__.unitInfo.METRIC.name;
let lastCity = _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CITY;
let unitChange = false;

/**
 *TODO: main application function, gets the weather data from API and sends it to the ui.js fonction that will render the data
 * put in try catch 
 * TODO: while this function is running, have a splash screen with 3 dots or loading circle that deactivates the UI while the data is loading
 * @params
 *  unit: metric or imperial - metric by default
 *  intial load = false
 */
async function getWeatherData(InitialLoad = false){

    try{

    loadingScreen.style.display = 'block';

    let cityName = InitialLoad ? _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CITY : _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getFormData();

    if (unitChange){
        cityName = lastCity;
        unitChange = false;
    }

    //do nothing if search btn is clicked with no text
    if (!cityName){
        loadingScreen.style.display = 'none';
        return;
    }


    //If we need to change the unit, we don't want to lose the city we had in the first place
    lastCity = cityName;

    const requestCoordsUrl = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordinatesUrl(cityName);
    const coords =  await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordinates(requestCoordsUrl);

    const requestWeatherUrl = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecastUrl(coords, unit);
    const weather = await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecast(requestWeatherUrl);
 
    weather.name = coords.name;
    weather.country = coords.country;

    _uiFunctions__WEBPACK_IMPORTED_MODULE_2__.renderWeatherData(weather, unit);

} catch (error){
    lastCity = document.querySelector('.city').innerText;
    searchInput.classList.add('input-error');
    errorMessage.style.display = "inline";

    setTimeout(function() {
        searchInput.classList.remove('input-error');
        errorMessage.style.display = "none";

    }, 1500);

}
loadingScreen.style.display = 'none';


searchInput.value = '';



}
// initial call: 
getWeatherData(true);


searchBtn.addEventListener('click', () => {
    getWeatherData();
  });
  
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

themeSwitchBtn.addEventListener('click', () => {
//TODO: change bg , transition 
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

const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const rain = document.getElementById('rain');
const wind = document.getElementById('windSpeed');

const cityName = document.querySelector('.city');
const cityDate = document.querySelector('.date');
const cityTime = document.querySelector('.time');

const dailyForecastArray = document.querySelectorAll('.daily');
const hourlyForecastArray = document.querySelectorAll('.hourly');



let unitTempDisplay;
let unitWindDisplay;


function renderCurrentWeather(weather){
    const currentWeather = weather.current;

    currentWeatherDesc.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeEachWord(currentWeather.weather[0].description);
    currentWeatherIcon.classList.add(_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(currentWeather.weather[0].icon));

    currentWeatherTemp.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(currentWeather.temp);
    feelsLike.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(currentWeather.feels_like);
    humidity.innerText = currentWeather.humidity + "%";
    rain.innerText = (weather.hourly[0].pop * 100) + "%"
    wind.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatWindSpeed(currentWeather.wind_speed);
}

function renderLocalisationInfo(weather){

    cityName.innerText = weather.name;
    cityDate.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getDate(weather.current.dt);
    cityTime.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getHourMinutes(weather.current.dt);

}

function renderDailyForecast(weather){
    for (let i = 0; i < dailyForecastArray.length; i++){

        // we are ignoring the first 'daily' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i+1;

        dailyForecastArray[i].querySelector('.daily-day').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getWeekDay(weather.daily[weatherDataIndex].dt);
        dailyForecastArray[i].querySelector('.daily-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.daily[weatherDataIndex].temp.day);
        dailyForecastArray[i].querySelector('.daily-low-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.daily[weatherDataIndex].temp.min);
        dailyForecastArray[i].querySelector('.daily-icon').classList.add(_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(weather.daily[weatherDataIndex].weather[0].icon));

    }
}


//TODO: for now, only 8 hours are shown. API gives us 24, so ideally we would have 3 pages of 8h each so that user can scroll through
function renderHourlyForecast(weather){

    for (let i = 0; i < hourlyForecastArray.length; i++){

        // we are ignoring the first 'hourly' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i+1;

        hourlyForecastArray[i].querySelector('.hourly-hour').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getHour(weather.hourly[weatherDataIndex].dt);
        hourlyForecastArray[i].querySelector('.hourly-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.hourly[weatherDataIndex].temp);
        hourlyForecastArray[i].querySelector('.hourly-icon').classList.add(_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(weather.hourly[weatherDataIndex].weather[0].icon));

    }
}


function renderWeatherData(weather){
    //this will call all the different renders functions (main, forecast, details, etc)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL3VpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JnX2RhcmsuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi8qIHRvZG8gbWVkaWEgaGVyZSAqL1xcbi53ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuXFxuLm1haW4tZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi5tYWluLXRlbXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubWFpbi10ZW1wLWljb24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5cXG5cXG4vKioqIERFVEFJTCBTRUNUSU9OICoqKi9cXG5cXG4ubWFpbi1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5kZXRhaWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGV0YWlsLWljb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5kZXRhaWwtaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGV0YWlsLXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKioqIE1BSU4tUklHSFQgKioqL1xcblxcbi5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGF0ZSwgLnRpbWUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi8qKiogT1BUSU9OUyBDT05UQUlORVIqKiovXFxuXFxuLm9wdGlvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcblxcblxcbn1cXG5cXG4ub3B0aW9ucy1zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5vcHRpb25zLXNlYXJjaC1jb250YWluZXI+c3Bhbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG5cXG59XFxuXFxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxufVxcblxcblxcbi5pbnB1dC1lcnJvciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAuMXMgbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUge1xcbiAgICAgICAgbGVmdDogLTNweDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHJpZ2h0OiAtM3B4O1xcbiAgICB9XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3VuaXRDIHtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3VuaXRGIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4vKioqIEZPUkVDQVNUIFNXSVRDSCBDT05UQUlORVIgKioqL1xcblxcbi5mb3JlY2FzdC1jb250YWluZXIge31cXG5cXG4uc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5mb3JlY2FzdC1zd2l0Y2gge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG5cXG4vKioqIGRhaWx5ICoqKi9cXG5cXG4uZGFpbHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiBhdXRvO1xcbn1cXG5cXG4uZGFpbHkge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kYWlseS1kYXkge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmRhaWx5LXRlbXAge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5kYWlseS1sb3ctdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyoqKiBIT1VSTFkgKioqL1xcblxcbi5ob3VybHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiBhdXRvO1xcbn1cXG5cXG4uaG91cmx5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyN3B4O1xcbn1cXG5cXG4uaG91cmx5LWhvdXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5ob3VybHktdGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmhvdXJseS1pY29uIHt9XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gLjQpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOiAzLjVyZW07XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCl7XFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCl7XFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAuZGFpbHktY29udGFpbmVyLCAuaG91cmx5LWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBEQUEwRDtJQUMxRCxpRkFBcUU7SUFDckUsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIs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ZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvYmdfZGFyay5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLyogdG9kbyBtZWRpYSBoZXJlICovXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1kZXNjIHtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLm1haW4tdGVtcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5tYWluLXRlbXAtaWNvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWFpbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcblxcblxcbi8qKiogREVUQUlMIFNFQ1RJT04gKioqL1xcblxcbi5tYWluLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kZXRhaWwtaWNvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNzBweDtcXG59XFxuXFxuLmRldGFpbC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZXRhaWwtdmFsdWUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qKiogTUFJTi1SSUdIVCAqKiovXFxuXFxuLmNpdHkge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kYXRlLCAudGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLyoqKiBPUFRJT05TIENPTlRBSU5FUioqKi9cXG5cXG4ub3B0aW9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxuXFxufVxcblxcbi5vcHRpb25zLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm9wdGlvbnMtc2VhcmNoLWNvbnRhaW5lcj5zcGFuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcblxcbn1cXG5cXG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG59XFxuXFxuXFxuLmlucHV0LWVycm9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IHNoYWtlIC4xcyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBsZWZ0OiAtM3B4O1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgcmlnaHQ6IC0zcHg7XFxuICAgIH1cXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jdW5pdEMge1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdW5pdEYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcblxcbi8qKiogRk9SRUNBU1QgU1dJVENIIENPTlRBSU5FUiAqKiovXFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7fVxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZvcmVjYXN0LXN3aXRjaCB7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcmVjYXN0LXN3aXRjaC1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcblxcbi8qKiogZGFpbHkgKioqL1xcblxcbi5kYWlseS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxufVxcblxcbi5kYWlseSB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRhaWx5LWRheSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGFpbHktdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmRhaWx5LWxvdy10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKioqIEhPVVJMWSAqKiovXFxuXFxuLmhvdXJseS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxufVxcblxcbi5ob3VybHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI3cHg7XFxufVxcblxcbi5ob3VybHktaG91ciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmhvdXJseS10ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uaG91cmx5LWljb24ge31cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDMuNXJlbTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KXtcXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogMi41cmVtO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5kYWlseS1jb250YWluZXIsIC5ob3VybHktY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YSgpIHtcblxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXRDaXR5TmFtZShjaXR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlc1VybChjaXR5KSB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9YmI0N2YyZGQ4YTdkNDExY2M0NzQ5NzE4OTA3NWY4YTZgO1xufVxuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3RVcmwoY29vcmRpbmF0ZXMsIHVuaXRzKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9JHt1bml0c30mYXBwaWQ9YmI0N2YyZGQ4YTdkNDExY2M0NzQ5NzE4OTA3NWY4YTZgO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgICAgICBsb246IHdlYXRoZXJEYXRhLmNvb3JkLmxvbixcbiAgICAgICAgICAgIGxhdDogd2VhdGhlckRhdGEuY29vcmQubGF0LFxuICAgICAgICAgICAgbmFtZTogd2VhdGhlckRhdGEubmFtZSxcbiAgICAgICAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3QodXJsKSB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfWNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9ybURhdGEsXG4gICAgZ2V0Q29vcmRpbmF0ZXNVcmwsXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0V2VhdGhlckZvcmVjYXN0VXJsLFxuICAgIGdldFdlYXRoZXJGb3JlY2FzdCxcbn07IiwiXG5cbmNvbnN0IERFRkFVTFRfQ0lUWSA9ICdNb250cmVhbCc7XG5cbmNvbnN0IHVuaXRJbmZvID17XG4gICAgSU1QRVJJQUw6IHtcbiAgICAgICAgbmFtZTogXCJpbXBlcmlhbFwiLFxuICAgICAgICB0ZW1wX2Rpc3BsYXk6IFwiIMKwRlwiLFxuICAgICAgICB3aW5kc3BlZWRfZGlzcGxheTogXCIgbXBoXCIsXG4gICAgfSxcbiAgICBNRVRSSUM6XG4gICAge1xuICAgICAgICBuYW1lOiBcIm1ldHJpY1wiLFxuICAgICAgICB0ZW1wX2Rpc3BsYXk6IFwiIMKwQ1wiLFxuICAgICAgICB3aW5kc3BlZWRfZGlzcGxheTogXCIga20vaFwiLFxuICAgIH0sXG59XG5leHBvcnQge1xuICAgIERFRkFVTFRfQ0lUWSxcbiAgICB1bml0SW5mbyxcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgKiBhcyBhcGlGdW5jIGZyb20gJy4vYXBpRnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIHVpRnVuYyBmcm9tICcuL3VpRnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG4vL0RlZmF1bHQgdmFyaWFibGVzIGluaXRpYWxpemF0aW9uXG5cblxuY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtc2VhcmNoLWJ0bicpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuY29uc3QgdW5pdEJ0bkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdEMnKTtcbmNvbnN0IHVuaXRCdG5GID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRGJyk7XG5jb25zdCB0aGVtZVN3aXRjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZScpO1xuY29uc3QgZGFpbHlGb3JlY2FzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseScpO1xuY29uc3QgaG91cmx5Rm9yZWNhc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5Jyk7XG5jb25zdCBkYWlseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWNvbnRhaW5lcicpO1xuY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWNvbnRhaW5lcicpO1xuXG5cbi8vZGVmYXVsdCB2YWxzXG5sZXQgdW5pdCA9IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMubmFtZTtcbmxldCBsYXN0Q2l0eSA9IGNvbnN0YW50cy5ERUZBVUxUX0NJVFk7XG5sZXQgdW5pdENoYW5nZSA9IGZhbHNlO1xuXG4vKipcbiAqVE9ETzogbWFpbiBhcHBsaWNhdGlvbiBmdW5jdGlvbiwgZ2V0cyB0aGUgd2VhdGhlciBkYXRhIGZyb20gQVBJIGFuZCBzZW5kcyBpdCB0byB0aGUgdWkuanMgZm9uY3Rpb24gdGhhdCB3aWxsIHJlbmRlciB0aGUgZGF0YVxuICogcHV0IGluIHRyeSBjYXRjaCBcbiAqIFRPRE86IHdoaWxlIHRoaXMgZnVuY3Rpb24gaXMgcnVubmluZywgaGF2ZSBhIHNwbGFzaCBzY3JlZW4gd2l0aCAzIGRvdHMgb3IgbG9hZGluZyBjaXJjbGUgdGhhdCBkZWFjdGl2YXRlcyB0aGUgVUkgd2hpbGUgdGhlIGRhdGEgaXMgbG9hZGluZ1xuICogQHBhcmFtc1xuICogIHVuaXQ6IG1ldHJpYyBvciBpbXBlcmlhbCAtIG1ldHJpYyBieSBkZWZhdWx0XG4gKiAgaW50aWFsIGxvYWQgPSBmYWxzZVxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShJbml0aWFsTG9hZCA9IGZhbHNlKXtcblxuICAgIHRyeXtcblxuICAgIGxvYWRpbmdTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBsZXQgY2l0eU5hbWUgPSBJbml0aWFsTG9hZCA/IGNvbnN0YW50cy5ERUZBVUxUX0NJVFkgOiBhcGlGdW5jLmdldEZvcm1EYXRhKCk7XG5cbiAgICBpZiAodW5pdENoYW5nZSl7XG4gICAgICAgIGNpdHlOYW1lID0gbGFzdENpdHk7XG4gICAgICAgIHVuaXRDaGFuZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2RvIG5vdGhpbmcgaWYgc2VhcmNoIGJ0biBpcyBjbGlja2VkIHdpdGggbm8gdGV4dFxuICAgIGlmICghY2l0eU5hbWUpe1xuICAgICAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vSWYgd2UgbmVlZCB0byBjaGFuZ2UgdGhlIHVuaXQsIHdlIGRvbid0IHdhbnQgdG8gbG9zZSB0aGUgY2l0eSB3ZSBoYWQgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgbGFzdENpdHkgPSBjaXR5TmFtZTtcblxuICAgIGNvbnN0IHJlcXVlc3RDb29yZHNVcmwgPSBhcGlGdW5jLmdldENvb3JkaW5hdGVzVXJsKGNpdHlOYW1lKTtcbiAgICBjb25zdCBjb29yZHMgPSAgYXdhaXQgYXBpRnVuYy5nZXRDb29yZGluYXRlcyhyZXF1ZXN0Q29vcmRzVXJsKTtcblxuICAgIGNvbnN0IHJlcXVlc3RXZWF0aGVyVXJsID0gYXBpRnVuYy5nZXRXZWF0aGVyRm9yZWNhc3RVcmwoY29vcmRzLCB1bml0KTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgYXBpRnVuYy5nZXRXZWF0aGVyRm9yZWNhc3QocmVxdWVzdFdlYXRoZXJVcmwpO1xuIFxuICAgIHdlYXRoZXIubmFtZSA9IGNvb3Jkcy5uYW1lO1xuICAgIHdlYXRoZXIuY291bnRyeSA9IGNvb3Jkcy5jb3VudHJ5O1xuXG4gICAgdWlGdW5jLnJlbmRlcldlYXRoZXJEYXRhKHdlYXRoZXIsIHVuaXQpO1xuXG59IGNhdGNoIChlcnJvcil7XG4gICAgbGFzdENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpLmlubmVyVGV4dDtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1lcnJvcicpO1xuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9LCAxNTAwKTtcblxufVxubG9hZGluZ1NjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cbnNlYXJjaElucHV0LnZhbHVlID0gJyc7XG5cblxuXG59XG4vLyBpbml0aWFsIGNhbGw6IFxuZ2V0V2VhdGhlckRhdGEodHJ1ZSk7XG5cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldFdlYXRoZXJEYXRhKCk7XG4gIH0pO1xuICBcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIH1cbiAgfSk7XG5cbnVuaXRCdG5GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uSU1QRVJJQUwubmFtZTtcbiAgICB1bml0Q2hhbmdlID0gdHJ1ZTtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIFxuICAgIHVuaXRCdG5GLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdW5pdEJ0bkMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xufSk7XG5cbnVuaXRCdG5DLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWU7XG4gICAgdW5pdENoYW5nZSA9IHRydWU7XG4gICAgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBcbiAgICB1bml0QnRuQy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHVuaXRCdG5GLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbn0pO1xuXG50aGVtZVN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vVE9ETzogY2hhbmdlIGJnICwgdHJhbnNpdGlvbiBcbn0pO1xuXG5cbmRhaWx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cblxuaG91cmx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG91cmx5Rm9yZWNhc3RCdG4uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3Qtc3dpdGNoLXNlbGVjdGVkJyk7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5cbmV4cG9ydCB7XG4gICAgdW5pdCxcbn1cblxuXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1bml0IH0gZnJvbSAnLi9pbmRleCc7XG5cblxuLy8gY3VycmVudCB3ZWF0aGVyIHZhcmlhYmxlc1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1kZXNjJyk7XG5jb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10ZW1wLWljb24nKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRlbXAnKTtcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzTGlrZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IHJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kU3BlZWQnKTtcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgY2l0eURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgY2l0eVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuXG5jb25zdCBkYWlseUZvcmVjYXN0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHknKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5Jyk7XG5cblxuXG5sZXQgdW5pdFRlbXBEaXNwbGF5O1xubGV0IHVuaXRXaW5kRGlzcGxheTtcblxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyKXtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXIuY3VycmVudDtcblxuICAgIGN1cnJlbnRXZWF0aGVyRGVzYy5pbm5lclRleHQgPSB1dGlscy5jYXBpdGFsaXplRWFjaFdvcmQoY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgY3VycmVudFdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQodXRpbHMuZ2V0SWNvbihjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLmljb24pKTtcblxuICAgIGN1cnJlbnRXZWF0aGVyVGVtcC5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKGN1cnJlbnRXZWF0aGVyLnRlbXApO1xuICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKGN1cnJlbnRXZWF0aGVyLmZlZWxzX2xpa2UpO1xuICAgIGh1bWlkaXR5LmlubmVyVGV4dCA9IGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgcmFpbi5pbm5lclRleHQgPSAod2VhdGhlci5ob3VybHlbMF0ucG9wICogMTAwKSArIFwiJVwiXG4gICAgd2luZC5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRXaW5kU3BlZWQoY3VycmVudFdlYXRoZXIud2luZF9zcGVlZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2FsaXNhdGlvbkluZm8od2VhdGhlcil7XG5cbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSB3ZWF0aGVyLm5hbWU7XG4gICAgY2l0eURhdGUuaW5uZXJUZXh0ID0gdXRpbHMuZ2V0RGF0ZSh3ZWF0aGVyLmN1cnJlbnQuZHQpO1xuICAgIGNpdHlUaW1lLmlubmVyVGV4dCA9IHV0aWxzLmdldEhvdXJNaW51dGVzKHdlYXRoZXIuY3VycmVudC5kdCk7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyRGFpbHlGb3JlY2FzdCh3ZWF0aGVyKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhaWx5Rm9yZWNhc3RBcnJheS5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgLy8gd2UgYXJlIGlnbm9yaW5nIHRoZSBmaXJzdCAnZGFpbHknIHdlYXRoZXIgb2JqZWN0LCBhcyBpdCBpcyB0aGUgc2FtZSBhcyB0aGUgJ2N1cnJlbnQnIHdlYXRoZXJcbiAgICAgICAgbGV0IHdlYXRoZXJEYXRhSW5kZXggPSBpKzE7XG5cbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1kYXknKS5pbm5lclRleHQgPSB1dGlscy5nZXRXZWVrRGF5KHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0uZHQpO1xuICAgICAgICBkYWlseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmRhaWx5LXRlbXAnKS5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0udGVtcC5kYXkpO1xuICAgICAgICBkYWlseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmRhaWx5LWxvdy10ZW1wJykuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcCh3ZWF0aGVyLmRhaWx5W3dlYXRoZXJEYXRhSW5kZXhdLnRlbXAubWluKTtcbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1pY29uJykuY2xhc3NMaXN0LmFkZCh1dGlscy5nZXRJY29uKHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0ud2VhdGhlclswXS5pY29uKSk7XG5cbiAgICB9XG59XG5cblxuLy9UT0RPOiBmb3Igbm93LCBvbmx5IDggaG91cnMgYXJlIHNob3duLiBBUEkgZ2l2ZXMgdXMgMjQsIHNvIGlkZWFsbHkgd2Ugd291bGQgaGF2ZSAzIHBhZ2VzIG9mIDhoIGVhY2ggc28gdGhhdCB1c2VyIGNhbiBzY3JvbGwgdGhyb3VnaFxuZnVuY3Rpb24gcmVuZGVySG91cmx5Rm9yZWNhc3Qod2VhdGhlcil7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJseUZvcmVjYXN0QXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgZmlyc3QgJ2hvdXJseScgd2VhdGhlciBvYmplY3QsIGFzIGl0IGlzIHRoZSBzYW1lIGFzIHRoZSAnY3VycmVudCcgd2VhdGhlclxuICAgICAgICBsZXQgd2VhdGhlckRhdGFJbmRleCA9IGkrMTtcblxuICAgICAgICBob3VybHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktaG91cicpLmlubmVyVGV4dCA9IHV0aWxzLmdldEhvdXIod2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0uZHQpO1xuICAgICAgICBob3VybHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktdGVtcCcpLmlubmVyVGV4dCA9IHV0aWxzLmZvcm1hdFRlbXAod2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0udGVtcCk7XG4gICAgICAgIGhvdXJseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmhvdXJseS1pY29uJykuY2xhc3NMaXN0LmFkZCh1dGlscy5nZXRJY29uKHdlYXRoZXIuaG91cmx5W3dlYXRoZXJEYXRhSW5kZXhdLndlYXRoZXJbMF0uaWNvbikpO1xuXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlcldlYXRoZXJEYXRhKHdlYXRoZXIpe1xuICAgIC8vdGhpcyB3aWxsIGNhbGwgYWxsIHRoZSBkaWZmZXJlbnQgcmVuZGVycyBmdW5jdGlvbnMgKG1haW4sIGZvcmVjYXN0LCBkZXRhaWxzLCBldGMpXG4gICAgdW5pdFRlbXBEaXNwbGF5ID0gdW5pdCA9PSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWUgPyBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLnRlbXBfZGlzcGxheSA6IGNvbnN0YW50cy51bml0SW5mby5JTVBFUklBTC50ZW1wX2Rpc3BsYXk7XG4gICAgdW5pdFdpbmREaXNwbGF5ID0gdW5pdCA9PSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWUgPyBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLndpbmRzcGVlZF9kaXNwbGF5IDogY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLndpbmRzcGVlZF9kaXNwbGF5O1xuICAgIFxuICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpO1xuICAgIHJlbmRlckxvY2FsaXNhdGlvbkluZm8od2VhdGhlcik7XG4gICAgcmVuZGVyRGFpbHlGb3JlY2FzdCh3ZWF0aGVyKTtcbiAgICByZW5kZXJIb3VybHlGb3JlY2FzdCh3ZWF0aGVyKTtcblxufVxuXG5leHBvcnR7XG4gICAgcmVuZGVyV2VhdGhlckRhdGEsXG4gICAgdW5pdFRlbXBEaXNwbGF5LFxuICAgIHVuaXRXaW5kRGlzcGxheSxcbn0iLCJpbXBvcnQgeyB1bml0V2luZERpc3BsYXksIHVuaXRUZW1wRGlzcGxheSB9IGZyb20gXCIuL3VpRnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXG5cbmZ1bmN0aW9uIGdldERhdGUodW5peFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkodW5peFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJNaW51dGVzKHVuaXhUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXIxMjogdHJ1ZSB9KS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VyKHVuaXhUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnRvTG93ZXJDYXNlKCk7XG5cbn1cblxuZnVuY3Rpb24gZm9ybWF0VGVtcCh0ZW1wKSB7XG4gICAgbGV0IHRlbXBTdHIgPSBTdHJpbmcodGVtcCk7XG4gICAgcmV0dXJuIHRlbXBTdHIuc3Vic3RyaW5nKDAsIHRlbXBTdHIuaW5kZXhPZihcIi5cIikpICsgdW5pdFRlbXBEaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXaW5kU3BlZWQod2luZCkge1xuICAgIGlmICh1bml0V2luZERpc3BsYXkgPT0gY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLndpbmRzcGVlZF9kaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiB3aW5kICsgdW5pdFdpbmREaXNwbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh3aW5kICogMy42KSkgKyB1bml0V2luZERpc3BsYXk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaFdvcmQoc3RyKSB7XG4gICAgdmFyIHNwbGl0U3RyID0gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0U3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwbGl0U3RyW2ldID0gc3BsaXRTdHJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzcGxpdFN0cltpXS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBzcGxpdFN0ci5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdENpdHlOYW1lKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC8oLFxccyspL2csICcsJylcbiAgICAgICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgJywnKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnKycpO1xufVxuXG5cbmZ1bmN0aW9uIGdldEljb24oaWNvbkNvZGUpIHtcbiAgICBzd2l0Y2ggKGljb25Db2RlKSB7XG4gICAgICAgIGNhc2UgXCIwMW5cIjpcbiAgICAgICAgY2FzZSBcIjAxZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtc3VuXCI7XG4gICAgICAgIGNhc2UgXCIwMm5cIjpcbiAgICAgICAgY2FzZSBcIjAyZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtY2xvdWQtc3VuXCI7XG4gICAgICAgIGNhc2UgXCIwM25cIjpcbiAgICAgICAgY2FzZSBcIjAzZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtY2xvdWRcIjtcbiAgICAgICAgY2FzZSBcIjA0blwiOlxuICAgICAgICBjYXNlIFwiMDRkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1jbG91ZFwiO1xuICAgICAgICBjYXNlIFwiMDluXCI6XG4gICAgICAgIGNhc2UgXCIwOWRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWNsb3VkLXNob3dlcnMtaGVhdnlcIjtcbiAgICAgICAgY2FzZSBcIjEwblwiOlxuICAgICAgICBjYXNlIFwiMTBkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1jbG91ZC1zdW4tcmFpblwiO1xuICAgICAgICBjYXNlIFwiMTFuXCI6XG4gICAgICAgIGNhc2UgXCIxMWRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWJvbHRcIjtcbiAgICAgICAgY2FzZSBcIjEzblwiOlxuICAgICAgICBjYXNlIFwiMTNkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1zbm93Zmxha2VcIjtcbiAgICAgICAgY2FzZSBcIjUwblwiOlxuICAgICAgICBjYXNlIFwiNTBkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1zbW9nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGZvcm1hdFRlbXAsXG4gICAgZm9ybWF0V2luZFNwZWVkLFxuICAgIGdldERhdGUsXG4gICAgZ2V0SG91ck1pbnV0ZXMsXG4gICAgY2FwaXRhbGl6ZUVhY2hXb3JkLFxuICAgIGdldFdlZWtEYXksXG4gICAgZ2V0SG91cixcbiAgICBmb3JtYXRDaXR5TmFtZSxcbiAgICBnZXRJY29uLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=