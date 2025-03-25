"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/portfolio";
exports.ids = ["pages/api/portfolio"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/portfolio.js":
/*!********************************!*\
  !*** ./pages/api/portfolio.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    const portfolioData = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), \"/data/portfolio.json\");\n    if (true) {\n        if (req.method === \"POST\") {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(portfolioData, JSON.stringify(req.body), \"utf-8\", (err)=>console.log(err)\n            );\n        } else {\n            res.status(200).json({\n                name: \"This route works in development mode only\"\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9ydGZvbGlvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9CO0FBQ1E7QUFFYixTQUFTRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU1DLGFBQWEsR0FBR0osMENBQUksQ0FBQ0ssT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQztJQUNqRSxJQUFJRCxJQUFzQyxFQUFFO1FBQzFDLElBQUlILEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUN6QlIsdURBQWdCLENBQ2RLLGFBQWEsRUFDYkssSUFBSSxDQUFDQyxTQUFTLENBQUNSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDLEVBQ3hCLE9BQU8sRUFDUCxDQUFDQyxHQUFHLEdBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7WUFBQSxDQUMxQixDQUFDO1NBQ0gsTUFBTTtZQUNMVCxHQUFHLENBQ0FZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO2dCQUFFQyxJQUFJLEVBQUUsMkNBQTJDO2FBQUUsQ0FBQyxDQUFDO1NBQ2hFO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXBvcnRmb2xpby10ZW1wbGF0ZS8uL3BhZ2VzL2FwaS9wb3J0Zm9saW8uanM/NjdlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBwb3J0Zm9saW9EYXRhID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcIi9kYXRhL3BvcnRmb2xpby5qc29uXCIpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgICAgcG9ydGZvbGlvRGF0YSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpLFxuICAgICAgICBcInV0Zi04XCIsXG4gICAgICAgIChlcnIpID0+IGNvbnNvbGUubG9nKGVycilcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgLmpzb24oeyBuYW1lOiBcIlRoaXMgcm91dGUgd29ya3MgaW4gZGV2ZWxvcG1lbnQgbW9kZSBvbmx5XCIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZnMiLCJqb2luIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBvcnRmb2xpb0RhdGEiLCJwcm9jZXNzIiwiY3dkIiwibWV0aG9kIiwid3JpdGVGaWxlU3luYyIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/portfolio.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/portfolio.js"));
module.exports = __webpack_exports__;

})();