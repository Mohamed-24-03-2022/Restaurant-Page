/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://fonts.cdnfonts.com/css/ananda-2);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  text-align: center;\r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda\", sans-serif;\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #040404;\r\n  text-shadow: -1px 1px 5px #ff0000;\r\n  scale: 1.1;\r\n  user-select: none;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n  border-bottom: solid 2px #ffffff00;\r\n  text-shadow: 0px 0px 2px #ffffff;\r\n  transition: ease-in-out 200ms;\r\n}\r\nli:hover {\r\n  transform: translateY(-5px);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/**************** main ****************/\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: min(700px, 80%);\r\n  min-height: 600px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n/*********************** contact ***************************/\r\n.contact-card {\r\n  text-align: left;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.phone,\r\n.location,\r\n.location-img {\r\n  padding: 15px 0;\r\n  cursor: default;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,qCAAqC;EACrC,yDAAyC;EACzC,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,SAAS;AACX;;AAEA,kDAAkD;AAClD;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,iCAAiC;EACjC,uCAAuC;EACvC,eAAe;EACf,cAAc;EACd,iCAAiC;EACjC,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,2BAA2B;EAC3B,kCAAkC;EAClC,gCAAgC;EAChC,6BAA6B;AAC/B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,uCAAuC;AACvC;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,+CAA+C;AAC/C;EACE,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA,yDAAyD;AACzD;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA,uDAAuD;AACvD;EACE,aAAa;EACb,6DAA6D;EAC7D,SAAS;EACT,uBAAuB;EACvB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;AACpC;AACA;EACE,2BAA2B;EAC3B,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA,4DAA4D;AAC5D;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;;;EAGE,eAAe;EACf,eAAe;AACjB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA,gEAAgE;AAChE;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"http://fonts.cdnfonts.com/css/ananda-2\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(\"./background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  text-align: center;\r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda\", sans-serif;\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #040404;\r\n  text-shadow: -1px 1px 5px #ff0000;\r\n  scale: 1.1;\r\n  user-select: none;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n  border-bottom: solid 2px #ffffff00;\r\n  text-shadow: 0px 0px 2px #ffffff;\r\n  transition: ease-in-out 200ms;\r\n}\r\nli:hover {\r\n  transform: translateY(-5px);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/**************** main ****************/\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: min(700px, 80%);\r\n  min-height: 600px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n/*********************** contact ***************************/\r\n.contact-card {\r\n  text-align: left;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.phone,\r\n.location,\r\n.location-img {\r\n  padding: 15px 0;\r\n  cursor: default;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/initialPageLoader.js":
/*!**********************************!*\
  !*** ./src/initialPageLoader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactCard": () => (/* binding */ createContactCard),
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createMenuCard": () => (/* binding */ createMenuCard),
/* harmony export */   "createNavBar": () => (/* binding */ createNavBar),
/* harmony export */   "createPageContent": () => (/* binding */ createPageContent)
/* harmony export */ });
/* harmony import */ var _wineWaiter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wineWaiter.png */ "./src/wineWaiter.png");
/* harmony import */ var _wine1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wine1.png */ "./src/wine1.png");
/* harmony import */ var _wine2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wine2.png */ "./src/wine2.png");
/* harmony import */ var _wine3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wine3.png */ "./src/wine3.png");
/* harmony import */ var _wine4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wine4.png */ "./src/wine4.png");
/* harmony import */ var _wine5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wine5.png */ "./src/wine5.png");
/* harmony import */ var _wine6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wine6.png */ "./src/wine6.png");
/* harmony import */ var _wine7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wine7.png */ "./src/wine7.png");
/* harmony import */ var _wine8_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wine8.png */ "./src/wine8.png");
/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location.png */ "./src/location.png");











const createElement = (element) => {
    return document.createElement(element);
};

const content = document.querySelector("#content");
const mainContainer = createElement("div");
mainContainer.classList.add("main");

