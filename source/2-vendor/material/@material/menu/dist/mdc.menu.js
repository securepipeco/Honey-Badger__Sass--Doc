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
		exports["menu"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["menu"] = factory();
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

	module.exports = __webpack_require__(20);


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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _simple = __webpack_require__(21);

	Object.defineProperty(exports, 'MDCSimpleMenu', {
	  enumerable: true,
	  get: function get() {
	    return _simple.MDCSimpleMenu;
	  }
	});
	Object.defineProperty(exports, 'MDCSimpleMenuFoundation', {
	  enumerable: true,
	  get: function get() {
	    return _simple.MDCSimpleMenuFoundation;
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCSimpleMenu = exports.MDCSimpleMenuFoundation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _foundation = __webpack_require__(22);

	var _foundation2 = _interopRequireDefault(_foundation);

	var _util = __webpack_require__(24);

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

	exports.MDCSimpleMenuFoundation = _foundation2.default;

	var MDCSimpleMenu = exports.MDCSimpleMenu = function (_MDCComponent) {
	  _inherits(MDCSimpleMenu, _MDCComponent);

	  function MDCSimpleMenu() {
	    _classCallCheck(this, MDCSimpleMenu);

	    return _possibleConstructorReturn(this, (MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).apply(this, arguments));
	  }

	  _createClass(MDCSimpleMenu, [{
	    key: 'show',
	    value: function show() {
	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$focusIndex = _ref.focusIndex,
	          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

	      this.foundation_.open({ focusIndex: focusIndex });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.foundation_.close();
	    }

	    /* Return the item container element inside the component. */

	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this2 = this;

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
	          return Boolean(_this2.itemsContainer_);
	        },
	        getInnerDimensions: function getInnerDimensions() {
	          var itemsContainer = _this2.itemsContainer_;

	          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
	        },
	        hasAnchor: function hasAnchor() {
	          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
	        },
	        getAnchorDimensions: function getAnchorDimensions() {
	          return _this2.root_.parentElement.getBoundingClientRect();
	        },
	        getWindowDimensions: function getWindowDimensions() {
	          return { width: window.innerWidth, height: window.innerHeight };
	        },
	        setScale: function setScale(x, y) {
	          _this2.root_.style[(0, _util.getTransformPropertyName)(window)] = 'scale(' + x + ', ' + y + ')';
	        },
	        setInnerScale: function setInnerScale(x, y) {
	          _this2.itemsContainer_.style[(0, _util.getTransformPropertyName)(window)] = 'scale(' + x + ', ' + y + ')';
	        },
	        getNumberOfItems: function getNumberOfItems() {
	          return _this2.items.length;
	        },
	        registerInteractionHandler: function registerInteractionHandler(type, handler) {
	          return _this2.root_.addEventListener(type, handler);
	        },
	        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
	          return _this2.root_.removeEventListener(type, handler);
	        },
	        registerDocumentClickHandler: function registerDocumentClickHandler(handler) {
	          return document.addEventListener('click', handler);
	        },
	        deregisterDocumentClickHandler: function deregisterDocumentClickHandler(handler) {
	          return document.removeEventListener('click', handler);
	        },
	        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
	          var _items$index = _this2.items[index],
	              top = _items$index.offsetTop,
	              height = _items$index.offsetHeight;

	          return { top: top, height: height };
	        },
	        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
	          return _this2.items[index].style.setProperty('transition-delay', value);
	        },
	        getIndexForEventTarget: function getIndexForEventTarget(target) {
	          return _this2.items.indexOf(target);
	        },
	        notifySelected: function notifySelected(evtData) {
	          return _this2.emit('MDCSimpleMenu:selected', {
	            index: evtData.index,
	            item: _this2.items[evtData.index]
	          });
	        },
	        notifyCancel: function notifyCancel() {
	          return _this2.emit('MDCSimpleMenu:cancel');
	        },
	        saveFocus: function saveFocus() {
	          _this2.previousFocus_ = document.activeElement;
	        },
	        restoreFocus: function restoreFocus() {
	          if (_this2.previousFocus_) {
	            _this2.previousFocus_.focus();
	          }
	        },
	        isFocused: function isFocused() {
	          return document.activeElement === _this2.root_;
	        },
	        focus: function focus() {
	          return _this2.root_.focus();
	        },
	        getFocusedItemIndex: function getFocusedItemIndex() {
	          return _this2.items.indexOf(document.activeElement);
	        },
	        focusItemAtIndex: function focusItemAtIndex(index) {
	          return _this2.items[index].focus();
	        },
	        isRtl: function isRtl() {
	          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
	        },
	        setTransformOrigin: function setTransformOrigin(origin) {
	          _this2.root_.style[(0, _util.getTransformPropertyName)(window) + '-origin'] = origin;
	        },
	        setPosition: function setPosition(position) {
	          _this2.root_.style.left = 'left' in position ? position.left : null;
	          _this2.root_.style.right = 'right' in position ? position.right : null;
	          _this2.root_.style.top = 'top' in position ? position.top : null;
	          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
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
	  }, {
	    key: 'itemsContainer_',
	    get: function get() {
	      return this.root_.querySelector(_foundation2.default.strings.ITEMS_SELECTOR);
	    }

	    /* Return the items within the menu. Note that this only contains the set of elements within
	     * the items container that are proper list items, and not supplemental / presentational DOM
	     * elements.
	     */

	  }, {
	    key: 'items',
	    get: function get() {
	      var itemsContainer = this.itemsContainer_;

	      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
	    }
	  }], [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCSimpleMenu(root);
	    }
	  }]);

	  return MDCSimpleMenu;
	}(_base.MDCComponent);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _constants = __webpack_require__(23);

	var _util = __webpack_require__(24);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

	var MDCSimpleMenuFoundation = function (_MDCFoundation) {
	  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

	  _createClass(MDCSimpleMenuFoundation, null, [{
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
	    key: 'numbers',
	    get: function get() {
	      return _constants.numbers;
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
	        getInnerDimensions: function getInnerDimensions() {
	          return (/* { width: number, height: number } */{}
	          );
	        },
	        hasAnchor: function hasAnchor() {
	          return (/* boolean */false
	          );
	        },
	        getAnchorDimensions: function getAnchorDimensions() {
	          return (
	            /* { width: number, height: number, top: number, right: number, bottom: number, left: number } */{}
	          );
	        },
	        getWindowDimensions: function getWindowDimensions() {
	          return (/* { width: number, height: number } */{}
	          );
	        },
	        setScale: function setScale() /* x: number, y: number */{},
	        setInnerScale: function setInnerScale() /* x: number, y: number */{},
	        getNumberOfItems: function getNumberOfItems() {
	          return (/* number */0
	          );
	        },
	        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
	        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
	        registerDocumentClickHandler: function registerDocumentClickHandler() /* handler: EventListener */{},
	        deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /* handler: EventListener */{},
	        getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
	          return (/* index: number */ /* {top: number, height: number} */{}
	          );
	        },
	        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /* index: number, value: string */{},
	        getIndexForEventTarget: function getIndexForEventTarget() {
	          return (/* target: EventTarget */ /* number */0
	          );
	        },
	        notifySelected: function notifySelected() /* evtData: {index: number} */{},
	        notifyCancel: function notifyCancel() {},
	        saveFocus: function saveFocus() {},
	        restoreFocus: function restoreFocus() {},
	        isFocused: function isFocused() {
	          return (/* boolean */false
	          );
	        },
	        focus: function focus() {},
	        getFocusedItemIndex: function getFocusedItemIndex() {
	          return (/* number */-1
	          );
	        },
	        focusItemAtIndex: function focusItemAtIndex() /* index: number */{},
	        isRtl: function isRtl() {
	          return (/* boolean */false
	          );
	        },
	        setTransformOrigin: function setTransformOrigin() /* origin: string */{},
	        setPosition: function setPosition() /* position: { top: string, right: string, bottom: string, left: string } */{}
	      };
	    }
	  }]);

	  function MDCSimpleMenuFoundation(adapter) {
	    _classCallCheck(this, MDCSimpleMenuFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

	    _this.clickHandler_ = function (evt) {
	      return _this.handlePossibleSelected_(evt);
	    };
	    _this.keydownHandler_ = function (evt) {
	      return _this.handleKeyboardDown_(evt);
	    };
	    _this.keyupHandler_ = function (evt) {
	      return _this.handleKeyboardUp_(evt);
	    };
	    _this.documentClickHandler_ = function (evt) {
	      _this.adapter_.notifyCancel();
	      _this.close();
	    };
	    _this.isOpen_ = false;
	    _this.startScaleX_ = 0;
	    _this.startScaleY_ = 0;
	    _this.targetScale_ = 1;
	    _this.scaleX_ = 0;
	    _this.scaleY_ = 0;
	    _this.running_ = false;
	    _this.selectedTriggerTimerId_ = 0;
	    _this.animationRequestId_ = 0;
	    return _this;
	  }

	  _createClass(MDCSimpleMenuFoundation, [{
	    key: 'init',
	    value: function init() {
	      var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
	          ROOT = _MDCSimpleMenuFoundat.ROOT,
	          OPEN = _MDCSimpleMenuFoundat.OPEN;


	      if (!this.adapter_.hasClass(ROOT)) {
	        throw new Error(ROOT + ' class required in root element.');
	      }

	      if (!this.adapter_.hasNecessaryDom()) {
	        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
	      }

	      if (this.adapter_.hasClass(OPEN)) {
	        this.isOpen_ = true;
	      }

	      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
	      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
	      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      clearTimeout(this.selectedTriggerTimerId_);
	      // Cancel any currently running animations.
	      cancelAnimationFrame(this.animationRequestId_);
	      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
	      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
	      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
	      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
	    }

	    // Calculate transition delays for individual menu items, so that they fade in one at a time.

	  }, {
	    key: 'applyTransitionDelays_',
	    value: function applyTransitionDelays_() {
	      var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
	          BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
	          BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

	      var numItems = this.adapter_.getNumberOfItems();
	      var height = this.dimensions_.height;

	      var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
	      var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

	      for (var index = 0; index < numItems; index++) {
	        var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
	            itemTop = _adapter_$getYParamsF.top,
	            itemHeight = _adapter_$getYParamsF.height;

	        this.itemHeight_ = itemHeight;
	        var itemDelayFraction = itemTop / height;
	        if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
	          itemDelayFraction = (height - itemTop - itemHeight) / height;
	        }
	        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
	        // Use toFixed() here to normalize CSS unit precision across browsers
	        this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
	      }
	    }

	    // Remove transition delays from menu items.

	  }, {
	    key: 'removeTransitionDelays_',
	    value: function removeTransitionDelays_() {
	      var numItems = this.adapter_.getNumberOfItems();
	      for (var i = 0; i < numItems; i++) {
	        this.adapter_.setTransitionDelayForItemAtIndex(i, null);
	      }
	    }

	    // Animate menu opening or closing.

	  }, {
	    key: 'animationLoop_',
	    value: function animationLoop_() {
	      var _this2 = this;

	      var time = window.performance.now();
	      var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
	          TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
	          TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
	          TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
	          TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
	          TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
	          TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
	          TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

	      var currentTime = (0, _util.clamp)((time - this.startTime_) / TRANSITION_DURATION_MS);

	      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
	      var currentTimeX = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
	      // No time-shifting on the Y axis when closing.
	      var currentTimeY = currentTime;

	      var startScaleY = this.startScaleY_;
	      if (this.targetScale_ === 1) {
	        // Start with the menu at the height of a single item.
	        if (this.itemHeight_) {
	          startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
	        }
	        // X axis moves faster, so time-shift forward.
	        currentTimeX = (0, _util.clamp)(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
	        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
	        currentTimeY = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
	      }

	      // Apply cubic bezier easing independently to each axis.
	      var easeX = (0, _util.bezierProgress)(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
	      var easeY = (0, _util.bezierProgress)(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

	      // Calculate the scales to apply to the outer container and inner container.
	      this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
	      var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
	      this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
	      var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

	      // Apply scales.
	      this.adapter_.setScale(this.scaleX_, this.scaleY_);
	      this.adapter_.setInnerScale(invScaleX, invScaleY);

	      // Stop animation when we've covered the entire 0 - 1 range of time.
	      if (currentTime < 1) {
	        this.animationRequestId_ = requestAnimationFrame(function () {
	          return _this2.animationLoop_();
	        });
	      } else {
	        this.animationRequestId_ = 0;
	        this.running_ = false;
	        this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
	      }
	    }

	    // Starts the open or close animation.

	  }, {
	    key: 'animateMenu_',
	    value: function animateMenu_() {
	      var _this3 = this;

	      this.startTime_ = window.performance.now();
	      this.startScaleX_ = this.scaleX_;
	      this.startScaleY_ = this.scaleY_;

	      this.targetScale_ = this.isOpen_ ? 1 : 0;

	      if (!this.running_) {
	        this.running_ = true;
	        this.animationRequestId_ = requestAnimationFrame(function () {
	          return _this3.animationLoop_();
	        });
	      }
	    }
	  }, {
	    key: 'focusOnOpen_',
	    value: function focusOnOpen_(focusIndex) {
	      if (focusIndex === null) {
	        // First, try focusing the menu.
	        this.adapter_.focus();
	        // If that doesn't work, focus first item instead.
	        if (!this.adapter_.isFocused()) {
	          this.adapter_.focusItemAtIndex(0);
	        }
	      } else {
	        this.adapter_.focusItemAtIndex(focusIndex);
	      }
	    }

	    // Handle keys that we want to repeat on hold (tab and arrows).

	  }, {
	    key: 'handleKeyboardDown_',
	    value: function handleKeyboardDown_(evt) {
	      // Do nothing if Alt, Ctrl or Meta are pressed.
	      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
	        return true;
	      }

	      var keyCode = evt.keyCode,
	          key = evt.key,
	          shiftKey = evt.shiftKey;

	      var isTab = key === 'Tab' || keyCode === 9;
	      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
	      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
	      var isSpace = key === 'Space' || keyCode === 32;

	      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
	      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

	      if (shiftKey && isTab && focusedItemIndex === 0) {
	        this.adapter_.focusItemAtIndex(lastItemIndex);
	        evt.preventDefault();
	        return false;
	      }

	      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
	        this.adapter_.focusItemAtIndex(0);
	        evt.preventDefault();
	        return false;
	      }

	      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
	      if (isArrowUp || isArrowDown || isSpace) {
	        evt.preventDefault();
	      }

	      if (isArrowUp) {
	        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
	          this.adapter_.focusItemAtIndex(lastItemIndex);
	        } else {
	          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
	        }
	      } else if (isArrowDown) {
	        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
	          this.adapter_.focusItemAtIndex(0);
	        } else {
	          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
	        }
	      }

	      return true;
	    }

	    // Handle keys that we don't want to repeat on hold (Enter, Space, Escape).

	  }, {
	    key: 'handleKeyboardUp_',
	    value: function handleKeyboardUp_(evt) {
	      // Do nothing if Alt, Ctrl or Meta are pressed.
	      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
	        return true;
	      }

	      var keyCode = evt.keyCode,
	          key = evt.key;

	      var isEnter = key === 'Enter' || keyCode === 13;
	      var isSpace = key === 'Space' || keyCode === 32;
	      var isEscape = key === 'Escape' || keyCode === 27;

	      if (isEnter || isSpace) {
	        this.handlePossibleSelected_(evt);
	      }

	      if (isEscape) {
	        this.adapter_.notifyCancel();
	        this.close();
	      }

	      return true;
	    }
	  }, {
	    key: 'handlePossibleSelected_',
	    value: function handlePossibleSelected_(evt) {
	      var _this4 = this;

	      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
	      if (targetIndex < 0) {
	        return;
	      }
	      // Debounce multiple selections
	      if (this.selectedTriggerTimerId_) {
	        return;
	      }
	      this.selectedTriggerTimerId_ = setTimeout(function () {
	        _this4.selectedTriggerTimerId_ = 0;
	        _this4.close();
	        _this4.adapter_.notifySelected({ index: targetIndex });
	      }, _constants.numbers.SELECTED_TRIGGER_DELAY);
	    }
	  }, {
	    key: 'autoPosition_',
	    value: function autoPosition_() {
	      var _position;

	      if (!this.adapter_.hasAnchor()) {
	        return;
	      }

	      // Defaults: open from the top left.
	      var vertical = 'top';
	      var horizontal = 'left';

	      var anchor = this.adapter_.getAnchorDimensions();
	      var windowDimensions = this.adapter_.getWindowDimensions();

	      var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
	      var bottomOverflow = this.dimensions_.height - anchor.bottom;
	      var extendsBeyondTopBounds = topOverflow > 0;

	      if (extendsBeyondTopBounds) {
	        if (bottomOverflow < topOverflow) {
	          vertical = 'bottom';
	        }
	      }

	      var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
	      var rightOverflow = this.dimensions_.width - anchor.right;
	      var extendsBeyondLeftBounds = leftOverflow > 0;
	      var extendsBeyondRightBounds = rightOverflow > 0;

	      if (this.adapter_.isRtl()) {
	        // In RTL, we prefer to open from the right.
	        horizontal = 'right';
	        if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
	          horizontal = 'left';
	        }
	      } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
	        horizontal = 'right';
	      }

	      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

	      this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
	      this.adapter_.setPosition(position);
	    }

	    // Open the menu.

	  }, {
	    key: 'open',
	    value: function open() {
	      var _this5 = this;

	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$focusIndex = _ref.focusIndex,
	          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

	      this.adapter_.saveFocus();
	      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
	      this.animationRequestId_ = requestAnimationFrame(function () {
	        _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
	        _this5.applyTransitionDelays_();
	        _this5.autoPosition_();
	        _this5.animateMenu_();
	        _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
	        _this5.focusOnOpen_(focusIndex);
	        _this5.adapter_.registerDocumentClickHandler(_this5.documentClickHandler_);
	      });
	      this.isOpen_ = true;
	    }

	    // Close the menu.

	  }, {
	    key: 'close',
	    value: function close() {
	      var _this6 = this;

	      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
	      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
	      requestAnimationFrame(function () {
	        _this6.removeTransitionDelays_();
	        _this6.animateMenu_();
	        _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
	      });
	      this.isOpen_ = false;
	      this.adapter_.restoreFocus();
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.isOpen_;
	    }
	  }]);

	  return MDCSimpleMenuFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCSimpleMenuFoundation;

