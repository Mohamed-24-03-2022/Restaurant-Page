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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  text-align: center;\r\n  \r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda\", sans-serif;\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #000000;\r\n  text-shadow: 0px 0px 5px #ff1000;\r\n  user-select: none;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/**************** main ****************/\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: max(400px, 50%);\r\n  min-height: 500px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n}\r\n.img-container  {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n/*********************** contact ***************************/\r\n.contact-card {\r\ntext-align: left;\r\ntransition: ease-in-out 500ms;\r\n}\r\n.phone, .location, .location-img {\r\n  padding: 15px 0;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,qCAAqC;EACrC,yDAAyC;EACzC,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;;AAEpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,SAAS;AACX;;AAEA,kDAAkD;AAClD;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,iCAAiC;EACjC,uCAAuC;EACvC,eAAe;EACf,cAAc;EACd,gCAAgC;EAChC,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,uCAAuC;AACvC;EACE,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,+CAA+C;AAC/C;EACE,WAAW;EACX,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA,yDAAyD;AACzD;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA,uDAAuD;AACvD;EACE,aAAa;EACb,6DAA6D;EAC7D,SAAS;EACT,uBAAuB;EACvB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,kCAAkC;AACpC;AACA;EACE,2BAA2B;EAC3B,6BAA6B;;AAE/B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA,4DAA4D;AAC5D;AACA,gBAAgB;AAChB,6BAA6B;AAC7B;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA,gEAAgE;AAChE;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"http://fonts.cdnfonts.com/css/ananda-2\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  background-image: url(\"./background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #ffffffd8;\r\n  text-align: center;\r\n  \r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: max-content;\r\n  gap: 60px;\r\n}\r\n\r\n/*************************************************/\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding: 30px;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 -1px -1px 4px;\r\n}\r\nnav .logo {\r\n  font-family: \"Ananda\", sans-serif;\r\n  font-family: \"Ananda Black\", sans-serif;\r\n  font-size: 63px;\r\n  color: #000000;\r\n  text-shadow: 0px 0px 5px #ff1000;\r\n  user-select: none;\r\n}\r\nnav ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  list-style: none;\r\n}\r\nnav ul li {\r\n  padding: 20px min(30px, 5%);\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/**************** main ****************/\r\n.main {\r\n  background-color: #00000099;\r\n  font-size: 20px;\r\n  box-shadow: #eb000075 0px 0px 10px;\r\n  padding: 30px;\r\n  width: max(400px, 50%);\r\n  min-height: 500px;\r\n}\r\n\r\n/**************** presentation ****************/\r\n.presentation-card {\r\n  width: 100%;\r\n  transition: ease-in-out 500ms;\r\n}\r\n.img-container  {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.img-container img {\r\n  width: max(330px, 5%);\r\n}\r\n.presentation-card div {\r\n  padding: 10px;\r\n}\r\n.presentation-card .text p {\r\n  padding: 5px;\r\n}\r\n.call-to-action p {\r\n  font-size: 26px;\r\n  color: #ffffff;\r\n}\r\n/********************** footer **************************/\r\nfooter {\r\n  width: 100%;\r\n  margin-top: auto;\r\n  padding: 25px;\r\n  font-weight: bold;\r\n  background-color: #000000d4;\r\n  box-shadow: #ff730098 1px 1px 4px;\r\n}\r\n\r\n/********************** menu **************************/\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 0.6fr));\r\n  gap: 50px;\r\n  justify-content: center;\r\n  transition: ease-in-out 500ms;\r\n}\r\n.card {\r\n  padding: 15px;\r\n  background-color: #000000af;\r\n  cursor: pointer;\r\n  box-shadow: #00000059 0px 5px 15px;\r\n}\r\n.card:hover {\r\n  background-color: #63636366;\r\n  transition: ease-in-out 250ms;\r\n\r\n}\r\n.card p {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  height: 80px;\r\n}\r\n.card img {\r\n  width: 24%;\r\n}\r\n/*********************** contact ***************************/\r\n.contact-card {\r\ntext-align: left;\r\ntransition: ease-in-out 500ms;\r\n}\r\n.phone, .location, .location-img {\r\n  padding: 15px 0;\r\n}\r\n.location-img {\r\n  width: 100%;\r\n}\r\n.location-img img {\r\n  width: 100%;\r\n}\r\n/*********************** media query ***************************/\r\n@media only screen and (max-width: 498px) {\r\n  .main {\r\n    width: 100%;\r\n  }\r\n  .presentation-card img {\r\n    width: 280px;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

    footer.appendChild(footerContainer);
    footerContainer.appendChild(footerText);
    footerText.appendChild(footerLink);
    footerLink.appendChild(fontAwesome);

    footerText.textContent = "Copyright © 2022 Mohamed-24-03-2022 ";

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
        // add presentationCard
        setTimeout(() => (presentationCard.style.opacity = "1"), 100);
        mainContainer.appendChild(presentationCard);
        // remove menuCard
        menuCard.style.opacity = "0";
        setTimeout(() => menuCard.remove(), 100);
        // remove contactCard
        contactCard.style.opacity = "0";
        setTimeout(() => contactCard.remove(), 100);
    });
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        setTimeout(() => presentationCard.remove(), 100);
        // add menuCard
        setTimeout(() => (menuCard.style.opacity = "1"), 100);
        mainContainer.appendChild(menuCard);
        // remove contactCard
        contactCard.style.opacity = "0";
        setTimeout(() => contactCard.remove(), 100);
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        setTimeout(() => presentationCard.remove(), 100);
        // remove menuCard
        menuCard.style.opacity = "0";
        setTimeout(() => menuCard.remove(), 100);
        // add contactCard
        setTimeout(() => (contactCard.style.opacity = "1"), 100);
        mainContainer.appendChild(contactCard);
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvYW5hbmRhLTIpO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBjb2xvcjogI2ZmZmZmZmQ4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgXFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZ2FwOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XFxyXFxuICBib3gtc2hhZG93OiAjZmY3MzAwOTggLTFweCAtMXB4IDRweDtcXHJcXG59XFxyXFxubmF2IC5sb2dvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5hbmRhXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5hbmRhIEJsYWNrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNjNweDtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICNmZjEwMDA7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IG1pbigzMHB4LCA1JSk7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqIG1haW4gKioqKioqKioqKioqKioqKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiAjZWIwMDAwNzUgMHB4IDBweCAxMHB4O1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIHdpZHRoOiBtYXgoNDAwcHgsIDUwJSk7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiogcHJlc2VudGF0aW9uICoqKioqKioqKioqKioqKiovXFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyICB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IG1heCgzMzBweCwgNSUpO1xcclxcbn1cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQgZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5wcmVzZW50YXRpb24tY2FyZCAudGV4dCBwIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLmNhbGwtdG8tYWN0aW9uIHAge1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqIGZvb3RlciAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ0O1xcclxcbiAgYm94LXNoYWRvdzogI2ZmNzMwMDk4IDFweCAxcHggNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiBtZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5tZW51LWNhcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDAuNmZyKSk7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDUwMG1zO1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MzY2O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMjUwbXM7XFxyXFxuXFxyXFxufVxcclxcbi5jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKiBjb250YWN0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uY29udGFjdC1jYXJkIHtcXHJcXG50ZXh0LWFsaWduOiBsZWZ0O1xcclxcbnRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDUwMG1zO1xcclxcbn1cXHJcXG4ucGhvbmUsIC5sb2NhdGlvbiwgLmxvY2F0aW9uLWltZyB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5sb2NhdGlvbi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKiogbWVkaWEgcXVlcnkgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAucHJlc2VudGF0aW9uLWNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyx5REFBeUM7RUFDekMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQSx5REFBeUQ7QUFDekQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQSx1REFBdUQ7QUFDdkQ7RUFDRSxhQUFhO0VBQ2IsNkRBQTZEO0VBQzdELFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7O0FBRS9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBLGdFQUFnRTtBQUNoRTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9hbmFuZGEtMlxcXCIpO1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYmFja2dyb3VuZC5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmZDg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBnYXA6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkNDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZjczMDA5OCAtMXB4IC0xcHggNHB4O1xcclxcbn1cXHJcXG5uYXYgLmxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmFuZGFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmFuZGEgQmxhY2tcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2M3B4O1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggI2ZmMTAwMDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggbWluKDMwcHgsIDUlKTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiogbWFpbiAqKioqKioqKioqKioqKioqL1xcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNlYjAwMDA3NSAwcHggMHB4IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgd2lkdGg6IG1heCg0MDBweCwgNTAlKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKiBwcmVzZW50YXRpb24gKioqKioqKioqKioqKioqKi9cXHJcXG4ucHJlc2VudGF0aW9uLWNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA1MDBtcztcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXIgIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogbWF4KDMzMHB4LCA1JSk7XFxyXFxufVxcclxcbi5wcmVzZW50YXRpb24tY2FyZCBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnByZXNlbnRhdGlvbi1jYXJkIC50ZXh0IHAge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uY2FsbC10by1hY3Rpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKiogZm9vdGVyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XFxyXFxuICBib3gtc2hhZG93OiAjZmY3MzAwOTggMXB4IDFweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqIG1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMC42ZnIpKTtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYWY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAjMDAwMDAwNTkgMHB4IDVweCAxNXB4O1xcclxcbn1cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MzYzNjY7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAyNTBtcztcXHJcXG5cXHJcXG59XFxyXFxuLmNhcmQgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG4uY2FyZCBpbWcge1xcclxcbiAgd2lkdGg6IDI0JTtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqIGNvbnRhY3QgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5jb250YWN0LWNhcmQge1xcclxcbnRleHQtYWxpZ246IGxlZnQ7XFxyXFxudHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNTAwbXM7XFxyXFxufVxcclxcbi5waG9uZSwgLmxvY2F0aW9uLCAubG9jYXRpb24taW1nIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG59XFxyXFxuLmxvY2F0aW9uLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmxvY2F0aW9uLWltZyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKiBtZWRpYSBxdWVyeSAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OThweCkge1xcclxcbiAgLm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5wcmVzZW50YXRpb24tY2FyZCBpbWcge1xcclxcbiAgICB3aWR0aDogMjgwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgd2luZVdhaXRlciBmcm9tIFwiLi93aW5lV2FpdGVyLnBuZ1wiO1xyXG5pbXBvcnQgd2luZTEgZnJvbSBcIi4vd2luZTEucG5nXCI7XHJcbmltcG9ydCB3aW5lMiBmcm9tIFwiLi93aW5lMi5wbmdcIjtcclxuaW1wb3J0IHdpbmUzIGZyb20gXCIuL3dpbmUzLnBuZ1wiO1xyXG5pbXBvcnQgd2luZTQgZnJvbSBcIi4vd2luZTQucG5nXCI7XHJcbmltcG9ydCB3aW5lNSBmcm9tIFwiLi93aW5lNS5wbmdcIjtcclxuaW1wb3J0IHdpbmU2IGZyb20gXCIuL3dpbmU2LnBuZ1wiO1xyXG5pbXBvcnQgd2luZTcgZnJvbSBcIi4vd2luZTcucG5nXCI7XHJcbmltcG9ydCB3aW5lOCBmcm9tIFwiLi93aW5lOC5wbmdcIjtcclxuaW1wb3J0IGxvY2F0aW9uSW1nU3JjIGZyb20gXCIuL2xvY2F0aW9uLnBuZ1wiO1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwibGlcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImxpXCIpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGxpc3RJdGVtc0xpbmtzID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgXTtcclxuXHJcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1zW2ldKTtcclxuICAgICAgICBsaXN0SXRlbXNbaV0uYXBwZW5kQ2hpbGQobGlzdEl0ZW1zTGlua3NbaV0pO1xyXG4gICAgICAgIGxpc3RJdGVtc0xpbmtzW2ldLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgbG9nb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUmVkIEhvdXNlXCI7XHJcbiAgICBsaXN0SXRlbXNMaW5rc1swXS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbGlzdEl0ZW1zTGlua3NbMV0udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGxpc3RJdGVtc0xpbmtzWzJdLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59O1xyXG5jb25zdCBjcmVhdGVQYWdlQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0cyA9IFtjcmVhdGVFbGVtZW50KFwicFwiKSwgY3JlYXRlRWxlbWVudChcInBcIildO1xyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgYWN0aW9uQ2FsbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBhY3Rpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJlc2VudGF0aW9uLWNhcmRcIik7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctY29udGFpbmVyXCIpO1xyXG4gICAgYWN0aW9uQ2FsbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FsbC10by1hY3Rpb25cIik7XHJcblxyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcbiAgICB0ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25DYWxsQ29udGFpbmVyKTtcclxuICAgIGFjdGlvbkNhbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uVGV4dCk7XHJcblxyXG4gICAgdGV4dHNbMF0udGV4dENvbnRlbnQgPSBcIkJlc3QgcmVkIHdpbmUgaW4gdGhlIGNvdW50cnlcIjtcclxuICAgIHRleHRzWzFdLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxODc4XCI7XHJcbiAgICBpbWcuc3JjID0gd2luZVdhaXRlcjtcclxuICAgIGFjdGlvblRleHQudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBmb290ZXJMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjb25zdCBmb250QXdlc29tZSA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGZvbnRBd2Vzb21lLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XHJcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbW9oYW1lZC0yNC0wMy0yMDIyXCIpO1xyXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcbiAgICBmb290ZXJUZXh0LmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xyXG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb250QXdlc29tZSk7XHJcblxyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgTW9oYW1lZC0yNC0wMy0yMDIyIFwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVDYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUNhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudUNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmRDb250YWluZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgbWVudUNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgY29uc3Qgd2luZU5hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCB3aW5lTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIFwiRXN0cmVsbGEgUml2ZXIgUHJvcHJpZXRvcidzIFJlc2VydmUgTWVybG90XCIsXHJcbiAgICAgICAgICAgIFwiU2llcnJhIFNhbGluYXMgTWlyYVwiLFxyXG4gICAgICAgICAgICBcIkNoYXRlYXUgU291dmVyYWluIE1lcmxvdFwiLFxyXG4gICAgICAgICAgICBcIkVzdHJlbGxhIFJpdmVyIFByb3ByaWV0b3IncyBSZXNlcnZlIENhYmVybmV0IFNhdXZpZ25vblwiLFxyXG4gICAgICAgICAgICBcIjE0IEhhbmRzIENhYmVybmV0IFNhdXZpZ25vblwiLFxyXG4gICAgICAgICAgICBcIk1vbnRlcyBNYWxiZWMgKENsYXNzaWMpXCIsXHJcbiAgICAgICAgICAgIFwiRmluY2EgRGVjZXJvIFJlbW9saW5vcyBWaW5leWFyZCBNYWxiZWNcIixcclxuICAgICAgICAgICAgXCJXaW5lcyBmcm9tIEhhaG4gRXN0YXRlIFBpbm90IE5vaXJcIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIHdpbmVOYW1lLnRleHRDb250ZW50ID0gd2luZU5hbWVzW2kgLSAxXTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdpbmVOYW1lKTtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbd2luZTEsIHdpbmUyLCB3aW5lMywgd2luZTQsIHdpbmU1LCB3aW5lNiwgd2luZTcsIHdpbmU4XTtcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuc3JjID0gaW1hZ2VzW2kgLSAxXTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdENhcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0Q2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjYXJkID0gW1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNhcmRzQ2xhc3NlcyA9IFtcInBob25lXCIsIFwibG9jYXRpb25cIiwgXCJsb2NhdGlvbi1pbWdcIl07XHJcbiAgICBjb25zdCBjYXJkc0NvbnRlbnQgPSBbXHJcbiAgICAgICAgXCLimI4gOTk5IDk5OSA5OTlcIixcclxuICAgICAgICBcIvCfl7rvuI8gVHVjc29uLCBBcml6b25hLCBVbml0ZWQgU3RhdGVzXCIsXHJcbiAgICAgICAgXCJcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNhcmRcIik7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNhcmRbaV0uY2xhc3NMaXN0LmFkZChgJHtjYXJkc0NsYXNzZXNbaV19YCk7XHJcbiAgICAgICAgY29udGFjdENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFtpXSk7XHJcbiAgICAgICAgY2FyZFtpXS50ZXh0Q29udGVudCA9IGAke2NhcmRzQ29udGVudFtpXX1gO1xyXG4gICAgfVxyXG4gICAgbG9jYXRpb25JbWcuc3JjID0gbG9jYXRpb25JbWdTcmM7XHJcbiAgICBjYXJkWzJdLmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZU5hdkJhcixcclxuICAgIGNyZWF0ZVBhZ2VDb250ZW50LFxyXG4gICAgY3JlYXRlRm9vdGVyLFxyXG4gICAgY3JlYXRlTWVudUNhcmQsXHJcbiAgICBjcmVhdGVDb250YWN0Q2FyZCxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVOYXZCYXIsXHJcbiAgICBjcmVhdGVQYWdlQ29udGVudCxcclxuICAgIGNyZWF0ZUZvb3RlcixcclxuICAgIGNyZWF0ZU1lbnVDYXJkLFxyXG4gICAgY3JlYXRlQ29udGFjdENhcmQsXHJcbn0gZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXIuanNcIjtcclxuXHJcbmNyZWF0ZU5hdkJhcigpO1xyXG5jcmVhdGVQYWdlQ29udGVudCgpO1xyXG5jcmVhdGVNZW51Q2FyZCgpO1xyXG5jcmVhdGVDb250YWN0Q2FyZCgpO1xyXG5jcmVhdGVGb290ZXIoKTtcclxuXHJcbmNvbnN0IHN3aXRjaFBhZ2VzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBjb25zdCBwcmVzZW50YXRpb25DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzZW50YXRpb24tY2FyZFwiKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNhcmRcIik7XHJcbiAgICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jYXJkXCIpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBtZW51IGFuZCBjb250YWN0IGNhcmRzIGZyb20gdGh3IGZsb3dcclxuICAgIG1lbnVDYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIG1lbnVDYXJkLnJlbW92ZSgpO1xyXG4gICAgY29udGFjdENhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgY29udGFjdENhcmQucmVtb3ZlKCk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGFcIik7XHJcbiAgICBjb25zdCBob21lTGluayA9IGxpbmtzWzBdO1xyXG4gICAgY29uc3QgbWVudUxpbmsgPSBsaW5rc1sxXTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gbGlua3NbMl07XHJcblxyXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGFkZCBwcmVzZW50YXRpb25DYXJkXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAocHJlc2VudGF0aW9uQ2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCIpLCAxMDApO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJlc2VudGF0aW9uQ2FyZCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG1lbnVDYXJkXHJcbiAgICAgICAgbWVudUNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVudUNhcmQucmVtb3ZlKCksIDEwMCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGNvbnRhY3RDYXJkXHJcbiAgICAgICAgY29udGFjdENhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udGFjdENhcmQucmVtb3ZlKCksIDEwMCk7XHJcbiAgICB9KTtcclxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyByZW1vdmUgcHJlc2VudGF0aW9uQ2FyZFxyXG4gICAgICAgIHByZXNlbnRhdGlvbkNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJlc2VudGF0aW9uQ2FyZC5yZW1vdmUoKSwgMTAwKTtcclxuICAgICAgICAvLyBhZGQgbWVudUNhcmRcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChtZW51Q2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCIpLCAxMDApO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBjb250YWN0Q2FyZFxyXG4gICAgICAgIGNvbnRhY3RDYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRhY3RDYXJkLnJlbW92ZSgpLCAxMDApO1xyXG4gICAgfSk7XHJcbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHByZXNlbnRhdGlvbkNhcmRcclxuICAgICAgICBwcmVzZW50YXRpb25DYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByZXNlbnRhdGlvbkNhcmQucmVtb3ZlKCksIDEwMCk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG1lbnVDYXJkXHJcbiAgICAgICAgbWVudUNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVudUNhcmQucmVtb3ZlKCksIDEwMCk7XHJcbiAgICAgICAgLy8gYWRkIGNvbnRhY3RDYXJkXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAoY29udGFjdENhcmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiKSwgMTAwKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=