const createNavBar = () => {
    const nav = createElement("nav");
    const logoContainer = createElement("div");
    const listContainer = createElement("div");
    const list = createElement("ul");
    const listItems = [
        createElement("li"),
        createElement("li"),
        createElement("li"),
    ];
    const listItemsLinks = [
        createElement("a"),
        createElement("a"),
        createElement("a"),
    ];

    logoContainer.classList.add("logo");

    nav.appendChild(logoContainer);
    nav.appendChild(listContainer);
    listContainer.appendChild(list);
    for (let i = 0; i < listItems.length; i++) {
        list.appendChild(listItems[i]);
        listItems[i].appendChild(listItemsLinks[i]);
        listItemsLinks[i].setAttribute("href", " ");
        listItemsLinks[i].addEventListener("click", (e) => {
            listItems.forEach(item => {
                item.style.borderBottom = "solid 2px #ffffff00";
            });
            listItems[i].style.borderBottom = "solid 2px #ffffff";
        })
    }
    logoContainer.textContent = "Red House";
    listItemsLinks[0].textContent = "Home";
    listItemsLinks[1].textContent = "Menu";
    listItemsLinks[2].textContent = "Contact";

    content.appendChild(nav);
};
const createPageContent = () => {
    const cardContainer = createElement("div");
    const textContainer = createElement("div");
    const texts = [createElement("p"), createElement("p")];
    const imgContainer = createElement("div");
    const img = new Image();
    const actionCallContainer = createElement("div");
    const actionText = createElement("p");

    cardContainer.classList.add("presentation-card");
    textContainer.classList.add("text");
    imgContainer.classList.add("img-container");
    actionCallContainer.classList.add("call-to-action");

    mainContainer.appendChild(cardContainer);
    cardContainer.appendChild(textContainer);
    texts.forEach((text) => textContainer.appendChild(text));
    cardContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    cardContainer.appendChild(actionCallContainer);
    actionCallContainer.appendChild(actionText);

    texts[0].textContent = "Best red wine in the country";
    texts[1].textContent = "Made with passion since 1878";
    img.src = _wineWaiter_png__WEBPACK_IMPORTED_MODULE_0__;
    actionText.textContent = "Order online or visit us!";

    content.appendChild(mainContainer);
};

const createFooter = () => {
    const footer = createElement("footer");
    const footerContainer = createElement("div");
    const footerText = createElement("p");
    const footerLink = createElement("a");
    const fontAwesome = createElement("i");

    footerContainer.classList.add("footer-container");
    fontAwesome.classList.add("fab", "fa-github");
    footerLink.setAttribute("href", "https://github.com/mohamed-24-03-2022");
    footerLink.setAttribute("target", "_blank");

    footerText.textContent = "Copyright © 2022 Mohamed-24-03-2022 ";

    footer.appendChild(footerContainer);
    footerText.appendChild(footerLink);
    footerLink.appendChild(fontAwesome);
    footerContainer.appendChild(footerText);

    content.appendChild(footer);
};

const createMenuCard = () => {
    const menuCardContainer = createElement("div");
    menuCardContainer.classList.add("menu-card");
    mainContainer.appendChild(menuCardContainer);

    for (let i = 1; i <= 8; i++) {
        const card = createElement("div");
        card.classList.add("card");
        menuCardContainer.appendChild(card);
        const wineName = createElement("p");
        const wineNames = [
            "Estrella River Proprietor's Reserve Merlot",
            "Sierra Salinas Mira",
            "Chateau Souverain Merlot",
            "Estrella River Proprietor's Reserve Cabernet Sauvignon",
            "14 Hands Cabernet Sauvignon",
            "Montes Malbec (Classic)",
            "Finca Decero Remolinos Vineyard Malbec",
            "Wines from Hahn Estate Pinot Noir",
        ];
        wineName.textContent = wineNames[i - 1];
        card.appendChild(wineName);
        const images = [_wine1_png__WEBPACK_IMPORTED_MODULE_1__, _wine2_png__WEBPACK_IMPORTED_MODULE_2__, _wine3_png__WEBPACK_IMPORTED_MODULE_3__, _wine4_png__WEBPACK_IMPORTED_MODULE_4__, _wine5_png__WEBPACK_IMPORTED_MODULE_5__, _wine6_png__WEBPACK_IMPORTED_MODULE_6__, _wine7_png__WEBPACK_IMPORTED_MODULE_7__, _wine8_png__WEBPACK_IMPORTED_MODULE_8__];
        const img = new Image();
        img.src = images[i - 1];
        card.appendChild(img);
    }
    content.appendChild(mainContainer);
};

