(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["dataview"] = factory(require("react"), require("react-redux"));
	else
		root["dataview"] = factory(root["react"], root["react-redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
	module.exports = {"id":"_-redux__dataview-id","table__row":"_-redux__dataview-table__row","table__header":"_-redux__dataview-table__header","row__cell":"_-redux__dataview-row__cell","header__cell":"_-redux__dataview-header__cell"};

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

	var _TableContainer = __webpack_require__(13);

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

	var _columnModule = __webpack_require__(4);

	var _columnModule2 = _interopRequireDefault(_columnModule);

	var _dataRowModule = __webpack_require__(6);

	var _dataRowModule2 = _interopRequireDefault(_dataRowModule);

	var _headerModule = __webpack_require__(12);

	var _headerModule2 = _interopRequireDefault(_headerModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _default = { columns: _columnModule2.default, tableData: _dataRowModule2.default, header: _headerModule2.default };
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/index.js');
	})();

	;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_COLUMNS = undefined;
	exports.setColumns = setColumns;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SET_COLUMNS = exports.SET_COLUMNS = 'redux-dataview/column/SET_COLUMNS';

	var _default = function _default() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  if (action.type === SET_COLUMNS) {
	    state = action.columns;
	  }
	  return state;
	};

	exports.default = _default;
	function setColumns(columns) {
	  //TODO validateColumns here please
	  return {
	    type: SET_COLUMNS,
	    columns: columns
	  };
	}

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

	  __REACT_HOT_LOADER__.register(SET_COLUMNS, 'SET_COLUMNS', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/columnModule.js');

	  __REACT_HOT_LOADER__.register(setColumns, 'setColumns', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/columnModule.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/columnModule.js');
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
	exports.SET_SELECTION = exports.DESELECT_ALL = exports.SELECT_ALL = exports.NO_EVENT = exports.DATA_SUCCESS = exports.DATA_FAILURE = exports.DATA_REQUEST = undefined;
	exports.handleSelectionEvent = handleSelectionEvent;
	exports.selectAll = selectAll;
	exports.deselectAll = deselectAll;
	exports.setSelection = setSelection;

	var _configValues = __webpack_require__(7);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _uuid = __webpack_require__(10);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var DATA_REQUEST = exports.DATA_REQUEST = 'redux-datatable/rows/DATA_REQUEST';
	var DATA_FAILURE = exports.DATA_FAILURE = 'redux-datatable/rows/DATA_FAILURE';
	var DATA_SUCCESS = exports.DATA_SUCCESS = 'redux-datatable/rows/DATA_SUCCESS';
	var NO_EVENT = exports.NO_EVENT = 'redux-dataview/bulkAction/NO_EVENT';
	var SELECT_ALL = exports.SELECT_ALL = 'redux-dataview/bulkAction/SELECT_ALL';
	var DESELECT_ALL = exports.DESELECT_ALL = 'redux-dataview/bulkAction/DESELECT_ALL';
	var SET_SELECTION = exports.SET_SELECTION = 'redux-dataview/bulkAction/SET_SELECTION';

	var rowData = [{
	  firstName: 'Raif', lastName: 'Harik', email: 'f@u.com', id: _uuid2.default.v4()
	}, {
	  firstName: 'Robbie', lastName: 'Fuentes', email: 'robbie@fuenties.com', id: _uuid2.default.v4()
	}];

	var _default = function _default() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? rowData : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  switch (action.type) {
	    case SELECT_ALL:
	      {
	        return state.map(function (x) {
	          x.metaData = x.metaData || {};
	          x.metaData.selected = true;
	          return x;
	        });
	      }
	    case DESELECT_ALL:
	      {
	        return state.map(function (x) {
	          x.metaData = x.metaData || {};
	          x.metaData.selected = false;
	          return x;
	        });
	      }
	    case SET_SELECTION:
	      {
	        var item = state.filter(function (x) {
	          return x[_configValues.config.bulkSelection.identityColumn] === action.id;
	        })[0];
	        item.metaData = item.metaData || {};
	        item.metaData.selected = !item.metaData.selected;
	        state.splice(state.findIndex(function (x) {
	          return x[_configValues.config.bulkSelection.identityColumn] === action.id;
	        }), 1, item);
	        return [].concat(_toConsumableArray(state));
	      }
	  }
	  return state;
	};

	exports.default = _default;
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

	function selectAll() {
	  return { type: SELECT_ALL };
	}

	function deselectAll() {
	  return { type: DESELECT_ALL };
	}

	function setSelection(column, id) {
	  if (column.bulkSelection.mode === 'disabled' || column.bulkSelection.mode === 'none') {
	    console.warn('Selection mode has been disabled');
	    return { type: NO_EVENT };
	  }

	  return {
	    type: SET_SELECTION,
	    id: id,
	    selectionMode: column.bulkSelection.mode
	  };
	}
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(DATA_REQUEST, 'DATA_REQUEST', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(DATA_FAILURE, 'DATA_FAILURE', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(DATA_SUCCESS, 'DATA_SUCCESS', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(NO_EVENT, 'NO_EVENT', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(SELECT_ALL, 'SELECT_ALL', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(DESELECT_ALL, 'DESELECT_ALL', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(SET_SELECTION, 'SET_SELECTION', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(rowData, 'rowData', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(handleSelectionEvent, 'handleSelectionEvent', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(selectAll, 'selectAll', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(deselectAll, 'deselectAll', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(setSelection, 'setSelection', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/dataRowModule.js');
	})();

	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = undefined;
	exports.updateConfigs = updateConfigs;

	var _deepAssign = __webpack_require__(8);

	var _deepAssign2 = _interopRequireDefault(_deepAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  dataSource: null,
	  bulkSelection: {
	    mode: 'none',
	    identityColumn: 'id'
	  }
	  //bunch of default values here;
	};

	function updateConfigs(newConfig) {
	  //TODO validate configs as we define them
	  (0, _deepAssign2.default)(config, newConfig);
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

	  __REACT_HOT_LOADER__.register(config, 'config', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/utilities/configValues.js');

	  __REACT_HOT_LOADER__.register(updateConfigs, 'updateConfigs', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/utilities/configValues.js');
	})();

	;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObj = __webpack_require__(9);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Sources cannot be null or undefined');
		}

		return Object(val);
	}

	function assignKey(to, from, key) {
		var val = from[key];

		if (val === undefined || val === null) {
			return;
		}

		if (hasOwnProperty.call(to, key)) {
			if (to[key] === undefined || to[key] === null) {
				throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
			}
		}

		if (!hasOwnProperty.call(to, key) || !isObj(val)) {
			to[key] = val;
		} else {
			to[key] = assign(Object(to[key]), from[key]);
		}
	}

	function assign(to, from) {
		if (to === from) {
			return to;
		}

		from = Object(from);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				assignKey(to, from, key);
			}
		}

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(from);

			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					assignKey(to, from, symbols[i]);
				}
			}
		}

		return to;
	}

	module.exports = function deepAssign(target) {
		target = toObject(target);

		for (var s = 1; s < arguments.length; s++) {
			assign(target, arguments[s]);
		}

		return target;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (x) {
		var type = typeof x;
		return x !== null && (type === 'object' || type === 'function');
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _dataRowModule = __webpack_require__(6);

	var _default = function _default() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  switch (action.type) {
	    case _dataRowModule.SELECT_ALL:
	      return state = _extends({}, state, { selectAll: true });
	    case _dataRowModule.DESELECT_ALL:
	      return state = _extends({}, state, { selectAll: false });
	  }
	  return state;
	};

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/modules/headerModule.js');
	})();

	;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(14);

	var _Table = __webpack_require__(15);

	var _Table2 = _interopRequireDefault(_Table);

	var _initialize = __webpack_require__(20);

	var _initialize2 = _interopRequireDefault(_initialize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mapStateToProps(state) {
	  return {
	    columns: state.columns,
	    tableData: state.tableData
	  };
	}

	function mapDispatchToProps(dispatch, ownProps) {
	  (0, _initialize2.default)(dispatch, ownProps);
	  return {};
	}

	var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Table2.default);

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/containers/TableContainer.js');

	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/containers/TableContainer.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/containers/TableContainer.js');
	})();

	;

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

	var _uuid = __webpack_require__(10);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Table = function Table(_ref) {
	  var columns = _ref.columns;
	  var tableData = _ref.tableData;

	  return _react2.default.createElement(
	    'div',
	    { style: { "marginTop": "10px" } },
	    _react2.default.createElement(_Header2.default, { columns: columns }),
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

	  __REACT_HOT_LOADER__.register(Table, 'Table', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/Table.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/Table.js');
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

	var _uuid = __webpack_require__(10);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function Header(_ref) {
	  var columns = _ref.columns;

	  var getValue = function getValue(c) {
	    var text = c.display || c.property;
	    return c.headerFormat ? c.headerFormat({ column: c, value: text, row: columns }) : text;
	  };
	  return _react2.default.createElement(
	    'div',
	    { className: '-redux__dataview-table__header' },
	    columns.map(function (c) {
	      return _react2.default.createElement(_HeaderCell2.default, { value: getValue(c), column: c, key: _uuid2.default.v4() });
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

	  __REACT_HOT_LOADER__.register(Header, 'Header', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/Header.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/Header.js');
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

	  var style = column.hidden ? { display: 'none' } : { width: column.width || '100px' };
	  var className = '-redux__dataview-header__cell ' + (column.headerClassName || '');

	  return _react2.default.createElement(
	    'div',
	    { className: className, style: style },
	    value
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

	  __REACT_HOT_LOADER__.register(HeaderCell, 'HeaderCell', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/HeaderCell.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/HeaderCell.js');
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

	var _uuid = __webpack_require__(10);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = function Row(_ref) {
	  var columns = _ref.columns;
	  var data = _ref.data;


	  var cells = columns.map(function (c) {
	    var style = c.hidden ? { display: 'none' } : { width: c.width || '100px' };
	    var value = c.format ? c.format({ column: c, value: data[c.property], row: data }) : data[c.property];

	    return _react2.default.createElement(_RowCell2.default, { text: value, style: style, className: c.className, key: _uuid2.default.v4() });
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: '-redux__dataview-table__row' },
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

	  __REACT_HOT_LOADER__.register(Row, 'Row', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/Row.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/Row.js');
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

	  var cName = '-redux__dataview-row__cell ' + (className || '');
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

	  __REACT_HOT_LOADER__.register(RowCell, 'RowCell', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/RowCell.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/RowCell.js');
	})();

	;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _configValues = __webpack_require__(7);

	var _CheckBox = __webpack_require__(21);

	var _columnModule = __webpack_require__(4);

	var _default = function _default(dispatch, ownProps) {
	  var config = (0, _configValues.updateConfigs)(ownProps.config);
	  var columns = ownProps.columns;

	  //TODO exptract into strategy or command pattern later
	  if (config.bulkSelection.mode !== 'none') {
	    columns.unshift((0, _CheckBox.bulkSelectionColumn)(config));
	  }
	  //TODO prolly do something like create default columns from data name here
	  if (columns) {
	    dispatch((0, _columnModule.setColumns)(ownProps.columns));
	  }
	};

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/utilities/initialize.js');
	})();

	;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bulkSelectionColumn = bulkSelectionColumn;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(14);

	var _dataRowModule = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkBox = function checkBox(_ref) {
	  var column = _ref.column;
	  var row = _ref.row;
	  var identityColumn = _ref.identityColumn;
	  var dispatch = _ref.dispatch;

	  var change = function change(e, row, column) {
	    return (0, _dataRowModule.handleSelectionEvent)((0, _dataRowModule.setSelection)(column, row[identityColumn], e.currentTarget.checked), dispatch);
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
	      return (0, _dataRowModule.handleSelectionEvent)((0, _dataRowModule.selectAll)(), dispatch);
	    } else {
	      return (0, _dataRowModule.handleSelectionEvent)((0, _dataRowModule.deselectAll)(), dispatch);
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
	  return { selectAllChecked: x.header.selectAll };
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
	    hidden: false
	  };
	}
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(checkBox, 'checkBox', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(headerCheckBox, 'headerCheckBox', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(CheckBox, 'CheckBox', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(HeaderCheckBox, 'HeaderCheckBox', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/CheckBox.js');

	  __REACT_HOT_LOADER__.register(bulkSelectionColumn, 'bulkSelectionColumn', '/home/rharik/Development/MethodFitness/redux-dataview/app/src/components/CheckBox.js');
	})();

	;

/***/ }
/******/ ])
});
;