/***/ },
/* 23 */
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

	var ROOT = 'mdc-simple-menu';

	var cssClasses = exports.cssClasses = {
	  ROOT: ROOT,
	  OPEN: ROOT + '--open',
	  ANIMATING: ROOT + '--animating',
	  TOP_RIGHT: ROOT + '--open-from-top-right',
	  BOTTOM_LEFT: ROOT + '--open-from-bottom-left',
	  BOTTOM_RIGHT: ROOT + '--open-from-bottom-right'
	};

	var strings = exports.strings = {
	  ITEMS_SELECTOR: '.' + ROOT + '__items'
	};

	var numbers = exports.numbers = {
	  // Amount of time to wait before triggering a selected event on the menu. Note that this time
	  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
	  // animate before closing the menu
	  SELECTED_TRIGGER_DELAY: 50,
	  // Total duration of the menu animation.
	  TRANSITION_DURATION_MS: 300,
	  // The menu starts its open animation with the X axis at this time value (0 - 1).
	  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
	  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
	  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
	  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
	  TRANSITION_X1: 0,
	  TRANSITION_Y1: 0,
	  TRANSITION_X2: 0.2,
	  TRANSITION_Y2: 1
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformPropertyName = getTransformPropertyName;
	exports.clamp = clamp;
	exports.bezierProgress = bezierProgress;
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

	var storedTransformPropertyName_ = void 0;

	// Returns the name of the correct transform property to use on the current browser.
	function getTransformPropertyName(globalObj) {
	  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (storedTransformPropertyName_ === undefined || forceRefresh) {
	    var el = globalObj.document.createElement('div');
	    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
	    storedTransformPropertyName_ = transformPropertyName;
	  }

	  return storedTransformPropertyName_;
	}

	// Clamps a value between the minimum and the maximum, returning the clamped value.
	function clamp(value) {
	  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	  return Math.min(max, Math.max(min, value));
	}

	// Returns the easing value to apply at time t, for a given cubic bezier curve.
	// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
	// Paramters are as follows:
	// - time: The current time in the animation, scaled between 0 and 1.
	// - x1: The x value of control point P1.
	// - y1: The y value of control point P1.
	// - x2: The x value of control point P2.
	// - y2: The y value of control point P2.
	function bezierProgress(time, x1, y1, x2, y2) {
	  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
	}

	// Compute a single coordinate at a position point between 0 and 1.
	// c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
	// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
	// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
	function getBezierCoordinate_(t, c1, c2) {
	  // Special case start and end.
	  if (t === 0 || t === 1) {
	    return t;
	  }

	  // Step one - from 4 points to 3
	  var ic0 = t * c1;
	  var ic1 = c1 + t * (c2 - c1);
	  var ic2 = c2 + t * (1 - c2);

	  // Step two - from 3 points to 2
	  ic0 += t * (ic1 - ic0);
	  ic1 += t * (ic2 - ic1);

	  // Final step - last point
	  return ic0 + t * (ic1 - ic0);
	}

	// Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
	// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
	function solvePositionFromXValue_(xVal, x1, x2) {
	  var EPSILON = 1e-6;
	  var MAX_ITERATIONS = 8;

	  if (xVal <= 0) {
	    return 0;
	  } else if (xVal >= 1) {
	    return 1;
	  }

	  // Initial estimate of t using linear interpolation.
	  var t = xVal;

	  // Try gradient descent to solve for t. If it works, it is very fast.
	  var tMin = 0;
	  var tMax = 1;
	  var value = 0;
	  for (var i = 0; i < MAX_ITERATIONS; i++) {
	    value = getBezierCoordinate_(t, x1, x2);
	    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
	    if (Math.abs(value - xVal) < EPSILON) {
	      return t;
	    } else if (Math.abs(derivative) < EPSILON) {
	      break;
	    } else {
	      if (value < xVal) {
	        tMin = t;
	      } else {
	        tMax = t;
	      }
	      t -= (value - xVal) / derivative;
	    }
	  }

	  // If the gradient descent got stuck in a local minimum, e.g. because
	  // the derivative was close to 0, use a Dichotomy refinement instead.
	  // We limit the number of interations to 8.
	  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
	    if (value < xVal) {
	      tMin = t;
	      t = (t + tMax) / 2;
	    } else {
	      tMax = t;
	      t = (t + tMin) / 2;
	    }
	    value = getBezierCoordinate_(t, x1, x2);
	  }
	  return t;
	}

/***/ }
/******/ ])
});
;