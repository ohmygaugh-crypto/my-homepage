"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (/* binding */ Chakra)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7985);



function Chakra({ cookies , children  }) {
    const colorModeManager = typeof cookies === "string" ? (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.cookieStorageManager)(cookies) : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.localStorageManager;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        colorModeManager: colorModeManager,
        children: children
    });
};
async function getServerSideProps({ req  }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ""
        }
    };
}


/***/ })

};
;