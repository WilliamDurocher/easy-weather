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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: white;\n}\n\nbody, html {\n    margin: 0;\n  }\n.main-container{\n\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n\n}\n\n.weather-container{\n    display: flex;\n    justify-content: space-between;\n    padding: 4rem;\n}\n\n\n.main-desc{\n    font-size: 42px;\n    font-weight: 600;\n}\n\n.main-temp-icon{\n    width: 80px;\n    height: 80px;\n}\n\n.main-temp{\n    font-size: 36px;\n    font-weight: 700;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n}\n.detail{\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon{\n    width: 70px;\n    height: 70px;\n}\n\n.detail-info-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.detail-name{\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n.detail-value{\n    font-size: 20px;\n    font-weight: 700;\n}\n\n/*** MAIN-RIGHT ***/\n\n.city{\n    font-size: 30px;\n    font-weight: 600;\n}\n.date, .time{\nfont-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container{\n    display: grid;\n    gap: 20px;\n\n}\n\n.options-search-container\n{\n    display: flex;\n    gap: 5px;\n}\n\n.search{\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n}\n.search::placeholder{\n    font-size: 16px;\n\n}\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% { left: -3px; }\n    100% { right: -3px; }\n}\n\n.error-message{\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n}\n\n.units{\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n#unitC{\n\n    display: none;\n}\n#unitF{\n    display: inline;\n}\n.theme{\n    margin-top: 50px;\n}\n\n/*** FORECAST SWITCH CONTAINER ***/\n.forecast-switch-container{\n    display: flex;\n    padding-left: 6rem;\n    gap: 10px;\n}\n.forecast-switch{\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n.forecast-switch-selected{\n    background-color: white;\n    color: black;\n\n}\n\n\n/*** daily ***/\n\n.daily-container{\n    display: flex;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n.daily-day{\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n.daily-high-value{\n    font-size: 28px;\n    font-weight: 700;\n}\n.daily-low-value{\n    font-size: 18px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container{\n    display: none;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n\n.hourly-hour{\n    font-weight: 600;\n    font-size: 18px;\n}\n\n.hourly-temp{\n    font-weight: 700;\n    font-size: 24px;\n}\n\n.hourly-icon{}\n\n.btn:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen{\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,0DAA0D;IACxD,iFAAqE;IACrE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,SAAS;EACX;AACF;;;IAGI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;;;AAIA,uBAAuB;;AAEvB;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,mBAAmB;;AAEnB;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;AACA,eAAe;AACf;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,SAAS;;AAEb;;AAEA;;IAEI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,eAAe;;AAEnB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,KAAK,UAAU,EAAE;IACjB,OAAO,WAAW,EAAE;AACxB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA,kCAAkC;AAClC;IACI,aAAa;IACb,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,YAAY;;AAEhB;;;AAGA,cAAc;;AAEd;IACI,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;;AAEA,eAAe;;AAEf;IACI,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA,aAAa;;AAEb;IACI,eAAe;IACf,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,OAAO;IACP,MAAM;IACN,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,0BAA0B;IAC1B,kCAAkC;IAClC,cAAc;IACd,2BAA2B;IAC3B,mCAAmC;IACnC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["html{\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background: url('./assets/bg_dark.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: white;\n}\n\nbody, html {\n    margin: 0;\n  }\n.main-container{\n\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n\n}\n\n.weather-container{\n    display: flex;\n    justify-content: space-between;\n    padding: 4rem;\n}\n\n\n.main-desc{\n    font-size: 42px;\n    font-weight: 600;\n}\n\n.main-temp-icon{\n    width: 80px;\n    height: 80px;\n}\n\n.main-temp{\n    font-size: 36px;\n    font-weight: 700;\n}\n\n\n\n/*** DETAIL SECTION ***/\n\n.main-details-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n}\n.detail{\n    display: flex;\n    flex-direction: row;\n}\n\n.detail-icon{\n    width: 70px;\n    height: 70px;\n}\n\n.detail-info-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.detail-name{\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n.detail-value{\n    font-size: 20px;\n    font-weight: 700;\n}\n\n/*** MAIN-RIGHT ***/\n\n.city{\n    font-size: 30px;\n    font-weight: 600;\n}\n.date, .time{\nfont-size: 24px;\n}\n\n/*** OPTIONS CONTAINER***/\n\n.options-container{\n    display: grid;\n    gap: 20px;\n\n}\n\n.options-search-container\n{\n    display: flex;\n    gap: 5px;\n}\n\n.search{\n    height: 30px;\n    width: 150px;\n    border-radius: 7px;\n    box-shadow: none;\n    border: none;\n}\n.search::placeholder{\n    font-size: 16px;\n\n}\n\n.input-error {\n    position: relative;\n    animation: shake .1s linear;\n    animation-iteration-count: 3;\n}\n\n@keyframes shake {\n    0% { left: -3px; }\n    100% { right: -3px; }\n}\n\n.error-message{\n    margin-top: -15px;\n    font-weight: 600;\n    display: none;\n}\n\n.units{\n    width: 100px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n\n#unitC{\n\n    display: none;\n}\n#unitF{\n    display: inline;\n}\n.theme{\n    margin-top: 50px;\n}\n\n/*** FORECAST SWITCH CONTAINER ***/\n.forecast-switch-container{\n    display: flex;\n    padding-left: 6rem;\n    gap: 10px;\n}\n.forecast-switch{\n    width: 65px;\n    height: 25px;\n    border: 2px solid white;\n    border-radius: 7px;\n    font-size: 14px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n}\n.forecast-switch-selected{\n    background-color: white;\n    color: black;\n\n}\n\n\n/*** daily ***/\n\n.daily-container{\n    display: flex;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n.daily-day{\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n.daily-high-value{\n    font-size: 28px;\n    font-weight: 700;\n}\n.daily-low-value{\n    font-size: 18px;\n}\n\n/*** HOURLY ***/\n\n.hourly-container{\n    display: none;\n    text-align: center;\n    justify-content: space-evenly;\n    padding-top: auto;\n    padding-bottom: 4rem;\n}\n\n.hourly-hour{\n    font-weight: 600;\n    font-size: 18px;\n}\n\n.hourly-temp{\n    font-weight: 700;\n    font-size: 24px;\n}\n\n.hourly-icon{}\n\n.btn:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.loading-screen{\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / .4);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    overflow: auto;\n    transition: all 0.5s linear;\n    -webkit-transition: all 0.5s linear;\n    text-align: center;\n    line-height: 100vh;\n    font-size: 42px;\n    font-weight: 700;\n}"],"sourceRoot":""}]);
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

//TODO: try catch, need to show error on screen if call gets error (no city found)
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
//INITIAL CALL: 
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
//TODO: change bg , transition etc
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


//here: add event listener oncity search button, fire up getWeatherData so that it ca take the city from input
//here: event listener to switch from daily forecast to hourly forecast
//here event listener for switch to metric, switch to imperial AND theme

//FUNCTIONS THAT DO NOT NEED API CALL SHOULD BE CALLED FROM THE UI FILE
//ONLY MAIN GETWEATHERDATA SHOULD CALL API FUNCTIONS, IT IS THE MAIN WORKFLOW THAT GETS DATA AND TELLS UI TO RENDER IT






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
    //todo icon
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
        //todo icon

    }
}


//TODO: for now, only 8 hours are shown. API gives us 24, so ideally we would have 3 pages of 8h each so that user can scroll through
function renderHourlyForecast(weather){

    for (let i = 0; i < hourlyForecastArray.length; i++){

        // we are ignoring the first 'hourly' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i+1;

        hourlyForecastArray[i].querySelector('.hourly-hour').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.getHour(weather.hourly[weatherDataIndex].dt);
        hourlyForecastArray[i].querySelector('.hourly-temp').innerText = _utils__WEBPACK_IMPORTED_MODULE_0__.formatTemp(weather.hourly[weatherDataIndex].temp);
        //todo icon

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
/* harmony export */   "formatCityName": () => (/* binding */ formatCityName)
/* harmony export */ });
/* harmony import */ var _uiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiFunctions */ "./src/uiFunctions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



/*
*TODO: 
* - convert unix date and time
* - convert 24h time to 12h
* - format temperature
* - calculate chances of rain ?
* -
*
*
*
*/

function getDate(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
}

function getWeekDay(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday:"long"});
}

