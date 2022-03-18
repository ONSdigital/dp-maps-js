(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mapbox-gl"));
	else if(typeof define === 'function' && define.amd)
		define(["mapbox-gl"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mapbox-gl")) : factory(root["mapbox-gl"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_mapbox_gl__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27grey%27 %3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27grey%27 %3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/** \n* @param {String} $name - `zoom-in` or `zoom-in-white` etc.\n* @returns {String} The SVG string\n*/\n#map {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-height: 464px;\n  /** -------- Controls Resets --------- */\n}\n@media screen and (min-width: 740px) {\n  #map {\n    width: 464px;\n    height: 464px;\n    display: block;\n  }\n}\n#map canvas:focus {\n  border: #FBC900 solid 2px;\n}\n#map .mapboxgl-ctrl-fullscreen {\n  width: 100px;\n  height: 30px;\n}\n#map .ons-map-control {\n  margin: 9px 9px 0;\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n}\n#map .ons-map-control .ons-ctrl-group {\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n}\n#map .ons-map-control .ons-ctrl-group:nth-of-type(2) {\n  margin-top: 18px;\n}\n#map .ons-map-control .ons-ctrl-group button {\n  border-radius: 4px 4px;\n  width: 29px;\n  height: 29px;\n  display: block;\n  padding: 0;\n  outline: none;\n  border: 0;\n  box-sizing: border-box;\n  background-color: transparent;\n  cursor: pointer;\n  overflow: hidden;\n}\n#map .ons-map-control .ons-ctrl-group button .mapboxgl-ctrl-icon {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n#map .ons-map-control .ons-ctrl-group button:hover, #map .ons-map-control .ons-ctrl-group button:focus {\n  z-index: 3;\n  outline: 4px solid #FBC900;\n}\n#map .ons-map-control .ons-ctrl-group button span {\n  background-color: #FFFFFF;\n}\n#map .ons-map-control .ons-ctrl-group button span:hover {\n  background-color: #222222;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-out .mapboxgl-ctrl-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-out .mapboxgl-ctrl-icon:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-out .mapboxgl-ctrl-icon:hover::before {\n  content: \"Zoom out\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-in .mapboxgl-ctrl-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-in .mapboxgl-ctrl-icon:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-in .mapboxgl-ctrl-icon:hover::before {\n  content: \"Zoom in\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-fullscreen .mapboxgl-ctrl-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-fullscreen .mapboxgl-ctrl-icon:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-fullscreen .mapboxgl-ctrl-icon:hover::before {\n  content: \"Maximise\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-shrink .mapboxgl-ctrl-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-shrink .mapboxgl-ctrl-icon:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-shrink .mapboxgl-ctrl-icon:hover::before {\n  content: \"Minimise\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon:hover::before {\n  content: \"Reset zoom\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon--disabled {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}", "",{"version":3,"sources":["webpack://./src/sass/utils.scss","webpack://./src/sass/map.scss","webpack://./src/sass/variables.scss","webpack://./src/sass/index.scss"],"names":[],"mappings":"AAAA;;;CAAA;AC+BA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,iBC5BQ;EDuCR,wCAAA;AEpCJ;AF0BI;EAPJ;IAQQ,YC9BI;ID+BJ,aC/BI;IDgCJ,cAAA;EEvBN;AACF;AFyBQ;EACI,yBAAA;AEvBZ;AF2BI;EACI,YAAA;EACA,YAAA;AEzBR;AF2BI;EACI,iBAAA;EACA,kBAAA;EACA,UCzCa;ED0Cb,aAAA;EACA,sBAAA;EACA,MAAA;EACA,QAAA;AEzBR;AF0BQ;EACI,aAAA;EACA,sBAAA;EACA,kBCpDS;EDqDT,yBC5DE;ED6DF,oCAAA;AExBZ;AFyBY;EACI,gBAAA;AEvBhB;AFyBY;EACI,sBAAA;EACA,WC9DD;ED+DC,YC/DD;EDgEC,cAAA;EACA,UAAA;EACA,aAAA;EACA,SAAA;EACA,sBAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;AEvBhB;AFwBgB;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,wBAAA;AEtBpB;AFwBgB;EACI,UC1EO;ED2EP,0BAAA;AEtBpB;AFwBgB;EACI,yBCzFN;ACmEd;AFuBoB;EACI,yBC/FV;AC0Ed;AFxDQ;EACI,yDAAA;AE0DZ;AFzDY;EACI,yDAAA;AE2DhB;AF/EI;EACI,mBAiG0C;EAhG1C,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AEiFR;AF1EQ;EACI,yDAAA;AE4EZ;AF3EY;EACI,yDAAA;AE6EhB;AFjGI;EACI,kBAkGyC;EAjGzC,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AEmGR;AF5FQ;EACI,yDAAA;AE8FZ;AF7FY;EACI,yDAAA;AE+FhB;AFnHI;EACI,mBAmG4C;EAlG5C,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AEqHR;AF9GQ;EACI,yDAAA;AEgHZ;AF/GY;EACI,yDAAA;AEiHhB;AFrII;EACI,mBAoGwC;EAnGxC,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AEuIR;AFhIQ;EACI,yDAAA;AEkIZ;AFjIY;EACI,yDAAA;AEmIhB;AFvJI;EACI,qBAqGuC;EApGvC,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AEyJR;AF5DgB;EACI,0DAAA;AE8DpB","sourcesContent":["/** \n* @param {String} $name - `zoom-in` or `zoom-in-white` etc.\n* @returns {String} The SVG string\n*/\n@function getSVG($name) {\n    $result: \"\";\n    @each $k, $v in $ctrl-icons {\n        @if \"#{$name}-icon\" == $k {\n            $result: $v;\n        }\n    }\n    @return $result;\n}","// Mixins\n@mixin mapbox-ctrl-badge($content) {\n    &::before {\n        content: $content;\n        background: black;\n        color: white;\n        margin-right: 4px;\n        position: absolute;\n        right: 37px;\n        font-size: 14px;\n        white-space: nowrap;\n        padding: 5px 9px;\n        border-radius: $mapbox-ctrl-radius;\n    }\n}\n\n@mixin mapbox-ctrl-icon($name, $content) {\n    $white-icon: \"#{$name}-white\";\n    .ons-ctrl-#{$name} {\n        .mapboxgl-ctrl-icon {\n            background-image: url(\"data:image/svg+xml, #{getSVG($name)}\");\n            &:hover {\n                background-image: url(\"data:image/svg+xml, #{getSVG($white-icon)}\");\n                @include mapbox-ctrl-badge($content);\n            }\n            @content;\n        }\n    }\n}\n\n// Mapbox styles\n#map {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    max-height: $map-width;\n    @media screen and (min-width: $md-breakpoint) {\n        width: $map-width;\n        height: $map-width;\n        display: block;\n    }\n    canvas {\n        &:focus {\n            border: $color-sun-yellow solid 2px;\n        }\n    }\n    /** -------- Controls Resets --------- */\n    .mapboxgl-ctrl-fullscreen {\n        width: 100px;\n        height: 30px;\n    }\n    .ons-map-control {\n        margin: $mapbox-ctrl-margin $mapbox-ctrl-margin 0;\n        position: absolute;\n        z-index: $mapbox-ctrl-zindex;\n        display: flex;\n        flex-direction: column;\n        top: 0;\n        right: 0;\n        .ons-ctrl-group {\n            display: flex;\n            flex-direction: column;\n            border-radius: $mapbox-ctrl-radius;\n            background-color: $color-white;\n            border: 2px solid $color-grey-15;\n            &:nth-of-type(2) {\n                margin-top: 18px;\n            }\n            button {\n                border-radius: $mapbox-ctrl-radius $mapbox-ctrl-radius;\n                width: $button-width;\n                height: $button-width;\n                display: block;\n                padding: 0;\n                outline: none;\n                border: 0;\n                box-sizing: border-box;\n                background-color: transparent;\n                cursor: pointer;\n                overflow: hidden;\n                .mapboxgl-ctrl-icon {\n                    display: block;\n                    width: 100%;\n                    height: 100%;\n                    background-repeat: no-repeat;\n                    background-position: 50%;\n                }\n                &:hover, &:focus {\n                    z-index: $mapbox-ctrl-zindex-hover;\n                    outline: 4px solid $color-sun-yellow;\n                }\n                span {\n                    background-color: $color-white;\n                    &:hover {\n                        background-color: $color-black;\n                    }\n                }\n            }\n            @include mapbox-ctrl-icon(\"zoom-out\", \"Zoom out\");\n            @include mapbox-ctrl-icon(\"zoom-in\", \"Zoom in\");\n            @include mapbox-ctrl-icon(\"fullscreen\", \"Maximise\");\n            @include mapbox-ctrl-icon(\"shrink\", \"Minimise\");\n            @include mapbox-ctrl-icon(\"reset\", \"Reset zoom\") {\n                &--disabled {\n                    background-image: url(\"data:image/svg+xml, #{getSVG('reset-grey')}\");\n                }\n            }\n        }\n    }\n}\n","// Colors\n$color-black: #222222;\n$color-grey-15: rgba(0, 0, 0, 0.1);\n$color-grey-5: #F5F5F6;\n$color-sun-yellow: #FBC900;\n$color-white: #FFFFFF;\n\n// Defaults\n$md-breakpoint: 740px;\n$map-width: 464px;\n$button-width: 29px;\n$mapbox-ctrl-margin: 9px;\n$mapbox-ctrl-radius: 4px;\n\n// Z-indexes\n$mapbox-ctrl-zindex: 2;\n$mapbox-ctrl-zindex-hover: 3;\n\n// Icons\n$zoom-in-white-icon: \"%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z' fill='white' %3E%3C/path%3E%3C/svg%3E\";\n$zoom-in-icon: \"%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z' fill='black' %3E%3C/path%3E%3C/svg%3E\";\n$zoom-out-icon: \"%3Csvg width='13' height='3' viewBox='0 0 13 3' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z' fill='black' %3E%3C/path%3E%3C/svg%3E\";\n$zoom-out-white-icon: \"%3Csvg width='13' height='3' viewBox='0 0 13 3' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z' fill='white' %3E%3C/path%3E%3C/svg%3E\";\n$reset-icon: \"%3Csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z' fill='black' %3E%3C/path%3E%3C/svg%3E\";\n$reset-white-icon: \"%3Csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z' fill='white' %3E%3C/path%3E%3C/svg%3E\";\n$reset-grey-icon: \"%3Csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z' fill='grey' %3E%3C/path%3E%3C/svg%3E\";\n$fullscreen-icon: \"%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z' fill='black' %3E%3C/path%3E%3C/svg%3E\";\n$fullscreen-white-icon: \"%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z' fill='white' %3E%3C/path%3E%3C/svg%3E\";\n$shrink-icon: \"%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z' fill='black' %3E%3C/path%3E%3C/svg%3E\";\n$shrink-white-icon: \"%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z' fill='white' %3E%3C/path%3E%3C/svg%3E\";\n\n$ctrl-icons: (\n    \"zoom-in-white-icon\": $zoom-in-white-icon,\n    \"zoom-in-icon\": $zoom-in-icon,\n    \"zoom-out-icon\": $zoom-out-icon,\n    \"zoom-out-white-icon\": $zoom-out-white-icon,\n    \"reset-icon\": $reset-icon,\n    \"reset-white-icon\": $reset-white-icon,\n    \"reset-grey-icon\": $reset-grey-icon,\n    \"fullscreen-icon\": $fullscreen-icon,\n    \"fullscreen-white-icon\": $fullscreen-white-icon,\n    \"shrink-icon\": $shrink-icon,\n    \"shrink-white-icon\": $shrink-white-icon,\n);","/** \n* @param {String} $name - `zoom-in` or `zoom-in-white` etc.\n* @returns {String} The SVG string\n*/\n#map {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-height: 464px;\n  /** -------- Controls Resets --------- */\n}\n@media screen and (min-width: 740px) {\n  #map {\n    width: 464px;\n    height: 464px;\n    display: block;\n  }\n}\n#map canvas:focus {\n  border: #FBC900 solid 2px;\n}\n#map .mapboxgl-ctrl-fullscreen {\n  width: 100px;\n  height: 30px;\n}\n#map .ons-map-control {\n  margin: 9px 9px 0;\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n}\n#map .ons-map-control .ons-ctrl-group {\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n}\n#map .ons-map-control .ons-ctrl-group:nth-of-type(2) {\n  margin-top: 18px;\n}\n#map .ons-map-control .ons-ctrl-group button {\n  border-radius: 4px 4px;\n  width: 29px;\n  height: 29px;\n  display: block;\n  padding: 0;\n  outline: none;\n  border: 0;\n  box-sizing: border-box;\n  background-color: transparent;\n  cursor: pointer;\n  overflow: hidden;\n}\n#map .ons-map-control .ons-ctrl-group button .mapboxgl-ctrl-icon {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n#map .ons-map-control .ons-ctrl-group button:hover, #map .ons-map-control .ons-ctrl-group button:focus {\n  z-index: 3;\n  outline: 4px solid #FBC900;\n}\n#map .ons-map-control .ons-ctrl-group button span {\n  background-color: #FFFFFF;\n}\n#map .ons-map-control .ons-ctrl-group button span:hover {\n  background-color: #222222;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-out .mapboxgl-ctrl-icon {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='13' height='3' viewBox='0 0 13 3' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z' fill='black' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-out .mapboxgl-ctrl-icon:hover {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='13' height='3' viewBox='0 0 13 3' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z' fill='white' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-out .mapboxgl-ctrl-icon:hover::before {\n  content: \"Zoom out\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-in .mapboxgl-ctrl-icon {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z' fill='black' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-in .mapboxgl-ctrl-icon:hover {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z' fill='white' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-zoom-in .mapboxgl-ctrl-icon:hover::before {\n  content: \"Zoom in\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-fullscreen .mapboxgl-ctrl-icon {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z' fill='black' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-fullscreen .mapboxgl-ctrl-icon:hover {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z' fill='white' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-fullscreen .mapboxgl-ctrl-icon:hover::before {\n  content: \"Maximise\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-shrink .mapboxgl-ctrl-icon {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z' fill='black' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-shrink .mapboxgl-ctrl-icon:hover {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z' fill='white' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-shrink .mapboxgl-ctrl-icon:hover::before {\n  content: \"Minimise\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z' fill='black' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon:hover {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z' fill='white' %3E%3C/path%3E%3C/svg%3E\");\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon:hover::before {\n  content: \"Reset zoom\";\n  background: black;\n  color: white;\n  margin-right: 4px;\n  position: absolute;\n  right: 37px;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 5px 9px;\n  border-radius: 4px;\n}\n#map .ons-map-control .ons-ctrl-group .ons-ctrl-reset .mapboxgl-ctrl-icon--disabled {\n  background-image: url(\"data:image/svg+xml, %3Csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z' fill='grey' %3E%3C/path%3E%3C/svg%3E\");\n}"],"sourceRoot":""}]);
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

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/ts/context.ts":
/*!***************************!*\
  !*** ./src/ts/context.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapState": () => (/* binding */ MapState)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MapState = /** @class */ (function () {
    function MapState() {
        this.context = {
            hasMoved: false,
        };
    }
    MapState.prototype.update = function (val) {
        this.context = __assign(__assign({}, this.context), val);
    };
    return MapState;
}());



