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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: white;\n}\n\nbody, html {\n    margin: 0;\n  }\n.main-container{\n\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n\n}\n\n.weather-container{\n    display: flex;\n    justify-content: space-between;\n    padding: 4rem;\n}\n\n\n.main-desc{\n    font-size: 42px;\n    font-weight: 600;\n}\n\n.main-temp-icon{\n    width: 80px;\n    height: 80px;\n}\n\n.main-temp{\n    font-size: 36px;\n    font-weight: 700;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n}\n.detail{\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon{\n    text-align: center;\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n}\n\n.detail-info-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.detail-name{\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n.detail-value{\n    font-size: 20px;\n    font-weight: 700;\n}\n\n/*** MAIN-RIGHT ***/\n\n.city{\n    font-size: 30px;\n    font-weight: 600;\n}\n.date, .time{\nfont-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container{\n    display: grid;\n    gap: 20px;\n\n}\n\n.options-search-container\n{\n    display: flex;\n    gap: 5px;\n}\n\n.search{\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n}\n.search::placeholder{\n    font-size: 16px;\n\n}\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% { left: -3px; }\n    100% { right: -3px; }\n}\n\n.error-message{\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n}\n\n.units{\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n#unitC{\n\n    display: none;\n}\n#unitF{\n    display: inline;\n}\n.theme{\n    margin-top: 50px;\n}\n\n/*** FORECAST SWITCH CONTAINER ***/\n.forecast-switch-container{\n    display: flex;\n    padding-left: 6rem;\n    gap: 10px;\n}\n.forecast-switch{\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n.forecast-switch-selected{\n    background-color: white;\n    color: black;\n\n}\n\n\n/*** daily ***/\n\n.daily-container{\n    display: flex;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n.daily-day{\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n.daily-high-value{\n    font-size: 28px;\n    font-weight: 700;\n}\n.daily-low-value{\n    font-size: 18px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container{\n    display: none;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n\n.hourly-hour{\n    font-weight: 600;\n    font-size: 18px;\n}\n\n.hourly-temp{\n    font-weight: 700;\n    font-size: 24px;\n}\n\n.hourly-icon{}\n\n.btn:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen{\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,0DAA0D;IACxD,iFAAqE;IACrE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,SAAS;EACX;AACF;;;IAGI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;;;AAIA,uBAAuB;;AAEvB;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,mBAAmB;;AAEnB;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;AACA,eAAe;AACf;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,SAAS;;AAEb;;AAEA;;IAEI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,eAAe;;AAEnB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,KAAK,UAAU,EAAE;IACjB,OAAO,WAAW,EAAE;AACxB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA,kCAAkC;AAClC;IACI,aAAa;IACb,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,YAAY;;AAEhB;;;AAGA,cAAc;;AAEd;IACI,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;;AAEA,eAAe;;AAEf;IACI,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA,aAAa;;AAEb;IACI,eAAe;IACf,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,OAAO;IACP,MAAM;IACN,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,0BAA0B;IAC1B,kCAAkC;IAClC,cAAc;IACd,2BAA2B;IAC3B,mCAAmC;IACnC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["html{\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: url('./assets/bg_dark.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: white;\n}\n\nbody, html {\n    margin: 0;\n  }\n.main-container{\n\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n\n}\n\n.weather-container{\n    display: flex;\n    justify-content: space-between;\n    padding: 4rem;\n}\n\n\n.main-desc{\n    font-size: 42px;\n    font-weight: 600;\n}\n\n.main-temp-icon{\n    width: 80px;\n    height: 80px;\n}\n\n.main-temp{\n    font-size: 36px;\n    font-weight: 700;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n}\n.detail{\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon{\n    text-align: center;\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n}\n\n.detail-info-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.detail-name{\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n.detail-value{\n    font-size: 20px;\n    font-weight: 700;\n}\n\n/*** MAIN-RIGHT ***/\n\n.city{\n    font-size: 30px;\n    font-weight: 600;\n}\n.date, .time{\nfont-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container{\n    display: grid;\n    gap: 20px;\n\n}\n\n.options-search-container\n{\n    display: flex;\n    gap: 5px;\n}\n\n.search{\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n}\n.search::placeholder{\n    font-size: 16px;\n\n}\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% { left: -3px; }\n    100% { right: -3px; }\n}\n\n.error-message{\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n}\n\n.units{\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n#unitC{\n\n    display: none;\n}\n#unitF{\n    display: inline;\n}\n.theme{\n    margin-top: 50px;\n}\n\n/*** FORECAST SWITCH CONTAINER ***/\n.forecast-switch-container{\n    display: flex;\n    padding-left: 6rem;\n    gap: 10px;\n}\n.forecast-switch{\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n.forecast-switch-selected{\n    background-color: white;\n    color: black;\n\n}\n\n\n/*** daily ***/\n\n.daily-container{\n    display: flex;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n.daily-day{\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n.daily-high-value{\n    font-size: 28px;\n    font-weight: 700;\n}\n.daily-low-value{\n    font-size: 18px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container{\n    display: none;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n\n.hourly-hour{\n    font-weight: 600;\n    font-size: 18px;\n}\n\n.hourly-temp{\n    font-weight: 700;\n    font-size: 24px;\n}\n\n.hourly-icon{}\n\n.btn:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen{\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}"],"sourceRoot":""}]);
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
const themeSwitchBtn = document.querySelector('.theme');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy91aUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iZ19kYXJrLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4ubWFpbi1jb250YWluZXJ7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDRyZW07XFxufVxcblxcblxcbi5tYWluLWRlc2N7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tdGVtcC1pY29ue1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWFpbi10ZW1we1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcblxcblxcbi8qKiogREVUQUlMIFNFQ1RJT04gKioqL1xcblxcbi5tYWluLWRldGFpbHMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5kZXRhaWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kZXRhaWwtaWNvbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uZGV0YWlsLWluZm8tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRldGFpbC1uYW1le1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5kZXRhaWwtdmFsdWV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyoqKiBNQUlOLVJJR0hUICoqKi9cXG5cXG4uY2l0eXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGF0ZSwgLnRpbWV7XFxuZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4vKioqIE9QVElPTlMgQ09OVEFJTkVSKioqL1xcblxcbi5vcHRpb25zLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4ub3B0aW9ucy1zZWFyY2gtY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNlYXJjaHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uc2VhcmNoOjpwbGFjZWhvbGRlcntcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbn1cXG5cXG4uaW5wdXQtZXJyb3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgLjFzIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlIHsgbGVmdDogLTNweDsgfVxcbiAgICAxMDAlIHsgcmlnaHQ6IC0zcHg7IH1cXG59XFxuXFxuLmVycm9yLW1lc3NhZ2V7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udW5pdHN7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiN1bml0Q3tcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3VuaXRGe1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi50aGVtZXtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLyoqKiBGT1JFQ0FTVCBTV0lUQ0ggQ09OVEFJTkVSICoqKi9cXG4uZm9yZWNhc3Qtc3dpdGNoLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5mb3JlY2FzdC1zd2l0Y2h7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvcmVjYXN0LXN3aXRjaC1zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuXFxuLyoqKiBkYWlseSAqKiovXFxuXFxuLmRhaWx5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXG4uZGFpbHktZGF5e1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLmRhaWx5LWhpZ2gtdmFsdWV7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmRhaWx5LWxvdy12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKioqIEhPVVJMWSAqKiovXFxuXFxuLmhvdXJseS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmctdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuLmhvdXJseS1ob3Vye1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5ob3VybHktdGVtcHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaG91cmx5LWljb257fVxcblxcbi5idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwREFBMEQ7SUFDeEQsaUZBQXFFO0lBQ3JFLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztFQUNYO0FBQ0Y7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7O0FBRWpC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XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvYmdfZGFyay5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuLm1haW4tY29udGFpbmVye1xcblxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbn1cXG5cXG5cXG4ubWFpbi1kZXNje1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLXRlbXAtaWNvbntcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4tdGVtcHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5cXG5cXG4vKioqIERFVEFJTCBTRUNUSU9OICoqKi9cXG5cXG4ubWFpbi1kZXRhaWxzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uZGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGV0YWlsLWljb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNzBweDtcXG59XFxuXFxuLmRldGFpbC1pbmZvLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kZXRhaWwtbmFtZXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZGV0YWlsLXZhbHVle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qKiogTUFJTi1SSUdIVCAqKiovXFxuXFxuLmNpdHl7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmRhdGUsIC50aW1le1xcbmZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLyoqKiBPUFRJT05TIENPTlRBSU5FUioqKi9cXG5cXG4ub3B0aW9ucy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLm9wdGlvbnMtc2VhcmNoLWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zZWFyY2h7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLnNlYXJjaDo6cGxhY2Vob2xkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG59XFxuXFxuLmlucHV0LWVycm9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IHNoYWtlIC4xcyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7IGxlZnQ6IC0zcHg7IH1cXG4gICAgMTAwJSB7IHJpZ2h0OiAtM3B4OyB9XFxufVxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVuaXRze1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jdW5pdEN7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiN1bml0RntcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4udGhlbWV7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qKiogRk9SRUNBU1QgU1dJVENIIENPTlRBSU5FUiAqKiovXFxuLmZvcmVjYXN0LXN3aXRjaC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uZm9yZWNhc3Qtc3dpdGNoe1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcblxcbi8qKiogZGFpbHkgKioqL1xcblxcbi5kYWlseS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmctdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG59XFxuLmRhaWx5LWRheXtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5kYWlseS1oaWdoLXZhbHVle1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5kYWlseS1sb3ctdmFsdWV7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyoqKiBIT1VSTFkgKioqL1xcblxcbi5ob3VybHktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nLXRvcDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcblxcbi5ob3VybHktaG91cntcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaG91cmx5LXRlbXB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmhvdXJseS1pY29ue31cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG59XFxuXFxuLmxvYWRpbmctc2NyZWVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gLjQpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YSgpIHtcblxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXRDaXR5TmFtZShjaXR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlc1VybChjaXR5KSB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9YmI0N2YyZGQ4YTdkNDExY2M0NzQ5NzE4OTA3NWY4YTZgO1xufVxuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3RVcmwoY29vcmRpbmF0ZXMsIHVuaXRzKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9JHt1bml0c30mYXBwaWQ9YmI0N2YyZGQ4YTdkNDExY2M0NzQ5NzE4OTA3NWY4YTZgO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgICAgICBsb246IHdlYXRoZXJEYXRhLmNvb3JkLmxvbixcbiAgICAgICAgICAgIGxhdDogd2VhdGhlckRhdGEuY29vcmQubGF0LFxuICAgICAgICAgICAgbmFtZTogd2VhdGhlckRhdGEubmFtZSxcbiAgICAgICAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3QodXJsKSB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfWNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9ybURhdGEsXG4gICAgZ2V0Q29vcmRpbmF0ZXNVcmwsXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0V2VhdGhlckZvcmVjYXN0VXJsLFxuICAgIGdldFdlYXRoZXJGb3JlY2FzdCxcbn07IiwiXG5cbmNvbnN0IERFRkFVTFRfQ0lUWSA9ICdNb250cmVhbCc7XG5cbmNvbnN0IHVuaXRJbmZvID17XG4gICAgSU1QRVJJQUw6IHtcbiAgICAgICAgbmFtZTogXCJpbXBlcmlhbFwiLFxuICAgICAgICB0ZW1wX2Rpc3BsYXk6IFwiIMKwRlwiLFxuICAgICAgICB3aW5kc3BlZWRfZGlzcGxheTogXCIgbXBoXCIsXG4gICAgfSxcbiAgICBNRVRSSUM6XG4gICAge1xuICAgICAgICBuYW1lOiBcIm1ldHJpY1wiLFxuICAgICAgICB0ZW1wX2Rpc3BsYXk6IFwiIMKwQ1wiLFxuICAgICAgICB3aW5kc3BlZWRfZGlzcGxheTogXCIga20vaFwiLFxuICAgIH0sXG59XG5leHBvcnQge1xuICAgIERFRkFVTFRfQ0lUWSxcbiAgICB1bml0SW5mbyxcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgKiBhcyBhcGlGdW5jIGZyb20gJy4vYXBpRnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIHVpRnVuYyBmcm9tICcuL3VpRnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG4vL0RlZmF1bHQgdmFyaWFibGVzIGluaXRpYWxpemF0aW9uXG5cblxuY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtc2VhcmNoLWJ0bicpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuY29uc3QgdW5pdEJ0bkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdEMnKTtcbmNvbnN0IHVuaXRCdG5GID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRGJyk7XG5jb25zdCB0aGVtZVN3aXRjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZScpO1xuY29uc3QgZGFpbHlGb3JlY2FzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseScpO1xuY29uc3QgaG91cmx5Rm9yZWNhc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5Jyk7XG5jb25zdCBkYWlseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWNvbnRhaW5lcicpO1xuY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWNvbnRhaW5lcicpO1xuXG5cbi8vZGVmYXVsdCB2YWxzXG5sZXQgdW5pdCA9IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMubmFtZTtcbmxldCBsYXN0Q2l0eSA9IGNvbnN0YW50cy5ERUZBVUxUX0NJVFk7XG5sZXQgdW5pdENoYW5nZSA9IGZhbHNlO1xuXG4vKipcbiAqVE9ETzogbWFpbiBhcHBsaWNhdGlvbiBmdW5jdGlvbiwgZ2V0cyB0aGUgd2VhdGhlciBkYXRhIGZyb20gQVBJIGFuZCBzZW5kcyBpdCB0byB0aGUgdWkuanMgZm9uY3Rpb24gdGhhdCB3aWxsIHJlbmRlciB0aGUgZGF0YVxuICogcHV0IGluIHRyeSBjYXRjaCBcbiAqIFRPRE86IHdoaWxlIHRoaXMgZnVuY3Rpb24gaXMgcnVubmluZywgaGF2ZSBhIHNwbGFzaCBzY3JlZW4gd2l0aCAzIGRvdHMgb3IgbG9hZGluZyBjaXJjbGUgdGhhdCBkZWFjdGl2YXRlcyB0aGUgVUkgd2hpbGUgdGhlIGRhdGEgaXMgbG9hZGluZ1xuICogQHBhcmFtc1xuICogIHVuaXQ6IG1ldHJpYyBvciBpbXBlcmlhbCAtIG1ldHJpYyBieSBkZWZhdWx0XG4gKiAgaW50aWFsIGxvYWQgPSBmYWxzZVxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShJbml0aWFsTG9hZCA9IGZhbHNlKXtcblxuICAgIHRyeXtcblxuICAgIGxvYWRpbmdTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBsZXQgY2l0eU5hbWUgPSBJbml0aWFsTG9hZCA/IGNvbnN0YW50cy5ERUZBVUxUX0NJVFkgOiBhcGlGdW5jLmdldEZvcm1EYXRhKCk7XG5cbiAgICBpZiAodW5pdENoYW5nZSl7XG4gICAgICAgIGNpdHlOYW1lID0gbGFzdENpdHk7XG4gICAgICAgIHVuaXRDaGFuZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2RvIG5vdGhpbmcgaWYgc2VhcmNoIGJ0biBpcyBjbGlja2VkIHdpdGggbm8gdGV4dFxuICAgIGlmICghY2l0eU5hbWUpe1xuICAgICAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vSWYgd2UgbmVlZCB0byBjaGFuZ2UgdGhlIHVuaXQsIHdlIGRvbid0IHdhbnQgdG8gbG9zZSB0aGUgY2l0eSB3ZSBoYWQgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgbGFzdENpdHkgPSBjaXR5TmFtZTtcblxuICAgIGNvbnN0IHJlcXVlc3RDb29yZHNVcmwgPSBhcGlGdW5jLmdldENvb3JkaW5hdGVzVXJsKGNpdHlOYW1lKTtcbiAgICBjb25zdCBjb29yZHMgPSAgYXdhaXQgYXBpRnVuYy5nZXRDb29yZGluYXRlcyhyZXF1ZXN0Q29vcmRzVXJsKTtcblxuICAgIGNvbnN0IHJlcXVlc3RXZWF0aGVyVXJsID0gYXBpRnVuYy5nZXRXZWF0aGVyRm9yZWNhc3RVcmwoY29vcmRzLCB1bml0KTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgYXBpRnVuYy5nZXRXZWF0aGVyRm9yZWNhc3QocmVxdWVzdFdlYXRoZXJVcmwpO1xuIFxuICAgIHdlYXRoZXIubmFtZSA9IGNvb3Jkcy5uYW1lO1xuICAgIHdlYXRoZXIuY291bnRyeSA9IGNvb3Jkcy5jb3VudHJ5O1xuXG4gICAgdWlGdW5jLnJlbmRlcldlYXRoZXJEYXRhKHdlYXRoZXIsIHVuaXQpO1xuXG59IGNhdGNoIChlcnJvcil7XG4gICAgbGFzdENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpLmlubmVyVGV4dDtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1lcnJvcicpO1xuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9LCAxNTAwKTtcblxufVxubG9hZGluZ1NjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cbnNlYXJjaElucHV0LnZhbHVlID0gJyc7XG5cblxuXG59XG4vLyBpbml0aWFsIGNhbGw6IFxuZ2V0V2VhdGhlckRhdGEodHJ1ZSk7XG5cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldFdlYXRoZXJEYXRhKCk7XG4gIH0pO1xuICBcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIH1cbiAgfSk7XG5cbnVuaXRCdG5GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uSU1QRVJJQUwubmFtZTtcbiAgICB1bml0Q2hhbmdlID0gdHJ1ZTtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIFxuICAgIHVuaXRCdG5GLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdW5pdEJ0bkMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xufSk7XG5cbnVuaXRCdG5DLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWU7XG4gICAgdW5pdENoYW5nZSA9IHRydWU7XG4gICAgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBcbiAgICB1bml0QnRuQy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHVuaXRCdG5GLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbn0pO1xuXG50aGVtZVN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vVE9ETzogY2hhbmdlIGJnICwgdHJhbnNpdGlvbiBcbn0pO1xuXG5cbmRhaWx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cblxuaG91cmx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG91cmx5Rm9yZWNhc3RCdG4uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3Qtc3dpdGNoLXNlbGVjdGVkJyk7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5cbmV4cG9ydCB7XG4gICAgdW5pdCxcbn1cblxuXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1bml0IH0gZnJvbSAnLi9pbmRleCc7XG5cblxuLy8gY3VycmVudCB3ZWF0aGVyIHZhcmlhYmxlc1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1kZXNjJyk7XG5jb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10ZW1wLWljb24nKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRlbXAnKTtcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzTGlrZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IHJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kU3BlZWQnKTtcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgY2l0eURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgY2l0eVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuXG5jb25zdCBkYWlseUZvcmVjYXN0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHknKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5Jyk7XG5cblxuXG5sZXQgdW5pdFRlbXBEaXNwbGF5O1xubGV0IHVuaXRXaW5kRGlzcGxheTtcblxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyKXtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXIuY3VycmVudDtcblxuICAgIGN1cnJlbnRXZWF0aGVyRGVzYy5pbm5lclRleHQgPSB1dGlscy5jYXBpdGFsaXplRWFjaFdvcmQoY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgY3VycmVudFdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQodXRpbHMuZ2V0SWNvbihjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLmljb24pKTtcblxuICAgIGN1cnJlbnRXZWF0aGVyVGVtcC5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKGN1cnJlbnRXZWF0aGVyLnRlbXApO1xuICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKGN1cnJlbnRXZWF0aGVyLmZlZWxzX2xpa2UpO1xuICAgIGh1bWlkaXR5LmlubmVyVGV4dCA9IGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgcmFpbi5pbm5lclRleHQgPSAod2VhdGhlci5ob3VybHlbMF0ucG9wICogMTAwKSArIFwiJVwiXG4gICAgd2luZC5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRXaW5kU3BlZWQoY3VycmVudFdlYXRoZXIud2luZF9zcGVlZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2FsaXNhdGlvbkluZm8od2VhdGhlcil7XG5cbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSB3ZWF0aGVyLm5hbWU7XG4gICAgY2l0eURhdGUuaW5uZXJUZXh0ID0gdXRpbHMuZ2V0RGF0ZSh3ZWF0aGVyLmN1cnJlbnQuZHQpO1xuICAgIGNpdHlUaW1lLmlubmVyVGV4dCA9IHV0aWxzLmdldEhvdXJNaW51dGVzKHdlYXRoZXIuY3VycmVudC5kdCk7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyRGFpbHlGb3JlY2FzdCh3ZWF0aGVyKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhaWx5Rm9yZWNhc3RBcnJheS5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgLy8gd2UgYXJlIGlnbm9yaW5nIHRoZSBmaXJzdCAnZGFpbHknIHdlYXRoZXIgb2JqZWN0LCBhcyBpdCBpcyB0aGUgc2FtZSBhcyB0aGUgJ2N1cnJlbnQnIHdlYXRoZXJcbiAgICAgICAgbGV0IHdlYXRoZXJEYXRhSW5kZXggPSBpKzE7XG5cbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1kYXknKS5pbm5lclRleHQgPSB1dGlscy5nZXRXZWVrRGF5KHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0uZHQpO1xuICAgICAgICBkYWlseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmRhaWx5LXRlbXAnKS5pbm5lclRleHQgPSB1dGlscy5mb3JtYXRUZW1wKHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0udGVtcC5kYXkpO1xuICAgICAgICBkYWlseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmRhaWx5LWxvdy10ZW1wJykuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcCh3ZWF0aGVyLmRhaWx5W3dlYXRoZXJEYXRhSW5kZXhdLnRlbXAubWluKTtcbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1pY29uJykuY2xhc3NMaXN0LmFkZCh1dGlscy5nZXRJY29uKHdlYXRoZXIuZGFpbHlbd2VhdGhlckRhdGFJbmRleF0ud2VhdGhlclswXS5pY29uKSk7XG5cbiAgICB9XG59XG5cblxuLy9UT0RPOiBmb3Igbm93LCBvbmx5IDggaG91cnMgYXJlIHNob3duLiBBUEkgZ2l2ZXMgdXMgMjQsIHNvIGlkZWFsbHkgd2Ugd291bGQgaGF2ZSAzIHBhZ2VzIG9mIDhoIGVhY2ggc28gdGhhdCB1c2VyIGNhbiBzY3JvbGwgdGhyb3VnaFxuZnVuY3Rpb24gcmVuZGVySG91cmx5Rm9yZWNhc3Qod2VhdGhlcil7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJseUZvcmVjYXN0QXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgZmlyc3QgJ2hvdXJseScgd2VhdGhlciBvYmplY3QsIGFzIGl0IGlzIHRoZSBzYW1lIGFzIHRoZSAnY3VycmVudCcgd2VhdGhlclxuICAgICAgICBsZXQgd2VhdGhlckRhdGFJbmRleCA9IGkrMTtcblxuICAgICAgICBob3VybHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktaG91cicpLmlubmVyVGV4dCA9IHV0aWxzLmdldEhvdXIod2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0uZHQpO1xuICAgICAgICBob3VybHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktdGVtcCcpLmlubmVyVGV4dCA9IHV0aWxzLmZvcm1hdFRlbXAod2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0udGVtcCk7XG4gICAgICAgIGhvdXJseUZvcmVjYXN0QXJyYXlbaV0ucXVlcnlTZWxlY3RvcignLmhvdXJseS1pY29uJykuY2xhc3NMaXN0LmFkZCh1dGlscy5nZXRJY29uKHdlYXRoZXIuaG91cmx5W3dlYXRoZXJEYXRhSW5kZXhdLndlYXRoZXJbMF0uaWNvbikpO1xuXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlcldlYXRoZXJEYXRhKHdlYXRoZXIpe1xuICAgIC8vdGhpcyB3aWxsIGNhbGwgYWxsIHRoZSBkaWZmZXJlbnQgcmVuZGVycyBmdW5jdGlvbnMgKG1haW4sIGZvcmVjYXN0LCBkZXRhaWxzLCBldGMpXG4gICAgdW5pdFRlbXBEaXNwbGF5ID0gdW5pdCA9PSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWUgPyBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLnRlbXBfZGlzcGxheSA6IGNvbnN0YW50cy51bml0SW5mby5JTVBFUklBTC50ZW1wX2Rpc3BsYXk7XG4gICAgdW5pdFdpbmREaXNwbGF5ID0gdW5pdCA9PSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWUgPyBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLndpbmRzcGVlZF9kaXNwbGF5IDogY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLndpbmRzcGVlZF9kaXNwbGF5O1xuICAgIFxuICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpO1xuICAgIHJlbmRlckxvY2FsaXNhdGlvbkluZm8od2VhdGhlcik7XG4gICAgcmVuZGVyRGFpbHlGb3JlY2FzdCh3ZWF0aGVyKTtcbiAgICByZW5kZXJIb3VybHlGb3JlY2FzdCh3ZWF0aGVyKTtcblxufVxuXG5leHBvcnR7XG4gICAgcmVuZGVyV2VhdGhlckRhdGEsXG4gICAgdW5pdFRlbXBEaXNwbGF5LFxuICAgIHVuaXRXaW5kRGlzcGxheSxcbn0iLCJpbXBvcnQgeyB1bml0V2luZERpc3BsYXksIHVuaXRUZW1wRGlzcGxheSB9IGZyb20gXCIuL3VpRnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXG5cbmZ1bmN0aW9uIGdldERhdGUodW5peFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkodW5peFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJNaW51dGVzKHVuaXhUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXIxMjogdHJ1ZSB9KS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VyKHVuaXhUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnRvTG93ZXJDYXNlKCk7XG5cbn1cblxuZnVuY3Rpb24gZm9ybWF0VGVtcCh0ZW1wKSB7XG4gICAgbGV0IHRlbXBTdHIgPSBTdHJpbmcodGVtcCk7XG4gICAgcmV0dXJuIHRlbXBTdHIuc3Vic3RyaW5nKDAsIHRlbXBTdHIuaW5kZXhPZihcIi5cIikpICsgdW5pdFRlbXBEaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXaW5kU3BlZWQod2luZCkge1xuICAgIGlmICh1bml0V2luZERpc3BsYXkgPT0gY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLndpbmRzcGVlZF9kaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiB3aW5kICsgdW5pdFdpbmREaXNwbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh3aW5kICogMy42KSkgKyB1bml0V2luZERpc3BsYXk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaFdvcmQoc3RyKSB7XG4gICAgdmFyIHNwbGl0U3RyID0gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0U3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwbGl0U3RyW2ldID0gc3BsaXRTdHJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzcGxpdFN0cltpXS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBzcGxpdFN0ci5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdENpdHlOYW1lKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC8oLFxccyspL2csICcsJylcbiAgICAgICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgJywnKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnKycpO1xufVxuXG5cbmZ1bmN0aW9uIGdldEljb24oaWNvbkNvZGUpIHtcbiAgICBzd2l0Y2ggKGljb25Db2RlKSB7XG4gICAgICAgIGNhc2UgXCIwMW5cIjpcbiAgICAgICAgY2FzZSBcIjAxZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtc3VuXCI7XG4gICAgICAgIGNhc2UgXCIwMm5cIjpcbiAgICAgICAgY2FzZSBcIjAyZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtY2xvdWQtc3VuXCI7XG4gICAgICAgIGNhc2UgXCIwM25cIjpcbiAgICAgICAgY2FzZSBcIjAzZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtY2xvdWRcIjtcbiAgICAgICAgY2FzZSBcIjA0blwiOlxuICAgICAgICBjYXNlIFwiMDRkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1jbG91ZFwiO1xuICAgICAgICBjYXNlIFwiMDluXCI6XG4gICAgICAgIGNhc2UgXCIwOWRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWNsb3VkLXNob3dlcnMtaGVhdnlcIjtcbiAgICAgICAgY2FzZSBcIjEwblwiOlxuICAgICAgICBjYXNlIFwiMTBkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1jbG91ZC1zdW4tcmFpblwiO1xuICAgICAgICBjYXNlIFwiMTFuXCI6XG4gICAgICAgIGNhc2UgXCIxMWRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWJvbHRcIjtcbiAgICAgICAgY2FzZSBcIjEzblwiOlxuICAgICAgICBjYXNlIFwiMTNkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1zbm93Zmxha2VcIjtcbiAgICAgICAgY2FzZSBcIjUwblwiOlxuICAgICAgICBjYXNlIFwiNTBkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1zbW9nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGZvcm1hdFRlbXAsXG4gICAgZm9ybWF0V2luZFNwZWVkLFxuICAgIGdldERhdGUsXG4gICAgZ2V0SG91ck1pbnV0ZXMsXG4gICAgY2FwaXRhbGl6ZUVhY2hXb3JkLFxuICAgIGdldFdlZWtEYXksXG4gICAgZ2V0SG91cixcbiAgICBmb3JtYXRDaXR5TmFtZSxcbiAgICBnZXRJY29uLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=