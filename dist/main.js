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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n#content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n/******************* CSS animation ******************/\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda\", sans-serif;\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #040404;\r\n  text-shadow: -1px 1px 5px #ff0000;\r\n  scale: 1.1;\r\n  user-select: none;\r\n  width: max-content;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n  gap: 5px;\r\n  width: 300px;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n  border-bottom: solid 2px #ffffff00;\r\n  text-shadow: 0px 0px 2px #ffffff;\r\n  transition: ease-in-out 200ms;\r\n}\r\nli:hover {\r\n  transform: translateY(-5px);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/**************** main ****************/\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: min(700px, 80%);\r\n  min-height: 600px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 2s;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n\r\n/*********************** contact ***************************/\r\n.contact-card {\r\n  text-align: left;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.phone,\r\n.location,\r\n.location-img {\r\n  padding: 15px 0;\r\n  cursor: default;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,qCAAqC;EACrC,yDAAyC;EACzC,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,SAAS;AACX;AACA,qDAAqD;AACrD;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA,kDAAkD;AAClD;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,iCAAiC;EACjC,uCAAuC;EACvC,eAAe;EACf,cAAc;EACd,iCAAiC;EACjC,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,QAAQ;EACR,YAAY;AACd;AACA;EACE,2BAA2B;EAC3B,kCAAkC;EAClC,gCAAgC;EAChC,6BAA6B;AAC/B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA,uCAAuC;AACvC;EACE,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,+CAA+C;AAC/C;EACE,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,yDAAyD;AACzD;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA,uDAAuD;AACvD;EACE,aAAa;EACb,6DAA6D;EAC7D,SAAS;EACT,uBAAuB;EACvB,6BAA6B;EAC7B,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;AACpC;AACA;EACE,2BAA2B;EAC3B,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,4DAA4D;AAC5D;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;;;EAGE,eAAe;EACf,eAAe;AACjB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA,gEAAgE;AAChE;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"http://fonts.cdnfonts.com/css/ananda-2\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(\"./background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n#content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n/******************* CSS animation ******************/\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda\", sans-serif;\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #040404;\r\n  text-shadow: -1px 1px 5px #ff0000;\r\n  scale: 1.1;\r\n  user-select: none;\r\n  width: max-content;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n  gap: 5px;\r\n  width: 300px;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n  border-bottom: solid 2px #ffffff00;\r\n  text-shadow: 0px 0px 2px #ffffff;\r\n  transition: ease-in-out 200ms;\r\n}\r\nli:hover {\r\n  transform: translateY(-5px);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/**************** main ****************/\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: min(700px, 80%);\r\n  min-height: 600px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 2s;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n\r\n/*********************** contact ***************************/\r\n.contact-card {\r\n  text-align: left;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.phone,\r\n.location,\r\n.location-img {\r\n  padding: 15px 0;\r\n  cursor: default;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/contactLoader.js":
/*!******************************!*\
  !*** ./src/contactLoader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.png */ "./src/location.png");
/* harmony import */ var _initialPageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPageLoader */ "./src/initialPageLoader.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const contactCardContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");
    const card = [
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    ];
    const cardsClasses = ["phone", "location", "location-img"];
    const cardsContent = [
        "☎ 999 999 999",
        "🗺️ Tucson, Arizona, United States",
        "",
    ];
    const locationImg = new Image();

    contactCardContainer.classList.add("contact-card");
    _initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(contactCardContainer);

    for (let i = 0; i < 3; i++) {
        card[i].classList.add(`${cardsClasses[i]}`);
        contactCardContainer.appendChild(card[i]);
        card[i].textContent = `${cardsContent[i]}`;
    }
    locationImg.src = _location_png__WEBPACK_IMPORTED_MODULE_0__;
    card[2].appendChild(locationImg);

    _initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.mainContainer);
};

/***/ }),

