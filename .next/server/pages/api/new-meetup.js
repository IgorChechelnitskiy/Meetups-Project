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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://korsar:korsar123@cluster0.8417z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n        const db = client.db();\n        const meetupCollection = await db.collection(\"meetups\");\n        const result = await meetupCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: `Meetup was successfully created`\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFcEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUFDLHlHQUF5RyxDQUFDO1FBQ25KLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU1DLE1BQU0sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csU0FBUyxDQUFDUixJQUFJLENBQUM7UUFFckRTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztRQUVwQkwsTUFBTSxDQUFDUyxLQUFLLEVBQUUsQ0FBQztRQUVmYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVsQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL2tvcnNhcjprb3JzYXIxMjNAY2x1c3RlcjAuODQxN3oubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwXCIpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiBgTWVldHVwIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZGB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();