/***/ }),

/***/ "./src/ts/controls.ts":
/*!****************************!*\
  !*** ./src/ts/controls.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONSFullScreenControl": () => (/* binding */ ONSFullScreenControl),
/* harmony export */   "ONSResetControl": () => (/* binding */ ONSResetControl),
/* harmony export */   "ONSZoomInControl": () => (/* binding */ ONSZoomInControl),
/* harmony export */   "ONSZoomOutControl": () => (/* binding */ ONSZoomOutControl)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/ts/context.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** @internal */
var ONSControl = /** @class */ (function () {
    function ONSControl(map, btnSelector, btnClickedSelctor) {
        if (btnClickedSelctor === void 0) { btnClickedSelctor = ""; }
        this.state = new _context__WEBPACK_IMPORTED_MODULE_0__.MapState;
        this.map = map;
        this.btnSelector = btnSelector;
        if (typeof this.btnSelector === "undefined") {
            throw new Error("ONSZoomInControl - button selector '".concat(this.btnSelector, "' is undefined"));
        }
        this.btnClickedSelctor = btnClickedSelctor;
    }
    ONSControl.prototype.setup = function () {
        // button
        this.button = document.querySelector(this.btnSelector);
        if (!this.button) {
            throw new Error("ONSControl - Can't add event handler to non element with name ".concat(this.btnSelector, "!"));
        }
        this.button.addEventListener("click", this.onClick);
        // span.mapboxgl-ctrl-icon
        this.iconElement = this.button.querySelector(".mapboxgl-ctrl-icon");
        if (!this.iconElement) {
            console.error("ONSControl - '.mapboxgl-ctrl-icon' element doesn't exist");
        }
    };
    ONSControl.prototype.styleBtnDefault = function () {
        this.iconElement.className = "mapboxgl-ctrl-icon";
    };
    ONSControl.prototype.styleBtnNonDefault = function () {
        this.iconElement.className = "mapboxgl-ctrl-icon ".concat(this.btnClickedSelctor);
    };
    return ONSControl;
}());
/** @internal */
var ONSZoomInControl = /** @class */ (function (_super) {
    __extends(ONSZoomInControl, _super);
    function ONSZoomInControl(map, btnSelector) {
        var _this = _super.call(this, map, btnSelector) || this;
        _this.onClick = function (e) {
            _this.map.zoomIn({ duration: 1000 });
        };
        return _this;
    }
    return ONSZoomInControl;
}(ONSControl));

/** @internal */
var ONSZoomOutControl = /** @class */ (function (_super) {
    __extends(ONSZoomOutControl, _super);
    function ONSZoomOutControl(map, btnSelector) {
        var _this = _super.call(this, map, btnSelector) || this;
        _this.onClick = function (e) {
            _this.map.zoomOut({ duration: 1000 });
        };
        return _this;
    }
    return ONSZoomOutControl;
}(ONSControl));

/** @internal */
var ONSResetControl = /** @class */ (function (_super) {
    __extends(ONSResetControl, _super);
    function ONSResetControl(map, btnSelector, btnClickedSelctor, center, zoom) {
        var _this = _super.call(this, map, btnSelector, btnClickedSelctor) || this;
        _this.onMoveStart = function () {
            // update reset btn default icon
            if (!_this.state.context.hasMoved) {
                _this.state.update({ hasMoved: false });
                _this.button.disabled = false;
                _this.styleBtnDefault();
            }
        };
        _this.onClick = function (e) {
            _this.map.flyTo({
                center: _this.center,
                zoom: _this.zoom,
                essential: true,
            });
            _this.state.update({ hasMoved: false });
            _this.styleBtnNonDefault();
        };
        _this.center = center;
        _this.zoom = zoom;
        return _this;
    }
    ONSResetControl.prototype.setup = function () {
        _super.prototype.setup.call(this);
        this.button.disabled = true;
        this.styleBtnNonDefault();
        this.map.on("movestart", this.onMoveStart);
    };
    return ONSResetControl;
}(ONSControl));

/** @internal */
var ONSFullScreenControl = /** @class */ (function (_super) {
    __extends(ONSFullScreenControl, _super);
    function ONSFullScreenControl(map, btnSelector, btnClickedSelctor) {
        if (btnClickedSelctor === void 0) { btnClickedSelctor = ""; }
        var _this = _super.call(this, map, btnSelector, btnClickedSelctor) || this;
        _this.onClick = function (e) {
            if (ONSFullScreenControl.isInFullScreenMode()) {
                ONSFullScreenControl.exitFullScreenMode();
                _this.button.className = "ons-ctrl-fullscreen";
            }
            else {
                _this.openFullScreenMode();
                _this.button.className = "ons-ctrl-shrink";
            }
        };
        return _this;
    }
    ONSFullScreenControl.prototype.openFullScreenMode = function () {
        var el = this.map._container; // TODO
        if (el.requestFullscreen) {
            el.requestFullscreen();
        }
        else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
        else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    };
    ONSFullScreenControl.exitFullScreenMode = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };
    ONSFullScreenControl.isInFullScreenMode = function () {
        return (document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement);
    };
    return ONSFullScreenControl;
}(ONSControl));



/***/ }),

/***/ "./src/ts/map.ts":
/*!***********************!*\
  !*** ./src/ts/map.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "mapbox-gl");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/ts/controls.ts");


/**
 *  You must install & call mapbox-gl as a peer dependency before instantiatint `MapComponent`.
 * @example
 * ```
 *  npm i -S mapbox-gl
 * ```
 *
 * And then import before importing this library.
 * @example
 * ```
 * import "mapbox-gl";
 * import { MapComponent as _MapComponent } from "dp-maps";
 * ```
 *
 * To create an Ordnance Survey map component, pass the following options to the {@link MapComponent} class.
 * @example
 * ```
 *   const options = {
 *       style: "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g",
 *       center: [51.42133794405771, -0.14646169096877365] as any,
 *       zoom: 6,
 *       token: process.env.MAPBOX_ACCESS_TOKEN,
 *       mapID: "map",
 *   }
 *   const map = new _MapComponent(options);
 *   map.init();
 * ```
 *
 * Define a HTML elements with an id value `map`.
 * @example
 * ```
 *   <divid="map">
 *          <div class="ons-map-control">
 *            <!-- controls... -->
 *          </div>
 *   </div>
 * ```
 *
 * To add a control, add a `button` element & a child element to render your icon. Buttons need
 * to be added to an element with a `.ons-ctrl-group` class name. You can add as many controls
 * as required in each group.
 * @example
 * ```
 * <div class="ons-ctrl-group">
 *     <button class="ons-ctrl-zoom-in">
 *        <span class="mapboxgl-ctrl-icon"></span>
 *     </button>
 *    <button class="ons-ctrl-zoom-in">
 *        <span class="mapboxgl-ctrl-icon"></span>
 *    </button>
 * </div>
 * ```
 *
 *  Example shows a map component with the 4 currently available controls.
 * @example
 * ```
 *  <div id="map">
 *       <div class="ons-map-control">
 *           <div class="ons-ctrl-group">
 *               <button class="ons-ctrl-zoom-in">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *               <button class="ons-ctrl-reset">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *               <button class="ons-ctrl-zoom-out">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *           </div>
 *           <div class="ons-ctrl-group">
 *               <button class="ons-ctrl-fullscreen">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *           </div>
 *       </div>
 *   </div>
 * ```
 */
var MapComponent = /** @class */ (function () {
    function MapComponent(options) {
        /** Map bounds  */
        this.bounds = [
            [-7.9454024125535625, 48.95006696529006],
            [2.549589409450192, 60.86791183866015] // north-west
        ];
        /** Default false. Set to true for geoloation debugging logs  */
        this.debug = false;
        var style = options.style, center = options.center, _a = options.zoom, zoom = _a === void 0 ? 6 : _a, token = options.token, mapID = options.mapID, _b = options.debug, debug = _b === void 0 ? false : _b;
        this.style = style;
        this.center = center;
        this.zoom = zoom;
        this.mapID = mapID;
        this.debug = debug;
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Map({
            container: this.mapID,
            style: this.style,
            center: this.center,
            zoom: this.zoom,
            attributionControl: false,
            maxBounds: this.bounds,
            accessToken: token,
        });
        this.settings();
    }
    /**
     * @desciption Initiates a map component.
     * @example
     * ```
     *   const options = { .. }
     *   const map = new MapComponent(options);
     *   map.init();
     * ```
     */
    MapComponent.prototype.init = function () {
        this.addControls();
        this.addEvents();
    };
    MapComponent.prototype.addControls = function () {
        var onsZoomInControl = new _controls__WEBPACK_IMPORTED_MODULE_1__.ONSZoomInControl(this.map, ".ons-ctrl-zoom-in");
        onsZoomInControl.setup();
        var onsZoomOutControl = new _controls__WEBPACK_IMPORTED_MODULE_1__.ONSZoomOutControl(this.map, ".ons-ctrl-zoom-out");
        onsZoomOutControl.setup();
        var onsResetControl = new _controls__WEBPACK_IMPORTED_MODULE_1__.ONSResetControl(this.map, ".ons-ctrl-reset", "mapboxgl-ctrl-icon--disabled", this.center, this.zoom);
        onsResetControl.setup();
        var onsFullScreenControl = new _controls__WEBPACK_IMPORTED_MODULE_1__.ONSFullScreenControl(this.map, ".ons-ctrl-fullscreen", "mapboxgl-ctrl-icon--fullscreen");
        onsFullScreenControl.setup();
    };
    MapComponent.prototype.addEvents = function () {
        var _this = this;
        this.map.on("load", function () {
            // Resize map to as setting the height and width in css distorts the ratio of the map
            _this.map.resize();
        });
        this.map.on("move", function () {
            if (_this.debug) {
                console.debug("center: ", _this.map.getCenter());
                console.debug("zoom: ", _this.map.getZoom());
            }
        });
    };
    MapComponent.prototype.settings = function () {
        this.map.dragRotate.disable();
        this.map.touchZoomRotate.disableRotation();
    };
    return MapComponent;
}());



/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2713%27 height=%2713%27 viewBox=%270 0 13 13%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M6.5 0.5C5.75 0.5 5 1.25 5 2V5H2C1.25 5 0.5 5.75 0.5 6.5C0.5 7.25 1.25 8 2 8H5V11C5 11.75 5.75 12.5 6.5 12.5C7.25 12.5 8 11.75 8 11V8H11C11.75 8 12.5 7.25 12.5 6.5C12.5 5.75 11.75 5 11 5H8V2C8 1.25 7.25 0.5 6.5 0.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2713%27 height=%273%27 viewBox=%270 0 13 3%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M2 0C1.25 0 0.5 0.75 0.5 1.5C0.5 2.25 1.25 3 2 3H11C11.75 3 12.5 2.25 12.5 1.5C12.5 0.75 11.75 0 11 0H2Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M19 11V16.5C19 18.25 18.25 19 16.5 19H11V18L14 16.5L10 11L11 10L16.5 14L18 11H19ZM1 11L2.5 14L8 10L9 11L5 16.5L8 18V19H2.5C0.75 19 0 18.25 0 16.5V11H1ZM8 0V1L5 2.5L9 8L8 9L2.5 5L1 8H0V2.5C0 0.75 0.75 0 2.5 0H8ZM19 2.5C19 0.75 18.25 0 16.5 0H11V1L14 2.5L10 8L11 9L16.5 5L18 8H19V2.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2721%27 height=%2721%27 viewBox=%270 0 21 21%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M14.5 12C12.75 12 12 12.75 12 14.5V20H13L14.5 17L20 21L21 20L17 14.5L20 13V12H14.5ZM9 14.5C9 12.75 8.25 12 6.5 12H1V13L4 14.5L0 20L1 21L6.5 17L8 20H9V14.5ZM12 6.5C12 8.25 12.75 9 14.5 9H20V8L17 6.5L21 1L20 0L14.5 4L13 1H12V6.5ZM6.5 9C8.25 9 9 8.25 9 6.5V1H8L6.5 4L1 0L0 1L4 6.5L1 8V9H6.5Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27black%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27grey%27 %3E%3C/path%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27grey%27 %3E%3C/path%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27grey%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27 %3E%3Cpath d=%27M20.6337 8.35292C19.0037 6.72292 16.6937 5.78292 14.1537 6.04292C10.4837 6.41292 7.46366 9.39292 7.05366 13.0629C6.50366 17.9129 10.2537 22.0029 14.9837 22.0029C18.1737 22.0029 20.9137 20.1329 22.1937 17.4429C22.5137 16.7729 22.0337 16.0029 21.2937 16.0029C20.9237 16.0029 20.5737 16.2029 20.4137 16.5329C19.2837 18.9629 16.5737 20.5029 13.6137 19.8429C11.3937 19.3529 9.60366 17.5429 9.13366 15.3229C8.29366 11.4429 11.2437 8.00292 14.9837 8.00292C16.6437 8.00292 18.1237 8.69292 19.2037 9.78292L17.6937 11.2929C17.0637 11.9229 17.5037 13.0029 18.3937 13.0029H21.9837C22.5337 13.0029 22.9837 12.5529 22.9837 12.0029V8.41292C22.9837 7.52292 21.9037 7.07292 21.2737 7.70292L20.6337 8.35292Z%27 fill=%27white%27 %3E%3C/path%3E%3C/svg%3E";

