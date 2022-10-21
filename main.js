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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Ananda Black';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Ananda Black'), url('https://fonts.cdnfonts.com/s/43086/AnandaBlack-WRJO.woff') format('woff');\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n#content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n/******************* CSS animation ******************/\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #040404;\r\n  text-shadow: -1px 1px 5px #ff0000;\r\n  scale: 1.1;\r\n  user-select: none;\r\n  width: max-content;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n  gap: 5px;\r\n  width: 300px;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n  border-bottom: solid 2px #ffffff00;\r\n  text-shadow: 0px 0px 2px #ffffff;\r\n  transition: ease-in-out 200ms;\r\n  cursor: pointer;\r\n}\r\nli:hover {\r\n  transform: translateY(-5px);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/**************** main ****************/\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: min(700px, 80%);\r\n  min-height: 600px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 2s;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n\r\n/*********************** contact ***************************/\r\n.contact-card {\r\n  text-align: left;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.phone,\r\n.location,\r\n.location-img {\r\n  padding: 15px 0;\r\n  cursor: default;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,0GAA0G;AAC5G;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,qCAAqC;EACrC,yDAAyC;EACzC,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,SAAS;AACX;AACA,qDAAqD;AACrD;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA,kDAAkD;AAClD;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,uCAAuC;EACvC,eAAe;EACf,cAAc;EACd,iCAAiC;EACjC,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,QAAQ;EACR,YAAY;AACd;AACA;EACE,2BAA2B;EAC3B,kCAAkC;EAClC,gCAAgC;EAChC,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA,uCAAuC;AACvC;EACE,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,+CAA+C;AAC/C;EACE,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,yDAAyD;AACzD;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA,uDAAuD;AACvD;EACE,aAAa;EACb,6DAA6D;EAC7D,SAAS;EACT,uBAAuB;EACvB,6BAA6B;EAC7B,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;AACpC;AACA;EACE,2BAA2B;EAC3B,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,4DAA4D;AAC5D;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;;;EAGE,eAAe;EACf,eAAe;AACjB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA,gEAAgE;AAChE;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@font-face {\r\n  font-family: 'Ananda Black';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Ananda Black'), url('https://fonts.cdnfonts.com/s/43086/AnandaBlack-WRJO.woff') format('woff');\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(\"./background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n#content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n/******************* CSS animation ******************/\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #040404;\r\n  text-shadow: -1px 1px 5px #ff0000;\r\n  scale: 1.1;\r\n  user-select: none;\r\n  width: max-content;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n  gap: 5px;\r\n  width: 300px;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n  border-bottom: solid 2px #ffffff00;\r\n  text-shadow: 0px 0px 2px #ffffff;\r\n  transition: ease-in-out 200ms;\r\n  cursor: pointer;\r\n}\r\nli:hover {\r\n  transform: translateY(-5px);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/**************** main ****************/\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: min(700px, 80%);\r\n  min-height: 600px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 2s;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n\r\n/*********************** contact ***************************/\r\n.contact-card {\r\n  text-align: left;\r\n  transition: ease-in-out 500ms;\r\n  animation: fadeIn 1.5s;\r\n}\r\n.phone,\r\n.location,\r\n.location-img {\r\n  padding: 15px 0;\r\n  cursor: default;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

        listItems[i].addEventListener("click", () => {
            listItems.forEach(item => item.style.borderBottom = "solid 2px #ffffff00");
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

    const links = document.querySelectorAll("nav li");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFDbkQ7QUFDQTtBQUNBLGlFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0TG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxQYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51TG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3ByZXNlbnRhdGlvbkxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0FuYW5kYSBCbGFjayc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgc3JjOiBsb2NhbCgnQW5hbmRhIEJsYWNrJyksIHVybCgnaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vcy80MzA4Ni9BbmFuZGFCbGFjay1XUkpPLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBjb2xvcjogI2ZmZmZmZmQ4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGdhcDogNjBweDtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKiogQ1NTIGFuaW1hdGlvbiAqKioqKioqKioqKioqKioqKiovXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZjczMDA5OCAtMXB4IC0xcHggNHB4O1xcclxcbn1cXHJcXG5uYXYgLmxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmFuZGEgQmxhY2tcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2M3B4O1xcclxcbiAgY29sb3I6ICMwNDA0MDQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAxcHggNXB4ICNmZjAwMDA7XFxyXFxuICBzY2FsZTogMS4xO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IG1pbigzMHB4LCA1JSk7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZmZmZjAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAyMDBtcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxubGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiogbWFpbiAqKioqKioqKioqKioqKioqL1xcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNlYjAwMDA3NSAwcHggMHB4IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgd2lkdGg6IG1pbig3MDBweCwgODAlKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBwcmVzZW50YXRpb24gKioqKioqKioqKioqKioqKi9cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogbWF4KDMzMHB4LCA1JSk7XFxyXFxufVxcclxcbi5wcmVzZW50YXRpb24tY2FyZCBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIC50ZXh0IHAge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uY2FsbC10by1hY3Rpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogZm9vdGVyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XFxyXFxuICBib3gtc2hhZG93OiAjZmY3MzAwOTggMXB4IDFweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqIG1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMC42ZnIpKTtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAycztcXHJcXG59XFxyXFxuLmNhcmQge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1OSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM2NjtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDI1MG1zO1xcclxcbn1cXHJcXG4uY2FyZCBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcbi5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMjQlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogY29udGFjdCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLmNvbnRhY3QtY2FyZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG4ucGhvbmUsXFxyXFxuLmxvY2F0aW9uLFxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4ubG9jYXRpb24taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubG9jYXRpb24taW1nIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqIG1lZGlhIHF1ZXJ5ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnByZXNlbnRhdGlvbi1jYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBHQUEwRztBQUM1Rzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMseURBQXlDO0VBQ3pDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBLHFEQUFxRDtBQUNyRDtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsa0RBQWtEO0FBQ2xEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBLCtDQUErQztBQUMvQztFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseURBQXlEO0FBQ3pEO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixpQ0FBaUM7QUFDbkM7O0FBRUEsdURBQXVEO0FBQ3ZEO0VBQ0UsYUFBYTtFQUNiLDZEQUE2RDtFQUM3RCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLDREQUE0RDtBQUM1RDtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCO0FBQ0E7OztFQUdFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGdFQUFnRTtBQUNoRTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBbmFuZGEgQmxhY2snO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ0FuYW5kYSBCbGFjaycpLCB1cmwoJ2h0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL3MvNDMwODYvQW5hbmRhQmxhY2stV1JKTy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYmFja2dyb3VuZC5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmZDg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZ2FwOiA2MHB4O1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKiBDU1MgYW5pbWF0aW9uICoqKioqKioqKioqKioqKioqKi9cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ0O1xcclxcbiAgYm94LXNoYWRvdzogI2ZmNzMwMDk4IC0xcHggLTFweCA0cHg7XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuYW5kYSBCbGFja1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDYzcHg7XFxyXFxuICBjb2xvcjogIzA0MDQwNDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDFweCA1cHggI2ZmMDAwMDtcXHJcXG4gIHNjYWxlOiAxLjE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggbWluKDMwcHgsIDUlKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmZmZmZmMDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZmZmZjtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDIwMG1zO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5saTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBtYWluICoqKioqKioqKioqKioqKiovXFxyXFxuLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk5O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogI2ViMDAwMDc1IDBweCAwcHggMTBweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICB3aWR0aDogbWluKDcwMHB4LCA4MCUpO1xcclxcbiAgbWluLWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqIHByZXNlbnRhdGlvbiAqKioqKioqKioqKioqKioqL1xcclxcbi5wcmVzZW50YXRpb24tY2FyZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDUwMG1zO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiBtYXgoMzMwcHgsIDUlKTtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQgLnRleHQgcCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5jYWxsLXRvLWFjdGlvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiBmb290ZXIgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZjczMDA5OCAxcHggMXB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogbWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAwLjZmcikpO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDJzO1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MzY2O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMjUwbXM7XFxyXFxufVxcclxcbi5jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKiBjb250YWN0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uY29udGFjdC1jYXJkIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcbi5waG9uZSxcXHJcXG4ubG9jYXRpb24sXFxyXFxuLmxvY2F0aW9uLWltZyB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogbWVkaWEgcXVlcnkgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAucHJlc2VudGF0aW9uLWNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvY2F0aW9uSW1nU3JjIGZyb20gXCIuL2xvY2F0aW9uLnBuZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjb250ZW50LCBtYWluQ29udGFpbmVyIH0gZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RDYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNhcmQgPSBbXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY2FyZHNDbGFzc2VzID0gW1wicGhvbmVcIiwgXCJsb2NhdGlvblwiLCBcImxvY2F0aW9uLWltZ1wiXTtcclxuICAgIGNvbnN0IGNhcmRzQ29udGVudCA9IFtcclxuICAgICAgICBcIuKYjiA5OTkgOTk5IDk5OVwiLFxyXG4gICAgICAgIFwi8J+Xuu+4jyBUdWNzb24sIEFyaXpvbmEsIFVuaXRlZCBTdGF0ZXNcIixcclxuICAgICAgICBcIlwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW1nID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgY29udGFjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZFwiKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRDb250YWluZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY2FyZFtpXS5jbGFzc0xpc3QuYWRkKGAke2NhcmRzQ2xhc3Nlc1tpXX1gKTtcclxuICAgICAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkW2ldKTtcclxuICAgICAgICBjYXJkW2ldLnRleHRDb250ZW50ID0gYCR7Y2FyZHNDb250ZW50W2ldfWA7XHJcbiAgICB9XHJcbiAgICBsb2NhdGlvbkltZy5zcmMgPSBsb2NhdGlvbkltZ1NyYztcclxuICAgIGNhcmRbMl0uYXBwZW5kQ2hpbGQobG9jYXRpb25JbWcpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY29udGVudCB9IGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGNvbnN0IGZvbnRBd2Vzb21lID0gY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItY29udGFpbmVyXCIpO1xyXG4gICAgZm9udEF3ZXNvbWUuY2xhc3NMaXN0LmFkZChcImZhYlwiLCBcImZhLWdpdGh1YlwiKTtcclxuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9tb2hhbWVkLTI0LTAzLTIwMjJcIik7XHJcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuXHJcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMiBNb2hhbWVkLTI0LTAzLTIwMjIgXCI7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcbiAgICBmb290ZXJUZXh0LmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xyXG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb250QXdlc29tZSk7XHJcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IGNyZWF0ZU5hdkJhciBmcm9tIFwiLi9uYXZMb2FkZXIuanNcIjtcclxuaW1wb3J0IGNyZWF0ZVByZXNlbnRhdGlvbiBmcm9tIFwiLi9wcmVzZW50YXRpb25Mb2FkZXIuanNcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudUxvYWRlci5qc1wiO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0TG9hZGVyLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyTG9hZGVyLmpzXCI7XHJcblxyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50KSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5jb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNvbnRlbnQsIG1haW5Db250YWluZXIgfTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY3JlYXRlTmF2QmFyKCk7XHJcbiAgICBjcmVhdGVQcmVzZW50YXRpb24oKTtcclxuICAgIGNyZWF0ZU1lbnUoKTtcclxuICAgIGNyZWF0ZUNvbnRhY3QoKTtcclxuICAgIGNyZWF0ZUZvb3RlcigpO1xyXG59XHJcbiIsImltcG9ydCB3aW5lMSBmcm9tIFwiLi93aW5lMS5wbmdcIjtcclxuaW1wb3J0IHdpbmUyIGZyb20gXCIuL3dpbmUyLnBuZ1wiO1xyXG5pbXBvcnQgd2luZTMgZnJvbSBcIi4vd2luZTMucG5nXCI7XHJcbmltcG9ydCB3aW5lNCBmcm9tIFwiLi93aW5lNC5wbmdcIjtcclxuaW1wb3J0IHdpbmU1IGZyb20gXCIuL3dpbmU1LnBuZ1wiO1xyXG5pbXBvcnQgd2luZTYgZnJvbSBcIi4vd2luZTYucG5nXCI7XHJcbmltcG9ydCB3aW5lNyBmcm9tIFwiLi93aW5lNy5wbmdcIjtcclxuaW1wb3J0IHdpbmU4IGZyb20gXCIuL3dpbmU4LnBuZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjb250ZW50LCBtYWluQ29udGFpbmVyIH0gZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lbnVDYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgIG1lbnVDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGNvbnN0IHdpbmVOYW1lID0gY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3Qgd2luZU5hbWVzID0gW1xyXG4gICAgICAgICAgICBcIkVzdHJlbGxhIFJpdmVyIFByb3ByaWV0b3IncyBSZXNlcnZlIE1lcmxvdFwiLFxyXG4gICAgICAgICAgICBcIlNpZXJyYSBTYWxpbmFzIE1pcmFcIixcclxuICAgICAgICAgICAgXCJDaGF0ZWF1IFNvdXZlcmFpbiBNZXJsb3RcIixcclxuICAgICAgICAgICAgXCJFc3RyZWxsYSBSaXZlciBQcm9wcmlldG9yJ3MgUmVzZXJ2ZSBDYWJlcm5ldCBTYXV2aWdub25cIixcclxuICAgICAgICAgICAgXCIxNCBIYW5kcyBDYWJlcm5ldCBTYXV2aWdub25cIixcclxuICAgICAgICAgICAgXCJNb250ZXMgTWFsYmVjIChDbGFzc2ljKVwiLFxyXG4gICAgICAgICAgICBcIkZpbmNhIERlY2VybyBSZW1vbGlub3MgVmluZXlhcmQgTWFsYmVjXCIsXHJcbiAgICAgICAgICAgIFwiV2luZXMgZnJvbSBIYWhuIEVzdGF0ZSBQaW5vdCBOb2lyXCIsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB3aW5lTmFtZS50ZXh0Q29udGVudCA9IHdpbmVOYW1lc1tpIC0gMV07XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh3aW5lTmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW3dpbmUxLCB3aW5lMiwgd2luZTMsIHdpbmU0LCB3aW5lNSwgd2luZTYsIHdpbmU3LCB3aW5lOF07XHJcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlc1tpIC0gMV07XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgfVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY29udGVudCB9IGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBbXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImxpXCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwibGlcIiksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zTGlua3MgPSBbXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImFcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImFcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImFcIiksXHJcbiAgICBdO1xyXG5cclxuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbXNbaV0pO1xyXG4gICAgICAgIGxpc3RJdGVtc1tpXS5hcHBlbmRDaGlsZChsaXN0SXRlbXNMaW5rc1tpXSk7XHJcbiAgICAgICAgbGlzdEl0ZW1zTGlua3NbaV0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiBcIik7XHJcblxyXG4gICAgICAgIGxpc3RJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAycHggI2ZmZmZmZjAwXCIpO1xyXG4gICAgICAgICAgICBsaXN0SXRlbXNbaV0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAycHggI2ZmZmZmZlwiO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJSZWQgSG91c2VcIjtcclxuICAgIGxpc3RJdGVtc0xpbmtzWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBsaXN0SXRlbXNMaW5rc1sxXS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbGlzdEl0ZW1zTGlua3NbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbn07IiwiaW1wb3J0IHdpbmVXYWl0ZXIgZnJvbSBcIi4vd2luZVdhaXRlci5wbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY29udGVudCwgbWFpbkNvbnRhaW5lciB9IGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dHMgPSBbY3JlYXRlRWxlbWVudChcInBcIiksIGNyZWF0ZUVsZW1lbnQoXCJwXCIpXTtcclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IGFjdGlvbkNhbGxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYWN0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByZXNlbnRhdGlvbi1jYXJkXCIpO1xyXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW1nLWNvbnRhaW5lclwiKTtcclxuICAgIGFjdGlvbkNhbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhbGwtdG8tYWN0aW9uXCIpO1xyXG5cclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xyXG4gICAgdGV4dHMuZm9yRWFjaCgodGV4dCkgPT4gdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KSk7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XHJcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQ2FsbENvbnRhaW5lcik7XHJcbiAgICBhY3Rpb25DYWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvblRleHQpO1xyXG5cclxuICAgIHRleHRzWzBdLnRleHRDb250ZW50ID0gXCJCZXN0IHJlZCB3aW5lIGluIHRoZSBjb3VudHJ5XCI7XHJcbiAgICB0ZXh0c1sxXS50ZXh0Q29udGVudCA9IFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTg3OFwiO1xyXG4gICAgaW1nLnNyYyA9IHdpbmVXYWl0ZXI7XHJcbiAgICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXMhXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGluaXRpYWxMb2FkZXIgZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXIuanNcIjtcclxuXHJcblxyXG5pbml0aWFsTG9hZGVyKCk7XHJcbmNvbnN0IHN3aXRjaFBhZ2VzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBjb25zdCBwcmVzZW50YXRpb25DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzZW50YXRpb24tY2FyZFwiKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNhcmRcIik7XHJcbiAgICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jYXJkXCIpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBtZW51IGFuZCBjb250YWN0IGNhcmRzIGZyb20gdGh3IGZsb3dcclxuICAgIG1lbnVDYXJkLnJlbW92ZSgpO1xyXG4gICAgY29udGFjdENhcmQucmVtb3ZlKCk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGxpXCIpO1xyXG4gICAgY29uc3QgaG9tZUxpbmsgPSBsaW5rc1swXTtcclxuICAgIGNvbnN0IG1lbnVMaW5rID0gbGlua3NbMV07XHJcbiAgICBjb25zdCBjb250YWN0TGluayA9IGxpbmtzWzJdO1xyXG5cclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyByZW1vdmUgbWVudUNhcmRcclxuICAgICAgICBtZW51Q2FyZC5yZW1vdmUoKVxyXG4gICAgICAgIC8vIHJlbW92ZSBjb250YWN0Q2FyZFxyXG4gICAgICAgIGNvbnRhY3RDYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gYWRkIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNlbnRhdGlvbkNhcmQpO1xyXG4gICAgfSk7XHJcbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gcmVtb3ZlIGNvbnRhY3RDYXJkXHJcbiAgICAgICAgY29udGFjdENhcmQucmVtb3ZlKClcclxuICAgICAgICAvLyBhZGQgbWVudUNhcmRcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkKTtcclxuICAgIH0pO1xyXG4gICAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBwcmVzZW50YXRpb25DYXJkXHJcbiAgICAgICAgcHJlc2VudGF0aW9uQ2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAvLyByZW1vdmUgbWVudUNhcmRcclxuICAgICAgICBtZW51Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAvLyBhZGQgY29udGFjdENhcmRcclxuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQoY29udGFjdENhcmQpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==