const createContactCard = () => {
    const contactCardContainer = createElement("div");
    const card = [
        createElement("div"),
        createElement("div"),
        createElement("div"),
    ];
    const cardsClasses = ["phone", "location", "location-img"];
    const cardsContent = [
        "☎ 999 999 999",
        "🗺️ Tucson, Arizona, United States",
        "",
    ];
    const locationImg = new Image();

    contactCardContainer.classList.add("contact-card");
    mainContainer.appendChild(contactCardContainer);

    for (let i = 0; i < 3; i++) {
        card[i].classList.add(`${cardsClasses[i]}`);
        contactCardContainer.appendChild(card[i]);
        card[i].textContent = `${cardsContent[i]}`;
    }
    locationImg.src = _location_png__WEBPACK_IMPORTED_MODULE_9__;
    card[2].appendChild(locationImg);

    content.appendChild(mainContainer);
};




/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db6ac7de30b5c9c30d89.jpg";

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa97e692f44e30674b4a.png";

/***/ }),

/***/ "./src/wine1.png":
/*!***********************!*\
  !*** ./src/wine1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be29bd14911777c0027.png";

/***/ }),

/***/ "./src/wine2.png":
/*!***********************!*\
  !*** ./src/wine2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee74ee51879a2111a5f.png";

/***/ }),

/***/ "./src/wine3.png":
/*!***********************!*\
  !*** ./src/wine3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cb37113c9998892142d.png";

/***/ }),

/***/ "./src/wine4.png":
/*!***********************!*\
  !*** ./src/wine4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ee2c70cb6ccc2a7485a.png";

/***/ }),

/***/ "./src/wine5.png":
/*!***********************!*\
  !*** ./src/wine5.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b99ae3db81168d143eab.png";

/***/ }),

/***/ "./src/wine6.png":
/*!***********************!*\
  !*** ./src/wine6.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d11c219c73e0fd94ca87.png";

/***/ }),

/***/ "./src/wine7.png":
/*!***********************!*\
  !*** ./src/wine7.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a29282634556cdf74c46.png";

/***/ }),

/***/ "./src/wine8.png":
/*!***********************!*\
  !*** ./src/wine8.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f425da44be1615579c41.png";

/***/ }),

/***/ "./src/wineWaiter.png":
/*!****************************!*\
  !*** ./src/wineWaiter.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "346f6d84bccedad23356.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPageLoader.js */ "./src/initialPageLoader.js");



(0,_initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__.createNavBar)();
(0,_initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__.createPageContent)();
(0,_initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard)();
(0,_initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__.createContactCard)();
(0,_initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__.createFooter)();