/***/ }),

/***/ "mapbox-gl":
/*!****************************!*\
  !*** external "mapbox-gl" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_mapbox_gl__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.MapComponent)
/* harmony export */ });
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ "./src/sass/index.scss");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/ts/map.ts");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9zcmMvc2Fzcy9pbmRleC5zY3NzIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kcC1tYXBzLWpzLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9mODdkIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kcC1tYXBzLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kcC1tYXBzLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy8uL3NyYy90cy9jb250ZXh0LnRzIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9zcmMvdHMvY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy8uL3NyYy90cy9tYXAudHMiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy9leHRlcm5hbCB1bWQgXCJtYXBib3gtZ2xcIiIsIndlYnBhY2s6Ly9kcC1tYXBzLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RwLW1hcHMtanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHAtbWFwcy1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RwLW1hcHMtanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcC1tYXBzLWpzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2RwLW1hcHMtanMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWFwYm94LWdsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1hcGJveC1nbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWFwYm94LWdsXCIpKSA6IGZhY3Rvcnkocm9vdFtcIm1hcGJveC1nbFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21hcGJveF9nbF9fKSB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPSUyNzEzJTI3IGhlaWdodD0lMjczJTI3IHZpZXdCb3g9JTI3MCAwIDEzIDMlMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMiAwQzEuMjUgMCAwLjUgMC43NSAwLjUgMS41QzAuNSAyLjI1IDEuMjUgMyAyIDNIMTFDMTEuNzUgMyAxMi41IDIuMjUgMTIuNSAxLjVDMTIuNSAwLjc1IDExLjc1IDAgMTEgMEgyWiUyNyBmaWxsPSUyN2JsYWNrJTI3ICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPSUyNzEzJTI3IGhlaWdodD0lMjczJTI3IHZpZXdCb3g9JTI3MCAwIDEzIDMlMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMiAwQzEuMjUgMCAwLjUgMC43NSAwLjUgMS41QzAuNSAyLjI1IDEuMjUgMyAyIDNIMTFDMTEuNzUgMyAxMi41IDIuMjUgMTIuNSAxLjVDMTIuNSAwLjc1IDExLjc1IDAgMTEgMEgyWiUyNyBmaWxsPSUyN3doaXRlJTI3ICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPSUyNzEzJTI3IGhlaWdodD0lMjcxMyUyNyB2aWV3Qm94PSUyNzAgMCAxMyAxMyUyNyBmaWxsPSUyN25vbmUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgJTNFJTNDcGF0aCBkPSUyN002LjUgMC41QzUuNzUgMC41IDUgMS4yNSA1IDJWNUgyQzEuMjUgNSAwLjUgNS43NSAwLjUgNi41QzAuNSA3LjI1IDEuMjUgOCAyIDhINVYxMUM1IDExLjc1IDUuNzUgMTIuNSA2LjUgMTIuNUM3LjI1IDEyLjUgOCAxMS43NSA4IDExVjhIMTFDMTEuNzUgOCAxMi41IDcuMjUgMTIuNSA2LjVDMTIuNSA1Ljc1IDExLjc1IDUgMTEgNUg4VjJDOCAxLjI1IDcuMjUgMC41IDYuNSAwLjVaJTI3IGZpbGw9JTI3YmxhY2slMjcgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCAlM0Nzdmcgd2lkdGg9JTI3MTMlMjcgaGVpZ2h0PSUyNzEzJTI3IHZpZXdCb3g9JTI3MCAwIDEzIDEzJTI3IGZpbGw9JTI3bm9uZSUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyAlM0UlM0NwYXRoIGQ9JTI3TTYuNSAwLjVDNS43NSAwLjUgNSAxLjI1IDUgMlY1SDJDMS4yNSA1IDAuNSA1Ljc1IDAuNSA2LjVDMC41IDcuMjUgMS4yNSA4IDIgOEg1VjExQzUgMTEuNzUgNS43NSAxMi41IDYuNSAxMi41QzcuMjUgMTIuNSA4IDExLjc1IDggMTFWOEgxMUMxMS43NSA4IDEyLjUgNy4yNSAxMi41IDYuNUMxMi41IDUuNzUgMTEuNzUgNSAxMSA1SDhWMkM4IDEuMjUgNy4yNSAwLjUgNi41IDAuNVolMjcgZmlsbD0lMjd3aGl0ZSUyNyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0lMjcxOSUyNyBoZWlnaHQ9JTI3MTklMjcgdmlld0JveD0lMjcwIDAgMTkgMTklMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMTkgMTFWMTYuNUMxOSAxOC4yNSAxOC4yNSAxOSAxNi41IDE5SDExVjE4TDE0IDE2LjVMMTAgMTFMMTEgMTBMMTYuNSAxNEwxOCAxMUgxOVpNMSAxMUwyLjUgMTRMOCAxMEw5IDExTDUgMTYuNUw4IDE4VjE5SDIuNUMwLjc1IDE5IDAgMTguMjUgMCAxNi41VjExSDFaTTggMFYxTDUgMi41TDkgOEw4IDlMMi41IDVMMSA4SDBWMi41QzAgMC43NSAwLjc1IDAgMi41IDBIOFpNMTkgMi41QzE5IDAuNzUgMTguMjUgMCAxNi41IDBIMTFWMUwxNCAyLjVMMTAgOEwxMSA5TDE2LjUgNUwxOCA4SDE5VjIuNVolMjcgZmlsbD0lMjdibGFjayUyNyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0lMjcxOSUyNyBoZWlnaHQ9JTI3MTklMjcgdmlld0JveD0lMjcwIDAgMTkgMTklMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMTkgMTFWMTYuNUMxOSAxOC4yNSAxOC4yNSAxOSAxNi41IDE5SDExVjE4TDE0IDE2LjVMMTAgMTFMMTEgMTBMMTYuNSAxNEwxOCAxMUgxOVpNMSAxMUwyLjUgMTRMOCAxMEw5IDExTDUgMTYuNUw4IDE4VjE5SDIuNUMwLjc1IDE5IDAgMTguMjUgMCAxNi41VjExSDFaTTggMFYxTDUgMi41TDkgOEw4IDlMMi41IDVMMSA4SDBWMi41QzAgMC43NSAwLjc1IDAgMi41IDBIOFpNMTkgMi41QzE5IDAuNzUgMTguMjUgMCAxNi41IDBIMTFWMUwxNCAyLjVMMTAgOEwxMSA5TDE2LjUgNUwxOCA4SDE5VjIuNVolMjcgZmlsbD0lMjd3aGl0ZSUyNyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0lMjcyMSUyNyBoZWlnaHQ9JTI3MjElMjcgdmlld0JveD0lMjcwIDAgMjEgMjElMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMTQuNSAxMkMxMi43NSAxMiAxMiAxMi43NSAxMiAxNC41VjIwSDEzTDE0LjUgMTdMMjAgMjFMMjEgMjBMMTcgMTQuNUwyMCAxM1YxMkgxNC41Wk05IDE0LjVDOSAxMi43NSA4LjI1IDEyIDYuNSAxMkgxVjEzTDQgMTQuNUwwIDIwTDEgMjFMNi41IDE3TDggMjBIOVYxNC41Wk0xMiA2LjVDMTIgOC4yNSAxMi43NSA5IDE0LjUgOUgyMFY4TDE3IDYuNUwyMSAxTDIwIDBMMTQuNSA0TDEzIDFIMTJWNi41Wk02LjUgOUM4LjI1IDkgOSA4LjI1IDkgNi41VjFIOEw2LjUgNEwxIDBMMCAxTDQgNi41TDEgOFY5SDYuNVolMjcgZmlsbD0lMjdibGFjayUyNyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0lMjcyMSUyNyBoZWlnaHQ9JTI3MjElMjcgdmlld0JveD0lMjcwIDAgMjEgMjElMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMTQuNSAxMkMxMi43NSAxMiAxMiAxMi43NSAxMiAxNC41VjIwSDEzTDE0LjUgMTdMMjAgMjFMMjEgMjBMMTcgMTQuNUwyMCAxM1YxMkgxNC41Wk05IDE0LjVDOSAxMi43NSA4LjI1IDEyIDYuNSAxMkgxVjEzTDQgMTQuNUwwIDIwTDEgMjFMNi41IDE3TDggMjBIOVYxNC41Wk0xMiA2LjVDMTIgOC4yNSAxMi43NSA5IDE0LjUgOUgyMFY4TDE3IDYuNUwyMSAxTDIwIDBMMTQuNSA0TDEzIDFIMTJWNi41Wk02LjUgOUM4LjI1IDkgOSA4LjI1IDkgNi41VjFIOEw2LjUgNEwxIDBMMCAxTDQgNi41TDEgOFY5SDYuNVolMjcgZmlsbD0lMjd3aGl0ZSUyNyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0lMjcyOSUyNyBoZWlnaHQ9JTI3MjklMjcgdmlld0JveD0lMjcwIDAgMjkgMjklMjcgZmlsbD0lMjdub25lJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3ICUzRSUzQ3BhdGggZD0lMjdNMjAuNjMzNyA4LjM1MjkyQzE5LjAwMzcgNi43MjI5MiAxNi42OTM3IDUuNzgyOTIgMTQuMTUzNyA2LjA0MjkyQzEwLjQ4MzcgNi40MTI5MiA3LjQ2MzY2IDkuMzkyOTIgNy4wNTM2NiAxMy4wNjI5QzYuNTAzNjYgMTcuOTEyOSAxMC4yNTM3IDIyLjAwMjkgMTQuOTgzNyAyMi4wMDI5QzE4LjE3MzcgMjIuMDAyOSAyMC45MTM3IDIwLjEzMjkgMjIuMTkzNyAxNy40NDI5QzIyLjUxMzcgMTYuNzcyOSAyMi4wMzM3IDE2LjAwMjkgMjEuMjkzNyAxNi4wMDI5QzIwLjkyMzcgMTYuMDAyOSAyMC41NzM3IDE2LjIwMjkgMjAuNDEzNyAxNi41MzI5QzE5LjI4MzcgMTguOTYyOSAxNi41NzM3IDIwLjUwMjkgMTMuNjEzNyAxOS44NDI5QzExLjM5MzcgMTkuMzUyOSA5LjYwMzY2IDE3LjU0MjkgOS4xMzM2NiAxNS4zMjI5QzguMjkzNjYgMTEuNDQyOSAxMS4yNDM3IDguMDAyOTIgMTQuOTgzNyA4LjAwMjkyQzE2LjY0MzcgOC4wMDI5MiAxOC4xMjM3IDguNjkyOTIgMTkuMjAzNyA5Ljc4MjkyTDE3LjY5MzcgMTEuMjkyOUMxNy4wNjM3IDExLjkyMjkgMTcuNTAzNyAxMy4wMDI5IDE4LjM5MzcgMTMuMDAyOUgyMS45ODM3QzIyLjUzMzcgMTMuMDAyOSAyMi45ODM3IDEyLjU1MjkgMjIuOTgzNyAxMi4wMDI5VjguNDEyOTJDMjIuOTgzNyA3LjUyMjkyIDIxLjkwMzcgNy4wNzI5MiAyMS4yNzM3IDcuNzAyOTJMMjAuNjMzNyA4LjM1MjkyWiUyNyBmaWxsPSUyN2JsYWNrJTI3ICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPSUyNzI5JTI3IGhlaWdodD0lMjcyOSUyNyB2aWV3Qm94PSUyNzAgMCAyOSAyOSUyNyBmaWxsPSUyN25vbmUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgJTNFJTNDcGF0aCBkPSUyN00yMC42MzM3IDguMzUyOTJDMTkuMDAzNyA2LjcyMjkyIDE2LjY5MzcgNS43ODI5MiAxNC4xNTM3IDYuMDQyOTJDMTAuNDgzNyA2LjQxMjkyIDcuNDYzNjYgOS4zOTI5MiA3LjA1MzY2IDEzLjA2MjlDNi41MDM2NiAxNy45MTI5IDEwLjI1MzcgMjIuMDAyOSAxNC45ODM3IDIyLjAwMjlDMTguMTczNyAyMi4wMDI5IDIwLjkxMzcgMjAuMTMyOSAyMi4xOTM3IDE3LjQ0MjlDMjIuNTEzNyAxNi43NzI5IDIyLjAzMzcgMTYuMDAyOSAyMS4yOTM3IDE2LjAwMjlDMjAuOTIzNyAxNi4wMDI5IDIwLjU3MzcgMTYuMjAyOSAyMC40MTM3IDE2LjUzMjlDMTkuMjgzNyAxOC45NjI5IDE2LjU3MzcgMjAuNTAyOSAxMy42MTM3IDE5Ljg0MjlDMTEuMzkzNyAxOS4zNTI5IDkuNjAzNjYgMTcuNTQyOSA5LjEzMzY2IDE1LjMyMjlDOC4yOTM2NiAxMS40NDI5IDExLjI0MzcgOC4wMDI5MiAxNC45ODM3IDguMDAyOTJDMTYuNjQzNyA4LjAwMjkyIDE4LjEyMzcgOC42OTI5MiAxOS4yMDM3IDkuNzgyOTJMMTcuNjkzNyAxMS4yOTI5QzE3LjA2MzcgMTEuOTIyOSAxNy41MDM3IDEzLjAwMjkgMTguMzkzNyAxMy4wMDI5SDIxLjk4MzdDMjIuNTMzNyAxMy4wMDI5IDIyLjk4MzcgMTIuNTUyOSAyMi45ODM3IDEyLjAwMjlWOC40MTI5MkMyMi45ODM3IDcuNTIyOTIgMjEuOTAzNyA3LjA3MjkyIDIxLjI3MzcgNy43MDI5MkwyMC42MzM3IDguMzUyOTJaJTI3IGZpbGw9JTI3d2hpdGUlMjcgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPSUyNzI5JTI3IGhlaWdodD0lMjcyOSUyNyB2aWV3Qm94PSUyNzAgMCAyOSAyOSUyNyBmaWxsPSUyN25vbmUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgJTNFJTNDcGF0aCBkPSUyN00yMC42MzM3IDguMzUyOTJDMTkuMDAzNyA2LjcyMjkyIDE2LjY5MzcgNS43ODI5MiAxNC4xNTM3IDYuMDQyOTJDMTAuNDgzNyA2LjQxMjkyIDcuNDYzNjYgOS4zOTI5MiA3LjA1MzY2IDEzLjA2MjlDNi41MDM2NiAxNy45MTI5IDEwLjI1MzcgMjIuMDAyOSAxNC45ODM3IDIyLjAwMjlDMTguMTczNyAyMi4wMDI5IDIwLjkxMzcgMjAuMTMyOSAyMi4xOTM3IDE3LjQ0MjlDMjIuNTEzNyAxNi43NzI5IDIyLjAzMzcgMTYuMDAyOSAyMS4yOTM3IDE2LjAwMjlDMjAuOTIzNyAxNi4wMDI5IDIwLjU3MzcgMTYuMjAyOSAyMC40MTM3IDE2LjUzMjlDMTkuMjgzNyAxOC45NjI5IDE2LjU3MzcgMjAuNTAyOSAxMy42MTM3IDE5Ljg0MjlDMTEuMzkzNyAxOS4zNTI5IDkuNjAzNjYgMTcuNTQyOSA5LjEzMzY2IDE1LjMyMjlDOC4yOTM2NiAxMS40NDI5IDExLjI0MzcgOC4wMDI5MiAxNC45ODM3IDguMDAyOTJDMTYuNjQzNyA4LjAwMjkyIDE4LjEyMzcgOC42OTI5MiAxOS4yMDM3IDkuNzgyOTJMMTcuNjkzNyAxMS4yOTI5QzE3LjA2MzcgMTEuOTIyOSAxNy41MDM3IDEzLjAwMjkgMTguMzkzNyAxMy4wMDI5SDIxLjk4MzdDMjIuNTMzNyAxMy4wMDI5IDIyLjk4MzcgMTIuNTUyOSAyMi45ODM3IDEyLjAwMjlWOC40MTI5MkMyMi45ODM3IDcuNTIyOTIgMjEuOTAzNyA3LjA3MjkyIDIxLjI3MzcgNy43MDI5MkwyMC42MzM3IDguMzUyOTJaJTI3IGZpbGw9JTI3Z3JleSUyNyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiogXFxuKiBAcGFyYW0ge1N0cmluZ30gJG5hbWUgLSBgem9vbS1pbmAgb3IgYHpvb20taW4td2hpdGVgIGV0Yy5cXG4qIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTVkcgc3RyaW5nXFxuKi9cXG4jbWFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQ2NHB4O1xcbiAgLyoqIC0tLS0tLS0tIENvbnRyb2xzIFJlc2V0cyAtLS0tLS0tLS0gKi9cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHtcXG4gICNtYXAge1xcbiAgICB3aWR0aDogNDY0cHg7XFxuICAgIGhlaWdodDogNDY0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG4jbWFwIGNhbnZhczpmb2N1cyB7XFxuICBib3JkZXI6ICNGQkM5MDAgc29saWQgMnB4O1xcbn1cXG4jbWFwIC5tYXBib3hnbC1jdHJsLWZ1bGxzY3JlZW4ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wge1xcbiAgbWFyZ2luOiA5cHggOXB4IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXA6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweDtcXG4gIHdpZHRoOiAyOXB4O1xcbiAgaGVpZ2h0OiAyOXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgYnV0dG9uIC5tYXBib3hnbC1jdHJsLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgYnV0dG9uOmhvdmVyLCAjbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIGJ1dHRvbjpmb2N1cyB7XFxuICB6LWluZGV4OiAzO1xcbiAgb3V0bGluZTogNHB4IHNvbGlkICNGQkM5MDA7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgYnV0dG9uIHNwYW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCBidXR0b24gc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC16b29tLW91dCAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXpvb20tb3V0IC5tYXBib3hnbC1jdHJsLWljb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtem9vbS1vdXQgLm1hcGJveGdsLWN0cmwtaWNvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJab29tIG91dFxcXCI7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM3cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZzogNXB4IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtem9vbS1pbiAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXpvb20taW4gLm1hcGJveGdsLWN0cmwtaWNvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC16b29tLWluIC5tYXBib3hnbC1jdHJsLWljb246aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWm9vbSBpblxcXCI7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM3cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZzogNXB4IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtZnVsbHNjcmVlbiAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLWZ1bGxzY3JlZW4gLm1hcGJveGdsLWN0cmwtaWNvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC1mdWxsc2NyZWVuIC5tYXBib3hnbC1jdHJsLWljb246aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiTWF4aW1pc2VcXFwiO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzN3B4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmc6IDVweCA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXNocmluayAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXNocmluayAubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXNocmluayAubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIk1pbmltaXNlXFxcIjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzdweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiA1cHggOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC1yZXNldCAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXJlc2V0IC5tYXBib3hnbC1jdHJsLWljb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtcmVzZXQgLm1hcGJveGdsLWN0cmwtaWNvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJSZXNldCB6b29tXFxcIjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzdweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiA1cHggOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC1yZXNldCAubWFwYm94Z2wtY3RybC1pY29uLS1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvdXRpbHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FBQTtBQytCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJDNUJRO0VEdUNSLHdDQUFBO0FFcENKO0FGMEJJO0VBUEo7SUFRUSxZQzlCSTtJRCtCSixhQy9CSTtJRGdDSixjQUFBO0VFdkJOO0FBQ0Y7QUZ5QlE7RUFDSSx5QkFBQTtBRXZCWjtBRjJCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FFekJSO0FGMkJJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVDekNhO0VEMENiLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FFekJSO0FGMEJRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JDcERTO0VEcURULHlCQzVERTtFRDZERixvQ0FBQTtBRXhCWjtBRnlCWTtFQUNJLGdCQUFBO0FFdkJoQjtBRnlCWTtFQUNJLHNCQUFBO0VBQ0EsV0M5REQ7RUQrREMsWUMvREQ7RURnRUMsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUV2QmhCO0FGd0JnQjtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUV0QnBCO0FGd0JnQjtFQUNJLFVDMUVPO0VEMkVQLDBCQUFBO0FFdEJwQjtBRndCZ0I7RUFDSSx5QkN6Rk47QUNtRWQ7QUZ1Qm9CO0VBQ0kseUJDL0ZWO0FDMEVkO0FGeERRO0VBQ0kseURBQUE7QUUwRFo7QUZ6RFk7RUFDSSx5REFBQTtBRTJEaEI7QUYvRUk7RUFDSSxtQkFpRzBDO0VBaEcxQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUVpRlI7QUYxRVE7RUFDSSx5REFBQTtBRTRFWjtBRjNFWTtFQUNJLHlEQUFBO0FFNkVoQjtBRmpHSTtFQUNJLGtCQWtHeUM7RUFqR3pDLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRW1HUjtBRjVGUTtFQUNJLHlEQUFBO0FFOEZaO0FGN0ZZO0VBQ0kseURBQUE7QUUrRmhCO0FGbkhJO0VBQ0ksbUJBbUc0QztFQWxHNUMsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FFcUhSO0FGOUdRO0VBQ0kseURBQUE7QUVnSFo7QUYvR1k7RUFDSSx5REFBQTtBRWlIaEI7QUZySUk7RUFDSSxtQkFvR3dDO0VBbkd4QyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUV1SVI7QUZoSVE7RUFDSSx5REFBQTtBRWtJWjtBRmpJWTtFQUNJLHlEQUFBO0FFbUloQjtBRnZKSTtFQUNJLHFCQXFHdUM7RUFwR3ZDLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRXlKUjtBRjVEZ0I7RUFDSSwwREFBQTtBRThEcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqIFxcbiogQHBhcmFtIHtTdHJpbmd9ICRuYW1lIC0gYHpvb20taW5gIG9yIGB6b29tLWluLXdoaXRlYCBldGMuXFxuKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU1ZHIHN0cmluZ1xcbiovXFxuQGZ1bmN0aW9uIGdldFNWRygkbmFtZSkge1xcbiAgICAkcmVzdWx0OiBcXFwiXFxcIjtcXG4gICAgQGVhY2ggJGssICR2IGluICRjdHJsLWljb25zIHtcXG4gICAgICAgIEBpZiBcXFwiI3skbmFtZX0taWNvblxcXCIgPT0gJGsge1xcbiAgICAgICAgICAgICRyZXN1bHQ6ICR2O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIEByZXR1cm4gJHJlc3VsdDtcXG59XCIsXCIvLyBNaXhpbnNcXG5AbWl4aW4gbWFwYm94LWN0cmwtYmFkZ2UoJGNvbnRlbnQpIHtcXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICRjb250ZW50O1xcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAzN3B4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA5cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkbWFwYm94LWN0cmwtcmFkaXVzO1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBtYXBib3gtY3RybC1pY29uKCRuYW1lLCAkY29udGVudCkge1xcbiAgICAkd2hpdGUtaWNvbjogXFxcIiN7JG5hbWV9LXdoaXRlXFxcIjtcXG4gICAgLm9ucy1jdHJsLSN7JG5hbWV9IHtcXG4gICAgICAgIC5tYXBib3hnbC1jdHJsLWljb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAje2dldFNWRygkbmFtZSl9XFxcIik7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAje2dldFNWRygkd2hpdGUtaWNvbil9XFxcIik7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcGJveC1jdHJsLWJhZGdlKCRjb250ZW50KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLy8gTWFwYm94IHN0eWxlc1xcbiNtYXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogJG1hcC13aWR0aDtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1kLWJyZWFrcG9pbnQpIHtcXG4gICAgICAgIHdpZHRoOiAkbWFwLXdpZHRoO1xcbiAgICAgICAgaGVpZ2h0OiAkbWFwLXdpZHRoO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgY2FudmFzIHtcXG4gICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgIGJvcmRlcjogJGNvbG9yLXN1bi15ZWxsb3cgc29saWQgMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC8qKiAtLS0tLS0tLSBDb250cm9scyBSZXNldHMgLS0tLS0tLS0tICovXFxuICAgIC5tYXBib3hnbC1jdHJsLWZ1bGxzY3JlZW4ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB9XFxuICAgIC5vbnMtbWFwLWNvbnRyb2wge1xcbiAgICAgICAgbWFyZ2luOiAkbWFwYm94LWN0cmwtbWFyZ2luICRtYXBib3gtY3RybC1tYXJnaW4gMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6ICRtYXBib3gtY3RybC16aW5kZXg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgLm9ucy1jdHJsLWdyb3VwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJG1hcGJveC1jdHJsLXJhZGl1cztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWdyZXktMTU7XFxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRtYXBib3gtY3RybC1yYWRpdXMgJG1hcGJveC1jdHJsLXJhZGl1cztcXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRidXR0b24td2lkdGg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogJGJ1dHRvbi13aWR0aDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgLm1hcGJveGdsLWN0cmwtaWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6ICRtYXBib3gtY3RybC16aW5kZXgtaG92ZXI7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiA0cHggc29saWQgJGNvbG9yLXN1bi15ZWxsb3c7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgQGluY2x1ZGUgbWFwYm94LWN0cmwtaWNvbihcXFwiem9vbS1vdXRcXFwiLCBcXFwiWm9vbSBvdXRcXFwiKTtcXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXBib3gtY3RybC1pY29uKFxcXCJ6b29tLWluXFxcIiwgXFxcIlpvb20gaW5cXFwiKTtcXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXBib3gtY3RybC1pY29uKFxcXCJmdWxsc2NyZWVuXFxcIiwgXFxcIk1heGltaXNlXFxcIik7XFxuICAgICAgICAgICAgQGluY2x1ZGUgbWFwYm94LWN0cmwtaWNvbihcXFwic2hyaW5rXFxcIiwgXFxcIk1pbmltaXNlXFxcIik7XFxuICAgICAgICAgICAgQGluY2x1ZGUgbWFwYm94LWN0cmwtaWNvbihcXFwicmVzZXRcXFwiLCBcXFwiUmVzZXQgem9vbVxcXCIpIHtcXG4gICAgICAgICAgICAgICAgJi0tZGlzYWJsZWQge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsICN7Z2V0U1ZHKCdyZXNldC1ncmV5Jyl9XFxcIik7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIvLyBDb2xvcnNcXG4kY29sb3ItYmxhY2s6ICMyMjIyMjI7XFxuJGNvbG9yLWdyZXktMTU6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4kY29sb3ItZ3JleS01OiAjRjVGNUY2O1xcbiRjb2xvci1zdW4teWVsbG93OiAjRkJDOTAwO1xcbiRjb2xvci13aGl0ZTogI0ZGRkZGRjtcXG5cXG4vLyBEZWZhdWx0c1xcbiRtZC1icmVha3BvaW50OiA3NDBweDtcXG4kbWFwLXdpZHRoOiA0NjRweDtcXG4kYnV0dG9uLXdpZHRoOiAyOXB4O1xcbiRtYXBib3gtY3RybC1tYXJnaW46IDlweDtcXG4kbWFwYm94LWN0cmwtcmFkaXVzOiA0cHg7XFxuXFxuLy8gWi1pbmRleGVzXFxuJG1hcGJveC1jdHJsLXppbmRleDogMjtcXG4kbWFwYm94LWN0cmwtemluZGV4LWhvdmVyOiAzO1xcblxcbi8vIEljb25zXFxuJHpvb20taW4td2hpdGUtaWNvbjogXFxcIiUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nMTMnIHZpZXdCb3g9JzAgMCAxMyAxMycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J002LjUgMC41QzUuNzUgMC41IDUgMS4yNSA1IDJWNUgyQzEuMjUgNSAwLjUgNS43NSAwLjUgNi41QzAuNSA3LjI1IDEuMjUgOCAyIDhINVYxMUM1IDExLjc1IDUuNzUgMTIuNSA2LjUgMTIuNUM3LjI1IDEyLjUgOCAxMS43NSA4IDExVjhIMTFDMTEuNzUgOCAxMi41IDcuMjUgMTIuNSA2LjVDMTIuNSA1Ljc1IDExLjc1IDUgMTEgNUg4VjJDOCAxLjI1IDcuMjUgMC41IDYuNSAwLjVaJyBmaWxsPSd3aGl0ZScgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIjtcXG4kem9vbS1pbi1pY29uOiBcXFwiJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PScxMycgdmlld0JveD0nMCAwIDEzIDEzJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICUzRSUzQ3BhdGggZD0nTTYuNSAwLjVDNS43NSAwLjUgNSAxLjI1IDUgMlY1SDJDMS4yNSA1IDAuNSA1Ljc1IDAuNSA2LjVDMC41IDcuMjUgMS4yNSA4IDIgOEg1VjExQzUgMTEuNzUgNS43NSAxMi41IDYuNSAxMi41QzcuMjUgMTIuNSA4IDExLjc1IDggMTFWOEgxMUMxMS43NSA4IDEyLjUgNy4yNSAxMi41IDYuNUMxMi41IDUuNzUgMTEuNzUgNSAxMSA1SDhWMkM4IDEuMjUgNy4yNSAwLjUgNi41IDAuNVonIGZpbGw9J2JsYWNrJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiO1xcbiR6b29tLW91dC1pY29uOiBcXFwiJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSczJyB2aWV3Qm94PScwIDAgMTMgMycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00yIDBDMS4yNSAwIDAuNSAwLjc1IDAuNSAxLjVDMC41IDIuMjUgMS4yNSAzIDIgM0gxMUMxMS43NSAzIDEyLjUgMi4yNSAxMi41IDEuNUMxMi41IDAuNzUgMTEuNzUgMCAxMSAwSDJaJyBmaWxsPSdibGFjaycgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIjtcXG4kem9vbS1vdXQtd2hpdGUtaWNvbjogXFxcIiUzQ3N2ZyB3aWR0aD0nMTMnIGhlaWdodD0nMycgdmlld0JveD0nMCAwIDEzIDMnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMiAwQzEuMjUgMCAwLjUgMC43NSAwLjUgMS41QzAuNSAyLjI1IDEuMjUgMyAyIDNIMTFDMTEuNzUgMyAxMi41IDIuMjUgMTIuNSAxLjVDMTIuNSAwLjc1IDExLjc1IDAgMTEgMEgyWicgZmlsbD0nd2hpdGUnICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCI7XFxuJHJlc2V0LWljb246IFxcXCIlM0Nzdmcgd2lkdGg9JzI5JyBoZWlnaHQ9JzI5JyB2aWV3Qm94PScwIDAgMjkgMjknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMjAuNjMzNyA4LjM1MjkyQzE5LjAwMzcgNi43MjI5MiAxNi42OTM3IDUuNzgyOTIgMTQuMTUzNyA2LjA0MjkyQzEwLjQ4MzcgNi40MTI5MiA3LjQ2MzY2IDkuMzkyOTIgNy4wNTM2NiAxMy4wNjI5QzYuNTAzNjYgMTcuOTEyOSAxMC4yNTM3IDIyLjAwMjkgMTQuOTgzNyAyMi4wMDI5QzE4LjE3MzcgMjIuMDAyOSAyMC45MTM3IDIwLjEzMjkgMjIuMTkzNyAxNy40NDI5QzIyLjUxMzcgMTYuNzcyOSAyMi4wMzM3IDE2LjAwMjkgMjEuMjkzNyAxNi4wMDI5QzIwLjkyMzcgMTYuMDAyOSAyMC41NzM3IDE2LjIwMjkgMjAuNDEzNyAxNi41MzI5QzE5LjI4MzcgMTguOTYyOSAxNi41NzM3IDIwLjUwMjkgMTMuNjEzNyAxOS44NDI5QzExLjM5MzcgMTkuMzUyOSA5LjYwMzY2IDE3LjU0MjkgOS4xMzM2NiAxNS4zMjI5QzguMjkzNjYgMTEuNDQyOSAxMS4yNDM3IDguMDAyOTIgMTQuOTgzNyA4LjAwMjkyQzE2LjY0MzcgOC4wMDI5MiAxOC4xMjM3IDguNjkyOTIgMTkuMjAzNyA5Ljc4MjkyTDE3LjY5MzcgMTEuMjkyOUMxNy4wNjM3IDExLjkyMjkgMTcuNTAzNyAxMy4wMDI5IDE4LjM5MzcgMTMuMDAyOUgyMS45ODM3QzIyLjUzMzcgMTMuMDAyOSAyMi45ODM3IDEyLjU1MjkgMjIuOTgzNyAxMi4wMDI5VjguNDEyOTJDMjIuOTgzNyA3LjUyMjkyIDIxLjkwMzcgNy4wNzI5MiAyMS4yNzM3IDcuNzAyOTJMMjAuNjMzNyA4LjM1MjkyWicgZmlsbD0nYmxhY2snICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCI7XFxuJHJlc2V0LXdoaXRlLWljb246IFxcXCIlM0Nzdmcgd2lkdGg9JzI5JyBoZWlnaHQ9JzI5JyB2aWV3Qm94PScwIDAgMjkgMjknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMjAuNjMzNyA4LjM1MjkyQzE5LjAwMzcgNi43MjI5MiAxNi42OTM3IDUuNzgyOTIgMTQuMTUzNyA2LjA0MjkyQzEwLjQ4MzcgNi40MTI5MiA3LjQ2MzY2IDkuMzkyOTIgNy4wNTM2NiAxMy4wNjI5QzYuNTAzNjYgMTcuOTEyOSAxMC4yNTM3IDIyLjAwMjkgMTQuOTgzNyAyMi4wMDI5QzE4LjE3MzcgMjIuMDAyOSAyMC45MTM3IDIwLjEzMjkgMjIuMTkzNyAxNy40NDI5QzIyLjUxMzcgMTYuNzcyOSAyMi4wMzM3IDE2LjAwMjkgMjEuMjkzNyAxNi4wMDI5QzIwLjkyMzcgMTYuMDAyOSAyMC41NzM3IDE2LjIwMjkgMjAuNDEzNyAxNi41MzI5QzE5LjI4MzcgMTguOTYyOSAxNi41NzM3IDIwLjUwMjkgMTMuNjEzNyAxOS44NDI5QzExLjM5MzcgMTkuMzUyOSA5LjYwMzY2IDE3LjU0MjkgOS4xMzM2NiAxNS4zMjI5QzguMjkzNjYgMTEuNDQyOSAxMS4yNDM3IDguMDAyOTIgMTQuOTgzNyA4LjAwMjkyQzE2LjY0MzcgOC4wMDI5MiAxOC4xMjM3IDguNjkyOTIgMTkuMjAzNyA5Ljc4MjkyTDE3LjY5MzcgMTEuMjkyOUMxNy4wNjM3IDExLjkyMjkgMTcuNTAzNyAxMy4wMDI5IDE4LjM5MzcgMTMuMDAyOUgyMS45ODM3QzIyLjUzMzcgMTMuMDAyOSAyMi45ODM3IDEyLjU1MjkgMjIuOTgzNyAxMi4wMDI5VjguNDEyOTJDMjIuOTgzNyA3LjUyMjkyIDIxLjkwMzcgNy4wNzI5MiAyMS4yNzM3IDcuNzAyOTJMMjAuNjMzNyA4LjM1MjkyWicgZmlsbD0nd2hpdGUnICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCI7XFxuJHJlc2V0LWdyZXktaWNvbjogXFxcIiUzQ3N2ZyB3aWR0aD0nMjknIGhlaWdodD0nMjknIHZpZXdCb3g9JzAgMCAyOSAyOScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00yMC42MzM3IDguMzUyOTJDMTkuMDAzNyA2LjcyMjkyIDE2LjY5MzcgNS43ODI5MiAxNC4xNTM3IDYuMDQyOTJDMTAuNDgzNyA2LjQxMjkyIDcuNDYzNjYgOS4zOTI5MiA3LjA1MzY2IDEzLjA2MjlDNi41MDM2NiAxNy45MTI5IDEwLjI1MzcgMjIuMDAyOSAxNC45ODM3IDIyLjAwMjlDMTguMTczNyAyMi4wMDI5IDIwLjkxMzcgMjAuMTMyOSAyMi4xOTM3IDE3LjQ0MjlDMjIuNTEzNyAxNi43NzI5IDIyLjAzMzcgMTYuMDAyOSAyMS4yOTM3IDE2LjAwMjlDMjAuOTIzNyAxNi4wMDI5IDIwLjU3MzcgMTYuMjAyOSAyMC40MTM3IDE2LjUzMjlDMTkuMjgzNyAxOC45NjI5IDE2LjU3MzcgMjAuNTAyOSAxMy42MTM3IDE5Ljg0MjlDMTEuMzkzNyAxOS4zNTI5IDkuNjAzNjYgMTcuNTQyOSA5LjEzMzY2IDE1LjMyMjlDOC4yOTM2NiAxMS40NDI5IDExLjI0MzcgOC4wMDI5MiAxNC45ODM3IDguMDAyOTJDMTYuNjQzNyA4LjAwMjkyIDE4LjEyMzcgOC42OTI5MiAxOS4yMDM3IDkuNzgyOTJMMTcuNjkzNyAxMS4yOTI5QzE3LjA2MzcgMTEuOTIyOSAxNy41MDM3IDEzLjAwMjkgMTguMzkzNyAxMy4wMDI5SDIxLjk4MzdDMjIuNTMzNyAxMy4wMDI5IDIyLjk4MzcgMTIuNTUyOSAyMi45ODM3IDEyLjAwMjlWOC40MTI5MkMyMi45ODM3IDcuNTIyOTIgMjEuOTAzNyA3LjA3MjkyIDIxLjI3MzcgNy43MDI5MkwyMC42MzM3IDguMzUyOTJaJyBmaWxsPSdncmV5JyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiO1xcbiRmdWxsc2NyZWVuLWljb246IFxcXCIlM0Nzdmcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE5JyB2aWV3Qm94PScwIDAgMTkgMTknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMTkgMTFWMTYuNUMxOSAxOC4yNSAxOC4yNSAxOSAxNi41IDE5SDExVjE4TDE0IDE2LjVMMTAgMTFMMTEgMTBMMTYuNSAxNEwxOCAxMUgxOVpNMSAxMUwyLjUgMTRMOCAxMEw5IDExTDUgMTYuNUw4IDE4VjE5SDIuNUMwLjc1IDE5IDAgMTguMjUgMCAxNi41VjExSDFaTTggMFYxTDUgMi41TDkgOEw4IDlMMi41IDVMMSA4SDBWMi41QzAgMC43NSAwLjc1IDAgMi41IDBIOFpNMTkgMi41QzE5IDAuNzUgMTguMjUgMCAxNi41IDBIMTFWMUwxNCAyLjVMMTAgOEwxMSA5TDE2LjUgNUwxOCA4SDE5VjIuNVonIGZpbGw9J2JsYWNrJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiO1xcbiRmdWxsc2NyZWVuLXdoaXRlLWljb246IFxcXCIlM0Nzdmcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE5JyB2aWV3Qm94PScwIDAgMTkgMTknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMTkgMTFWMTYuNUMxOSAxOC4yNSAxOC4yNSAxOSAxNi41IDE5SDExVjE4TDE0IDE2LjVMMTAgMTFMMTEgMTBMMTYuNSAxNEwxOCAxMUgxOVpNMSAxMUwyLjUgMTRMOCAxMEw5IDExTDUgMTYuNUw4IDE4VjE5SDIuNUMwLjc1IDE5IDAgMTguMjUgMCAxNi41VjExSDFaTTggMFYxTDUgMi41TDkgOEw4IDlMMi41IDVMMSA4SDBWMi41QzAgMC43NSAwLjc1IDAgMi41IDBIOFpNMTkgMi41QzE5IDAuNzUgMTguMjUgMCAxNi41IDBIMTFWMUwxNCAyLjVMMTAgOEwxMSA5TDE2LjUgNUwxOCA4SDE5VjIuNVonIGZpbGw9J3doaXRlJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiO1xcbiRzaHJpbmstaWNvbjogXFxcIiUzQ3N2ZyB3aWR0aD0nMjEnIGhlaWdodD0nMjEnIHZpZXdCb3g9JzAgMCAyMSAyMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00xNC41IDEyQzEyLjc1IDEyIDEyIDEyLjc1IDEyIDE0LjVWMjBIMTNMMTQuNSAxN0wyMCAyMUwyMSAyMEwxNyAxNC41TDIwIDEzVjEySDE0LjVaTTkgMTQuNUM5IDEyLjc1IDguMjUgMTIgNi41IDEySDFWMTNMNCAxNC41TDAgMjBMMSAyMUw2LjUgMTdMOCAyMEg5VjE0LjVaTTEyIDYuNUMxMiA4LjI1IDEyLjc1IDkgMTQuNSA5SDIwVjhMMTcgNi41TDIxIDFMMjAgMEwxNC41IDRMMTMgMUgxMlY2LjVaTTYuNSA5QzguMjUgOSA5IDguMjUgOSA2LjVWMUg4TDYuNSA0TDEgMEwwIDFMNCA2LjVMMSA4VjlINi41WicgZmlsbD0nYmxhY2snICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCI7XFxuJHNocmluay13aGl0ZS1pY29uOiBcXFwiJTNDc3ZnIHdpZHRoPScyMScgaGVpZ2h0PScyMScgdmlld0JveD0nMCAwIDIxIDIxJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICUzRSUzQ3BhdGggZD0nTTE0LjUgMTJDMTIuNzUgMTIgMTIgMTIuNzUgMTIgMTQuNVYyMEgxM0wxNC41IDE3TDIwIDIxTDIxIDIwTDE3IDE0LjVMMjAgMTNWMTJIMTQuNVpNOSAxNC41QzkgMTIuNzUgOC4yNSAxMiA2LjUgMTJIMVYxM0w0IDE0LjVMMCAyMEwxIDIxTDYuNSAxN0w4IDIwSDlWMTQuNVpNMTIgNi41QzEyIDguMjUgMTIuNzUgOSAxNC41IDlIMjBWOEwxNyA2LjVMMjEgMUwyMCAwTDE0LjUgNEwxMyAxSDEyVjYuNVpNNi41IDlDOC4yNSA5IDkgOC4yNSA5IDYuNVYxSDhMNi41IDRMMSAwTDAgMUw0IDYuNUwxIDhWOUg2LjVaJyBmaWxsPSd3aGl0ZScgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIjtcXG5cXG4kY3RybC1pY29uczogKFxcbiAgICBcXFwiem9vbS1pbi13aGl0ZS1pY29uXFxcIjogJHpvb20taW4td2hpdGUtaWNvbixcXG4gICAgXFxcInpvb20taW4taWNvblxcXCI6ICR6b29tLWluLWljb24sXFxuICAgIFxcXCJ6b29tLW91dC1pY29uXFxcIjogJHpvb20tb3V0LWljb24sXFxuICAgIFxcXCJ6b29tLW91dC13aGl0ZS1pY29uXFxcIjogJHpvb20tb3V0LXdoaXRlLWljb24sXFxuICAgIFxcXCJyZXNldC1pY29uXFxcIjogJHJlc2V0LWljb24sXFxuICAgIFxcXCJyZXNldC13aGl0ZS1pY29uXFxcIjogJHJlc2V0LXdoaXRlLWljb24sXFxuICAgIFxcXCJyZXNldC1ncmV5LWljb25cXFwiOiAkcmVzZXQtZ3JleS1pY29uLFxcbiAgICBcXFwiZnVsbHNjcmVlbi1pY29uXFxcIjogJGZ1bGxzY3JlZW4taWNvbixcXG4gICAgXFxcImZ1bGxzY3JlZW4td2hpdGUtaWNvblxcXCI6ICRmdWxsc2NyZWVuLXdoaXRlLWljb24sXFxuICAgIFxcXCJzaHJpbmstaWNvblxcXCI6ICRzaHJpbmstaWNvbixcXG4gICAgXFxcInNocmluay13aGl0ZS1pY29uXFxcIjogJHNocmluay13aGl0ZS1pY29uLFxcbik7XCIsXCIvKiogXFxuKiBAcGFyYW0ge1N0cmluZ30gJG5hbWUgLSBgem9vbS1pbmAgb3IgYHpvb20taW4td2hpdGVgIGV0Yy5cXG4qIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTVkcgc3RyaW5nXFxuKi9cXG4jbWFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQ2NHB4O1xcbiAgLyoqIC0tLS0tLS0tIENvbnRyb2xzIFJlc2V0cyAtLS0tLS0tLS0gKi9cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHtcXG4gICNtYXAge1xcbiAgICB3aWR0aDogNDY0cHg7XFxuICAgIGhlaWdodDogNDY0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG4jbWFwIGNhbnZhczpmb2N1cyB7XFxuICBib3JkZXI6ICNGQkM5MDAgc29saWQgMnB4O1xcbn1cXG4jbWFwIC5tYXBib3hnbC1jdHJsLWZ1bGxzY3JlZW4ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wge1xcbiAgbWFyZ2luOiA5cHggOXB4IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXA6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweDtcXG4gIHdpZHRoOiAyOXB4O1xcbiAgaGVpZ2h0OiAyOXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgYnV0dG9uIC5tYXBib3hnbC1jdHJsLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgYnV0dG9uOmhvdmVyLCAjbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIGJ1dHRvbjpmb2N1cyB7XFxuICB6LWluZGV4OiAzO1xcbiAgb3V0bGluZTogNHB4IHNvbGlkICNGQkM5MDA7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgYnV0dG9uIHNwYW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCBidXR0b24gc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC16b29tLW91dCAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzMnIHZpZXdCb3g9JzAgMCAxMyAzJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICUzRSUzQ3BhdGggZD0nTTIgMEMxLjI1IDAgMC41IDAuNzUgMC41IDEuNUMwLjUgMi4yNSAxLjI1IDMgMiAzSDExQzExLjc1IDMgMTIuNSAyLjI1IDEyLjUgMS41QzEyLjUgMC43NSAxMS43NSAwIDExIDBIMlonIGZpbGw9J2JsYWNrJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtem9vbS1vdXQgLm1hcGJveGdsLWN0cmwtaWNvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PSczJyB2aWV3Qm94PScwIDAgMTMgMycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00yIDBDMS4yNSAwIDAuNSAwLjc1IDAuNSAxLjVDMC41IDIuMjUgMS4yNSAzIDIgM0gxMUMxMS43NSAzIDEyLjUgMi4yNSAxMi41IDEuNUMxMi41IDAuNzUgMTEuNzUgMCAxMSAwSDJaJyBmaWxsPSd3aGl0ZScgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXpvb20tb3V0IC5tYXBib3hnbC1jdHJsLWljb246aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWm9vbSBvdXRcXFwiO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzN3B4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmc6IDVweCA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXpvb20taW4gLm1hcGJveGdsLWN0cmwtaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPScxMycgaGVpZ2h0PScxMycgdmlld0JveD0nMCAwIDEzIDEzJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICUzRSUzQ3BhdGggZD0nTTYuNSAwLjVDNS43NSAwLjUgNSAxLjI1IDUgMlY1SDJDMS4yNSA1IDAuNSA1Ljc1IDAuNSA2LjVDMC41IDcuMjUgMS4yNSA4IDIgOEg1VjExQzUgMTEuNzUgNS43NSAxMi41IDYuNSAxMi41QzcuMjUgMTIuNSA4IDExLjc1IDggMTFWOEgxMUMxMS43NSA4IDEyLjUgNy4yNSAxMi41IDYuNUMxMi41IDUuNzUgMTEuNzUgNSAxMSA1SDhWMkM4IDEuMjUgNy4yNSAwLjUgNi41IDAuNVonIGZpbGw9J2JsYWNrJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtem9vbS1pbiAubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAlM0Nzdmcgd2lkdGg9JzEzJyBoZWlnaHQ9JzEzJyB2aWV3Qm94PScwIDAgMTMgMTMnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNNi41IDAuNUM1Ljc1IDAuNSA1IDEuMjUgNSAyVjVIMkMxLjI1IDUgMC41IDUuNzUgMC41IDYuNUMwLjUgNy4yNSAxLjI1IDggMiA4SDVWMTFDNSAxMS43NSA1Ljc1IDEyLjUgNi41IDEyLjVDNy4yNSAxMi41IDggMTEuNzUgOCAxMVY4SDExQzExLjc1IDggMTIuNSA3LjI1IDEyLjUgNi41QzEyLjUgNS43NSAxMS43NSA1IDExIDVIOFYyQzggMS4yNSA3LjI1IDAuNSA2LjUgMC41WicgZmlsbD0nd2hpdGUnICUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC16b29tLWluIC5tYXBib3hnbC1jdHJsLWljb246aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWm9vbSBpblxcXCI7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM3cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZzogNXB4IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtZnVsbHNjcmVlbiAubWFwYm94Z2wtY3RybC1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAlM0Nzdmcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE5JyB2aWV3Qm94PScwIDAgMTkgMTknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMTkgMTFWMTYuNUMxOSAxOC4yNSAxOC4yNSAxOSAxNi41IDE5SDExVjE4TDE0IDE2LjVMMTAgMTFMMTEgMTBMMTYuNSAxNEwxOCAxMUgxOVpNMSAxMUwyLjUgMTRMOCAxMEw5IDExTDUgMTYuNUw4IDE4VjE5SDIuNUMwLjc1IDE5IDAgMTguMjUgMCAxNi41VjExSDFaTTggMFYxTDUgMi41TDkgOEw4IDlMMi41IDVMMSA4SDBWMi41QzAgMC43NSAwLjc1IDAgMi41IDBIOFpNMTkgMi41QzE5IDAuNzUgMTguMjUgMCAxNi41IDBIMTFWMUwxNCAyLjVMMTAgOEwxMSA5TDE2LjUgNUwxOCA4SDE5VjIuNVonIGZpbGw9J2JsYWNrJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtZnVsbHNjcmVlbiAubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAlM0Nzdmcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE5JyB2aWV3Qm94PScwIDAgMTkgMTknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMTkgMTFWMTYuNUMxOSAxOC4yNSAxOC4yNSAxOSAxNi41IDE5SDExVjE4TDE0IDE2LjVMMTAgMTFMMTEgMTBMMTYuNSAxNEwxOCAxMUgxOVpNMSAxMUwyLjUgMTRMOCAxMEw5IDExTDUgMTYuNUw4IDE4VjE5SDIuNUMwLjc1IDE5IDAgMTguMjUgMCAxNi41VjExSDFaTTggMFYxTDUgMi41TDkgOEw4IDlMMi41IDVMMSA4SDBWMi41QzAgMC43NSAwLjc1IDAgMi41IDBIOFpNMTkgMi41QzE5IDAuNzUgMTguMjUgMCAxNi41IDBIMTFWMUwxNCAyLjVMMTAgOEwxMSA5TDE2LjUgNUwxOCA4SDE5VjIuNVonIGZpbGw9J3doaXRlJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtZnVsbHNjcmVlbiAubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIk1heGltaXNlXFxcIjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzdweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiA1cHggOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4jbWFwIC5vbnMtbWFwLWNvbnRyb2wgLm9ucy1jdHJsLWdyb3VwIC5vbnMtY3RybC1zaHJpbmsgLm1hcGJveGdsLWN0cmwtaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHdpZHRoPScyMScgaGVpZ2h0PScyMScgdmlld0JveD0nMCAwIDIxIDIxJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICUzRSUzQ3BhdGggZD0nTTE0LjUgMTJDMTIuNzUgMTIgMTIgMTIuNzUgMTIgMTQuNVYyMEgxM0wxNC41IDE3TDIwIDIxTDIxIDIwTDE3IDE0LjVMMjAgMTNWMTJIMTQuNVpNOSAxNC41QzkgMTIuNzUgOC4yNSAxMiA2LjUgMTJIMVYxM0w0IDE0LjVMMCAyMEwxIDIxTDYuNSAxN0w4IDIwSDlWMTQuNVpNMTIgNi41QzEyIDguMjUgMTIuNzUgOSAxNC41IDlIMjBWOEwxNyA2LjVMMjEgMUwyMCAwTDE0LjUgNEwxMyAxSDEyVjYuNVpNNi41IDlDOC4yNSA5IDkgOC4yNSA5IDYuNVYxSDhMNi41IDRMMSAwTDAgMUw0IDYuNUwxIDhWOUg2LjVaJyBmaWxsPSdibGFjaycgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXNocmluayAubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCAlM0Nzdmcgd2lkdGg9JzIxJyBoZWlnaHQ9JzIxJyB2aWV3Qm94PScwIDAgMjEgMjEnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgJTNFJTNDcGF0aCBkPSdNMTQuNSAxMkMxMi43NSAxMiAxMiAxMi43NSAxMiAxNC41VjIwSDEzTDE0LjUgMTdMMjAgMjFMMjEgMjBMMTcgMTQuNUwyMCAxM1YxMkgxNC41Wk05IDE0LjVDOSAxMi43NSA4LjI1IDEyIDYuNSAxMkgxVjEzTDQgMTQuNUwwIDIwTDEgMjFMNi41IDE3TDggMjBIOVYxNC41Wk0xMiA2LjVDMTIgOC4yNSAxMi43NSA5IDE0LjUgOUgyMFY4TDE3IDYuNUwyMSAxTDIwIDBMMTQuNSA0TDEzIDFIMTJWNi41Wk02LjUgOUM4LjI1IDkgOSA4LjI1IDkgNi41VjFIOEw2LjUgNEwxIDBMMCAxTDQgNi41TDEgOFY5SDYuNVonIGZpbGw9J3doaXRlJyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtc2hyaW5rIC5tYXBib3hnbC1jdHJsLWljb246aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiTWluaW1pc2VcXFwiO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzN3B4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmc6IDVweCA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXJlc2V0IC5tYXBib3hnbC1jdHJsLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0nMjknIGhlaWdodD0nMjknIHZpZXdCb3g9JzAgMCAyOSAyOScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00yMC42MzM3IDguMzUyOTJDMTkuMDAzNyA2LjcyMjkyIDE2LjY5MzcgNS43ODI5MiAxNC4xNTM3IDYuMDQyOTJDMTAuNDgzNyA2LjQxMjkyIDcuNDYzNjYgOS4zOTI5MiA3LjA1MzY2IDEzLjA2MjlDNi41MDM2NiAxNy45MTI5IDEwLjI1MzcgMjIuMDAyOSAxNC45ODM3IDIyLjAwMjlDMTguMTczNyAyMi4wMDI5IDIwLjkxMzcgMjAuMTMyOSAyMi4xOTM3IDE3LjQ0MjlDMjIuNTEzNyAxNi43NzI5IDIyLjAzMzcgMTYuMDAyOSAyMS4yOTM3IDE2LjAwMjlDMjAuOTIzNyAxNi4wMDI5IDIwLjU3MzcgMTYuMjAyOSAyMC40MTM3IDE2LjUzMjlDMTkuMjgzNyAxOC45NjI5IDE2LjU3MzcgMjAuNTAyOSAxMy42MTM3IDE5Ljg0MjlDMTEuMzkzNyAxOS4zNTI5IDkuNjAzNjYgMTcuNTQyOSA5LjEzMzY2IDE1LjMyMjlDOC4yOTM2NiAxMS40NDI5IDExLjI0MzcgOC4wMDI5MiAxNC45ODM3IDguMDAyOTJDMTYuNjQzNyA4LjAwMjkyIDE4LjEyMzcgOC42OTI5MiAxOS4yMDM3IDkuNzgyOTJMMTcuNjkzNyAxMS4yOTI5QzE3LjA2MzcgMTEuOTIyOSAxNy41MDM3IDEzLjAwMjkgMTguMzkzNyAxMy4wMDI5SDIxLjk4MzdDMjIuNTMzNyAxMy4wMDI5IDIyLjk4MzcgMTIuNTUyOSAyMi45ODM3IDEyLjAwMjlWOC40MTI5MkMyMi45ODM3IDcuNTIyOTIgMjEuOTAzNyA3LjA3MjkyIDIxLjI3MzcgNy43MDI5MkwyMC42MzM3IDguMzUyOTJaJyBmaWxsPSdibGFjaycgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXJlc2V0IC5tYXBib3hnbC1jdHJsLWljb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0nMjknIGhlaWdodD0nMjknIHZpZXdCb3g9JzAgMCAyOSAyOScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00yMC42MzM3IDguMzUyOTJDMTkuMDAzNyA2LjcyMjkyIDE2LjY5MzcgNS43ODI5MiAxNC4xNTM3IDYuMDQyOTJDMTAuNDgzNyA2LjQxMjkyIDcuNDYzNjYgOS4zOTI5MiA3LjA1MzY2IDEzLjA2MjlDNi41MDM2NiAxNy45MTI5IDEwLjI1MzcgMjIuMDAyOSAxNC45ODM3IDIyLjAwMjlDMTguMTczNyAyMi4wMDI5IDIwLjkxMzcgMjAuMTMyOSAyMi4xOTM3IDE3LjQ0MjlDMjIuNTEzNyAxNi43NzI5IDIyLjAzMzcgMTYuMDAyOSAyMS4yOTM3IDE2LjAwMjlDMjAuOTIzNyAxNi4wMDI5IDIwLjU3MzcgMTYuMjAyOSAyMC40MTM3IDE2LjUzMjlDMTkuMjgzNyAxOC45NjI5IDE2LjU3MzcgMjAuNTAyOSAxMy42MTM3IDE5Ljg0MjlDMTEuMzkzNyAxOS4zNTI5IDkuNjAzNjYgMTcuNTQyOSA5LjEzMzY2IDE1LjMyMjlDOC4yOTM2NiAxMS40NDI5IDExLjI0MzcgOC4wMDI5MiAxNC45ODM3IDguMDAyOTJDMTYuNjQzNyA4LjAwMjkyIDE4LjEyMzcgOC42OTI5MiAxOS4yMDM3IDkuNzgyOTJMMTcuNjkzNyAxMS4yOTI5QzE3LjA2MzcgMTEuOTIyOSAxNy41MDM3IDEzLjAwMjkgMTguMzkzNyAxMy4wMDI5SDIxLjk4MzdDMjIuNTMzNyAxMy4wMDI5IDIyLjk4MzcgMTIuNTUyOSAyMi45ODM3IDEyLjAwMjlWOC40MTI5MkMyMi45ODM3IDcuNTIyOTIgMjEuOTAzNyA3LjA3MjkyIDIxLjI3MzcgNy43MDI5MkwyMC42MzM3IDguMzUyOTJaJyBmaWxsPSd3aGl0ZScgJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcbiNtYXAgLm9ucy1tYXAtY29udHJvbCAub25zLWN0cmwtZ3JvdXAgLm9ucy1jdHJsLXJlc2V0IC5tYXBib3hnbC1jdHJsLWljb246aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUmVzZXQgem9vbVxcXCI7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM3cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZzogNXB4IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuI21hcCAub25zLW1hcC1jb250cm9sIC5vbnMtY3RybC1ncm91cCAub25zLWN0cmwtcmVzZXQgLm1hcGJveGdsLWN0cmwtaWNvbi0tZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsICUzQ3N2ZyB3aWR0aD0nMjknIGhlaWdodD0nMjknIHZpZXdCb3g9JzAgMCAyOSAyOScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAlM0UlM0NwYXRoIGQ9J00yMC42MzM3IDguMzUyOTJDMTkuMDAzNyA2LjcyMjkyIDE2LjY5MzcgNS43ODI5MiAxNC4xNTM3IDYuMDQyOTJDMTAuNDgzNyA2LjQxMjkyIDcuNDYzNjYgOS4zOTI5MiA3LjA1MzY2IDEzLjA2MjlDNi41MDM2NiAxNy45MTI5IDEwLjI1MzcgMjIuMDAyOSAxNC45ODM3IDIyLjAwMjlDMTguMTczNyAyMi4wMDI5IDIwLjkxMzcgMjAuMTMyOSAyMi4xOTM3IDE3LjQ0MjlDMjIuNTEzNyAxNi43NzI5IDIyLjAzMzcgMTYuMDAyOSAyMS4yOTM3IDE2LjAwMjlDMjAuOTIzNyAxNi4wMDI5IDIwLjU3MzcgMTYuMjAyOSAyMC40MTM3IDE2LjUzMjlDMTkuMjgzNyAxOC45NjI5IDE2LjU3MzcgMjAuNTAyOSAxMy42MTM3IDE5Ljg0MjlDMTEuMzkzNyAxOS4zNTI5IDkuNjAzNjYgMTcuNTQyOSA5LjEzMzY2IDE1LjMyMjlDOC4yOTM2NiAxMS40NDI5IDExLjI0MzcgOC4wMDI5MiAxNC45ODM3IDguMDAyOTJDMTYuNjQzNyA4LjAwMjkyIDE4LjEyMzcgOC42OTI5MiAxOS4yMDM3IDkuNzgyOTJMMTcuNjkzNyAxMS4yOTI5QzE3LjA2MzcgMTEuOTIyOSAxNy41MDM3IDEzLjAwMjkgMTguMzkzNyAxMy4wMDI5SDIxLjk4MzdDMjIuNTMzNyAxMy4wMDI5IDIyLjk4MzcgMTIuNTUyOSAyMi45ODM3IDEyLjAwMjlWOC40MTI5MkMyMi45ODM3IDcuNTIyOTIgMjEuOTAzNyA3LjA3MjkyIDIxLjI3MzcgNy43MDI5MkwyMC42MzM3IDguMzUyOTJaJyBmaWxsPSdncmV5JyAlM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIE1hcFN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcFN0YXRlKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB7XG4gICAgICAgICAgICBoYXNNb3ZlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hcFN0YXRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmNvbnRleHQpLCB2YWwpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN0YXRlO1xufSgpKTtcbmV4cG9ydCB7IE1hcFN0YXRlIH07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgTWFwU3RhdGUgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG4vKiogQGludGVybmFsICovXG52YXIgT05TQ29udHJvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPTlNDb250cm9sKG1hcCwgYnRuU2VsZWN0b3IsIGJ0bkNsaWNrZWRTZWxjdG9yKSB7XG4gICAgICAgIGlmIChidG5DbGlja2VkU2VsY3RvciA9PT0gdm9pZCAwKSB7IGJ0bkNsaWNrZWRTZWxjdG9yID0gXCJcIjsgfVxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IE1hcFN0YXRlO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5idG5TZWxlY3RvciA9IGJ0blNlbGVjdG9yO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYnRuU2VsZWN0b3IgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9OU1pvb21JbkNvbnRyb2wgLSBidXR0b24gc2VsZWN0b3IgJ1wiLmNvbmNhdCh0aGlzLmJ0blNlbGVjdG9yLCBcIicgaXMgdW5kZWZpbmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ0bkNsaWNrZWRTZWxjdG9yID0gYnRuQ2xpY2tlZFNlbGN0b3I7XG4gICAgfVxuICAgIE9OU0NvbnRyb2wucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBidXR0b25cbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYnRuU2VsZWN0b3IpO1xuICAgICAgICBpZiAoIXRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPTlNDb250cm9sIC0gQ2FuJ3QgYWRkIGV2ZW50IGhhbmRsZXIgdG8gbm9uIGVsZW1lbnQgd2l0aCBuYW1lIFwiLmNvbmNhdCh0aGlzLmJ0blNlbGVjdG9yLCBcIiFcIikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICAvLyBzcGFuLm1hcGJveGdsLWN0cmwtaWNvblxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gdGhpcy5idXR0b24ucXVlcnlTZWxlY3RvcihcIi5tYXBib3hnbC1jdHJsLWljb25cIik7XG4gICAgICAgIGlmICghdGhpcy5pY29uRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk9OU0NvbnRyb2wgLSAnLm1hcGJveGdsLWN0cmwtaWNvbicgZWxlbWVudCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPTlNDb250cm9sLnByb3RvdHlwZS5zdHlsZUJ0bkRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJtYXBib3hnbC1jdHJsLWljb25cIjtcbiAgICB9O1xuICAgIE9OU0NvbnRyb2wucHJvdG90eXBlLnN0eWxlQnRuTm9uRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pY29uRWxlbWVudC5jbGFzc05hbWUgPSBcIm1hcGJveGdsLWN0cmwtaWNvbiBcIi5jb25jYXQodGhpcy5idG5DbGlja2VkU2VsY3Rvcik7XG4gICAgfTtcbiAgICByZXR1cm4gT05TQ29udHJvbDtcbn0oKSk7XG4vKiogQGludGVybmFsICovXG52YXIgT05TWm9vbUluQ29udHJvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT05TWm9vbUluQ29udHJvbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPTlNab29tSW5Db250cm9sKG1hcCwgYnRuU2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWFwLCBidG5TZWxlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5tYXAuem9vbUluKHsgZHVyYXRpb246IDEwMDAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE9OU1pvb21JbkNvbnRyb2w7XG59KE9OU0NvbnRyb2wpKTtcbmV4cG9ydCB7IE9OU1pvb21JbkNvbnRyb2wgfTtcbi8qKiBAaW50ZXJuYWwgKi9cbnZhciBPTlNab29tT3V0Q29udHJvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT05TWm9vbU91dENvbnRyb2wsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT05TWm9vbU91dENvbnRyb2wobWFwLCBidG5TZWxlY3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtYXAsIGJ0blNlbGVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLm1hcC56b29tT3V0KHsgZHVyYXRpb246IDEwMDAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE9OU1pvb21PdXRDb250cm9sO1xufShPTlNDb250cm9sKSk7XG5leHBvcnQgeyBPTlNab29tT3V0Q29udHJvbCB9O1xuLyoqIEBpbnRlcm5hbCAqL1xudmFyIE9OU1Jlc2V0Q29udHJvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT05TUmVzZXRDb250cm9sLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9OU1Jlc2V0Q29udHJvbChtYXAsIGJ0blNlbGVjdG9yLCBidG5DbGlja2VkU2VsY3RvciwgY2VudGVyLCB6b29tKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1hcCwgYnRuU2VsZWN0b3IsIGJ0bkNsaWNrZWRTZWxjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbk1vdmVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSByZXNldCBidG4gZGVmYXVsdCBpY29uXG4gICAgICAgICAgICBpZiAoIV90aGlzLnN0YXRlLmNvbnRleHQuaGFzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZS51cGRhdGUoeyBoYXNNb3ZlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3R5bGVCdG5EZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMubWFwLmZseVRvKHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IF90aGlzLmNlbnRlcixcbiAgICAgICAgICAgICAgICB6b29tOiBfdGhpcy56b29tLFxuICAgICAgICAgICAgICAgIGVzc2VudGlhbDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuc3RhdGUudXBkYXRlKHsgaGFzTW92ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgX3RoaXMuc3R5bGVCdG5Ob25EZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNlbnRlciA9IGNlbnRlcjtcbiAgICAgICAgX3RoaXMuem9vbSA9IHpvb207XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT05TUmVzZXRDb250cm9sLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXR1cC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3R5bGVCdG5Ob25EZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubWFwLm9uKFwibW92ZXN0YXJ0XCIsIHRoaXMub25Nb3ZlU3RhcnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE9OU1Jlc2V0Q29udHJvbDtcbn0oT05TQ29udHJvbCkpO1xuZXhwb3J0IHsgT05TUmVzZXRDb250cm9sIH07XG4vKiogQGludGVybmFsICovXG52YXIgT05TRnVsbFNjcmVlbkNvbnRyb2wgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9OU0Z1bGxTY3JlZW5Db250cm9sLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9OU0Z1bGxTY3JlZW5Db250cm9sKG1hcCwgYnRuU2VsZWN0b3IsIGJ0bkNsaWNrZWRTZWxjdG9yKSB7XG4gICAgICAgIGlmIChidG5DbGlja2VkU2VsY3RvciA9PT0gdm9pZCAwKSB7IGJ0bkNsaWNrZWRTZWxjdG9yID0gXCJcIjsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtYXAsIGJ0blNlbGVjdG9yLCBidG5DbGlja2VkU2VsY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoT05TRnVsbFNjcmVlbkNvbnRyb2wuaXNJbkZ1bGxTY3JlZW5Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBPTlNGdWxsU2NyZWVuQ29udHJvbC5leGl0RnVsbFNjcmVlbk1vZGUoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5idXR0b24uY2xhc3NOYW1lID0gXCJvbnMtY3RybC1mdWxsc2NyZWVuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuRnVsbFNjcmVlbk1vZGUoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5idXR0b24uY2xhc3NOYW1lID0gXCJvbnMtY3RybC1zaHJpbmtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPTlNGdWxsU2NyZWVuQ29udHJvbC5wcm90b3R5cGUub3BlbkZ1bGxTY3JlZW5Nb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLm1hcC5fY29udGFpbmVyOyAvLyBUT0RPXG4gICAgICAgIGlmIChlbC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWwucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWwud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBlbC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9OU0Z1bGxTY3JlZW5Db250cm9sLmV4aXRGdWxsU2NyZWVuTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT05TRnVsbFNjcmVlbkNvbnRyb2wuaXNJbkZ1bGxTY3JlZW5Nb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgICAgICAgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gT05TRnVsbFNjcmVlbkNvbnRyb2w7XG59KE9OU0NvbnRyb2wpKTtcbmV4cG9ydCB7IE9OU0Z1bGxTY3JlZW5Db250cm9sIH07XG4iLCJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibWFwYm94LWdsXCI7XG5pbXBvcnQgeyBPTlNGdWxsU2NyZWVuQ29udHJvbCwgT05TUmVzZXRDb250cm9sLCBPTlNab29tSW5Db250cm9sLCBPTlNab29tT3V0Q29udHJvbCB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XG4vKipcbiAqICBZb3UgbXVzdCBpbnN0YWxsICYgY2FsbCBtYXBib3gtZ2wgYXMgYSBwZWVyIGRlcGVuZGVuY3kgYmVmb3JlIGluc3RhbnRpYXRpbnQgYE1hcENvbXBvbmVudGAuXG4gKiBAZXhhbXBsZVxuICogYGBgXG4gKiAgbnBtIGkgLVMgbWFwYm94LWdsXG4gKiBgYGBcbiAqXG4gKiBBbmQgdGhlbiBpbXBvcnQgYmVmb3JlIGltcG9ydGluZyB0aGlzIGxpYnJhcnkuXG4gKiBAZXhhbXBsZVxuICogYGBgXG4gKiBpbXBvcnQgXCJtYXBib3gtZ2xcIjtcbiAqIGltcG9ydCB7IE1hcENvbXBvbmVudCBhcyBfTWFwQ29tcG9uZW50IH0gZnJvbSBcImRwLW1hcHNcIjtcbiAqIGBgYFxuICpcbiAqIFRvIGNyZWF0ZSBhbiBPcmRuYW5jZSBTdXJ2ZXkgbWFwIGNvbXBvbmVudCwgcGFzcyB0aGUgZm9sbG93aW5nIG9wdGlvbnMgdG8gdGhlIHtAbGluayBNYXBDb21wb25lbnR9IGNsYXNzLlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogICBjb25zdCBvcHRpb25zID0ge1xuICogICAgICAgc3R5bGU6IFwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9jamF1ZGdsODQwZ24zMnJucmVwY2I5YjlnXCIsXG4gKiAgICAgICBjZW50ZXI6IFs1MS40MjEzMzc5NDQwNTc3MSwgLTAuMTQ2NDYxNjkwOTY4NzczNjVdIGFzIGFueSxcbiAqICAgICAgIHpvb206IDYsXG4gKiAgICAgICB0b2tlbjogcHJvY2Vzcy5lbnYuTUFQQk9YX0FDQ0VTU19UT0tFTixcbiAqICAgICAgIG1hcElEOiBcIm1hcFwiLFxuICogICB9XG4gKiAgIGNvbnN0IG1hcCA9IG5ldyBfTWFwQ29tcG9uZW50KG9wdGlvbnMpO1xuICogICBtYXAuaW5pdCgpO1xuICogYGBgXG4gKlxuICogRGVmaW5lIGEgSFRNTCBlbGVtZW50cyB3aXRoIGFuIGlkIHZhbHVlIGBtYXBgLlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogICA8ZGl2aWQ9XCJtYXBcIj5cbiAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbnMtbWFwLWNvbnRyb2xcIj5cbiAqICAgICAgICAgICAgPCEtLSBjb250cm9scy4uLiAtLT5cbiAqICAgICAgICAgIDwvZGl2PlxuICogICA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFRvIGFkZCBhIGNvbnRyb2wsIGFkZCBhIGBidXR0b25gIGVsZW1lbnQgJiBhIGNoaWxkIGVsZW1lbnQgdG8gcmVuZGVyIHlvdXIgaWNvbi4gQnV0dG9ucyBuZWVkXG4gKiB0byBiZSBhZGRlZCB0byBhbiBlbGVtZW50IHdpdGggYSBgLm9ucy1jdHJsLWdyb3VwYCBjbGFzcyBuYW1lLiBZb3UgY2FuIGFkZCBhcyBtYW55IGNvbnRyb2xzXG4gKiBhcyByZXF1aXJlZCBpbiBlYWNoIGdyb3VwLlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogPGRpdiBjbGFzcz1cIm9ucy1jdHJsLWdyb3VwXCI+XG4gKiAgICAgPGJ1dHRvbiBjbGFzcz1cIm9ucy1jdHJsLXpvb20taW5cIj5cbiAqICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcGJveGdsLWN0cmwtaWNvblwiPjwvc3Bhbj5cbiAqICAgICA8L2J1dHRvbj5cbiAqICAgIDxidXR0b24gY2xhc3M9XCJvbnMtY3RybC16b29tLWluXCI+XG4gKiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXBib3hnbC1jdHJsLWljb25cIj48L3NwYW4+XG4gKiAgICA8L2J1dHRvbj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogIEV4YW1wbGUgc2hvd3MgYSBtYXAgY29tcG9uZW50IHdpdGggdGhlIDQgY3VycmVudGx5IGF2YWlsYWJsZSBjb250cm9scy5cbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqICA8ZGl2IGlkPVwibWFwXCI+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwib25zLW1hcC1jb250cm9sXCI+XG4gKiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9ucy1jdHJsLWdyb3VwXCI+XG4gKiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbnMtY3RybC16b29tLWluXCI+XG4gKiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcGJveGdsLWN0cmwtaWNvblwiPjwvc3Bhbj5cbiAqICAgICAgICAgICAgICAgPC9idXR0b24+XG4gKiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbnMtY3RybC1yZXNldFwiPlxuICogICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXBib3hnbC1jdHJsLWljb25cIj48L3NwYW4+XG4gKiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICogICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib25zLWN0cmwtem9vbS1vdXRcIj5cbiAqICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFwYm94Z2wtY3RybC1pY29uXCI+PC9zcGFuPlxuICogICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAqICAgICAgICAgICA8L2Rpdj5cbiAqICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25zLWN0cmwtZ3JvdXBcIj5cbiAqICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9ucy1jdHJsLWZ1bGxzY3JlZW5cIj5cbiAqICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFwYm94Z2wtY3RybC1pY29uXCI+PC9zcGFuPlxuICogICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAqICAgICAgICAgICA8L2Rpdj5cbiAqICAgICAgIDwvZGl2PlxuICogICA8L2Rpdj5cbiAqIGBgYFxuICovXG52YXIgTWFwQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcENvbXBvbmVudChvcHRpb25zKSB7XG4gICAgICAgIC8qKiBNYXAgYm91bmRzICAqL1xuICAgICAgICB0aGlzLmJvdW5kcyA9IFtcbiAgICAgICAgICAgIFstNy45NDU0MDI0MTI1NTM1NjI1LCA0OC45NTAwNjY5NjUyOTAwNl0sXG4gICAgICAgICAgICBbMi41NDk1ODk0MDk0NTAxOTIsIDYwLjg2NzkxMTgzODY2MDE1XSAvLyBub3J0aC13ZXN0XG4gICAgICAgIF07XG4gICAgICAgIC8qKiBEZWZhdWx0IGZhbHNlLiBTZXQgdG8gdHJ1ZSBmb3IgZ2VvbG9hdGlvbiBkZWJ1Z2dpbmcgbG9ncyAgKi9cbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgICAgICB2YXIgc3R5bGUgPSBvcHRpb25zLnN0eWxlLCBjZW50ZXIgPSBvcHRpb25zLmNlbnRlciwgX2EgPSBvcHRpb25zLnpvb20sIHpvb20gPSBfYSA9PT0gdm9pZCAwID8gNiA6IF9hLCB0b2tlbiA9IG9wdGlvbnMudG9rZW4sIG1hcElEID0gb3B0aW9ucy5tYXBJRCwgX2IgPSBvcHRpb25zLmRlYnVnLCBkZWJ1ZyA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgICAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgICAgICB0aGlzLm1hcElEID0gbWFwSUQ7XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5tYXBJRCxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlLFxuICAgICAgICAgICAgY2VudGVyOiB0aGlzLmNlbnRlcixcbiAgICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtYXhCb3VuZHM6IHRoaXMuYm91bmRzLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHRva2VuLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY2lwdGlvbiBJbml0aWF0ZXMgYSBtYXAgY29tcG9uZW50LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgXG4gICAgICogICBjb25zdCBvcHRpb25zID0geyAuLiB9XG4gICAgICogICBjb25zdCBtYXAgPSBuZXcgTWFwQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgICAqICAgbWFwLmluaXQoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBNYXBDb21wb25lbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICB9O1xuICAgIE1hcENvbXBvbmVudC5wcm90b3R5cGUuYWRkQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvbnNab29tSW5Db250cm9sID0gbmV3IE9OU1pvb21JbkNvbnRyb2wodGhpcy5tYXAsIFwiLm9ucy1jdHJsLXpvb20taW5cIik7XG4gICAgICAgIG9uc1pvb21JbkNvbnRyb2wuc2V0dXAoKTtcbiAgICAgICAgdmFyIG9uc1pvb21PdXRDb250cm9sID0gbmV3IE9OU1pvb21PdXRDb250cm9sKHRoaXMubWFwLCBcIi5vbnMtY3RybC16b29tLW91dFwiKTtcbiAgICAgICAgb25zWm9vbU91dENvbnRyb2wuc2V0dXAoKTtcbiAgICAgICAgdmFyIG9uc1Jlc2V0Q29udHJvbCA9IG5ldyBPTlNSZXNldENvbnRyb2wodGhpcy5tYXAsIFwiLm9ucy1jdHJsLXJlc2V0XCIsIFwibWFwYm94Z2wtY3RybC1pY29uLS1kaXNhYmxlZFwiLCB0aGlzLmNlbnRlciwgdGhpcy56b29tKTtcbiAgICAgICAgb25zUmVzZXRDb250cm9sLnNldHVwKCk7XG4gICAgICAgIHZhciBvbnNGdWxsU2NyZWVuQ29udHJvbCA9IG5ldyBPTlNGdWxsU2NyZWVuQ29udHJvbCh0aGlzLm1hcCwgXCIub25zLWN0cmwtZnVsbHNjcmVlblwiLCBcIm1hcGJveGdsLWN0cmwtaWNvbi0tZnVsbHNjcmVlblwiKTtcbiAgICAgICAgb25zRnVsbFNjcmVlbkNvbnRyb2wuc2V0dXAoKTtcbiAgICB9O1xuICAgIE1hcENvbXBvbmVudC5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm1hcC5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzaXplIG1hcCB0byBhcyBzZXR0aW5nIHRoZSBoZWlnaHQgYW5kIHdpZHRoIGluIGNzcyBkaXN0b3J0cyB0aGUgcmF0aW8gb2YgdGhlIG1hcFxuICAgICAgICAgICAgX3RoaXMubWFwLnJlc2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYXAub24oXCJtb3ZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJjZW50ZXI6IFwiLCBfdGhpcy5tYXAuZ2V0Q2VudGVyKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJ6b29tOiBcIiwgX3RoaXMubWFwLmdldFpvb20oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTWFwQ29tcG9uZW50LnByb3RvdHlwZS5zZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhZ1JvdGF0ZS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMubWFwLnRvdWNoWm9vbVJvdGF0ZS5kaXNhYmxlUm90YXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTWFwQ29tcG9uZW50IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWFwYm94X2dsX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4uL3Nhc3MvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50LCB9IGZyb20gXCIuL21hcFwiO1xuZXhwb3J0IHsgTWFwQ29tcG9uZW50LCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9