/***/ "./src/footerLoader.js":
/*!*****************************!*\
  !*** ./src/footerLoader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initialPageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoader */ "./src/initialPageLoader.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const footer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer");
    const footerContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    const footerText = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");
    const footerLink = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("a");
    const fontAwesome = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("i");

    footerContainer.classList.add("footer-container");
    fontAwesome.classList.add("fab", "fa-github");
    footerLink.setAttribute("href", "https://github.com/mohamed-24-03-2022");
    footerLink.setAttribute("target", "_blank");

    footerText.textContent = "Copyright © 2022 Mohamed-24-03-2022 ";

    footer.appendChild(footerContainer);
    footerText.appendChild(footerLink);
    footerLink.appendChild(fontAwesome);
    footerContainer.appendChild(footerText);

    _initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footer);
};



/***/ }),

/***/ "./src/initialPageLoader.js":
/*!**********************************!*\
  !*** ./src/initialPageLoader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mainContainer": () => (/* binding */ mainContainer)
/* harmony export */ });
/* harmony import */ var _navLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navLoader.js */ "./src/navLoader.js");
/* harmony import */ var _presentationLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentationLoader.js */ "./src/presentationLoader.js");
/* harmony import */ var _menuLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLoader.js */ "./src/menuLoader.js");
/* harmony import */ var _contactLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactLoader.js */ "./src/contactLoader.js");
/* harmony import */ var _footerLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footerLoader.js */ "./src/footerLoader.js");







const createElement = (element) => document.createElement(element);
const content = document.querySelector("#content");
const mainContainer = createElement("div");
mainContainer.classList.add("main");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    (0,_navLoader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_presentationLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_menuLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_contactLoader_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_footerLoader_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
}


/***/ }),

/***/ "./src/menuLoader.js":
/*!***************************!*\
  !*** ./src/menuLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wine1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wine1.png */ "./src/wine1.png");
/* harmony import */ var _wine2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wine2.png */ "./src/wine2.png");
/* harmony import */ var _wine3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wine3.png */ "./src/wine3.png");
/* harmony import */ var _wine4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wine4.png */ "./src/wine4.png");
/* harmony import */ var _wine5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wine5.png */ "./src/wine5.png");
/* harmony import */ var _wine6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wine6.png */ "./src/wine6.png");
/* harmony import */ var _wine7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wine7.png */ "./src/wine7.png");
/* harmony import */ var _wine8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wine8.png */ "./src/wine8.png");
/* harmony import */ var _initialPageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initialPageLoader */ "./src/initialPageLoader.js");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const menuCardContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_8__.createElement)("div");
    menuCardContainer.classList.add("menu-card");
    _initialPageLoader__WEBPACK_IMPORTED_MODULE_8__.mainContainer.appendChild(menuCardContainer);

    for (let i = 1; i <= 8; i++) {
        const card = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_8__.createElement)("div");
        card.classList.add("card");
        menuCardContainer.appendChild(card);
        const wineName = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_8__.createElement)("p");
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
        const images = [_wine1_png__WEBPACK_IMPORTED_MODULE_0__, _wine2_png__WEBPACK_IMPORTED_MODULE_1__, _wine3_png__WEBPACK_IMPORTED_MODULE_2__, _wine4_png__WEBPACK_IMPORTED_MODULE_3__, _wine5_png__WEBPACK_IMPORTED_MODULE_4__, _wine6_png__WEBPACK_IMPORTED_MODULE_5__, _wine7_png__WEBPACK_IMPORTED_MODULE_6__, _wine8_png__WEBPACK_IMPORTED_MODULE_7__];
        const img = new Image();
        img.src = images[i - 1];
        card.appendChild(img);
    }
    _initialPageLoader__WEBPACK_IMPORTED_MODULE_8__.content.appendChild(_initialPageLoader__WEBPACK_IMPORTED_MODULE_8__.mainContainer);
};


/***/ }),

/***/ "./src/navLoader.js":
/*!**************************!*\
  !*** ./src/navLoader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initialPageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoader */ "./src/initialPageLoader.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const nav = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav");
    const logoContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    const listContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    const list = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul");
    const listItems = [
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("li"),
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("li"),
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("li"),
    ];
    const listItemsLinks = [
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("a"),
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("a"),
        (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.createElement)("a"),
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

    _initialPageLoader__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nav);
};

/***/ }),

