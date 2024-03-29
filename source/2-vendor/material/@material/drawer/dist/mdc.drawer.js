/*!
 Material Components for the web
 Copyright (c) 2017 Google Inc.
 License: Apache-2.0
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["drawer"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["drawer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _foundation = __webpack_require__(3);

	Object.defineProperty(exports, 'MDCFoundation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foundation).default;
	  }
	});

	var _component = __webpack_require__(4);

	Object.defineProperty(exports, 'MDCComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_component).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Copyright 2016 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var MDCFoundation = function () {
	  _createClass(MDCFoundation, null, [{
	    key: "cssClasses",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports every
	      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
	      return {};
	    }
	  }, {
	    key: "strings",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports all
	      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
	      return {};
	    }
	  }, {
	    key: "numbers",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports all
	      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
	      return {};
	    }
	  }, {
	    key: "defaultAdapter",
	    get: function get() {
	      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
	      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
	      // validation.
	      return {};
	    }
	  }]);

	  function MDCFoundation() {
	    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MDCFoundation);

	    this.adapter_ = adapter;
	  }

	  _createClass(MDCFoundation, [{
	    key: "init",
	    value: function init() {
	      // Subclasses should override this method to perform initialization routines (registering events, etc.)
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
	    }
	  }]);

	  return MDCFoundation;
	}();

	exports.default = MDCFoundation;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _foundation = __webpack_require__(3);

	var _foundation2 = _interopRequireDefault(_foundation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MDCComponent = function () {
	  _createClass(MDCComponent, null, [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
	      // returns an instantiated component with its root set to that element. Also note that in the cases of
	      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
	      // from getDefaultFoundation().
	      return new MDCComponent(root, new _foundation2.default());
	    }
	  }]);

	  function MDCComponent(root, foundation) {
	    _classCallCheck(this, MDCComponent);

	    this.root_ = root;

	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    this.initialize.apply(this, args);
	    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
	    this.foundation_.init();
	    this.initialSyncWithDOM();
	  }

	  _createClass(MDCComponent, [{
	    key: 'initialize',
	    value: function initialize() /* ...args */{
	      // Subclasses can override this to do any additional setup work that would be considered part of a
	      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
	      // initialized. Any additional arguments besides root and foundation will be passed in here.
	    }
	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      // Subclasses must override this method to return a properly configured foundation class for the
	      // component.
	      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
	    }
	  }, {
	    key: 'initialSyncWithDOM',
	    value: function initialSyncWithDOM() {
	      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
	      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
	      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
	      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      // Subclasses may implement this method to release any resources / deregister any listeners they have
	      // attached. An example of this might be deregistering a resize event from the window object.
	      this.foundation_.destroy();
	    }

	    // Wrapper method to add an event listener to the component's root element. This is most useful when
	    // listening for custom events.

	  }, {
	    key: 'listen',
	    value: function listen(evtType, handler) {
	      this.root_.addEventListener(evtType, handler);
	    }

	    // Wrapper method to remove an event listener to the component's root element. This is most useful when
	    // unlistening for custom events.

	  }, {
	    key: 'unlisten',
	    value: function unlisten(evtType, handler) {
	      this.root_.removeEventListener(evtType, handler);
	    }

	    // Fires a cross-browser-compatible custom event from the component root of the given type,
	    // with the given data.

	  }, {
	    key: 'emit',
	    value: function emit(evtType, evtData) {
	      var evt = void 0;
	      if (typeof CustomEvent === 'function') {
	        evt = new CustomEvent(evtType, { detail: evtData });
	      } else {
	        evt = document.createEvent('CustomEvent');
	        evt.initCustomEvent(evtType, false, false, evtData);
	      }

	      this.root_.dispatchEvent(evt);
	    }
	  }]);

	  return MDCComponent;
	}();

	exports.default = MDCComponent;

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _temporary = __webpack_require__(10);

	Object.defineProperty(exports, 'MDCTemporaryDrawer', {
	  enumerable: true,
	  get: function get() {
	    return _temporary.MDCTemporaryDrawer;
	  }
	});
	Object.defineProperty(exports, 'MDCTemporaryDrawerFoundation', {
	  enumerable: true,
	  get: function get() {
	    return _temporary.MDCTemporaryDrawerFoundation;
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCTemporaryDrawer = exports.MDCTemporaryDrawerFoundation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _foundation = __webpack_require__(11);

	var _foundation2 = _interopRequireDefault(_foundation);

	var _util = __webpack_require__(13);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	exports.MDCTemporaryDrawerFoundation = _foundation2.default;

	var MDCTemporaryDrawer = exports.MDCTemporaryDrawer = function (_MDCComponent) {
	  _inherits(MDCTemporaryDrawer, _MDCComponent);

	  function MDCTemporaryDrawer() {
	    _classCallCheck(this, MDCTemporaryDrawer);

	    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
	  }

	  _createClass(MDCTemporaryDrawer, [{
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this2 = this;

	      var _MDCTemporaryDrawerFo = _foundation2.default.strings,
	          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
	          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


	      return new _foundation2.default({
	        addClass: function addClass(className) {
	          return _this2.root_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return _this2.root_.classList.remove(className);
	        },
	        hasClass: function hasClass(className) {
	          return _this2.root_.classList.contains(className);
	        },
	        hasNecessaryDom: function hasNecessaryDom() {
	          return Boolean(_this2.drawer);
	        },
	        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
	          return _this2.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive());
	        },
	        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
	          return _this2.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive());
	        },
	        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
	          return _this2.drawer.addEventListener(util.remapEvent(evt), handler);
	        },
	        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
	          return _this2.drawer.removeEventListener(util.remapEvent(evt), handler);
	        },
	        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
	          return _this2.drawer.addEventListener('transitionend', handler);
	        },
	        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
	          return _this2.drawer.removeEventListener('transitionend', handler);
	        },
	        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
	          return document.addEventListener('keydown', handler);
	        },
	        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
	          return document.removeEventListener('keydown', handler);
	        },
	        getDrawerWidth: function getDrawerWidth() {
	          return _this2.drawer.offsetWidth;
	        },
	        setTranslateX: function setTranslateX(value) {
	          return _this2.drawer.style.setProperty(util.getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
	        },
	        updateCssVariable: function updateCssVariable(value) {
	          if (util.supportsCssCustomProperties()) {
	            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
	          }
	        },
	        getFocusableElements: function getFocusableElements() {
	          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
	        },
	        saveElementTabState: function saveElementTabState(el) {
	          return util.saveElementTabState(el);
	        },
	        restoreElementTabState: function restoreElementTabState(el) {
	          return util.restoreElementTabState(el);
	        },
	        makeElementUntabbable: function makeElementUntabbable(el) {
	          return el.setAttribute('tabindex', -1);
	        },
	        isRtl: function isRtl() {
	          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
	        },
	        isDrawer: function isDrawer(el) {
	          return el === _this2.drawer;
	        }
	      });
	    }
	  }, {
	    key: 'open',
	    get: function get() {
	      return this.foundation_.isOpen();
	    },
	    set: function set(value) {
	      if (value) {
	        this.foundation_.open();
	      } else {
	        this.foundation_.close();
	      }
	    }

	    /* Return the drawer element inside the component. */

	  }, {
	    key: 'drawer',
	    get: function get() {
	      return this.root_.querySelector(_foundation2.default.strings.DRAWER_SELECTOR);
	    }
	  }], [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCTemporaryDrawer(root);
	    }
	  }]);

	  return MDCTemporaryDrawer;
	}(_base.MDCComponent);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _constants = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var MDCTemporaryDrawerFoundation = function (_MDCFoundation) {
	  _inherits(MDCTemporaryDrawerFoundation, _MDCFoundation);

	  _createClass(MDCTemporaryDrawerFoundation, null, [{
	    key: 'cssClasses',
	    get: function get() {
	      return _constants.cssClasses;
	    }
	  }, {
	    key: 'strings',
	    get: function get() {
	      return _constants.strings;
	    }
	  }, {
	    key: 'defaultAdapter',
	    get: function get() {
	      return {
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        hasClass: function hasClass() /* className: string */{},
	        hasNecessaryDom: function hasNecessaryDom() {
	          return (/* boolean */false
	          );
	        },
	        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
	        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
	        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
	        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
	        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
	        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
	        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
	        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
	        setTranslateX: function setTranslateX() /* value: number | null */{},
	        updateCssVariable: function updateCssVariable() /* value: string */{},
	        getFocusableElements: function getFocusableElements() /* NodeList */{},
	        saveElementTabState: function saveElementTabState() /* el: Element */{},
	        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
	        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
	        isRtl: function isRtl() {
	          return (/* boolean */false
	          );
	        },
	        getDrawerWidth: function getDrawerWidth() {
	          return (/* number */0
	          );
	        },
	        isDrawer: function isDrawer() {
	          return (/* el: Element */ /* boolean */false
	          );
	        }
	      };
	    }
	  }]);

	  function MDCTemporaryDrawerFoundation(adapter) {
	    _classCallCheck(this, MDCTemporaryDrawerFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, _extends(MDCTemporaryDrawerFoundation.defaultAdapter, adapter)));

	    _this.transitionEndHandler_ = function (ev) {
	      if (_this.adapter_.isDrawer(ev.target)) {
	        _this.adapter_.removeClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
	        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
	      }
	    };

	    _this.inert_ = false;

	    _this.componentClickHandler_ = function () {
	      return _this.close();
	    };
	    _this.drawerClickHandler_ = function (evt) {
	      return evt.stopPropagation();
	    };
	    _this.componentTouchStartHandler_ = function (evt) {
	      return _this.handleTouchStart_(evt);
	    };
	    _this.componentTouchMoveHandler_ = function (evt) {
	      return _this.handleTouchMove_(evt);
	    };
	    _this.componentTouchEndHandler_ = function (evt) {
	      return _this.handleTouchEnd_(evt);
	    };
	    _this.documentKeydownHandler_ = function (evt) {
	      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
	        _this.close();
	      }
	    };
	    return _this;
	  }

	  _createClass(MDCTemporaryDrawerFoundation, [{
	    key: 'init',
	    value: function init() {
	      var _MDCTemporaryDrawerFo = MDCTemporaryDrawerFoundation.cssClasses,
	          ROOT = _MDCTemporaryDrawerFo.ROOT,
	          OPEN = _MDCTemporaryDrawerFo.OPEN;


	      if (!this.adapter_.hasClass(ROOT)) {
	        throw new Error(ROOT + ' class required in root element.');
	      }

	      if (!this.adapter_.hasNecessaryDom()) {
	        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
	      }

	      if (this.adapter_.hasClass(OPEN)) {
	        this.isOpen_ = true;
	      } else {
	        this.detabinate_();
	        this.isOpen_ = false;
	      }

	      // Make browser aware of custom property being used in this element.
	      // Workaround for certain types of hard-to-reproduce heisenbugs.
	      this.adapter_.updateCssVariable(0);

	      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
	      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
	      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
	      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
	      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
	      this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
	      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
	      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
	      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
	      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
	      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      // Make sure custom property values are cleared before starting.
	      this.adapter_.updateCssVariable('');

	      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
	      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
	      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
	      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN);
	      this.retabinate_();
	      this.isOpen_ = true;
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      // Make sure custom property values are cleared before making any changes.
	      this.adapter_.updateCssVariable('');

	      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
	      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
	      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
	      this.adapter_.removeClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN);
	      this.detabinate_();
	      this.isOpen_ = false;
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.isOpen_;
	    }

	    /**
	     *  Render all children of the drawer inert when it's closed.
	     */

	  }, {
	    key: 'detabinate_',
	    value: function detabinate_() {
	      if (this.inert_) {
	        return;
	      }

	      var elements = this.adapter_.getFocusableElements();
	      if (elements) {
	        for (var i = 0; i < elements.length; i++) {
	          this.adapter_.saveElementTabState(elements[i]);
	          this.adapter_.makeElementUntabbable(elements[i]);
	        }
	      }

	      this.inert_ = true;
	    }

	    /**
	     *  Make all children of the drawer tabbable again when it's open.
	     */

	  }, {
	    key: 'retabinate_',
	    value: function retabinate_() {
	      if (!this.inert_) {
	        return;
	      }

	      var elements = this.adapter_.getFocusableElements();
	      if (elements) {
	        for (var i = 0; i < elements.length; i++) {
	          this.adapter_.restoreElementTabState(elements[i]);
	        }
	      }

	      this.inert_ = false;
	    }
	  }, {
	    key: 'handleTouchStart_',
	    value: function handleTouchStart_(evt) {
	      if (!this.adapter_.hasClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN)) {
	        return;
	      }
	      if (evt.pointerType && evt.pointerType !== 'touch') {
	        return;
	      }

	      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
	      this.drawerWidth_ = this.adapter_.getDrawerWidth();
	      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
	      this.currentX_ = this.startX_;
	      this.touchingSideNav_ = true;

	      requestAnimationFrame(this.updateDrawer_.bind(this));
	    }
	  }, {
	    key: 'handleTouchMove_',
	    value: function handleTouchMove_(evt) {
	      if (evt.pointerType && evt.pointerType !== 'touch') {
	        return;
	      }

	      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
	    }
	  }, {
	    key: 'handleTouchEnd_',
	    value: function handleTouchEnd_(evt) {
	      if (evt.pointerType && evt.pointerType !== 'touch') {
	        return;
	      }

	      this.touchingSideNav_ = false;
	      this.adapter_.setTranslateX(null);
	      this.adapter_.updateCssVariable('');

	      var newPos = null;
	      if (this.direction_ === 1) {
	        newPos = Math.min(0, this.currentX_ - this.startX_);
	      } else {
	        newPos = Math.max(0, this.currentX_ - this.startX_);
	      }

	      // Did the user close the drawer by more than 50%?
	      if (Math.abs(newPos / this.drawerWidth_) >= 0.5) {
	        this.close();
	      } else {
	        // Triggering an open here means we'll get a nice animation back to the fully open state.
	        this.open();
	      }
	    }
	  }, {
	    key: 'updateDrawer_',
	    value: function updateDrawer_() {
	      if (!this.touchingSideNav_) {
	        return;
	      }

	      requestAnimationFrame(this.updateDrawer_.bind(this));

	      var newPos = null;
	      var newOpacity = null;

	      if (this.direction_ === 1) {
	        newPos = Math.min(0, this.currentX_ - this.startX_);
	      } else {
	        newPos = Math.max(0, this.currentX_ - this.startX_);
	      }

	      newOpacity = Math.max(0, 1 + this.direction_ * (newPos / this.drawerWidth_));

	      this.adapter_.setTranslateX(newPos);
	      this.adapter_.updateCssVariable(newOpacity);
	    }
	  }]);

	  return MDCTemporaryDrawerFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCTemporaryDrawerFoundation;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var ROOT = 'mdc-temporary-drawer';

	var cssClasses = exports.cssClasses = {
	  ROOT: ROOT,
	  OPEN: ROOT + '--open',
	  ANIMATING: ROOT + '--animating',
	  RIGHT: ROOT + '--right'
	};

	var strings = exports.strings = {
	  DRAWER_SELECTOR: '.' + ROOT + '__drawer',
	  OPACITY_VAR_NAME: '--' + ROOT + '-opacity',
	  FOCUSABLE_ELEMENTS: 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.remapEvent = remapEvent;
	exports.getTransformPropertyName = getTransformPropertyName;
	exports.supportsCssCustomProperties = supportsCssCustomProperties;
	exports.applyPassive = applyPassive;
	exports.saveElementTabState = saveElementTabState;
	exports.restoreElementTabState = restoreElementTabState;
	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var TAB_DATA = 'data-mdc-tabindex';
	var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

	var storedTransformPropertyName_ = void 0;
	var supportsPassive_ = void 0;

	// Remap touch events to pointer events, if the browser doesn't support touch events.
	function remapEvent(eventName) {
	  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

	  if (!('ontouchstart' in globalObj.document)) {
	    switch (eventName) {
	      case 'touchstart':
	        return 'pointerdown';
	      case 'touchmove':
	        return 'pointermove';
	      case 'touchend':
	        return 'pointerup';
	      default:
	        return eventName;
	    }
	  }

	  return eventName;
	}

	// Choose the correct transform property to use on the current browser.
	function getTransformPropertyName() {
	  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (storedTransformPropertyName_ === undefined || forceRefresh) {
	    var el = globalObj.document.createElement('div');
	    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
	    storedTransformPropertyName_ = transformPropertyName;
	  }

	  return storedTransformPropertyName_;
	}

	// Determine whether the current browser supports CSS properties.
	function supportsCssCustomProperties() {
	  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

	  if ('CSS' in globalObj) {
	    return globalObj.CSS.supports('(--color: red)');
	  }
	  return false;
	}

	// Determine whether the current browser supports passive event listeners, and if so, use them.
	function applyPassive() {
	  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (supportsPassive_ === undefined || forceRefresh) {
	    var isSupported = false;
	    try {
	      globalObj.document.addEventListener('test', null, { get passive() {
	          isSupported = true;
	        } });
	    } catch (e) {}

	    supportsPassive_ = isSupported;
	  }

	  return supportsPassive_ ? { passive: true } : false;
	}

	// Save the tab state for an element.
	function saveElementTabState(el) {
	  if (el.hasAttribute('tabindex')) {
	    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
	  }
	  el.setAttribute(TAB_DATA_HANDLED, true);
	}

	// Restore the tab state for an element, if it was saved.
	function restoreElementTabState(el) {
	  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
	  if (el.hasAttribute(TAB_DATA_HANDLED)) {
	    if (el.hasAttribute(TAB_DATA)) {
	      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
	      el.removeAttribute(TAB_DATA);
	    } else {
	      el.removeAttribute('tabindex');
	    }
	    el.removeAttribute(TAB_DATA_HANDLED);
	  }
	}

/***/ }
/******/ ])
});
;