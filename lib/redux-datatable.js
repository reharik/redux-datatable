(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "redux"], factory);
	else if(typeof exports === 'object')
		exports["datatable"] = factory(require("react"), require("react-redux"), require("redux"));
	else
		root["datatable"] = factory(root["react"], root["react-redux"], root["redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"id":"redux__datatable__id","table__row":"redux__datatable__table__row","table__header":"redux__datatable__table__header","row__cell":"redux__datatable__row__cell","header__cell":"redux__datatable__header__cell","bulkSelect":"redux__datatable__bulkSelect","asc":"redux__datatable__asc","desc":"redux__datatable__desc"};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(3);

	Object.defineProperty(exports, 'tableReducers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	var _TableContainer = __webpack_require__(12);

	Object.defineProperty(exports, 'Table', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableContainer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tableModule = __webpack_require__(4);

	var _tableModule2 = _interopRequireDefault(_tableModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _default = { reduxDataTable: _tableModule2.default };
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/modules/index.js');
	})();

	;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SORT = exports.SET_COLUMNS = exports.SET_CONFIG = exports.DESELECT_ITEM = exports.SELECT_ITEM = exports.DESELECT_ALL = exports.SELECT_ALL = exports.NO_EVENT = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.handleSelectionEvent = handleSelectionEvent;
	exports.selectAll = selectAll;
	exports.deselectAll = deselectAll;
	exports.setSelection = setSelection;
	exports.setColumns = setColumns;
	exports.setConfig = setConfig;
	exports.sort = sort;
	exports.column = column;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _configValues = __webpack_require__(6);

	var _ramda = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var NO_EVENT = exports.NO_EVENT = 'redux-datatable/bulkAction/NO_EVENT';
	var SELECT_ALL = exports.SELECT_ALL = 'redux-datatable/bulkAction/SELECT_ALL';
	var DESELECT_ALL = exports.DESELECT_ALL = 'redux-datatable/bulkAction/DESELECT_ALL';
	var SELECT_ITEM = exports.SELECT_ITEM = 'redux-datatable/bulkAction/SELECT_ITEM';
	var DESELECT_ITEM = exports.DESELECT_ITEM = 'redux-datatable/bulkAction/DESELECT_ITEM';
	var SET_CONFIG = exports.SET_CONFIG = 'redux-datatable/column/SET_CONFIG';
	var SET_COLUMNS = exports.SET_COLUMNS = 'redux-datatable/column/SET_COLUMNS';
	var SORT = exports.SORT = 'redux-datatable/column/SORT';

	var selectItem = function selectItem() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  return (0, _ramda.uniq)(state.push(action.id));
	};

	var deselectItem = function deselectItem() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  return state.filter(function (x) {
	    return x != action.id;
	  });
	};

	var tableReducer = function tableReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  switch (action.type) {
	    case SELECT_ALL:
	      {
	        return _extends({}, state[_configValues.config.tableName], {
	          selectedItems: action.ids,
	          selectAll: true });
	      }
	    case DESELECT_ALL:
	      {
	        return _extends({}, state[_configValues.config.tableName], {
	          selectedItems: [],
	          selectAll: false });
	      }
	    case SELECT_ITEM:
	      {
	        return _extends({}, state[_configValues.config.tableName], {
	          selectedItems: selectItem(state, action)
	        });
	      }

	    case DESELECT_ITEM:
	      {
	        return _extends({}, state[_configValues.config.tableName], {
	          selectedItems: deselectItem(state, action)
	        });
	      }
	    case SORT:
	      {
	        return _extends({}, state[_configValues.config.tableName], {
	          sort: { property: action.property, dir: action.dir }
	        });
	      }
	    case SET_COLUMNS:
	      {
	        return _extends({}, state, {
	          columns: action.columns
	        });
	      }
	  }
	  return state;
	};

	var _default = function _default() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  if (action.type == SET_CONFIG) {
	    return _extends({}, state, _defineProperty({}, action.config.tableName, { config: action.config }));
	  } else if (state[action.tableName]) {
	    return _extends({}, state, _defineProperty({}, action.tableName, tableReducer(state[action.tableName], action)));
	  }
	  return state;
	};

	exports.default = _default;

	// I have to curry all these actions to get the table name into them


	function handleSelectionEvent(selectionEvent, dispatch) {

	  if (_configValues.config.HANDLE_BEFORE_SELECTION) {
	    _configValues.config.HANDLE_BEFORE_SELECTION(selectionEvent, disptach);
	  }

	  if (_configValues.config.HANDLE_BEFORE_BULKACTION_SHOW) {
	    _configValues.config.HANDLE_BEFORE_BULKACTION_SHOW(selectionEvent, disptach);
	  }

	  dispatch(selectionEvent);

	  if (_configValues.config.HANDLE_AFTER_SELECTION) {
	    _configValues.config.HANDLE_AFTER_SELECTION(selectionEvent, disptach);
	  }

	  if (_configValues.config.HANDLE_AFTER_BULKACTION_SHOW) {
	    _configValues.config.HANDLE_AFTER_BULKACTION_SHOW(selectionEvent, disptach);
	  }
	}

	function selectAll(tableName) {
	  return function (itemIds) {
	    return {
	      type: SELECT_ALL,
	      tableName: tableName,
	      ids: itemIds
	    };
	  };
	}

	function deselectAll(tableName) {
	  return function () {
	    return { type: DESELECT_ALL, tableName: tableName };
	  };
	}

	function setSelection(tableName) {
	  return function (column, id) {
	    if (column.bulkSelection.mode === 'disabled' || column.bulkSelection.mode === 'none') {
	      console.warn('Selection mode has been disabled');
	      return { type: NO_EVENT };
	    }

	    return {
	      type: SELECT_ITEM,
	      id: id,
	      tableName: tableName,
	      selectionMode: column.bulkSelection.mode
	    };
	  };
	}

	function setColumns(tableName) {
	  return function (columns) {
	    //TODO validateColumns here please
	    return {
	      type: SET_COLUMNS,
	      tableName: tableName,
	      columns: columns
	    };
	  };
	}

	function setConfig(config) {
	  return {
	    type: SET_CONFIG,
	    config: config
	  };
	}

	function sort(tableName) {
	  return function (column) {
	    if (_configValues.config.sortAsync) {} else {
	      return {
	        type: SORT,
	        tableName: tableName,
	        property: column.sortProperty,
	        dir: column.dir === 'asc' ? 'desc' : 'asc'
	      };
	    }
	  };
	}

	// this is saying if this property has a value use it,
	// else try the propety ... property, and if that's a func
	// then you are screwed and you don't ge a value result
	function getValue(opts, prop) {
	  if (prop && prop.length > 0) {
	    return prop;
	  } else if (opts.property !== 'function') {
	    return opts.property;
	  }
	  return undefind;
	}

	function column(opts) {
	  //TODO put in validation
	  var sortProperty = getValue(opts, opts.sortProperty);
	  var display = getValue(opts, opts.display);
	  var sort = opts.sort;
	  if (!sort || !sortProperty) {
	    sort = false;
	  }

	  return {
	    property: opts.property,
	    display: display,
	    propertyName: opts.propertyName,
	    width: opts.width || '100px',
	    additionalStyle: opts.additionalStyle,
	    className: opts.className,
	    headerClassName: opts.headerClassName,
	    headerFormat: opts.headerFormat,
	    hidden: opts.hidden,
	    sort: sort,
	    sortProperty: sortProperty
	  };
	}

	//
	// column schema
	// {
	//   property: 'email', :required
	//     display: 'Email', defaults to property name
	//   width: '100px',
	//   additionalStyle: { max-width: 20px }
	//   className: 'additional-class',
	//   headerClassName: 'someHeaderName',
	//   format: ({ column, value, row }) => {
	//   return (<div style={{color:"Red"}} >value</div>);
	// }
	//   headerFormat: ({ column, value, row }) => {
	//   return (<div style={{color:"Red"}} >value</div>);
	// },
	//   hidden: false
	// }

	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(NO_EVENT, 'NO_EVENT', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(SELECT_ALL, 'SELECT_ALL', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(DESELECT_ALL, 'DESELECT_ALL', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(SELECT_ITEM, 'SELECT_ITEM', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(DESELECT_ITEM, 'DESELECT_ITEM', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(SET_CONFIG, 'SET_CONFIG', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(SET_COLUMNS, 'SET_COLUMNS', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(SORT, 'SORT', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(selectItem, 'selectItem', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(deselectItem, 'deselectItem', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(tableReducer, 'tableReducer', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(handleSelectionEvent, 'handleSelectionEvent', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(selectAll, 'selectAll', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(deselectAll, 'deselectAll', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(setSelection, 'setSelection', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(setColumns, 'setColumns', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(setConfig, 'setConfig', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(sort, 'sort', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(getValue, 'getValue', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(column, 'column', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/modules/tableModule.js');
	})();

	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = undefined;
	exports.updateConfigs = updateConfigs;

	var _lodash = __webpack_require__(7);

	var _uuid = __webpack_require__(9);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  dataSource: undefined,
	  bulkSelection: {
	    mode: 'none',
	    identityColumn: 'id'
	  },
	  actionDataProp: 'payload'
	  //bunch of default values here;
	};

	function updateConfigs(newConfig) {

	  //TODO validate configs as we define them
	  (0, _lodash.merge)(config, newConfig);
	  return config;
	}

	exports.config = config;

	// schema for bulkSelection
	//  mode = multiple | single | disabled | none -> default multiple
	// identityColumn -> default 'id' it is required to have either an id or some other identifying column

	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(config, 'config', '/home/rharik/Development/cannibal/redux-datatable/src/utilities/configValues.js');

	  __REACT_HOT_LOADER__.register(updateConfigs, 'updateConfigs', '/home/rharik/Development/cannibal/redux-datatable/src/utilities/configValues.js');
	})();

	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * @license
	 * lodash <https://lodash.com/>
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '4.15.0';

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used to stand-in for `undefined` hash values. */
	  var HASH_UNDEFINED = '__lodash_hash_undefined__';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** Used to compose bitmasks for function metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256,
	      FLIP_FLAG = 512;

	  /** Used to compose bitmasks for comparison styles. */
	  var UNORDERED_COMPARE_FLAG = 1,
	      PARTIAL_COMPARE_FLAG = 2;

	  /** Used as default options for `_.truncate`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect hot functions by number of calls within a span of milliseconds. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2,
	      LAZY_WHILE_FLAG = 3;

	  /** Used as references for various `Number` constants. */
	  var INFINITY = 1 / 0,
	      MAX_SAFE_INTEGER = 9007199254740991,
	      MAX_INTEGER = 1.7976931348623157e+308,
	      NAN = 0 / 0;

	  /** Used as references for the maximum length and index of an array. */
	  var MAX_ARRAY_LENGTH = 4294967295,
	      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	  /** Used to associate wrap methods with their bit flags. */
	  var wrapFlags = [
	    ['ary', ARY_FLAG],
	    ['bind', BIND_FLAG],
	    ['bindKey', BIND_KEY_FLAG],
	    ['curry', CURRY_FLAG],
	    ['curryRight', CURRY_RIGHT_FLAG],
	    ['flip', FLIP_FLAG],
	    ['partial', PARTIAL_FLAG],
	    ['partialRight', PARTIAL_RIGHT_FLAG],
	    ['rearg', REARG_FLAG]
	  ];

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      genTag = '[object GeneratorFunction]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      promiseTag = '[object Promise]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      symbolTag = '[object Symbol]',
	      weakMapTag = '[object WeakMap]',
	      weakSetTag = '[object WeakSet]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      dataViewTag = '[object DataView]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      reLeadingDot = /^\./,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	  /**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */
	  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	      reHasRegExpChar = RegExp(reRegExpChar.source);

	  /** Used to match leading and trailing whitespace. */
	  var reTrim = /^\s+|\s+$/g,
	      reTrimStart = /^\s+/,
	      reTrimEnd = /\s+$/;

	  /** Used to match wrap detail comments. */
	  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	      reSplitDetails = /,? & /;

	  /** Used to match words composed of alphanumeric characters. */
	  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0x/i;

	  /** Used to detect bad signed hexadecimal string values. */
	  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	  /** Used to detect binary string values. */
	  var reIsBinary = /^0b[01]+$/i;

	  /** Used to detect host constructors (Safari). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect octal string values. */
	  var reIsOctal = /^0o[0-7]+$/i;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^(?:0|[1-9]\d*)$/;

	  /** Used to match Latin Unicode letters (excluding mathematical operators). */
	  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to compose unicode character classes. */
	  var rsAstralRange = '\\ud800-\\udfff',
	      rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	      rsComboSymbolsRange = '\\u20d0-\\u20f0',
	      rsDingbatRange = '\\u2700-\\u27bf',
	      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	      rsPunctuationRange = '\\u2000-\\u206f',
	      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	      rsVarRange = '\\ufe0e\\ufe0f',
	      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	  /** Used to compose unicode capture groups. */
	  var rsApos = "['\u2019]",
	      rsAstral = '[' + rsAstralRange + ']',
	      rsBreak = '[' + rsBreakRange + ']',
	      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	      rsDigits = '\\d+',
	      rsDingbat = '[' + rsDingbatRange + ']',
	      rsLower = '[' + rsLowerRange + ']',
	      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	      rsFitz = '\\ud83c[\\udffb-\\udfff]',
	      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	      rsNonAstral = '[^' + rsAstralRange + ']',
	      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	      rsUpper = '[' + rsUpperRange + ']',
	      rsZWJ = '\\u200d';

	  /** Used to compose unicode regexes. */
	  var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
	      rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
	      rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	      rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	      reOptMod = rsModifier + '?',
	      rsOptVar = '[' + rsVarRange + ']?',
	      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	      rsSeq = rsOptVar + reOptMod + rsOptJoin,
	      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
	      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	  /** Used to match apostrophes. */
	  var reApos = RegExp(rsApos, 'g');

	  /**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */
	  var reComboMark = RegExp(rsCombo, 'g');

	  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	  /** Used to match complex or compound words. */
	  var reUnicodeWord = RegExp([
	    rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	    rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
	    rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
	    rsUpper + '+' + rsOptUpperContr,
	    rsDigits,
	    rsEmoji
	  ].join('|'), 'g');

	  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	  /** Used to detect strings that need a more robust regexp to match words. */
	  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
	    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
	    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	  typedArrayTags[setTag] = typedArrayTags[stringTag] =
	  typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	  cloneableTags[boolTag] = cloneableTags[dateTag] =
	  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	  cloneableTags[int32Tag] = cloneableTags[mapTag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[setTag] =
	  cloneableTags[stringTag] = cloneableTags[symbolTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map Latin Unicode letters to basic Latin letters. */
	  var deburredLetters = {
	    // Latin-1 Supplement block.
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss',
	    // Latin Extended-A block.
	    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	    '\u0134': 'J',  '\u0135': 'j',
	    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	    '\u0174': 'W',  '\u0175': 'w',
	    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	    '\u0132': 'IJ', '\u0133': 'ij',
	    '\u0152': 'Oe', '\u0153': 'oe',
	    '\u0149': "'n", '\u017f': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Built-in method references without a dependency on `root`. */
	  var freeParseFloat = parseFloat,
	      freeParseInt = parseInt;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	  /** Used as a reference to the global object. */
	  var root = freeGlobal || freeSelf || Function('return this')();

	  /** Detect free variable `exports`. */
	  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports;

	  /** Detect free variable `process` from Node.js. */
	  var freeProcess = moduleExports && freeGlobal.process;

	  /** Used to access faster Node.js helpers. */
	  var nodeUtil = (function() {
	    try {
	      return freeProcess && freeProcess.binding('util');
	    } catch (e) {}
	  }());

	  /* Node.js helper references. */
	  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
	      nodeIsDate = nodeUtil && nodeUtil.isDate,
	      nodeIsMap = nodeUtil && nodeUtil.isMap,
	      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
	      nodeIsSet = nodeUtil && nodeUtil.isSet,
	      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */
	  function addMapEntry(map, pair) {
	    // Don't return `map.set` because it's not chainable in IE 11.
	    map.set(pair[0], pair[1]);
	    return map;
	  }

	  /**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */
	  function addSetEntry(set, value) {
	    // Don't return `set.add` because it's not chainable in IE 11.
	    set.add(value);
	    return set;
	  }

	  /**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */
	  function apply(func, thisArg, args) {
	    switch (args.length) {
	      case 0: return func.call(thisArg);
	      case 1: return func.call(thisArg, args[0]);
	      case 2: return func.call(thisArg, args[0], args[1]);
	      case 3: return func.call(thisArg, args[0], args[1], args[2]);
	    }
	    return func.apply(thisArg, args);
	  }

	  /**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */
	  function arrayAggregator(array, setter, iteratee, accumulator) {
	    var index = -1,
	        length = array ? array.length : 0;

	    while (++index < length) {
	      var value = array[index];
	      setter(accumulator, value, iteratee(value), array);
	    }
	    return accumulator;
	  }

	  /**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEach(array, iteratee) {
	    var index = -1,
	        length = array ? array.length : 0;

	    while (++index < length) {
	      if (iteratee(array[index], index, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEachRight(array, iteratee) {
	    var length = array ? array.length : 0;

	    while (length--) {
	      if (iteratee(array[length], length, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */
	  function arrayEvery(array, predicate) {
	    var index = -1,
	        length = array ? array.length : 0;

	    while (++index < length) {
	      if (!predicate(array[index], index, array)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  /**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */
	  function arrayFilter(array, predicate) {
	    var index = -1,
	        length = array ? array.length : 0,
	        resIndex = 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (predicate(value, index, array)) {
	        result[resIndex++] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludes(array, value) {
	    var length = array ? array.length : 0;
	    return !!length && baseIndexOf(array, value, 0) > -1;
	  }

	  /**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludesWith(array, value, comparator) {
	    var index = -1,
	        length = array ? array.length : 0;

	    while (++index < length) {
	      if (comparator(value, array[index])) {
	        return true;
	      }
	    }
	    return false;
	  }

	  /**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */
	  function arrayMap(array, iteratee) {
	    var index = -1,
	        length = array ? array.length : 0,
	        result = Array(length);

	    while (++index < length) {
	      result[index] = iteratee(array[index], index, array);
	    }
	    return result;
	  }

	  /**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayPush(array, values) {
	    var index = -1,
	        length = values.length,
	        offset = array.length;

	    while (++index < length) {
	      array[offset + index] = values[index];
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduce(array, iteratee, accumulator, initAccum) {
	    var index = -1,
	        length = array ? array.length : 0;

	    if (initAccum && length) {
	      accumulator = array[++index];
	    }
	    while (++index < length) {
	      accumulator = iteratee(accumulator, array[index], index, array);
	    }
	    return accumulator;
	  }

	  /**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	    var length = array ? array.length : 0;
	    if (initAccum && length) {
	      accumulator = array[--length];
	    }
	    while (length--) {
	      accumulator = iteratee(accumulator, array[length], length, array);
	    }
	    return accumulator;
	  }

	  /**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
	  function arraySome(array, predicate) {
	    var index = -1,
	        length = array ? array.length : 0;

	    while (++index < length) {
	      if (predicate(array[index], index, array)) {
	        return true;
	      }
	    }
	    return false;
	  }

	  /**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
	  var asciiSize = baseProperty('length');

	  /**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function asciiToArray(string) {
	    return string.split('');
	  }

	  /**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
	  function asciiWords(string) {
	    return string.match(reAsciiWord) || [];
	  }

	  /**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */
	  function baseFindKey(collection, predicate, eachFunc) {
	    var result;
	    eachFunc(collection, function(value, key, collection) {
	      if (predicate(value, key, collection)) {
	        result = key;
	        return false;
	      }
	    });
	    return result;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 1 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return baseFindIndex(array, baseIsNaN, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOfWith(array, value, fromIndex, comparator) {
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (comparator(array[index], value)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */
	  function baseIsNaN(value) {
	    return value !== value;
	  }

	  /**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */
	  function baseMean(array, iteratee) {
	    var length = array ? array.length : 0;
	    return length ? (baseSum(array, iteratee) / length) : NAN;
	  }

	  /**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function baseProperty(key) {
	    return function(object) {
	      return object == null ? undefined : object[key];
	    };
	  }

	  /**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function basePropertyOf(object) {
	    return function(key) {
	      return object == null ? undefined : object[key];
	    };
	  }

	  /**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */
	  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	    eachFunc(collection, function(value, index, collection) {
	      accumulator = initAccum
	        ? (initAccum = false, value)
	        : iteratee(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }

	  /**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */
	  function baseSortBy(array, comparer) {
	    var length = array.length;

	    array.sort(comparer);
	    while (length--) {
	      array[length] = array[length].value;
	    }
	    return array;
	  }

	  /**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */
	  function baseSum(array, iteratee) {
	    var result,
	        index = -1,
	        length = array.length;

	    while (++index < length) {
	      var current = iteratee(array[index]);
	      if (current !== undefined) {
	        result = result === undefined ? current : (result + current);
	      }
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */
	  function baseTimes(n, iteratee) {
	    var index = -1,
	        result = Array(n);

	    while (++index < n) {
	      result[index] = iteratee(index);
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */
	  function baseToPairs(object, props) {
	    return arrayMap(props, function(key) {
	      return [key, object[key]];
	    });
	  }

	  /**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */
	  function baseUnary(func) {
	    return function(value) {
	      return func(value);
	    };
	  }

	  /**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */
	  function baseValues(object, props) {
	    return arrayMap(props, function(key) {
	      return object[key];
	    });
	  }

	  /**
	   * Checks if a cache value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */
	  function cacheHas(cache, key) {
	    return cache.has(key);
	  }

	  /**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */
	  function charsStartIndex(strSymbols, chrSymbols) {
	    var index = -1,
	        length = strSymbols.length;

	    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */
	  function charsEndIndex(strSymbols, chrSymbols) {
	    var index = strSymbols.length;

	    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }

	  /**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */
	  function countHolders(array, placeholder) {
	    var length = array.length,
	        result = 0;

	    while (length--) {
	      if (array[length] === placeholder) {
	        result++;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  var deburrLetter = basePropertyOf(deburredLetters);

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  var escapeHtmlChar = basePropertyOf(htmlEscapes);

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */
	  function getValue(object, key) {
	    return object == null ? undefined : object[key];
	  }

	  /**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */
	  function hasUnicode(string) {
	    return reHasUnicode.test(string);
	  }

	  /**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */
	  function hasUnicodeWord(string) {
	    return reHasUnicodeWord.test(string);
	  }

	  /**
	   * Checks if `value` is a host object in IE < 9.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	   */
	  function isHostObject(value) {
	    // Many host objects are `Object` objects that can coerce to strings
	    // despite having improperly defined `toString` methods.
	    var result = false;
	    if (value != null && typeof value.toString != 'function') {
	      try {
	        result = !!(value + '');
	      } catch (e) {}
	    }
	    return result;
	  }

	  /**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function iteratorToArray(iterator) {
	    var data,
	        result = [];

	    while (!(data = iterator.next()).done) {
	      result.push(data.value);
	    }
	    return result;
	  }

	  /**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */
	  function mapToArray(map) {
	    var index = -1,
	        result = Array(map.size);

	    map.forEach(function(value, key) {
	      result[++index] = [key, value];
	    });
	    return result;
	  }

	  /**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function(arg) {
	      return func(transform(arg));
	    };
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (value === placeholder || value === PLACEHOLDER) {
	        array[index] = PLACEHOLDER;
	        result[resIndex++] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */
	  function setToArray(set) {
	    var index = -1,
	        result = Array(set.size);

	    set.forEach(function(value) {
	      result[++index] = value;
	    });
	    return result;
	  }

	  /**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */
	  function setToPairs(set) {
	    var index = -1,
	        result = Array(set.size);

	    set.forEach(function(value) {
	      result[++index] = [value, value];
	    });
	    return result;
	  }

	  /**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */
	  function stringSize(string) {
	    return hasUnicode(string)
	      ? unicodeSize(string)
	      : asciiSize(string);
	  }

	  /**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function stringToArray(string) {
	    return hasUnicode(string)
	      ? unicodeToArray(string)
	      : asciiToArray(string);
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

	  /**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
	  function unicodeSize(string) {
	    var result = reUnicode.lastIndex = 0;
	    while (reUnicode.test(string)) {
	      result++;
	    }
	    return result;
	  }

	  /**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function unicodeToArray(string) {
	    return string.match(reUnicode) || [];
	  }

	  /**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
	  function unicodeWords(string) {
	    return string.match(reUnicodeWord) || [];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Use `context` to stub `Date#getTime` use in `_.now`.
	   * var stubbed = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': stubGetTime };
	   *   }
	   * });
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Built-in constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for built-in method references. */
	    var arrayProto = Array.prototype,
	        funcProto = Function.prototype,
	        objectProto = Object.prototype;

	    /** Used to detect overreaching core-js shims. */
	    var coreJsData = context['__core-js_shared__'];

	    /** Used to detect methods masquerading as native. */
	    var maskSrcKey = (function() {
	      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	      return uid ? ('Symbol(src)_1.' + uid) : '';
	    }());

	    /** Used to resolve the decompiled source of functions. */
	    var funcToString = funcProto.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /** Used to infer the `Object` constructor. */
	    var objectCtorString = funcToString.call(Object);

	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objectToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Built-in value references. */
	    var Buffer = moduleExports ? context.Buffer : undefined,
	        Symbol = context.Symbol,
	        Uint8Array = context.Uint8Array,
	        getPrototype = overArg(Object.getPrototypeOf, Object),
	        iteratorSymbol = Symbol ? Symbol.iterator : undefined,
	        objectCreate = Object.create,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        splice = arrayProto.splice,
	        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	    /** Mocked built-ins. */
	    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
	        ctxNow = Date && Date.now !== root.Date.now && Date.now,
	        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeFloor = Math.floor,
	        nativeGetSymbols = Object.getOwnPropertySymbols,
	        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	        nativeIsFinite = context.isFinite,
	        nativeJoin = arrayProto.join,
	        nativeKeys = overArg(Object.keys, Object),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random,
	        nativeReverse = arrayProto.reverse;

	    /* Built-in method references that are verified to be native. */
	    var DataView = getNative(context, 'DataView'),
	        Map = getNative(context, 'Map'),
	        Promise = getNative(context, 'Promise'),
	        Set = getNative(context, 'Set'),
	        WeakMap = getNative(context, 'WeakMap'),
	        nativeCreate = getNative(Object, 'create');

	    /* Used to set `toString` methods. */
	    var defineProperty = (function() {
	      var func = getNative(Object, 'defineProperty'),
	          name = getNative.name;

	      return (name && name.length > 2) ? func : undefined;
	    }());

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	    var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /** Used to detect maps, sets, and weakmaps. */
	    var dataViewCtorString = toSource(DataView),
	        mapCtorString = toSource(Map),
	        promiseCtorString = toSource(Promise),
	        setCtorString = toSource(Set),
	        weakMapCtorString = toSource(WeakMap);

	    /** Used to convert symbols to primitives and strings. */
	    var symbolProto = Symbol ? Symbol.prototype : undefined,
	        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	        symbolToString = symbolProto ? symbolProto.toString : undefined;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array of at least `200` elements
	     * and any iteratees accept only one argument. The heuristic for whether a
	     * section qualifies for shortcut fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */
	    function LodashWrapper(value, chainAll) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__chain__ = !!chainAll;
	      this.__index__ = 0;
	      this.__values__ = undefined;
	    }

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */
	        '_': lodash
	      }
	    };

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	    lodash.prototype.constructor = lodash;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = MAX_ARRAY_LENGTH;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = copyArray(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = copyArray(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = copyArray(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE ||
	          (arrLength == length && takeCount == length)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    // Ensure `LazyWrapper` is an instance of `baseLodash`.
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function Hash(entries) {
	      var index = -1,
	          length = entries ? entries.length : 0;

	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }

	    /**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */
	    function hashClear() {
	      this.__data__ = nativeCreate ? nativeCreate(null) : {};
	    }

	    /**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function hashDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function hashGet(key) {
	      var data = this.__data__;
	      if (nativeCreate) {
	        var result = data[key];
	        return result === HASH_UNDEFINED ? undefined : result;
	      }
	      return hasOwnProperty.call(data, key) ? data[key] : undefined;
	    }

	    /**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function hashHas(key) {
	      var data = this.__data__;
	      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	    }

	    /**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */
	    function hashSet(key, value) {
	      var data = this.__data__;
	      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	      return this;
	    }

	    // Add methods to `Hash`.
	    Hash.prototype.clear = hashClear;
	    Hash.prototype['delete'] = hashDelete;
	    Hash.prototype.get = hashGet;
	    Hash.prototype.has = hashHas;
	    Hash.prototype.set = hashSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function ListCache(entries) {
	      var index = -1,
	          length = entries ? entries.length : 0;

	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }

	    /**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */
	    function listCacheClear() {
	      this.__data__ = [];
	    }

	    /**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function listCacheDelete(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);

	      if (index < 0) {
	        return false;
	      }
	      var lastIndex = data.length - 1;
	      if (index == lastIndex) {
	        data.pop();
	      } else {
	        splice.call(data, index, 1);
	      }
	      return true;
	    }

	    /**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function listCacheGet(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);

	      return index < 0 ? undefined : data[index][1];
	    }

	    /**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function listCacheHas(key) {
	      return assocIndexOf(this.__data__, key) > -1;
	    }

	    /**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */
	    function listCacheSet(key, value) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);

	      if (index < 0) {
	        data.push([key, value]);
	      } else {
	        data[index][1] = value;
	      }
	      return this;
	    }

	    // Add methods to `ListCache`.
	    ListCache.prototype.clear = listCacheClear;
	    ListCache.prototype['delete'] = listCacheDelete;
	    ListCache.prototype.get = listCacheGet;
	    ListCache.prototype.has = listCacheHas;
	    ListCache.prototype.set = listCacheSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function MapCache(entries) {
	      var index = -1,
	          length = entries ? entries.length : 0;

	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }

	    /**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */
	    function mapCacheClear() {
	      this.__data__ = {
	        'hash': new Hash,
	        'map': new (Map || ListCache),
	        'string': new Hash
	      };
	    }

	    /**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function mapCacheDelete(key) {
	      return getMapData(this, key)['delete'](key);
	    }

	    /**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function mapCacheGet(key) {
	      return getMapData(this, key).get(key);
	    }

	    /**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapCacheHas(key) {
	      return getMapData(this, key).has(key);
	    }

	    /**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */
	    function mapCacheSet(key, value) {
	      getMapData(this, key).set(key, value);
	      return this;
	    }

	    // Add methods to `MapCache`.
	    MapCache.prototype.clear = mapCacheClear;
	    MapCache.prototype['delete'] = mapCacheDelete;
	    MapCache.prototype.get = mapCacheGet;
	    MapCache.prototype.has = mapCacheHas;
	    MapCache.prototype.set = mapCacheSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var index = -1,
	          length = values ? values.length : 0;

	      this.__data__ = new MapCache;
	      while (++index < length) {
	        this.add(values[index]);
	      }
	    }

	    /**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */
	    function setCacheAdd(value) {
	      this.__data__.set(value, HASH_UNDEFINED);
	      return this;
	    }

	    /**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */
	    function setCacheHas(value) {
	      return this.__data__.has(value);
	    }

	    // Add methods to `SetCache`.
	    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	    SetCache.prototype.has = setCacheHas;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function Stack(entries) {
	      this.__data__ = new ListCache(entries);
	    }

	    /**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */
	    function stackClear() {
	      this.__data__ = new ListCache;
	    }

	    /**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function stackDelete(key) {
	      return this.__data__['delete'](key);
	    }

	    /**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function stackGet(key) {
	      return this.__data__.get(key);
	    }

	    /**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function stackHas(key) {
	      return this.__data__.has(key);
	    }

	    /**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */
	    function stackSet(key, value) {
	      var cache = this.__data__;
	      if (cache instanceof ListCache) {
	        var pairs = cache.__data__;
	        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	          pairs.push([key, value]);
	          return this;
	        }
	        cache = this.__data__ = new MapCache(pairs);
	      }
	      cache.set(key, value);
	      return this;
	    }

	    // Add methods to `Stack`.
	    Stack.prototype.clear = stackClear;
	    Stack.prototype['delete'] = stackDelete;
	    Stack.prototype.get = stackGet;
	    Stack.prototype.has = stackHas;
	    Stack.prototype.set = stackSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */
	    function arrayLikeKeys(value, inherited) {
	      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	      // Safari 9 makes `arguments.length` enumerable in strict mode.
	      var result = (isArray(value) || isArguments(value))
	        ? baseTimes(value.length, String)
	        : [];

	      var length = result.length,
	          skipIndexes = !!length;

	      for (var key in value) {
	        if ((inherited || hasOwnProperty.call(value, key)) &&
	            !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assignIn` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */
	    function assignInDefaults(objValue, srcValue, key, object) {
	      if (objValue === undefined ||
	          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	        return srcValue;
	      }
	      return objValue;
	    }

	    /**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignMergeValue(object, key, value) {
	      if ((value !== undefined && !eq(object[key], value)) ||
	          (typeof key == 'number' && value === undefined && !(key in object))) {
	        object[key] = value;
	      }
	    }

	    /**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignValue(object, key, value) {
	      var objValue = object[key];
	      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	          (value === undefined && !(key in object))) {
	        object[key] = value;
	      }
	    }

	    /**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function assocIndexOf(array, key) {
	      var length = array.length;
	      while (length--) {
	        if (eq(array[length][0], key)) {
	          return length;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseAggregator(collection, setter, iteratee, accumulator) {
	      baseEach(collection, function(value, key, collection) {
	        setter(accumulator, value, iteratee(value), collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return object && copyObject(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths of elements to pick.
	     * @returns {Array} Returns the picked elements.
	     */
	    function baseAt(object, paths) {
	      var index = -1,
	          isNil = object == null,
	          length = paths.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = isNil ? undefined : get(object, paths[index]);
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */
	    function baseClamp(number, lower, upper) {
	      if (number === number) {
	        if (upper !== undefined) {
	          number = number <= upper ? number : upper;
	        }
	        if (lower !== undefined) {
	          number = number >= lower ? number : lower;
	        }
	      }
	      return number;
	    }

	    /**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {boolean} [isFull] Specify a clone including symbols.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object, stack) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return copyArray(value, result);
	        }
	      } else {
	        var tag = getTag(value),
	            isFunc = tag == funcTag || tag == genTag;

	        if (isBuffer(value)) {
	          return cloneBuffer(value, isDeep);
	        }
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          if (isHostObject(value)) {
	            return object ? value : {};
	          }
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return copySymbols(value, baseAssign(result, value));
	          }
	        } else {
	          if (!cloneableTags[tag]) {
	            return object ? value : {};
	          }
	          result = initCloneByTag(value, tag, baseClone, isDeep);
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stack || (stack = new Stack);
	      var stacked = stack.get(value);
	      if (stacked) {
	        return stacked;
	      }
	      stack.set(value, result);

	      if (!isArr) {
	        var props = isFull ? getAllKeys(value) : keys(value);
	      }
	      arrayEach(props || value, function(subValue, key) {
	        if (props) {
	          key = subValue;
	          subValue = value[key];
	        }
	        // Recursively populate clone (susceptible to call stack limits).
	        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseConforms(source) {
	      var props = keys(source);
	      return function(object) {
	        return baseConformsTo(object, source, props);
	      };
	    }

	    /**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */
	    function baseConformsTo(object, source, props) {
	      var length = props.length;
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (length--) {
	        var key = props[length],
	            predicate = source[key],
	            value = object[key];

	        if ((value === undefined && !(key in object)) || !predicate(value)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    function baseCreate(proto) {
	      return isObject(proto) ? objectCreate(proto) : {};
	    }

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          isCommon = true,
	          length = array.length,
	          result = [],
	          valuesLength = values.length;

	      if (!length) {
	        return result;
	      }
	      if (iteratee) {
	        values = arrayMap(values, baseUnary(iteratee));
	      }
	      if (comparator) {
	        includes = arrayIncludesWith;
	        isCommon = false;
	      }
	      else if (values.length >= LARGE_ARRAY_SIZE) {
	        includes = cacheHas;
	        isCommon = false;
	        values = new SetCache(values);
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === computed) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (!includes(values, computed, comparator)) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(array, iteratee, comparator) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index],
	            current = iteratee(value);

	        if (current != null && (computed === undefined
	              ? (current === current && !isSymbol(current))
	              : comparator(current, computed)
	            )) {
	          var computed = current,
	              result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = toInteger(start);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : toInteger(end);
	      if (end < 0) {
	        end += length;
	      }
	      end = start > end ? 0 : toLength(end);
	      while (start < end) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, depth, predicate, isStrict, result) {
	      var index = -1,
	          length = array.length;

	      predicate || (predicate = isFlattenable);
	      result || (result = []);

	      while (++index < length) {
	        var value = array[index];
	        if (depth > 0 && predicate(value)) {
	          if (depth > 1) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, depth - 1, predicate, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return object && baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return object && baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */
	    function baseFunctions(object, props) {
	      return arrayFilter(props, function(key) {
	        return isFunction(object[key]);
	      });
	    }

	    /**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path) {
	      path = isKey(path, object) ? [path] : castPath(path);

	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[toKey(path[index++])];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	      var result = keysFunc(object);
	      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	    }

	    /**
	     * The base implementation of `getTag`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    function baseGetTag(value) {
	      return objectToString.call(value);
	    }

	    /**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */
	    function baseGt(value, other) {
	      return value > other;
	    }

	    /**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHas(object, key) {
	      return object != null && hasOwnProperty.call(object, key);
	    }

	    /**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHasIn(object, key) {
	      return object != null && key in Object(object);
	    }

	    /**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */
	    function baseInRange(number, start, end) {
	      return number >= nativeMin(start, end) && number < nativeMax(start, end);
	    }

	    /**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */
	    function baseIntersection(arrays, iteratee, comparator) {
	      var includes = comparator ? arrayIncludesWith : arrayIncludes,
	          length = arrays[0].length,
	          othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(othLength),
	          maxLength = Infinity,
	          result = [];

	      while (othIndex--) {
	        var array = arrays[othIndex];
	        if (othIndex && iteratee) {
	          array = arrayMap(array, baseUnary(iteratee));
	        }
	        maxLength = nativeMin(array.length, maxLength);
	        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	          ? new SetCache(othIndex && array)
	          : undefined;
	      }
	      array = arrays[0];

	      var index = -1,
	          seen = caches[0];

	      outer:
	      while (++index < length && result.length < maxLength) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        value = (comparator || value !== 0) ? value : 0;
	        if (!(seen
	              ? cacheHas(seen, computed)
	              : includes(result, computed, comparator)
	            )) {
	          othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if (!(cache
	                  ? cacheHas(cache, computed)
	                  : includes(arrays[othIndex], computed, comparator))
	                ) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseInverter(object, setter, iteratee, accumulator) {
	      baseForOwn(object, function(value, key, object) {
	        setter(accumulator, iteratee(value), key, object);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function baseInvoke(object, path, args) {
	      if (!isKey(path, object)) {
	        path = castPath(path);
	        object = parent(object, path);
	        path = last(path);
	      }
	      var func = object == null ? object : object[toKey(path)];
	      return func == null ? undefined : apply(func, object, args);
	    }

	    /**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */
	    function baseIsArrayBuffer(value) {
	      return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
	    }

	    /**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */
	    function baseIsDate(value) {
	      return isObjectLike(value) && objectToString.call(value) == dateTag;
	    }

	    /**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {boolean} [bitmask] The bitmask of comparison flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - Unordered comparison
	     *     2 - Partial comparison
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, bitmask, stack) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = getTag(object);
	        objTag = objTag == argsTag ? objectTag : objTag;
	      }
	      if (!othIsArr) {
	        othTag = getTag(other);
	        othTag = othTag == argsTag ? objectTag : othTag;
	      }
	      var objIsObj = objTag == objectTag && !isHostObject(object),
	          othIsObj = othTag == objectTag && !isHostObject(other),
	          isSameTag = objTag == othTag;

	      if (isSameTag && !objIsObj) {
	        stack || (stack = new Stack);
	        return (objIsArr || isTypedArray(object))
	          ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	          : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	      }
	      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          var objUnwrapped = objIsWrapped ? object.value() : object,
	              othUnwrapped = othIsWrapped ? other.value() : other;

	          stack || (stack = new Stack);
	          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      stack || (stack = new Stack);
	      return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	    }

	    /**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */
	    function baseIsMap(value) {
	      return isObjectLike(value) && getTag(value) == mapTag;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, source, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var stack = new Stack;
	          if (customizer) {
	            var result = customizer(objValue, srcValue, key, object, source, stack);
	          }
	          if (!(result === undefined
	                ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	                : result
	              )) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */
	    function baseIsNative(value) {
	      if (!isObject(value) || isMasked(value)) {
	        return false;
	      }
	      var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	      return pattern.test(toSource(value));
	    }

	    /**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */
	    function baseIsRegExp(value) {
	      return isObject(value) && objectToString.call(value) == regexpTag;
	    }

	    /**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */
	    function baseIsSet(value) {
	      return isObjectLike(value) && getTag(value) == setTag;
	    }

	    /**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */
	    function baseIsTypedArray(value) {
	      return isObjectLike(value) &&
	        isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	    }

	    /**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */
	    function baseIteratee(value) {
	      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	      if (typeof value == 'function') {
	        return value;
	      }
	      if (value == null) {
	        return identity;
	      }
	      if (typeof value == 'object') {
	        return isArray(value)
	          ? baseMatchesProperty(value[0], value[1])
	          : baseMatches(value);
	      }
	      return property(value);
	    }

	    /**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeys(object) {
	      if (!isPrototype(object)) {
	        return nativeKeys(object);
	      }
	      var result = [];
	      for (var key in Object(object)) {
	        if (hasOwnProperty.call(object, key) && key != 'constructor') {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeysIn(object) {
	      if (!isObject(object)) {
	        return nativeKeysIn(object);
	      }
	      var isProto = isPrototype(object),
	          result = [];

	      for (var key in object) {
	        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */
	    function baseLt(value, other) {
	      return value < other;
	    }

	    /**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	      }
	      return function(object) {
	        return object === source || baseIsMatch(object, source, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      if (isKey(path) && isStrictComparable(srcValue)) {
	        return matchesStrictComparable(toKey(path), srcValue);
	      }
	      return function(object) {
	        var objValue = get(object, path);
	        return (objValue === undefined && objValue === srcValue)
	          ? hasIn(object, path)
	          : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMerge(object, source, srcIndex, customizer, stack) {
	      if (object === source) {
	        return;
	      }
	      if (!(isArray(source) || isTypedArray(source))) {
	        var props = baseKeysIn(source);
	      }
	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObject(srcValue)) {
	          stack || (stack = new Stack);
	          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	        }
	        else {
	          var newValue = customizer
	            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	            : undefined;

	          if (newValue === undefined) {
	            newValue = srcValue;
	          }
	          assignMergeValue(object, key, newValue);
	        }
	      });
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	      var objValue = object[key],
	          srcValue = source[key],
	          stacked = stack.get(srcValue);

	      if (stacked) {
	        assignMergeValue(object, key, stacked);
	        return;
	      }
	      var newValue = customizer
	        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	        : undefined;

	      var isCommon = newValue === undefined;

	      if (isCommon) {
	        newValue = srcValue;
	        if (isArray(srcValue) || isTypedArray(srcValue)) {
	          if (isArray(objValue)) {
	            newValue = objValue;
	          }
	          else if (isArrayLikeObject(objValue)) {
	            newValue = copyArray(objValue);
	          }
	          else {
	            isCommon = false;
	            newValue = baseClone(srcValue, true);
	          }
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          if (isArguments(objValue)) {
	            newValue = toPlainObject(objValue);
	          }
	          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	            isCommon = false;
	            newValue = baseClone(srcValue, true);
	          }
	          else {
	            newValue = objValue;
	          }
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, newValue);
	        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	        stack['delete'](srcValue);
	      }
	      assignMergeValue(object, key, newValue);
	    }

	    /**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */
	    function baseNth(array, n) {
	      var length = array.length;
	      if (!length) {
	        return;
	      }
	      n += n < 0 ? length : 0;
	      return isIndex(n, length) ? array[n] : undefined;
	    }

	    /**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseOrderBy(collection, iteratees, orders) {
	      var index = -1;
	      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

	      var result = baseMap(collection, function(value, key, collection) {
	        var criteria = arrayMap(iteratees, function(iteratee) {
	          return iteratee(value);
	        });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function basePick(object, props) {
	      object = Object(object);
	      return basePickBy(object, props, function(value, key) {
	        return key in object;
	      });
	    }

	    /**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick from.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */
	    function basePickBy(object, props, predicate) {
	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (predicate(value, key)) {
	          result[key] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */
	    function basePropertyDeep(path) {
	      return function(object) {
	        return baseGet(object, path);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAll(array, values, iteratee, comparator) {
	      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	          index = -1,
	          length = values.length,
	          seen = array;

	      if (array === values) {
	        values = copyArray(values);
	      }
	      if (iteratee) {
	        seen = arrayMap(array, baseUnary(iteratee));
	      }
	      while (++index < length) {
	        var fromIndex = 0,
	            value = values[index],
	            computed = iteratee ? iteratee(value) : value;

	        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	          if (seen !== array) {
	            splice.call(seen, fromIndex, 1);
	          }
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0,
	          lastIndex = length - 1;

	      while (length--) {
	        var index = indexes[length];
	        if (length == lastIndex || index !== previous) {
	          var previous = index;
	          if (isIndex(index)) {
	            splice.call(array, index, 1);
	          }
	          else if (!isKey(index, array)) {
	            var path = castPath(index),
	                object = parent(array, path);

	            if (object != null) {
	              delete object[toKey(last(path))];
	            }
	          }
	          else {
	            delete array[toKey(index)];
	          }
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(lower, upper) {
	      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	    }

	    /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */
	    function baseRange(start, end, step, fromRight) {
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (length--) {
	        result[fromRight ? length : ++index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */
	    function baseRepeat(string, n) {
	      var result = '';
	      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        if (n) {
	          string += string;
	        }
	      } while (n);

	      return result;
	    }

	    /**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */
	    function baseRest(func, start) {
	      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            array = Array(length);

	        while (++index < length) {
	          array[index] = args[start + index];
	        }
	        index = -1;
	        var otherArgs = Array(start + 1);
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = array;
	        return apply(func, this, otherArgs);
	      };
	    }

	    /**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseSet(object, path, value, customizer) {
	      if (!isObject(object)) {
	        return object;
	      }
	      path = isKey(path, object) ? [path] : castPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = toKey(path[index]),
	            newValue = value;

	        if (index != lastIndex) {
	          var objValue = nested[key];
	          newValue = customizer ? customizer(objValue, key, nested) : undefined;
	          if (newValue === undefined) {
	            newValue = isObject(objValue)
	              ? objValue
	              : (isIndex(path[index + 1]) ? [] : {});
	          }
	        }
	        assignValue(nested, key, newValue);
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = end > length ? length : end;
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if (computed !== null && !isSymbol(computed) &&
	              (retHighest ? (computed <= value) : (computed < value))) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return baseSortedIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsSymbol = isSymbol(value),
	          valIsUndefined = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            othIsDefined = computed !== undefined,
	            othIsNull = computed === null,
	            othIsReflexive = computed === computed,
	            othIsSymbol = isSymbol(computed);

	        if (valIsNaN) {
	          var setLow = retHighest || othIsReflexive;
	        } else if (valIsUndefined) {
	          setLow = othIsReflexive && (retHighest || othIsDefined);
	        } else if (valIsNull) {
	          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
	        } else if (valIsSymbol) {
	          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
	        } else if (othIsNull || othIsSymbol) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseSortedUniq(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          resIndex = 0,
	          result = [];

	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        if (!index || !eq(computed, seen)) {
	          var seen = computed;
	          result[resIndex++] = value === 0 ? 0 : value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */
	    function baseToNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      return +value;
	    }

	    /**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */
	    function baseToString(value) {
	      // Exit early for strings to avoid a performance hit in some environments.
	      if (typeof value == 'string') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return symbolToString ? symbolToString.call(value) : '';
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }

	    /**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseUniq(array, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          length = array.length,
	          isCommon = true,
	          result = [],
	          seen = result;

	      if (comparator) {
	        isCommon = false;
	        includes = arrayIncludesWith;
	      }
	      else if (length >= LARGE_ARRAY_SIZE) {
	        var set = iteratee ? null : createSet(array);
	        if (set) {
	          return setToArray(set);
	        }
	        isCommon = false;
	        includes = cacheHas;
	        seen = new SetCache;
	      }
	      else {
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (!includes(seen, computed, comparator)) {
	          if (seen !== result) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */
	    function baseUnset(object, path) {
	      path = isKey(path, object) ? [path] : castPath(path);
	      object = parent(object, path);

	      var key = toKey(last(path));
	      return !(object != null && hasOwnProperty.call(object, key)) || delete object[key];
	    }

	    /**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseUpdate(object, path, updater, customizer) {
	      return baseSet(object, path, updater(baseGet(object, path)), customizer);
	    }

	    /**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) &&
	        predicate(array[index], index, array)) {}

	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      return arrayReduce(actions, function(result, action) {
	        return action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }, result);
	    }

	    /**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */
	    function baseXor(arrays, iteratee, comparator) {
	      var index = -1,
	          length = arrays.length;

	      while (++index < length) {
	        var result = result
	          ? arrayPush(
	              baseDifference(result, arrays[index], iteratee, comparator),
	              baseDifference(arrays[index], result, iteratee, comparator)
	            )
	          : arrays[index];
	      }
	      return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
	    }

	    /**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */
	    function baseZipObject(props, values, assignFunc) {
	      var index = -1,
	          length = props.length,
	          valsLength = values.length,
	          result = {};

	      while (++index < length) {
	        var value = index < valsLength ? values[index] : undefined;
	        assignFunc(result, props[index], value);
	      }
	      return result;
	    }

	    /**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */
	    function castArrayLikeObject(value) {
	      return isArrayLikeObject(value) ? value : [];
	    }

	    /**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */
	    function castFunction(value) {
	      return typeof value == 'function' ? value : identity;
	    }

	    /**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast property path array.
	     */
	    function castPath(value) {
	      return isArray(value) ? value : stringToPath(value);
	    }

	    /**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */
	    function castSlice(array, start, end) {
	      var length = array.length;
	      end = end === undefined ? length : end;
	      return (!start && end >= length) ? array : baseSlice(array, start, end);
	    }

	    /**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */
	    var clearTimeout = ctxClearTimeout || function(id) {
	      return root.clearTimeout(id);
	    };

	    /**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */
	    function cloneBuffer(buffer, isDeep) {
	      if (isDeep) {
	        return buffer.slice();
	      }
	      var result = new buffer.constructor(buffer.length);
	      buffer.copy(result);
	      return result;
	    }

	    /**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function cloneArrayBuffer(arrayBuffer) {
	      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	      return result;
	    }

	    /**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */
	    function cloneDataView(dataView, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	    }

	    /**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */
	    function cloneMap(map, isDeep, cloneFunc) {
	      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	      return arrayReduce(array, addMapEntry, new map.constructor);
	    }

	    /**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */
	    function cloneRegExp(regexp) {
	      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	      result.lastIndex = regexp.lastIndex;
	      return result;
	    }

	    /**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */
	    function cloneSet(set, isDeep, cloneFunc) {
	      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	      return arrayReduce(array, addSetEntry, new set.constructor);
	    }

	    /**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */
	    function cloneSymbol(symbol) {
	      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	    }

	    /**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */
	    function cloneTypedArray(typedArray, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	    }

	    /**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */
	    function compareAscending(value, other) {
	      if (value !== other) {
	        var valIsDefined = value !== undefined,
	            valIsNull = value === null,
	            valIsReflexive = value === value,
	            valIsSymbol = isSymbol(value);

	        var othIsDefined = other !== undefined,
	            othIsNull = other === null,
	            othIsReflexive = other === other,
	            othIsSymbol = isSymbol(other);

	        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	            (valIsNull && othIsDefined && othIsReflexive) ||
	            (!valIsDefined && othIsReflexive) ||
	            !valIsReflexive) {
	          return 1;
	        }
	        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	            (othIsNull && valIsDefined && valIsReflexive) ||
	            (!othIsDefined && valIsReflexive) ||
	            !othIsReflexive) {
	          return -1;
	        }
	      }
	      return 0;
	    }

	    /**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */
	    function compareMultiple(object, other, orders) {
	      var index = -1,
	          objCriteria = object.criteria,
	          othCriteria = other.criteria,
	          length = objCriteria.length,
	          ordersLength = orders.length;

	      while (++index < length) {
	        var result = compareAscending(objCriteria[index], othCriteria[index]);
	        if (result) {
	          if (index >= ordersLength) {
	            return result;
	          }
	          var order = orders[index];
	          return result * (order == 'desc' ? -1 : 1);
	        }
	      }
	      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	      // that causes it, under certain circumstances, to provide the same value for
	      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	      // for more details.
	      //
	      // This also ensures a stable sort in V8 and other engines.
	      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	      return object.index - other.index;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersLength = holders.length,
	          leftIndex = -1,
	          leftLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(leftLength + rangeLength),
	          isUncurried = !isCurried;

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[holders[argsIndex]] = args[argsIndex];
	        }
	      }
	      while (rangeLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersIndex = -1,
	          holdersLength = holders.length,
	          rightIndex = -1,
	          rightLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(rangeLength + rightLength),
	          isUncurried = !isCurried;

	      while (++argsIndex < rangeLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[offset + holders[holdersIndex]] = args[argsIndex++];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */
	    function copyObject(source, props, object, customizer) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];

	        var newValue = customizer
	          ? customizer(object[key], source[key], key, object, source)
	          : undefined;

	        assignValue(object, key, newValue === undefined ? source[key] : newValue);
	      }
	      return object;
	    }

	    /**
	     * Copies own symbol properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
	    function copySymbols(source, object) {
	      return copyObject(source, getSymbols(source), object);
	    }

	    /**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee) {
	        var func = isArray(collection) ? arrayAggregator : baseAggregator,
	            accumulator = initializer ? initializer() : {};

	        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
	      };
	    }

	    /**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return baseRest(function(object, sources) {
	        var index = -1,
	            length = sources.length,
	            customizer = length > 1 ? sources[length - 1] : undefined,
	            guard = length > 2 ? sources[2] : undefined;

	        customizer = (assigner.length > 3 && typeof customizer == 'function')
	          ? (length--, customizer)
	          : undefined;

	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        object = Object(object);
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, index, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        if (collection == null) {
	          return collection;
	        }
	        if (!isArrayLike(collection)) {
	          return eachFunc(collection, iteratee);
	        }
	        var length = collection.length,
	            index = fromRight ? length : -1,
	            iterable = Object(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var index = -1,
	            iterable = Object(object),
	            props = keysFunc(object),
	            length = props.length;

	        while (length--) {
	          var key = props[fromRight ? length : ++index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createBind(func, bitmask, thisArg) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtor(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */
	    function createCaseFirst(methodName) {
	      return function(string) {
	        string = toString(string);

	        var strSymbols = hasUnicode(string)
	          ? stringToArray(string)
	          : undefined;

	        var chr = strSymbols
	          ? strSymbols[0]
	          : string.charAt(0);

	        var trailing = strSymbols
	          ? castSlice(strSymbols, 1).join('')
	          : string.slice(1);

	        return chr[methodName]() + trailing;
	      };
	    }

	    /**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtor(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors. See
	        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCurry(func, bitmask, arity) {
	      var Ctor = createCtor(func);

	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length,
	            placeholder = getHolder(wrapper);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	          ? []
	          : replaceHolders(args, placeholder);

	        length -= holders.length;
	        if (length < arity) {
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, undefined,
	            args, holders, undefined, undefined, arity - length);
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return apply(fn, this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(findIndexFunc) {
	      return function(collection, predicate, fromIndex) {
	        var iterable = Object(collection);
	        if (!isArrayLike(collection)) {
	          var iteratee = getIteratee(predicate, 3);
	          collection = keys(collection);
	          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	        }
	        var index = findIndexFunc(collection, predicate, fromIndex);
	        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return baseRest(function(funcs) {
	        funcs = baseFlatten(funcs, 1);

	        var length = funcs.length,
	            index = length,
	            prereq = LodashWrapper.prototype.thru;

	        if (fromRight) {
	          funcs.reverse();
	        }
	        while (index--) {
	          var func = funcs[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	            var wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? index : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) &&
	                data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) &&
	                !data[4].length && data[9] == 1
	              ) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func))
	              ? wrapper[funcName]()
	              : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 &&
	              isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      });
	    }

	    /**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
	          isFlip = bitmask & FLIP_FLAG,
	          Ctor = isBindKey ? undefined : createCtor(func);

	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length;

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (isCurried) {
	          var placeholder = getHolder(wrapper),
	              holdersCount = countHolders(args, placeholder);
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders, isCurried);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	        }
	        length -= holdersCount;
	        if (isCurried && length < arity) {
	          var newHolders = replaceHolders(args, placeholder);
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	            args, newHolders, argPos, ary, arity - length
	          );
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        length = args.length;
	        if (argPos) {
	          args = reorder(args, argPos);
	        } else if (isFlip && length > 1) {
	          args.reverse();
	        }
	        if (isAry && ary < length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtor(fn);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */
	    function createInverter(setter, toIteratee) {
	      return function(object, iteratee) {
	        return baseInverter(object, setter, toIteratee(iteratee), {});
	      };
	    }

	    /**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */
	    function createMathOperation(operator, defaultValue) {
	      return function(value, other) {
	        var result;
	        if (value === undefined && other === undefined) {
	          return defaultValue;
	        }
	        if (value !== undefined) {
	          result = value;
	        }
	        if (other !== undefined) {
	          if (result === undefined) {
	            return other;
	          }
	          if (typeof value == 'string' || typeof other == 'string') {
	            value = baseToString(value);
	            other = baseToString(other);
	          } else {
	            value = baseToNumber(value);
	            other = baseToNumber(other);
	          }
	          result = operator(value, other);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */
	    function createOver(arrayFunc) {
	      return baseRest(function(iteratees) {
	        iteratees = (iteratees.length == 1 && isArray(iteratees[0]))
	          ? arrayMap(iteratees[0], baseUnary(getIteratee()))
	          : arrayMap(baseFlatten(iteratees, 1), baseUnary(getIteratee()));

	        return baseRest(function(args) {
	          var thisArg = this;
	          return arrayFunc(iteratees, function(iteratee) {
	            return apply(iteratee, thisArg, args);
	          });
	        });
	      });
	    }

	    /**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */
	    function createPadding(length, chars) {
	      chars = chars === undefined ? ' ' : baseToString(chars);

	      var charsLength = chars.length;
	      if (charsLength < 2) {
	        return charsLength ? baseRepeat(chars, length) : chars;
	      }
	      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	      return hasUnicode(chars)
	        ? castSlice(stringToArray(result), 0, length).join('')
	        : result.slice(0, length);
	    }

	    /**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createPartial(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtor(func);

	      function wrapper() {
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength),
	            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        return apply(fn, isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */
	    function createRange(fromRight) {
	      return function(start, end, step) {
	        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	          end = step = undefined;
	        }
	        // Ensure the sign of `-0` is preserved.
	        start = toFinite(start);
	        if (end === undefined) {
	          end = start;
	          start = 0;
	        } else {
	          end = toFinite(end);
	        }
	        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	        return baseRange(start, end, step, fromRight);
	      };
	    }

	    /**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */
	    function createRelationalOperation(operator) {
	      return function(value, other) {
	        if (!(typeof value == 'string' && typeof other == 'string')) {
	          value = toNumber(value);
	          other = toNumber(other);
	        }
	        return operator(value, other);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	      var isCurry = bitmask & CURRY_FLAG,
	          newHolders = isCurry ? holders : undefined,
	          newHoldersRight = isCurry ? undefined : holders,
	          newPartials = isCurry ? partials : undefined,
	          newPartialsRight = isCurry ? undefined : partials;

	      bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	      bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	      if (!(bitmask & CURRY_BOUND_FLAG)) {
	        bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	      }
	      var newData = [
	        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	        newHoldersRight, argPos, ary, arity
	      ];

	      var result = wrapFunc.apply(undefined, newData);
	      if (isLaziable(func)) {
	        setData(result, newData);
	      }
	      result.placeholder = placeholder;
	      return setWrapToString(result, func, bitmask);
	    }

	    /**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        number = toNumber(number);
	        precision = nativeMin(toInteger(precision), 292);
	        if (precision) {
	          // Shift with exponential notation to avoid floating-point issues.
	          // See [MDN](https://mdn.io/round#Examples) for more details.
	          var pair = (toString(number) + 'e').split('e'),
	              value = func(pair[0] + 'e' + (+pair[1] + precision));

	          pair = (toString(value) + 'e').split('e');
	          return +(pair[0] + 'e' + (+pair[1] - precision));
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */
	    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	      return new Set(values);
	    };

	    /**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */
	    function createToPairs(keysFunc) {
	      return function(object) {
	        var tag = getTag(object);
	        if (tag == mapTag) {
	          return mapToArray(object);
	        }
	        if (tag == setTag) {
	          return setToPairs(object);
	        }
	        return baseToPairs(object, keysFunc(object));
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     *   512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	      arity = arity === undefined ? arity : toInteger(arity);
	      length -= holders ? holders.length : 0;

	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func);

	      var newData = [
	        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	        argPos, ary, arity
	      ];

	      if (data) {
	        mergeData(newData, data);
	      }
	      func = newData[0];
	      bitmask = newData[1];
	      thisArg = newData[2];
	      partials = newData[3];
	      holders = newData[4];
	      arity = newData[9] = newData[9] == null
	        ? (isBindKey ? 0 : func.length)
	        : nativeMax(newData[9] - length, 0);

	      if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
	        bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
	      }
	      if (!bitmask || bitmask == BIND_FLAG) {
	        var result = createBind(func, bitmask, thisArg);
	      } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
	        result = createCurry(func, bitmask, arity);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
	        result = createPartial(func, bitmask, thisArg, partials);
	      } else {
	        result = createHybrid.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setWrapToString(setter(result, newData), func, bitmask);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(array);
	      if (stacked && stack.get(other)) {
	        return stacked == other;
	      }
	      var index = -1,
	          result = true,
	          seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	      stack.set(array, other);
	      stack.set(other, array);

	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index];

	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, arrValue, index, other, array, stack)
	            : customizer(arrValue, othValue, index, array, other, stack);
	        }
	        if (compared !== undefined) {
	          if (compared) {
	            continue;
	          }
	          result = false;
	          break;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (seen) {
	          if (!arraySome(other, function(othValue, othIndex) {
	                if (!seen.has(othIndex) &&
	                    (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	                  return seen.add(othIndex);
	                }
	              })) {
	            result = false;
	            break;
	          }
	        } else if (!(
	              arrValue === othValue ||
	                equalFunc(arrValue, othValue, customizer, bitmask, stack)
	            )) {
	          result = false;
	          break;
	        }
	      }
	      stack['delete'](array);
	      stack['delete'](other);
	      return result;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	      switch (tag) {
	        case dataViewTag:
	          if ((object.byteLength != other.byteLength) ||
	              (object.byteOffset != other.byteOffset)) {
	            return false;
	          }
	          object = object.buffer;
	          other = other.buffer;

	        case arrayBufferTag:
	          if ((object.byteLength != other.byteLength) ||
	              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	            return false;
	          }
	          return true;

	        case boolTag:
	        case dateTag:
	        case numberTag:
	          // Coerce booleans to `1` or `0` and dates to milliseconds.
	          // Invalid dates are coerced to `NaN`.
	          return eq(+object, +other);

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings, primitives and objects,
	          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	          // for more details.
	          return object == (other + '');

	        case mapTag:
	          var convert = mapToArray;

	        case setTag:
	          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	          convert || (convert = setToArray);

	          if (object.size != other.size && !isPartial) {
	            return false;
	          }
	          // Assume cyclic values are equal.
	          var stacked = stack.get(object);
	          if (stacked) {
	            return stacked == other;
	          }
	          bitmask |= UNORDERED_COMPARE_FLAG;

	          // Recursively compare objects (susceptible to call stack limits).
	          stack.set(object, other);
	          var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	          stack['delete'](object);
	          return result;

	        case symbolTag:
	          if (symbolValueOf) {
	            return symbolValueOf.call(object) == symbolValueOf.call(other);
	          }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	          objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isPartial) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked && stack.get(other)) {
	        return stacked == other;
	      }
	      var result = true;
	      stack.set(object, other);
	      stack.set(other, object);

	      var skipCtor = isPartial;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key];

	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, objValue, key, other, object, stack)
	            : customizer(objValue, othValue, key, object, other, stack);
	        }
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(compared === undefined
	              ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	              : compared
	            )) {
	          result = false;
	          break;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (result && !skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          result = false;
	        }
	      }
	      stack['delete'](object);
	      stack['delete'](other);
	      return result;
	    }

	    /**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeys(object) {
	      return baseGetAllKeys(object, keys, getSymbols);
	    }

	    /**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeysIn(object) {
	      return baseGetAllKeys(object, keysIn, getSymbolsIn);
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = (func.name + ''),
	          array = realNames[result],
	          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */
	    function getHolder(func) {
	      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
	      return object.placeholder;
	    }

	    /**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getIteratee() {
	      var result = lodash.iteratee || iteratee;
	      result = result === iteratee ? baseIteratee : result;
	      return arguments.length ? result(arguments[0], arguments[1]) : result;
	    }

	    /**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */
	    function getMapData(map, key) {
	      var data = map.__data__;
	      return isKeyable(key)
	        ? data[typeof key == 'string' ? 'string' : 'hash']
	        : data.map;
	    }

	    /**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = keys(object),
	          length = result.length;

	      while (length--) {
	        var key = result[length],
	            value = object[key];

	        result[length] = [key, value, isStrictComparable(value)];
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = getValue(object, key);
	      return baseIsNative(value) ? value : undefined;
	    }

	    /**
	     * Creates an array of the own enumerable symbol properties of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	    /**
	     * Creates an array of the own and inherited enumerable symbol properties
	     * of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	      var result = [];
	      while (object) {
	        arrayPush(result, getSymbols(object));
	        object = getPrototype(object);
	      }
	      return result;
	    };

	    /**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    var getTag = baseGetTag;

	    // Fallback for data views, maps, sets, and weak maps in IE 11,
	    // for data views in Edge < 14, and promises in Node.js.
	    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	        (Map && getTag(new Map) != mapTag) ||
	        (Promise && getTag(Promise.resolve()) != promiseTag) ||
	        (Set && getTag(new Set) != setTag) ||
	        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	      getTag = function(value) {
	        var result = objectToString.call(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : undefined;

	        if (ctorString) {
	          switch (ctorString) {
	            case dataViewCtorString: return dataViewTag;
	            case mapCtorString: return mapTag;
	            case promiseCtorString: return promiseTag;
	            case setCtorString: return setTag;
	            case weakMapCtorString: return weakMapTag;
	          }
	        }
	        return result;
	      };
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */
	    function getWrapDetails(source) {
	      var match = source.match(reWrapDetails);
	      return match ? match[1].split(reSplitDetails) : [];
	    }

	    /**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */
	    function hasPath(object, path, hasFunc) {
	      path = isKey(path, object) ? [path] : castPath(path);

	      var result,
	          index = -1,
	          length = path.length;

	      while (++index < length) {
	        var key = toKey(path[index]);
	        if (!(result = object != null && hasFunc(object, key))) {
	          break;
	        }
	        object = object[key];
	      }
	      if (result) {
	        return result;
	      }
	      var length = object ? object.length : 0;
	      return !!length && isLength(length) && isIndex(key, length) &&
	        (isArray(object) || isArguments(object));
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = array.constructor(length);

	      // Add properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      return (typeof object.constructor == 'function' && !isPrototype(object))
	        ? baseCreate(getPrototype(object))
	        : {};
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, cloneFunc, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return cloneArrayBuffer(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case dataViewTag:
	          return cloneDataView(object, isDeep);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          return cloneTypedArray(object, isDeep);

	        case mapTag:
	          return cloneMap(object, isDeep, cloneFunc);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          return cloneRegExp(object);

	        case setTag:
	          return cloneSet(object, isDeep, cloneFunc);

	        case symbolTag:
	          return cloneSymbol(object);
	      }
	    }

	    /**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */
	    function insertWrapDetails(source, details) {
	      var length = details.length,
	          lastIndex = length - 1;

	      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	      details = details.join(length > 2 ? ', ' : ' ');
	      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	    }

	    /**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */
	    function isFlattenable(value) {
	      return isArray(value) || isArguments(value) ||
	        !!(spreadableSymbol && value && value[spreadableSymbol]);
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return !!length &&
	        (typeof value == 'number' || reIsUint.test(value)) &&
	        (value > -1 && value % 1 == 0 && value < length);
	    }

	    /**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	            ? (isArrayLike(object) && isIndex(index, object.length))
	            : (type == 'string' && index in object)
	          ) {
	        return eq(object[index], value);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      if (isArray(value)) {
	        return false;
	      }
	      var type = typeof value;
	      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	          value == null || isSymbol(value)) {
	        return true;
	      }
	      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	        (object != null && value in Object(object));
	    }

	    /**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */
	    function isKeyable(value) {
	      var type = typeof value;
	      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	        ? (value !== '__proto__')
	        : (value === null);
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func),
	          other = lodash[funcName];

	      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */
	    function isMasked(func) {
	      return !!maskSrcKey && (maskSrcKey in func);
	    }

	    /**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */
	    var isMaskable = coreJsData ? isFunction : stubFalse;

	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	      return value === proto;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function matchesStrictComparable(key, srcValue) {
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        return object[key] === srcValue &&
	          (srcValue !== undefined || (key in Object(object)));
	      };
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);

	      var isCombo =
	        ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
	        ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
	        ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = value;
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */
	    function mergeDefaults(objValue, srcValue, key, object, source, stack) {
	      if (isObject(objValue) && isObject(srcValue)) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, objValue);
	        baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
	        stack['delete'](srcValue);
	      }
	      return objValue;
	    }

	    /**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function nativeKeysIn(object) {
	      var result = [];
	      if (object != null) {
	        for (var key in Object(object)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */
	    function parent(object, path) {
	      return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = copyArray(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
	    var setTimeout = ctxSetTimeout || function(func, wait) {
	      return root.setTimeout(func, wait);
	    };

	    /**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */
	    var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
	      var source = (reference + '');
	      return defineProperty(wrapper, 'toString', {
	        'configurable': true,
	        'enumerable': false,
	        'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
	      });
	    };

	    /**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */
	    var stringToPath = memoize(function(string) {
	      string = toString(string);

	      var result = [];
	      if (reLeadingDot.test(string)) {
	        result.push('');
	      }
	      string.replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    });

	    /**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */
	    function toKey(value) {
	      if (typeof value == 'string' || isSymbol(value)) {
	        return value;
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }

	    /**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to process.
	     * @returns {string} Returns the source code.
	     */
	    function toSource(func) {
	      if (func != null) {
	        try {
	          return funcToString.call(func);
	        } catch (e) {}
	        try {
	          return (func + '');
	        } catch (e) {}
	      }
	      return '';
	    }

	    /**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */
	    function updateWrapDetails(details, bitmask) {
	      arrayEach(wrapFlags, function(pair) {
	        var value = '_.' + pair[0];
	        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	          details.push(value);
	        }
	      });
	      return details.sort();
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      if (wrapper instanceof LazyWrapper) {
	        return wrapper.clone();
	      }
	      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	      result.__actions__ = copyArray(wrapper.__actions__);
	      result.__index__  = wrapper.__index__;
	      result.__values__ = wrapper.__values__;
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
	        size = 1;
	      } else {
	        size = nativeMax(toInteger(size), 0);
	      }
	      var length = array ? array.length : 0;
	      if (!length || size < 1) {
	        return [];
	      }
	      var index = 0,
	          resIndex = 0,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[resIndex++] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = 0,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[resIndex++] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    function concat() {
	      var length = arguments.length,
	          args = Array(length ? length - 1 : 0),
	          array = arguments[0],
	          index = length;

	      while (index--) {
	        args[index - 1] = arguments[index];
	      }
	      return length
	        ? arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1))
	        : [];
	    }

	    /**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order of result values is determined by the
	     * order they occur in the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */
	    var difference = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	        : [];
	    });

	    /**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. Result values are chosen from the first array.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var differenceBy = baseRest(function(array, values) {
	      var iteratee = last(values);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
	        : [];
	    });

	    /**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. Result values
	     * are chosen from the first array. The comparator is invoked with two arguments:
	     * (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */
	    var differenceWith = baseRest(function(array, values) {
	      var comparator = last(values);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    function findIndex(array, predicate, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index);
	    }

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    function findLastIndex(array, predicate, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length - 1;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = fromIndex < 0
	          ? nativeMax(length + index, 0)
	          : nativeMin(index, length - 1);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
	    }

	    /**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */
	    function flatten(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, 1) : [];
	    }

	    /**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, INFINITY) : [];
	    }

	    /**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */
	    function flattenDepth(array, depth) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(array, depth);
	    }

	    /**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function fromPairs(pairs) {
	      var index = -1,
	          length = pairs ? pairs.length : 0,
	          result = {};

	      while (++index < length) {
	        var pair = pairs[index];
	        result[pair[0]] = pair[1];
	      }
	      return result;
	    }

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */
	    function head(array) {
	      return (array && array.length) ? array[0] : undefined;
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseIndexOf(array, value, index);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      var length = array ? array.length : 0;
	      return length ? baseSlice(array, 0, -1) : [];
	    }

	    /**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order of result values is determined by the
	     * order they occur in the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */
	    var intersection = baseRest(function(arrays) {
	      var mapped = arrayMap(arrays, castArrayLikeObject);
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped)
	        : [];
	    });

	    /**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. Result values are chosen from the first array.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */
	    var intersectionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);

	      if (iteratee === last(mapped)) {
	        iteratee = undefined;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, getIteratee(iteratee, 2))
	        : [];
	    });

	    /**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. Result values are chosen
	     * from the first array. The comparator is invoked with two arguments:
	     * (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */
	    var intersectionWith = baseRest(function(arrays) {
	      var comparator = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);

	      if (comparator === last(mapped)) {
	        comparator = undefined;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, undefined, comparator)
	        : [];
	    });

	    /**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */
	    function join(array, separator) {
	      return array ? nativeJoin.call(array, separator) : '';
	    }

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = (
	          index < 0
	            ? nativeMax(length + index, 0)
	            : nativeMin(index, length - 1)
	        ) + 1;
	      }
	      if (value !== value) {
	        return baseFindIndex(array, baseIsNaN, index - 1, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */
	    function nth(array, n) {
	      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
	    }

	    /**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */
	    var pull = baseRest(pullAll);

	    /**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */
	    function pullAll(array, values) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values)
	        : array;
	    }

	    /**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */
	    function pullAllBy(array, values, iteratee) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, getIteratee(iteratee, 2))
	        : array;
	    }

	    /**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */
	    function pullAllWith(array, values, comparator) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, undefined, comparator)
	        : array;
	    }

	    /**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */
	    var pullAt = baseRest(function(array, indexes) {
	      indexes = baseFlatten(indexes, 1);

	      var length = array ? array.length : 0,
	          result = baseAt(array, indexes);

	      basePullAt(array, arrayMap(indexes, function(index) {
	        return isIndex(index, length) ? +index : index;
	      }).sort(compareAscending));

	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getIteratee(predicate, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function reverse(array) {
	      return array ? nativeReverse.call(array) : array;
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      else {
	        start = start == null ? 0 : toInteger(start);
	        end = end === undefined ? length : toInteger(end);
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */
	    function sortedIndex(array, value) {
	      return baseSortedIndex(array, value);
	    }

	    /**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */
	    function sortedIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
	    }

	    /**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */
	    function sortedIndexOf(array, value) {
	      var length = array ? array.length : 0;
	      if (length) {
	        var index = baseSortedIndex(array, value);
	        if (index < length && eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */
	    function sortedLastIndex(array, value) {
	      return baseSortedIndex(array, value, true);
	    }

	    /**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */
	    function sortedLastIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
	    }

	    /**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */
	    function sortedLastIndexOf(array, value) {
	      var length = array ? array.length : 0;
	      if (length) {
	        var index = baseSortedIndex(array, value, true) - 1;
	        if (eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */
	    function sortedUniq(array) {
	      return (array && array.length)
	        ? baseSortedUniq(array)
	        : [];
	    }

	    /**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */
	    function sortedUniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSortedUniq(array, getIteratee(iteratee, 2))
	        : [];
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function tail(array) {
	      var length = array ? array.length : 0;
	      return length ? baseSlice(array, 1, length) : [];
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */
	    function takeRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */
	    function takeWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */
	    var union = baseRest(function(arrays) {
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	    });

	    /**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    var unionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
	    });

	    /**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var unionWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each
	     * element is kept.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */
	    function uniq(array) {
	      return (array && array.length)
	        ? baseUniq(array)
	        : [];
	    }

	    /**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseUniq(array, getIteratee(iteratee, 2))
	        : [];
	    }

	    /**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The comparator is invoked with
	     * two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */
	    function uniqWith(array, comparator) {
	      return (array && array.length)
	        ? baseUniq(array, undefined, comparator)
	        : [];
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var length = 0;
	      array = arrayFilter(array, function(group) {
	        if (isArrayLikeObject(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      return baseTimes(length, function(index) {
	        return arrayMap(array, baseProperty(index));
	      });
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      return arrayMap(result, function(group) {
	        return apply(iteratee, undefined, group);
	      });
	    }

	    /**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */
	    var without = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */
	    var xor = baseRest(function(arrays) {
	      return baseXor(arrayFilter(arrays, isArrayLikeObject));
	    });

	    /**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var xorBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
	    });

	    /**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The comparator is invoked with
	     * two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var xorWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
	    });

	    /**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */
	    var zip = baseRest(unzip);

	    /**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function zipObject(props, values) {
	      return baseZipObject(props || [], values || [], assignValue);
	    }

	    /**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */
	    function zipObjectDeep(props, values) {
	      return baseZipObject(props || [], values || [], baseSet);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */
	    var zipWith = baseRest(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 1 ? arrays[length - 1] : undefined;

	      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
	      return unzipWith(arrays, iteratee);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor) {
	      interceptor(value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor) {
	      return interceptor(value);
	    }

	    /**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths of elements to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */
	    var wrapperAt = baseRest(function(paths) {
	      paths = baseFlatten(paths, 1);
	      var length = paths.length,
	          start = length ? paths[0] : 0,
	          value = this.__wrapped__,
	          interceptor = function(object) { return baseAt(object, paths); };

	      if (length > 1 || this.__actions__.length ||
	          !(value instanceof LazyWrapper) || !isIndex(start)) {
	        return this.thru(interceptor);
	      }
	      value = value.slice(start, +start + (length ? 1 : 0));
	      value.__actions__.push({
	        'func': thru,
	        'args': [interceptor],
	        'thisArg': undefined
	      });
	      return new LodashWrapper(value, this.__chain__).thru(function(array) {
	        if (length && !array.length) {
	          array.push(undefined);
	        }
	        return array;
	      });
	    });

	    /**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */
	    function wrapperNext() {
	      if (this.__values__ === undefined) {
	        this.__values__ = toArray(this.value());
	      }
	      var done = this.__index__ >= this.__values__.length,
	          value = done ? undefined : this.__values__[this.__index__++];

	      return { 'done': done, 'value': value };
	    }

	    /**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */
	    function wrapperToIterator() {
	      return this;
	    }

	    /**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        clone.__index__ = 0;
	        clone.__values__ = undefined;
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({
	          'func': thru,
	          'args': [reverse],
	          'thisArg': undefined
	        });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(reverse);
	    }

	    /**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, guard) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */
	    function filter(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, getIteratee(predicate, 3));
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */
	    var find = createFind(findIndex);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(findLastIndex);

	    /**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMap(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), 1);
	    }

	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMapDeep(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), INFINITY);
	    }

	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */
	    function flatMapDepth(collection, iteratee, depth) {
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(map(collection, iteratee), depth);
	    }

	    /**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _([1, 2]).forEach(function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forEach(collection, iteratee) {
	      var func = isArray(collection) ? arrayEach : baseEach;
	      return func(collection, getIteratee(iteratee, 3));
	    }

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */
	    function forEachRight(collection, iteratee) {
	      var func = isArray(collection) ? arrayEachRight : baseEachRight;
	      return func(collection, getIteratee(iteratee, 3));
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */
	    function includes(collection, value, fromIndex, guard) {
	      collection = isArrayLike(collection) ? collection : values(collection);
	      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	      var length = collection.length;
	      if (fromIndex < 0) {
	        fromIndex = nativeMax(length + fromIndex, 0);
	      }
	      return isString(collection)
	        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	    }

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invokeMap = baseRest(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */
	    var keyBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      return func(collection, getIteratee(iteratee, 3));
	    }

	    /**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
	    function orderBy(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      orders = guard ? undefined : orders;
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseOrderBy(collection, iteratees, orders);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */
	    function reduce(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduce : baseReduce,
	          initAccum = arguments.length < 3;

	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	    }

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    function reduceRight(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduceRight : baseReduce,
	          initAccum = arguments.length < 3;

	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
	    }

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */
	    function reject(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, negate(getIteratee(predicate, 3)));
	    }

	    /**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */
	    function sample(collection) {
	      var array = isArrayLike(collection) ? collection : values(collection),
	          length = array.length;

	      return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
	    }

	    /**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */
	    function sampleSize(collection, n, guard) {
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
	        n = 1;
	      } else {
	        n = baseClamp(toInteger(n), 0, length);
	      }
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sampleSize(collection, MAX_ARRAY_LENGTH);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      if (collection == null) {
	        return 0;
	      }
	      if (isArrayLike(collection)) {
	        return isString(collection) ? stringSize(collection) : collection.length;
	      }
	      var tag = getTag(collection);
	      if (tag == mapTag || tag == setTag) {
	        return collection.size;
	      }
	      return baseKeys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, guard) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, function(o) { return o.user; });
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	     *
	     * _.sortBy(users, 'user', function(o) {
	     *   return Math.floor(o.age / 10);
	     * });
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
	    var sortBy = baseRest(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var length = iteratees.length;
	      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	        iteratees = [];
	      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	        iteratees = [iteratees[0]];
	      }
	      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred invocation.
	     */
	    var now = ctxNow || function() {
	      return root.Date.now();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      n = guard ? undefined : n;
	      n = (func && n == null) ? func.length : n;
	      return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = baseRest(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bind));
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrap(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = baseRest(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bindKey));
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrap(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    function curry(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curry.placeholder;
	      return result;
	    }

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    function curryRight(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrap(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curryRight.placeholder;
	      return result;
	    }

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide `options` to indicate whether `func` should be invoked on the
	     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent
	     * calls to the debounced function return the result of the last `func`
	     * invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the debounced function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */
	    function debounce(func, wait, options) {
	      var lastArgs,
	          lastThis,
	          maxWait,
	          result,
	          timerId,
	          lastCallTime,
	          lastInvokeTime = 0,
	          leading = false,
	          maxing = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = toNumber(wait) || 0;
	      if (isObject(options)) {
	        leading = !!options.leading;
	        maxing = 'maxWait' in options;
	        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function invokeFunc(time) {
	        var args = lastArgs,
	            thisArg = lastThis;

	        lastArgs = lastThis = undefined;
	        lastInvokeTime = time;
	        result = func.apply(thisArg, args);
	        return result;
	      }

	      function leadingEdge(time) {
	        // Reset any `maxWait` timer.
	        lastInvokeTime = time;
	        // Start the timer for the trailing edge.
	        timerId = setTimeout(timerExpired, wait);
	        // Invoke the leading edge.
	        return leading ? invokeFunc(time) : result;
	      }

	      function remainingWait(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime,
	            result = wait - timeSinceLastCall;

	        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	      }

	      function shouldInvoke(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime;

	        // Either this is the first call, activity has stopped and we're at the
	        // trailing edge, the system time has gone backwards and we're treating
	        // it as the trailing edge, or we've hit the `maxWait` limit.
	        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	      }

	      function timerExpired() {
	        var time = now();
	        if (shouldInvoke(time)) {
	          return trailingEdge(time);
	        }
	        // Restart the timer.
	        timerId = setTimeout(timerExpired, remainingWait(time));
	      }

	      function trailingEdge(time) {
	        timerId = undefined;

	        // Only invoke if we have `lastArgs` which means `func` has been
	        // debounced at least once.
	        if (trailing && lastArgs) {
	          return invokeFunc(time);
	        }
	        lastArgs = lastThis = undefined;
	        return result;
	      }

	      function cancel() {
	        if (timerId !== undefined) {
	          clearTimeout(timerId);
	        }
	        lastInvokeTime = 0;
	        lastArgs = lastCallTime = lastThis = timerId = undefined;
	      }

	      function flush() {
	        return timerId === undefined ? result : trailingEdge(now());
	      }

	      function debounced() {
	        var time = now(),
	            isInvoking = shouldInvoke(time);

	        lastArgs = arguments;
	        lastThis = this;
	        lastCallTime = time;

	        if (isInvoking) {
	          if (timerId === undefined) {
	            return leadingEdge(lastCallTime);
	          }
	          if (maxing) {
	            // Handle invocations in a tight loop.
	            timerId = setTimeout(timerExpired, wait);
	            return invokeFunc(lastCallTime);
	          }
	        }
	        if (timerId === undefined) {
	          timerId = setTimeout(timerExpired, wait);
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      debounced.flush = flush;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one or more milliseconds.
	     */
	    var defer = baseRest(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */
	    var delay = baseRest(function(func, wait, args) {
	      return baseDelay(func, toNumber(wait) || 0, args);
	    });

	    /**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */
	    function flip(func) {
	      return createWrap(func, FLIP_FLAG);
	    }

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided, it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoized function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new (memoize.Cache || MapCache);
	      return memoized;
	    }

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        var args = arguments;
	        switch (args.length) {
	          case 0: return !predicate.call(this);
	          case 1: return !predicate.call(this, args[0]);
	          case 2: return !predicate.call(this, args[0], args[1]);
	          case 3: return !predicate.call(this, args[0], args[1], args[2]);
	        }
	        return !predicate.apply(this, args);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */
	    var overArgs = baseRest(function(func, transforms) {
	      transforms = (transforms.length == 1 && isArray(transforms[0]))
	        ? arrayMap(transforms[0], baseUnary(getIteratee()))
	        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

	      var funcsLength = transforms.length;
	      return baseRest(function(args) {
	        var index = -1,
	            length = nativeMin(args.length, funcsLength);

	        while (++index < length) {
	          args[index] = transforms[index].call(this, args[index]);
	        }
	        return apply(func, this, args);
	      });
	    });

	    /**
	     * Creates a function that invokes `func` with `partials` prepended to the
	     * arguments it receives. This method is like `_.bind` except it does **not**
	     * alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = baseRest(function(func, partials) {
	      var holders = replaceHolders(partials, getHolder(partial));
	      return createWrap(func, PARTIAL_FLAG, undefined, partials, holders);
	    });

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to the arguments it receives.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = baseRest(function(func, partials) {
	      var holders = replaceHolders(partials, getHolder(partialRight));
	      return createWrap(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	    });

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified `indexes` where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, [2, 0, 1]);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */
	    var rearg = baseRest(function(func, indexes) {
	      return createWrap(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function rest(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start === undefined ? start : toInteger(start);
	      return baseRest(func, start);
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
	      return baseRest(function(args) {
	        var array = args[start],
	            otherArgs = castSlice(args, 0, start);

	        if (array) {
	          arrayPush(otherArgs, array);
	        }
	        return apply(func, this, otherArgs);
	      });
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide `options` to indicate whether `func`
	     * should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, {
	        'leading': leading,
	        'maxWait': wait,
	        'trailing': trailing
	      });
	    }

	    /**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */
	    function unary(func) {
	      return ary(func, 1);
	    }

	    /**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return partial(wrapper, value);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */
	    function castArray() {
	      if (!arguments.length) {
	        return [];
	      }
	      var value = arguments[0];
	      return isArray(value) ? value : [value];
	    }

	    /**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */
	    function clone(value) {
	      return baseClone(value, false, true);
	    }

	    /**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */
	    function cloneWith(value, customizer) {
	      return baseClone(value, false, true, customizer);
	    }

	    /**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.clone
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */
	    function cloneDeep(value) {
	      return baseClone(value, true, true);
	    }

	    /**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */
	    function cloneDeepWith(value, customizer) {
	      return baseClone(value, true, true, customizer);
	    }

	    /**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */
	    function conformsTo(object, source) {
	      return source == null || baseConformsTo(object, source, keys(source));
	    }

	    /**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */
	    function eq(value, other) {
	      return value === other || (value !== value && other !== other);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @see _.lt
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    var gt = createRelationalOperation(baseGt);

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @see _.lte
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    var gte = createRelationalOperation(function(value, other) {
	      return value >= other;
	    });

	    /**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	        (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */
	    var isArray = Array.isArray;

	    /**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */
	    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

	    /**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(value.length) && !isFunction(value);
	    }

	    /**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */
	    function isArrayLikeObject(value) {
	      return isObjectLike(value) && isArrayLike(value);
	    }

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false ||
	        (isObjectLike(value) && objectToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */
	    var isBuffer = nativeIsBuffer || stubFalse;

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

	    /**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (isArrayLike(value) &&
	          (isArray(value) || typeof value == 'string' ||
	            typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
	        return !value.length;
	      }
	      var tag = getTag(value);
	      if (tag == mapTag || tag == setTag) {
	        return !value.size;
	      }
	      if (nonEnumShadows || isPrototype(value)) {
	        return !nativeKeys(value).length;
	      }
	      for (var key in value) {
	        if (hasOwnProperty.call(value, key)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are **not** supported.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */
	    function isEqual(value, other) {
	      return baseIsEqual(value, other);
	    }

	    /**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */
	    function isEqualWith(value, other, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      if (!isObjectLike(value)) {
	        return false;
	      }
	      return (objectToString.call(value) == errorTag) ||
	        (typeof value.message == 'string' && typeof value.name == 'string');
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in Safari 8-9 which returns 'object' for typed array and other constructors.
	      var tag = isObject(value) ? objectToString.call(value) : '';
	      return tag == funcTag || tag == genTag;
	    }

	    /**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */
	    function isInteger(value) {
	      return typeof value == 'number' && value == toInteger(value);
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */
	    function isLength(value) {
	      return typeof value == 'number' &&
	        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */
	    function isObject(value) {
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */
	    function isObjectLike(value) {
	      return !!value && typeof value == 'object';
	    }

	    /**
	     * Checks if `value` is classified as a `Map` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     * @example
	     *
	     * _.isMap(new Map);
	     * // => true
	     *
	     * _.isMap(new WeakMap);
	     * // => false
	     */
	    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	    /**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */
	    function isMatch(object, source) {
	      return object === source || baseIsMatch(object, source, getMatchData(source));
	    }

	    /**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */
	    function isMatchWith(object, source, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseIsMatch(object, source, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some
	      // ActiveX objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (isMaskable(value)) {
	        throw new Error('This method is not supported with core-js. Try https://github.com/es-shims.');
	      }
	      return baseIsNative(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */
	    function isNil(value) {
	      return value == null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' ||
	        (isObjectLike(value) && objectToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      if (!isObjectLike(value) ||
	          objectToString.call(value) != objectTag || isHostObject(value)) {
	        return false;
	      }
	      var proto = getPrototype(value);
	      if (proto === null) {
	        return true;
	      }
	      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	      return (typeof Ctor == 'function' &&
	        Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

	    /**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */
	    function isSafeInteger(value) {
	      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is classified as a `Set` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     * @example
	     *
	     * _.isSet(new Set);
	     * // => true
	     *
	     * _.isSet(new WeakSet);
	     * // => false
	     */
	    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' ||
	        (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */
	    function isSymbol(value) {
	      return typeof value == 'symbol' ||
	        (isObjectLike(value) && objectToString.call(value) == symbolTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */
	    function isWeakMap(value) {
	      return isObjectLike(value) && getTag(value) == weakMapTag;
	    }

	    /**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */
	    function isWeakSet(value) {
	      return isObjectLike(value) && objectToString.call(value) == weakSetTag;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @see _.gt
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    var lt = createRelationalOperation(baseLt);

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @see _.gte
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    var lte = createRelationalOperation(function(value, other) {
	      return value <= other;
	    });

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */
	    function toArray(value) {
	      if (!value) {
	        return [];
	      }
	      if (isArrayLike(value)) {
	        return isString(value) ? stringToArray(value) : copyArray(value);
	      }
	      if (iteratorSymbol && value[iteratorSymbol]) {
	        return iteratorToArray(value[iteratorSymbol]());
	      }
	      var tag = getTag(value),
	          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

	      return func(value);
	    }

	    /**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */
	    function toFinite(value) {
	      if (!value) {
	        return value === 0 ? value : 0;
	      }
	      value = toNumber(value);
	      if (value === INFINITY || value === -INFINITY) {
	        var sign = (value < 0 ? -1 : 1);
	        return sign * MAX_INTEGER;
	      }
	      return value === value ? value : 0;
	    }

	    /**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */
	    function toInteger(value) {
	      var result = toFinite(value),
	          remainder = result % 1;

	      return result === result ? (remainder ? result - remainder : result) : 0;
	    }

	    /**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */
	    function toLength(value) {
	      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
	    }

	    /**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */
	    function toNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      if (isObject(value)) {
	        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	        value = isObject(other) ? (other + '') : other;
	      }
	      if (typeof value != 'string') {
	        return value === 0 ? value : +value;
	      }
	      value = value.replace(reTrim, '');
	      var isBinary = reIsBinary.test(value);
	      return (isBinary || reIsOctal.test(value))
	        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	        : (reIsBadHex.test(value) ? NAN : +value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return copyObject(value, keysIn(value));
	    }

	    /**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */
	    function toSafeInteger(value) {
	      return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
	    }

	    /**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */
	    function toString(value) {
	      return value == null ? '' : baseToString(value);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assignIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assign({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    var assign = createAssigner(function(object, source) {
	      if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	        copyObject(source, keys(source), object);
	        return;
	      }
	      for (var key in source) {
	        if (hasOwnProperty.call(source, key)) {
	          assignValue(object, key, source[key]);
	        }
	      }
	    });

	    /**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assign
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	     */
	    var assignIn = createAssigner(function(object, source) {
	      copyObject(source, keysIn(source), object);
	    });

	    /**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObject(source, keysIn(source), object, customizer);
	    });

	    /**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignInWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObject(source, keys(source), object, customizer);
	    });

	    /**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths of elements to pick.
	     * @returns {Array} Returns the picked values.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     */
	    var at = baseRest(function(object, paths) {
	      return baseAt(object, baseFlatten(paths, 1));
	    });

	    /**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties) {
	      var result = baseCreate(prototype);
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaultsDeep
	     * @example
	     *
	     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var defaults = baseRest(function(args) {
	      args.push(undefined, assignInDefaults);
	      return apply(assignInWith, undefined, args);
	    });

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaults
	     * @example
	     *
	     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	     * // => { 'a': { 'b': 2, 'c': 3 } }
	     */
	    var defaultsDeep = baseRest(function(args) {
	      args.push(undefined, mergeDefaults);
	      return apply(mergeWith, undefined, args);
	    });

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    function findKey(object, predicate) {
	      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
	    }

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    function findLastKey(object, predicate) {
	      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
	    }

	    /**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */
	    function forIn(object, iteratee) {
	      return object == null
	        ? object
	        : baseFor(object, getIteratee(iteratee, 3), keysIn);
	    }

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */
	    function forInRight(object, iteratee) {
	      return object == null
	        ? object
	        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
	    }

	    /**
	     * Iterates over own enumerable string keyed properties of an object and
	     * invokes `iteratee` for each property. The iteratee is invoked with three
	     * arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwnRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forOwn(object, iteratee) {
	      return object && baseForOwn(object, getIteratee(iteratee, 3));
	    }

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */
	    function forOwnRight(object, iteratee) {
	      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
	    }

	    /**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */
	    function functions(object) {
	      return object == null ? [] : baseFunctions(object, keys(object));
	    }

	    /**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */
	    function functionsIn(object) {
	      return object == null ? [] : baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined`, the `defaultValue` is returned in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, path);
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */
	    function has(object, path) {
	      return object != null && hasPath(object, path, baseHas);
	    }

	    /**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */
	    function hasIn(object, path) {
	      return object != null && hasPath(object, path, baseHasIn);
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */
	    var invert = createInverter(function(result, value, key) {
	      result[value] = key;
	    }, constant(identity));

	    /**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` thru `iteratee`. The
	     * corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */
	    var invertBy = createInverter(function(result, value, key) {
	      if (hasOwnProperty.call(result, value)) {
	        result[value].push(key);
	      } else {
	        result[value] = [key];
	      }
	    }, getIteratee);

	    /**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */
	    var invoke = baseRest(baseInvoke);

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    function keys(object) {
	      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    function mapKeys(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);

	      baseForOwn(object, function(value, key, object) {
	        result[iteratee(value, key, object)] = value;
	      });
	      return result;
	    }

	    /**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    function mapValues(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);

	      baseForOwn(object, function(value, key, object) {
	        result[key] = iteratee(value, key, object);
	      });
	      return result;
	    }

	    /**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively. Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {
	     *   'a': [{ 'b': 2 }, { 'd': 4 }]
	     * };
	     *
	     * var other = {
	     *   'a': [{ 'c': 3 }, { 'e': 5 }]
	     * };
	     *
	     * _.merge(object, other);
	     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	     */
	    var merge = createAssigner(function(object, source, srcIndex) {
	      baseMerge(object, source, srcIndex);
	    });

	    /**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined`, merging is handled by the
	     * method instead. The `customizer` is invoked with seven arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = { 'a': [1], 'b': [2] };
	     * var other = { 'a': [3], 'b': [4] };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'a': [1, 3], 'b': [2, 4] }
	     */
	    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	      baseMerge(object, source, srcIndex, customizer);
	    });

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable string keyed properties of `object` that are
	     * not omitted.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to omit.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */
	    var omit = baseRest(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      props = arrayMap(baseFlatten(props, 1), toKey);
	      return basePick(object, baseDifference(getAllKeysIn(object), props));
	    });

	    /**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */
	    function omitBy(object, predicate) {
	      return pickBy(object, negate(getIteratee(predicate)));
	    }

	    /**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    var pick = baseRest(function(object, props) {
	      return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
	    });

	    /**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    function pickBy(object, predicate) {
	      return object == null ? {} : basePickBy(object, getAllKeysIn(object), getIteratee(predicate));
	    }

	    /**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      path = isKey(path, object) ? [path] : castPath(path);

	      var index = -1,
	          length = path.length;

	      // Ensure the loop is entered when path is empty.
	      if (!length) {
	        object = undefined;
	        length = 1;
	      }
	      while (++index < length) {
	        var value = object == null ? undefined : object[toKey(path[index])];
	        if (value === undefined) {
	          index = length;
	          value = defaultValue;
	        }
	        object = isFunction(value) ? value.call(object) : value;
	      }
	      return object;
	    }

	    /**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      return object == null ? object : baseSet(object, path, value);
	    }

	    /**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */
	    function setWith(object, path, value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseSet(object, path, value, customizer);
	    }

	    /**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	     * entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */
	    var toPairs = createToPairs(keys);

	    /**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	     * or set, its entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
	     */
	    var toPairsIn = createToPairs(keysIn);

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function transform(object, iteratee, accumulator) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getIteratee(iteratee, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */
	    function unset(object, path) {
	      return object == null ? true : baseUnset(object, path);
	    }

	    /**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */
	    function update(object, path, updater) {
	      return object == null ? object : baseUpdate(object, path, castFunction(updater));
	    }

	    /**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */
	    function updateWith(object, path, updater, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
	    }

	    /**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return object ? baseValues(object, keys(object)) : [];
	    }

	    /**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return object == null ? [] : baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */
	    function clamp(number, lower, upper) {
	      if (upper === undefined) {
	        upper = lower;
	        lower = undefined;
	      }
	      if (upper !== undefined) {
	        upper = toNumber(upper);
	        upper = upper === upper ? upper : 0;
	      }
	      if (lower !== undefined) {
	        lower = toNumber(lower);
	        lower = lower === lower ? lower : 0;
	      }
	      return baseClamp(toNumber(number), lower, upper);
	    }

	    /**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */
	    function inRange(number, start, end) {
	      start = toFinite(start);
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = toFinite(end);
	      }
	      number = toNumber(number);
	      return baseInRange(number, start, end);
	    }

	    /**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(lower, upper, floating) {
	      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
	        upper = floating = undefined;
	      }
	      if (floating === undefined) {
	        if (typeof upper == 'boolean') {
	          floating = upper;
	          upper = undefined;
	        }
	        else if (typeof lower == 'boolean') {
	          floating = lower;
	          lower = undefined;
	        }
	      }
	      if (lower === undefined && upper === undefined) {
	        lower = 0;
	        upper = 1;
	      }
	      else {
	        lower = toFinite(lower);
	        if (upper === undefined) {
	          upper = lower;
	          lower = 0;
	        } else {
	          upper = toFinite(upper);
	        }
	      }
	      if (lower > upper) {
	        var temp = lower;
	        lower = upper;
	        upper = temp;
	      }
	      if (floating || lower % 1 || upper % 1) {
	        var rand = nativeRandom();
	        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
	      }
	      return baseRandom(lower, upper);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? capitalize(word) : word);
	    });

	    /**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      return upperFirst(toString(string).toLowerCase());
	    }

	    /**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = toString(string);
	      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = toString(string);
	      target = baseToString(target);

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : baseClamp(toInteger(position), 0, length);

	      var end = position;
	      position -= target.length;
	      return position >= 0 && string.slice(position, end) == target;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in IE < 9, they can break out of
	     * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the
	     * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      string = toString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */
	    function escapeRegExp(string) {
	      string = toString(string);
	      return (string && reHasRegExpChar.test(string))
	        ? string.replace(reRegExpChar, '\\$&')
	        : string;
	    }

	    /**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */
	    var lowerCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */
	    var lowerFirst = createCaseFirst('toLowerCase');

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);

	      var strLength = length ? stringSize(string) : 0;
	      if (!length || strLength >= length) {
	        return string;
	      }
	      var mid = (length - strLength) / 2;
	      return (
	        createPadding(nativeFloor(mid), chars) +
	        string +
	        createPadding(nativeCeil(mid), chars)
	      );
	    }

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */
	    function padEnd(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);

	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (string + createPadding(length - strLength, chars))
	        : string;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */
	    function padStart(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);

	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (createPadding(length - strLength, chars) + string)
	        : string;
	    }

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://bugs.chromium.org/p/v8/issues/detail?id=3109 for more details.
	      if (guard || radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = toString(string).replace(reTrim, '');
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n, guard) {
	      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
	        n = 1;
	      } else {
	        n = toInteger(n);
	      }
	      return baseRepeat(toString(string), n);
	    }

	    /**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */
	    function replace() {
	      var args = arguments,
	          string = toString(args[0]);

	      return args.length < 3 ? string : string.replace(args[1], args[2]);
	    }

	    /**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */
	    function split(string, separator, limit) {
	      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
	        separator = limit = undefined;
	      }
	      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
	      if (!limit) {
	        return [];
	      }
	      string = toString(string);
	      if (string && (
	            typeof separator == 'string' ||
	            (separator != null && !isRegExp(separator))
	          )) {
	        separator = baseToString(separator);
	        if (!separator && hasUnicode(string)) {
	          return castSlice(stringToArray(string), 0, limit);
	        }
	      }
	      return string.split(separator, limit);
	    }

	    /**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + upperFirst(word);
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = toString(string);
	      position = baseClamp(toInteger(position), 0, string.length);
	      target = baseToString(target);
	      return string.slice(position, position + target.length) == target;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES delimiter as an alternative to the default "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, guard) {
	      // Based on John Resig's `tmpl` implementation
	      // (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      string = toString(string);
	      options = assignInWith({}, options, settings, assignInDefaults);

	      var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products needs `match` returned in
	        // order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source)
	          .apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */
	    function toLower(value) {
	      return toString(value).toLowerCase();
	    }

	    /**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */
	    function toUpper(value) {
	      return toString(value).toUpperCase();
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrim, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          chrSymbols = stringToArray(chars),
	          start = charsStartIndex(strSymbols, chrSymbols),
	          end = charsEndIndex(strSymbols, chrSymbols) + 1;

	      return castSlice(strSymbols, start, end).join('');
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimEnd(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrimEnd, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

	      return castSlice(strSymbols, 0, end).join('');
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimStart(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrimStart, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          start = charsStartIndex(strSymbols, stringToArray(chars));

	      return castSlice(strSymbols, start).join('');
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function truncate(string, options) {
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (isObject(options)) {
	        var separator = 'separator' in options ? options.separator : separator;
	        length = 'length' in options ? toInteger(options.length) : length;
	        omission = 'omission' in options ? baseToString(options.omission) : omission;
	      }
	      string = toString(string);

	      var strLength = string.length;
	      if (hasUnicode(string)) {
	        var strSymbols = stringToArray(string);
	        strLength = strSymbols.length;
	      }
	      if (length >= strLength) {
	        return string;
	      }
	      var end = length - stringSize(omission);
	      if (end < 1) {
	        return omission;
	      }
	      var result = strSymbols
	        ? castSlice(strSymbols, 0, end).join('')
	        : string.slice(0, end);

	      if (separator === undefined) {
	        return result + omission;
	      }
	      if (strSymbols) {
	        end += (result.length - end);
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              substring = result;

	          if (!separator.global) {
	            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            var newEnd = match.index;
	          }
	          result = result.slice(0, newEnd === undefined ? end : newEnd);
	        }
	      } else if (string.indexOf(baseToString(separator), end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = toString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */
	    var upperCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toUpperCase();
	    });

	    /**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */
	    var upperFirst = createCaseFirst('toUpperCase');

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      string = toString(string);
	      pattern = guard ? undefined : pattern;

	      if (pattern === undefined) {
	        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	      }
	      return string.match(pattern) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = baseRest(function(func, args) {
	      try {
	        return apply(func, undefined, args);
	      } catch (e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'click': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, ['click']);
	     * jQuery(element).on('click', view.click);
	     * // => Logs 'clicked docs' when clicked.
	     */
	    var bindAll = baseRest(function(object, methodNames) {
	      arrayEach(baseFlatten(methodNames, 1), function(key) {
	        key = toKey(key);
	        object[key] = bind(object[key], object);
	      });
	      return object;
	    });

	    /**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */
	    function cond(pairs) {
	      var length = pairs ? pairs.length : 0,
	          toIteratee = getIteratee();

	      pairs = !length ? [] : arrayMap(pairs, function(pair) {
	        if (typeof pair[1] != 'function') {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	        return [toIteratee(pair[0]), pair[1]];
	      });

	      return baseRest(function(args) {
	        var index = -1;
	        while (++index < length) {
	          var pair = pairs[index];
	          if (apply(pair[0], this, args)) {
	            return apply(pair[1], this, args);
	          }
	        }
	      });
	    }

	    /**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */
	    function conforms(source) {
	      return baseConforms(baseClone(source, true));
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */
	    function defaultTo(value, defaultValue) {
	      return (value == null || value !== value) ? defaultValue : value;
	    }

	    /**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flowRight
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow([_.add, square]);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 3.0.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flow
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight([square, _.add]);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */
	    function iteratee(func) {
	      return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
	    }

	    /**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': _.constant(2) } },
	     *   { 'a': { 'b': _.constant(1) } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b']));
	     * // => [2, 1]
	     */
	    var method = baseRest(function(path, args) {
	      return function(object) {
	        return baseInvoke(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = baseRest(function(object, args) {
	      return function(path) {
	        return baseInvoke(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      var props = keys(source),
	          methodNames = baseFunctions(source, props);

	      if (options == null &&
	          !(isObject(source) && (methodNames.length || !props.length))) {
	        options = source;
	        source = object;
	        object = this;
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
	          isFunc = isFunction(object);

	      arrayEach(methodNames, function(methodName) {
	        var func = source[methodName];
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = function() {
	            var chainAll = this.__chain__;
	            if (chain || chainAll) {
	              var result = object(this.__wrapped__),
	                  actions = result.__actions__ = copyArray(this.__actions__);

	              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	              result.__chain__ = chainAll;
	              return result;
	            }
	            return func.apply(object, arrayPush([this.value()], arguments));
	          };
	        }
	      });

	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      if (root._ === this) {
	        root._ = oldDash;
	      }
	      return this;
	    }

	    /**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */
	    function nthArg(n) {
	      n = toInteger(n);
	      return baseRest(function(args) {
	        return baseNth(args, n);
	      });
	    }

	    /**
	     * Creates a function that invokes `iteratees` with the arguments it receives
	     * and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over([Math.max, Math.min]);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */
	    var over = createOver(arrayMap);

	    /**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */
	    var overEvery = createOver(arrayEvery);

	    /**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     */
	    var overSome = createOver(arraySome);

	    /**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': 2 } },
	     *   { 'a': { 'b': 1 } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return object == null ? undefined : baseGet(object, path);
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified,
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.rangeRight
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    var range = createRange();

	    /**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.range
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */
	    var rangeRight = createRange(true);

	    /**
	     * This method returns a new empty array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Array} Returns the new empty array.
	     * @example
	     *
	     * var arrays = _.times(2, _.stubArray);
	     *
	     * console.log(arrays);
	     * // => [[], []]
	     *
	     * console.log(arrays[0] === arrays[1]);
	     * // => false
	     */
	    function stubArray() {
	      return [];
	    }

	    /**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */
	    function stubFalse() {
	      return false;
	    }

	    /**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */
	    function stubObject() {
	      return {};
	    }

	    /**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */
	    function stubString() {
	      return '';
	    }

	    /**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */
	    function stubTrue() {
	      return true;
	    }

	    /**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */
	    function times(n, iteratee) {
	      n = toInteger(n);
	      if (n < 1 || n > MAX_SAFE_INTEGER) {
	        return [];
	      }
	      var index = MAX_ARRAY_LENGTH,
	          length = nativeMin(n, MAX_ARRAY_LENGTH);

	      iteratee = getIteratee(iteratee);
	      n -= MAX_ARRAY_LENGTH;

	      var result = baseTimes(length, iteratee);
	      while (++index < n) {
	        iteratee(index);
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return arrayMap(value, toKey);
	      }
	      return isSymbol(value) ? [value] : copyArray(stringToPath(value));
	    }

	    /**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return toString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    var add = createMathOperation(function(augend, addend) {
	      return augend + addend;
	    }, 0);

	    /**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */
	    var divide = createMathOperation(function(dividend, divisor) {
	      return dividend / divisor;
	    }, 1);

	    /**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */
	    function max(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, baseGt)
	        : undefined;
	    }

	    /**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */
	    function maxBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
	        : undefined;
	    }

	    /**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */
	    function mean(array) {
	      return baseMean(array, identity);
	    }

	    /**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */
	    function meanBy(array, iteratee) {
	      return baseMean(array, getIteratee(iteratee, 2));
	    }

	    /**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */
	    function min(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, baseLt)
	        : undefined;
	    }

	    /**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */
	    function minBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
	        : undefined;
	    }

	    /**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */
	    var multiply = createMathOperation(function(multiplier, multiplicand) {
	      return multiplier * multiplicand;
	    }, 1);

	    /**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */
	    var subtract = createMathOperation(function(minuend, subtrahend) {
	      return minuend - subtrahend;
	    }, 0);

	    /**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */
	    function sum(array) {
	      return (array && array.length)
	        ? baseSum(array, identity)
	        : 0;
	    }

	    /**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */
	    function sumBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSum(array, getIteratee(iteratee, 2))
	        : 0;
	    }

	    /*------------------------------------------------------------------------*/

	    // Add methods that return wrapped values in chain sequences.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.assignIn = assignIn;
	    lodash.assignInWith = assignInWith;
	    lodash.assignWith = assignWith;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.castArray = castArray;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.concat = concat;
	    lodash.cond = cond;
	    lodash.conforms = conforms;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.differenceBy = differenceBy;
	    lodash.differenceWith = differenceWith;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatMap = flatMap;
	    lodash.flatMapDeep = flatMapDeep;
	    lodash.flatMapDepth = flatMapDepth;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flattenDepth = flattenDepth;
	    lodash.flip = flip;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.fromPairs = fromPairs;
	    lodash.functions = functions;
	    lodash.functionsIn = functionsIn;
	    lodash.groupBy = groupBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.intersectionBy = intersectionBy;
	    lodash.intersectionWith = intersectionWith;
	    lodash.invert = invert;
	    lodash.invertBy = invertBy;
	    lodash.invokeMap = invokeMap;
	    lodash.iteratee = iteratee;
	    lodash.keyBy = keyBy;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.mergeWith = mergeWith;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.negate = negate;
	    lodash.nthArg = nthArg;
	    lodash.omit = omit;
	    lodash.omitBy = omitBy;
	    lodash.once = once;
	    lodash.orderBy = orderBy;
	    lodash.over = over;
	    lodash.overArgs = overArgs;
	    lodash.overEvery = overEvery;
	    lodash.overSome = overSome;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pickBy = pickBy;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAll = pullAll;
	    lodash.pullAllBy = pullAllBy;
	    lodash.pullAllWith = pullAllWith;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rangeRight = rangeRight;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.reverse = reverse;
	    lodash.sampleSize = sampleSize;
	    lodash.set = set;
	    lodash.setWith = setWith;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortedUniq = sortedUniq;
	    lodash.sortedUniqBy = sortedUniqBy;
	    lodash.split = split;
	    lodash.spread = spread;
	    lodash.tail = tail;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.toArray = toArray;
	    lodash.toPairs = toPairs;
	    lodash.toPairsIn = toPairsIn;
	    lodash.toPath = toPath;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.unary = unary;
	    lodash.union = union;
	    lodash.unionBy = unionBy;
	    lodash.unionWith = unionWith;
	    lodash.uniq = uniq;
	    lodash.uniqBy = uniqBy;
	    lodash.uniqWith = uniqWith;
	    lodash.unset = unset;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.update = update;
	    lodash.updateWith = updateWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.without = without;
	    lodash.words = words;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.xorBy = xorBy;
	    lodash.xorWith = xorWith;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipObjectDeep = zipObjectDeep;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.entries = toPairs;
	    lodash.entriesIn = toPairsIn;
	    lodash.extend = assignIn;
	    lodash.extendWith = assignInWith;

	    // Add methods to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add methods that return unwrapped values in chain sequences.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clamp = clamp;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.cloneDeepWith = cloneDeepWith;
	    lodash.cloneWith = cloneWith;
	    lodash.conformsTo = conformsTo;
	    lodash.deburr = deburr;
	    lodash.defaultTo = defaultTo;
	    lodash.divide = divide;
	    lodash.endsWith = endsWith;
	    lodash.eq = eq;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.floor = floor;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.hasIn = hasIn;
	    lodash.head = head;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.invoke = invoke;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isArrayBuffer = isArrayBuffer;
	    lodash.isArrayLike = isArrayLike;
	    lodash.isArrayLikeObject = isArrayLikeObject;
	    lodash.isBoolean = isBoolean;
	    lodash.isBuffer = isBuffer;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isEqualWith = isEqualWith;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isInteger = isInteger;
	    lodash.isLength = isLength;
	    lodash.isMap = isMap;
	    lodash.isMatch = isMatch;
	    lodash.isMatchWith = isMatchWith;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNil = isNil;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isObjectLike = isObjectLike;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isSafeInteger = isSafeInteger;
	    lodash.isSet = isSet;
	    lodash.isString = isString;
	    lodash.isSymbol = isSymbol;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.isWeakMap = isWeakMap;
	    lodash.isWeakSet = isWeakSet;
	    lodash.join = join;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lowerCase = lowerCase;
	    lodash.lowerFirst = lowerFirst;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.maxBy = maxBy;
	    lodash.mean = mean;
	    lodash.meanBy = meanBy;
	    lodash.min = min;
	    lodash.minBy = minBy;
	    lodash.stubArray = stubArray;
	    lodash.stubFalse = stubFalse;
	    lodash.stubObject = stubObject;
	    lodash.stubString = stubString;
	    lodash.stubTrue = stubTrue;
	    lodash.multiply = multiply;
	    lodash.nth = nth;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padEnd = padEnd;
	    lodash.padStart = padStart;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.replace = replace;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.sample = sample;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedIndexBy = sortedIndexBy;
	    lodash.sortedIndexOf = sortedIndexOf;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.sortedLastIndexBy = sortedLastIndexBy;
	    lodash.sortedLastIndexOf = sortedLastIndexOf;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.subtract = subtract;
	    lodash.sum = sum;
	    lodash.sumBy = sumBy;
	    lodash.template = template;
	    lodash.times = times;
	    lodash.toFinite = toFinite;
	    lodash.toInteger = toInteger;
	    lodash.toLength = toLength;
	    lodash.toLower = toLower;
	    lodash.toNumber = toNumber;
	    lodash.toSafeInteger = toSafeInteger;
	    lodash.toString = toString;
	    lodash.toUpper = toUpper;
	    lodash.trim = trim;
	    lodash.trimEnd = trimEnd;
	    lodash.trimStart = trimStart;
	    lodash.truncate = truncate;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.upperCase = upperCase;
	    lodash.upperFirst = upperFirst;

	    // Add aliases.
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.first = head;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), { 'chain': false });

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(n, result.__takeCount__);
	        } else {
	          result.__views__.push({
	            'size': nativeMin(n, MAX_ARRAY_LENGTH),
	            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
	          });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee) {
	        var result = this.clone();
	        result.__iteratees__.push({
	          'iteratee': getIteratee(iteratee, 3),
	          'type': type
	        });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.head` and `_.last`.
	    arrayEach(['head', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
	    arrayEach(['initial', 'tail'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.find = function(predicate) {
	      return this.filter(predicate).head();
	    };

	    LazyWrapper.prototype.findLast = function(predicate) {
	      return this.reverse().find(predicate);
	    };

	    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
	      if (typeof path == 'function') {
	        return new LazyWrapper(this);
	      }
	      return this.map(function(value) {
	        return baseInvoke(value, path, args);
	      });
	    });

	    LazyWrapper.prototype.reject = function(predicate) {
	      return this.filter(negate(getIteratee(predicate)));
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = toInteger(start);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = toInteger(end);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate) {
	      return this.reverse().takeWhile(predicate).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(MAX_ARRAY_LENGTH);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
	          isTaker = /^(?:head|last)$/.test(methodName),
	          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
	          retUnwrapped = isTaker || /^find/.test(methodName);

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            args = isTaker ? [1] : arguments,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        var interceptor = function(value) {
	          var result = lodashFunc.apply(lodash, arrayPush([value], args));
	          return (isTaker && chainAll) ? result[0] : result;
	        };

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var chainAll = this.__chain__,
	            isHybrid = !!this.__actions__.length,
	            isUnwrapped = retUnwrapped && !chainAll,
	            onlyLazy = isLazy && !isHybrid;

	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	          return new LodashWrapper(result, chainAll);
	        }
	        if (isUnwrapped && onlyLazy) {
	          return func.apply(this, args);
	        }
	        result = this.thru(interceptor);
	        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
	      };
	    });

	    // Add `Array` methods to `lodash.prototype`.
	    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	      var func = arrayProto[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          var value = this.value();
	          return func.apply(isArray(value) ? value : [], args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(isArray(value) ? value : [], args);
	        });
	      };
	    });

	    // Map minified method names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = (lodashFunc.name + ''),
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybrid(undefined, BIND_KEY_FLAG).name] = [{
	      'name': 'wrapper',
	      'func': undefined
	    }];

	    // Add methods to `LazyWrapper`.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chain sequence methods to the `lodash` wrapper.
	    lodash.prototype.at = wrapperAt;
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.next = wrapperNext;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add lazy aliases.
	    lodash.prototype.first = lodash.prototype.head;

	    if (iteratorSymbol) {
	      lodash.prototype[iteratorSymbol] = wrapperToIterator;
	    }
	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers, like r.js, check for condition patterns like:
	  if (true) {
	    // Expose Lodash on the global object to prevent errors when Lodash is
	    // loaded by a script tag in the presence of an AMD loader.
	    // See http://requirejs.org/docs/errors.html#mismatch for more details.
	    // Use `_.noConflict` to remove Lodash from the global object.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds it.
	  else if (freeModule) {
	    // Export for Node.js.
	    (freeModule.exports = _)._ = _;
	    // Export for CommonJS support.
	    freeExports._ = _;
	  }
	  else {
	    // Export to the global object.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(10);

	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}

	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;

	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });

	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }

	  return buf;
	}

	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : unparse(b);
	}

	// **`v4()` - Generate random UUID**

	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || _rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || unparse(rnds);
	}

	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;

	module.exports = uuid;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return _rnds;
	  };
	}

	module.exports = rng;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	//  Ramda v0.21.0
	//  https://github.com/ramda/ramda
	//  (c) 2013-2016 Scott Sauyet, Michael Hurley, and David Chambers
	//  Ramda may be freely distributed under the MIT license.

	;(function() {

	  'use strict';

	  /**
	     * A special placeholder value used to specify "gaps" within curried functions,
	     * allowing partial application of any combination of arguments, regardless of
	     * their positions.
	     *
	     * If `g` is a curried ternary function and `_` is `R.__`, the following are
	     * equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2, _)(1, 3)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @constant
	     * @memberOf R
	     * @since v0.6.0
	     * @category Function
	     * @example
	     *
	     *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	     *      greet('Alice'); //=> 'Hello, Alice!'
	     */
	    var __ = { '@@functional/placeholder': true };

	    /* eslint-disable no-unused-vars */
	    var _arity = function _arity(n, fn) {
	        /* eslint-disable no-unused-vars */
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.apply(this, arguments);
	            };
	        case 1:
	            return function (a0) {
	                return fn.apply(this, arguments);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.apply(this, arguments);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.apply(this, arguments);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.apply(this, arguments);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.apply(this, arguments);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.apply(this, arguments);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.apply(this, arguments);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.apply(this, arguments);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.apply(this, arguments);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.apply(this, arguments);
	            };
	        default:
	            throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	        }
	    };

	    var _arrayFromIterator = function _arrayFromIterator(iter) {
	        var list = [];
	        var next;
	        while (!(next = iter.next()).done) {
	            list.push(next.value);
	        }
	        return list;
	    };

	    var _arrayOf = function _arrayOf() {
	        return Array.prototype.slice.call(arguments);
	    };

	    var _cloneRegExp = function _cloneRegExp(pattern) {
	        return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
	    };

	    var _complement = function _complement(f) {
	        return function () {
	            return !f.apply(this, arguments);
	        };
	    };

	    /**
	     * Private `concat` function to merge two array-like objects.
	     *
	     * @private
	     * @param {Array|Arguments} [set1=[]] An array-like object.
	     * @param {Array|Arguments} [set2=[]] An array-like object.
	     * @return {Array} A new, merged array.
	     * @example
	     *
	     *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     */
	    var _concat = function _concat(set1, set2) {
	        set1 = set1 || [];
	        set2 = set2 || [];
	        var idx;
	        var len1 = set1.length;
	        var len2 = set2.length;
	        var result = [];
	        idx = 0;
	        while (idx < len1) {
	            result[result.length] = set1[idx];
	            idx += 1;
	        }
	        idx = 0;
	        while (idx < len2) {
	            result[result.length] = set2[idx];
	            idx += 1;
	        }
	        return result;
	    };

	    var _containsWith = function _containsWith(pred, x, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (pred(x, list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    };

	    var _filter = function _filter(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        while (idx < len) {
	            if (fn(list[idx])) {
	                result[result.length] = list[idx];
	            }
	            idx += 1;
	        }
	        return result;
	    };

	    var _forceReduced = function _forceReduced(x) {
	        return {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    // String(x => x) evaluates to "x => x", so the pattern may not match.
	    var _functionName = function _functionName(f) {
	        // String(x => x) evaluates to "x => x", so the pattern may not match.
	        var match = String(f).match(/^function (\w*)/);
	        return match == null ? '' : match[1];
	    };

	    var _has = function _has(prop, obj) {
	        return Object.prototype.hasOwnProperty.call(obj, prop);
	    };

	    var _identity = function _identity(x) {
	        return x;
	    };

	    var _isArguments = function () {
	        var toString = Object.prototype.toString;
	        return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
	            return toString.call(x) === '[object Arguments]';
	        } : function _isArguments(x) {
	            return _has('callee', x);
	        };
	    }();

	    /**
	     * Tests whether or not an object is an array.
	     *
	     * @private
	     * @param {*} val The object to test.
	     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	     * @example
	     *
	     *      _isArray([]); //=> true
	     *      _isArray(null); //=> false
	     *      _isArray({}); //=> false
	     */
	    var _isArray = Array.isArray || function _isArray(val) {
	        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	    };

	    var _isFunction = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Function]';
	    };

	    /**
	     * Determine if the passed argument is an integer.
	     *
	     * @private
	     * @param {*} n
	     * @category Type
	     * @return {Boolean}
	     */
	    var _isInteger = Number.isInteger || function _isInteger(n) {
	        return n << 0 === n;
	    };

	    var _isNumber = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Number]';
	    };

	    var _isObject = function _isObject(x) {
	        return Object.prototype.toString.call(x) === '[object Object]';
	    };

	    var _isPlaceholder = function _isPlaceholder(a) {
	        return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
	    };

	    var _isRegExp = function _isRegExp(x) {
	        return Object.prototype.toString.call(x) === '[object RegExp]';
	    };

	    var _isString = function _isString(x) {
	        return Object.prototype.toString.call(x) === '[object String]';
	    };

	    var _isTransformer = function _isTransformer(obj) {
	        return typeof obj['@@transducer/step'] === 'function';
	    };

	    var _map = function _map(fn, functor) {
	        var idx = 0;
	        var len = functor.length;
	        var result = Array(len);
	        while (idx < len) {
	            result[idx] = fn(functor[idx]);
	            idx += 1;
	        }
	        return result;
	    };

	    // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	    var _objectAssign = function _objectAssign(target) {
	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	        var output = Object(target);
	        var idx = 1;
	        var length = arguments.length;
	        while (idx < length) {
	            var source = arguments[idx];
	            if (source != null) {
	                for (var nextKey in source) {
	                    if (_has(nextKey, source)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	            idx += 1;
	        }
	        return output;
	    };

	    var _of = function _of(x) {
	        return [x];
	    };

	    var _pipe = function _pipe(f, g) {
	        return function () {
	            return g.call(this, f.apply(this, arguments));
	        };
	    };

	    var _pipeP = function _pipeP(f, g) {
	        return function () {
	            var ctx = this;
	            return f.apply(ctx, arguments).then(function (x) {
	                return g.call(ctx, x);
	            });
	        };
	    };

	    // \b matches word boundary; [\b] matches backspace
	    var _quote = function _quote(s) {
	        var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b')    // \b matches word boundary; [\b] matches backspace
	    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
	        return '"' + escaped.replace(/"/g, '\\"') + '"';
	    };

	    var _reduced = function _reduced(x) {
	        return x && x['@@transducer/reduced'] ? x : {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    /**
	     * An optimized, private array `slice` implementation.
	     *
	     * @private
	     * @param {Arguments|Array} args The array or arguments object to consider.
	     * @param {Number} [from=0] The array index to slice from, inclusive.
	     * @param {Number} [to=args.length] The array index to slice to, exclusive.
	     * @return {Array} A new, sliced array.
	     * @example
	     *
	     *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	     *
	     *      var firstThreeArgs = function(a, b, c, d) {
	     *        return _slice(arguments, 0, 3);
	     *      };
	     *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	     */
	    var _slice = function _slice(args, from, to) {
	        switch (arguments.length) {
	        case 1:
	            return _slice(args, 0, args.length);
	        case 2:
	            return _slice(args, from, args.length);
	        default:
	            var list = [];
	            var idx = 0;
	            var len = Math.max(0, Math.min(args.length, to) - from);
	            while (idx < len) {
	                list[idx] = args[from + idx];
	                idx += 1;
	            }
	            return list;
	        }
	    };

	    /**
	     * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	     */
	    var _toISOString = function () {
	        var pad = function pad(n) {
	            return (n < 10 ? '0' : '') + n;
	        };
	        return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
	            return d.toISOString();
	        } : function _toISOString(d) {
	            return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
	        };
	    }();

	    var _xfBase = {
	        init: function () {
	            return this.xf['@@transducer/init']();
	        },
	        result: function (result) {
	            return this.xf['@@transducer/result'](result);
	        }
	    };

	    var _xwrap = function () {
	        function XWrap(fn) {
	            this.f = fn;
	        }
	        XWrap.prototype['@@transducer/init'] = function () {
	            throw new Error('init not implemented on XWrap');
	        };
	        XWrap.prototype['@@transducer/result'] = function (acc) {
	            return acc;
	        };
	        XWrap.prototype['@@transducer/step'] = function (acc, x) {
	            return this.f(acc, x);
	        };
	        return function _xwrap(fn) {
	            return new XWrap(fn);
	        };
	    }();

	    var _aperture = function _aperture(n, list) {
	        var idx = 0;
	        var limit = list.length - (n - 1);
	        var acc = new Array(limit >= 0 ? limit : 0);
	        while (idx < limit) {
	            acc[idx] = _slice(list, idx, idx + n);
	            idx += 1;
	        }
	        return acc;
	    };

	    var _assign = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

	    /**
	     * Similar to hasMethod, this checks whether a function has a [methodname]
	     * function. If it isn't an array it will execute that function otherwise it
	     * will default to the ramda implementation.
	     *
	     * @private
	     * @param {Function} fn ramda implemtation
	     * @param {String} methodname property to check for a custom implementation
	     * @return {Object} Whatever the return value of the method is.
	     */
	    var _checkForMethod = function _checkForMethod(methodname, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
	        };
	    };

	    /**
	     * Optimized internal one-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry1 = function _curry1(fn) {
	        return function f1(a) {
	            if (arguments.length === 0 || _isPlaceholder(a)) {
	                return f1;
	            } else {
	                return fn.apply(this, arguments);
	            }
	        };
	    };

	    /**
	     * Optimized internal two-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry2 = function _curry2(fn) {
	        return function f2(a, b) {
	            switch (arguments.length) {
	            case 0:
	                return f2;
	            case 1:
	                return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
	                    return fn(a, _b);
	                });
	            default:
	                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
	                    return fn(_a, b);
	                }) : _isPlaceholder(b) ? _curry1(function (_b) {
	                    return fn(a, _b);
	                }) : fn(a, b);
	            }
	        };
	    };

	    /**
	     * Optimized internal three-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry3 = function _curry3(fn) {
	        return function f3(a, b, c) {
	            switch (arguments.length) {
	            case 0:
	                return f3;
	            case 1:
	                return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                });
	            case 2:
	                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
	                    return fn(_a, b, _c);
	                }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                }) : _curry1(function (_c) {
	                    return fn(a, b, _c);
	                });
	            default:
	                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
	                    return fn(_a, _b, c);
	                }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
	                    return fn(_a, b, _c);
	                }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                }) : _isPlaceholder(a) ? _curry1(function (_a) {
	                    return fn(_a, b, c);
	                }) : _isPlaceholder(b) ? _curry1(function (_b) {
	                    return fn(a, _b, c);
	                }) : _isPlaceholder(c) ? _curry1(function (_c) {
	                    return fn(a, b, _c);
	                }) : fn(a, b, c);
	            }
	        };
	    };

	    /**
	     * Internal curryN function.
	     *
	     * @private
	     * @category Function
	     * @param {Number} length The arity of the curried function.
	     * @param {Array} received An array of arguments received thus far.
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curryN = function _curryN(length, received, fn) {
	        return function () {
	            var combined = [];
	            var argsIdx = 0;
	            var left = length;
	            var combinedIdx = 0;
	            while (combinedIdx < received.length || argsIdx < arguments.length) {
	                var result;
	                if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
	                    result = received[combinedIdx];
	                } else {
	                    result = arguments[argsIdx];
	                    argsIdx += 1;
	                }
	                combined[combinedIdx] = result;
	                if (!_isPlaceholder(result)) {
	                    left -= 1;
	                }
	                combinedIdx += 1;
	            }
	            return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	        };
	    };

	    /**
	     * Returns a function that dispatches with different strategies based on the
	     * object in list position (last argument). If it is an array, executes [fn].
	     * Otherwise, if it has a function with [methodname], it will execute that
	     * function (functor case). Otherwise, if it is a transformer, uses transducer
	     * [xf] to return a new transformer (transducer case). Otherwise, it will
	     * default to executing [fn].
	     *
	     * @private
	     * @param {String} methodname property to check for a custom implementation
	     * @param {Function} xf transducer to initialize if object is transformer
	     * @param {Function} fn default ramda implementation
	     * @return {Function} A function that dispatches on object in list position
	     */
	    var _dispatchable = function _dispatchable(methodname, xf, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            if (!_isArray(obj)) {
	                var args = _slice(arguments, 0, length - 1);
	                if (typeof obj[methodname] === 'function') {
	                    return obj[methodname].apply(obj, args);
	                }
	                if (_isTransformer(obj)) {
	                    var transducer = xf.apply(null, args);
	                    return transducer(obj);
	                }
	            }
	            return fn.apply(this, arguments);
	        };
	    };

	    var _dropLastWhile = function dropLastWhile(pred, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && pred(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, 0, idx + 1);
	    };

	    var _xall = function () {
	        function XAll(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.all = true;
	        }
	        XAll.prototype['@@transducer/init'] = _xfBase.init;
	        XAll.prototype['@@transducer/result'] = function (result) {
	            if (this.all) {
	                result = this.xf['@@transducer/step'](result, true);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAll.prototype['@@transducer/step'] = function (result, input) {
	            if (!this.f(input)) {
	                this.all = false;
	                result = _reduced(this.xf['@@transducer/step'](result, false));
	            }
	            return result;
	        };
	        return _curry2(function _xall(f, xf) {
	            return new XAll(f, xf);
	        });
	    }();

	    var _xany = function () {
	        function XAny(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.any = false;
	        }
	        XAny.prototype['@@transducer/init'] = _xfBase.init;
	        XAny.prototype['@@transducer/result'] = function (result) {
	            if (!this.any) {
	                result = this.xf['@@transducer/step'](result, false);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAny.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.any = true;
	                result = _reduced(this.xf['@@transducer/step'](result, true));
	            }
	            return result;
	        };
	        return _curry2(function _xany(f, xf) {
	            return new XAny(f, xf);
	        });
	    }();

	    var _xaperture = function () {
	        function XAperture(n, xf) {
	            this.xf = xf;
	            this.pos = 0;
	            this.full = false;
	            this.acc = new Array(n);
	        }
	        XAperture.prototype['@@transducer/init'] = _xfBase.init;
	        XAperture.prototype['@@transducer/result'] = function (result) {
	            this.acc = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XAperture.prototype['@@transducer/step'] = function (result, input) {
	            this.store(input);
	            return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
	        };
	        XAperture.prototype.store = function (input) {
	            this.acc[this.pos] = input;
	            this.pos += 1;
	            if (this.pos === this.acc.length) {
	                this.pos = 0;
	                this.full = true;
	            }
	        };
	        XAperture.prototype.getCopy = function () {
	            return _concat(_slice(this.acc, this.pos), _slice(this.acc, 0, this.pos));
	        };
	        return _curry2(function _xaperture(n, xf) {
	            return new XAperture(n, xf);
	        });
	    }();

	    var _xdrop = function () {
	        function XDrop(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XDrop.prototype['@@transducer/init'] = _xfBase.init;
	        XDrop.prototype['@@transducer/result'] = _xfBase.result;
	        XDrop.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n > 0) {
	                this.n -= 1;
	                return result;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdrop(n, xf) {
	            return new XDrop(n, xf);
	        });
	    }();

	    var _xdropLast = function () {
	        function XDropLast(n, xf) {
	            this.xf = xf;
	            this.pos = 0;
	            this.full = false;
	            this.acc = new Array(n);
	        }
	        XDropLast.prototype['@@transducer/init'] = _xfBase.init;
	        XDropLast.prototype['@@transducer/result'] = function (result) {
	            this.acc = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.full) {
	                result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
	            }
	            this.store(input);
	            return result;
	        };
	        XDropLast.prototype.store = function (input) {
	            this.acc[this.pos] = input;
	            this.pos += 1;
	            if (this.pos === this.acc.length) {
	                this.pos = 0;
	                this.full = true;
	            }
	        };
	        return _curry2(function _xdropLast(n, xf) {
	            return new XDropLast(n, xf);
	        });
	    }();

	    var _xdropRepeatsWith = function () {
	        function XDropRepeatsWith(pred, xf) {
	            this.xf = xf;
	            this.pred = pred;
	            this.lastValue = undefined;
	            this.seenFirstValue = false;
	        }
	        XDropRepeatsWith.prototype['@@transducer/init'] = function () {
	            return this.xf['@@transducer/init']();
	        };
	        XDropRepeatsWith.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
	            var sameAsLast = false;
	            if (!this.seenFirstValue) {
	                this.seenFirstValue = true;
	            } else if (this.pred(this.lastValue, input)) {
	                sameAsLast = true;
	            }
	            this.lastValue = input;
	            return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropRepeatsWith(pred, xf) {
	            return new XDropRepeatsWith(pred, xf);
	        });
	    }();

	    var _xdropWhile = function () {
	        function XDropWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XDropWhile.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f) {
	                if (this.f(input)) {
	                    return result;
	                }
	                this.f = null;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropWhile(f, xf) {
	            return new XDropWhile(f, xf);
	        });
	    }();

	    var _xfilter = function () {
	        function XFilter(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFilter.prototype['@@transducer/init'] = _xfBase.init;
	        XFilter.prototype['@@transducer/result'] = _xfBase.result;
	        XFilter.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	        };
	        return _curry2(function _xfilter(f, xf) {
	            return new XFilter(f, xf);
	        });
	    }();

	    var _xfind = function () {
	        function XFind(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.found = false;
	        }
	        XFind.prototype['@@transducer/init'] = _xfBase.init;
	        XFind.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, void 0);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFind.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, input));
	            }
	            return result;
	        };
	        return _curry2(function _xfind(f, xf) {
	            return new XFind(f, xf);
	        });
	    }();

	    var _xfindIndex = function () {
	        function XFindIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.found = false;
	        }
	        XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindIndex.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, -1);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFindIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, this.idx));
	            }
	            return result;
	        };
	        return _curry2(function _xfindIndex(f, xf) {
	            return new XFindIndex(f, xf);
	        });
	    }();

	    var _xfindLast = function () {
	        function XFindLast(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFindLast.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLast.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
	        };
	        XFindLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.last = input;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLast(f, xf) {
	            return new XFindLast(f, xf);
	        });
	    }();

	    var _xfindLastIndex = function () {
	        function XFindLastIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.lastIdx = -1;
	        }
	        XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLastIndex.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
	        };
	        XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.lastIdx = this.idx;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLastIndex(f, xf) {
	            return new XFindLastIndex(f, xf);
	        });
	    }();

	    var _xmap = function () {
	        function XMap(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XMap.prototype['@@transducer/init'] = _xfBase.init;
	        XMap.prototype['@@transducer/result'] = _xfBase.result;
	        XMap.prototype['@@transducer/step'] = function (result, input) {
	            return this.xf['@@transducer/step'](result, this.f(input));
	        };
	        return _curry2(function _xmap(f, xf) {
	            return new XMap(f, xf);
	        });
	    }();

	    var _xtake = function () {
	        function XTake(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XTake.prototype['@@transducer/init'] = _xfBase.init;
	        XTake.prototype['@@transducer/result'] = _xfBase.result;
	        XTake.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n === 0) {
	                return _reduced(result);
	            } else {
	                this.n -= 1;
	                return this.xf['@@transducer/step'](result, input);
	            }
	        };
	        return _curry2(function _xtake(n, xf) {
	            return new XTake(n, xf);
	        });
	    }();

	    var _xtakeWhile = function () {
	        function XTakeWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
	        };
	        return _curry2(function _xtakeWhile(f, xf) {
	            return new XTakeWhile(f, xf);
	        });
	    }();

	    /**
	     * Adds two values.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Number}
	     * @see R.subtract
	     * @example
	     *
	     *      R.add(2, 3);       //=>  5
	     *      R.add(7)(10);      //=> 17
	     */
	    var add = _curry2(function add(a, b) {
	        return Number(a) + Number(b);
	    });

	    /**
	     * Applies a function to the value at the given index of an array, returning a
	     * new copy of the array with the element at the given index replaced with the
	     * result of the function application.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig (a -> a) -> Number -> [a] -> [a]
	     * @param {Function} fn The function to apply.
	     * @param {Number} idx The index.
	     * @param {Array|Arguments} list An array-like object whose value
	     *        at the supplied index will be replaced.
	     * @return {Array} A copy of the supplied array-like object with
	     *         the element at index `idx` replaced with the value
	     *         returned by applying `fn` to the existing element.
	     * @see R.update
	     * @example
	     *
	     *      R.adjust(R.add(10), 1, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.adjust(R.add(10))(1)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var adjust = _curry3(function adjust(fn, idx, list) {
	        if (idx >= list.length || idx < -list.length) {
	            return list;
	        }
	        var start = idx < 0 ? list.length : 0;
	        var _idx = start + idx;
	        var _list = _concat(list);
	        _list[_idx] = fn(list[_idx]);
	        return _list;
	    });

	    /**
	     * Returns `true` if all elements of the list match the predicate, `false` if
	     * there are any that don't.
	     *
	     * Dispatches to the `all` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	     *         otherwise.
	     * @see R.any, R.none, R.transduce
	     * @example
	     *
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      var lessThan3 = R.flip(R.lt)(3);
	     *      R.all(lessThan2)([1, 2]); //=> false
	     *      R.all(lessThan3)([1, 2]); //=> true
	     */
	    var all = _curry2(_dispatchable('all', _xall, function all(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (!fn(list[idx])) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    }));

	    /**
	     * Returns a function that always returns the given value. Note that for
	     * non-primitives the value returned is a reference to the original value.
	     *
	     * This function is known as `const`, `constant`, or `K` (for K combinator) in
	     * other languages and libraries.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig a -> (* -> a)
	     * @param {*} val The value to wrap in a function
	     * @return {Function} A Function :: * -> val.
	     * @example
	     *
	     *      var t = R.always('Tee');
	     *      t(); //=> 'Tee'
	     */
	    var always = _curry1(function always(val) {
	        return function () {
	            return val;
	        };
	    });

	    /**
	     * Returns `true` if both arguments are `true`; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {Boolean} a A boolean value
	     * @param {Boolean} b A boolean value
	     * @return {Boolean} `true` if both arguments are `true`, `false` otherwise
	     * @see R.both
	     * @example
	     *
	     *      R.and(true, true); //=> true
	     *      R.and(true, false); //=> false
	     *      R.and(false, true); //=> false
	     *      R.and(false, false); //=> false
	     */
	    var and = _curry2(function and(a, b) {
	        return a && b;
	    });

	    /**
	     * Returns `true` if at least one of elements of the list match the predicate,
	     * `false` otherwise.
	     *
	     * Dispatches to the `any` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	     *         otherwise.
	     * @see R.all, R.none, R.transduce
	     * @example
	     *
	     *      var lessThan0 = R.flip(R.lt)(0);
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      R.any(lessThan0)([1, 2]); //=> false
	     *      R.any(lessThan2)([1, 2]); //=> true
	     */
	    var any = _curry2(_dispatchable('any', _xany, function any(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (fn(list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    }));

	    /**
	     * Returns a new list, composed of n-tuples of consecutive elements If `n` is
	     * greater than the length of the list, an empty list is returned.
	     *
	     * Dispatches to the `aperture` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @param {Number} n The size of the tuples to create
	     * @param {Array} list The list to split into `n`-tuples
	     * @return {Array} The new list.
	     * @see R.transduce
	     * @example
	     *
	     *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
	     *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
	     *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
	     */
	    var aperture = _curry2(_dispatchable('aperture', _xaperture, _aperture));

	    /**
	     * Returns a new list containing the contents of the given list, followed by
	     * the given element.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The element to add to the end of the new list.
	     * @param {Array} list The list whose contents will be added to the beginning of the output
	     *        list.
	     * @return {Array} A new list containing the contents of the old list followed by `el`.
	     * @see R.prepend
	     * @example
	     *
	     *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
	     *      R.append('tests', []); //=> ['tests']
	     *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
	     */
	    var append = _curry2(function append(el, list) {
	        return _concat(list, [el]);
	    });

	    /**
	     * Applies function `fn` to the argument list `args`. This is useful for
	     * creating a fixed-arity function from a variadic function. `fn` should be a
	     * bound function if context is significant.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig (*... -> a) -> [*] -> a
	     * @param {Function} fn
	     * @param {Array} args
	     * @return {*}
	     * @see R.call, R.unapply
	     * @example
	     *
	     *      var nums = [1, 2, 3, -99, 42, 6, 7];
	     *      R.apply(Math.max, nums); //=> 42
	     */
	    var apply = _curry2(function apply(fn, args) {
	        return fn.apply(this, args);
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the specified
	     * property with the given value. Note that this copies and flattens prototype
	     * properties onto the new object as well. All non-primitive properties are
	     * copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig String -> a -> {k: v} -> {k: v}
	     * @param {String} prop the property name to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except for the specified property.
	     * @see R.dissoc
	     * @example
	     *
	     *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	     */
	    var assoc = _curry3(function assoc(prop, val, obj) {
	        var result = {};
	        for (var p in obj) {
	            result[p] = obj[p];
	        }
	        result[prop] = val;
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the nodes required
	     * to create the given path, and placing the specific value at the tail end of
	     * that path. Note that this copies and flattens prototype properties onto the
	     * new object as well. All non-primitive properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig [String] -> a -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except along the specified path.
	     * @see R.dissocPath
	     * @example
	     *
	     *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	     */
	    var assocPath = _curry3(function assocPath(path, val, obj) {
	        switch (path.length) {
	        case 0:
	            return val;
	        case 1:
	            return assoc(path[0], val, obj);
	        default:
	            return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
	        }
	    });

	    /**
	     * Creates a function that is bound to a context.
	     * Note: `R.bind` does not provide the additional argument-binding capabilities of
	     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Function
	     * @category Object
	     * @sig (* -> *) -> {*} -> (* -> *)
	     * @param {Function} fn The function to bind to context
	     * @param {Object} thisObj The context to bind `fn` to
	     * @return {Function} A function that will execute in the context of `thisObj`.
	     * @see R.partial
	     */
	    var bind = _curry2(function bind(fn, thisObj) {
	        return _arity(fn.length, function () {
	            return fn.apply(thisObj, arguments);
	        });
	    });

	    /**
	     * Restricts a number to be within a range.
	     *
	     * Also works for other ordered types such as Strings and Dates.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a -> a
	     * @param {Number} minimum number
	     * @param {Number} maximum number
	     * @param {Number} value to be clamped
	     * @return {Number} Returns the clamped value
	     * @example
	     *
	     *      R.clamp(1, 10, -1) // => 1
	     *      R.clamp(1, 10, 11) // => 10
	     *      R.clamp(1, 10, 4)  // => 4
	     */
	    var clamp = _curry3(function clamp(min, max, value) {
	        if (min > max) {
	            throw new Error('min must not be greater than max in clamp(min, max, value)');
	        }
	        return value < min ? min : value > max ? max : value;
	    });

	    /**
	     * Makes a comparator function out of a function that reports whether the first
	     * element is less than the second.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a, b -> Boolean) -> (a, b -> Number)
	     * @param {Function} pred A predicate function of arity two.
	     * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`.
	     * @example
	     *
	     *      var cmp = R.comparator((a, b) => a.age < b.age);
	     *      var people = [
	     *        // ...
	     *      ];
	     *      R.sort(cmp, people);
	     */
	    var comparator = _curry1(function comparator(pred) {
	        return function (a, b) {
	            return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
	        };
	    });

	    /**
	     * Returns a curried equivalent of the provided function, with the specified
	     * arity. The curried function has two unusual capabilities. First, its
	     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	     * following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	     * following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @since v0.5.0
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curry
	     * @example
	     *
	     *      var sumArgs = (...args) => R.sum(args);
	     *
	     *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curryN = _curry2(function curryN(length, fn) {
	        if (length === 1) {
	            return _curry1(fn);
	        }
	        return _arity(length, _curryN(length, [], fn));
	    });

	    /**
	     * Decrements its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.inc
	     * @example
	     *
	     *      R.dec(42); //=> 41
	     */
	    var dec = add(-1);

	    /**
	     * Returns the second argument if it is not `null`, `undefined` or `NaN`
	     * otherwise the first argument is returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Logic
	     * @sig a -> b -> a | b
	     * @param {a} val The default value.
	     * @param {b} val The value to return if it is not null or undefined
	     * @return {*} The the second value or the default value
	     * @example
	     *
	     *      var defaultTo42 = R.defaultTo(42);
	     *
	     *      defaultTo42(null);  //=> 42
	     *      defaultTo42(undefined);  //=> 42
	     *      defaultTo42('Ramda');  //=> 'Ramda'
	     *      defaultTo42(parseInt('string')); //=> 42
	     */
	    var defaultTo = _curry2(function defaultTo(d, v) {
	        return v == null || v !== v ? d : v;
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not
	     * contained in the second list. Duplication is determined according to the
	     * value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.difference
	     * @example
	     *
	     *      var cmp = (x, y) => x.a === y.a;
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
	     *      var l2 = [{a: 3}, {a: 4}];
	     *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
	     */
	    var differenceWith = _curry3(function differenceWith(pred, first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
	                out.push(first[idx]);
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object that does not contain a `prop` property.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Object
	     * @sig String -> {k: v} -> {k: v}
	     * @param {String} prop the name of the property to dissociate
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original but without the specified property
	     * @see R.assoc
	     * @example
	     *
	     *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	     */
	    var dissoc = _curry2(function dissoc(prop, obj) {
	        var result = {};
	        for (var p in obj) {
	            if (p !== prop) {
	                result[p] = obj[p];
	            }
	        }
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, omitting the property at the given path.
	     * Note that this copies and flattens prototype properties onto the new object
	     * as well. All non-primitive properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.11.0
	     * @category Object
	     * @sig [String] -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object without the property at path
	     * @see R.assocPath
	     * @example
	     *
	     *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	     */
	    var dissocPath = _curry2(function dissocPath(path, obj) {
	        switch (path.length) {
	        case 0:
	            return obj;
	        case 1:
	            return dissoc(path[0], obj);
	        default:
	            var head = path[0];
	            var tail = _slice(path, 1);
	            return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
	        }
	    });

	    /**
	     * Divides two numbers. Equivalent to `a / b`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a / b`.
	     * @see R.multiply
	     * @example
	     *
	     *      R.divide(71, 100); //=> 0.71
	     *
	     *      var half = R.divide(R.__, 2);
	     *      half(42); //=> 21
	     *
	     *      var reciprocal = R.divide(1);
	     *      reciprocal(4);   //=> 0.25
	     */
	    var divide = _curry2(function divide(a, b) {
	        return a / b;
	    });

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing
	     * each value to the supplied predicate function, skipping elements while the
	     * predicate function returns `true`. The predicate function is passed one
	     * argument: *(value)*.
	     *
	     * Dispatches to the `dropWhile` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeWhile, R.transduce, R.addIndex
	     * @example
	     *
	     *      var lteTwo = x => x <= 2;
	     *
	     *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
	     */
	    var dropWhile = _curry2(_dispatchable('dropWhile', _xdropWhile, function dropWhile(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len && pred(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, idx);
	    }));

	    /**
	     * Returns the empty value of its argument's type. Ramda defines the empty
	     * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
	     * types are supported if they define `<Type>.empty` and/or
	     * `<Type>.prototype.empty`.
	     *
	     * Dispatches to the `empty` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig a -> a
	     * @param {*} x
	     * @return {*}
	     * @example
	     *
	     *      R.empty(Just(42));      //=> Nothing()
	     *      R.empty([1, 2, 3]);     //=> []
	     *      R.empty('unicorns');    //=> ''
	     *      R.empty({x: 1, y: 2});  //=> {}
	     */
	    // else
	    var empty = _curry1(function empty(x) {
	        return x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
	            return arguments;
	        }() : // else
	        void 0;
	    });

	    /**
	     * Creates a new object by recursively evolving a shallow copy of `object`,
	     * according to the `transformation` functions. All non-primitive properties
	     * are copied by reference.
	     *
	     * A `transformation` function will not be invoked if its corresponding key
	     * does not exist in the evolved object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {k: (v -> v)} -> {k: v} -> {k: v}
	     * @param {Object} transformations The object specifying transformation functions to apply
	     *        to the object.
	     * @param {Object} object The object to be transformed.
	     * @return {Object} The transformed object.
	     * @example
	     *
	     *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
	     *      var transformations = {
	     *        firstName: R.trim,
	     *        lastName: R.trim, // Will not get invoked.
	     *        data: {elapsed: R.add(1), remaining: R.add(-1)}
	     *      };
	     *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
	     */
	    var evolve = _curry2(function evolve(transformations, object) {
	        var result = {};
	        var transformation, key, type;
	        for (key in object) {
	            transformation = transformations[key];
	            type = typeof transformation;
	            result[key] = type === 'function' ? transformation(object[key]) : type === 'object' ? evolve(transformations[key], object[key]) : object[key];
	        }
	        return result;
	    });

	    /**
	     * Returns the first element of the list which matches the predicate, or
	     * `undefined` if no element matches.
	     *
	     * Dispatches to the `find` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     *        desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	     *      R.find(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var find = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx += 1;
	        }
	    }));

	    /**
	     * Returns the index of the first element of the list which matches the
	     * predicate, or `-1` if no element matches.
	     *
	     * Dispatches to the `findIndex` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
	     *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findIndex = _curry2(_dispatchable('findIndex', _xfindIndex, function findIndex(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    }));

	    /**
	     * Returns the last element of the list which matches the predicate, or
	     * `undefined` if no element matches.
	     *
	     * Dispatches to the `findLast` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
	     *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var findLast = _curry2(_dispatchable('findLast', _xfindLast, function findLast(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx -= 1;
	        }
	    }));

	    /**
	     * Returns the index of the last element of the list which matches the
	     * predicate, or `-1` if no element matches.
	     *
	     * Dispatches to the `findLastIndex` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
	     *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findLastIndex = _curry2(_dispatchable('findLastIndex', _xfindLastIndex, function findLastIndex(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx -= 1;
	        }
	        return -1;
	    }));

	    /**
	     * Iterate over an input `list`, calling a provided function `fn` for each
	     * element in the list.
	     *
	     * `fn` receives one argument: *(value)*.
	     *
	     * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.forEach` method. For more
	     * details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	     *
	     * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
	     * the original array. In some libraries this function is named `each`.
	     *
	     * Dispatches to the `forEach` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> *) -> [a] -> [a]
	     * @param {Function} fn The function to invoke. Receives one argument, `value`.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} The original list.
	     * @see R.addIndex
	     * @example
	     *
	     *      var printXPlusFive = x => console.log(x + 5);
	     *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	     *      //-> 6
	     *      //-> 7
	     *      //-> 8
	     */
	    var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            fn(list[idx]);
	            idx += 1;
	        }
	        return list;
	    }));

	    /**
	     * Creates a new object out of a list key-value pairs.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [[k,v]] -> {k: v}
	     * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	     * @return {Object} The object made by pairing up `keys` and `values`.
	     * @see R.toPairs, R.pair
	     * @example
	     *
	     *      R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	     */
	    var fromPairs = _curry1(function fromPairs(pairs) {
	        var idx = 0;
	        var len = pairs.length;
	        var out = {};
	        while (idx < len) {
	            if (_isArray(pairs[idx]) && pairs[idx].length) {
	                out[pairs[idx][0]] = pairs[idx][1];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Takes a list and returns a list of lists where each sublist's elements are
	     * all "equal" according to the provided equality function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.21.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [[a]]
	     * @param {Function} fn Function for determining whether two given (adjacent)
	     *        elements should be in the same group
	     * @param {Array} list The array to group. Also accepts a string, which will be
	     *        treated as a list of characters.
	     * @return {List} A list that contains sublists of equal elements,
	     *         whose concatenations is equal to the original list.
	     * @example
	     *
	     *    groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	     *    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]
	     *
	     *    groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	     *    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
	     *
	     *    R.groupWith(R.eqBy(isVowel), 'aestiou')
	     *    // ['ae', 'st', 'iou']
	     */
	    var groupWith = _curry2(function (fn, list) {
	        var res = [];
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            var nextidx = idx + 1;
	            while (nextidx < len && fn(list[idx], list[nextidx])) {
	                nextidx += 1;
	            }
	            res.push(list.slice(idx, nextidx));
	            idx = nextidx;
	        }
	        return res;
	    });

	    /**
	     * Returns `true` if the first argument is greater than the second; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.lt
	     * @example
	     *
	     *      R.gt(2, 1); //=> true
	     *      R.gt(2, 2); //=> false
	     *      R.gt(2, 3); //=> false
	     *      R.gt('a', 'z'); //=> false
	     *      R.gt('z', 'a'); //=> true
	     */
	    var gt = _curry2(function gt(a, b) {
	        return a > b;
	    });

	    /**
	     * Returns `true` if the first argument is greater than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.lte
	     * @example
	     *
	     *      R.gte(2, 1); //=> true
	     *      R.gte(2, 2); //=> true
	     *      R.gte(2, 3); //=> false
	     *      R.gte('a', 'z'); //=> false
	     *      R.gte('z', 'a'); //=> true
	     */
	    var gte = _curry2(function gte(a, b) {
	        return a >= b;
	    });

	    /**
	     * Returns whether or not an object has an own property with the specified name
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      var hasName = R.has('name');
	     *      hasName({name: 'alice'});   //=> true
	     *      hasName({name: 'bob'});     //=> true
	     *      hasName({});                //=> false
	     *
	     *      var point = {x: 0, y: 0};
	     *      var pointHas = R.has(R.__, point);
	     *      pointHas('x');  //=> true
	     *      pointHas('y');  //=> true
	     *      pointHas('z');  //=> false
	     */
	    var has = _curry2(_has);

	    /**
	     * Returns whether or not an object or its prototype chain has a property with
	     * the specified name
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      function Rectangle(width, height) {
	     *        this.width = width;
	     *        this.height = height;
	     *      }
	     *      Rectangle.prototype.area = function() {
	     *        return this.width * this.height;
	     *      };
	     *
	     *      var square = new Rectangle(2, 2);
	     *      R.hasIn('width', square);  //=> true
	     *      R.hasIn('area', square);  //=> true
	     */
	    var hasIn = _curry2(function hasIn(prop, obj) {
	        return prop in obj;
	    });

	    /**
	     * Returns true if its arguments are identical, false otherwise. Values are
	     * identical if they reference the same memory. `NaN` is identical to `NaN`;
	     * `0` and `-0` are not identical.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Relation
	     * @sig a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      var o = {};
	     *      R.identical(o, o); //=> true
	     *      R.identical(1, 1); //=> true
	     *      R.identical(1, '1'); //=> false
	     *      R.identical([], []); //=> false
	     *      R.identical(0, -0); //=> false
	     *      R.identical(NaN, NaN); //=> true
	     */
	    // SameValue algorithm
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Step 6.a: NaN == NaN
	    var identical = _curry2(function identical(a, b) {
	        // SameValue algorithm
	        if (a === b) {
	            // Steps 1-5, 7-10
	            // Steps 6.b-6.e: +0 != -0
	            return a !== 0 || 1 / a === 1 / b;
	        } else {
	            // Step 6.a: NaN == NaN
	            return a !== a && b !== b;
	        }
	    });

	    /**
	     * A function that does nothing but return the parameter supplied to it. Good
	     * as a default or placeholder function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig a -> a
	     * @param {*} x The value to return.
	     * @return {*} The input value, `x`.
	     * @example
	     *
	     *      R.identity(1); //=> 1
	     *
	     *      var obj = {};
	     *      R.identity(obj) === obj; //=> true
	     */
	    var identity = _curry1(_identity);

	    /**
	     * Creates a function that will process either the `onTrue` or the `onFalse`
	     * function depending upon the result of the `condition` predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	     * @param {Function} condition A predicate function
	     * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	     * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	     * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	     *                    function depending upon the result of the `condition` predicate.
	     * @see R.unless, R.when
	     * @example
	     *
	     *      var incCount = R.ifElse(
	     *        R.has('count'),
	     *        R.over(R.lensProp('count'), R.inc),
	     *        R.assoc('count', 1)
	     *      );
	     *      incCount({});           //=> { count: 1 }
	     *      incCount({ count: 1 }); //=> { count: 2 }
	     */
	    var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
	        return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
	            return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	        });
	    });

	    /**
	     * Increments its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.dec
	     * @example
	     *
	     *      R.inc(42); //=> 43
	     */
	    var inc = add(1);

	    /**
	     * Inserts the supplied element into the list, at index `index`. _Note that
	     * this is not destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.2
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} index The position to insert the element
	     * @param {*} elt The element to insert into the Array
	     * @param {Array} list The list to insert into
	     * @return {Array} A new Array with `elt` inserted at `index`.
	     * @example
	     *
	     *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
	     */
	    var insert = _curry3(function insert(idx, elt, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        var result = _slice(list);
	        result.splice(idx, 0, elt);
	        return result;
	    });

	    /**
	     * Inserts the sub-list into the list, at index `index`. _Note that this is not
	     * destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig Number -> [a] -> [a] -> [a]
	     * @param {Number} index The position to insert the sub-list
	     * @param {Array} elts The sub-list to insert into the Array
	     * @param {Array} list The list to insert the sub-list into
	     * @return {Array} A new Array with `elts` inserted starting at `index`.
	     * @example
	     *
	     *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
	     */
	    var insertAll = _curry3(function insertAll(idx, elts, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
	    });

	    /**
	     * Creates a new list with the separator interposed between elements.
	     *
	     * Dispatches to the `intersperse` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} separator The element to add to the list.
	     * @param {Array} list The list to be interposed.
	     * @return {Array} The new list.
	     * @example
	     *
	     *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
	     */
	    var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
	        var out = [];
	        var idx = 0;
	        var length = list.length;
	        while (idx < length) {
	            if (idx === length - 1) {
	                out.push(list[idx]);
	            } else {
	                out.push(list[idx], separator);
	            }
	            idx += 1;
	        }
	        return out;
	    }));

	    /**
	     * See if an object (`val`) is an instance of the supplied constructor. This
	     * function will check up the inheritance chain, if any.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Type
	     * @sig (* -> {*}) -> a -> Boolean
	     * @param {Object} ctor A constructor
	     * @param {*} val The value to test
	     * @return {Boolean}
	     * @example
	     *
	     *      R.is(Object, {}); //=> true
	     *      R.is(Number, 1); //=> true
	     *      R.is(Object, 1); //=> false
	     *      R.is(String, 's'); //=> true
	     *      R.is(String, new String('')); //=> true
	     *      R.is(Object, new String('')); //=> true
	     *      R.is(Object, 's'); //=> false
	     *      R.is(Number, {}); //=> false
	     */
	    var is = _curry2(function is(Ctor, val) {
	        return val != null && val.constructor === Ctor || val instanceof Ctor;
	    });

	    /**
	     * Tests whether or not an object is similar to an array.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.5.0
	     * @category Type
	     * @category List
	     * @sig * -> Boolean
	     * @param {*} x The object to test.
	     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	     * @example
	     *
	     *      R.isArrayLike([]); //=> true
	     *      R.isArrayLike(true); //=> false
	     *      R.isArrayLike({}); //=> false
	     *      R.isArrayLike({length: 10}); //=> false
	     *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	     */
	    var isArrayLike = _curry1(function isArrayLike(x) {
	        if (_isArray(x)) {
	            return true;
	        }
	        if (!x) {
	            return false;
	        }
	        if (typeof x !== 'object') {
	            return false;
	        }
	        if (x instanceof String) {
	            return false;
	        }
	        if (x.nodeType === 1) {
	            return !!x.length;
	        }
	        if (x.length === 0) {
	            return true;
	        }
	        if (x.length > 0) {
	            return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	        }
	        return false;
	    });

	    /**
	     * Checks if the input value is `null` or `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Type
	     * @sig * -> Boolean
	     * @param {*} x The value to test.
	     * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	     * @example
	     *
	     *      R.isNil(null); //=> true
	     *      R.isNil(undefined); //=> true
	     *      R.isNil(0); //=> false
	     *      R.isNil([]); //=> false
	     */
	    var isNil = _curry1(function isNil(x) {
	        return x == null;
	    });

	    /**
	     * Returns a list containing the names of all the enumerable own properties of
	     * the supplied object.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own properties.
	     * @example
	     *
	     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	     */
	    // cover IE < 9 keys issues
	    // Safari bug
	    var keys = function () {
	        // cover IE < 9 keys issues
	        var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	        var nonEnumerableProps = [
	            'constructor',
	            'valueOf',
	            'isPrototypeOf',
	            'toString',
	            'propertyIsEnumerable',
	            'hasOwnProperty',
	            'toLocaleString'
	        ];
	        // Safari bug
	        var hasArgsEnumBug = function () {
	            'use strict';
	            return arguments.propertyIsEnumerable('length');
	        }();
	        var contains = function contains(list, item) {
	            var idx = 0;
	            while (idx < list.length) {
	                if (list[idx] === item) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        };
	        return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
	            return Object(obj) !== obj ? [] : Object.keys(obj);
	        }) : _curry1(function keys(obj) {
	            if (Object(obj) !== obj) {
	                return [];
	            }
	            var prop, nIdx;
	            var ks = [];
	            var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	            for (prop in obj) {
	                if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	                    ks[ks.length] = prop;
	                }
	            }
	            if (hasEnumBug) {
	                nIdx = nonEnumerableProps.length - 1;
	                while (nIdx >= 0) {
	                    prop = nonEnumerableProps[nIdx];
	                    if (_has(prop, obj) && !contains(ks, prop)) {
	                        ks[ks.length] = prop;
	                    }
	                    nIdx -= 1;
	                }
	            }
	            return ks;
	        });
	    }();

	    /**
	     * Returns a list containing the names of all the properties of the supplied
	     * object, including prototype properties.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.keysIn(f); //=> ['x', 'y']
	     */
	    var keysIn = _curry1(function keysIn(obj) {
	        var prop;
	        var ks = [];
	        for (prop in obj) {
	            ks[ks.length] = prop;
	        }
	        return ks;
	    });

	    /**
	     * Returns the number of elements in the array by returning `list.length`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [a] -> Number
	     * @param {Array} list The array to inspect.
	     * @return {Number} The length of the array.
	     * @example
	     *
	     *      R.length([]); //=> 0
	     *      R.length([1, 2, 3]); //=> 3
	     */
	    var length = _curry1(function length(list) {
	        return list != null && is(Number, list.length) ? list.length : NaN;
	    });

	    /**
	     * Returns `true` if the first argument is less than the second; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.gt
	     * @example
	     *
	     *      R.lt(2, 1); //=> false
	     *      R.lt(2, 2); //=> false
	     *      R.lt(2, 3); //=> true
	     *      R.lt('a', 'z'); //=> true
	     *      R.lt('z', 'a'); //=> false
	     */
	    var lt = _curry2(function lt(a, b) {
	        return a < b;
	    });

	    /**
	     * Returns `true` if the first argument is less than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.gte
	     * @example
	     *
	     *      R.lte(2, 1); //=> false
	     *      R.lte(2, 2); //=> true
	     *      R.lte(2, 3); //=> true
	     *      R.lte('a', 'z'); //=> true
	     *      R.lte('z', 'a'); //=> false
	     */
	    var lte = _curry2(function lte(a, b) {
	        return a <= b;
	    });

	    /**
	     * The mapAccum function behaves like a combination of map and reduce; it
	     * applies a function to each element of a list, passing an accumulating
	     * parameter from left to right, and returning a final value of this
	     * accumulator together with the new list.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should
	     * return a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var appender = (a, b) => [a + b, a + b];
	     *
	     *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
	     */
	    var mapAccum = _curry3(function mapAccum(fn, acc, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        var tuple = [acc];
	        while (idx < len) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx += 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * The mapAccumRight function behaves like a combination of map and reduce; it
	     * applies a function to each element of a list, passing an accumulating
	     * parameter from right to left, and returning a final value of this
	     * accumulator together with the new list.
	     *
	     * Similar to `mapAccum`, except moves through the input list from the right to
	     * the left.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should
	     * return a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var append = (a, b) => [a + b, a + b];
	     *
	     *      R.mapAccumRight(append, 0, digits); //=> ['04321', ['04321', '0432', '043', '04']]
	     */
	    var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
	        var idx = list.length - 1;
	        var result = [];
	        var tuple = [acc];
	        while (idx >= 0) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx -= 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * Tests a regular expression against a String. Note that this function will
	     * return an empty array when there are no matches. This differs from
	     * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
	     * which returns `null` when there are no matches.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category String
	     * @sig RegExp -> String -> [String | Undefined]
	     * @param {RegExp} rx A regular expression.
	     * @param {String} str The string to match against
	     * @return {Array} The list of matches or empty array.
	     * @see R.test
	     * @example
	     *
	     *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
	     *      R.match(/a/, 'b'); //=> []
	     *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
	     */
	    var match = _curry2(function match(rx, str) {
	        return str.match(rx) || [];
	    });

	    /**
	     * mathMod behaves like the modulo operator should mathematically, unlike the
	     * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
	     * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
	     * when the modulus is zero or negative.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} m The dividend.
	     * @param {Number} p the modulus.
	     * @return {Number} The result of `b mod a`.
	     * @example
	     *
	     *      R.mathMod(-17, 5);  //=> 3
	     *      R.mathMod(17, 5);   //=> 2
	     *      R.mathMod(17, -5);  //=> NaN
	     *      R.mathMod(17, 0);   //=> NaN
	     *      R.mathMod(17.2, 5); //=> NaN
	     *      R.mathMod(17, 5.3); //=> NaN
	     *
	     *      var clock = R.mathMod(R.__, 12);
	     *      clock(15); //=> 3
	     *      clock(24); //=> 0
	     *
	     *      var seventeenMod = R.mathMod(17);
	     *      seventeenMod(3);  //=> 2
	     *      seventeenMod(4);  //=> 1
	     *      seventeenMod(10); //=> 7
	     */
	    var mathMod = _curry2(function mathMod(m, p) {
	        if (!_isInteger(m)) {
	            return NaN;
	        }
	        if (!_isInteger(p) || p < 1) {
	            return NaN;
	        }
	        return (m % p + p) % p;
	    });

	    /**
	     * Returns the larger of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.maxBy, R.min
	     * @example
	     *
	     *      R.max(789, 123); //=> 789
	     *      R.max('a', 'b'); //=> 'b'
	     */
	    var max = _curry2(function max(a, b) {
	        return b > a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces the
	     * larger result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.max, R.minBy
	     * @example
	     *
	     *      //  square :: Number -> Number
	     *      var square = n => n * n;
	     *
	     *      R.maxBy(square, -3, 2); //=> -3
	     *
	     *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
	     *      R.reduce(R.maxBy(square), 0, []); //=> 0
	     */
	    var maxBy = _curry3(function maxBy(f, a, b) {
	        return f(b) > f(a) ? b : a;
	    });

	    /**
	     * Create a new object with the own properties of the first object merged with
	     * the own properties of the second object. If a key exists in both objects,
	     * the value from the second object will be used.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> {k: v} -> {k: v}
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.mergeWith, R.mergeWithKey
	     * @example
	     *
	     *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	     *      //=> { 'name': 'fred', 'age': 40 }
	     *
	     *      var resetToDefault = R.merge(R.__, {x: 0});
	     *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	     */
	    var merge = _curry2(function merge(l, r) {
	        return _assign({}, l, r);
	    });

	    /**
	     * Merges a list of objects together into one object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig [{k: v}] -> {k: v}
	     * @param {Array} list An array of objects
	     * @return {Object} A merged object.
	     * @see R.reduce
	     * @example
	     *
	     *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	     *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	     */
	    var mergeAll = _curry1(function mergeAll(list) {
	        return _assign.apply(null, [{}].concat(list));
	    });

	    /**
	     * Creates a new object with the own properties of the two provided objects. If
	     * a key exists in both objects, the provided function is applied to the key
	     * and the values associated with the key in each object, with the result being
	     * used as the value associated with the key in the returned object. The key
	     * will be excluded from the returned object if the resulting value is
	     * `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
	     * @param {Function} fn
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.merge, R.mergeWith
	     * @example
	     *
	     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
	     *      R.mergeWithKey(concatValues,
	     *                     { a: true, thing: 'foo', values: [10, 20] },
	     *                     { b: true, thing: 'bar', values: [15, 35] });
	     *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
	     */
	    var mergeWithKey = _curry3(function mergeWithKey(fn, l, r) {
	        var result = {};
	        var k;
	        for (k in l) {
	            if (_has(k, l)) {
	                result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
	            }
	        }
	        for (k in r) {
	            if (_has(k, r) && !_has(k, result)) {
	                result[k] = r[k];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the smaller of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.minBy, R.max
	     * @example
	     *
	     *      R.min(789, 123); //=> 123
	     *      R.min('a', 'b'); //=> 'a'
	     */
	    var min = _curry2(function min(a, b) {
	        return b < a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces the
	     * smaller result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.min, R.maxBy
	     * @example
	     *
	     *      //  square :: Number -> Number
	     *      var square = n => n * n;
	     *
	     *      R.minBy(square, -3, 2); //=> 2
	     *
	     *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
	     *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
	     */
	    var minBy = _curry3(function minBy(f, a, b) {
	        return f(b) < f(a) ? b : a;
	    });

	    /**
	     * Divides the second parameter by the first and returns the remainder. Note
	     * that this function preserves the JavaScript-style behavior for modulo. For
	     * mathematical modulo see `mathMod`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The value to the divide.
	     * @param {Number} b The pseudo-modulus
	     * @return {Number} The result of `b % a`.
	     * @see R.mathMod
	     * @example
	     *
	     *      R.modulo(17, 3); //=> 2
	     *      // JS behavior:
	     *      R.modulo(-17, 3); //=> -2
	     *      R.modulo(17, -3); //=> 2
	     *
	     *      var isOdd = R.modulo(R.__, 2);
	     *      isOdd(42); //=> 0
	     *      isOdd(21); //=> 1
	     */
	    var modulo = _curry2(function modulo(a, b) {
	        return a % b;
	    });

	    /**
	     * Multiplies two numbers. Equivalent to `a * b` but curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a * b`.
	     * @see R.divide
	     * @example
	     *
	     *      var double = R.multiply(2);
	     *      var triple = R.multiply(3);
	     *      double(3);       //=>  6
	     *      triple(4);       //=> 12
	     *      R.multiply(2, 5);  //=> 10
	     */
	    var multiply = _curry2(function multiply(a, b) {
	        return a * b;
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly `n` parameters. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} n The desired arity of the new function.
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity `n`.
	     * @example
	     *
	     *      var takesTwoArgs = (a, b) => [a, b];
	     *
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.nAry(1, takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only `n` arguments are passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var nAry = _curry2(function nAry(n, fn) {
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.call(this);
	            };
	        case 1:
	            return function (a0) {
	                return fn.call(this, a0);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.call(this, a0, a1);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.call(this, a0, a1, a2);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.call(this, a0, a1, a2, a3);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.call(this, a0, a1, a2, a3, a4);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
	            };
	        default:
	            throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
	        }
	    });

	    /**
	     * Negates its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @example
	     *
	     *      R.negate(42); //=> -42
	     */
	    var negate = _curry1(function negate(n) {
	        return -n;
	    });

	    /**
	     * Returns `true` if no elements of the list match the predicate, `false`
	     * otherwise.
	     *
	     * Dispatches to the `any` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
	     * @see R.all, R.any
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *
	     *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
	     *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
	     */
	    var none = _curry2(_complement(_dispatchable('any', _xany, any)));

	    /**
	     * A function that returns the `!` of its argument. It will return `true` when
	     * passed false-y value, and `false` when passed a truth-y one.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> Boolean
	     * @param {*} a any value
	     * @return {Boolean} the logical inverse of passed argument.
	     * @see R.complement
	     * @example
	     *
	     *      R.not(true); //=> false
	     *      R.not(false); //=> true
	     *      R.not(0); => true
	     *      R.not(1); => false
	     */
	    var not = _curry1(function not(a) {
	        return !a;
	    });

	    /**
	     * Returns the nth element of the given list or string. If n is negative the
	     * element at index length + n is returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> a | Undefined
	     * @sig Number -> String -> String
	     * @param {Number} offset
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      var list = ['foo', 'bar', 'baz', 'quux'];
	     *      R.nth(1, list); //=> 'bar'
	     *      R.nth(-1, list); //=> 'quux'
	     *      R.nth(-99, list); //=> undefined
	     *
	     *      R.nth(2, 'abc'); //=> 'c'
	     *      R.nth(3, 'abc'); //=> ''
	     */
	    var nth = _curry2(function nth(offset, list) {
	        var idx = offset < 0 ? list.length + offset : offset;
	        return _isString(list) ? list.charAt(idx) : list[idx];
	    });

	    /**
	     * Returns a function which returns its nth argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig Number -> *... -> *
	     * @param {Number} n
	     * @return {Function}
	     * @example
	     *
	     *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
	     *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
	     */
	    var nthArg = _curry1(function nthArg(n) {
	        return function () {
	            return nth(n, arguments);
	        };
	    });

	    /**
	     * Creates an object containing a single key:value pair.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Object
	     * @sig String -> a -> {String:a}
	     * @param {String} key
	     * @param {*} val
	     * @return {Object}
	     * @see R.pair
	     * @example
	     *
	     *      var matchPhrases = R.compose(
	     *        R.objOf('must'),
	     *        R.map(R.objOf('match_phrase'))
	     *      );
	     *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
	     */
	    var objOf = _curry2(function objOf(key, val) {
	        var obj = {};
	        obj[key] = val;
	        return obj;
	    });

	    /**
	     * Returns a singleton array containing the value provided.
	     *
	     * Note this `of` is different from the ES6 `of`; See
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig a -> [a]
	     * @param {*} x any value
	     * @return {Array} An array wrapping `x`.
	     * @example
	     *
	     *      R.of(null); //=> [null]
	     *      R.of([42]); //=> [[42]]
	     */
	    var of = _curry1(_of);

	    /**
	     * Accepts a function `fn` and returns a function that guards invocation of
	     * `fn` such that `fn` can only ever be called once, no matter how many times
	     * the returned function is invoked. The first value calculated is returned in
	     * subsequent invocations.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a... -> b) -> (a... -> b)
	     * @param {Function} fn The function to wrap in a call-only-once wrapper.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var addOneOnce = R.once(x => x + 1);
	     *      addOneOnce(10); //=> 11
	     *      addOneOnce(addOneOnce(50)); //=> 11
	     */
	    var once = _curry1(function once(fn) {
	        var called = false;
	        var result;
	        return _arity(fn.length, function () {
	            if (called) {
	                return result;
	            }
	            called = true;
	            result = fn.apply(this, arguments);
	            return result;
	        });
	    });

	    /**
	     * Returns `true` if one or both of its arguments are `true`. Returns `false`
	     * if both arguments are `false`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {Boolean} a A boolean value
	     * @param {Boolean} b A boolean value
	     * @return {Boolean} `true` if one or both arguments are `true`, `false` otherwise
	     * @see R.either
	     * @example
	     *
	     *      R.or(true, true); //=> true
	     *      R.or(true, false); //=> true
	     *      R.or(false, true); //=> true
	     *      R.or(false, false); //=> false
	     */
	    var or = _curry2(function or(a, b) {
	        return a || b;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the result of applying the given function to
	     * the focused value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> (a -> a) -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	     */
	    // `Identity` is a functor that holds a single value, where `map` simply
	    // transforms the held value with the provided function.
	    // The value returned by the getter function is first transformed with `f`,
	    // then set as the value of an `Identity`. This is then mapped over with the
	    // setter function of the lens.
	    var over = function () {
	        // `Identity` is a functor that holds a single value, where `map` simply
	        // transforms the held value with the provided function.
	        var Identity = function (x) {
	            return {
	                value: x,
	                map: function (f) {
	                    return Identity(f(x));
	                }
	            };
	        };
	        return _curry3(function over(lens, f, x) {
	            // The value returned by the getter function is first transformed with `f`,
	            // then set as the value of an `Identity`. This is then mapped over with the
	            // setter function of the lens.
	            return lens(function (y) {
	                return Identity(f(y));
	            })(x).value;
	        });
	    }();

	    /**
	     * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category List
	     * @sig a -> b -> (a,b)
	     * @param {*} fst
	     * @param {*} snd
	     * @return {Array}
	     * @see R.objOf, R.of
	     * @example
	     *
	     *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
	     */
	    var pair = _curry2(function pair(fst, snd) {
	        return [
	            fst,
	            snd
	        ];
	    });

	    /**
	     * Retrieve the value at a given path.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig [String] -> {k: v} -> v | Undefined
	     * @param {Array} path The path to use.
	     * @param {Object} obj The object to retrieve the nested property from.
	     * @return {*} The data at `path`.
	     * @example
	     *
	     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
	     */
	    var path = _curry2(function path(paths, obj) {
	        var val = obj;
	        var idx = 0;
	        while (idx < paths.length) {
	            if (val == null) {
	                return;
	            }
	            val = val[paths[idx]];
	            idx += 1;
	        }
	        return val;
	    });

	    /**
	     * If the given, non-null object has a value at the given path, returns the
	     * value at that path. Otherwise returns the provided default value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Object
	     * @sig a -> [String] -> Object -> a
	     * @param {*} d The default value.
	     * @param {Array} p The path to use.
	     * @param {Object} obj The object to retrieve the nested property from.
	     * @return {*} The data at `path` of the supplied object or the default value.
	     * @example
	     *
	     *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
	     */
	    var pathOr = _curry3(function pathOr(d, p, obj) {
	        return defaultTo(d, path(p, obj));
	    });

	    /**
	     * Returns `true` if the specified object property at given path satisfies the
	     * given predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Logic
	     * @sig (a -> Boolean) -> [String] -> Object -> Boolean
	     * @param {Function} pred
	     * @param {Array} propPath
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propSatisfies, R.path
	     * @example
	     *
	     *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
	     */
	    var pathSatisfies = _curry3(function pathSatisfies(pred, propPath, obj) {
	        return propPath.length > 0 && pred(path(propPath, obj));
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys specified. If
	     * the key does not exist, the property is ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.omit, R.props
	     * @example
	     *
	     *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	     */
	    var pick = _curry2(function pick(names, obj) {
	        var result = {};
	        var idx = 0;
	        while (idx < names.length) {
	            if (names[idx] in obj) {
	                result[names[idx]] = obj[names[idx]];
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Similar to `pick` except that this one includes a `key: undefined` pair for
	     * properties that don't exist.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
	     */
	    var pickAll = _curry2(function pickAll(names, obj) {
	        var result = {};
	        var idx = 0;
	        var len = names.length;
	        while (idx < len) {
	            var name = names[idx];
	            result[name] = obj[name];
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys that satisfy
	     * the supplied predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
	     * @param {Function} pred A predicate to determine whether or not a key
	     *        should be included on the output object.
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties that satisfy `pred`
	     *         on it.
	     * @see R.pick, R.filter
	     * @example
	     *
	     *      var isUpperCase = (val, key) => key.toUpperCase() === key;
	     *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
	     */
	    var pickBy = _curry2(function pickBy(test, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (test(obj[prop], prop, obj)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns a new list with the given element at the front, followed by the
	     * contents of the list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The item to add to the head of the output list.
	     * @param {Array} list The array to add to the tail of the output list.
	     * @return {Array} A new array.
	     * @see R.append
	     * @example
	     *
	     *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
	     */
	    var prepend = _curry2(function prepend(el, list) {
	        return _concat([el], list);
	    });

	    /**
	     * Returns a function that when supplied an object returns the indicated
	     * property of that object, if it exists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig s -> {s: a} -> a | Undefined
	     * @param {String} p The property name
	     * @param {Object} obj The object to query
	     * @return {*} The value at `obj.p`.
	     * @example
	     *
	     *      R.prop('x', {x: 100}); //=> 100
	     *      R.prop('x', {}); //=> undefined
	     */
	    var prop = _curry2(function prop(p, obj) {
	        return obj[p];
	    });

	    /**
	     * If the given, non-null object has an own property with the specified name,
	     * returns the value of that property. Otherwise returns the provided default
	     * value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Object
	     * @sig a -> String -> Object -> a
	     * @param {*} val The default value.
	     * @param {String} p The name of the property to return.
	     * @param {Object} obj The object to query.
	     * @return {*} The value of given property of the supplied object or the default value.
	     * @example
	     *
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var favorite = R.prop('favoriteLibrary');
	     *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
	     *
	     *      favorite(alice);  //=> undefined
	     *      favoriteWithDefault(alice);  //=> 'Ramda'
	     */
	    var propOr = _curry3(function propOr(val, p, obj) {
	        return obj != null && _has(p, obj) ? obj[p] : val;
	    });

	    /**
	     * Returns `true` if the specified object property satisfies the given
	     * predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Logic
	     * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	     * @param {Function} pred
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propEq, R.propIs
	     * @example
	     *
	     *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	     */
	    var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
	        return pred(obj[name]);
	    });

	    /**
	     * Acts as multiple `prop`: array of keys in, array of values out. Preserves
	     * order.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> [v]
	     * @param {Array} ps The property names to fetch
	     * @param {Object} obj The object to query
	     * @return {Array} The corresponding values or partially applied function.
	     * @example
	     *
	     *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	     *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	     *
	     *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	     *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	     */
	    var props = _curry2(function props(ps, obj) {
	        var len = ps.length;
	        var out = [];
	        var idx = 0;
	        while (idx < len) {
	            out[idx] = obj[ps[idx]];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> Number -> [Number]
	     * @param {Number} from The first number in the list.
	     * @param {Number} to One more than the last number in the list.
	     * @return {Array} The list of numbers in tthe set `[a, b)`.
	     * @example
	     *
	     *      R.range(1, 5);    //=> [1, 2, 3, 4]
	     *      R.range(50, 53);  //=> [50, 51, 52]
	     */
	    var range = _curry2(function range(from, to) {
	        if (!(_isNumber(from) && _isNumber(to))) {
	            throw new TypeError('Both arguments to range must be numbers');
	        }
	        var result = [];
	        var n = from;
	        while (n < to) {
	            result.push(n);
	            n += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling
	     * the iterator function and passing it an accumulator value and the current
	     * value from the array, and then passing the result to the next call.
	     *
	     * Similar to `reduce`, except moves through the input list from the right to
	     * the left.
	     *
	     * The iterator function receives two values: *(acc, value)*
	     *
	     * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.reduce` method. For more details
	     * on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
	     *      var flattenPairs = (acc, pair) => acc.concat(pair);
	     *
	     *      R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
	     */
	    var reduceRight = _curry3(function reduceRight(fn, acc, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            acc = fn(acc, list[idx]);
	            idx -= 1;
	        }
	        return acc;
	    });

	    /**
	     * Returns a value wrapped to indicate that it is the final value of the reduce
	     * and transduce functions. The returned value should be considered a black
	     * box: the internal structure is not guaranteed to be stable.
	     *
	     * Note: this optimization is unavailable to functions not explicitly listed
	     * above. For instance, it is not currently supported by reduceRight.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category List
	     * @sig a -> *
	     * @param {*} x The final value of the reduce.
	     * @return {*} The wrapped value.
	     * @see R.reduce, R.transduce
	     * @example
	     *
	     *      R.reduce(
	     *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
	     *        0,
	     *        [1, 2, 3, 4, 5]) // 10
	     */
	    var reduced = _curry1(_reduced);

	    /**
	     * Removes the sub-list of `list` starting at index `start` and containing
	     * `count` elements. _Note that this is not destructive_: it returns a copy of
	     * the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.2
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @param {Number} start The position to start removing elements
	     * @param {Number} count The number of elements to remove
	     * @param {Array} list The list to remove from
	     * @return {Array} A new Array with `count` elements from `start` removed.
	     * @example
	     *
	     *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
	     */
	    var remove = _curry3(function remove(start, count, list) {
	        return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
	    });

	    /**
	     * Replace a substring or regex match in a string with a replacement.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category String
	     * @sig RegExp|String -> String -> String -> String
	     * @param {RegExp|String} pattern A regular expression or a substring to match.
	     * @param {String} replacement The string to replace the matches with.
	     * @param {String} str The String to do the search and replacement in.
	     * @return {String} The result.
	     * @example
	     *
	     *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *
	     *      // Use the "g" (global) flag to replace all occurrences:
	     *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	     */
	    var replace = _curry3(function replace(regex, replacement, str) {
	        return str.replace(regex, replacement);
	    });

	    /**
	     * Returns a new list or string with the elements or characters in reverse
	     * order.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {Array|String} list
	     * @return {Array|String}
	     * @example
	     *
	     *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	     *      R.reverse([1, 2]);     //=> [2, 1]
	     *      R.reverse([1]);        //=> [1]
	     *      R.reverse([]);         //=> []
	     *
	     *      R.reverse('abc');      //=> 'cba'
	     *      R.reverse('ab');       //=> 'ba'
	     *      R.reverse('a');        //=> 'a'
	     *      R.reverse('');         //=> ''
	     */
	    var reverse = _curry1(function reverse(list) {
	        return _isString(list) ? list.split('').reverse().join('') : _slice(list).reverse();
	    });

	    /**
	     * Scan is similar to reduce, but returns a list of successively reduced values
	     * from the left
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> [a]
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} A list of all intermediately reduced values.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
	     */
	    var scan = _curry3(function scan(fn, acc, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [acc];
	        while (idx < len) {
	            acc = fn(acc, list[idx]);
	            result[idx + 1] = acc;
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the given value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> a -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	     *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	     */
	    var set = _curry3(function set(lens, v, x) {
	        return over(lens, always(v), x);
	    });

	    /**
	     * Returns the elements of the given list or string (or object with a `slice`
	     * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	     *
	     * Dispatches to the `slice` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @sig Number -> Number -> String -> String
	     * @param {Number} fromIndex The start index (inclusive).
	     * @param {Number} toIndex The end index (exclusive).
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	     *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	     *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	     *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	     *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	     */
	    var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	        return Array.prototype.slice.call(list, fromIndex, toIndex);
	    }));

	    /**
	     * Returns a copy of the list, sorted according to the comparator function,
	     * which should accept two values at a time and return a negative number if the
	     * first value is smaller, a positive number if it's larger, and zero if they
	     * are equal. Please note that this is a **copy** of the list. It does not
	     * modify the original.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,a -> Number) -> [a] -> [a]
	     * @param {Function} comparator A sorting function :: a -> b -> Int
	     * @param {Array} list The list to sort
	     * @return {Array} a new array with its elements sorted by the comparator function.
	     * @example
	     *
	     *      var diff = function(a, b) { return a - b; };
	     *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
	     */
	    var sort = _curry2(function sort(comparator, list) {
	        return _slice(list).sort(comparator);
	    });

	    /**
	     * Sorts the list according to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> [a] -> [a]
	     * @param {Function} fn
	     * @param {Array} list The list to sort.
	     * @return {Array} A new list sorted by the keys generated by `fn`.
	     * @example
	     *
	     *      var sortByFirstItem = R.sortBy(R.prop(0));
	     *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
	     *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
	     *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var bob = {
	     *        name: 'Bob',
	     *        age: -10
	     *      };
	     *      var clara = {
	     *        name: 'clara',
	     *        age: 314.159
	     *      };
	     *      var people = [clara, bob, alice];
	     *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
	     */
	    var sortBy = _curry2(function sortBy(fn, list) {
	        return _slice(list).sort(function (a, b) {
	            var aa = fn(a);
	            var bb = fn(b);
	            return aa < bb ? -1 : aa > bb ? 1 : 0;
	        });
	    });

	    /**
	     * Splits a given list or string at a given index.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig Number -> [a] -> [[a], [a]]
	     * @sig Number -> String -> [String, String]
	     * @param {Number} index The index where the array/string is split.
	     * @param {Array|String} array The array/string to be split.
	     * @return {Array}
	     * @example
	     *
	     *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
	     *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
	     *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
	     */
	    var splitAt = _curry2(function splitAt(index, array) {
	        return [
	            slice(0, index, array),
	            slice(index, length(array), array)
	        ];
	    });

	    /**
	     * Splits a collection into slices of the specified length.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @sig Number -> String -> [String]
	     * @param {Number} n
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	     *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	     */
	    var splitEvery = _curry2(function splitEvery(n, list) {
	        if (n <= 0) {
	            throw new Error('First argument to splitEvery must be a positive integer');
	        }
	        var result = [];
	        var idx = 0;
	        while (idx < list.length) {
	            result.push(slice(idx, idx += n, list));
	        }
	        return result;
	    });

	    /**
	     * Takes a list and a predicate and returns a pair of lists with the following properties:
	     *
	     *  - the result of concatenating the two output lists is equivalent to the input list;
	     *  - none of the elements of the first output list satisfies the predicate; and
	     *  - if the second output list is non-empty, its first element satisfies the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [[a], [a]]
	     * @param {Function} pred The predicate that determines where the array is split.
	     * @param {Array} list The array to be split.
	     * @return {Array}
	     * @example
	     *
	     *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
	     */
	    var splitWhen = _curry2(function splitWhen(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        var prefix = [];
	        while (idx < len && !pred(list[idx])) {
	            prefix.push(list[idx]);
	            idx += 1;
	        }
	        return [
	            prefix,
	            _slice(list, idx)
	        ];
	    });

	    /**
	     * Subtracts its second argument from its first argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a - b`.
	     * @see R.add
	     * @example
	     *
	     *      R.subtract(10, 8); //=> 2
	     *
	     *      var minus5 = R.subtract(R.__, 5);
	     *      minus5(17); //=> 12
	     *
	     *      var complementaryAngle = R.subtract(90);
	     *      complementaryAngle(30); //=> 60
	     *      complementaryAngle(72); //=> 18
	     */
	    var subtract = _curry2(function subtract(a, b) {
	        return Number(a) - Number(b);
	    });

	    /**
	     * Returns all but the first element of the given list or string (or object
	     * with a `tail` method).
	     *
	     * Dispatches to the `slice` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.head, R.init, R.last
	     * @example
	     *
	     *      R.tail([1, 2, 3]);  //=> [2, 3]
	     *      R.tail([1, 2]);     //=> [2]
	     *      R.tail([1]);        //=> []
	     *      R.tail([]);         //=> []
	     *
	     *      R.tail('abc');  //=> 'bc'
	     *      R.tail('ab');   //=> 'b'
	     *      R.tail('a');    //=> ''
	     *      R.tail('');     //=> ''
	     */
	    var tail = _checkForMethod('tail', slice(1, Infinity));

	    /**
	     * Returns the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `take` method).
	     *
	     * Dispatches to the `take` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.drop
	     * @example
	     *
	     *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(3, 'ramda');               //=> 'ram'
	     *
	     *      var personnel = [
	     *        'Dave Brubeck',
	     *        'Paul Desmond',
	     *        'Eugene Wright',
	     *        'Joe Morello',
	     *        'Gerry Mulligan',
	     *        'Bob Bates',
	     *        'Joe Dodge',
	     *        'Ron Crotty'
	     *      ];
	     *
	     *      var takeFive = R.take(5);
	     *      takeFive(personnel);
	     *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	     */
	    var take = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
	        return slice(0, n < 0 ? Infinity : n, xs);
	    }));

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing
	     * each value to the supplied predicate function, and terminating when the
	     * predicate function returns `false`. Excludes the element that caused the
	     * predicate function to fail. The predicate function is passed one argument:
	     * *(value)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropLastWhile, R.addIndex
	     * @example
	     *
	     *      var isNotOne = x => x !== 1;
	     *
	     *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	     */
	    var takeLastWhile = _curry2(function takeLastWhile(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && fn(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, idx + 1, Infinity);
	    });

	    /**
	     * Returns a new list containing the first `n` elements of a given list,
	     * passing each value to the supplied predicate function, and terminating when
	     * the predicate function returns `false`. Excludes the element that caused the
	     * predicate function to fail. The predicate function is passed one argument:
	     * *(value)*.
	     *
	     * Dispatches to the `takeWhile` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropWhile, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isNotFour = x => x !== 4;
	     *
	     *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
	     */
	    var takeWhile = _curry2(_dispatchable('takeWhile', _xtakeWhile, function takeWhile(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len && fn(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, 0, idx);
	    }));

	    /**
	     * Runs the given function with the supplied object, then returns the object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a -> *) -> a -> a
	     * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
	     * @param {*} x
	     * @return {*} `x`.
	     * @example
	     *
	     *      var sayX = x => console.log('x is ' + x);
	     *      R.tap(sayX, 100); //=> 100
	     *      //-> 'x is 100'
	     */
	    var tap = _curry2(function tap(fn, x) {
	        fn(x);
	        return x;
	    });

	    /**
	     * Calls an input function `n` times, returning an array containing the results
	     * of those function calls.
	     *
	     * `fn` is passed one argument: The current value of `n`, which begins at `0`
	     * and is gradually incremented to `n - 1`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.3
	     * @category List
	     * @sig (Number -> a) -> Number -> [a]
	     * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
	     * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
	     * @return {Array} An array containing the return values of all calls to `fn`.
	     * @example
	     *
	     *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
	     */
	    var times = _curry2(function times(fn, n) {
	        var len = Number(n);
	        var idx = 0;
	        var list;
	        if (len < 0 || isNaN(len)) {
	            throw new RangeError('n must be a non-negative number');
	        }
	        list = new Array(len);
	        while (idx < len) {
	            list[idx] = fn(idx);
	            idx += 1;
	        }
	        return list;
	    });

	    /**
	     * Converts an object into an array of key, value arrays. Only the object's
	     * own properties are used.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own properties.
	     * @see R.fromPairs
	     * @example
	     *
	     *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	     */
	    var toPairs = _curry1(function toPairs(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            if (_has(prop, obj)) {
	                pairs[pairs.length] = [
	                    prop,
	                    obj[prop]
	                ];
	            }
	        }
	        return pairs;
	    });

	    /**
	     * Converts an object into an array of key, value arrays. The object's own
	     * properties and prototype properties are used. Note that the order of the
	     * output array is not guaranteed to be consistent across different JS
	     * platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own
	     *         and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
	     */
	    var toPairsIn = _curry1(function toPairsIn(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            pairs[pairs.length] = [
	                prop,
	                obj[prop]
	            ];
	        }
	        return pairs;
	    });

	    /**
	     * Transposes the rows and columns of a 2D list.
	     * When passed a list of `n` lists of length `x`,
	     * returns a list of `x` lists of length `n`.
	     *
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig [[a]] -> [[a]]
	     * @param {Array} list A 2D list
	     * @return {Array} A 2D list
	     * @example
	     *
	     *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
	     *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     *
	     * If some of the rows are shorter than the following rows, their elements are skipped:
	     *
	     *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
	     */
	    var transpose = _curry1(function transpose(outerlist) {
	        var i = 0;
	        var result = [];
	        while (i < outerlist.length) {
	            var innerlist = outerlist[i];
	            var j = 0;
	            while (j < innerlist.length) {
	                if (typeof result[j] === 'undefined') {
	                    result[j] = [];
	                }
	                result[j].push(innerlist[j]);
	                j += 1;
	            }
	            i += 1;
	        }
	        return result;
	    });

	    /**
	     * Removes (strips) whitespace from both ends of the string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to trim.
	     * @return {String} Trimmed version of `str`.
	     * @example
	     *
	     *      R.trim('   xyz  '); //=> 'xyz'
	     *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
	     */
	    var trim = function () {
	        var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	        var zeroWidth = '\u200B';
	        var hasProtoTrim = typeof String.prototype.trim === 'function';
	        if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
	            return _curry1(function trim(str) {
	                var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
	                var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
	                return str.replace(beginRx, '').replace(endRx, '');
	            });
	        } else {
	            return _curry1(function trim(str) {
	                return str.trim();
	            });
	        }
	    }();

	    /**
	     * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
	     * function evaluates the `tryer`; if it does not throw, it simply returns the
	     * result. If the `tryer` *does* throw, the returned function evaluates the
	     * `catcher` function and returns its result. Note that for effective
	     * composition with this function, both the `tryer` and `catcher` functions
	     * must return the same type of results.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Function
	     * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
	     * @param {Function} tryer The function that may throw.
	     * @param {Function} catcher The function that will be evaluated if `tryer` throws.
	     * @return {Function} A new function that will catch exceptions and send then to the catcher.
	     * @example
	     *
	     *      R.tryCatch(R.prop('x'), R.F, {x: true}); //=> true
	     *      R.tryCatch(R.prop('x'), R.F, null);      //=> false
	     */
	    var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
	        return _arity(tryer.length, function () {
	            try {
	                return tryer.apply(this, arguments);
	            } catch (e) {
	                return catcher.apply(this, _concat([e], arguments));
	            }
	        });
	    });

	    /**
	     * Gives a single-word string description of the (native) type of a value,
	     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	     * attempt to distinguish user Object types any further, reporting them all as
	     * 'Object'.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Type
	     * @sig (* -> {*}) -> String
	     * @param {*} val The value to test
	     * @return {String}
	     * @example
	     *
	     *      R.type({}); //=> "Object"
	     *      R.type(1); //=> "Number"
	     *      R.type(false); //=> "Boolean"
	     *      R.type('s'); //=> "String"
	     *      R.type(null); //=> "Null"
	     *      R.type([]); //=> "Array"
	     *      R.type(/[A-z]/); //=> "RegExp"
	     */
	    var type = _curry1(function type(val) {
	        return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	    });

	    /**
	     * Takes a function `fn`, which takes a single array argument, and returns a
	     * function which:
	     *
	     *   - takes any number of positional arguments;
	     *   - passes these arguments to `fn` as an array; and
	     *   - returns the result.
	     *
	     * In other words, R.unapply derives a variadic function from a function which
	     * takes an array. R.unapply is the inverse of R.apply.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Function
	     * @sig ([*...] -> a) -> (*... -> a)
	     * @param {Function} fn
	     * @return {Function}
	     * @see R.apply
	     * @example
	     *
	     *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
	     */
	    var unapply = _curry1(function unapply(fn) {
	        return function () {
	            return fn(_slice(arguments));
	        };
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly 1 parameter. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Function
	     * @sig (* -> b) -> (a -> b)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 1.
	     * @example
	     *
	     *      var takesTwoArgs = function(a, b) {
	     *        return [a, b];
	     *      };
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.unary(takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only 1 argument is passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var unary = _curry1(function unary(fn) {
	        return nAry(1, fn);
	    });

	    /**
	     * Returns a function of arity `n` from a (manually) curried function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Function
	     * @sig Number -> (a -> b) -> (a -> c)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to uncurry.
	     * @return {Function} A new function.
	     * @see R.curry
	     * @example
	     *
	     *      var addFour = a => b => c => d => a + b + c + d;
	     *
	     *      var uncurriedAddFour = R.uncurryN(4, addFour);
	     *      uncurriedAddFour(1, 2, 3, 4); //=> 10
	     */
	    var uncurryN = _curry2(function uncurryN(depth, fn) {
	        return curryN(depth, function () {
	            var currentDepth = 1;
	            var value = fn;
	            var idx = 0;
	            var endIdx;
	            while (currentDepth <= depth && typeof value === 'function') {
	                endIdx = currentDepth === depth ? arguments.length : idx + value.length;
	                value = value.apply(this, _slice(arguments, idx, endIdx));
	                currentDepth += 1;
	                idx = endIdx;
	            }
	            return value;
	        });
	    });

	    /**
	     * Builds a list from a seed value. Accepts an iterator function, which returns
	     * either false to stop iteration or an array of length 2 containing the value
	     * to add to the resulting list and the seed to be used in the next call to the
	     * iterator function.
	     *
	     * The iterator function receives one argument: *(seed)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (a -> [b]) -> * -> [b]
	     * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
	     *        either false to quit iteration or an array of length two to proceed. The element
	     *        at index 0 of this array will be added to the resulting array, and the element
	     *        at index 1 will be passed to the next call to `fn`.
	     * @param {*} seed The seed value.
	     * @return {Array} The final list.
	     * @example
	     *
	     *      var f = n => n > 50 ? false : [-n, n + 10];
	     *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
	     */
	    var unfold = _curry2(function unfold(fn, seed) {
	        var pair = fn(seed);
	        var result = [];
	        while (pair && pair.length) {
	            result[result.length] = pair[0];
	            pair = fn(pair[1]);
	        }
	        return result;
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list, based upon the value returned by applying the supplied predicate to
	     * two list elements. Prefers the first item if two items compare equal based
	     * on the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      var strEq = R.eqBy(String);
	     *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
	     *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
	     *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
	     *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
	     */
	    var uniqWith = _curry2(function uniqWith(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        var item;
	        while (idx < len) {
	            item = list[idx];
	            if (!_containsWith(pred, item, result)) {
	                result[result.length] = item;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Tests the final argument by passing it to the given predicate function. If
	     * the predicate is not satisfied, the function will return the result of
	     * calling the `whenFalseFn` function with the same argument. If the predicate
	     * is satisfied, the argument is returned as is.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred        A predicate function
	     * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
	     *                               to a falsy value.
	     * @param {*}        x           An object to test with the `pred` function and
	     *                               pass to `whenFalseFn` if necessary.
	     * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
	     * @see R.ifElse, R.when
	     * @example
	     *
	     *      // coerceArray :: (a|[a]) -> [a]
	     *      var coerceArray = R.unless(R.isArrayLike, R.of);
	     *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
	     *      coerceArray(1);         //=> [1]
	     */
	    var unless = _curry3(function unless(pred, whenFalseFn, x) {
	        return pred(x) ? x : whenFalseFn(x);
	    });

	    /**
	     * Takes a predicate, a transformation function, and an initial value,
	     * and returns a value of the same type as the initial value.
	     * It does so by applying the transformation until the predicate is satisfied,
	     * at which point it returns the satisfactory value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred A predicate function
	     * @param {Function} fn The iterator function
	     * @param {*} init Initial value
	     * @return {*} Final value that satisfies predicate
	     * @example
	     *
	     *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
	     */
	    var until = _curry3(function until(pred, fn, init) {
	        var val = init;
	        while (!pred(val)) {
	            val = fn(val);
	        }
	        return val;
	    });

	    /**
	     * Returns a new copy of the array with the element at the provided index
	     * replaced with the given value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} idx The index to update.
	     * @param {*} x The value to exist at the given index of the returned array.
	     * @param {Array|Arguments} list The source array-like object to be updated.
	     * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
	     * @see R.adjust
	     * @example
	     *
	     *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var update = _curry3(function update(idx, x, list) {
	        return adjust(always(x), idx, list);
	    });

	    /**
	     * Accepts a function `fn` and a list of transformer functions and returns a
	     * new curried function. When the new function is invoked, it calls the
	     * function `fn` with parameters consisting of the result of calling each
	     * supplied handler on successive arguments to the new function.
	     *
	     * If more arguments are passed to the returned function than transformer
	     * functions, those arguments are passed directly to `fn` as additional
	     * parameters. If you expect additional arguments that don't need to be
	     * transformed, although you can ignore them, it's best to pass an identity
	     * function so that the new function reports the correct arity.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
	     * @param {Function} fn The function to wrap.
	     * @param {Array} transformers A list of transformer functions
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
	     *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
	     *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
	     *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
	     */
	    var useWith = _curry2(function useWith(fn, transformers) {
	        return curryN(transformers.length, function () {
	            var args = [];
	            var idx = 0;
	            while (idx < transformers.length) {
	                args.push(transformers[idx].call(this, arguments[idx]));
	                idx += 1;
	            }
	            return fn.apply(this, args.concat(_slice(arguments, transformers.length)));
	        });
	    });

	    /**
	     * Returns a list of all the enumerable own properties of the supplied object.
	     * Note that the order of the output array is not guaranteed across different
	     * JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own properties.
	     * @example
	     *
	     *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	     */
	    var values = _curry1(function values(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var vals = [];
	        var idx = 0;
	        while (idx < len) {
	            vals[idx] = obj[props[idx]];
	            idx += 1;
	        }
	        return vals;
	    });

	    /**
	     * Returns a list of all the properties, including prototype properties, of the
	     * supplied object.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.valuesIn(f); //=> ['X', 'Y']
	     */
	    var valuesIn = _curry1(function valuesIn(obj) {
	        var prop;
	        var vs = [];
	        for (prop in obj) {
	            vs[vs.length] = obj[prop];
	        }
	        return vs;
	    });

	    /**
	     * Returns a "view" of the given data structure, determined by the given lens.
	     * The lens's focus determines which portion of the data structure is visible.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> s -> a
	     * @param {Lens} lens
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});  //=> 1
	     *      R.view(xLens, {x: 4, y: 2});  //=> 4
	     */
	    // `Const` is a functor that effectively ignores the function given to `map`.
	    // Using `Const` effectively ignores the setter function of the `lens`,
	    // leaving the value returned by the getter function unmodified.
	    var view = function () {
	        // `Const` is a functor that effectively ignores the function given to `map`.
	        var Const = function (x) {
	            return {
	                value: x,
	                map: function () {
	                    return this;
	                }
	            };
	        };
	        return _curry2(function view(lens, x) {
	            // Using `Const` effectively ignores the setter function of the `lens`,
	            // leaving the value returned by the getter function unmodified.
	            return lens(Const)(x).value;
	        });
	    }();

	    /**
	     * Tests the final argument by passing it to the given predicate function. If
	     * the predicate is satisfied, the function will return the result of calling
	     * the `whenTrueFn` function with the same argument. If the predicate is not
	     * satisfied, the argument is returned as is.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred       A predicate function
	     * @param {Function} whenTrueFn A function to invoke when the `condition`
	     *                              evaluates to a truthy value.
	     * @param {*}        x          An object to test with the `pred` function and
	     *                              pass to `whenTrueFn` if necessary.
	     * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	     * @see R.ifElse, R.unless
	     * @example
	     *
	     *      // truncate :: String -> String
	     *      var truncate = R.when(
	     *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	     *        R.pipe(R.take(10), R.append('…'), R.join(''))
	     *      );
	     *      truncate('12345');         //=> '12345'
	     *      truncate('0123456789ABC'); //=> '0123456789…'
	     */
	    var when = _curry3(function when(pred, whenTrueFn, x) {
	        return pred(x) ? whenTrueFn(x) : x;
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec. Each of the spec's own properties must be a predicate function.
	     * Each predicate is applied to the value of the corresponding property of the
	     * test object. `where` returns true if all the predicates return true, false
	     * otherwise.
	     *
	     * `where` is well suited to declaratively expressing constraints for other
	     * functions such as `filter` and `find`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category Object
	     * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.where({
	     *        a: R.equals('foo'),
	     *        b: R.complement(R.equals('bar')),
	     *        x: R.gt(_, 10),
	     *        y: R.lt(_, 20)
	     *      });
	     *
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
	     *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
	     */
	    var where = _curry2(function where(spec, testObj) {
	        for (var prop in spec) {
	            if (_has(prop, spec) && !spec[prop](testObj[prop])) {
	                return false;
	            }
	        }
	        return true;
	    });

	    /**
	     * Wrap a function inside another to allow you to make adjustments to the
	     * parameters, or do other processing either before the internal function is
	     * called or with its results.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a... -> b) -> ((a... -> b) -> a... -> c) -> (a... -> c)
	     * @param {Function} fn The function to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var greet = name => 'Hello ' + name;
	     *
	     *      var shoutedGreet = R.wrap(greet, (gr, name) => gr(name).toUpperCase());
	     *
	     *      shoutedGreet("Kathy"); //=> "HELLO KATHY"
	     *
	     *      var shortenedGreet = R.wrap(greet, function(gr, name) {
	     *        return gr(name.substring(0, 3));
	     *      });
	     *      shortenedGreet("Robert"); //=> "Hello Rob"
	     */
	    var wrap = _curry2(function wrap(fn, wrapper) {
	        return curryN(fn.length, function () {
	            return wrapper.apply(this, _concat([fn], arguments));
	        });
	    });

	    /**
	     * Creates a new list out of the two supplied by creating each possible pair
	     * from the lists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The list made by combining each possible pair from
	     *         `as` and `bs` into pairs (`[a, b]`).
	     * @example
	     *
	     *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	     */
	    // = xprodWith(prepend); (takes about 3 times as long...)
	    var xprod = _curry2(function xprod(a, b) {
	        // = xprodWith(prepend); (takes about 3 times as long...)
	        var idx = 0;
	        var ilen = a.length;
	        var j;
	        var jlen = b.length;
	        var result = [];
	        while (idx < ilen) {
	            j = 0;
	            while (j < jlen) {
	                result[result.length] = [
	                    a[idx],
	                    b[j]
	                ];
	                j += 1;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Creates a new list out of the two supplied by pairing up equally-positioned
	     * items from both lists. The returned list is truncated to the length of the
	     * shorter of the two input lists.
	     * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
	     * @example
	     *
	     *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     */
	    var zip = _curry2(function zip(a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = [
	                a[idx],
	                b[idx]
	            ];
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * Creates a new object out of a list of keys and a list of values.
	     * Key/value pairing is truncated to the length of the shorter of the two lists.
	     * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [String] -> [*] -> {String: *}
	     * @param {Array} keys The array that will be properties on the output object.
	     * @param {Array} values The list of values on the output object.
	     * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	     * @example
	     *
	     *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	     */
	    var zipObj = _curry2(function zipObj(keys, values) {
	        var idx = 0;
	        var len = Math.min(keys.length, values.length);
	        var out = {};
	        while (idx < len) {
	            out[keys[idx]] = values[idx];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Creates a new list out of the two supplied by applying the function to each
	     * equally-positioned pair in the lists. The returned list is truncated to the
	     * length of the shorter of the two input lists.
	     *
	     * @function
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,b -> c) -> [a] -> [b] -> [c]
	     * @param {Function} fn The function used to combine the two elements into one value.
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
	     *         using `fn`.
	     * @example
	     *
	     *      var f = (x, y) => {
	     *        // ...
	     *      };
	     *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
	     *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
	     */
	    var zipWith = _curry3(function zipWith(fn, a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = fn(a[idx], b[idx]);
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * A function that always returns `false`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig * -> Boolean
	     * @param {*}
	     * @return {Boolean}
	     * @see R.always, R.T
	     * @example
	     *
	     *      R.F(); //=> false
	     */
	    var F = always(false);

	    /**
	     * A function that always returns `true`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig * -> Boolean
	     * @param {*}
	     * @return {Boolean}
	     * @see R.always, R.F
	     * @example
	     *
	     *      R.T(); //=> true
	     */
	    var T = always(true);

	    /**
	     * Copies an object.
	     *
	     * @private
	     * @param {*} value The value to be copied
	     * @param {Array} refFrom Array containing the source references
	     * @param {Array} refTo Array containing the copied source references
	     * @param {Boolean} deep Whether or not to perform deep cloning.
	     * @return {*} The copied value.
	     */
	    var _clone = function _clone(value, refFrom, refTo, deep) {
	        var copy = function copy(copiedValue) {
	            var len = refFrom.length;
	            var idx = 0;
	            while (idx < len) {
	                if (value === refFrom[idx]) {
	                    return refTo[idx];
	                }
	                idx += 1;
	            }
	            refFrom[idx + 1] = value;
	            refTo[idx + 1] = copiedValue;
	            for (var key in value) {
	                copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
	            }
	            return copiedValue;
	        };
	        switch (type(value)) {
	        case 'Object':
	            return copy({});
	        case 'Array':
	            return copy([]);
	        case 'Date':
	            return new Date(value.valueOf());
	        case 'RegExp':
	            return _cloneRegExp(value);
	        default:
	            return value;
	        }
	    };

	    var _createPartialApplicator = function _createPartialApplicator(concat) {
	        return _curry2(function (fn, args) {
	            return _arity(Math.max(0, fn.length - args.length), function () {
	                return fn.apply(this, concat(args, arguments));
	            });
	        });
	    };

	    var _dropLast = function dropLast(n, xs) {
	        return take(n < xs.length ? xs.length - n : 0, xs);
	    };

	    // Values of other types are only equal if identical.
	    var _equals = function _equals(a, b, stackA, stackB) {
	        if (identical(a, b)) {
	            return true;
	        }
	        if (type(a) !== type(b)) {
	            return false;
	        }
	        if (a == null || b == null) {
	            return false;
	        }
	        if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	            return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
	        }
	        switch (type(a)) {
	        case 'Arguments':
	        case 'Array':
	        case 'Object':
	            if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
	                return a === b;
	            }
	            break;
	        case 'Boolean':
	        case 'Number':
	        case 'String':
	            if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
	                return false;
	            }
	            break;
	        case 'Date':
	            if (!identical(a.valueOf(), b.valueOf())) {
	                return false;
	            }
	            break;
	        case 'Error':
	            return a.name === b.name && a.message === b.message;
	        case 'RegExp':
	            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
	                return false;
	            }
	            break;
	        case 'Map':
	        case 'Set':
	            if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
	                return false;
	            }
	            break;
	        case 'Int8Array':
	        case 'Uint8Array':
	        case 'Uint8ClampedArray':
	        case 'Int16Array':
	        case 'Uint16Array':
	        case 'Int32Array':
	        case 'Uint32Array':
	        case 'Float32Array':
	        case 'Float64Array':
	            break;
	        case 'ArrayBuffer':
	            break;
	        default:
	            // Values of other types are only equal if identical.
	            return false;
	        }
	        var keysA = keys(a);
	        if (keysA.length !== keys(b).length) {
	            return false;
	        }
	        var idx = stackA.length - 1;
	        while (idx >= 0) {
	            if (stackA[idx] === a) {
	                return stackB[idx] === b;
	            }
	            idx -= 1;
	        }
	        stackA.push(a);
	        stackB.push(b);
	        idx = keysA.length - 1;
	        while (idx >= 0) {
	            var key = keysA[idx];
	            if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
	                return false;
	            }
	            idx -= 1;
	        }
	        stackA.pop();
	        stackB.pop();
	        return true;
	    };

	    /**
	     * `_makeFlat` is a helper function that returns a one-level or fully recursive
	     * function based on the flag passed in.
	     *
	     * @private
	     */
	    var _makeFlat = function _makeFlat(recursive) {
	        return function flatt(list) {
	            var value, jlen, j;
	            var result = [];
	            var idx = 0;
	            var ilen = list.length;
	            while (idx < ilen) {
	                if (isArrayLike(list[idx])) {
	                    value = recursive ? flatt(list[idx]) : list[idx];
	                    j = 0;
	                    jlen = value.length;
	                    while (j < jlen) {
	                        result[result.length] = value[j];
	                        j += 1;
	                    }
	                } else {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	            return result;
	        };
	    };

	    var _reduce = function () {
	        function _arrayReduce(xf, acc, list) {
	            var idx = 0;
	            var len = list.length;
	            while (idx < len) {
	                acc = xf['@@transducer/step'](acc, list[idx]);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                idx += 1;
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _iterableReduce(xf, acc, iter) {
	            var step = iter.next();
	            while (!step.done) {
	                acc = xf['@@transducer/step'](acc, step.value);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                step = iter.next();
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _methodReduce(xf, acc, obj) {
	            return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	        }
	        var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	        return function _reduce(fn, acc, list) {
	            if (typeof fn === 'function') {
	                fn = _xwrap(fn);
	            }
	            if (isArrayLike(list)) {
	                return _arrayReduce(fn, acc, list);
	            }
	            if (typeof list.reduce === 'function') {
	                return _methodReduce(fn, acc, list);
	            }
	            if (list[symIterator] != null) {
	                return _iterableReduce(fn, acc, list[symIterator]());
	            }
	            if (typeof list.next === 'function') {
	                return _iterableReduce(fn, acc, list);
	            }
	            throw new TypeError('reduce: list must be array or iterable');
	        };
	    }();

	    var _stepCat = function () {
	        var _stepCatArray = {
	            '@@transducer/init': Array,
	            '@@transducer/step': function (xs, x) {
	                xs.push(x);
	                return xs;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatString = {
	            '@@transducer/init': String,
	            '@@transducer/step': function (a, b) {
	                return a + b;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatObject = {
	            '@@transducer/init': Object,
	            '@@transducer/step': function (result, input) {
	                return _assign(result, isArrayLike(input) ? objOf(input[0], input[1]) : input);
	            },
	            '@@transducer/result': _identity
	        };
	        return function _stepCat(obj) {
	            if (_isTransformer(obj)) {
	                return obj;
	            }
	            if (isArrayLike(obj)) {
	                return _stepCatArray;
	            }
	            if (typeof obj === 'string') {
	                return _stepCatString;
	            }
	            if (typeof obj === 'object') {
	                return _stepCatObject;
	            }
	            throw new Error('Cannot create transformer for ' + obj);
	        };
	    }();

	    var _xdropLastWhile = function () {
	        function XDropLastWhile(fn, xf) {
	            this.f = fn;
	            this.retained = [];
	            this.xf = xf;
	        }
	        XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropLastWhile.prototype['@@transducer/result'] = function (result) {
	            this.retained = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.retain(result, input) : this.flush(result, input);
	        };
	        XDropLastWhile.prototype.flush = function (result, input) {
	            result = _reduce(this.xf['@@transducer/step'], result, this.retained);
	            this.retained = [];
	            return this.xf['@@transducer/step'](result, input);
	        };
	        XDropLastWhile.prototype.retain = function (result, input) {
	            this.retained.push(input);
	            return result;
	        };
	        return _curry2(function _xdropLastWhile(fn, xf) {
	            return new XDropLastWhile(fn, xf);
	        });
	    }();

	    var _xgroupBy = function () {
	        function XGroupBy(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.inputs = {};
	        }
	        XGroupBy.prototype['@@transducer/init'] = _xfBase.init;
	        XGroupBy.prototype['@@transducer/result'] = function (result) {
	            var key;
	            for (key in this.inputs) {
	                if (_has(key, this.inputs)) {
	                    result = this.xf['@@transducer/step'](result, this.inputs[key]);
	                    if (result['@@transducer/reduced']) {
	                        result = result['@@transducer/value'];
	                        break;
	                    }
	                }
	            }
	            this.inputs = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XGroupBy.prototype['@@transducer/step'] = function (result, input) {
	            var key = this.f(input);
	            this.inputs[key] = this.inputs[key] || [
	                key,
	                []
	            ];
	            this.inputs[key][1] = append(input, this.inputs[key][1]);
	            return result;
	        };
	        return _curry2(function _xgroupBy(f, xf) {
	            return new XGroupBy(f, xf);
	        });
	    }();

	    /**
	     * Creates a new list iteration function from an existing one by adding two new
	     * parameters to its callback function: the current index, and the entire list.
	     *
	     * This would turn, for instance, Ramda's simple `map` function into one that
	     * more closely resembles `Array.prototype.map`. Note that this will only work
	     * for functions in which the iteration callback function is the first
	     * parameter, and where the list is the last parameter. (This latter might be
	     * unimportant if the list parameter is not used.)
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Function
	     * @category List
	     * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	     * @param {Function} fn A list iteration function that does not pass index or list to its callback
	     * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	     * @example
	     *
	     *      var mapIndexed = R.addIndex(R.map);
	     *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
	     *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	     */
	    var addIndex = _curry1(function addIndex(fn) {
	        return curryN(fn.length, function () {
	            var idx = 0;
	            var origFn = arguments[0];
	            var list = arguments[arguments.length - 1];
	            var args = _slice(arguments);
	            args[0] = function () {
	                var result = origFn.apply(this, _concat(arguments, [
	                    idx,
	                    list
	                ]));
	                idx += 1;
	                return result;
	            };
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly 2 parameters. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Function
	     * @sig (* -> c) -> (a, b -> c)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 2.
	     * @example
	     *
	     *      var takesThreeArgs = function(a, b, c) {
	     *        return [a, b, c];
	     *      };
	     *      takesThreeArgs.length; //=> 3
	     *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      var takesTwoArgs = R.binary(takesThreeArgs);
	     *      takesTwoArgs.length; //=> 2
	     *      // Only 2 arguments are passed to the wrapped function
	     *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
	     */
	    var binary = _curry1(function binary(fn) {
	        return nAry(2, fn);
	    });

	    /**
	     * Creates a deep copy of the value which may contain (nested) `Array`s and
	     * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are not
	     * copied, but assigned by their reference.
	     *
	     * Dispatches to a `clone` method if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {*} -> {*}
	     * @param {*} value The object or array to clone
	     * @return {*} A new object or array.
	     * @example
	     *
	     *      var objects = [{}, {}, {}];
	     *      var objectsClone = R.clone(objects);
	     *      objects[0] === objectsClone[0]; //=> false
	     */
	    var clone = _curry1(function clone(value) {
	        return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
	    });

	    /**
	     * Returns a curried equivalent of the provided function. The curried function
	     * has two unusual capabilities. First, its arguments needn't be provided one
	     * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	     * following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	     * following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (* -> a) -> (* -> a)
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curryN
	     * @example
	     *
	     *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	     *
	     *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curry = _curry1(function curry(fn) {
	        return curryN(fn.length, fn);
	    });

	    /**
	     * Returns all but the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `drop` method).
	     *
	     * Dispatches to the `drop` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.take, R.transduce
	     * @example
	     *
	     *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(3, 'ramda');               //=> 'da'
	     */
	    var drop = _curry2(_dispatchable('drop', _xdrop, function drop(n, xs) {
	        return slice(Math.max(0, n), Infinity, xs);
	    }));

	    /**
	     * Returns a list containing all but the last `n` elements of the given `list`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements of `xs` to skip.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.takeLast
	     * @example
	     *
	     *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(3, 'ramda');               //=> 'ra'
	     */
	    var dropLast = _curry2(_dispatchable('dropLast', _xdropLast, _dropLast));

	    /**
	     * Returns a new list containing all but last the`n` elements of a given list,
	     * passing each value from the right to the supplied predicate function,
	     * skipping elements while the predicate function returns `true`. The predicate
	     * function is passed one argument: (value)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeLastWhile, R.addIndex
	     * @example
	     *
	     *      var lteThree = x => x <= 3;
	     *
	     *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
	     */
	    var dropLastWhile = _curry2(_dispatchable('dropLastWhile', _xdropLastWhile, _dropLastWhile));

	    /**
	     * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	     * cyclical data structures.
	     *
	     * Dispatches symmetrically to the `equals` methods of both arguments, if
	     * present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Relation
	     * @sig a -> b -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      R.equals(1, 1); //=> true
	     *      R.equals(1, '1'); //=> false
	     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	     *
	     *      var a = {}; a.v = a;
	     *      var b = {}; b.v = b;
	     *      R.equals(a, b); //=> true
	     */
	    var equals = _curry2(function equals(a, b) {
	        return _equals(a, b, [], []);
	    });

	    /**
	     * Takes a predicate and a "filterable", and returns a new filterable of the
	     * same type containing the members of the given filterable which satisfy the
	     * given predicate.
	     *
	     * Dispatches to the `filter` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> f a
	     * @param {Function} pred
	     * @param {Array} filterable
	     * @return {Array}
	     * @see R.reject, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *
	     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	     *
	     *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	     */
	    // else
	    var filter = _curry2(_dispatchable('filter', _xfilter, function (pred, filterable) {
	        return _isObject(filterable) ? _reduce(function (acc, key) {
	            if (pred(filterable[key])) {
	                acc[key] = filterable[key];
	            }
	            return acc;
	        }, {}, keys(filterable)) : // else
	        _filter(pred, filterable);
	    }));

	    /**
	     * Returns a new list by pulling every item out of it (and all its sub-arrays)
	     * and putting them in a new array, depth-first.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b]
	     * @param {Array} list The array to consider.
	     * @return {Array} The flattened list.
	     * @see R.unnest
	     * @example
	     *
	     *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
	     *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	     */
	    var flatten = _curry1(_makeFlat(true));

	    /**
	     * Returns a new function much like the supplied one, except that the first two
	     * arguments' order is reversed.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
	     * @param {Function} fn The function to invoke with its first two parameters reversed.
	     * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	     * @example
	     *
	     *      var mergeThree = (a, b, c) => [].concat(a, b, c);
	     *
	     *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	     */
	    var flip = _curry1(function flip(fn) {
	        return curry(function (a, b) {
	            var args = _slice(arguments);
	            args[0] = b;
	            args[1] = a;
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Returns the first element of the given list or string. In some libraries
	     * this function is named `first`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {Array|String} list
	     * @return {*}
	     * @see R.tail, R.init, R.last
	     * @example
	     *
	     *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	     *      R.head([]); //=> undefined
	     *
	     *      R.head('abc'); //=> 'a'
	     *      R.head(''); //=> ''
	     */
	    var head = nth(0);

	    /**
	     * Returns all but the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.last, R.head, R.tail
	     * @example
	     *
	     *      R.init([1, 2, 3]);  //=> [1, 2]
	     *      R.init([1, 2]);     //=> [1]
	     *      R.init([1]);        //=> []
	     *      R.init([]);         //=> []
	     *
	     *      R.init('abc');  //=> 'ab'
	     *      R.init('ab');   //=> 'a'
	     *      R.init('a');    //=> ''
	     *      R.init('');     //=> ''
	     */
	    var init = slice(0, -1);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists. Duplication is determined according to the
	     * value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate function that determines whether
	     *        the two supplied elements are equal.
	     * @param {Array} list1 One list of items to compare
	     * @param {Array} list2 A second list of items to compare
	     * @return {Array} A new list containing those elements common to both lists.
	     * @see R.intersection
	     * @example
	     *
	     *      var buffaloSpringfield = [
	     *        {id: 824, name: 'Richie Furay'},
	     *        {id: 956, name: 'Dewey Martin'},
	     *        {id: 313, name: 'Bruce Palmer'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *      var csny = [
	     *        {id: 204, name: 'David Crosby'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 539, name: 'Graham Nash'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *
	     *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
	     *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
	     */
	    var intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
	        var lookupList, filteredList;
	        if (list1.length > list2.length) {
	            lookupList = list1;
	            filteredList = list2;
	        } else {
	            lookupList = list2;
	            filteredList = list1;
	        }
	        var results = [];
	        var idx = 0;
	        while (idx < filteredList.length) {
	            if (_containsWith(pred, filteredList[idx], lookupList)) {
	                results[results.length] = filteredList[idx];
	            }
	            idx += 1;
	        }
	        return uniqWith(pred, results);
	    });

	    /**
	     * Transforms the items of the list with the transducer and appends the
	     * transformed items to the accumulator using an appropriate iterator function
	     * based on the accumulator type.
	     *
	     * The accumulator can be an array, string, object or a transformer. Iterated
	     * items will be appended to arrays and concatenated to strings. Objects will
	     * be merged directly or 2-item arrays will be merged as key, value pairs.
	     *
	     * The accumulator can also be a transformer object that provides a 2-arity
	     * reducing iterator function, step, 0-arity initial value function, init, and
	     * 1-arity result extraction function result. The step function is used as the
	     * iterator function in reduce. The result function is used to convert the
	     * final accumulator into the return type and in most cases is R.identity. The
	     * init function is used to provide the initial accumulator.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig a -> (b -> b) -> [c] -> a
	     * @param {*} acc The initial accumulator value.
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.into([], transducer, numbers); //=> [2, 3]
	     *
	     *      var intoArray = R.into([]);
	     *      intoArray(transducer, numbers); //=> [2, 3]
	     */
	    var into = _curry3(function into(acc, xf, list) {
	        return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
	    });

	    /**
	     * Same as R.invertObj, however this accounts for objects with duplicate values
	     * by putting the values into an array.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {s: x} -> {x: [ s, ... ]}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object with keys
	     * in an array.
	     * @example
	     *
	     *      var raceResultsByFirstName = {
	     *        first: 'alice',
	     *        second: 'jake',
	     *        third: 'alice',
	     *      };
	     *      R.invert(raceResultsByFirstName);
	     *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
	     */
	    var invert = _curry1(function invert(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            var val = obj[key];
	            var list = _has(val, out) ? out[val] : out[val] = [];
	            list[list.length] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object with the keys of the given object as values, and the
	     * values of the given object, which are coerced to strings, as keys. Note
	     * that the last key found is preferred when handling the same value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {s: x} -> {x: s}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object
	     * @example
	     *
	     *      var raceResults = {
	     *        first: 'alice',
	     *        second: 'jake'
	     *      };
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': 'first', 'jake':'second' }
	     *
	     *      // Alternatively:
	     *      var raceResults = ['alice', 'jake'];
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': '0', 'jake':'1' }
	     */
	    var invertObj = _curry1(function invertObj(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            out[obj[key]] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns `true` if the given value is its type's empty value; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig a -> Boolean
	     * @param {*} x
	     * @return {Boolean}
	     * @see R.empty
	     * @example
	     *
	     *      R.isEmpty([1, 2, 3]);   //=> false
	     *      R.isEmpty([]);          //=> true
	     *      R.isEmpty('');          //=> true
	     *      R.isEmpty(null);        //=> false
	     *      R.isEmpty({});          //=> true
	     *      R.isEmpty({length: 0}); //=> false
	     */
	    var isEmpty = _curry1(function isEmpty(x) {
	        return x != null && equals(x, empty(x));
	    });

	    /**
	     * Returns the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.init, R.head, R.tail
	     * @example
	     *
	     *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	     *      R.last([]); //=> undefined
	     *
	     *      R.last('abc'); //=> 'c'
	     *      R.last(''); //=> ''
	     */
	    var last = nth(-1);

	    /**
	     * Returns the position of the last occurrence of an item in an array, or -1 if
	     * the item is not included in the array. `R.equals` is used to determine
	     * equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.indexOf
	     * @example
	     *
	     *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
	     *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
	     */
	    var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
	        if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
	            return xs.lastIndexOf(target);
	        } else {
	            var idx = xs.length - 1;
	            while (idx >= 0) {
	                if (equals(xs[idx], target)) {
	                    return idx;
	                }
	                idx -= 1;
	            }
	            return -1;
	        }
	    });

	    /**
	     * Takes a function and
	     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	     * applies the function to each of the functor's values, and returns
	     * a functor of the same shape.
	     *
	     * Ramda provides suitable `map` implementations for `Array` and `Object`,
	     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	     *
	     * Dispatches to the `map` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * Also treats functions as functors and will compose them together.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Functor f => (a -> b) -> f a -> f b
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {Array} list The list to be iterated over.
	     * @return {Array} The new list.
	     * @see R.transduce, R.addIndex
	     * @example
	     *
	     *      var double = x => x * 2;
	     *
	     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	     *
	     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	     */
	    var map = _curry2(_dispatchable('map', _xmap, function map(fn, functor) {
	        switch (Object.prototype.toString.call(functor)) {
	        case '[object Function]':
	            return curryN(functor.length, function () {
	                return fn.call(this, functor.apply(this, arguments));
	            });
	        case '[object Object]':
	            return _reduce(function (acc, key) {
	                acc[key] = fn(functor[key]);
	                return acc;
	            }, {}, keys(functor));
	        default:
	            return _map(fn, functor);
	        }
	    }));

	    /**
	     * An Object-specific version of `map`. The function is applied to three
	     * arguments: *(value, key, obj)*. If only the value is significant, use
	     * `map` instead.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig ((*, String, Object) -> *) -> Object -> Object
	     * @param {Function} fn
	     * @param {Object} obj
	     * @return {Object}
	     * @see R.map
	     * @example
	     *
	     *      var values = { x: 1, y: 2, z: 3 };
	     *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
	     *
	     *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	     */
	    var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
	        return _reduce(function (acc, key) {
	            acc[key] = fn(obj[key], key, obj);
	            return acc;
	        }, {}, keys(obj));
	    });

	    /**
	     * Creates a new object with the own properties of the two provided objects. If
	     * a key exists in both objects, the provided function is applied to the values
	     * associated with the key in each object, with the result being used as the
	     * value associated with the key in the returned object. The key will be
	     * excluded from the returned object if the resulting value is `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @sig (a -> a -> a) -> {a} -> {a} -> {a}
	     * @param {Function} fn
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.merge, R.mergeWithKey
	     * @example
	     *
	     *      R.mergeWith(R.concat,
	     *                  { a: true, values: [10, 20] },
	     *                  { b: true, values: [15, 35] });
	     *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
	     */
	    var mergeWith = _curry3(function mergeWith(fn, l, r) {
	        return mergeWithKey(function (_, _l, _r) {
	            return fn(_l, _r);
	        }, l, r);
	    });

	    /**
	     * Takes a function `f` and a list of arguments, and returns a function `g`.
	     * When applied, `g` returns the result of applying `f` to the arguments
	     * provided initially followed by the arguments provided to `g`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
	     * @param {Function} f
	     * @param {Array} args
	     * @return {Function}
	     * @see R.partialRight
	     * @example
	     *
	     *      var multiply = (a, b) => a * b;
	     *      var double = R.partial(multiply, [2]);
	     *      double(2); //=> 4
	     *
	     *      var greet = (salutation, title, firstName, lastName) =>
	     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *
	     *      var sayHello = R.partial(greet, ['Hello']);
	     *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
	     *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partial = _createPartialApplicator(_concat);

	    /**
	     * Takes a function `f` and a list of arguments, and returns a function `g`.
	     * When applied, `g` returns the result of applying `f` to the arguments
	     * provided to `g` followed by the arguments provided initially.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
	     * @param {Function} f
	     * @param {Array} args
	     * @return {Function}
	     * @see R.partial
	     * @example
	     *
	     *      var greet = (salutation, title, firstName, lastName) =>
	     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *
	     *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
	     *
	     *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partialRight = _createPartialApplicator(flip(_concat));

	    /**
	     * Determines whether a nested path on an object has a specific value, in
	     * `R.equals` terms. Most likely used to filter a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Relation
	     * @sig [String] -> * -> {String: *} -> Boolean
	     * @param {Array} path The path of the nested property to use
	     * @param {*} val The value to compare the nested property with
	     * @param {Object} obj The object to check the nested property in
	     * @return {Boolean} `true` if the value equals the nested object property,
	     *         `false` otherwise.
	     * @example
	     *
	     *      var user1 = { address: { zipCode: 90210 } };
	     *      var user2 = { address: { zipCode: 55555 } };
	     *      var user3 = { name: 'Bob' };
	     *      var users = [ user1, user2, user3 ];
	     *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
	     *      R.filter(isFamous, users); //=> [ user1 ]
	     */
	    var pathEq = _curry3(function pathEq(_path, val, obj) {
	        return equals(path(_path, obj), val);
	    });

	    /**
	     * Returns a new list by plucking the same named property off all objects in
	     * the list supplied.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig k -> [{k: v}] -> [v]
	     * @param {Number|String} key The key name to pluck off of each object.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of values for the given key.
	     * @see R.props
	     * @example
	     *
	     *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	     *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	     */
	    var pluck = _curry2(function pluck(p, list) {
	        return map(prop(p), list);
	    });

	    /**
	     * Reasonable analog to SQL `select` statement.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @category Relation
	     * @sig [k] -> [{k: v}] -> [{k: v}]
	     * @param {Array} props The property names to project
	     * @param {Array} objs The objects to query
	     * @return {Array} An array of objects with just the `props` properties.
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
	     *      var kids = [abby, fred];
	     *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
	     */
	    // passing `identity` gives correct arity
	    var project = useWith(_map, [
	        pickAll,
	        identity
	    ]);

	    /**
	     * Returns `true` if the specified object property is equal, in `R.equals`
	     * terms, to the given value; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig String -> a -> Object -> Boolean
	     * @param {String} name
	     * @param {*} val
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.equals, R.propSatisfies
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	     *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	     *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	     *      var kids = [abby, fred, rusty, alois];
	     *      var hasBrownHair = R.propEq('hair', 'brown');
	     *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	     */
	    var propEq = _curry3(function propEq(name, val, obj) {
	        return propSatisfies(equals(val), name, obj);
	    });

	    /**
	     * Returns `true` if the specified object property is of the given type;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Type
	     * @sig Type -> String -> Object -> Boolean
	     * @param {Function} type
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.is, R.propSatisfies
	     * @example
	     *
	     *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
	     *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
	     *      R.propIs(Number, 'x', {});            //=> false
	     */
	    var propIs = _curry3(function propIs(type, name, obj) {
	        return propSatisfies(is(type), name, obj);
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling
	     * the iterator function and passing it an accumulator value and the current
	     * value from the array, and then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It may use
	     * `R.reduced` to shortcut the iteration.
	     *
	     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.reduce` method. For more details
	     * on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	     *
	     * Dispatches to the `reduce` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig ((a, b) -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.reduced, R.addIndex
	     * @example
	     *
	     *      var numbers = [1, 2, 3];
	     *      var add = (a, b) => a + b;
	     *
	     *      R.reduce(add, 10, numbers); //=> 16
	     */
	    var reduce = _curry3(_reduce);

	    /**
	     * Groups the elements of the list according to the result of calling
	     * the String-returning function `keyFn` on each element and reduces the elements
	     * of each group to a single value via the reducer function `valueFn`.
	     *
	     * This function is basically a more general `groupBy` function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category List
	     * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
	     * @param {Function} valueFn The function that reduces the elements of each group to a single
	     *        value. Receives two values, accumulator for a particular group and the current element.
	     * @param {*} acc The (initial) accumulator value for each group.
	     * @param {Function} keyFn The function that maps the list's element into a key.
	     * @param {Array} list The array to group.
	     * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
	     *         `valueFn` for elements which produced that key when passed to `keyFn`.
	     * @see R.groupBy, R.reduce
	     * @example
	     *
	     *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
	     *      var namesByGrade = reduceToNamesBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Lucy', score: 92},
	     *                      {name: 'Drew', score: 85},
	     *                      // ...
	     *                      {name: 'Bart', score: 62}];
	     *      namesByGrade(students);
	     *      // {
	     *      //   'A': ['Lucy'],
	     *      //   'B': ['Drew']
	     *      //   // ...,
	     *      //   'F': ['Bart']
	     *      // }
	     */
	    var reduceBy = _curryN(4, [], function reduceBy(valueFn, valueAcc, keyFn, list) {
	        return _reduce(function (acc, elt) {
	            var key = keyFn(elt);
	            acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
	            return acc;
	        }, {}, list);
	    });

	    /**
	     * The complement of `filter`.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> f a
	     * @param {Function} pred
	     * @param {Array} filterable
	     * @return {Array}
	     * @see R.filter, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isOdd = (n) => n % 2 === 1;
	     *
	     *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	     *
	     *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	     */
	    var reject = _curry2(function reject(pred, filterable) {
	        return filter(_complement(pred), filterable);
	    });

	    /**
	     * Returns a fixed list of size `n` containing a specified identical value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig a -> n -> [a]
	     * @param {*} value The value to repeat.
	     * @param {Number} n The desired size of the output list.
	     * @return {Array} A new array containing `n` `value`s.
	     * @example
	     *
	     *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
	     *
	     *      var obj = {};
	     *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
	     *      repeatedObjs[0] === repeatedObjs[1]; //=> true
	     */
	    var repeat = _curry2(function repeat(value, n) {
	        return times(always(value), n);
	    });

	    /**
	     * Adds together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The sum of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.sum([2,4,6,8,100,1]); //=> 121
	     */
	    var sum = reduce(add, 0);

	    /**
	     * Returns a new list containing the last `n` elements of the given list.
	     * If `n > list.length`, returns a list of `list.length` elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements to return.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.dropLast
	     * @example
	     *
	     *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(3, 'ramda');               //=> 'mda'
	     */
	    var takeLast = _curry2(function takeLast(n, xs) {
	        return drop(n >= 0 ? xs.length - n : 0, xs);
	    });

	    /**
	     * Initializes a transducer using supplied iterator function. Returns a single
	     * item by iterating through the list, successively calling the transformed
	     * iterator function and passing it an accumulator value and the current value
	     * from the array, and then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It will be
	     * wrapped as a transformer to initialize the transducer. A transformer can be
	     * passed directly in place of an iterator function. In both cases, iteration
	     * may be stopped early with the `R.reduced` function.
	     *
	     * A transducer is a function that accepts a transformer and returns a
	     * transformer and can be composed directly.
	     *
	     * A transformer is an an object that provides a 2-arity reducing iterator
	     * function, step, 0-arity initial value function, init, and 1-arity result
	     * extraction function, result. The step function is used as the iterator
	     * function in reduce. The result function is used to convert the final
	     * accumulator into the return type and in most cases is R.identity. The init
	     * function can be used to provide an initial accumulator, but is ignored by
	     * transduce.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array. Wrapped as transformer, if necessary, and used to
	     *        initialize the transducer
	     * @param {*} acc The initial accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.reduce, R.reduced, R.into
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
	     */
	    var transduce = curryN(4, function transduce(xf, fn, acc, list) {
	        return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements
	     * of each list. Duplication is determined according to the value returned by
	     * applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @see R.union
	     * @example
	     *
	     *      var l1 = [{a: 1}, {a: 2}];
	     *      var l2 = [{a: 1}, {a: 4}];
	     *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
	     */
	    var unionWith = _curry3(function unionWith(pred, list1, list2) {
	        return uniqWith(pred, _concat(list1, list2));
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec, false otherwise. An object satisfies the spec if, for each of the
	     * spec's own properties, accessing that property of the object gives the same
	     * value (in `R.equals` terms) as accessing that property of the spec.
	     *
	     * `whereEq` is a specialization of [`where`](#where).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @sig {String: *} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @see R.where
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.whereEq({a: 1, b: 2});
	     *
	     *      pred({a: 1});              //=> false
	     *      pred({a: 1, b: 2});        //=> true
	     *      pred({a: 1, b: 2, c: 3});  //=> true
	     *      pred({a: 1, b: 1});        //=> false
	     */
	    var whereEq = _curry2(function whereEq(spec, testObj) {
	        return where(map(equals, spec), testObj);
	    });

	    var _flatCat = function () {
	        var preservingReduced = function (xf) {
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return xf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    var ret = xf['@@transducer/step'](result, input);
	                    return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
	                }
	            };
	        };
	        return function _xcat(xf) {
	            var rxf = preservingReduced(xf);
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return rxf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
	                }
	            };
	        };
	    }();

	    // Array.prototype.indexOf doesn't exist below IE9
	    // manually crawl the list to distinguish between +0 and -0
	    // NaN
	    // non-zero numbers can utilise Set
	    // all these types can utilise Set
	    // null can utilise Set
	    // anything else not covered above, defer to R.equals
	    var _indexOf = function _indexOf(list, a, idx) {
	        var inf, item;
	        // Array.prototype.indexOf doesn't exist below IE9
	        if (typeof list.indexOf === 'function') {
	            switch (typeof a) {
	            case 'number':
	                if (a === 0) {
	                    // manually crawl the list to distinguish between +0 and -0
	                    inf = 1 / a;
	                    while (idx < list.length) {
	                        item = list[idx];
	                        if (item === 0 && 1 / item === inf) {
	                            return idx;
	                        }
	                        idx += 1;
	                    }
	                    return -1;
	                } else if (a !== a) {
	                    // NaN
	                    while (idx < list.length) {
	                        item = list[idx];
	                        if (typeof item === 'number' && item !== item) {
	                            return idx;
	                        }
	                        idx += 1;
	                    }
	                    return -1;
	                }
	                // non-zero numbers can utilise Set
	                return list.indexOf(a, idx);
	            // all these types can utilise Set
	            case 'string':
	            case 'boolean':
	            case 'function':
	            case 'undefined':
	                return list.indexOf(a, idx);
	            case 'object':
	                if (a === null) {
	                    // null can utilise Set
	                    return list.indexOf(a, idx);
	                }
	            }
	        }
	        // anything else not covered above, defer to R.equals
	        while (idx < list.length) {
	            if (equals(list[idx], a)) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    };

	    var _xchain = _curry2(function _xchain(f, xf) {
	        return map(f, _flatCat(xf));
	    });

	    /**
	     * Takes a list of predicates and returns a predicate that returns true for a
	     * given list of arguments if every one of the provided predicates is satisfied
	     * by those arguments.
	     *
	     * The function returned is a curried function whose arity matches that of the
	     * highest-arity predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} preds
	     * @return {Function}
	     * @see R.anyPass
	     * @example
	     *
	     *      var isQueen = R.propEq('rank', 'Q');
	     *      var isSpade = R.propEq('suit', '♠︎');
	     *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
	     *
	     *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
	     *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
	     */
	    var allPass = _curry1(function allPass(preds) {
	        return curryN(reduce(max, 0, pluck('length', preds)), function () {
	            var idx = 0;
	            var len = preds.length;
	            while (idx < len) {
	                if (!preds[idx].apply(this, arguments)) {
	                    return false;
	                }
	                idx += 1;
	            }
	            return true;
	        });
	    });

	    /**
	     * Returns `true` if all elements are unique, in `R.equals` terms, otherwise
	     * `false`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category List
	     * @sig [a] -> Boolean
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if all elements are unique, else `false`.
	     * @deprecated since v0.20.0
	     * @example
	     *
	     *      R.allUniq(['1', 1]); //=> true
	     *      R.allUniq([1, 1]);   //=> false
	     *      R.allUniq([[42], [42]]); //=> false
	     */
	    var allUniq = _curry1(function allUniq(list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            if (_indexOf(list, list[idx], idx + 1) >= 0) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    });

	    /**
	     * Takes a list of predicates and returns a predicate that returns true for a
	     * given list of arguments if at least one of the provided predicates is
	     * satisfied by those arguments.
	     *
	     * The function returned is a curried function whose arity matches that of the
	     * highest-arity predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} preds
	     * @return {Function}
	     * @see R.allPass
	     * @example
	     *
	     *      var gte = R.anyPass([R.gt, R.equals]);
	     *
	     *      gte(3, 2); //=> true
	     *      gte(2, 2); //=> true
	     *      gte(2, 3); //=> false
	     */
	    var anyPass = _curry1(function anyPass(preds) {
	        return curryN(reduce(max, 0, pluck('length', preds)), function () {
	            var idx = 0;
	            var len = preds.length;
	            while (idx < len) {
	                if (preds[idx].apply(this, arguments)) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        });
	    });

	    /**
	     * ap applies a list of functions to a list of values.
	     *
	     * Dispatches to the `ap` method of the second argument, if present. Also
	     * treats functions as applicatives.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig [f] -> [a] -> [f a]
	     * @param {Array} fns An array of functions
	     * @param {Array} vs An array of values
	     * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
	     * @example
	     *
	     *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	     */
	    // else
	    var ap = _curry2(function ap(applicative, fn) {
	        return typeof applicative.ap === 'function' ? applicative.ap(fn) : typeof applicative === 'function' ? curryN(Math.max(applicative.length, fn.length), function () {
	            return applicative.apply(this, arguments)(fn.apply(this, arguments));
	        }) : // else
	        _reduce(function (acc, f) {
	            return _concat(acc, map(f, fn));
	        }, [], applicative);
	    });

	    /**
	     * Given a spec object recursively mapping properties to functions, creates a
	     * function producing an object of the same structure, by mapping each property
	     * to the result of calling its associated function with the supplied arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Function
	     * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
	     * @param {Object} spec an object recursively mapping properties to functions for
	     *        producing the values for these properties.
	     * @return {Function} A function that returns an object of the same structure
	     * as `spec', with each property set to the value returned by calling its
	     * associated function with the supplied arguments.
	     * @see R.juxt
	     * @example
	     *
	     *      var getMetrics = R.applySpec({
	     *                                      sum: R.add,
	     *                                      nested: { mul: R.multiply }
	     *                                   });
	     *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
	     */
	    var applySpec = _curry1(function applySpec(spec) {
	        spec = map(function (v) {
	            return typeof v == 'function' ? v : applySpec(v);
	        }, spec);
	        return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
	            var args = arguments;
	            return map(function (f) {
	                return apply(f, args);
	            }, spec);
	        });
	    });

	    /**
	     * Returns the result of calling its first argument with the remaining
	     * arguments. This is occasionally useful as a converging function for
	     * `R.converge`: the left branch can produce a function while the right branch
	     * produces a value to be passed to that function as an argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig (*... -> a),*... -> a
	     * @param {Function} fn The function to apply to the remaining arguments.
	     * @param {...*} args Any number of positional arguments.
	     * @return {*}
	     * @see R.apply
	     * @example
	     *
	     *      var indentN = R.pipe(R.times(R.always(' ')),
	     *                           R.join(''),
	     *                           R.replace(/^(?!$)/gm));
	     *
	     *      var format = R.converge(R.call, [
	     *                                  R.pipe(R.prop('indent'), indentN),
	     *                                  R.prop('value')
	     *                              ]);
	     *
	     *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	     */
	    var call = curry(function call(fn) {
	        return fn.apply(this, _slice(arguments, 1));
	    });

	    /**
	     * `chain` maps a function over a list and concatenates the results. `chain`
	     * is also known as `flatMap` in some libraries
	     *
	     * Dispatches to the `chain` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig (a -> [b]) -> [a] -> [b]
	     * @param {Function} fn
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      var duplicate = n => [n, n];
	     *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
	     */
	    var chain = _curry2(_dispatchable('chain', _xchain, function chain(fn, monad) {
	        if (typeof monad === 'function') {
	            return function () {
	                return monad.call(this, fn.apply(this, arguments)).apply(this, arguments);
	            };
	        }
	        return _makeFlat(false)(map(fn, monad));
	    }));

	    /**
	     * Returns a function, `fn`, which encapsulates if/else-if/else logic.
	     * `R.cond` takes a list of [predicate, transform] pairs. All of the arguments
	     * to `fn` are applied to each of the predicates in turn until one returns a
	     * "truthy" value, at which point `fn` returns the result of applying its
	     * arguments to the corresponding transformer. If none of the predicates
	     * matches, `fn` returns undefined.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Logic
	     * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	     * @param {Array} pairs
	     * @return {Function}
	     * @example
	     *
	     *      var fn = R.cond([
	     *        [R.equals(0),   R.always('water freezes at 0°C')],
	     *        [R.equals(100), R.always('water boils at 100°C')],
	     *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	     *      ]);
	     *      fn(0); //=> 'water freezes at 0°C'
	     *      fn(50); //=> 'nothing special happens at 50°C'
	     *      fn(100); //=> 'water boils at 100°C'
	     */
	    var cond = _curry1(function cond(pairs) {
	        var arity = reduce(max, 0, map(function (pair) {
	            return pair[0].length;
	        }, pairs));
	        return _arity(arity, function () {
	            var idx = 0;
	            while (idx < pairs.length) {
	                if (pairs[idx][0].apply(this, arguments)) {
	                    return pairs[idx][1].apply(this, arguments);
	                }
	                idx += 1;
	            }
	        });
	    });

	    /**
	     * Wraps a constructor function inside a curried function that can be called
	     * with the same arguments and returns the same type. The arity of the function
	     * returned is specified to allow using variadic constructor functions.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Function
	     * @sig Number -> (* -> {*}) -> (* -> {*})
	     * @param {Number} n The arity of the constructor function.
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Variadic constructor function
	     *      var Widget = () => {
	     *        this.children = Array.prototype.slice.call(arguments);
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.constructN(1, Widget), allConfigs); // a list of Widgets
	     */
	    var constructN = _curry2(function constructN(n, Fn) {
	        if (n > 10) {
	            throw new Error('Constructor with greater than ten arguments');
	        }
	        if (n === 0) {
	            return function () {
	                return new Fn();
	            };
	        }
	        return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
	            switch (arguments.length) {
	            case 1:
	                return new Fn($0);
	            case 2:
	                return new Fn($0, $1);
	            case 3:
	                return new Fn($0, $1, $2);
	            case 4:
	                return new Fn($0, $1, $2, $3);
	            case 5:
	                return new Fn($0, $1, $2, $3, $4);
	            case 6:
	                return new Fn($0, $1, $2, $3, $4, $5);
	            case 7:
	                return new Fn($0, $1, $2, $3, $4, $5, $6);
	            case 8:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
	            case 9:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
	            case 10:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
	            }
	        }));
	    });

	    /**
	     * Accepts a converging function and a list of branching functions and returns
	     * a new function. When invoked, this new function is applied to some
	     * arguments, each branching function is applied to those same arguments. The
	     * results of each branching function are passed as arguments to the converging
	     * function to produce the return value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.2
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
	     * @param {Function} after A function. `after` will be invoked with the return values of
	     *        `fn1` and `fn2` as its arguments.
	     * @param {Array} functions A list of functions.
	     * @return {Function} A new function.
	     * @example
	     *
	     *      var add = (a, b) => a + b;
	     *      var multiply = (a, b) => a * b;
	     *      var subtract = (a, b) => a - b;
	     *
	     *      //≅ multiply( add(1, 2), subtract(1, 2) );
	     *      R.converge(multiply, [add, subtract])(1, 2); //=> -3
	     *
	     *      var add3 = (a, b, c) => a + b + c;
	     *      R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4
	     */
	    var converge = _curry2(function converge(after, fns) {
	        return curryN(reduce(max, 0, pluck('length', fns)), function () {
	            var args = arguments;
	            var context = this;
	            return after.apply(context, _map(function (fn) {
	                return fn.apply(context, args);
	            }, fns));
	        });
	    });

	    /**
	     * Counts the elements of a list according to how many match each value of a
	     * key generated by the supplied function. Returns an object mapping the keys
	     * produced by `fn` to the number of occurrences in the list. Note that all
	     * keys are coerced to strings because of how JavaScript objects work.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> String) -> [a] -> {*}
	     * @param {Function} fn The function used to map values to keys.
	     * @param {Array} list The list to count elements from.
	     * @return {Object} An object mapping keys to number of occurrences in the list.
	     * @example
	     *
	     *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
	     *      var letters = R.split('', 'abcABCaaaBBc');
	     *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
	     *      R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
	     */
	    var countBy = reduceBy(function (acc, elem) {
	        return acc + 1;
	    }, 0);

	    /**
	     * Returns a new list without any consecutively repeating elements. Equality is
	     * determined by applying the supplied predicate two consecutive elements. The
	     * first element in a series of equal element is the one being preserved.
	     *
	     * Dispatches to the `dropRepeatsWith` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @see R.transduce
	     * @example
	     *
	     *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
	     *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
	     */
	    var dropRepeatsWith = _curry2(_dispatchable('dropRepeatsWith', _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
	        var result = [];
	        var idx = 1;
	        var len = list.length;
	        if (len !== 0) {
	            result[0] = list[0];
	            while (idx < len) {
	                if (!pred(last(result), list[idx])) {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	        }
	        return result;
	    }));

	    /**
	     * Takes a function and two values in its domain and returns `true` if the
	     * values map to the same value in the codomain; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Relation
	     * @sig (a -> b) -> a -> a -> Boolean
	     * @param {Function} f
	     * @param {*} x
	     * @param {*} y
	     * @return {Boolean}
	     * @example
	     *
	     *      R.eqBy(Math.abs, 5, -5); //=> true
	     */
	    var eqBy = _curry3(function eqBy(f, x, y) {
	        return equals(f(x), f(y));
	    });

	    /**
	     * Reports whether two objects have the same value, in `R.equals` terms, for
	     * the specified property. Useful as a curried predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig k -> {k: v} -> {k: v} -> Boolean
	     * @param {String} prop The name of the property to compare
	     * @param {Object} obj1
	     * @param {Object} obj2
	     * @return {Boolean}
	     *
	     * @example
	     *
	     *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
	     *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
	     *      R.eqProps('a', o1, o2); //=> false
	     *      R.eqProps('c', o1, o2); //=> true
	     */
	    var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
	        return equals(obj1[prop], obj2[prop]);
	    });

	    /**
	     * Splits a list into sub-lists stored in an object, based on the result of
	     * calling a String-returning function on each element, and grouping the
	     * results according to values returned.
	     *
	     * Dispatches to the `groupBy` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> String) -> [a] -> {String: [a]}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} list The array to group
	     * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
	     *         that produced that key when passed to `fn`.
	     * @see R.transduce
	     * @example
	     *
	     *      var byGrade = R.groupBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Abby', score: 84},
	     *                      {name: 'Eddy', score: 58},
	     *                      // ...
	     *                      {name: 'Jack', score: 69}];
	     *      byGrade(students);
	     *      // {
	     *      //   'A': [{name: 'Dianne', score: 99}],
	     *      //   'B': [{name: 'Abby', score: 84}]
	     *      //   // ...,
	     *      //   'F': [{name: 'Eddy', score: 58}]
	     *      // }
	     */
	    var groupBy = _curry2(_dispatchable('groupBy', _xgroupBy, reduceBy(function (acc, item) {
	        if (acc == null) {
	            acc = [];
	        }
	        acc.push(item);
	        return acc;
	    }, null)));

	    /**
	     * Given a function that generates a key, turns a list of objects into an
	     * object indexing the objects by the given key. Note that if multiple
	     * objects generate the same value for the indexing key only the last value
	     * will be included in the generated object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} array The array of objects to index
	     * @return {Object} An object indexing each array element by the given property.
	     * @example
	     *
	     *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
	     *      R.indexBy(R.prop('id'), list);
	     *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
	     */
	    var indexBy = reduceBy(function (acc, elem) {
	        return elem;
	    }, null);

	    /**
	     * Returns the position of the first occurrence of an item in an array, or -1
	     * if the item is not included in the array. `R.equals` is used to determine
	     * equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.lastIndexOf
	     * @example
	     *
	     *      R.indexOf(3, [1,2,3,4]); //=> 2
	     *      R.indexOf(10, [1,2,3,4]); //=> -1
	     */
	    var indexOf = _curry2(function indexOf(target, xs) {
	        return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
	    });

	    /**
	     * juxt applies a list of functions to a list of values.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Function
	     * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
	     * @param {Array} fns An array of functions
	     * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
	     * @see R.applySpec
	     * @example
	     *
	     *      var range = R.juxt([Math.min, Math.max]);
	     *      range(3, 4, 9, -3); //=> [-3, 9]
	     */
	    var juxt = _curry1(function juxt(fns) {
	        return converge(_arrayOf, fns);
	    });

	    /**
	     * Returns a lens for the given getter and setter functions. The getter "gets"
	     * the value of the focus; the setter "sets" the value of the focus. The setter
	     * should not mutate the data structure.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	     * @param {Function} getter
	     * @param {Function} setter
	     * @return {Lens}
	     * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lens = _curry2(function lens(getter, setter) {
	        return function (toFunctorFn) {
	            return function (target) {
	                return map(function (focus) {
	                    return setter(focus, target);
	                }, toFunctorFn(getter(target)));
	            };
	        };
	    });

	    /**
	     * Returns a lens whose focus is the specified index.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Number -> Lens s a
	     * @param {Number} n
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
	     *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
	     *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
	     */
	    var lensIndex = _curry1(function lensIndex(n) {
	        return lens(nth(n), update(n));
	    });

	    /**
	     * Returns a lens whose focus is the specified path.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig [String] -> Lens s a
	     * @param {Array} path The path to use.
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xyLens = R.lensPath(['x', 'y']);
	     *
	     *      R.view(xyLens, {x: {y: 2, z: 3}});            //=> 2
	     *      R.set(xyLens, 4, {x: {y: 2, z: 3}});          //=> {x: {y: 4, z: 3}}
	     *      R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  //=> {x: {y: -2, z: 3}}
	     */
	    var lensPath = _curry1(function lensPath(p) {
	        return lens(path(p), assocPath(p));
	    });

	    /**
	     * Returns a lens whose focus is the specified property.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig String -> Lens s a
	     * @param {String} k
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lensProp = _curry1(function lensProp(k) {
	        return lens(prop(k), assoc(k));
	    });

	    /**
	     * "lifts" a function to be the specified arity, so that it may "map over" that
	     * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig Number -> (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The lifted function.
	     * @see R.lift, R.ap
	     * @example
	     *
	     *      var madd3 = R.liftN(3, R.curryN(3, (...args) => R.sum(args)));
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     */
	    var liftN = _curry2(function liftN(arity, fn) {
	        var lifted = curryN(arity, fn);
	        return curryN(arity, function () {
	            return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
	        });
	    });

	    /**
	     * Returns the mean of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.mean([2, 7, 9]); //=> 6
	     *      R.mean([]); //=> NaN
	     */
	    var mean = _curry1(function mean(list) {
	        return sum(list) / list.length;
	    });

	    /**
	     * Returns the median of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.median([2, 9, 7]); //=> 7
	     *      R.median([7, 2, 10, 9]); //=> 8
	     *      R.median([]); //=> NaN
	     */
	    var median = _curry1(function median(list) {
	        var len = list.length;
	        if (len === 0) {
	            return NaN;
	        }
	        var width = 2 - len % 2;
	        var idx = (len - width) / 2;
	        return mean(_slice(list).sort(function (a, b) {
	            return a < b ? -1 : a > b ? 1 : 0;
	        }).slice(idx, idx + width));
	    });

	    /**
	     * Takes a predicate and a list or other "filterable" object and returns the
	     * pair of filterable objects of the same type of elements which do and do not
	     * satisfy, the predicate, respectively.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
	     * @param {Function} pred A predicate to determine which side the element belongs to.
	     * @param {Array} filterable the list (or other filterable) to partition.
	     * @return {Array} An array, containing first the subset of elements that satisfy the
	     *         predicate, and second the subset of elements that do not satisfy.
	     * @see R.filter, R.reject
	     * @example
	     *
	     *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
	     *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
	     *
	     *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
	     *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
	     */
	    var partition = juxt([
	        filter,
	        reject
	    ]);

	    /**
	     * Performs left-to-right function composition. The leftmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * In some libraries this function is named `sequence`.
	     *
	     * **Note:** The result of pipe is not automatically curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.compose
	     * @example
	     *
	     *      var f = R.pipe(Math.pow, R.negate, R.inc);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var pipe = function pipe() {
	        if (arguments.length === 0) {
	            throw new Error('pipe requires at least one argument');
	        }
	        return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	    };

	    /**
	     * Performs left-to-right composition of one or more Promise-returning
	     * functions. The leftmost function may have any arity; the remaining functions
	     * must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.composeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
	     */
	    var pipeP = function pipeP() {
	        if (arguments.length === 0) {
	            throw new Error('pipeP requires at least one argument');
	        }
	        return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
	    };

	    /**
	     * Multiplies together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The product of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.product([2,4,6,8,100,1]); //=> 38400
	     */
	    var product = reduce(multiply, 1);

	    /**
	     * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
	     * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
	     * Applicative of Traversable.
	     *
	     * Dispatches to the `sequence` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
	     * @param {Function} of
	     * @param {*} traversable
	     * @return {*}
	     * @see R.traverse
	     * @example
	     *
	     *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
	     *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	     *
	     *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
	     *      R.sequence(R.of, Nothing());       //=> [Nothing()]
	     */
	    var sequence = _curry2(function sequence(of, traversable) {
	        return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (acc, x) {
	            return ap(map(prepend, x), acc);
	        }, of([]), traversable);
	    });

	    /**
	     * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
	     * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
	     * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
	     * into an Applicative of Traversable.
	     *
	     * Dispatches to the `sequence` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
	     * @param {Function} of
	     * @param {Function} f
	     * @param {*} traversable
	     * @return {*}
	     * @see R.sequence
	     * @example
	     *
	     *      // Returns `Nothing` if the given divisor is `0`
	     *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
	     *
	     *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
	     *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
	     */
	    var traverse = _curry3(function traverse(of, f, traversable) {
	        return sequence(of, map(f, traversable));
	    });

	    /**
	     * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
	     * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig Chain c => c (c a) -> c a
	     * @param {*} list
	     * @return {*}
	     * @see R.flatten, R.chain
	     * @example
	     *
	     *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
	     *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
	     */
	    var unnest = chain(_identity);

	    var _contains = function _contains(a, list) {
	        return _indexOf(list, a, 0) >= 0;
	    };

	    //  mapPairs :: (Object, [String]) -> [String]
	    var _toString = function _toString(x, seen) {
	        var recur = function recur(y) {
	            var xs = seen.concat([x]);
	            return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	        };
	        //  mapPairs :: (Object, [String]) -> [String]
	        var mapPairs = function (obj, keys) {
	            return _map(function (k) {
	                return _quote(k) + ': ' + recur(obj[k]);
	            }, keys.slice().sort());
	        };
	        switch (Object.prototype.toString.call(x)) {
	        case '[object Arguments]':
	            return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	        case '[object Array]':
	            return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
	                return /^\d+$/.test(k);
	            }, keys(x)))).join(', ') + ']';
	        case '[object Boolean]':
	            return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	        case '[object Date]':
	            return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
	        case '[object Null]':
	            return 'null';
	        case '[object Number]':
	            return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	        case '[object String]':
	            return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	        case '[object Undefined]':
	            return 'undefined';
	        default:
	            if (typeof x.toString === 'function') {
	                var repr = x.toString();
	                if (repr !== '[object Object]') {
	                    return repr;
	                }
	            }
	            return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	        }
	    };

	    /**
	     * Performs right-to-left function composition. The rightmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * **Note:** The result of compose is not automatically curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipe
	     * @example
	     *
	     *      var f = R.compose(R.inc, R.negate, Math.pow);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var compose = function compose() {
	        if (arguments.length === 0) {
	            throw new Error('compose requires at least one argument');
	        }
	        return pipe.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the right-to-left Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Function
	     * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @see R.pipeK
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.composeK(
	     *        R.compose(Maybe.of, R.toUpper),
	     *        get('state'),
	     *        get('address'),
	     *        get('user'),
	     *        parseJson
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var composeK = function composeK() {
	        return compose.apply(this, prepend(identity, map(chain, arguments)));
	    };

	    /**
	     * Performs right-to-left composition of one or more Promise-returning
	     * functions. The rightmost function may have any arity; the remaining
	     * functions must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.composeP(db.getFollowers, db.getUserById);
	     */
	    var composeP = function composeP() {
	        if (arguments.length === 0) {
	            throw new Error('composeP requires at least one argument');
	        }
	        return pipeP.apply(this, reverse(arguments));
	    };

	    /**
	     * Wraps a constructor function inside a curried function that can be called
	     * with the same arguments and returns the same type.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (* -> {*}) -> (* -> {*})
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Constructor function
	     *      var Widget = config => {
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.construct(Widget), allConfigs); // a list of Widgets
	     */
	    var construct = _curry1(function construct(Fn) {
	        return constructN(Fn.length, Fn);
	    });

	    /**
	     * Returns `true` if the specified value is equal, in `R.equals` terms, to at
	     * least one element of the given list; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Boolean
	     * @param {Object} a The item to compare against.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the item is in the list, `false` otherwise.
	     * @see R.any
	     * @example
	     *
	     *      R.contains(3, [1, 2, 3]); //=> true
	     *      R.contains(4, [1, 2, 3]); //=> false
	     *      R.contains([42], [[42]]); //=> true
	     */
	    var contains = _curry2(_contains);

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not
	     * contained in the second list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.differenceWith
	     * @example
	     *
	     *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
	     *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
	     */
	    var difference = _curry2(function difference(first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
	                out[out.length] = first[idx];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new list without any consecutively repeating elements. `R.equals`
	     * is used to determine equality.
	     *
	     * Dispatches to the `dropRepeats` method of the first argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @see R.transduce
	     * @example
	     *
	     *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
	     */
	    var dropRepeats = _curry1(_dispatchable('dropRepeats', _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

	    /**
	     * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	     * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The lifted function.
	     * @see R.liftN
	     * @example
	     *
	     *      var madd3 = R.lift(R.curry((a, b, c) => a + b + c));
	     *
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     *
	     *      var madd5 = R.lift(R.curry((a, b, c, d, e) => a + b + c + d + e));
	     *
	     *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	     */
	    var lift = _curry1(function lift(fn) {
	        return liftN(fn.length, fn);
	    });

	    /**
	     * Returns a partial copy of an object omitting the keys specified.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [String] -> {String: *} -> {String: *}
	     * @param {Array} names an array of String property names to omit from the new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with properties from `names` not on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	     */
	    var omit = _curry2(function omit(names, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (!_contains(prop, names)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the left-to-right Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Function
	     * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @see R.composeK
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.pipeK(
	     *        parseJson,
	     *        get('user'),
	     *        get('address'),
	     *        get('state'),
	     *        R.compose(Maybe.of, R.toUpper)
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var pipeK = function pipeK() {
	        return composeK.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the string representation of the given value. `eval`'ing the output
	     * should result in a value equivalent to the input value. Many of the built-in
	     * `toString` methods do not satisfy this requirement.
	     *
	     * If the given value is an `[object Object]` with a `toString` method other
	     * than `Object.prototype.toString`, this method is invoked with no arguments
	     * to produce the return value. This means user-defined constructor functions
	     * can provide a suitable `toString` method. For example:
	     *
	     *     function Point(x, y) {
	     *       this.x = x;
	     *       this.y = y;
	     *     }
	     *
	     *     Point.prototype.toString = function() {
	     *       return 'new Point(' + this.x + ', ' + this.y + ')';
	     *     };
	     *
	     *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category String
	     * @sig * -> String
	     * @param {*} val
	     * @return {String}
	     * @example
	     *
	     *      R.toString(42); //=> '42'
	     *      R.toString('abc'); //=> '"abc"'
	     *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	     *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	     *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	     */
	    var toString = _curry1(function toString(val) {
	        return _toString(val, []);
	    });

	    /**
	     * Returns a new list without values in the first argument.
	     * `R.equals` is used to determine equality.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} list1 The values to be removed from `list2`.
	     * @param {Array} list2 The array to remove values from.
	     * @return {Array} The new array without values in `list1`.
	     * @see R.transduce
	     * @example
	     *
	     *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
	     */
	    var without = _curry2(function (xs, list) {
	        return reject(flip(_contains)(xs), list);
	    });

	    // A simple Set type that honours R.equals semantics
	    /* globals Set */
	    /**
	       * Combines the logic for checking whether an item is a member of the set and
	       * for adding a new item to the set.
	       *
	       * @param item       The item to check or add to the Set instance.
	       * @param shouldAdd  If true, the item will be added to the set if it doesn't
	       *                   already exist.
	       * @param set        The set instance to check or add to.
	       * @return {boolean} When shouldAdd is true, this will return true when a new
	       *                   item was added otherwise false. When shouldAdd is false,
	       *                   this will return true if the item already exists, otherwise
	       *                   false.
	       */
	    // distinguish between +0 and -0
	    // these types can all utilise Set
	    // set._items['boolean'] holds a two element array
	    // representing [ falseExists, trueExists ]
	    // compare functions for reference equality
	    /* falls through */
	    // reduce the search size of heterogeneous sets by creating buckets
	    // for each type.
	    // scan through all previously applied items
	    var _Set = function () {
	        function _Set() {
	            /* globals Set */
	            this._nativeSet = typeof Set === 'function' ? new Set() : null;
	            this._items = {};
	        }
	        _Set.prototype.add = function (item) {
	            return hasOrAdd(item, true, this);
	        };
	        _Set.prototype.has = function (item) {
	            return hasOrAdd(item, false, this);
	        };
	        /**
	       * Combines the logic for checking whether an item is a member of the set and
	       * for adding a new item to the set.
	       *
	       * @param item       The item to check or add to the Set instance.
	       * @param shouldAdd  If true, the item will be added to the set if it doesn't
	       *                   already exist.
	       * @param set        The set instance to check or add to.
	       * @return {boolean} When shouldAdd is true, this will return true when a new
	       *                   item was added otherwise false. When shouldAdd is false,
	       *                   this will return true if the item already exists, otherwise
	       *                   false.
	       */
	        function hasOrAdd(item, shouldAdd, set) {
	            var type = typeof item;
	            var prevSize, newSize;
	            switch (type) {
	            case 'string':
	            case 'number':
	                // distinguish between +0 and -0
	                if (item === 0 && !set._items['-0'] && 1 / item === -Infinity) {
	                    if (shouldAdd) {
	                        set._items['-0'] = true;
	                    }
	                    return shouldAdd;
	                }
	                // these types can all utilise Set
	                if (set._nativeSet !== null) {
	                    if (shouldAdd) {
	                        prevSize = set._nativeSet.size;
	                        set._nativeSet.add(item);
	                        newSize = set._nativeSet.size;
	                        return newSize > prevSize;
	                    } else {
	                        return set._nativeSet.has(item);
	                    }
	                } else {
	                    if (!(type in set._items)) {
	                        if (shouldAdd) {
	                            set._items[type] = {};
	                            set._items[type][item] = true;
	                        }
	                        return shouldAdd;
	                    } else if (item in set._items[type]) {
	                        return !shouldAdd;
	                    } else {
	                        if (shouldAdd) {
	                            set._items[type][item] = true;
	                        }
	                        return shouldAdd;
	                    }
	                }
	            case 'boolean':
	                // set._items['boolean'] holds a two element array
	                // representing [ falseExists, trueExists ]
	                if (type in set._items) {
	                    var bIdx = item ? 1 : 0;
	                    if (set._items[type][bIdx]) {
	                        return !shouldAdd;
	                    } else {
	                        if (shouldAdd) {
	                            set._items[type][bIdx] = true;
	                        }
	                        return shouldAdd;
	                    }
	                } else {
	                    if (shouldAdd) {
	                        set._items[type] = item ? [
	                            false,
	                            true
	                        ] : [
	                            true,
	                            false
	                        ];
	                    }
	                    return shouldAdd;
	                }
	            case 'function':
	                // compare functions for reference equality
	                if (set._nativeSet !== null) {
	                    if (shouldAdd) {
	                        prevSize = set._nativeSet.size;
	                        set._nativeSet.add(item);
	                        newSize = set._nativeSet.size;
	                        return newSize > prevSize;
	                    } else {
	                        return set._nativeSet.has(item);
	                    }
	                } else {
	                    if (!(type in set._items)) {
	                        if (shouldAdd) {
	                            set._items[type] = [item];
	                        }
	                        return shouldAdd;
	                    }
	                    if (!_contains(item, set._items[type])) {
	                        if (shouldAdd) {
	                            set._items[type].push(item);
	                        }
	                        return shouldAdd;
	                    }
	                }
	                return !shouldAdd;
	            case 'undefined':
	                if (set._items[type]) {
	                    return !shouldAdd;
	                } else {
	                    if (shouldAdd) {
	                        set._items[type] = true;
	                    }
	                    return shouldAdd;
	                }
	            case 'object':
	                if (item === null) {
	                    if (!set._items['null']) {
	                        if (shouldAdd) {
	                            set._items['null'] = true;
	                        }
	                        return shouldAdd;
	                    }
	                    return !shouldAdd;
	                }
	            /* falls through */
	            default:
	                // reduce the search size of heterogeneous sets by creating buckets
	                // for each type.
	                type = Object.prototype.toString.call(item);
	                if (!(type in set._items)) {
	                    if (shouldAdd) {
	                        set._items[type] = [item];
	                    }
	                    return shouldAdd;
	                }
	                // scan through all previously applied items
	                if (!_contains(item, set._items[type])) {
	                    if (shouldAdd) {
	                        set._items[type].push(item);
	                    }
	                    return shouldAdd;
	                }
	                return !shouldAdd;
	            }
	        }
	        return _Set;
	    }();

	    /**
	     * A function wrapping calls to the two functions in an `&&` operation,
	     * returning the result of the first function if it is false-y and the result
	     * of the second function otherwise. Note that this is short-circuited,
	     * meaning that the second function will not be invoked if the first returns a
	     * false-y value.
	     *
	     * In addition to functions, `R.both` also accepts any fantasy-land compatible
	     * applicative functor.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	     * @see R.and
	     * @example
	     *
	     *      var gt10 = x => x > 10;
	     *      var even = x => x % 2 === 0;
	     *      var f = R.both(gt10, even);
	     *      f(100); //=> true
	     *      f(101); //=> false
	     */
	    var both = _curry2(function both(f, g) {
	        return _isFunction(f) ? function _both() {
	            return f.apply(this, arguments) && g.apply(this, arguments);
	        } : lift(and)(f, g);
	    });

	    /**
	     * Takes a function `f` and returns a function `g` such that:
	     *
	     *   - applying `g` to zero or more arguments will give __true__ if applying
	     *     the same arguments to `f` gives a logical __false__ value; and
	     *
	     *   - applying `g` to zero or more arguments will give __false__ if applying
	     *     the same arguments to `f` gives a logical __true__ value.
	     *
	     * `R.complement` will work on all other functors as well.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> *) -> (*... -> Boolean)
	     * @param {Function} f
	     * @return {Function}
	     * @see R.not
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *      var isOdd = R.complement(isEven);
	     *      isOdd(21); //=> true
	     *      isOdd(42); //=> false
	     */
	    var complement = lift(not);

	    /**
	     * A function wrapping calls to the two functions in an `||` operation,
	     * returning the result of the first function if it is truth-y and the result
	     * of the second function otherwise. Note that this is short-circuited,
	     * meaning that the second function will not be invoked if the first returns a
	     * truth-y value.
	     *
	     * In addition to functions, `R.either` also accepts any fantasy-land compatible
	     * applicative functor.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	     * @see R.or
	     * @example
	     *
	     *      var gt10 = x => x > 10;
	     *      var even = x => x % 2 === 0;
	     *      var f = R.either(gt10, even);
	     *      f(101); //=> true
	     *      f(8); //=> true
	     */
	    var either = _curry2(function either(f, g) {
	        return _isFunction(f) ? function _either() {
	            return f.apply(this, arguments) || g.apply(this, arguments);
	        } : lift(or)(f, g);
	    });

	    /**
	     * Turns a named method with a specified arity into a function that can be
	     * called directly supplied with arguments and a target object.
	     *
	     * The returned function is curried and accepts `arity + 1` parameters where
	     * the final parameter is the target object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	     * @param {Number} arity Number of arguments the returned function should take
	     *        before the target object.
	     * @param {String} method Name of the method to call.
	     * @return {Function} A new curried function.
	     * @example
	     *
	     *      var sliceFrom = R.invoker(1, 'slice');
	     *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	     *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	     *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	     */
	    var invoker = _curry2(function invoker(arity, method) {
	        return curryN(arity + 1, function () {
	            var target = arguments[arity];
	            if (target != null && is(Function, target[method])) {
	                return target[method].apply(target, _slice(arguments, 0, arity));
	            }
	            throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	        });
	    });

	    /**
	     * Returns a string made by inserting the `separator` between each element and
	     * concatenating all the elements into a single string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig String -> [a] -> String
	     * @param {Number|String} separator The string used to separate the elements.
	     * @param {Array} xs The elements to join into a string.
	     * @return {String} str The string made by concatenating `xs` with `separator`.
	     * @see R.split
	     * @example
	     *
	     *      var spacer = R.join(' ');
	     *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
	     *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
	     */
	    var join = invoker(1, 'join');

	    /**
	     * Creates a new function that, when invoked, caches the result of calling `fn`
	     * for a given argument set and returns the result. Subsequent calls to the
	     * memoized `fn` with the same argument set will not result in an additional
	     * call to `fn`; instead, the cached result for that set of arguments will be
	     * returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (*... -> a) -> (*... -> a)
	     * @param {Function} fn The function to memoize.
	     * @return {Function} Memoized version of `fn`.
	     * @example
	     *
	     *      var count = 0;
	     *      var factorial = R.memoize(n => {
	     *        count += 1;
	     *        return R.product(R.range(1, n + 1));
	     *      });
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      count; //=> 1
	     */
	    var memoize = _curry1(function memoize(fn) {
	        var cache = {};
	        return _arity(fn.length, function () {
	            var key = toString(arguments);
	            if (!_has(key, cache)) {
	                cache[key] = fn.apply(this, arguments);
	            }
	            return cache[key];
	        });
	    });

	    /**
	     * Splits a string into an array of strings based on the given
	     * separator.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category String
	     * @sig (String | RegExp) -> String -> [String]
	     * @param {String|RegExp} sep The pattern.
	     * @param {String} str The string to separate into an array.
	     * @return {Array} The array of strings from `str` separated by `str`.
	     * @see R.join
	     * @example
	     *
	     *      var pathComponents = R.split('/');
	     *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	     *
	     *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	     */
	    var split = invoker(1, 'split');

	    /**
	     * Determines whether a given string matches a given regular expression.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category String
	     * @sig RegExp -> String -> Boolean
	     * @param {RegExp} pattern
	     * @param {String} str
	     * @return {Boolean}
	     * @see R.match
	     * @example
	     *
	     *      R.test(/^x/, 'xyz'); //=> true
	     *      R.test(/^y/, 'xyz'); //=> false
	     */
	    var test = _curry2(function test(pattern, str) {
	        if (!_isRegExp(pattern)) {
	            throw new TypeError('\u2018test\u2019 requires a value of type RegExp as its first argument; received ' + toString(pattern));
	        }
	        return _cloneRegExp(pattern).test(str);
	    });

	    /**
	     * The lower case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to lower case.
	     * @return {String} The lower case version of `str`.
	     * @see R.toUpper
	     * @example
	     *
	     *      R.toLower('XYZ'); //=> 'xyz'
	     */
	    var toLower = invoker(0, 'toLowerCase');

	    /**
	     * The upper case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to upper case.
	     * @return {String} The upper case version of `str`.
	     * @see R.toLower
	     * @example
	     *
	     *      R.toUpper('abc'); //=> 'ABC'
	     */
	    var toUpper = invoker(0, 'toUpperCase');

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list, based upon the value returned by applying the supplied function to
	     * each list element. Prefers the first item if the supplied function produces
	     * the same value on two items. `R.equals` is used for comparison.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> b) -> [a] -> [a]
	     * @param {Function} fn A function used to produce a value to use during comparisons.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	     */
	    var uniqBy = _curry2(function uniqBy(fn, list) {
	        var set = new _Set();
	        var result = [];
	        var idx = 0;
	        var appliedItem, item;
	        while (idx < list.length) {
	            item = list[idx];
	            appliedItem = fn(item);
	            if (set.add(appliedItem)) {
	                result.push(item);
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of concatenating the given lists or strings.
	     *
	     * Dispatches to the `concat` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @sig String -> String -> String
	     * @param {Array|String} a
	     * @param {Array|String} b
	     * @return {Array|String}
	     *
	     * @example
	     *
	     *      R.concat([], []); //=> []
	     *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     *      R.concat('ABC', 'DEF'); // 'ABCDEF'
	     */
	    var concat = flip(invoker(1, 'concat'));

	    /**
	     * Finds the set (i.e. no duplicates) of all elements contained in the first or
	     * second list, but not both.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` or `list2`, but not both.
	     * @see R.symmetricDifferenceWith
	     * @example
	     *
	     *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
	     *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
	     */
	    var symmetricDifference = _curry2(function symmetricDifference(list1, list2) {
	        return concat(difference(list1, list2), difference(list2, list1));
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements contained in the first or
	     * second list, but not both. Duplication is determined according to the value
	     * returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [a] -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` or `list2`, but not both.
	     * @see R.symmetricDifference
	     * @example
	     *
	     *      var eqA = R.eqBy(R.prop('a'));
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
	     *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
	     *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	     */
	    var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
	        return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list. `R.equals` is used to determine equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	     *      R.uniq([1, '1']);     //=> [1, '1']
	     *      R.uniq([[42], [42]]); //=> [[42]]
	     */
	    var uniq = uniqBy(identity);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The list of elements found in both `list1` and `list2`.
	     * @see R.intersectionWith
	     * @example
	     *
	     *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	     */
	    var intersection = _curry2(function intersection(list1, list2) {
	        var lookupList, filteredList;
	        if (list1.length > list2.length) {
	            lookupList = list1;
	            filteredList = list2;
	        } else {
	            lookupList = list2;
	            filteredList = list1;
	        }
	        return uniq(_filter(flip(_contains)(lookupList), filteredList));
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements
	     * of each list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @example
	     *
	     *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
	     */
	    var union = _curry2(compose(uniq, _concat));

	    var R = {
	        F: F,
	        T: T,
	        __: __,
	        add: add,
	        addIndex: addIndex,
	        adjust: adjust,
	        all: all,
	        allPass: allPass,
	        allUniq: allUniq,
	        always: always,
	        and: and,
	        any: any,
	        anyPass: anyPass,
	        ap: ap,
	        aperture: aperture,
	        append: append,
	        apply: apply,
	        applySpec: applySpec,
	        assoc: assoc,
	        assocPath: assocPath,
	        binary: binary,
	        bind: bind,
	        both: both,
	        call: call,
	        chain: chain,
	        clamp: clamp,
	        clone: clone,
	        comparator: comparator,
	        complement: complement,
	        compose: compose,
	        composeK: composeK,
	        composeP: composeP,
	        concat: concat,
	        cond: cond,
	        construct: construct,
	        constructN: constructN,
	        contains: contains,
	        converge: converge,
	        countBy: countBy,
	        curry: curry,
	        curryN: curryN,
	        dec: dec,
	        defaultTo: defaultTo,
	        difference: difference,
	        differenceWith: differenceWith,
	        dissoc: dissoc,
	        dissocPath: dissocPath,
	        divide: divide,
	        drop: drop,
	        dropLast: dropLast,
	        dropLastWhile: dropLastWhile,
	        dropRepeats: dropRepeats,
	        dropRepeatsWith: dropRepeatsWith,
	        dropWhile: dropWhile,
	        either: either,
	        empty: empty,
	        eqBy: eqBy,
	        eqProps: eqProps,
	        equals: equals,
	        evolve: evolve,
	        filter: filter,
	        find: find,
	        findIndex: findIndex,
	        findLast: findLast,
	        findLastIndex: findLastIndex,
	        flatten: flatten,
	        flip: flip,
	        forEach: forEach,
	        fromPairs: fromPairs,
	        groupBy: groupBy,
	        groupWith: groupWith,
	        gt: gt,
	        gte: gte,
	        has: has,
	        hasIn: hasIn,
	        head: head,
	        identical: identical,
	        identity: identity,
	        ifElse: ifElse,
	        inc: inc,
	        indexBy: indexBy,
	        indexOf: indexOf,
	        init: init,
	        insert: insert,
	        insertAll: insertAll,
	        intersection: intersection,
	        intersectionWith: intersectionWith,
	        intersperse: intersperse,
	        into: into,
	        invert: invert,
	        invertObj: invertObj,
	        invoker: invoker,
	        is: is,
	        isArrayLike: isArrayLike,
	        isEmpty: isEmpty,
	        isNil: isNil,
	        join: join,
	        juxt: juxt,
	        keys: keys,
	        keysIn: keysIn,
	        last: last,
	        lastIndexOf: lastIndexOf,
	        length: length,
	        lens: lens,
	        lensIndex: lensIndex,
	        lensPath: lensPath,
	        lensProp: lensProp,
	        lift: lift,
	        liftN: liftN,
	        lt: lt,
	        lte: lte,
	        map: map,
	        mapAccum: mapAccum,
	        mapAccumRight: mapAccumRight,
	        mapObjIndexed: mapObjIndexed,
	        match: match,
	        mathMod: mathMod,
	        max: max,
	        maxBy: maxBy,
	        mean: mean,
	        median: median,
	        memoize: memoize,
	        merge: merge,
	        mergeAll: mergeAll,
	        mergeWith: mergeWith,
	        mergeWithKey: mergeWithKey,
	        min: min,
	        minBy: minBy,
	        modulo: modulo,
	        multiply: multiply,
	        nAry: nAry,
	        negate: negate,
	        none: none,
	        not: not,
	        nth: nth,
	        nthArg: nthArg,
	        objOf: objOf,
	        of: of,
	        omit: omit,
	        once: once,
	        or: or,
	        over: over,
	        pair: pair,
	        partial: partial,
	        partialRight: partialRight,
	        partition: partition,
	        path: path,
	        pathEq: pathEq,
	        pathOr: pathOr,
	        pathSatisfies: pathSatisfies,
	        pick: pick,
	        pickAll: pickAll,
	        pickBy: pickBy,
	        pipe: pipe,
	        pipeK: pipeK,
	        pipeP: pipeP,
	        pluck: pluck,
	        prepend: prepend,
	        product: product,
	        project: project,
	        prop: prop,
	        propEq: propEq,
	        propIs: propIs,
	        propOr: propOr,
	        propSatisfies: propSatisfies,
	        props: props,
	        range: range,
	        reduce: reduce,
	        reduceBy: reduceBy,
	        reduceRight: reduceRight,
	        reduced: reduced,
	        reject: reject,
	        remove: remove,
	        repeat: repeat,
	        replace: replace,
	        reverse: reverse,
	        scan: scan,
	        sequence: sequence,
	        set: set,
	        slice: slice,
	        sort: sort,
	        sortBy: sortBy,
	        split: split,
	        splitAt: splitAt,
	        splitEvery: splitEvery,
	        splitWhen: splitWhen,
	        subtract: subtract,
	        sum: sum,
	        symmetricDifference: symmetricDifference,
	        symmetricDifferenceWith: symmetricDifferenceWith,
	        tail: tail,
	        take: take,
	        takeLast: takeLast,
	        takeLastWhile: takeLastWhile,
	        takeWhile: takeWhile,
	        tap: tap,
	        test: test,
	        times: times,
	        toLower: toLower,
	        toPairs: toPairs,
	        toPairsIn: toPairsIn,
	        toString: toString,
	        toUpper: toUpper,
	        transduce: transduce,
	        transpose: transpose,
	        traverse: traverse,
	        trim: trim,
	        tryCatch: tryCatch,
	        type: type,
	        unapply: unapply,
	        unary: unary,
	        uncurryN: uncurryN,
	        unfold: unfold,
	        union: union,
	        unionWith: unionWith,
	        uniq: uniq,
	        uniqBy: uniqBy,
	        uniqWith: uniqWith,
	        unless: unless,
	        unnest: unnest,
	        until: until,
	        update: update,
	        useWith: useWith,
	        values: values,
	        valuesIn: valuesIn,
	        view: view,
	        when: when,
	        where: where,
	        whereEq: whereEq,
	        without: without,
	        wrap: wrap,
	        xprod: xprod,
	        zip: zip,
	        zipObj: zipObj,
	        zipWith: zipWith
	    };
	  /* eslint-env amd */

	  /* TEST_ENTRY_POINT */

	  if (true) {
	    module.exports = R;
	  } else if (typeof define === 'function' && define.amd) {
	    define(function() { return R; });
	  } else {
	    this.R = R;
	  }

	}.call(this));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(13);

	var _redux = __webpack_require__(14);

	var _Table = __webpack_require__(15);

	var _Table2 = _interopRequireDefault(_Table);

	var _initialize = __webpack_require__(33);

	var _initialize2 = _interopRequireDefault(_initialize);

	var _tableModule = __webpack_require__(4);

	var _dataSelector = __webpack_require__(35);

	var _dataSelector2 = _interopRequireDefault(_dataSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableContainer = function (_Component) {
	  _inherits(TableContainer, _Component);

	  function TableContainer() {
	    _classCallCheck(this, TableContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableContainer).apply(this, arguments));
	  }

	  _createClass(TableContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      (0, _initialize2.default)(this.props);
	      //need args for fetcdata
	      this.props.fetchDataAction();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.isFetching) {
	        return _react2.default.createElement(
	          'p',
	          { style: { 'padding-top': '100px' } },
	          ' Loading... '
	        );
	      }
	      if (this.props.errorMessage) {
	        return _react2.default.createElement(
	          'p',
	          { style: { 'padding-top': '100px' } },
	          'ERROR! -> ',
	          this.props.errorMessage
	        );
	      }
	      return _react2.default.createElement(_Table2.default, this.props);
	    }
	  }]);

	  return TableContainer;
	}(_react.Component);

	function mapStateToProps(state, ownProps) {
	  var table = state.reduxDataTable && state.reduxDataTable[ownProps.config.tableName];
	  if (!table) {
	    return {};
	  }

	  var tableData = (0, _dataSelector2.default)(state[ownProps.config.dataSource], table);
	  return {
	    columns: table.columns,
	    tableData: tableData,
	    configured: table.configured
	  };
	}

	function mapDispatchToActions(dispatch, ownProps) {
	  return (0, _redux.bindActionCreators)({
	    sort: (0, _tableModule.sort)(ownProps.config.tableName),
	    setConfig: _tableModule.setConfig,
	    setColumns: (0, _tableModule.setColumns)(ownProps.config.tableName),
	    fetchDataAction: ownProps.config.fetchDataAction
	  }, dispatch);
	}

	var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToActions)(TableContainer);

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TableContainer, 'TableContainer', '/home/rharik/Development/cannibal/redux-datatable/src/containers/TableContainer.js');

	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/rharik/Development/cannibal/redux-datatable/src/containers/TableContainer.js');

	  __REACT_HOT_LOADER__.register(mapDispatchToActions, 'mapDispatchToActions', '/home/rharik/Development/cannibal/redux-datatable/src/containers/TableContainer.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/containers/TableContainer.js');
	})();

	;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	var _Row = __webpack_require__(18);

	var _Row2 = _interopRequireDefault(_Row);

	var _uuid = __webpack_require__(9);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Table = function Table(_ref) {
	  var columns = _ref.columns;
	  var _ref$tableData = _ref.tableData;
	  var tableData = _ref$tableData === undefined ? [] : _ref$tableData;
	  var sort = _ref.sort;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_Header2.default, { columns: columns, sort: sort }),
	    tableData.map(function (d) {
	      return _react2.default.createElement(_Row2.default, { columns: columns, data: d, key: _uuid2.default.v4() });
	    })
	  );
	};

	Table.contextTypes = {};

	var _default = Table;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Table, 'Table', '/home/rharik/Development/cannibal/redux-datatable/src/components/Table.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/components/Table.js');
	})();

	;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _HeaderCell = __webpack_require__(17);

	var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

	var _uuid = __webpack_require__(9);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function Header(_ref) {
	  var columns = _ref.columns;
	  var sort = _ref.sort;

	  var getValue = function getValue(c) {
	    return c.headerFormat ? c.headerFormat({ column: c, value: c.display, row: columns }) : c.display;
	  };
	  return _react2.default.createElement(
	    'div',
	    { className: 'redux__datatable__table__header' },
	    columns.map(function (c) {
	      return _react2.default.createElement(_HeaderCell2.default, { sort: sort, value: getValue(c), column: c, key: _uuid2.default.v4() });
	    })
	  );
	};

	Header.contextTypes = {};

	var _default = Header;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Header, 'Header', '/home/rharik/Development/cannibal/redux-datatable/src/components/Header.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/components/Header.js');
	})();

	;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeaderCell = function HeaderCell(_ref) {
	  var column = _ref.column;
	  var value = _ref.value;
	  var sort = _ref.sort;

	  var style = column.hidden ? { display: 'none' } : { width: column.width || '100px' };
	  var className = 'redux__datatable__header__cell \n      ' + (column.headerClassName || '') + ' ';
	  var action = column.sort ? sort : function () {};
	  action = action ? action : column.headerAction ? column.headerAction : function () {};

	  return _react2.default.createElement(
	    'div',
	    { className: className, style: style, onClick: function onClick(e) {
	        return action(column);
	      } },
	    value,
	    column.dir ? _react2.default.createElement(
	      'span',
	      { className: 'redux__datatable__' + column.dir },
	      '^'
	    ) : null
	  );
	};

	HeaderCell.contextTypes = {};

	var _default = HeaderCell;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(HeaderCell, 'HeaderCell', '/home/rharik/Development/cannibal/redux-datatable/src/components/HeaderCell.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/components/HeaderCell.js');
	})();

	;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _RowCell = __webpack_require__(19);

	var _RowCell2 = _interopRequireDefault(_RowCell);

	var _uuid = __webpack_require__(9);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _selectn = __webpack_require__(20);

	var _selectn2 = _interopRequireDefault(_selectn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = function Row(_ref) {
	  var columns = _ref.columns;
	  var data = _ref.data;


	  var cells = columns.map(function (c) {
	    var style = c.hidden ? { display: 'none' } : { width: c.width || '100px' };
	    var value = typeof c.property === 'function' ? c.property({ column: c, value: (0, _selectn2.default)(c.propertyName, data), row: data }) : (0, _selectn2.default)(c.property, data);

	    return _react2.default.createElement(_RowCell2.default, { text: value, style: style, className: c.className, key: _uuid2.default.v4() });
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'redux__datatable__table__row' },
	    cells
	  );
	};

	Row.contextTypes = {};

	var _default = Row;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Row, 'Row', '/home/rharik/Development/cannibal/redux-datatable/src/components/Row.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/components/Row.js');
	})();

	;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RowCell = function RowCell(_ref) {
	  var text = _ref.text;
	  var style = _ref.style;
	  var className = _ref.className;

	  var cName = 'redux__datatable__row__cell ' + (className || '');
	  return _react2.default.createElement(
	    'div',
	    { className: cName, style: style },
	    text
	  );
	};

	RowCell.contextTypes = {};

	var _default = RowCell;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(RowCell, 'RowCell', '/home/rharik/Development/cannibal/redux-datatable/src/components/RowCell.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/components/RowCell.js');
	})();

	;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var curry2 = __webpack_require__(21)
	var debug = __webpack_require__(23)('selectn')
	var dotted = __webpack_require__(26)
	var splits = __webpack_require__(27)
	var string = Object.prototype.toString

	module.exports = curry2(selectn)

	/**
	 * Curried property accessor function that resolves deeply-nested object properties via dot/bracket-notation
	 * string path while mitigating `TypeErrors` via friendly and composable API.
	 *
	 * @param {String|Array} path
	 * Dot/bracket-notation string path or array.
	 *
	 * @param {Object} object
	 * Object to access.
	 *
	 * @return {Function|*|undefined}
	 * (1) returns `selectn/1` when partially applied.
	 * (2) returns value at path if path exists.
	 * (3) returns undefined if path does not exist.
	 */
	function selectn (path, object) {
	  debug('arguments:', {
	    path: path,
	    object: object
	  })

	  var idx = -1
	  var seg = string.call(path) === '[object Array]' ? path : splits(dotted(path))
	  var end = seg.length
	  var ref = end ? object : void 0

	  while (++idx < end) {
	    if (Object(ref) !== ref) return void 0
	    ref = ref[seg[idx]]
	  }

	  debug('ref:', ref)
	  return typeof ref === 'function' ? ref() : ref
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/*!
	 * imports.
	 */

	var bind = Function.prototype.bind || __webpack_require__(22)

	/*!
	 * exports.
	 */

	module.exports = curry2

	/**
	 * Curry a binary function.
	 *
	 * @param {Function} fn
	 * Binary function to curry.
	 *
	 * @param {Object} [self]
	 * Function `this` context.
	 *
	 * @return {Function|*}
	 * If partially applied, return unary function, otherwise, return result of full application.
	 */

	function curry2 (fn, self) {
	  var out = function () {
	    if (arguments.length === 0) return out

	    return arguments.length > 1
	      ? fn.apply(self, arguments)
	      : bind.call(fn, self, arguments[0])
	  }

	  out.uncurry = function uncurry () {
	    return fn
	  }

	  return out
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function(boundThis) {
	  var f = this
	    , ret

	  if (arguments.length < 2)
	    ret = function() {
	      if (this instanceof ret) {
	        var ret_ = f.apply(this, arguments)
	        return Object(ret_) === ret_
	          ? ret_
	          : this
	      }
	      else
	        return f.apply(boundThis, arguments)
	    }
	  else {
	    var boundArgs = new Array(arguments.length - 1)
	    for (var i = 1; i < arguments.length; i++)
	      boundArgs[i - 1] = arguments[i]

	    ret = function() {
	      var boundLen = boundArgs.length
	        , args = new Array(boundLen + arguments.length)
	        , i
	      for (i = 0; i < boundLen; i++)
	        args[i] = boundArgs[i]
	      for (i = 0; i < arguments.length; i++)
	        args[boundLen + i] = arguments[i]

	      if (this instanceof ret) {
	        var ret_ = f.apply(this, args)
	        return Object(ret_) === ret_
	          ? ret_
	          : this
	      }
	      else
	        return f.apply(boundThis, args)
	    }
	  }

	  ret.prototype = f.prototype
	  return ret
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(24);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(25);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * exports.
	 */

	module.exports = brackets2dots;

	/*!
	 * regexp patterns.
	 */

	var REPLACE_BRACKETS = /\[([^\[\]]+)\]/g;
	var LFT_RT_TRIM_DOTS = /^[.]*|[.]*$/g;

	/**
	 * Convert string with bracket notation to dot property notation.
	 *
	 * ### Examples:
	 *
	 *      brackets2dots('group[0].section.a.seat[3]')
	 *      //=> 'group.0.section.a.seat.3'
	 *
	 *      brackets2dots('[0].section.a.seat[3]')
	 *      //=> '0.section.a.seat.3'
	 *
	 *      brackets2dots('people[*].age')
	 *      //=> 'people.*.age'
	 *
	 * @param  {String} string
	 * original string
	 *
	 * @return {String}
	 * dot/bracket-notation string
	 */

	function brackets2dots(string) {
	  return ({}).toString.call(string) == '[object String]'
	       ? string.replace(REPLACE_BRACKETS, '.$1').replace(LFT_RT_TRIM_DOTS, '')
	       : ''
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/*!
	 * imports.
	 */

	var dotted = __webpack_require__(28)(todots)
	var compact = __webpack_require__(31)(String)
	var toString = Object.prototype.toString

	/*!
	 * exports.
	 */

	module.exports = dotsplit

	/**
	 * Transform dot-delimited strings to array of strings.
	 *
	 * @param  {String} string
	 * Dot-delimited string.
	 *
	 * @return {Array}
	 * Array of strings.
	 */

	function dotsplit (string) {
	  return dotted(normalize(string))
	}

	/**
	 * Normalize string by:
	 *
	 * (1) Dropping falsey values (empty, null, etc.)
	 * (2) Replacing escapes with a placeholder.
	 * (3) Splitting string on `.` delimiter.
	 * (4) Dropping empty values from resulting array.
	 *
	 * @param  {String} string
	 * Dot-delimited string.
	 *
	 * @return {Array}
	 * Array of strings.
	 */

	function normalize (string) {
	  return compact(
	    (toString.call(string) === '[object String]' ? string : '')
	    .replace(/\\\./g, '\uffff')
	    .split('.')
	  )
	}

	/**
	 * Change placeholder to dots.
	 *
	 * @param  {String} string
	 * Dot-delimited string with placeholders.
	 *
	 * @return {String}
	 * Dot-delimited string without placeholders.
	 */

	function todots (string) {
	  return string.replace(/\uffff/g, '.')
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/*!
	 * imports.
	 */

	var curry2 = __webpack_require__(29)
	var selectn = __webpack_require__(30)

	/*!
	 * exports.
	 */

	module.exports = curry2(map)

	/**
	 * Curried function deriving new array values by applying provided function to each item/index of provided array.
	 * Optionally, a dot-notation formatted string may be provided for item property access.
	 *
	 * @param {Function|String} fn
	 * Function to apply to each item.
	 *
	 * @param {Array} list
	 * Array to iterate over.
	 *
	 * @return {Array}
	 * Array resulting from applying provided function `fn` to each item of `list`.
	 */

	function map (fn, list) {
	  var end = list.length
	  var idx = -1
	  var out = []

	  while (++idx < end) {
	    out.push((typeof fn === 'string') ? selectn(fn, list[idx]) : fn(list[idx]))
	  }

	  return out
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict'

	/*!
	 * exports.
	 */

	module.exports = curry2

	/**
	 * Curry a binary function.
	 *
	 * @param {Function} fn
	 * Binary function to curry.
	 *
	 * @param {Object} [self]
	 * Function `this` context.
	 *
	 * @return {Function|*}
	 * If partially applied, return unary function, otherwise, return result of full application.
	 */

	function curry2 (fn, self) {
	  var out = function () {
	    return arguments.length > 1
	    ? fn.call(self, arguments[0], arguments[1])
	    : fn.bind(self, arguments[0])
	  }

	  out.uncurry = function uncurry () {
	    return fn
	  }

	  return out
	}


/***/ },
/* 30 */
/***/ function(module, exports) {

	/*!
	 * exports.
	 */

	module.exports = selectn;

	/**
	 * Select n-levels deep into an object given a dot/bracket-notation query.
	 * If partially applied, returns a function accepting the second argument.
	 *
	 * ### Examples:
	 *
	 *      selectn('name.first', contact);
	 *
	 *      selectn('addresses[0].street', contact);
	 *
	 *      contacts.map(selectn('name.first'));
	 *
	 * @param  {String | Array} query
	 * dot/bracket-notation query string or array of properties
	 *
	 * @param  {Object} object
	 * object to access
	 *
	 * @return {Function}
	 * accessor function that accepts an object to be queried
	 */

	function selectn(query) {
	  var parts;

	  if (Array.isArray(query)) {
	    parts = query;
	  }
	  else {
	    // normalize query to `.property` access (i.e. `a.b[0]` becomes `a.b.0`)
	    query = query.replace(/\[(\d+)\]/g, '.$1');
	    parts = query.split('.');
	  }

	  /**
	   * Accessor function that accepts an object to be queried
	   *
	   * @private
	   *
	   * @param  {Object} object
	   * object to access
	   *
	   * @return {Mixed}
	   * value at given reference or undefined if it does not exist
	   */

	  function accessor(object) {
	    var ref = (object != null) ? object : (1, eval)('this');
	    var len = parts.length;
	    var idx = 0;

	    // iteratively save each segment's reference
	    for (; idx < len; idx += 1) {
	      if (ref != null) ref = ref[parts[idx]];
	    }

	    return ref;
	  }

	  // curry accessor function allowing partial application
	  return arguments.length > 1
	       ? accessor(arguments[1])
	       : accessor;
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/*!
	 * imports.
	 */

	var curry2 = __webpack_require__(21)
	var selectn = __webpack_require__(20)

	/*!
	 * imports (local).
	 */

	var expressions = __webpack_require__(32)

	/*!
	 * exports.
	 */

	module.exports = curry2(filter)

	/**
	 * Curried function deriving a new array containing items from given array for which predicate returns true.
	 * Supports unary function, RegExp, dot/bracket-notation string path, and compound query object as predicate.
	 *
	 * @param {Function|RegExp|String|Object} predicate
	 * Unary function, RegExp, dot/bracket-notation string path, and compound query object.
	 *
	 * @param {Array} list
	 * Array to evaluate.
	 *
	 * @return {Array}
	 * New array containing items from given array for which predicate returns true.
	 */

	function filter (predicate, list) {
	  var end = list.length
	  var idx = -1
	  var out = []

	  while (++idx < end) {
	    if (matchall(expressions(predicate, list[idx]))) out.push(list[idx])
	  }

	  return out
	}

	/**
	 * Whether all given expressions evaluate to true.
	 *
	 * @param {Array} expressions
	 * Expressions to evaluate.
	 *
	 * @return {Boolean}
	 * Whether all given expressions evaluate to true.
	 */

	function matchall (expressions) {
	  var end = expressions.length
	  var idx = -1
	  var out = false

	  while (++idx < end) {
	    var expression = expressions[idx]

	    if (({}).toString.call(expression.predicate) === '[object Function]') {
	      out = !!expression.predicate(expression.element)
	    } else if (({}).toString.call(expression.predicate) === '[object RegExp]') {
	      out = !!expression.predicate.exec(expression.element)
	    } else if (expression.compare) {
	      out = expression.predicate === expression.element
	    } else {
	      out = selectn(expression.predicate, expression.element)
	    }

	    if (out === false) {
	      return out
	    }
	  }

	  return out
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/*!
	 * imports.
	 */

	var selectn = __webpack_require__(20)

	/*!
	 * exports.
	 */

	module.exports = expressions

	/**
	 * Creates and returns an array of expression objects.
	 *
	 * Example:
	 *
	 *  {
	 *    predicate: 'received',
	 *    element: 'received',
	 *    compare: true
	 *  }
	 *
	 *  {
	 *    predicate: isBoolean,
	 *    element: true
	 *  }
	 *
	 *  {
	 *    predicate: 'message.read',
	 *    element: { message: { read: true } }
	 *  }
	 *
	 * @param {Function|String|Object} predicate
	 * Unary function, RegExp, dot/bracket-notation string path, and compound query object.
	 *
	 * @param {Array} list
	 * Array to iterate over.
	 *
	 * @return {Array}
	 * New array containing items from given array for which predicate returns true.
	 */

	function expressions (predicate, element) {
	  var expressions = []

	  if (isFunction(predicate) || isRegExp(predicate) || isString(predicate)) {
	    expressions.push({predicate: predicate, element: element})
	  } else {
	    for (var key in predicate) {
	      expressions.push({predicate: predicate[key], element: selectn(key, element), compare: true})
	    }
	  }

	  return expressions
	}

	/**
	 * Whether predicate is a RegExp instance.
	 *
	 * @param {*} predicate
	 * Predicate value to test.
	 *
	 * @return {Boolean}
	 * Whether predicate is a RegExp instance.
	 */

	function isRegExp (predicate) {
	  return ({}).toString.call(predicate) === '[object RegExp]'
	}

	/**
	 * Whether predicate is a function.
	 *
	 * @param {*} predicate
	 * Predicate value to test.
	 *
	 * @return {Boolean}
	 * Whether predicate is a function.
	 */

	function isFunction (predicate) {
	  return ({}).toString.call(predicate) === '[object Function]'
	}

	/**
	 * Whether predicate is a string.
	 *
	 * @param {*} predicate
	 * Predicate value to test.
	 *
	 * @return {Boolean}
	 * Whether predicate is a string.
	 */

	function isString (predicate) {
	  return ({}).toString.call(predicate) === '[object String]'
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _configValues = __webpack_require__(6);

	var _CheckBox = __webpack_require__(34);

	var _tableModule = __webpack_require__(4);

	var _default = function _default(_ref) {
	  var configured = _ref.configured;
	  var setColumns = _ref.setColumns;
	  var setConfig = _ref.setConfig;
	  var config = _ref.config;
	  var columns = _ref.columns;


	  if (configured) {
	    return;
	  }

	  var _config = (0, _configValues.updateConfigs)(config);
	  _config.configured = true;
	  setConfig(_config);

	  //TODO exptract into strategy or command pattern later
	  if (_config.bulkSelection.mode !== 'none') {
	    columns.unshift((0, _CheckBox.bulkSelectionColumn)(_config));
	  }

	  //TODO prolly do something like create default columns from data name here
	  if (columns) {
	    var map = columns.map(_tableModule.column);
	    setColumns(map);
	  }
	};

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/utilities/initialize.js');
	})();

	;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bulkSelectionColumn = bulkSelectionColumn;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(13);

	var _configValues = __webpack_require__(6);

	var _tableModule = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkBox = function checkBox(_ref) {
	  var column = _ref.column;
	  var row = _ref.row;
	  var identityColumn = _ref.identityColumn;
	  var dispatch = _ref.dispatch;

	  var change = function change(e, row, column) {
	    return (0, _tableModule.handleSelectionEvent)((0, _tableModule.setSelection)(column, row[identityColumn], e.currentTarget.checked), dispatch);
	  };
	  var selected = row.metaData ? row.metaData.selected : false;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('input', { type: 'checkbox', checked: selected, onChange: function onChange(e) {
	        return change(e, row, column);
	      } })
	  );
	};

	var headerCheckBox = function headerCheckBox(_ref2) {
	  var selectAllChecked = _ref2.selectAllChecked;
	  var dispatch = _ref2.dispatch;

	  var change = function change(e) {
	    if (e.currentTarget.checked) {
	      return (0, _tableModule.handleSelectionEvent)((0, _tableModule.selectAll)(), dispatch);
	    } else {
	      return (0, _tableModule.handleSelectionEvent)((0, _tableModule.deselectAll)(), dispatch);
	    }
	  };
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('input', { type: 'checkbox', checked: selectAllChecked, onChange: function onChange(e) {
	        return change(e);
	      } })
	  );
	};

	var CheckBox = (0, _reactRedux.connect)()(checkBox);
	var HeaderCheckBox = (0, _reactRedux.connect)(function (x) {
	  return { selectAllChecked: x.reduxDataTable[_configValues.config.tableName] ? x.reduxDataTable[_configValues.config.tableName].selectAll : false };
	})(headerCheckBox);

	function bulkSelectionColumn(config) {
	  return {
	    bulkSelection: config.bulkSelection,
	    property: 'checkbox',
	    width: '30px',
	    format: function format(_ref3) {
	      var column = _ref3.column;
	      var value = _ref3.value;
	      var row = _ref3.row;
	      return _react2.default.createElement(CheckBox, {
	        column: column,
	        row: row,
	        identityColumn: config.bulkSelection.identityColumn });
	    },
	    headerFormat: function headerFormat(_ref4) {
	      var column = _ref4.column;
	      var value = _ref4.value;
	      var row = _ref4.row;
	      return _react2.default.createElement(HeaderCheckBox, null);
	    },
	    headerClassName: 'redux__datatable__bulkSelect',
	    className: 'redux__datatable__bulkSelect',
	    hidden: false
	  };
	}
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(checkBox, 'checkBox', '/home/rharik/Development/cannibal/redux-datatable/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(headerCheckBox, 'headerCheckBox', '/home/rharik/Development/cannibal/redux-datatable/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(CheckBox, 'CheckBox', '/home/rharik/Development/cannibal/redux-datatable/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(HeaderCheckBox, 'HeaderCheckBox', '/home/rharik/Development/cannibal/redux-datatable/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(bulkSelectionColumn, 'bulkSelectionColumn', '/home/rharik/Development/cannibal/redux-datatable/src/components/CheckBox.js');
	})();

	;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(11);

	//TODO put in sort

	var _default = function _default(items, metaData) {
	  metaData.selectedItems && metaData.selectedItems.forEach(function (x) {
	    var item = items.find(function (y) {
	      return y.id == x;
	    });
	    if (item) {
	      item.selected = true;
	    }
	  });
	  return items;
	};

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/redux-datatable/src/Selectors/dataSelector.js');
	})();

	;

/***/ }
/******/ ])
});
;