/***/ "./src/presentationLoader.js":
/*!***********************************!*\
  !*** ./src/presentationLoader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wineWaiter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wineWaiter.png */ "./src/wineWaiter.png");
/* harmony import */ var _initialPageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPageLoader */ "./src/initialPageLoader.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const cardContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");
    const textContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");
    const texts = [(0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("p"), (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("p")];
    const imgContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");
    const img = new Image();
    const actionCallContainer = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");
    const actionText = (0,_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.createElement)("p");

    cardContainer.classList.add("presentation-card");
    textContainer.classList.add("text");
    imgContainer.classList.add("img-container");
    actionCallContainer.classList.add("call-to-action");

    _initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(cardContainer);
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

    _initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_initialPageLoader__WEBPACK_IMPORTED_MODULE_1__.mainContainer);
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



(0,_initialPageLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


const switchPages = (() => {
    const mainContainer = document.querySelector(".main");
    const presentationCard = document.querySelector(".presentation-card");
    const menuCard = document.querySelector(".menu-card");
    const contactCard = document.querySelector(".contact-card");

    // remove menu and contact cards from thw flow
    menuCard.remove();
    contactCard.remove();

    const links = document.querySelectorAll("nav a");
    const homeLink = links[0];
    const menuLink = links[1];
    const contactLink = links[2];

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove menuCard
        menuCard.remove()
        // remove contactCard
        contactCard.remove()
        // add presentationCard
        mainContainer.appendChild(presentationCard);
    });
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.remove()
        // remove contactCard
        contactCard.remove()
        // add menuCard
        mainContainer.appendChild(menuCard);
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.remove();
        // remove menuCard
        menuCard.remove();
        // add contactCard
        mainContainer.prepend(contactCard);
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFDbkQ7QUFDQSxpRUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3RlckxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdkxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcHJlc2VudGF0aW9uTG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9hbmFuZGEtMik7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmZDg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZ2FwOiA2MHB4O1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKiBDU1MgYW5pbWF0aW9uICoqKioqKioqKioqKioqKioqKi9cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ0O1xcclxcbiAgYm94LXNoYWRvdzogI2ZmNzMwMDk4IC0xcHggLTFweCA0cHg7XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYSBCbGFja1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDYzcHg7XFxyXFxuICBjb2xvcjogIzA0MDQwNDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDFweCA1cHggI2ZmMDAwMDtcXHJcXG4gIHNjYWxlOiAxLjE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggbWluKDMwcHgsIDUlKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmZmZmZmMDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZmZmZjtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDIwMG1zO1xcclxcbn1cXHJcXG5saTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBtYWluICoqKioqKioqKioqKioqKiovXFxyXFxuLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk5O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogI2ViMDAwMDc1IDBweCAwcHggMTBweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICB3aWR0aDogbWluKDcwMHB4LCA4MCUpO1xcclxcbiAgbWluLWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqIHByZXNlbnRhdGlvbiAqKioqKioqKioqKioqKioqL1xcclxcbi5wcmVzZW50YXRpb24tY2FyZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDUwMG1zO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiBtYXgoMzMwcHgsIDUlKTtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQgLnRleHQgcCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5jYWxsLXRvLWFjdGlvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiBmb290ZXIgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZjczMDA5OCAxcHggMXB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogbWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAwLjZmcikpO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDJzO1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MzY2O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMjUwbXM7XFxyXFxufVxcclxcbi5jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKiBjb250YWN0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uY29udGFjdC1jYXJkIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5waG9uZSxcXHJcXG4ubG9jYXRpb24sXFxyXFxuLmxvY2F0aW9uLWltZyB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogbWVkaWEgcXVlcnkgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAucHJlc2VudGF0aW9uLWNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyx5REFBeUM7RUFDekMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0EscURBQXFEO0FBQ3JEO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBLHVEQUF1RDtBQUN2RDtFQUNFLGFBQWE7RUFDYiw2REFBNkQ7RUFDN0QsU0FBUztFQUNULHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxnRUFBZ0U7QUFDaEU7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cDovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvYW5hbmRhLTJcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2JhY2tncm91bmQuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBjb2xvcjogI2ZmZmZmZmQ4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGdhcDogNjBweDtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKiogQ1NTIGFuaW1hdGlvbiAqKioqKioqKioqKioqKioqKiovXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZjczMDA5OCAtMXB4IC0xcHggNHB4O1xcclxcbn1cXHJcXG5uYXYgLmxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmFuZGFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmFuZGEgQmxhY2tcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2M3B4O1xcclxcbiAgY29sb3I6ICMwNDA0MDQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAxcHggNXB4ICNmZjAwMDA7XFxyXFxuICBzY2FsZTogMS4xO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IG1pbigzMHB4LCA1JSk7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZmZmZjAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAyMDBtcztcXHJcXG59XFxyXFxubGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiogbWFpbiAqKioqKioqKioqKioqKioqL1xcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNlYjAwMDA3NSAwcHggMHB4IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgd2lkdGg6IG1pbig3MDBweCwgODAlKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBwcmVzZW50YXRpb24gKioqKioqKioqKioqKioqKi9cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogbWF4KDMzMHB4LCA1JSk7XFxyXFxufVxcclxcbi5wcmVzZW50YXRpb24tY2FyZCBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIC50ZXh0IHAge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uY2FsbC10by1hY3Rpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogZm9vdGVyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XFxyXFxuICBib3gtc2hhZG93OiAjZmY3MzAwOTggMXB4IDFweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqIG1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMC42ZnIpKTtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAycztcXHJcXG59XFxyXFxuLmNhcmQge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1OSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM2NjtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDI1MG1zO1xcclxcbn1cXHJcXG4uY2FyZCBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcbi5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMjQlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogY29udGFjdCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLmNvbnRhY3QtY2FyZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG4ucGhvbmUsXFxyXFxuLmxvY2F0aW9uLFxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4ubG9jYXRpb24taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubG9jYXRpb24taW1nIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqIG1lZGlhIHF1ZXJ5ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnByZXNlbnRhdGlvbi1jYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2NhdGlvbkltZ1NyYyBmcm9tIFwiLi9sb2NhdGlvbi5wbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY29udGVudCwgbWFpbkNvbnRhaW5lciB9IGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjb250YWN0Q2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjYXJkID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNhcmRzQ2xhc3NlcyA9IFtcInBob25lXCIsIFwibG9jYXRpb25cIiwgXCJsb2NhdGlvbi1pbWdcIl07XHJcbiAgICBjb25zdCBjYXJkc0NvbnRlbnQgPSBbXHJcbiAgICAgICAgXCLimI4gOTk5IDk5OSA5OTlcIixcclxuICAgICAgICBcIvCfl7rvuI8gVHVjc29uLCBBcml6b25hLCBVbml0ZWQgU3RhdGVzXCIsXHJcbiAgICAgICAgXCJcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNhcmRcIik7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNhcmRbaV0uY2xhc3NMaXN0LmFkZChgJHtjYXJkc0NsYXNzZXNbaV19YCk7XHJcbiAgICAgICAgY29udGFjdENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFtpXSk7XHJcbiAgICAgICAgY2FyZFtpXS50ZXh0Q29udGVudCA9IGAke2NhcmRzQ29udGVudFtpXX1gO1xyXG4gICAgfVxyXG4gICAgbG9jYXRpb25JbWcuc3JjID0gbG9jYXRpb25JbWdTcmM7XHJcbiAgICBjYXJkWzJdLmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNvbnRlbnQgfSBmcm9tIFwiLi9pbml0aWFsUGFnZUxvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBmb290ZXJMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjb25zdCBmb250QXdlc29tZSA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGZvbnRBd2Vzb21lLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XHJcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbW9oYW1lZC0yNC0wMy0yMDIyXCIpO1xyXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcblxyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgTW9oYW1lZC0yNC0wMy0yMDIyIFwiO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xyXG4gICAgZm9vdGVyVGV4dC5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcclxuICAgIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWUpO1xyXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbiIsImltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSBcIi4vbmF2TG9hZGVyLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVQcmVzZW50YXRpb24gZnJvbSBcIi4vcHJlc2VudGF0aW9uTG9hZGVyLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVMb2FkZXIuanNcIjtcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdExvYWRlci5qc1wiO1xyXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlckxvYWRlci5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjb250ZW50LCBtYWluQ29udGFpbmVyIH07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNyZWF0ZU5hdkJhcigpO1xyXG4gICAgY3JlYXRlUHJlc2VudGF0aW9uKCk7XHJcbiAgICBjcmVhdGVNZW51KCk7XHJcbiAgICBjcmVhdGVDb250YWN0KCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgd2luZTEgZnJvbSBcIi4vd2luZTEucG5nXCI7XHJcbmltcG9ydCB3aW5lMiBmcm9tIFwiLi93aW5lMi5wbmdcIjtcclxuaW1wb3J0IHdpbmUzIGZyb20gXCIuL3dpbmUzLnBuZ1wiO1xyXG5pbXBvcnQgd2luZTQgZnJvbSBcIi4vd2luZTQucG5nXCI7XHJcbmltcG9ydCB3aW5lNSBmcm9tIFwiLi93aW5lNS5wbmdcIjtcclxuaW1wb3J0IHdpbmU2IGZyb20gXCIuL3dpbmU2LnBuZ1wiO1xyXG5pbXBvcnQgd2luZTcgZnJvbSBcIi4vd2luZTcucG5nXCI7XHJcbmltcG9ydCB3aW5lOCBmcm9tIFwiLi93aW5lOC5wbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY29udGVudCwgbWFpbkNvbnRhaW5lciB9IGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZW51Q2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZENvbnRhaW5lcik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgICBtZW51Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBjb25zdCB3aW5lTmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IHdpbmVOYW1lcyA9IFtcclxuICAgICAgICAgICAgXCJFc3RyZWxsYSBSaXZlciBQcm9wcmlldG9yJ3MgUmVzZXJ2ZSBNZXJsb3RcIixcclxuICAgICAgICAgICAgXCJTaWVycmEgU2FsaW5hcyBNaXJhXCIsXHJcbiAgICAgICAgICAgIFwiQ2hhdGVhdSBTb3V2ZXJhaW4gTWVybG90XCIsXHJcbiAgICAgICAgICAgIFwiRXN0cmVsbGEgUml2ZXIgUHJvcHJpZXRvcidzIFJlc2VydmUgQ2FiZXJuZXQgU2F1dmlnbm9uXCIsXHJcbiAgICAgICAgICAgIFwiMTQgSGFuZHMgQ2FiZXJuZXQgU2F1dmlnbm9uXCIsXHJcbiAgICAgICAgICAgIFwiTW9udGVzIE1hbGJlYyAoQ2xhc3NpYylcIixcclxuICAgICAgICAgICAgXCJGaW5jYSBEZWNlcm8gUmVtb2xpbm9zIFZpbmV5YXJkIE1hbGJlY1wiLFxyXG4gICAgICAgICAgICBcIldpbmVzIGZyb20gSGFobiBFc3RhdGUgUGlub3QgTm9pclwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgd2luZU5hbWUudGV4dENvbnRlbnQgPSB3aW5lTmFtZXNbaSAtIDFdO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQod2luZU5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IFt3aW5lMSwgd2luZTIsIHdpbmUzLCB3aW5lNCwgd2luZTUsIHdpbmU2LCB3aW5lNywgd2luZThdO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZXNbaSAtIDFdO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNvbnRlbnQgfSBmcm9tIFwiLi9pbml0aWFsUGFnZUxvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwibGlcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImxpXCIpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGxpc3RJdGVtc0xpbmtzID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgXTtcclxuXHJcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1zW2ldKTtcclxuICAgICAgICBsaXN0SXRlbXNbaV0uYXBwZW5kQ2hpbGQobGlzdEl0ZW1zTGlua3NbaV0pO1xyXG4gICAgICAgIGxpc3RJdGVtc0xpbmtzW2ldLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIgXCIpO1xyXG4gICAgICAgIGxpc3RJdGVtc0xpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAycHggI2ZmZmZmZjAwXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsaXN0SXRlbXNbaV0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAycHggI2ZmZmZmZlwiO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJSZWQgSG91c2VcIjtcclxuICAgIGxpc3RJdGVtc0xpbmtzWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBsaXN0SXRlbXNMaW5rc1sxXS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbGlzdEl0ZW1zTGlua3NbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbn07IiwiaW1wb3J0IHdpbmVXYWl0ZXIgZnJvbSBcIi4vd2luZVdhaXRlci5wbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY29udGVudCwgbWFpbkNvbnRhaW5lciB9IGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dHMgPSBbY3JlYXRlRWxlbWVudChcInBcIiksIGNyZWF0ZUVsZW1lbnQoXCJwXCIpXTtcclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IGFjdGlvbkNhbGxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYWN0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByZXNlbnRhdGlvbi1jYXJkXCIpO1xyXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLWNvbnRhaW5lclwiKTtcclxuICAgIGFjdGlvbkNhbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhbGwtdG8tYWN0aW9uXCIpO1xyXG5cclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xyXG4gICAgdGV4dHMuZm9yRWFjaCgodGV4dCkgPT4gdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KSk7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XHJcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQ2FsbENvbnRhaW5lcik7XHJcbiAgICBhY3Rpb25DYWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvblRleHQpO1xyXG5cclxuICAgIHRleHRzWzBdLnRleHRDb250ZW50ID0gXCJCZXN0IHJlZCB3aW5lIGluIHRoZSBjb3VudHJ5XCI7XHJcbiAgICB0ZXh0c1sxXS50ZXh0Q29udGVudCA9IFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTg3OFwiO1xyXG4gICAgaW1nLnNyYyA9IHdpbmVXYWl0ZXI7XHJcbiAgICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXMhXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGluaXRpYWxMb2FkZXIgZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXIuanNcIjtcclxuXHJcbmluaXRpYWxMb2FkZXIoKTtcclxuXHJcblxyXG5jb25zdCBzd2l0Y2hQYWdlcyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgY29uc3QgcHJlc2VudGF0aW9uQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlc2VudGF0aW9uLWNhcmRcIik7XHJcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jYXJkXCIpO1xyXG4gICAgY29uc3QgY29udGFjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY2FyZFwiKTtcclxuXHJcbiAgICAvLyByZW1vdmUgbWVudSBhbmQgY29udGFjdCBjYXJkcyBmcm9tIHRodyBmbG93XHJcbiAgICBtZW51Q2FyZC5yZW1vdmUoKTtcclxuICAgIGNvbnRhY3RDYXJkLnJlbW92ZSgpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBhXCIpO1xyXG4gICAgY29uc3QgaG9tZUxpbmsgPSBsaW5rc1swXTtcclxuICAgIGNvbnN0IG1lbnVMaW5rID0gbGlua3NbMV07XHJcbiAgICBjb25zdCBjb250YWN0TGluayA9IGxpbmtzWzJdO1xyXG5cclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyByZW1vdmUgbWVudUNhcmRcclxuICAgICAgICBtZW51Q2FyZC5yZW1vdmUoKVxyXG4gICAgICAgIC8vIHJlbW92ZSBjb250YWN0Q2FyZFxyXG4gICAgICAgIGNvbnRhY3RDYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gYWRkIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNlbnRhdGlvbkNhcmQpO1xyXG4gICAgfSk7XHJcbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gcmVtb3ZlIGNvbnRhY3RDYXJkXHJcbiAgICAgICAgY29udGFjdENhcmQucmVtb3ZlKClcclxuICAgICAgICAvLyBhZGQgbWVudUNhcmRcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkKTtcclxuICAgIH0pO1xyXG4gICAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBwcmVzZW50YXRpb25DYXJkXHJcbiAgICAgICAgcHJlc2VudGF0aW9uQ2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAvLyByZW1vdmUgbWVudUNhcmRcclxuICAgICAgICBtZW51Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAvLyBhZGQgY29udGFjdENhcmRcclxuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQoY29udGFjdENhcmQpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==