function getHourMinutes(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US',{ hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
}

function getHour(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true }).toLowerCase();

}

function formatTemp(temp){
    let tempStr = String(temp);
    return tempStr.substring(0, tempStr.indexOf(".")) + _uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitTempDisplay;
}

function formatWindSpeed(wind){
    if (_uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitWindDisplay == _constants__WEBPACK_IMPORTED_MODULE_1__.unitInfo.IMPERIAL.windspeed_display){
        return wind + _uiFunctions__WEBPACK_IMPORTED_MODULE_0__.unitWindDisplay;
    }else{
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

 function formatCityName(str){
    return str
    .replace(/(\s+$|^\s+)/g, '')
    .replace(/(,\s+)/g, ',')
    .replace(/(\s+,)/g, ',')
    .replace(/\s+/g, '+');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSwrQ0FBK0MsK0RBQStELGlHQUFpRyxxQ0FBcUMsa0NBQWtDLGdDQUFnQyw2QkFBNkIsbUJBQW1CLEdBQUcsZ0JBQWdCLGdCQUFnQixLQUFLLGtCQUFrQix3QkFBd0IsNkJBQTZCLHFDQUFxQyxvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLHFDQUFxQyxvQkFBb0IsR0FBRyxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0IsbUJBQW1CLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLEdBQUcsNERBQTRELG9CQUFvQiw0Q0FBNEMsZ0JBQWdCLEdBQUcsVUFBVSxvQkFBb0IsMEJBQTBCLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxlQUFlLHNCQUFzQiwwQkFBMEIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixHQUFHLGtDQUFrQyxzQkFBc0IsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxxREFBcUQsb0JBQW9CLGdCQUFnQixLQUFLLGdDQUFnQyxvQkFBb0IsZUFBZSxHQUFHLFlBQVksbUJBQW1CLG1CQUFtQix5QkFBeUIsdUJBQXVCLG1CQUFtQixHQUFHLHVCQUF1QixzQkFBc0IsS0FBSyxrQkFBa0IseUJBQXlCLGtDQUFrQyxtQ0FBbUMsR0FBRyxzQkFBc0IsV0FBVyxhQUFhLGFBQWEsY0FBYyxHQUFHLG1CQUFtQix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLFdBQVcsbUJBQW1CLG1CQUFtQiw4QkFBOEIseUJBQXlCLHNCQUFzQix5QkFBeUIsd0JBQXdCLHVCQUF1QixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsU0FBUyxzQkFBc0IsR0FBRyxTQUFTLHVCQUF1QixHQUFHLG9FQUFvRSxvQkFBb0IseUJBQXlCLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLDhCQUE4Qix5QkFBeUIsc0JBQXNCLHlCQUF5Qix3QkFBd0IsdUJBQXVCLEdBQUcsNEJBQTRCLDhCQUE4QixtQkFBbUIsS0FBSywwQ0FBMEMsb0JBQW9CLHlCQUF5QixvQ0FBb0Msd0JBQXdCLDJCQUEyQixHQUFHLGFBQWEsc0JBQXNCLHVCQUF1Qix5QkFBeUIsR0FBRyxvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRywwQ0FBMEMsb0JBQW9CLHlCQUF5QixvQ0FBb0Msd0JBQXdCLDJCQUEyQixHQUFHLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0IsZUFBZSxzQkFBc0IsNEJBQTRCLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0IsY0FBYyxhQUFhLG9CQUFvQixrQkFBa0IsbUJBQW1CLHdDQUF3QyxpQ0FBaUMseUNBQXlDLHFCQUFxQixrQ0FBa0MsMENBQTBDLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHVCQUF1QixHQUFHLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFNBQVMsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFlBQVksUUFBUSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksK0JBQStCLCtEQUErRCw2RUFBNkUscUNBQXFDLGtDQUFrQyxnQ0FBZ0MsNkJBQTZCLG1CQUFtQixHQUFHLGdCQUFnQixnQkFBZ0IsS0FBSyxrQkFBa0Isd0JBQXdCLDZCQUE2QixxQ0FBcUMsb0JBQW9CLEtBQUssdUJBQXVCLG9CQUFvQixxQ0FBcUMsb0JBQW9CLEdBQUcsaUJBQWlCLHNCQUFzQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQixHQUFHLGVBQWUsc0JBQXNCLHVCQUF1QixHQUFHLDREQUE0RCxvQkFBb0IsNENBQTRDLGdCQUFnQixHQUFHLFVBQVUsb0JBQW9CLDBCQUEwQixHQUFHLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEdBQUcsZUFBZSxzQkFBc0IsMEJBQTBCLEdBQUcsZ0JBQWdCLHNCQUFzQix1QkFBdUIsR0FBRyxrQ0FBa0Msc0JBQXNCLHVCQUF1QixHQUFHLGVBQWUsa0JBQWtCLEdBQUcscURBQXFELG9CQUFvQixnQkFBZ0IsS0FBSyxnQ0FBZ0Msb0JBQW9CLGVBQWUsR0FBRyxZQUFZLG1CQUFtQixtQkFBbUIseUJBQXlCLHVCQUF1QixtQkFBbUIsR0FBRyx1QkFBdUIsc0JBQXNCLEtBQUssa0JBQWtCLHlCQUF5QixrQ0FBa0MsbUNBQW1DLEdBQUcsc0JBQXNCLFdBQVcsYUFBYSxhQUFhLGNBQWMsR0FBRyxtQkFBbUIsd0JBQXdCLHVCQUF1QixvQkFBb0IsR0FBRyxXQUFXLG1CQUFtQixtQkFBbUIsOEJBQThCLHlCQUF5QixzQkFBc0IseUJBQXlCLHdCQUF3Qix1QkFBdUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxvRUFBb0Usb0JBQW9CLHlCQUF5QixnQkFBZ0IsR0FBRyxtQkFBbUIsa0JBQWtCLG1CQUFtQiw4QkFBOEIseUJBQXlCLHNCQUFzQix5QkFBeUIsd0JBQXdCLHVCQUF1QixHQUFHLDRCQUE0Qiw4QkFBOEIsbUJBQW1CLEtBQUssMENBQTBDLG9CQUFvQix5QkFBeUIsb0NBQW9DLHdCQUF3QiwyQkFBMkIsR0FBRyxhQUFhLHNCQUFzQix1QkFBdUIseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsMENBQTBDLG9CQUFvQix5QkFBeUIsb0NBQW9DLHdCQUF3QiwyQkFBMkIsR0FBRyxpQkFBaUIsdUJBQXVCLHNCQUFzQixHQUFHLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsa0JBQWtCLGVBQWUsc0JBQXNCLDRCQUE0QixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLGNBQWMsYUFBYSxvQkFBb0Isa0JBQWtCLG1CQUFtQix3Q0FBd0MsaUNBQWlDLHlDQUF5QyxxQkFBcUIsa0NBQWtDLDBDQUEwQyx5QkFBeUIseUJBQXlCLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDN3ZUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmlDOztBQUVqQzs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLGtEQUFvQjtBQUNuQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZ0VBQWdFLEtBQUs7QUFDckU7O0FBRUE7QUFDQSxrRUFBa0UsZ0JBQWdCLE9BQU8sZ0JBQWdCLGlDQUFpQyxNQUFNO0FBQ2hKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCc0I7QUFDb0I7QUFDRjtBQUNDO0FBQ3pDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsNERBQThCO0FBQ3pDLGVBQWUsb0RBQXNCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBaUMsb0RBQXNCLEdBQUcsc0RBQW1COztBQUU3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLDZCQUE2Qiw0REFBeUI7QUFDdEQsMEJBQTBCLHlEQUFzQjs7QUFFaEQsOEJBQThCLGdFQUE2QjtBQUMzRCwwQkFBMEIsNkRBQTBCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJEQUF3Qjs7QUFFNUIsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxXQUFXLDhEQUFnQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLFdBQVcsNERBQThCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKZ0M7QUFDUTtBQUNWOzs7QUFHL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxtQ0FBbUMsc0RBQXdCO0FBQzNEO0FBQ0EsbUNBQW1DLDhDQUFnQjtBQUNuRCwwQkFBMEIsOENBQWdCO0FBQzFDO0FBQ0E7QUFDQSxxQkFBcUIsbURBQXFCO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLDJDQUFhO0FBQ3RDLHlCQUF5QixrREFBb0I7O0FBRTdDOztBQUVBO0FBQ0Esb0JBQW9CLCtCQUErQjs7QUFFbkQ7QUFDQTs7QUFFQSxzRUFBc0UsOENBQWdCO0FBQ3RGLHVFQUF1RSw4Q0FBZ0I7QUFDdkYsMkVBQTJFLDhDQUFnQjtBQUMzRjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLG9CQUFvQixnQ0FBZ0M7O0FBRXBEO0FBQ0E7O0FBRUEseUVBQXlFLDJDQUFhO0FBQ3RGLHlFQUF5RSw4Q0FBZ0I7QUFDekY7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQix3Q0FBSSxJQUFJLDREQUE4QixHQUFHLG9FQUFzQyxHQUFHLHNFQUF3QztBQUNoSixzQkFBc0Isd0NBQUksSUFBSSw0REFBOEIsR0FBRyx5RUFBMkMsR0FBRywyRUFBNkM7QUFDMUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGaUU7QUFDekI7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3RUFBd0UsNERBQTREO0FBQ3BJOztBQUVBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7O0FBRUE7QUFDQSx1RUFBdUUsa0RBQWtEO0FBQ3pIOztBQUVBO0FBQ0EsdUVBQXVFLCtCQUErQjs7QUFFdEc7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCx5REFBZTtBQUN2RTs7QUFFQTtBQUNBLFFBQVEseURBQWUsSUFBSSwyRUFBNkM7QUFDeEUsc0JBQXNCLHlEQUFlO0FBQ3JDLEtBQUs7QUFDTCxnREFBZ0QseURBQWU7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvLi9zcmMvdWlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lYXN5LXdlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Vhc3ktd2VhdGhlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWFzeS13ZWF0aGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmdfZGFyay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuLm1haW4tY29udGFpbmVye1xcblxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbn1cXG5cXG5cXG4ubWFpbi1kZXNje1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLXRlbXAtaWNvbntcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4tdGVtcHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5cXG5cXG4vKioqIERFVEFJTCBTRUNUSU9OICoqKi9cXG5cXG4ubWFpbi1kZXRhaWxzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uZGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGV0YWlsLWljb257XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5kZXRhaWwtaW5mby1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlsLW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmRldGFpbC12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKioqIE1BSU4tUklHSFQgKioqL1xcblxcbi5jaXR5e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kYXRlLCAudGltZXtcXG5mb250LXNpemU6IDI0cHg7XFxufVxcblxcbi8qKiogT1BUSU9OUyBDT05UQUlORVIqKiovXFxuXFxuLm9wdGlvbnMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5vcHRpb25zLXNlYXJjaC1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5zZWFyY2g6OnBsYWNlaG9sZGVye1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxufVxcblxcbi5pbnB1dC1lcnJvciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAuMXMgbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgeyBsZWZ0OiAtM3B4OyB9XFxuICAgIDEwMCUgeyByaWdodDogLTNweDsgfVxcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZXtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51bml0c3tcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3VuaXRDe1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdW5pdEZ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLnRoZW1le1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4vKioqIEZPUkVDQVNUIFNXSVRDSCBDT05UQUlORVIgKioqL1xcbi5mb3JlY2FzdC1zd2l0Y2gtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmZvcmVjYXN0LXN3aXRjaHtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9yZWNhc3Qtc3dpdGNoLXNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG5cXG4vKioqIGRhaWx5ICoqKi9cXG5cXG4uZGFpbHktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nLXRvcDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcbi5kYWlseS1kYXl7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uZGFpbHktaGlnaC12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZGFpbHktbG93LXZhbHVle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qKiogSE9VUkxZICoqKi9cXG5cXG4uaG91cmx5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uaG91cmx5LWhvdXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmhvdXJseS10ZW1we1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ob3VybHktaWNvbnt9XFxuXFxuLmJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIC40KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBEQUEwRDtJQUN4RCxpRkFBcUU7SUFDckUsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0VBQ1g7QUFDRjs7O0lBR0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7OztBQUlBLHVCQUF1Qjs7QUFFdkI7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksS0FBSyxVQUFVLEVBQUU7SUFDakIsT0FBTyxXQUFXLEVBQUU7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxrQ0FBa0M7QUFDbEM7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCOzs7QUFHQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLGFBQWE7O0FBRWI7SUFDSSxlQUFlO0lBQ2YscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvYmdfZGFyay5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuLm1haW4tY29udGFpbmVye1xcblxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbn1cXG5cXG5cXG4ubWFpbi1kZXNje1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLXRlbXAtaWNvbntcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4tdGVtcHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5cXG5cXG4vKioqIERFVEFJTCBTRUNUSU9OICoqKi9cXG5cXG4ubWFpbi1kZXRhaWxzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uZGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGV0YWlsLWljb257XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5kZXRhaWwtaW5mby1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlsLW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmRldGFpbC12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKioqIE1BSU4tUklHSFQgKioqL1xcblxcbi5jaXR5e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kYXRlLCAudGltZXtcXG5mb250LXNpemU6IDI0cHg7XFxufVxcblxcbi8qKiogT1BUSU9OUyBDT05UQUlORVIqKiovXFxuXFxuLm9wdGlvbnMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5vcHRpb25zLXNlYXJjaC1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5zZWFyY2g6OnBsYWNlaG9sZGVye1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxufVxcblxcbi5pbnB1dC1lcnJvciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAuMXMgbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgeyBsZWZ0OiAtM3B4OyB9XFxuICAgIDEwMCUgeyByaWdodDogLTNweDsgfVxcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZXtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51bml0c3tcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3VuaXRDe1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdW5pdEZ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLnRoZW1le1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4vKioqIEZPUkVDQVNUIFNXSVRDSCBDT05UQUlORVIgKioqL1xcbi5mb3JlY2FzdC1zd2l0Y2gtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmZvcmVjYXN0LXN3aXRjaHtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9yZWNhc3Qtc3dpdGNoLXNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG5cXG4vKioqIGRhaWx5ICoqKi9cXG5cXG4uZGFpbHktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nLXRvcDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcbi5kYWlseS1kYXl7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uZGFpbHktaGlnaC12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZGFpbHktbG93LXZhbHVle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qKiogSE9VUkxZICoqKi9cXG5cXG4uaG91cmx5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uaG91cmx5LWhvdXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmhvdXJseS10ZW1we1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ob3VybHktaWNvbnt9XFxuXFxuLmJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIC40KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoKSB7XG5cbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcmNoJykudmFsdWU7XG5cbiAgICBpZiAoY2l0eU5hbWUpIHtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0Q2l0eU5hbWUoY2l0eU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5cblxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNVcmwoY2l0eSkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWJiNDdmMmRkOGE3ZDQxMWNjNDc0OTcxODkwNzVmOGE2YDtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckZvcmVjYXN0VXJsKGNvb3JkaW5hdGVzLCB1bml0cykge1xuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdHN9JmFwcGlkPWJiNDdmMmRkOGE3ZDQxMWNjNDc0OTcxODkwNzVmOGE2YDtcbn1cblxuLy9UT0RPOiB0cnkgY2F0Y2gsIG5lZWQgdG8gc2hvdyBlcnJvciBvbiBzY3JlZW4gaWYgY2FsbCBnZXRzIGVycm9yIChubyBjaXR5IGZvdW5kKVxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXModXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICAgICAgbG9uOiB3ZWF0aGVyRGF0YS5jb29yZC5sb24sXG4gICAgICAgICAgICBsYXQ6IHdlYXRoZXJEYXRhLmNvb3JkLmxhdCxcbiAgICAgICAgICAgIG5hbWU6IHdlYXRoZXJEYXRhLm5hbWUsXG4gICAgICAgICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5zeXMuY291bnRyeVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckZvcmVjYXN0KHVybCkge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQge1xuICAgIGdldEZvcm1EYXRhLFxuICAgIGdldENvb3JkaW5hdGVzVXJsLFxuICAgIGdldENvb3JkaW5hdGVzLFxuICAgIGdldFdlYXRoZXJGb3JlY2FzdFVybCxcbiAgICBnZXRXZWF0aGVyRm9yZWNhc3QsXG59OyIsIlxuXG5jb25zdCBERUZBVUxUX0NJVFkgPSAnTW9udHJlYWwnO1xuXG5jb25zdCB1bml0SW5mbyA9e1xuICAgIElNUEVSSUFMOiB7XG4gICAgICAgIG5hbWU6IFwiaW1wZXJpYWxcIixcbiAgICAgICAgdGVtcF9kaXNwbGF5OiBcIiDCsEZcIixcbiAgICAgICAgd2luZHNwZWVkX2Rpc3BsYXk6IFwiIG1waFwiLFxuICAgIH0sXG4gICAgTUVUUklDOlxuICAgIHtcbiAgICAgICAgbmFtZTogXCJtZXRyaWNcIixcbiAgICAgICAgdGVtcF9kaXNwbGF5OiBcIiDCsENcIixcbiAgICAgICAgd2luZHNwZWVkX2Rpc3BsYXk6IFwiIGttL2hcIixcbiAgICB9LFxufVxuZXhwb3J0IHtcbiAgICBERUZBVUxUX0NJVFksXG4gICAgdW5pdEluZm8sXG59IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICogYXMgYXBpRnVuYyBmcm9tICcuL2FwaUZ1bmN0aW9ucyc7XG5pbXBvcnQgKiBhcyB1aUZ1bmMgZnJvbSAnLi91aUZ1bmN0aW9ucyc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuLy9EZWZhdWx0IHZhcmlhYmxlcyBpbml0aWFsaXphdGlvblxuXG5cbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1zY3JlZW4nKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXNlYXJjaC1idG4nKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcbmNvbnN0IHVuaXRCdG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRDJyk7XG5jb25zdCB1bml0QnRuRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0RicpO1xuY29uc3QgdGhlbWVTd2l0Y2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKTtcbmNvbnN0IGRhaWx5Rm9yZWNhc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseScpO1xuY29uc3QgZGFpbHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1jb250YWluZXInKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1jb250YWluZXInKTtcblxuXG4vL2RlZmF1bHQgdmFsc1xubGV0IHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWU7XG5sZXQgbGFzdENpdHkgPSBjb25zdGFudHMuREVGQVVMVF9DSVRZO1xubGV0IHVuaXRDaGFuZ2UgPSBmYWxzZTtcblxuLyoqXG4gKlRPRE86IG1haW4gYXBwbGljYXRpb24gZnVuY3Rpb24sIGdldHMgdGhlIHdlYXRoZXIgZGF0YSBmcm9tIEFQSSBhbmQgc2VuZHMgaXQgdG8gdGhlIHVpLmpzIGZvbmN0aW9uIHRoYXQgd2lsbCByZW5kZXIgdGhlIGRhdGFcbiAqIHB1dCBpbiB0cnkgY2F0Y2ggXG4gKiBUT0RPOiB3aGlsZSB0aGlzIGZ1bmN0aW9uIGlzIHJ1bm5pbmcsIGhhdmUgYSBzcGxhc2ggc2NyZWVuIHdpdGggMyBkb3RzIG9yIGxvYWRpbmcgY2lyY2xlIHRoYXQgZGVhY3RpdmF0ZXMgdGhlIFVJIHdoaWxlIHRoZSBkYXRhIGlzIGxvYWRpbmdcbiAqIEBwYXJhbXNcbiAqICB1bml0OiBtZXRyaWMgb3IgaW1wZXJpYWwgLSBtZXRyaWMgYnkgZGVmYXVsdFxuICogIGludGlhbCBsb2FkID0gZmFsc2VcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoSW5pdGlhbExvYWQgPSBmYWxzZSl7XG5cbiAgICB0cnl7XG5cbiAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgbGV0IGNpdHlOYW1lID0gSW5pdGlhbExvYWQgPyBjb25zdGFudHMuREVGQVVMVF9DSVRZIDogYXBpRnVuYy5nZXRGb3JtRGF0YSgpO1xuXG4gICAgaWYgKHVuaXRDaGFuZ2Upe1xuICAgICAgICBjaXR5TmFtZSA9IGxhc3RDaXR5O1xuICAgICAgICB1bml0Q2hhbmdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9kbyBub3RoaW5nIGlmIHNlYXJjaCBidG4gaXMgY2xpY2tlZCB3aXRoIG5vIHRleHRcbiAgICBpZiAoIWNpdHlOYW1lKXtcbiAgICAgICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvL0lmIHdlIG5lZWQgdG8gY2hhbmdlIHRoZSB1bml0LCB3ZSBkb24ndCB3YW50IHRvIGxvc2UgdGhlIGNpdHkgd2UgaGFkIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgIGxhc3RDaXR5ID0gY2l0eU5hbWU7XG5cbiAgICBjb25zdCByZXF1ZXN0Q29vcmRzVXJsID0gYXBpRnVuYy5nZXRDb29yZGluYXRlc1VybChjaXR5TmFtZSk7XG4gICAgY29uc3QgY29vcmRzID0gIGF3YWl0IGFwaUZ1bmMuZ2V0Q29vcmRpbmF0ZXMocmVxdWVzdENvb3Jkc1VybCk7XG5cbiAgICBjb25zdCByZXF1ZXN0V2VhdGhlclVybCA9IGFwaUZ1bmMuZ2V0V2VhdGhlckZvcmVjYXN0VXJsKGNvb3JkcywgdW5pdCk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGFwaUZ1bmMuZ2V0V2VhdGhlckZvcmVjYXN0KHJlcXVlc3RXZWF0aGVyVXJsKTtcbiBcbiAgICB3ZWF0aGVyLm5hbWUgPSBjb29yZHMubmFtZTtcbiAgICB3ZWF0aGVyLmNvdW50cnkgPSBjb29yZHMuY291bnRyeTtcblxuICAgIHVpRnVuYy5yZW5kZXJXZWF0aGVyRGF0YSh3ZWF0aGVyLCB1bml0KTtcblxufSBjYXRjaCAoZXJyb3Ipe1xuICAgIGxhc3RDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKS5pbm5lclRleHQ7XG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgfSwgMTUwMCk7XG5cbn1cbmxvYWRpbmdTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXG5zZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuXG5cblxufVxuLy9JTklUSUFMIENBTEw6IFxuZ2V0V2VhdGhlckRhdGEodHJ1ZSk7XG5cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldFdlYXRoZXJEYXRhKCk7XG4gIH0pO1xuICBcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIH1cbiAgfSk7XG5cbnVuaXRCdG5GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uSU1QRVJJQUwubmFtZTtcbiAgICB1bml0Q2hhbmdlID0gdHJ1ZTtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIFxuICAgIHVuaXRCdG5GLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdW5pdEJ0bkMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xufSk7XG5cbnVuaXRCdG5DLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXQgPSBjb25zdGFudHMudW5pdEluZm8uTUVUUklDLm5hbWU7XG4gICAgdW5pdENoYW5nZSA9IHRydWU7XG4gICAgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBcbiAgICB1bml0QnRuQy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHVuaXRCdG5GLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbn0pO1xuXG50aGVtZVN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vVE9ETzogY2hhbmdlIGJnICwgdHJhbnNpdGlvbiBldGNcbn0pO1xuXG5cbmRhaWx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cblxuaG91cmx5Rm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG91cmx5Rm9yZWNhc3RCdG4uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3Qtc3dpdGNoLXNlbGVjdGVkJyk7XG4gICAgZGFpbHlGb3JlY2FzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JlY2FzdC1zd2l0Y2gtc2VsZWN0ZWQnKTtcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5cbi8vaGVyZTogYWRkIGV2ZW50IGxpc3RlbmVyIG9uY2l0eSBzZWFyY2ggYnV0dG9uLCBmaXJlIHVwIGdldFdlYXRoZXJEYXRhIHNvIHRoYXQgaXQgY2EgdGFrZSB0aGUgY2l0eSBmcm9tIGlucHV0XG4vL2hlcmU6IGV2ZW50IGxpc3RlbmVyIHRvIHN3aXRjaCBmcm9tIGRhaWx5IGZvcmVjYXN0IHRvIGhvdXJseSBmb3JlY2FzdFxuLy9oZXJlIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2ggdG8gbWV0cmljLCBzd2l0Y2ggdG8gaW1wZXJpYWwgQU5EIHRoZW1lXG5cbi8vRlVOQ1RJT05TIFRIQVQgRE8gTk9UIE5FRUQgQVBJIENBTEwgU0hPVUxEIEJFIENBTExFRCBGUk9NIFRIRSBVSSBGSUxFXG4vL09OTFkgTUFJTiBHRVRXRUFUSEVSREFUQSBTSE9VTEQgQ0FMTCBBUEkgRlVOQ1RJT05TLCBJVCBJUyBUSEUgTUFJTiBXT1JLRkxPVyBUSEFUIEdFVFMgREFUQSBBTkQgVEVMTFMgVUkgVE8gUkVOREVSIElUXG5cbmV4cG9ydCB7XG4gICAgdW5pdCxcbn1cblxuXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1bml0IH0gZnJvbSAnLi9pbmRleCc7XG5cblxuLy8gY3VycmVudCB3ZWF0aGVyIHZhcmlhYmxlc1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1kZXNjJyk7XG5jb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10ZW1wLWljb24nKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRlbXAnKTtcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzTGlrZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IHJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kU3BlZWQnKTtcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgY2l0eURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgY2l0eVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuXG5jb25zdCBkYWlseUZvcmVjYXN0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHknKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5Jyk7XG5cblxuXG5sZXQgdW5pdFRlbXBEaXNwbGF5O1xubGV0IHVuaXRXaW5kRGlzcGxheTtcblxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyKXtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXIuY3VycmVudDtcblxuICAgIGN1cnJlbnRXZWF0aGVyRGVzYy5pbm5lclRleHQgPSB1dGlscy5jYXBpdGFsaXplRWFjaFdvcmQoY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgLy90b2RvIGljb25cbiAgICBjdXJyZW50V2VhdGhlclRlbXAuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcChjdXJyZW50V2VhdGhlci50ZW1wKTtcbiAgICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcChjdXJyZW50V2VhdGhlci5mZWVsc19saWtlKTtcbiAgICBodW1pZGl0eS5pbm5lclRleHQgPSBjdXJyZW50V2VhdGhlci5odW1pZGl0eSArIFwiJVwiO1xuICAgIHJhaW4uaW5uZXJUZXh0ID0gKHdlYXRoZXIuaG91cmx5WzBdLnBvcCAqIDEwMCkgKyBcIiVcIlxuICAgIHdpbmQuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0V2luZFNwZWVkKGN1cnJlbnRXZWF0aGVyLndpbmRfc3BlZWQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2NhbGlzYXRpb25JbmZvKHdlYXRoZXIpe1xuXG4gICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gd2VhdGhlci5uYW1lO1xuICAgIGNpdHlEYXRlLmlubmVyVGV4dCA9IHV0aWxzLmdldERhdGUod2VhdGhlci5jdXJyZW50LmR0KTtcbiAgICBjaXR5VGltZS5pbm5lclRleHQgPSB1dGlscy5nZXRIb3VyTWludXRlcyh3ZWF0aGVyLmN1cnJlbnQuZHQpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlckRhaWx5Rm9yZWNhc3Qod2VhdGhlcil7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYWlseUZvcmVjYXN0QXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgZmlyc3QgJ2RhaWx5JyB3ZWF0aGVyIG9iamVjdCwgYXMgaXQgaXMgdGhlIHNhbWUgYXMgdGhlICdjdXJyZW50JyB3ZWF0aGVyXG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YUluZGV4ID0gaSsxO1xuXG4gICAgICAgIGRhaWx5Rm9yZWNhc3RBcnJheVtpXS5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZGF5JykuaW5uZXJUZXh0ID0gdXRpbHMuZ2V0V2Vla0RheSh3ZWF0aGVyLmRhaWx5W3dlYXRoZXJEYXRhSW5kZXhdLmR0KTtcbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS10ZW1wJykuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0VGVtcCh3ZWF0aGVyLmRhaWx5W3dlYXRoZXJEYXRhSW5kZXhdLnRlbXAuZGF5KTtcbiAgICAgICAgZGFpbHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1sb3ctdGVtcCcpLmlubmVyVGV4dCA9IHV0aWxzLmZvcm1hdFRlbXAod2VhdGhlci5kYWlseVt3ZWF0aGVyRGF0YUluZGV4XS50ZW1wLm1pbik7XG4gICAgICAgIC8vdG9kbyBpY29uXG5cbiAgICB9XG59XG5cblxuLy9UT0RPOiBmb3Igbm93LCBvbmx5IDggaG91cnMgYXJlIHNob3duLiBBUEkgZ2l2ZXMgdXMgMjQsIHNvIGlkZWFsbHkgd2Ugd291bGQgaGF2ZSAzIHBhZ2VzIG9mIDhoIGVhY2ggc28gdGhhdCB1c2VyIGNhbiBzY3JvbGwgdGhyb3VnaFxuZnVuY3Rpb24gcmVuZGVySG91cmx5Rm9yZWNhc3Qod2VhdGhlcil7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJseUZvcmVjYXN0QXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgZmlyc3QgJ2hvdXJseScgd2VhdGhlciBvYmplY3QsIGFzIGl0IGlzIHRoZSBzYW1lIGFzIHRoZSAnY3VycmVudCcgd2VhdGhlclxuICAgICAgICBsZXQgd2VhdGhlckRhdGFJbmRleCA9IGkrMTtcblxuICAgICAgICBob3VybHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktaG91cicpLmlubmVyVGV4dCA9IHV0aWxzLmdldEhvdXIod2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0uZHQpO1xuICAgICAgICBob3VybHlGb3JlY2FzdEFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktdGVtcCcpLmlubmVyVGV4dCA9IHV0aWxzLmZvcm1hdFRlbXAod2VhdGhlci5ob3VybHlbd2VhdGhlckRhdGFJbmRleF0udGVtcCk7XG4gICAgICAgIC8vdG9kbyBpY29uXG5cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyV2VhdGhlckRhdGEod2VhdGhlcil7XG4gICAgLy90aGlzIHdpbGwgY2FsbCBhbGwgdGhlIGRpZmZlcmVudCByZW5kZXJzIGZ1bmN0aW9ucyAobWFpbiwgZm9yZWNhc3QsIGRldGFpbHMsIGV0YylcbiAgICB1bml0VGVtcERpc3BsYXkgPSB1bml0ID09IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMubmFtZSA/IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMudGVtcF9kaXNwbGF5IDogY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLnRlbXBfZGlzcGxheTtcbiAgICB1bml0V2luZERpc3BsYXkgPSB1bml0ID09IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMubmFtZSA/IGNvbnN0YW50cy51bml0SW5mby5NRVRSSUMud2luZHNwZWVkX2Rpc3BsYXkgOiBjb25zdGFudHMudW5pdEluZm8uSU1QRVJJQUwud2luZHNwZWVkX2Rpc3BsYXk7XG4gICAgXG4gICAgcmVuZGVyQ3VycmVudFdlYXRoZXIod2VhdGhlcik7XG4gICAgcmVuZGVyTG9jYWxpc2F0aW9uSW5mbyh3ZWF0aGVyKTtcbiAgICByZW5kZXJEYWlseUZvcmVjYXN0KHdlYXRoZXIpO1xuICAgIHJlbmRlckhvdXJseUZvcmVjYXN0KHdlYXRoZXIpO1xuXG59XG5cbmV4cG9ydHtcbiAgICByZW5kZXJXZWF0aGVyRGF0YSxcbiAgICB1bml0VGVtcERpc3BsYXksXG4gICAgdW5pdFdpbmREaXNwbGF5LFxufSIsImltcG9ydCB7IHVuaXRXaW5kRGlzcGxheSwgdW5pdFRlbXBEaXNwbGF5IH0gZnJvbSBcIi4vdWlGdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcblxuLypcbipUT0RPOiBcbiogLSBjb252ZXJ0IHVuaXggZGF0ZSBhbmQgdGltZVxuKiAtIGNvbnZlcnQgMjRoIHRpbWUgdG8gMTJoXG4qIC0gZm9ybWF0IHRlbXBlcmF0dXJlXG4qIC0gY2FsY3VsYXRlIGNoYW5jZXMgb2YgcmFpbiA/XG4qIC1cbipcbipcbipcbiovXG5cbmZ1bmN0aW9uIGdldERhdGUodW5peFRpbWVzdGFtcCl7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHVuaXhUaW1lc3RhbXAgKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OlwibG9uZ1wiLCB5ZWFyOlwibnVtZXJpY1wiLCBtb250aDpcImxvbmdcIiwgZGF5OlwibnVtZXJpY1wifSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkodW5peFRpbWVzdGFtcCl7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHVuaXhUaW1lc3RhbXAgKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OlwibG9uZ1wifSk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJNaW51dGVzKHVuaXhUaW1lc3RhbXApe1xuICAgIHJldHVybiBuZXcgRGF0ZSh1bml4VGltZXN0YW1wICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycseyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyMTI6IHRydWUgfSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cih1bml4VGltZXN0YW1wKXtcbiAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLHsgaG91cjogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSkudG9Mb3dlckNhc2UoKTtcblxufVxuXG5mdW5jdGlvbiBmb3JtYXRUZW1wKHRlbXApe1xuICAgIGxldCB0ZW1wU3RyID0gU3RyaW5nKHRlbXApO1xuICAgIHJldHVybiB0ZW1wU3RyLnN1YnN0cmluZygwLCB0ZW1wU3RyLmluZGV4T2YoXCIuXCIpKSArIHVuaXRUZW1wRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2luZFNwZWVkKHdpbmQpe1xuICAgIGlmICh1bml0V2luZERpc3BsYXkgPT0gY29uc3RhbnRzLnVuaXRJbmZvLklNUEVSSUFMLndpbmRzcGVlZF9kaXNwbGF5KXtcbiAgICAgICAgcmV0dXJuIHdpbmQgKyB1bml0V2luZERpc3BsYXk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh3aW5kICogMy42KSkgKyB1bml0V2luZERpc3BsYXk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaFdvcmQoc3RyKSB7XG4gICAgdmFyIHNwbGl0U3RyID0gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0U3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwbGl0U3RyW2ldID0gc3BsaXRTdHJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzcGxpdFN0cltpXS5zdWJzdHJpbmcoMSk7ICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHNwbGl0U3RyLmpvaW4oJyAnKTsgXG4gfVxuXG4gZnVuY3Rpb24gZm9ybWF0Q2l0eU5hbWUoc3RyKXtcbiAgICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgJycpXG4gICAgLnJlcGxhY2UoLygsXFxzKykvZywgJywnKVxuICAgIC5yZXBsYWNlKC8oXFxzKywpL2csICcsJylcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnKycpO1xuIH1cblxuZXhwb3J0IHtcbiAgICBmb3JtYXRUZW1wLFxuICAgIGZvcm1hdFdpbmRTcGVlZCxcbiAgICBnZXREYXRlLFxuICAgIGdldEhvdXJNaW51dGVzLFxuICAgIGNhcGl0YWxpemVFYWNoV29yZCxcbiAgICBnZXRXZWVrRGF5LFxuICAgIGdldEhvdXIsXG4gICAgZm9ybWF0Q2l0eU5hbWUsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==