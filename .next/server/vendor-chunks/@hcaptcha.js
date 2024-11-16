"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@hcaptcha";
exports.ids = ["vendor-chunks/@hcaptcha"];
exports.modules = {

/***/ "(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"(ssr)/./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js\");\n\n\n\n\nvar SCRIPT_ID = 'hcaptcha-api-script-id';\nvar HCAPTCHA_LOAD_FN_NAME = 'hcaptchaOnLoad'; // Prevent loading API script multiple times\n\nvar resolveFn;\nvar rejectFn;\nvar mountPromise = new Promise(function (resolve, reject) {\n  resolveFn = resolve;\n  rejectFn = reject;\n}); // Generate hCaptcha API script\n\nvar mountCaptchaScript = function mountCaptchaScript(params) {\n  if (params === void 0) {\n    params = {};\n  }\n\n  if (document.getElementById(SCRIPT_ID)) {\n    // API was already requested\n    return mountPromise;\n  } // Create global onload callback\n\n\n  window[HCAPTCHA_LOAD_FN_NAME] = resolveFn;\n  var domain = params.apihost || \"https://js.hcaptcha.com\";\n  delete params.apihost;\n  var script = document.createElement(\"script\");\n  script.id = SCRIPT_ID;\n  script.src = domain + \"/1/api.js?render=explicit&onload=\" + HCAPTCHA_LOAD_FN_NAME;\n  script.async = true;\n\n  script.onerror = function (event) {\n    return rejectFn('script-error');\n  };\n\n  var query = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.generateQuery)(params);\n  script.src += query !== \"\" ? \"&\" + query : \"\";\n  document.head.appendChild(script);\n  return mountPromise;\n};\n\nvar HCaptcha = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(HCaptcha, _React$Component);\n\n  function HCaptcha(props) {\n    var _this;\n\n    _this = _React$Component.call(this, props) || this; // API Methods\n\n    _this.renderCaptcha = _this.renderCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.resetCaptcha = _this.resetCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.removeCaptcha = _this.removeCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.isReady = _this.isReady.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this)); // Event Handlers\n\n    _this.loadCaptcha = _this.loadCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleOnLoad = _this.handleOnLoad.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleExpire = _this.handleExpire.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleError = _this.handleError.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleOpen = _this.handleOpen.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleClose = _this.handleClose.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleChallengeExpired = _this.handleChallengeExpired.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    var isApiReady = typeof hcaptcha !== 'undefined';\n    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createRef();\n    _this.apiScriptRequested = false;\n    _this.state = {\n      isApiReady: isApiReady,\n      isRemoved: false,\n      elementId: props.id,\n      captchaId: ''\n    };\n    return _this;\n  }\n\n  var _proto = HCaptcha.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    // Once captcha is mounted intialize hCaptcha - hCaptcha\n    var isApiReady = this.state.isApiReady;\n    /*\n     * Check if hCaptcha has already been loaded,\n     * If Yes, render the captcha\n     * If No, create script tag and wait to render the captcha\n     */\n\n    if (isApiReady) {\n      this.renderCaptcha();\n      return;\n    }\n\n    this.loadCaptcha();\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    } // Reset any stored variables / timers when unmounting\n\n\n    hcaptcha.reset(captchaId);\n    hcaptcha.remove(captchaId);\n  };\n\n  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {\n    // Prevent component re-rendering when these internal state variables are updated\n    if (this.state.isApiReady !== nextState.isApiReady || this.state.isRemoved !== nextState.isRemoved) {\n      return false;\n    }\n\n    return true;\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\n    var _this2 = this;\n\n    // Prop Keys that could change\n    var keys = ['sitekey', 'size', 'theme', 'tabindex', 'languageOverride', 'endpoint']; // See if any props changed during component update\n\n    var match = keys.every(function (key) {\n      return prevProps[key] === _this2.props[key];\n    }); // If they have changed, remove current captcha and render a new one\n\n    if (!match) {\n      this.removeCaptcha(function () {\n        _this2.renderCaptcha();\n      });\n    }\n  };\n\n  _proto.loadCaptcha = function loadCaptcha() {\n    if (this.apiScriptRequested) {\n      return;\n    }\n\n    var _this$props = this.props,\n        apihost = _this$props.apihost,\n        assethost = _this$props.assethost,\n        endpoint = _this$props.endpoint,\n        host = _this$props.host,\n        imghost = _this$props.imghost,\n        hl = _this$props.languageOverride,\n        reCaptchaCompat = _this$props.reCaptchaCompat,\n        reportapi = _this$props.reportapi,\n        sentry = _this$props.sentry,\n        custom = _this$props.custom;\n    var mountParams = {\n      apihost: apihost,\n      assethost: assethost,\n      endpoint: endpoint,\n      hl: hl,\n      host: host,\n      imghost: imghost,\n      recaptchacompat: reCaptchaCompat === false ? \"off\" : null,\n      reportapi: reportapi,\n      sentry: sentry,\n      custom: custom\n    };\n    mountCaptchaScript(mountParams).then(this.handleOnLoad)[\"catch\"](this.handleError);\n    this.apiScriptRequested = true;\n  };\n\n  _proto.renderCaptcha = function renderCaptcha(onReady) {\n    var isApiReady = this.state.isApiReady;\n    if (!isApiReady) return;\n    var renderParams = Object.assign({\n      \"open-callback\": this.handleOpen,\n      \"close-callback\": this.handleClose,\n      \"error-callback\": this.handleError,\n      \"chalexpired-callback\": this.handleChallengeExpired,\n      \"expired-callback\": this.handleExpire,\n      \"callback\": this.handleSubmit\n    }, this.props, {\n      hl: this.props.hl || this.props.languageOverride,\n      languageOverride: undefined\n    }); //Render hCaptcha widget and provide necessary callbacks - hCaptcha\n\n    var captchaId = hcaptcha.render(this.ref.current, renderParams);\n    this.setState({\n      isRemoved: false,\n      captchaId: captchaId\n    }, function () {\n      onReady && onReady();\n    });\n  };\n\n  _proto.resetCaptcha = function resetCaptcha() {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    } // Reset captcha state, removes stored token and unticks checkbox\n\n\n    hcaptcha.reset(captchaId);\n  };\n\n  _proto.removeCaptcha = function removeCaptcha(callback) {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    this.setState({\n      isRemoved: true\n    }, function () {\n      hcaptcha.remove(captchaId);\n      callback && callback();\n    });\n  };\n\n  _proto.handleOnLoad = function handleOnLoad() {\n    var _this3 = this;\n\n    this.setState({\n      isApiReady: true\n    }, function () {\n      // render captcha and wait for captcha id\n      _this3.renderCaptcha(function () {\n        // trigger onLoad if it exists\n        var onLoad = _this3.props.onLoad;\n        if (onLoad) onLoad();\n      });\n    });\n  };\n\n  _proto.handleSubmit = function handleSubmit(event) {\n    var onVerify = this.props.onVerify;\n    var _this$state = this.state,\n        isRemoved = _this$state.isRemoved,\n        captchaId = _this$state.captchaId;\n    if (typeof hcaptcha === 'undefined' || isRemoved) return;\n    var token = hcaptcha.getResponse(captchaId); //Get response token from hCaptcha widget\n\n    var ekey = hcaptcha.getRespKey(captchaId); //Get current challenge session id from hCaptcha widget\n\n    onVerify(token, ekey); //Dispatch event to verify user response\n  };\n\n  _proto.handleExpire = function handleExpire() {\n    var onExpire = this.props.onExpire;\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    hcaptcha.reset(captchaId); // If hCaptcha runs into error, reset captcha - hCaptcha\n\n    if (onExpire) onExpire();\n  };\n\n  _proto.handleError = function handleError(event) {\n    var onError = this.props.onError;\n    var captchaId = this.state.captchaId;\n\n    if (this.isReady()) {\n      // If hCaptcha runs into error, reset captcha - hCaptcha\n      hcaptcha.reset(captchaId);\n    }\n\n    if (onError) onError(event);\n  };\n\n  _proto.isReady = function isReady() {\n    var _this$state2 = this.state,\n        isApiReady = _this$state2.isApiReady,\n        isRemoved = _this$state2.isRemoved;\n    return isApiReady && !isRemoved;\n  };\n\n  _proto.handleOpen = function handleOpen() {\n    if (!this.isReady() || !this.props.onOpen) {\n      return;\n    }\n\n    this.props.onOpen();\n  };\n\n  _proto.handleClose = function handleClose() {\n    if (!this.isReady() || !this.props.onClose) {\n      return;\n    }\n\n    this.props.onClose();\n  };\n\n  _proto.handleChallengeExpired = function handleChallengeExpired() {\n    if (!this.isReady() || !this.props.onChalExpired) {\n      return;\n    }\n\n    this.props.onChalExpired();\n  };\n\n  _proto.execute = function execute(opts) {\n    if (opts === void 0) {\n      opts = null;\n    }\n\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    if (opts && typeof opts !== \"object\") {\n      opts = null;\n    }\n\n    return hcaptcha.execute(captchaId, opts);\n  };\n\n  _proto.setData = function setData(data) {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    if (data && typeof data !== \"object\") {\n      data = null;\n    }\n\n    hcaptcha.setData(captchaId, data);\n  };\n\n  _proto.getResponse = function getResponse() {\n    return hcaptcha.getResponse(this.state.captchaId);\n  };\n\n  _proto.getRespKey = function getRespKey() {\n    return hcaptcha.getRespKey(this.state.captchaId);\n  };\n\n  _proto.render = function render() {\n    var elementId = this.state.elementId;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n      ref: this.ref,\n      id: elementId\n    });\n  };\n\n  return HCaptcha;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HCaptcha);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGhjYXB0Y2hhL3JlYWN0LWhjYXB0Y2hhL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtGO0FBQ2hCO0FBQ25DO0FBQ1k7QUFDM0M7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsd0RBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJFQUFjOztBQUVoQjtBQUNBOztBQUVBLHdEQUF3RDs7QUFFeEQsbURBQW1ELG1GQUFzQjtBQUN6RSxpREFBaUQsbUZBQXNCO0FBQ3ZFLG1EQUFtRCxtRkFBc0I7QUFDekUsdUNBQXVDLG1GQUFzQixVQUFVOztBQUV2RSwrQ0FBK0MsbUZBQXNCO0FBQ3JFLGlEQUFpRCxtRkFBc0I7QUFDdkUsaURBQWlELG1GQUFzQjtBQUN2RSxpREFBaUQsbUZBQXNCO0FBQ3ZFLCtDQUErQyxtRkFBc0I7QUFDckUsNkNBQTZDLG1GQUFzQjtBQUNuRSwrQ0FBK0MsbUZBQXNCO0FBQ3JFLHFFQUFxRSxtRkFBc0I7QUFDM0Y7QUFDQSw2QkFBNkIsNENBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7O0FBRXpGO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpELCtDQUErQzs7QUFFL0MsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFtQjtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFlOztBQUVqQixpRUFBZSxRQUFRIiwic291cmNlcyI6WyIvVXNlcnMvY3VydGlzL0Rlc2t0b3AvRVRIX0dMT0JBTC9uZXd2ZXIvbm9kZV9tb2R1bGVzL0BoY2FwdGNoYS9yZWFjdC1oY2FwdGNoYS9kaXN0L2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZW5lcmF0ZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbnZhciBTQ1JJUFRfSUQgPSAnaGNhcHRjaGEtYXBpLXNjcmlwdC1pZCc7XG52YXIgSENBUFRDSEFfTE9BRF9GTl9OQU1FID0gJ2hjYXB0Y2hhT25Mb2FkJzsgLy8gUHJldmVudCBsb2FkaW5nIEFQSSBzY3JpcHQgbXVsdGlwbGUgdGltZXNcblxudmFyIHJlc29sdmVGbjtcbnZhciByZWplY3RGbjtcbnZhciBtb3VudFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHJlc29sdmVGbiA9IHJlc29sdmU7XG4gIHJlamVjdEZuID0gcmVqZWN0O1xufSk7IC8vIEdlbmVyYXRlIGhDYXB0Y2hhIEFQSSBzY3JpcHRcblxudmFyIG1vdW50Q2FwdGNoYVNjcmlwdCA9IGZ1bmN0aW9uIG1vdW50Q2FwdGNoYVNjcmlwdChwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0NSSVBUX0lEKSkge1xuICAgIC8vIEFQSSB3YXMgYWxyZWFkeSByZXF1ZXN0ZWRcbiAgICByZXR1cm4gbW91bnRQcm9taXNlO1xuICB9IC8vIENyZWF0ZSBnbG9iYWwgb25sb2FkIGNhbGxiYWNrXG5cblxuICB3aW5kb3dbSENBUFRDSEFfTE9BRF9GTl9OQU1FXSA9IHJlc29sdmVGbjtcbiAgdmFyIGRvbWFpbiA9IHBhcmFtcy5hcGlob3N0IHx8IFwiaHR0cHM6Ly9qcy5oY2FwdGNoYS5jb21cIjtcbiAgZGVsZXRlIHBhcmFtcy5hcGlob3N0O1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgc2NyaXB0LmlkID0gU0NSSVBUX0lEO1xuICBzY3JpcHQuc3JjID0gZG9tYWluICsgXCIvMS9hcGkuanM/cmVuZGVyPWV4cGxpY2l0Jm9ubG9hZD1cIiArIEhDQVBUQ0hBX0xPQURfRk5fTkFNRTtcbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiByZWplY3RGbignc2NyaXB0LWVycm9yJyk7XG4gIH07XG5cbiAgdmFyIHF1ZXJ5ID0gZ2VuZXJhdGVRdWVyeShwYXJhbXMpO1xuICBzY3JpcHQuc3JjICs9IHF1ZXJ5ICE9PSBcIlwiID8gXCImXCIgKyBxdWVyeSA6IFwiXCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgcmV0dXJuIG1vdW50UHJvbWlzZTtcbn07XG5cbnZhciBIQ2FwdGNoYSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIQ2FwdGNoYSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSENhcHRjaGEocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpczsgLy8gQVBJIE1ldGhvZHNcblxuICAgIF90aGlzLnJlbmRlckNhcHRjaGEgPSBfdGhpcy5yZW5kZXJDYXB0Y2hhLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlc2V0Q2FwdGNoYSA9IF90aGlzLnJlc2V0Q2FwdGNoYS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW1vdmVDYXB0Y2hhID0gX3RoaXMucmVtb3ZlQ2FwdGNoYS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5pc1JlYWR5ID0gX3RoaXMuaXNSZWFkeS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTsgLy8gRXZlbnQgSGFuZGxlcnNcblxuICAgIF90aGlzLmxvYWRDYXB0Y2hhID0gX3RoaXMubG9hZENhcHRjaGEuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlT25Mb2FkID0gX3RoaXMuaGFuZGxlT25Mb2FkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVN1Ym1pdCA9IF90aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFeHBpcmUgPSBfdGhpcy5oYW5kbGVFeHBpcmUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRXJyb3IgPSBfdGhpcy5oYW5kbGVFcnJvci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVPcGVuID0gX3RoaXMuaGFuZGxlT3Blbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVDbG9zZSA9IF90aGlzLmhhbmRsZUNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUNoYWxsZW5nZUV4cGlyZWQgPSBfdGhpcy5oYW5kbGVDaGFsbGVuZ2VFeHBpcmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHZhciBpc0FwaVJlYWR5ID0gdHlwZW9mIGhjYXB0Y2hhICE9PSAndW5kZWZpbmVkJztcbiAgICBfdGhpcy5yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuYXBpU2NyaXB0UmVxdWVzdGVkID0gZmFsc2U7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0FwaVJlYWR5OiBpc0FwaVJlYWR5LFxuICAgICAgaXNSZW1vdmVkOiBmYWxzZSxcbiAgICAgIGVsZW1lbnRJZDogcHJvcHMuaWQsXG4gICAgICBjYXB0Y2hhSWQ6ICcnXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSENhcHRjaGEucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIE9uY2UgY2FwdGNoYSBpcyBtb3VudGVkIGludGlhbGl6ZSBoQ2FwdGNoYSAtIGhDYXB0Y2hhXG4gICAgdmFyIGlzQXBpUmVhZHkgPSB0aGlzLnN0YXRlLmlzQXBpUmVhZHk7XG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBoQ2FwdGNoYSBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZCxcbiAgICAgKiBJZiBZZXMsIHJlbmRlciB0aGUgY2FwdGNoYVxuICAgICAqIElmIE5vLCBjcmVhdGUgc2NyaXB0IHRhZyBhbmQgd2FpdCB0byByZW5kZXIgdGhlIGNhcHRjaGFcbiAgICAgKi9cblxuICAgIGlmIChpc0FwaVJlYWR5KSB7XG4gICAgICB0aGlzLnJlbmRlckNhcHRjaGEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRDYXB0Y2hhKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIGNhcHRjaGFJZCA9IHRoaXMuc3RhdGUuY2FwdGNoYUlkO1xuXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzZXQgYW55IHN0b3JlZCB2YXJpYWJsZXMgLyB0aW1lcnMgd2hlbiB1bm1vdW50aW5nXG5cblxuICAgIGhjYXB0Y2hhLnJlc2V0KGNhcHRjaGFJZCk7XG4gICAgaGNhcHRjaGEucmVtb3ZlKGNhcHRjaGFJZCk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIC8vIFByZXZlbnQgY29tcG9uZW50IHJlLXJlbmRlcmluZyB3aGVuIHRoZXNlIGludGVybmFsIHN0YXRlIHZhcmlhYmxlcyBhcmUgdXBkYXRlZFxuICAgIGlmICh0aGlzLnN0YXRlLmlzQXBpUmVhZHkgIT09IG5leHRTdGF0ZS5pc0FwaVJlYWR5IHx8IHRoaXMuc3RhdGUuaXNSZW1vdmVkICE9PSBuZXh0U3RhdGUuaXNSZW1vdmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIC8vIFByb3AgS2V5cyB0aGF0IGNvdWxkIGNoYW5nZVxuICAgIHZhciBrZXlzID0gWydzaXRla2V5JywgJ3NpemUnLCAndGhlbWUnLCAndGFiaW5kZXgnLCAnbGFuZ3VhZ2VPdmVycmlkZScsICdlbmRwb2ludCddOyAvLyBTZWUgaWYgYW55IHByb3BzIGNoYW5nZWQgZHVyaW5nIGNvbXBvbmVudCB1cGRhdGVcblxuICAgIHZhciBtYXRjaCA9IGtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHByZXZQcm9wc1trZXldID09PSBfdGhpczIucHJvcHNba2V5XTtcbiAgICB9KTsgLy8gSWYgdGhleSBoYXZlIGNoYW5nZWQsIHJlbW92ZSBjdXJyZW50IGNhcHRjaGEgYW5kIHJlbmRlciBhIG5ldyBvbmVcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2FwdGNoYShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5yZW5kZXJDYXB0Y2hhKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmxvYWRDYXB0Y2hhID0gZnVuY3Rpb24gbG9hZENhcHRjaGEoKSB7XG4gICAgaWYgKHRoaXMuYXBpU2NyaXB0UmVxdWVzdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXBpaG9zdCA9IF90aGlzJHByb3BzLmFwaWhvc3QsXG4gICAgICAgIGFzc2V0aG9zdCA9IF90aGlzJHByb3BzLmFzc2V0aG9zdCxcbiAgICAgICAgZW5kcG9pbnQgPSBfdGhpcyRwcm9wcy5lbmRwb2ludCxcbiAgICAgICAgaG9zdCA9IF90aGlzJHByb3BzLmhvc3QsXG4gICAgICAgIGltZ2hvc3QgPSBfdGhpcyRwcm9wcy5pbWdob3N0LFxuICAgICAgICBobCA9IF90aGlzJHByb3BzLmxhbmd1YWdlT3ZlcnJpZGUsXG4gICAgICAgIHJlQ2FwdGNoYUNvbXBhdCA9IF90aGlzJHByb3BzLnJlQ2FwdGNoYUNvbXBhdCxcbiAgICAgICAgcmVwb3J0YXBpID0gX3RoaXMkcHJvcHMucmVwb3J0YXBpLFxuICAgICAgICBzZW50cnkgPSBfdGhpcyRwcm9wcy5zZW50cnksXG4gICAgICAgIGN1c3RvbSA9IF90aGlzJHByb3BzLmN1c3RvbTtcbiAgICB2YXIgbW91bnRQYXJhbXMgPSB7XG4gICAgICBhcGlob3N0OiBhcGlob3N0LFxuICAgICAgYXNzZXRob3N0OiBhc3NldGhvc3QsXG4gICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICBobDogaGwsXG4gICAgICBob3N0OiBob3N0LFxuICAgICAgaW1naG9zdDogaW1naG9zdCxcbiAgICAgIHJlY2FwdGNoYWNvbXBhdDogcmVDYXB0Y2hhQ29tcGF0ID09PSBmYWxzZSA/IFwib2ZmXCIgOiBudWxsLFxuICAgICAgcmVwb3J0YXBpOiByZXBvcnRhcGksXG4gICAgICBzZW50cnk6IHNlbnRyeSxcbiAgICAgIGN1c3RvbTogY3VzdG9tXG4gICAgfTtcbiAgICBtb3VudENhcHRjaGFTY3JpcHQobW91bnRQYXJhbXMpLnRoZW4odGhpcy5oYW5kbGVPbkxvYWQpW1wiY2F0Y2hcIl0odGhpcy5oYW5kbGVFcnJvcik7XG4gICAgdGhpcy5hcGlTY3JpcHRSZXF1ZXN0ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJDYXB0Y2hhID0gZnVuY3Rpb24gcmVuZGVyQ2FwdGNoYShvblJlYWR5KSB7XG4gICAgdmFyIGlzQXBpUmVhZHkgPSB0aGlzLnN0YXRlLmlzQXBpUmVhZHk7XG4gICAgaWYgKCFpc0FwaVJlYWR5KSByZXR1cm47XG4gICAgdmFyIHJlbmRlclBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgXCJvcGVuLWNhbGxiYWNrXCI6IHRoaXMuaGFuZGxlT3BlbixcbiAgICAgIFwiY2xvc2UtY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVDbG9zZSxcbiAgICAgIFwiZXJyb3ItY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVFcnJvcixcbiAgICAgIFwiY2hhbGV4cGlyZWQtY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVDaGFsbGVuZ2VFeHBpcmVkLFxuICAgICAgXCJleHBpcmVkLWNhbGxiYWNrXCI6IHRoaXMuaGFuZGxlRXhwaXJlLFxuICAgICAgXCJjYWxsYmFja1wiOiB0aGlzLmhhbmRsZVN1Ym1pdFxuICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgIGhsOiB0aGlzLnByb3BzLmhsIHx8IHRoaXMucHJvcHMubGFuZ3VhZ2VPdmVycmlkZSxcbiAgICAgIGxhbmd1YWdlT3ZlcnJpZGU6IHVuZGVmaW5lZFxuICAgIH0pOyAvL1JlbmRlciBoQ2FwdGNoYSB3aWRnZXQgYW5kIHByb3ZpZGUgbmVjZXNzYXJ5IGNhbGxiYWNrcyAtIGhDYXB0Y2hhXG5cbiAgICB2YXIgY2FwdGNoYUlkID0gaGNhcHRjaGEucmVuZGVyKHRoaXMucmVmLmN1cnJlbnQsIHJlbmRlclBhcmFtcyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1JlbW92ZWQ6IGZhbHNlLFxuICAgICAgY2FwdGNoYUlkOiBjYXB0Y2hhSWRcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBvblJlYWR5ICYmIG9uUmVhZHkoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXRDYXB0Y2hhID0gZnVuY3Rpb24gcmVzZXRDYXB0Y2hhKCkge1xuICAgIHZhciBjYXB0Y2hhSWQgPSB0aGlzLnN0YXRlLmNhcHRjaGFJZDtcblxuICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlc2V0IGNhcHRjaGEgc3RhdGUsIHJlbW92ZXMgc3RvcmVkIHRva2VuIGFuZCB1bnRpY2tzIGNoZWNrYm94XG5cblxuICAgIGhjYXB0Y2hhLnJlc2V0KGNhcHRjaGFJZCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUNhcHRjaGEgPSBmdW5jdGlvbiByZW1vdmVDYXB0Y2hhKGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhcHRjaGFJZCA9IHRoaXMuc3RhdGUuY2FwdGNoYUlkO1xuXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNSZW1vdmVkOiB0cnVlXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgaGNhcHRjaGEucmVtb3ZlKGNhcHRjaGFJZCk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVPbkxvYWQgPSBmdW5jdGlvbiBoYW5kbGVPbkxvYWQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQXBpUmVhZHk6IHRydWVcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyByZW5kZXIgY2FwdGNoYSBhbmQgd2FpdCBmb3IgY2FwdGNoYSBpZFxuICAgICAgX3RoaXMzLnJlbmRlckNhcHRjaGEoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0cmlnZ2VyIG9uTG9hZCBpZiBpdCBleGlzdHNcbiAgICAgICAgdmFyIG9uTG9hZCA9IF90aGlzMy5wcm9wcy5vbkxvYWQ7XG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIHZhciBvblZlcmlmeSA9IHRoaXMucHJvcHMub25WZXJpZnk7XG4gICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgaXNSZW1vdmVkID0gX3RoaXMkc3RhdGUuaXNSZW1vdmVkLFxuICAgICAgICBjYXB0Y2hhSWQgPSBfdGhpcyRzdGF0ZS5jYXB0Y2hhSWQ7XG4gICAgaWYgKHR5cGVvZiBoY2FwdGNoYSA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNSZW1vdmVkKSByZXR1cm47XG4gICAgdmFyIHRva2VuID0gaGNhcHRjaGEuZ2V0UmVzcG9uc2UoY2FwdGNoYUlkKTsgLy9HZXQgcmVzcG9uc2UgdG9rZW4gZnJvbSBoQ2FwdGNoYSB3aWRnZXRcblxuICAgIHZhciBla2V5ID0gaGNhcHRjaGEuZ2V0UmVzcEtleShjYXB0Y2hhSWQpOyAvL0dldCBjdXJyZW50IGNoYWxsZW5nZSBzZXNzaW9uIGlkIGZyb20gaENhcHRjaGEgd2lkZ2V0XG5cbiAgICBvblZlcmlmeSh0b2tlbiwgZWtleSk7IC8vRGlzcGF0Y2ggZXZlbnQgdG8gdmVyaWZ5IHVzZXIgcmVzcG9uc2VcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXhwaXJlID0gZnVuY3Rpb24gaGFuZGxlRXhwaXJlKCkge1xuICAgIHZhciBvbkV4cGlyZSA9IHRoaXMucHJvcHMub25FeHBpcmU7XG4gICAgdmFyIGNhcHRjaGFJZCA9IHRoaXMuc3RhdGUuY2FwdGNoYUlkO1xuXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhjYXB0Y2hhLnJlc2V0KGNhcHRjaGFJZCk7IC8vIElmIGhDYXB0Y2hhIHJ1bnMgaW50byBlcnJvciwgcmVzZXQgY2FwdGNoYSAtIGhDYXB0Y2hhXG5cbiAgICBpZiAob25FeHBpcmUpIG9uRXhwaXJlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXZlbnQpIHtcbiAgICB2YXIgb25FcnJvciA9IHRoaXMucHJvcHMub25FcnJvcjtcbiAgICB2YXIgY2FwdGNoYUlkID0gdGhpcy5zdGF0ZS5jYXB0Y2hhSWQ7XG5cbiAgICBpZiAodGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgIC8vIElmIGhDYXB0Y2hhIHJ1bnMgaW50byBlcnJvciwgcmVzZXQgY2FwdGNoYSAtIGhDYXB0Y2hhXG4gICAgICBoY2FwdGNoYS5yZXNldChjYXB0Y2hhSWQpO1xuICAgIH1cblxuICAgIGlmIChvbkVycm9yKSBvbkVycm9yKGV2ZW50KTtcbiAgfTtcblxuICBfcHJvdG8uaXNSZWFkeSA9IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGlzQXBpUmVhZHkgPSBfdGhpcyRzdGF0ZTIuaXNBcGlSZWFkeSxcbiAgICAgICAgaXNSZW1vdmVkID0gX3RoaXMkc3RhdGUyLmlzUmVtb3ZlZDtcbiAgICByZXR1cm4gaXNBcGlSZWFkeSAmJiAhaXNSZW1vdmVkO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVPcGVuID0gZnVuY3Rpb24gaGFuZGxlT3BlbigpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpIHx8ICF0aGlzLnByb3BzLm9uT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25PcGVuKCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSB8fCAhdGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUNoYWxsZW5nZUV4cGlyZWQgPSBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VFeHBpcmVkKCkge1xuICAgIGlmICghdGhpcy5pc1JlYWR5KCkgfHwgIXRoaXMucHJvcHMub25DaGFsRXhwaXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFsRXhwaXJlZCgpO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlID0gZnVuY3Rpb24gZXhlY3V0ZShvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNhcHRjaGFJZCA9IHRoaXMuc3RhdGUuY2FwdGNoYUlkO1xuXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRzICYmIHR5cGVvZiBvcHRzICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICBvcHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGNhcHRjaGEuZXhlY3V0ZShjYXB0Y2hhSWQsIG9wdHMpO1xuICB9O1xuXG4gIF9wcm90by5zZXREYXRhID0gZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgdmFyIGNhcHRjaGFJZCA9IHRoaXMuc3RhdGUuY2FwdGNoYUlkO1xuXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICBoY2FwdGNoYS5zZXREYXRhKGNhcHRjaGFJZCwgZGF0YSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgcmV0dXJuIGhjYXB0Y2hhLmdldFJlc3BvbnNlKHRoaXMuc3RhdGUuY2FwdGNoYUlkKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UmVzcEtleSA9IGZ1bmN0aW9uIGdldFJlc3BLZXkoKSB7XG4gICAgcmV0dXJuIGhjYXB0Y2hhLmdldFJlc3BLZXkodGhpcy5zdGF0ZS5jYXB0Y2hhSWQpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGVsZW1lbnRJZCA9IHRoaXMuc3RhdGUuZWxlbWVudElkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgaWQ6IGVsZW1lbnRJZFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIQ2FwdGNoYTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSENhcHRjaGE7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateQuery: () => (/* binding */ generateQuery)\n/* harmony export */ });\nfunction generateQuery(params) {\n  return Object.entries(params).filter(function (_ref) {\n    var key = _ref[0],\n        value = _ref[1];\n    return value || value === false;\n  }).map(function (_ref2) {\n    var key = _ref2[0],\n        value = _ref2[1];\n    return encodeURIComponent(key) + \"=\" + encodeURIComponent(value);\n  }).join(\"&\");\n}\n\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGhjYXB0Y2hhL3JlYWN0LWhjYXB0Y2hhL2Rpc3QvZXNtL3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsiL1VzZXJzL2N1cnRpcy9EZXNrdG9wL0VUSF9HTE9CQUwvbmV3dmVyL25vZGVfbW9kdWxlcy9AaGNhcHRjaGEvcmVhY3QtaGNhcHRjaGEvZGlzdC9lc20vdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVRdWVyeShwYXJhbXMpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGtleSA9IF9yZWZbMF0sXG4gICAgICAgIHZhbHVlID0gX3JlZlsxXTtcbiAgICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IGZhbHNlO1xuICB9KS5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIGtleSA9IF9yZWYyWzBdLFxuICAgICAgICB2YWx1ZSA9IF9yZWYyWzFdO1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSkuam9pbihcIiZcIik7XG59XG5cbjtcbmV4cG9ydCB7IGdlbmVyYXRlUXVlcnkgfTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js\n");

/***/ })

};
;