const switchPages = (() => {
    const mainContainer = document.querySelector(".main");
    const presentationCard = document.querySelector(".presentation-card");
    const menuCard = document.querySelector(".menu-card");
    const contactCard = document.querySelector(".contact-card");

    // remove menu and contact cards from thw flow
    menuCard.style.opacity = "0";
    menuCard.remove();
    contactCard.style.opacity = "0";
    contactCard.remove();

    const links = document.querySelectorAll("nav a");
    const homeLink = links[0];
    const menuLink = links[1];
    const contactLink = links[2];

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove menuCard
        menuCard.style.opacity = "0";
        menuCard.remove()
        // remove contactCard
        contactCard.style.opacity = "0";
        contactCard.remove()
        // add presentationCard
        presentationCard.style.opacity = "1"
        mainContainer.appendChild(presentationCard);
    });
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        presentationCard.remove()
        // remove contactCard
        contactCard.style.opacity = "0";
        contactCard.remove()
        // add menuCard
        menuCard.style.opacity = "1";
        mainContainer.appendChild(menuCard);
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        presentationCard.remove();
        // remove menuCard
        menuCard.style.opacity = "0";
        menuCard.remove();
        // add contactCard
        contactCard.style.opacity = "1";
        mainContainer.prepend(contactCard);
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQU9XO0FBQ2hDO0FBQ0EsbUVBQVk7QUFDWix3RUFBaUI7QUFDakIscUVBQWM7QUFDZCx3RUFBaUI7QUFDakIsbUVBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxQYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9hbmFuZGEtMik7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmZDg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGdhcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ0O1xcclxcbiAgYm94LXNoYWRvdzogI2ZmNzMwMDk4IC0xcHggLTFweCA0cHg7XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYSBCbGFja1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDYzcHg7XFxyXFxuICBjb2xvcjogIzA0MDQwNDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDFweCA1cHggI2ZmMDAwMDtcXHJcXG4gIHNjYWxlOiAxLjE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IG1pbigzMHB4LCA1JSk7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZmZmZjAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAyMDBtcztcXHJcXG59XFxyXFxubGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBtYWluICoqKioqKioqKioqKioqKiovXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNlYjAwMDA3NSAwcHggMHB4IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgd2lkdGg6IG1pbig3MDBweCwgODAlKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBwcmVzZW50YXRpb24gKioqKioqKioqKioqKioqKi9cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogbWF4KDMzMHB4LCA1JSk7XFxyXFxufVxcclxcbi5wcmVzZW50YXRpb24tY2FyZCBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIC50ZXh0IHAge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uY2FsbC10by1hY3Rpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogZm9vdGVyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XFxyXFxuICBib3gtc2hhZG93OiAjZmY3MzAwOTggMXB4IDFweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqIG1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMC42ZnIpKTtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MzY2O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMjUwbXM7XFxyXFxufVxcclxcbi5jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKiBjb250YWN0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uY29udGFjdC1jYXJkIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5waG9uZSxcXHJcXG4ubG9jYXRpb24sXFxyXFxuLmxvY2F0aW9uLWltZyB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogbWVkaWEgcXVlcnkgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAucHJlc2VudGF0aW9uLWNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyx5REFBeUM7RUFDekMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLHVDQUF1QztBQUN2QztFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBLCtDQUErQztBQUMvQztFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQSx5REFBeUQ7QUFDekQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQSx1REFBdUQ7QUFDdkQ7RUFDRSxhQUFhO0VBQ2IsNkRBQTZEO0VBQzdELFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQSw0REFBNEQ7QUFDNUQ7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBLGdFQUFnRTtBQUNoRTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9hbmFuZGEtMlxcXCIpO1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYmFja2dyb3VuZC5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmZDg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGdhcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ0O1xcclxcbiAgYm94LXNoYWRvdzogI2ZmNzMwMDk4IC0xcHggLTFweCA0cHg7XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYSBCbGFja1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDYzcHg7XFxyXFxuICBjb2xvcjogIzA0MDQwNDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDFweCA1cHggI2ZmMDAwMDtcXHJcXG4gIHNjYWxlOiAxLjE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IG1pbigzMHB4LCA1JSk7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZmZmZjAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAyMDBtcztcXHJcXG59XFxyXFxubGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBtYWluICoqKioqKioqKioqKioqKiovXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNlYjAwMDA3NSAwcHggMHB4IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgd2lkdGg6IG1pbig3MDBweCwgODAlKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBwcmVzZW50YXRpb24gKioqKioqKioqKioqKioqKi9cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogbWF4KDMzMHB4LCA1JSk7XFxyXFxufVxcclxcbi5wcmVzZW50YXRpb24tY2FyZCBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIC50ZXh0IHAge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uY2FsbC10by1hY3Rpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogZm9vdGVyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XFxyXFxuICBib3gtc2hhZG93OiAjZmY3MzAwOTggMXB4IDFweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqIG1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMC42ZnIpKTtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MzY2O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMjUwbXM7XFxyXFxufVxcclxcbi5jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKiBjb250YWN0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uY29udGFjdC1jYXJkIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5waG9uZSxcXHJcXG4ubG9jYXRpb24sXFxyXFxuLmxvY2F0aW9uLWltZyB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogbWVkaWEgcXVlcnkgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAucHJlc2VudGF0aW9uLWNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHdpbmVXYWl0ZXIgZnJvbSBcIi4vd2luZVdhaXRlci5wbmdcIjtcclxuaW1wb3J0IHdpbmUxIGZyb20gXCIuL3dpbmUxLnBuZ1wiO1xyXG5pbXBvcnQgd2luZTIgZnJvbSBcIi4vd2luZTIucG5nXCI7XHJcbmltcG9ydCB3aW5lMyBmcm9tIFwiLi93aW5lMy5wbmdcIjtcclxuaW1wb3J0IHdpbmU0IGZyb20gXCIuL3dpbmU0LnBuZ1wiO1xyXG5pbXBvcnQgd2luZTUgZnJvbSBcIi4vd2luZTUucG5nXCI7XHJcbmltcG9ydCB3aW5lNiBmcm9tIFwiLi93aW5lNi5wbmdcIjtcclxuaW1wb3J0IHdpbmU3IGZyb20gXCIuL3dpbmU3LnBuZ1wiO1xyXG5pbXBvcnQgd2luZTggZnJvbSBcIi4vd2luZTgucG5nXCI7XHJcbmltcG9ydCBsb2NhdGlvbkltZ1NyYyBmcm9tIFwiLi9sb2NhdGlvbi5wbmdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5jb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IFtcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwibGlcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImxpXCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgIF07XHJcbiAgICBjb25zdCBsaXN0SXRlbXNMaW5rcyA9IFtcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiYVwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiYVwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiYVwiKSxcclxuICAgIF07XHJcblxyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtc1tpXSk7XHJcbiAgICAgICAgbGlzdEl0ZW1zW2ldLmFwcGVuZENoaWxkKGxpc3RJdGVtc0xpbmtzW2ldKTtcclxuICAgICAgICBsaXN0SXRlbXNMaW5rc1tpXS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiIFwiKTtcclxuICAgICAgICBsaXN0SXRlbXNMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMnB4ICNmZmZmZmYwMFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGlzdEl0ZW1zW2ldLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMnB4ICNmZmZmZmZcIjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbG9nb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUmVkIEhvdXNlXCI7XHJcbiAgICBsaXN0SXRlbXNMaW5rc1swXS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbGlzdEl0ZW1zTGlua3NbMV0udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGxpc3RJdGVtc0xpbmtzWzJdLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59O1xyXG5jb25zdCBjcmVhdGVQYWdlQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0cyA9IFtjcmVhdGVFbGVtZW50KFwicFwiKSwgY3JlYXRlRWxlbWVudChcInBcIildO1xyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgYWN0aW9uQ2FsbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBhY3Rpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJlc2VudGF0aW9uLWNhcmRcIik7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctY29udGFpbmVyXCIpO1xyXG4gICAgYWN0aW9uQ2FsbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FsbC10by1hY3Rpb25cIik7XHJcblxyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcbiAgICB0ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25DYWxsQ29udGFpbmVyKTtcclxuICAgIGFjdGlvbkNhbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uVGV4dCk7XHJcblxyXG4gICAgdGV4dHNbMF0udGV4dENvbnRlbnQgPSBcIkJlc3QgcmVkIHdpbmUgaW4gdGhlIGNvdW50cnlcIjtcclxuICAgIHRleHRzWzFdLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxODc4XCI7XHJcbiAgICBpbWcuc3JjID0gd2luZVdhaXRlcjtcclxuICAgIGFjdGlvblRleHQudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBmb290ZXJMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjb25zdCBmb250QXdlc29tZSA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGZvbnRBd2Vzb21lLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XHJcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbW9oYW1lZC0yNC0wMy0yMDIyXCIpO1xyXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcblxyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgTW9oYW1lZC0yNC0wMy0yMDIyIFwiO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xyXG4gICAgZm9vdGVyVGV4dC5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcclxuICAgIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWUpO1xyXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVDYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUNhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudUNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmRDb250YWluZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgbWVudUNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgY29uc3Qgd2luZU5hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCB3aW5lTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIFwiRXN0cmVsbGEgUml2ZXIgUHJvcHJpZXRvcidzIFJlc2VydmUgTWVybG90XCIsXHJcbiAgICAgICAgICAgIFwiU2llcnJhIFNhbGluYXMgTWlyYVwiLFxyXG4gICAgICAgICAgICBcIkNoYXRlYXUgU291dmVyYWluIE1lcmxvdFwiLFxyXG4gICAgICAgICAgICBcIkVzdHJlbGxhIFJpdmVyIFByb3ByaWV0b3IncyBSZXNlcnZlIENhYmVybmV0IFNhdXZpZ25vblwiLFxyXG4gICAgICAgICAgICBcIjE0IEhhbmRzIENhYmVybmV0IFNhdXZpZ25vblwiLFxyXG4gICAgICAgICAgICBcIk1vbnRlcyBNYWxiZWMgKENsYXNzaWMpXCIsXHJcbiAgICAgICAgICAgIFwiRmluY2EgRGVjZXJvIFJlbW9saW5vcyBWaW5leWFyZCBNYWxiZWNcIixcclxuICAgICAgICAgICAgXCJXaW5lcyBmcm9tIEhhaG4gRXN0YXRlIFBpbm90IE5vaXJcIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIHdpbmVOYW1lLnRleHRDb250ZW50ID0gd2luZU5hbWVzW2kgLSAxXTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdpbmVOYW1lKTtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbd2luZTEsIHdpbmUyLCB3aW5lMywgd2luZTQsIHdpbmU1LCB3aW5lNiwgd2luZTcsIHdpbmU4XTtcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuc3JjID0gaW1hZ2VzW2kgLSAxXTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdENhcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0Q2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjYXJkID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNhcmRzQ2xhc3NlcyA9IFtcInBob25lXCIsIFwibG9jYXRpb25cIiwgXCJsb2NhdGlvbi1pbWdcIl07XHJcbiAgICBjb25zdCBjYXJkc0NvbnRlbnQgPSBbXHJcbiAgICAgICAgXCLimI4gOTk5IDk5OSA5OTlcIixcclxuICAgICAgICBcIvCfl7rvuI8gVHVjc29uLCBBcml6b25hLCBVbml0ZWQgU3RhdGVzXCIsXHJcbiAgICAgICAgXCJcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNhcmRcIik7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNhcmRbaV0uY2xhc3NMaXN0LmFkZChgJHtjYXJkc0NsYXNzZXNbaV19YCk7XHJcbiAgICAgICAgY29udGFjdENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFtpXSk7XHJcbiAgICAgICAgY2FyZFtpXS50ZXh0Q29udGVudCA9IGAke2NhcmRzQ29udGVudFtpXX1gO1xyXG4gICAgfVxyXG4gICAgbG9jYXRpb25JbWcuc3JjID0gbG9jYXRpb25JbWdTcmM7XHJcbiAgICBjYXJkWzJdLmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZU5hdkJhcixcclxuICAgIGNyZWF0ZVBhZ2VDb250ZW50LFxyXG4gICAgY3JlYXRlRm9vdGVyLFxyXG4gICAgY3JlYXRlTWVudUNhcmQsXHJcbiAgICBjcmVhdGVDb250YWN0Q2FyZCxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVOYXZCYXIsXHJcbiAgICBjcmVhdGVQYWdlQ29udGVudCxcclxuICAgIGNyZWF0ZUZvb3RlcixcclxuICAgIGNyZWF0ZU1lbnVDYXJkLFxyXG4gICAgY3JlYXRlQ29udGFjdENhcmQsXHJcbn0gZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXIuanNcIjtcclxuXHJcbmNyZWF0ZU5hdkJhcigpO1xyXG5jcmVhdGVQYWdlQ29udGVudCgpO1xyXG5jcmVhdGVNZW51Q2FyZCgpO1xyXG5jcmVhdGVDb250YWN0Q2FyZCgpO1xyXG5jcmVhdGVGb290ZXIoKTtcclxuXHJcbmNvbnN0IHN3aXRjaFBhZ2VzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBjb25zdCBwcmVzZW50YXRpb25DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzZW50YXRpb24tY2FyZFwiKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNhcmRcIik7XHJcbiAgICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jYXJkXCIpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBtZW51IGFuZCBjb250YWN0IGNhcmRzIGZyb20gdGh3IGZsb3dcclxuICAgIG1lbnVDYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIG1lbnVDYXJkLnJlbW92ZSgpO1xyXG4gICAgY29udGFjdENhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgY29udGFjdENhcmQucmVtb3ZlKCk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGFcIik7XHJcbiAgICBjb25zdCBob21lTGluayA9IGxpbmtzWzBdO1xyXG4gICAgY29uc3QgbWVudUxpbmsgPSBsaW5rc1sxXTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gbGlua3NbMl07XHJcblxyXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBtZW51Q2FyZFxyXG4gICAgICAgIG1lbnVDYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBtZW51Q2FyZC5yZW1vdmUoKVxyXG4gICAgICAgIC8vIHJlbW92ZSBjb250YWN0Q2FyZFxyXG4gICAgICAgIGNvbnRhY3RDYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBjb250YWN0Q2FyZC5yZW1vdmUoKVxyXG4gICAgICAgIC8vIGFkZCBwcmVzZW50YXRpb25DYXJkXHJcbiAgICAgICAgcHJlc2VudGF0aW9uQ2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNlbnRhdGlvbkNhcmQpO1xyXG4gICAgfSk7XHJcbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gcmVtb3ZlIGNvbnRhY3RDYXJkXHJcbiAgICAgICAgY29udGFjdENhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIGNvbnRhY3RDYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gYWRkIG1lbnVDYXJkXHJcbiAgICAgICAgbWVudUNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xyXG4gICAgfSk7XHJcbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBtZW51Q2FyZFxyXG4gICAgICAgIG1lbnVDYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBtZW51Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAvLyBhZGQgY29udGFjdENhcmRcclxuICAgICAgICBjb250YWN0Q2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5wcmVwZW5kKGNvbnRhY3RDYXJkKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=