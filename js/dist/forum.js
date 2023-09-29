/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__);






flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().initializers.add('chrisdenend/flarum-ext-generate-usernames', function () {
  function getUsernameOptions(count) {
    var options = [];
    var adjTokens = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('adjTokens');
    var nounTokens = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('nounTokens');
    var digits = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('usernameDigits');
    var adjArray = adjTokens.split(',');
    var nounArray = nounTokens.split(',');
    for (var i = 0; i < count; i++) {
      var randomWord1 = adjArray[Math.floor(Math.random() * adjArray.length)];
      var randomWord2 = nounArray[Math.floor(Math.random() * nounArray.length)];
      var randomNumber = "";
      if (digits > 0 && digits < 11) {
        var arr = new Uint32Array(2);
        crypto.getRandomValues(arr);
        randomNumber = arr.join('').substring(0, digits);
      }
      var randomUsername = randomWord1 + randomWord2 + randomNumber;
      options[i] = randomUsername;
    }
    return options;
  }
  function getUsernameOptionsMap(usernameOptions) {
    var newMap = new Object();
    for (var i = 0; i < usernameOptions.length; i++) {
      newMap[usernameOptions[i]] = usernameOptions[i];
    }
    return newMap;
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), "oninit", function () {
    var optionCount = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('optionCount');
    this.usernameOptions = getUsernameOptions(optionCount);
    this.selectedUsername = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1___default()(this.usernameOptions[0]);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), "onready", function () {
    this.$('[name=selectedUsername]').focus();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), "fields", function (items) {
    var usernameSelectLabel = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans("chrisdenend-generate-usernames.forum.username_select_placeholder"));
    var selectLabel = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans("chrisdenend-generate-usernames.forum.username_select_label"));
    items.remove('username');
    items.add("chrisdenendUsernameSelect", m("div", {
      "class": "Form_group UsernameSelect"
    }, m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "FormControl",
      name: "selectedUsername",
      options: getUsernameOptionsMap(this.usernameOptions),
      value: this.selectedUsername(),
      onchange: this.selectedUsername,
      placeholder: usernameSelectLabel,
      "aria-label": usernameSelectLabel,
      disabled: this.loading
    }), m("br", null), m("label", {
      "for": "selectedUsername"
    }, selectLabel)), 30);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), "submitData", function (data) {
    // check that the username is valid
    if (this.usernameOptions.includes(this.selectedUsername())) {
      data.username = this.selectedUsername();
    } else {
      data.username = this.usernameOptions[0];
    }
  });
});

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map