/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("FormioCore"));
	else if(typeof define === 'function' && define.amd)
		define(["FormioCore"], factory);
	else if(typeof exports === 'object')
		exports["FormioGrid"] = factory(require("FormioCore"));
	else
		root["FormioGrid"] = factory(root["FormioCore"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__formio_core__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/components/column-menu/column-menu.js":
/*!***************************************************!*\
  !*** ./lib/components/column-menu/column-menu.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColumnMenuComponent = void 0;\nvar _ = __importStar(__webpack_require__(/*! @formio/lodash */ \"./node_modules/@formio/lodash/lib/index.js\"));\nvar core_1 = __webpack_require__(/*! @formio/core */ \"@formio/core\");\nvar ColumnMenuComponent = /** @class */ (function () {\n    function ColumnMenuComponent(component, options, data) {\n        this.component = component;\n        this.options = options;\n        this.data = data;\n        this.changedColumnVisibility = new Set();\n    }\n    ColumnMenuComponent.prototype.getRefs = function () {\n        return {\n            menuBtn: 'single',\n            dropdown: 'single',\n            sortAscending: 'single',\n            sortDescending: 'single',\n            rootItem: 'multiple',\n            nestedDropdown: 'multiple',\n            filterInput: 'single',\n            filterType: 'single',\n            filterForm: 'single',\n            filterButton: 'single',\n            clearBtn: 'single',\n            checkbox: 'multiple',\n        };\n    };\n    ColumnMenuComponent.prototype.renderContext = function () {\n        var _this = this;\n        var component = this.component.components\n            .find(function (comp) { return comp.key === _this.component.key; });\n        var customFilterTypes = this.hook('filter', this.component.key);\n        var filterTypes = (customFilterTypes || this.component.filterTypes)\n            .filter(function (i) { return i.type && i.label && i.filter && !i.ignore; });\n        return {\n            component: component,\n            components: this.component.components || [],\n            lastColumn: this.visibleColumnsCount < 2,\n            filterTypes: filterTypes,\n            hideFilters: this.component.hideFilters\n        };\n    };\n    ColumnMenuComponent.prototype.handleFilterChange = function (value) {\n        this.component.filter.value = value;\n    };\n    ColumnMenuComponent.prototype.handleFilter = function () {\n        this.emit('filter', this.component.key, {\n            value: this.component.filter.value,\n            type: this.refs.filterType.value\n        }, this.component.gridComponent);\n    };\n    ColumnMenuComponent.prototype.handleClear = function () {\n        var _a;\n        this.component.filter.value = null;\n        this.emit('filter', this.component.key, this.component.filter, this.component.gridComponent);\n        (_a = this.resetValue) === null || _a === void 0 ? void 0 : _a.call(this);\n        this.refs.filterType.value = this.refs.filterType.options[0].value;\n    };\n    Object.defineProperty(ColumnMenuComponent.prototype, \"rootDropdownItems\", {\n        get: function () {\n            var _a = this.refs, rootItem = _a.rootItem, sortAscending = _a.sortAscending, sortDescending = _a.sortDescending;\n            return __spreadArray(__spreadArray([], rootItem, true), [sortAscending, sortDescending], false).filter(function (i) { return i; });\n        },\n        enumerable: false,\n        configurable: true\n    });\n    ColumnMenuComponent.prototype.attach = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var config;\n            var _this = this;\n            return __generator(this, function (_a) {\n                if (!this.component.key) {\n                    return [2 /*return*/];\n                }\n                if (this.component.isOpen) {\n                    this.openMenu({\n                        key: this.component.key,\n                        position: this.component.position,\n                        filter: this.component.filter,\n                        gridComponent: this.component.gridComponent,\n                    });\n                }\n                this.addEventListener(this.refs.sortAscending, 'click', function () { return _this.emit('sortAscending', _this.component.key, _this.component.gridComponent); });\n                this.addEventListener(this.refs.sortDescending, 'click', function () { return _this.emit('sortDescending', _this.component.key, _this.component.gridComponent); });\n                this.addEventListener(this.refs.clearBtn, 'click', function () { return _this.handleClear(); });\n                this.component.components.forEach(function (comp, i) {\n                    _this.addEventListener(_this.refs.checkbox[i], 'change', function (e) { return _this.handleChangeVisibility(e, comp.key); });\n                });\n                this.addEventListener(this.refs.filterButton, 'click', function (e) {\n                    _this.handleFilter();\n                });\n                this.rootDropdownItems\n                    .forEach(function (i) {\n                    _this.addEventListener(i, 'mouseenter', function (e) {\n                        _this.rootDropdownItems\n                            .forEach(function (i) {\n                            i.classList.remove('active');\n                        });\n                        i.classList.add('active');\n                    });\n                });\n                if (this.options.filterable && this.refs.filterInput) {\n                    this.refs.filterInput.value = this.component.filter.value || '';\n                    this.refs.filterType.value = this.component.filter.type || this.refs.filterType.options[0].value;\n                    this.addEventListener(this.refs.filterInput, 'input', function (_a) {\n                        var value = _a.target.value;\n                        return _this.handleFilterChange(value);\n                    });\n                    config = this.hook('attachFilter', {\n                        key: this.refs.filterInput.name,\n                        element: this.refs.filterInput.parentElement,\n                        value: this.component.filter.value,\n                        onChange: function (value) { return _this.handleFilterChange(value); }\n                    });\n                    if (_.isObject(config)) {\n                        this.resetValue = config.resetValue;\n                    }\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    Object.defineProperty(ColumnMenuComponent.prototype, \"visibleColumnsCount\", {\n        get: function () {\n            return this.component.components\n                .reduce(function (count, comp) { return count + (comp.show ? 1 : 0); }, 0);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    ColumnMenuComponent.prototype.handleChangeVisibility = function (e, key) {\n        var component = this.component.components.find(function (comp) { return comp.key === key; });\n        component.show = !component.show;\n        if (this.changedColumnVisibility.has(key)) {\n            this.changedColumnVisibility.delete(key);\n        }\n        else {\n            this.changedColumnVisibility.add(key);\n        }\n        if (this.visibleColumnsCount < 2) {\n            this.refs.checkbox.forEach(function (checkbox, i) {\n                if (checkbox.checked) {\n                    checkbox.disabled = true;\n                }\n            });\n        }\n        else {\n            this.refs.checkbox.forEach(function (checkbox, i) {\n                checkbox.disabled = false;\n            });\n        }\n    };\n    ColumnMenuComponent.prototype.openMenu = function (_a) {\n        var _this = this;\n        var _b = _a === void 0 ? {} : _a, key = _b.key, _c = _b.position, position = _c === void 0 ? { x: 0, y: 0 } : _c, _d = _b.filter, filter = _d === void 0 ? {} : _d, _e = _b.gridComponent, gridComponent = _e === void 0 ? {} : _e;\n        this.changedColumnVisibility.clear();\n        this.component.key = key;\n        this.component.position = position;\n        this.component.filter = filter;\n        this.component.gridComponent = gridComponent;\n        this.refs.dropdown.style.top = this.component.position.y + 'px';\n        this.refs.dropdown.style.left = this.component.position.x - 100 + 'px';\n        this.refs.dropdown.classList.add('open');\n        var elementRight = this.refs.dropdown.getBoundingClientRect().right;\n        var rightSpace = document.documentElement.clientWidth - elementRight;\n        if (rightSpace < 200) {\n            this.refs.nestedDropdown.forEach(function (element) {\n                element.style.right = '100%';\n            });\n        }\n        else {\n            this.refs.nestedDropdown.forEach(function (element) {\n                element.style.left = '100%';\n            });\n        }\n        var clickOutside = function (e) {\n            if (_this.getMouseEventPath(e).some(function (elem) { return elem === _this.refs.dropdown; })) {\n                return;\n            }\n            if (document.querySelector('.flatpickr-calendar.open')) {\n                if (_this.getMouseEventPath(e).some(function (elem) { var _a, _b; return ((_a = elem.classList) === null || _a === void 0 ? void 0 : _a.contains('flatpickr-calendar')) && ((_b = elem.classList) === null || _b === void 0 ? void 0 : _b.contains('open')); })) {\n                    return;\n                }\n            }\n            _this.closeMenu();\n            document.body.removeEventListener('mousedown', clickOutside);\n        };\n        setTimeout(function () {\n            document.body.addEventListener('mousedown', clickOutside);\n        }, 0);\n        this.component.isOpen = true;\n    };\n    ColumnMenuComponent.prototype.getMouseEventPath = function (e) {\n        var path = [];\n        var currentElem = e.target;\n        while (currentElem) {\n            path.push(currentElem);\n            currentElem = currentElem.parentElement;\n        }\n        if (path.indexOf(window) === -1 && path.indexOf(document) === -1)\n            path.push(document);\n        if (path.indexOf(window) === -1)\n            path.push(window);\n        return path;\n    };\n    ColumnMenuComponent.prototype.closeMenu = function () {\n        this.component.key = null;\n        this.component.gridComponent = {};\n        this.refs.dropdown.classList.remove('open');\n        this.component.isOpen = false;\n        if (this.changedColumnVisibility.size > 0) {\n            this.emit('changeVisibility', this.component.components);\n        }\n    };\n    ColumnMenuComponent = __decorate([\n        (0, core_1.Component)({\n            type: 'columnMenu',\n            schema: {\n                key: null,\n                isOpen: false,\n                position: { x: 0, y: 0 },\n                components: [],\n                filter: {\n                    type: 'equals',\n                    value: null\n                },\n                filterTypes: [\n                    {\n                        type: 'equal',\n                        label: 'Equal',\n                        filter: function (value, filter) { return value === filter; }\n                    }\n                ],\n                hideFilters: []\n            },\n            template: 'columnMenu'\n        })\n    ], ColumnMenuComponent);\n    return ColumnMenuComponent;\n}());\nexports.ColumnMenuComponent = ColumnMenuComponent;\ncore_1.Components.addComponent(ColumnMenuComponent, 'columnMenu');\n\n\n//# sourceURL=webpack://FormioGrid/./lib/components/column-menu/column-menu.js?");

/***/ }),

/***/ "./lib/components/grid/grid.js":
/*!*************************************!*\
  !*** ./lib/components/grid/grid.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GridComponent = exports.Grid = void 0;\nvar core_1 = __webpack_require__(/*! @formio/core */ \"@formio/core\");\nvar pagination_1 = __webpack_require__(/*! ../pagination/pagination */ \"./lib/components/pagination/pagination.js\");\nvar column_menu_1 = __webpack_require__(/*! ../column-menu/column-menu */ \"./lib/components/column-menu/column-menu.js\");\nvar _ = __importStar(__webpack_require__(/*! @formio/lodash */ \"./node_modules/@formio/lodash/lib/index.js\"));\nvar tbody_1 = __webpack_require__(/*! ../tbody/tbody */ \"./lib/components/tbody/tbody.js\");\nvar defaultFilterTypes = [\n    {\n        type: 'equal',\n        label: 'Is equal to',\n        filter: function (value, filter) { return _.isEqual(value, filter); }\n    },\n    {\n        type: 'notEqual',\n        label: 'Is not equal to',\n        filter: function (value, filter) { return !_.isEqual(value, filter); }\n    },\n    {\n        type: 'startsWith',\n        label: 'Starts with',\n        filter: function (value, filter) { return value.toString().startsWith(filter.toString()); }\n    },\n    {\n        type: 'contain',\n        label: 'Contains',\n        filter: function (value, filter) { return value.toString().includes(filter.toString()); }\n    },\n    {\n        type: 'notContain',\n        label: 'Does not contain',\n        filter: function (value, filter) { return !value.toString().includes(filter.toString()); }\n    },\n    {\n        type: 'endsWith',\n        label: 'Ends with',\n        filter: function (value, filter) { return value.toString().endsWith(filter.toString()); }\n    },\n    {\n        type: 'matches',\n        label: 'Matches (RegExp)',\n        filter: function (value, filter) { return value.toString().match(new RegExp(filter, 'gi')); }\n    },\n    {\n        type: 'gt',\n        label: 'Greater than',\n        filter: function (value, filter) { return value > filter; }\n    },\n    {\n        type: 'gte',\n        label: 'Greater than or equal to',\n        filter: function (value, filter) { return value >= filter; }\n    },\n    {\n        type: 'lt',\n        label: 'Less than',\n        filter: function (value, filter) { return value < filter; }\n    },\n    {\n        type: 'lte',\n        label: 'Less than or equal to',\n        filter: function (value, filter) { return value <= filter; }\n    },\n];\nvar Grid = /** @class */ (function (_super) {\n    __extends(Grid, _super);\n    function Grid(component, options, data) {\n        var _this = this;\n        var _a;\n        _this = _super.call(this) || this;\n        _this.component = component;\n        _this.options = options;\n        _this.data = data;\n        _this.filteredData = [];\n        _this._showLoader = false;\n        _this.fetchTotalCount = 0;\n        _this.hideFilters = [];\n        _this.noPageDataUpdate = false;\n        _this.updatePageData = false;\n        _this.noFetchInAttach = false;\n        _this.currentPage = 0;\n        if (_this.enableFetch && ((_a = _this.component.fetch) === null || _a === void 0 ? void 0 : _a.url)) {\n            _this.component.showAddBtn = false;\n            _this.component.showEditBtn = false;\n            _this.component.showDeleteBtn = false;\n            _this.component.showDeleteAllBtn = false;\n        }\n        if (!_this.data || !Array.isArray(_this.data)) {\n            _this.data = [];\n        }\n        _this.filteredData = __spreadArray([], _this.data, true);\n        return _this;\n    }\n    Object.defineProperty(Grid.prototype, \"showLoader\", {\n        get: function () {\n            return this._showLoader;\n        },\n        set: function (state) {\n            if (!this.refs.loader) {\n                return;\n            }\n            this.refs.loader.style.display = state ? 'flex' : 'none';\n            this._showLoader = state;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Grid.prototype, \"displayedData\", {\n        get: function () {\n            if (this.enableFetch) {\n                return this.data;\n            }\n            var indexes = this.getIndexes(this.filteredData);\n            return this.filteredData.slice(indexes.min, indexes.max + 1);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Grid.prototype.filterTypes = function (key) {\n        var customFilterTypes = this.hook('filter', key);\n        return (customFilterTypes || defaultFilterTypes);\n    };\n    Grid.prototype.refreshGrid = function () {\n        this.detach();\n        this.init();\n        this.tbody.component.showEditBtn = this.component.showEditBtn;\n        this.tbody.component.showDeleteBtn = this.component.showDeleteBtn;\n        this.tbody.component.showDeleteAllBtn = this.component.showDeleteAllBtn;\n        this.pagination().setTotalItems(this.enableFetch ? this.fetchTotalCount : this.filteredData.length);\n        this.redraw();\n    };\n    Grid.prototype.refreshTbody = function (data) {\n        if (data === void 0) { data = this.displayedData; }\n        this.tbody.renderData(data, this.component.components);\n    };\n    Grid.prototype.getIndexBy = function (row, rowIndex) {\n        var _a = this.pagination().component, currentPage = _a.currentPage, itemsPerPage = _a.itemsPerPage;\n        return currentPage * itemsPerPage + rowIndex;\n        // return this.data.indexOf(row)\n    };\n    Object.defineProperty(Grid.prototype, \"enableFetch\", {\n        get: function () {\n            var _a, _b;\n            return !!(((_a = this.component.fetch) === null || _a === void 0 ? void 0 : _a.enableFetch) && ((_b = this.component.fetch) === null || _b === void 0 ? void 0 : _b.url) && this.options.fetchProvider);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Grid.prototype, \"pageSize\", {\n        get: function () {\n            return this.pagination().component.itemsPerPage;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Grid.prototype.pagination = function () {\n        var _this = this;\n        if (this._pagination) {\n            return this._pagination;\n        }\n        this.component.pagination.totalItems = this.data.length;\n        this._pagination = new pagination_1.PaginationComponent(this.component.pagination);\n        this._pagination.on('page', function (currentPage) {\n            var pageChanged = currentPage !== _this.currentPage;\n            _this.currentPage = currentPage;\n            if (_this.enableFetch && !_this.options.readOnly) {\n                if ((!pageChanged && !_this.updatePageData) || _this.noPageDataUpdate) {\n                    _this.noPageDataUpdate = false;\n                    _this.emit('page', currentPage, _this.data);\n                    return;\n                }\n                _this.updatePageData = false;\n                _this.fetchData({ page: currentPage, pageSize: _this.pageSize, sort: _this.component.sort, filters: _this.component.filters })\n                    .then(function (data) {\n                    if (!data) {\n                        return;\n                    }\n                    ;\n                    _this.setData(data.data);\n                    _this.emit('page', currentPage, _this.data);\n                    _this.refreshTbody(_this.data);\n                });\n            }\n            else {\n                _this.emit('page', currentPage);\n                _this.refreshTbody();\n            }\n        });\n        this._pagination.on('changeItemsPerPage', function (itemsPerPage) {\n            if (_this.enableFetch && !_this.options.readOnly) {\n                _this.fetchData({ page: _this.currentPage, pageSize: itemsPerPage, sort: _this.component.sort, filters: _this.component.filters })\n                    .then(function (data) {\n                    if (!data) {\n                        return;\n                    }\n                    ;\n                    _this.setData(data.data);\n                    _this.refreshTbody(_this.data);\n                    _this.emit('changeItemsPerPage', itemsPerPage);\n                });\n            }\n            else {\n                _this.emit('changeItemsPerPage', itemsPerPage);\n            }\n        });\n        return this._pagination;\n    };\n    Object.defineProperty(Grid.prototype, \"tbody\", {\n        get: function () {\n            var _this = this;\n            if (this._tbody) {\n                return this._tbody;\n            }\n            this._tbody = new tbody_1.TbodyComponent({\n                components: this.component.components,\n                cellMaxWidth: Number(this.component.cellMaxWidth) ? (this.component.cellMaxWidth + \"em\") : this.component.cellMaxWidth,\n                clipCells: this.component.clipCells,\n                showEditBtn: this.component.showEditBtn,\n                showDeleteBtn: this.component.showDeleteBtn,\n                showDeleteAllBtn: this.component.showDeleteAllBtn\n            }, this.options, this.displayedData);\n            this._tbody.on('rowClick', function (row, rowIndex, index, event) {\n                _this.emit('rowClick', row, rowIndex, _this.getIndexBy(row, rowIndex), event);\n                _this.emit('row:click', row, rowIndex, _this.getIndexBy(row, rowIndex), event);\n            });\n            this._tbody.on('rowEdit', function (row, rowIndex, index) {\n                _this.handleEditRow(row, rowIndex, _this.getIndexBy(row, rowIndex));\n            });\n            this._tbody.on('rowDelete', function (row, rowIndex, index) {\n                _this.handleDeleteRow(row, rowIndex, _this.getIndexBy(row, rowIndex));\n            });\n            this._tbody.on('row:attach', function (component, element, rowIndex) {\n                var _a;\n                var row = _this.displayedData[rowIndex];\n                var key = component.key;\n                (_a = component.attach) === null || _a === void 0 ? void 0 : _a.call(component, {\n                    key: key,\n                    element: element,\n                    row: row,\n                    rowIndex: rowIndex,\n                    value: _this.enableFetch ? _.get(row, key, null) : null,\n                    index: _this.getIndexBy(_this.displayedData[rowIndex], rowIndex)\n                });\n            });\n            return this._tbody;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Grid.prototype, \"menu\", {\n        get: function () {\n            var _this = this;\n            if (this._menu) {\n                return this._menu;\n            }\n            if (this.enableFetch) {\n                this.component.components.forEach(function (component) {\n                    if (component.type === 'number') {\n                        _this.hideFilters.push(component.key);\n                    }\n                });\n            }\n            this._menu = new column_menu_1.ColumnMenuComponent({\n                components: this.component.components,\n                hideFilters: this.hideFilters,\n                filterTypes: defaultFilterTypes\n            }, this.options);\n            this._menu.on('changeVisibility', function (components) {\n                _this.noFetchInAttach = true;\n                _this.component.components = components;\n                _this.refreshGrid();\n            });\n            this._menu.on('sortAscending', function (key, comp) {\n                if (_this.component.sort.key === key && _this.component.sort.isAsc) {\n                    return;\n                }\n                _this.sortBy(_this.getFilterAndSortKey(key, comp), true);\n            });\n            this._menu.on('sortDescending', function (key, comp) {\n                if (_this.component.sort.key === key && !_this.component.sort.isAsc) {\n                    return;\n                }\n                _this.sortBy(_this.getFilterAndSortKey(key, comp), false);\n            });\n            this._menu.on('filter', function (key, filter, comp) {\n                _this.handleFilter(_this.getFilterAndSortKey(key, comp), filter);\n            });\n            return this._menu;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Grid.prototype.getFilterAndSortKey = function (compKey, comp) {\n        return this.enableFetch\n            ? (comp.columnQueryProperty || compKey)\n            : compKey;\n    };\n    Grid.prototype.renderContext = function () {\n        var _this = this;\n        return _super.prototype.renderContext.call(this, {\n            eachRow: function (fn) { return _this.eachRow(fn); }\n        });\n    };\n    Grid.prototype.getIndexes = function (value) {\n        return this.pagination().getIndexes(value);\n    };\n    Grid.prototype.getRefs = function () {\n        return {\n            pagination: 'single',\n            tbody: 'single',\n            addRow: 'single',\n            sort: 'multiple',\n            menu: 'single',\n            menuBtn: 'multiple',\n            filter: 'multiple',\n            deleteAll: 'single',\n            loader: 'single'\n        };\n    };\n    Grid.prototype.addNewRow = function (row) {\n        if (row === void 0) { row = {}; }\n        this.data.unshift(row);\n        this.filteredData = this.sort(this.filter(this.data));\n        this.pagination().setTotalItems(this.filteredData.length);\n    };\n    Grid.prototype.editRow = function (row, index) {\n        if (row === void 0) { row = {}; }\n        this.data[index] = row;\n        var _a = this.component.sort, key = _a.key, isAsc = _a.isAsc;\n        this.sortBy(key, isAsc);\n    };\n    Grid.prototype.handleEditRow = function (row, rowIndex, index) {\n        this.emit('rowEdit', row, rowIndex, index);\n        this.emit('row:edit', row, rowIndex, index);\n    };\n    Grid.prototype.handleDeleteRow = function (row, rowIndex, index) {\n        this.emit('rowDelete', row, rowIndex, index);\n        this.emit('row:delete', row, rowIndex, index);\n    };\n    Grid.prototype.deleteRow = function (row, rowIndex, index) {\n        this.data.splice(this.data.indexOf(row[0].data), 1);\n        this.filteredData = this.sort(this.filter(this.data));\n        this.pagination().setTotalItems(this.filteredData.length);\n    };\n    Grid.prototype.handleAddRow = function () {\n        this.emit('rowAdd');\n        this.emit('row:add');\n    };\n    Grid.prototype.setFilter = function (key, _a) {\n        var type = _a.type, value = _a.value;\n        if (_.isNil(value) || value === '') {\n            delete this.component.filters[key];\n        }\n        else {\n            this.component.filters[key] = { type: type, value: value };\n        }\n    };\n    Grid.prototype.filter = function (data, filters) {\n        var _this = this;\n        if (data === void 0) { data = this.filteredData; }\n        if (filters === void 0) { filters = this.component.filters; }\n        this.component.filters = filters;\n        if (this.enableFetch) {\n            this.fetchData({ page: 0, pageSize: this.pageSize, sort: this.component.sort, filters: this.component.filters })\n                .then(function (data) {\n                if (!data) {\n                    return;\n                }\n                ;\n                _this.setData(data.data);\n                _this.noPageDataUpdate = _this.fetchTotalCount === 0 || _this.fetchTotalCount < _this.pageSize || _this.currentPage === 0;\n                _this.updatePageData = data.countChanged && !_this.noPageDataUpdate;\n                _this.noFetchInAttach = true;\n                _this.refreshGrid();\n            });\n            return [];\n        }\n        var filtersArray = Object.entries(filters).filter(function (_a) {\n            var value = _a[1].value;\n            return !(_.isNil(value) || value === '');\n        });\n        this.filteredData = data.filter(function (row) {\n            return filtersArray\n                .every(function (_a) {\n                var _b;\n                var key = _a[0], _c = _a[1], type = _c.type, value = _c.value;\n                var filterTypes = _this.filterTypes(key);\n                var filterType = filterTypes.find(function (ft) { return ft.type === type; });\n                return (_b = filterType === null || filterType === void 0 ? void 0 : filterType.filter) === null || _b === void 0 ? void 0 : _b.call(filterType, _.get(row, key), value);\n            });\n        });\n        return this.sort(this.filteredData);\n    };\n    Grid.prototype.handleFilter = function (name, filter) {\n        this.setFilter(name, filter);\n        this.filter(this.data);\n        if (!this.enableFetch) {\n            this.refreshGrid();\n        }\n    };\n    Grid.prototype.setSort = function (key, isAsc) {\n        var haveDefaultSorting = !!_.get(this.component, 'fetch.sort.defaultQuery', null);\n        if (!key && haveDefaultSorting) {\n            this.component.sort.key = _.get(this.component, 'fetch.sort.defaultQuery', null);\n            this.component.sort.isAsc = !_.get(this.component, 'fetch.sort.descending', null);\n            this.component.sort.default = true;\n        }\n        else {\n            this.component.sort.key = key;\n            this.component.sort.isAsc = isAsc;\n            this.component.sort.default = false;\n        }\n    };\n    Grid.prototype.sort = function (data, _a) {\n        var _this = this;\n        if (data === void 0) { data = this.filteredData; }\n        var _b = _a === void 0 ? this.component.sort : _a, key = _b.key, isAsc = _b.isAsc;\n        this.setSort(key, isAsc);\n        var sortOrder = isAsc ? 1 : -1;\n        data.sort(function (a, b) { return sortOrder * _this.compare(_.get(a, key), _.get(b, key)); });\n        return data;\n    };\n    Grid.prototype.compare = function (a, b) {\n        if (_.isString(a)) {\n            a = a.toLowerCase();\n        }\n        if (_.isString(b)) {\n            b = b.toLowerCase();\n        }\n        return (a < b) ? -1 : (a > b) ? 1 : 0;\n    };\n    Grid.prototype.sortBy = function (key, isAsc) {\n        var _this = this;\n        if (this.enableFetch && !this.options.readOnly) {\n            this.fetchData({ page: this.currentPage, pageSize: this.pageSize, sort: { key: key, isAsc: isAsc }, filters: this.component.filters })\n                .then(function (data) {\n                if (!data) {\n                    return;\n                }\n                ;\n                _this.setData(data.data);\n                _this.setSort(key, isAsc);\n                _this.noFetchInAttach = true;\n                _this.refreshGrid();\n            });\n        }\n        else {\n            this.setSort(key, isAsc);\n            this.sort();\n            this.refreshGrid();\n        }\n    };\n    Grid.prototype.handleSort = function (key) {\n        var defaultSorting = this.component.sort.default;\n        var isAsc = defaultSorting ? true : this.component.sort.isAsc;\n        if (this.component.sort.key === key && !defaultSorting) {\n            if (!isAsc) {\n                this.setSort(null, !isAsc);\n                this.filter(this.data);\n                if (!this.enableFetch) {\n                    this.refreshGrid();\n                }\n                return;\n            }\n            isAsc = !isAsc;\n        }\n        this.sortBy(key, isAsc);\n    };\n    Grid.prototype.handleMenuOpen = function (key, e, currentComponent) {\n        var _a = this.element.getBoundingClientRect(), tableX = _a.x, tableY = _a.y;\n        var clientX = e.clientX, clientY = e.clientY;\n        var x = clientX - tableX;\n        var y = clientY - tableY;\n        var filterAndSortKey = this.getFilterAndSortKey(key, currentComponent);\n        this.menu.openMenu({\n            key: key,\n            position: { x: x, y: y },\n            filter: this.component.filters[filterAndSortKey],\n            gridComponent: currentComponent\n        });\n        this.menu.redraw();\n    };\n    Grid.prototype.setData = function (value) {\n        this.data = value;\n        this.updateValue(value);\n        this.filteredData = __spreadArray([], value, true);\n    };\n    Grid.prototype.handleDeleteAll = function () {\n        this.emit('deleteAll');\n    };\n    Grid.prototype.deleteAll = function () {\n        this.data = [];\n        this.filteredData = [];\n        this.refreshGrid();\n    };\n    Grid.prototype.attach = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var pagination;\n            var _this = this;\n            return __generator(this, function (_a) {\n                if (this.options.readOnly && (this.component.isSubmitData === false || this.enableFetch)) {\n                    if (!this.dataValue.length && this.element) {\n                        this.element.style.display = 'none';\n                        this.element.previousElementSibling && (this.element.previousElementSibling.tagName === 'LABEL') && (this.element.previousElementSibling.style.display = 'none');\n                        return [2 /*return*/];\n                    }\n                    else if (!this.component.hideLabel && this.element) {\n                        this.element.previousElementSibling.style.display = 'inline';\n                    }\n                }\n                if (!this.options.readOnly && this.component.showAddBtn) {\n                    this.addEventListener(this.refs.addRow, 'click', function () { return _this.handleAddRow(); });\n                }\n                pagination = this.pagination();\n                pagination.attach(this.refs.pagination);\n                this.currentPage = pagination.component.currentPage;\n                if (this.component.showAddBtn && (!this.component.showEditBtn && !this.component.showDeleteBtn && !this.component.showDeleteAllBtn)) {\n                    pagination.element.style.marginRight = '3.5em';\n                }\n                this.menu.attach(this.refs.menu);\n                this.tbody.attach(this.refs.tbody);\n                if (!this.component.sort.key) {\n                    this.setSort(null, true);\n                }\n                if (this.enableFetch && !this.options.readOnly) {\n                    if (this.noFetchInAttach) {\n                        this.noFetchInAttach = false;\n                        this.refreshTbody(this.data);\n                    }\n                    else {\n                        this.fetchData({ page: this.currentPage, pageSize: this.pageSize, sort: this.component.sort, filters: this.component.filters })\n                            .then(function (data) {\n                            if (!data) {\n                                return;\n                            }\n                            ;\n                            _this.setData(data.data);\n                            _this.pagination().setTotalItems(_this.fetchTotalCount);\n                            _this.refreshTbody(_this.data);\n                        });\n                    }\n                }\n                if (!this.options.readOnly) {\n                    this.addEventListener(this.refs.deleteAll, 'click', function () { return _this.handleDeleteAll(); });\n                }\n                this.component.components\n                    .filter(function (component) { return component.show; })\n                    .forEach(function (component, i) {\n                    _this.addEventListener(_this.refs.menuBtn[i], 'click', function (e) { return _this.handleMenuOpen(component.key, e, component); });\n                });\n                if (this.options.sortable && this.refs.sort && this.refs.sort.length) {\n                    this.component.components\n                        .filter(function (component) { return component.sortable && component.show; })\n                        .forEach(function (component, i) {\n                        _this.addEventListener(_this.refs.sort[i], 'click', function () { return _this.handleSort(_this.getFilterAndSortKey(component.key, component)); });\n                    });\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    Grid.prototype.detach = function () {\n        this.pagination().detach();\n    };\n    Grid.prototype.transformData = function (responseData) {\n        return this.hook('transformData', responseData) || responseData;\n    };\n    Grid.prototype.fetchData = function (_a) {\n        var _this = this;\n        var _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c, sort = _a.sort, filters = _a.filters;\n        this.showLoader = true;\n        var filterParams = {};\n        if (filters && Object.entries(filters).length) {\n            Object.entries(filters).forEach(function (filter) {\n                var filterType = filter[1].type;\n                var filterItem = { value: filter[0], comparedValue: filter[1].value };\n                if (filterParams[filterType]) {\n                    filterParams[filterType].push(filterItem);\n                }\n                else {\n                    filterParams[filterType] = [filterItem];\n                }\n            });\n        }\n        var fetchProvider = this.options.fetchProvider;\n        var sortParam = (sort && sort.key) ? { value: sort.key, asc: sort.isAsc } : null;\n        if (!fetchProvider) {\n            return new Promise(function (resolve) { return resolve(null); });\n        }\n        //provider method getData() is expected to return an object/array with serverCount property. \n        return fetchProvider.getData(__assign(__assign({ limit: (pageSize === -1) ? this.fetchTotalCount : pageSize, skip: (pageSize === -1) ? 0 : page * pageSize }, (sortParam ? { sort: sortParam } : {})), filterParams))\n            .then(function (response) {\n            var countChanged = _this.fetchTotalCount !== response.serverCount;\n            _this.fetchTotalCount = response.serverCount;\n            var transformedData = _this.transformData(response);\n            if (!_.isArray(transformedData)) {\n                console.warn(\"The Grid data must be an array of objects.\");\n                transformedData = [];\n            }\n            _this.showLoader = false;\n            return { data: transformedData, countChanged: countChanged };\n        })\n            .catch(function (e) {\n            console.warn(e);\n        });\n    };\n    return Grid;\n}(core_1.DataTable));\nexports.Grid = Grid;\nvar GridComponent = /** @class */ (function (_super) {\n    __extends(GridComponent, _super);\n    function GridComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    GridComponent = __decorate([\n        (0, core_1.ArrayComponent)({\n            type: 'grid',\n            schema: {\n                striped: true,\n                bordered: true,\n                hover: true,\n                pagination: {\n                    itemsPerPage: 10\n                },\n                sort: {\n                    key: null,\n                    isAsc: true\n                },\n                filters: {},\n                filteredData: [],\n                cellMaxWidth: '',\n                clipCells: false,\n                showAddBtn: true,\n                showEditBtn: true,\n                showDeleteBtn: true,\n                showDeleteAllBtn: false\n            },\n            template: 'grid'\n        })\n    ], GridComponent);\n    return GridComponent;\n}(Grid));\nexports.GridComponent = GridComponent;\ncore_1.Components.addComponent(GridComponent, 'grid');\n\n\n//# sourceURL=webpack://FormioGrid/./lib/components/grid/grid.js?");

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar grid_1 = __webpack_require__(/*! ./grid/grid */ \"./lib/components/grid/grid.js\");\nvar pagination_1 = __webpack_require__(/*! ./pagination/pagination */ \"./lib/components/pagination/pagination.js\");\n__webpack_require__(/*! core-js/features/object/from-entries */ \"./node_modules/core-js/features/object/from-entries.js\");\nexports[\"default\"] = {\n    grid: grid_1.GridComponent,\n    pagination: pagination_1.PaginationComponent\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/components/index.js?");

/***/ }),

/***/ "./lib/components/pagination/pagination.js":
/*!*************************************************!*\
  !*** ./lib/components/pagination/pagination.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PaginationComponent = void 0;\nvar core_1 = __webpack_require__(/*! @formio/core */ \"@formio/core\");\nvar PaginationComponent = /** @class */ (function () {\n    function PaginationComponent(component, options, data) {\n        this.component = component;\n        this.options = options;\n        this.data = data;\n        this.calculatePages();\n    }\n    PaginationComponent.prototype.getRefs = function () {\n        return {\n            firstPage: 'single',\n            lastPage: 'single',\n            prevPage: 'single',\n            nextPage: 'single',\n            pageNum: 'single',\n            itemsPerPage: 'single',\n            itemsCount: 'single',\n            pageCount: 'single',\n        };\n    };\n    PaginationComponent.prototype.calculatePages = function () {\n        var itemsPerPage = this.component.itemsPerPage === -1 ? this.component.totalItems : this.component.itemsPerPage;\n        this.numPages = Math.ceil(this.component.totalItems / itemsPerPage);\n    };\n    PaginationComponent.prototype.setItemsPerPage = function (num) {\n        this.component.itemsPerPage = parseInt(num);\n        this.calculatePages();\n        this.setPage(this.component.currentPage);\n        this.emit('changeItemsPerPage', this.component.itemsPerPage);\n    };\n    PaginationComponent.prototype.setTotalItems = function (num) {\n        this.component.totalItems = parseInt(num);\n        this.calculatePages();\n        this.setPage(this.component.currentPage);\n    };\n    PaginationComponent.prototype.setPage = function (page) {\n        if (page >= this.numPages) {\n            page = this.numPages - 1;\n        }\n        if (page < 0) {\n            page = 0;\n        }\n        this.component.currentPage = page;\n        if (this.refs.pageNum) {\n            this.refs.pageNum.value = this.component.currentPage + 1;\n        }\n        if (this.refs.itemsCount) {\n            this.refs.itemsCount.innerText = this.getItemsCount();\n        }\n        if (this.refs.pageCount) {\n            this.refs.pageCount.innerText = this.getPageCount();\n        }\n        this.emit('page', this.component.currentPage);\n        this.disableButtons();\n    };\n    PaginationComponent.prototype.getItemsCount = function () {\n        if (!this.component.totalItems) {\n            return 'No items to display';\n        }\n        var _a = this.getIndexes(), max = _a.max, min = _a.min;\n        return \"Showing \".concat(min + 1, \" to \").concat(max + 1, \" of \").concat(this.component.totalItems, \" items\");\n    };\n    PaginationComponent.prototype.getPageCount = function () {\n        return Math.max(Math.ceil(this.component.totalItems / this.component.itemsPerPage), 1);\n    };\n    PaginationComponent.prototype.disableButtons = function () {\n        var _this = this;\n        var requiredKeysExist = ['firstPage', 'prevPage', 'lastPage', 'nextPage', 'pageNum'].every(function (ref) { return !!_this.refs[ref]; });\n        if (!requiredKeysExist) {\n            return;\n        }\n        this.refs.firstPage.disabled = false;\n        this.refs.prevPage.disabled = false;\n        this.refs.lastPage.disabled = false;\n        this.refs.nextPage.disabled = false;\n        this.refs.pageNum.disabled = false;\n        if (this.component.currentPage === 0) {\n            this.refs.firstPage.disabled = true;\n            this.refs.prevPage.disabled = true;\n        }\n        if (this.component.currentPage === this.numPages - 1 || this.numPages === 0) {\n            this.refs.lastPage.disabled = true;\n            this.refs.nextPage.disabled = true;\n        }\n        if (this.numPages === 1 || this.numPages === 0) {\n            this.refs.pageNum.disabled = true;\n        }\n    };\n    PaginationComponent.prototype.getIndexes = function (value) {\n        var itemsPerPage = this.component.itemsPerPage === -1 ? this.component.totalItems : this.component.itemsPerPage;\n        var total = value ? value.length : this.component.totalItems;\n        var first = this.component.currentPage * itemsPerPage;\n        var last = first + itemsPerPage;\n        return {\n            min: first,\n            max: (last > total) ? (total - 1) : (last - 1)\n        };\n    };\n    PaginationComponent.prototype.renderContext = function () {\n        return {\n            itemsCount: this.getItemsCount(),\n            pages: this.getPageCount(),\n        };\n    };\n    PaginationComponent.prototype.attach = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                this.addEventListener(this.refs.firstPage, 'click', function () { return _this.setPage(0); });\n                this.addEventListener(this.refs.lastPage, 'click', function () { return _this.setPage(_this.numPages - 1); });\n                this.addEventListener(this.refs.prevPage, 'click', function () { return _this.setPage(--_this.component.currentPage); });\n                this.addEventListener(this.refs.nextPage, 'click', function () { return _this.setPage(++_this.component.currentPage); });\n                this.addEventListener(this.refs.pageNum, 'input', function () { return _this.setPage((_this.refs.pageNum.value - 1)); });\n                this.addEventListener(this.refs.itemsPerPage, 'change', function () { return _this.setItemsPerPage(_this.refs.itemsPerPage.value); });\n                if (this.refs.pageNum) {\n                    this.disableButtons();\n                    this.refs.pageNum.value = this.component.currentPage + 1;\n                }\n                if (this.refs.itemsPerPage) {\n                    this.refs.itemsPerPage.value = this.component.itemsPerPage;\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    PaginationComponent.prototype.init = function () {\n        this.calculatePages();\n    };\n    PaginationComponent = __decorate([\n        (0, core_1.Component)({\n            type: 'pagination',\n            schema: {\n                totalItems: 0,\n                currentPage: 0,\n                itemsPerPage: 10\n            },\n            template: 'pagination'\n        })\n    ], PaginationComponent);\n    return PaginationComponent;\n}());\nexports.PaginationComponent = PaginationComponent;\ncore_1.Components.addComponent(PaginationComponent, 'pagination');\n\n\n//# sourceURL=webpack://FormioGrid/./lib/components/pagination/pagination.js?");

/***/ }),

/***/ "./lib/components/tbody/tbody.js":
/*!***************************************!*\
  !*** ./lib/components/tbody/tbody.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TbodyComponent = void 0;\nvar core_1 = __webpack_require__(/*! @formio/core */ \"@formio/core\");\nvar TbodyComponent = /** @class */ (function (_super) {\n    __extends(TbodyComponent, _super);\n    function TbodyComponent(component, options, data) {\n        var _this = _super.call(this) || this;\n        _this.component = component;\n        _this.options = options;\n        _this.data = data;\n        _this.options = __assign(__assign({}, _this.options), { sanitizeConfig: {\n                forbiddenTags: ['table'],\n            } });\n        return _this;\n    }\n    TbodyComponent.prototype.renderData = function (data, components) {\n        if (components === void 0) { components = this.component.components; }\n        this.data = data;\n        this.component.components = components;\n        this.init();\n        this.redraw();\n    };\n    TbodyComponent.prototype.eachRow = function (fn) {\n        var _this = this;\n        this.dataValue.forEach(function (comp, j) {\n            fn(_this.rows[j], j, j);\n        });\n    };\n    TbodyComponent.prototype.getRefs = function () {\n        return {\n            deleteRow: 'multiple',\n            editRow: 'multiple',\n            row: 'multiple',\n        };\n    };\n    TbodyComponent.prototype.renderContext = function () {\n        var _this = this;\n        return {\n            eachRow: function (fn) { return _this.eachRow(fn); },\n        };\n    };\n    TbodyComponent.prototype.removeListeners = function () {\n        this.removeAttachedListeners();\n        this.attachedListeners = [];\n    };\n    TbodyComponent.prototype.attachListeners = function () {\n        var _this = this;\n        this.eachRow(function (row, rowIndex, index) {\n            _this.addEventListener(_this.refs.row[rowIndex], 'click', function (event) { return _this.emit('rowClick', _this.data[rowIndex], rowIndex, index, event); });\n            _this.addEventListener(_this.refs.editRow[rowIndex], 'click', function () { return _this.emit('rowEdit', _this.data[rowIndex], rowIndex, index); });\n            if (!_this.options.readOnly) {\n                _this.addEventListener(_this.refs.deleteRow[rowIndex], 'click', function () { return _this.emit('rowDelete', _this.data[rowIndex], rowIndex, index); });\n            }\n        });\n    };\n    TbodyComponent.prototype.attachComponents = function () {\n        var _this = this;\n        var tbody = this.element;\n        if (tbody) {\n            this.component.components\n                .filter(function (comp) { return comp.show; })\n                .forEach(function (comp, index) {\n                if (comp.attach) {\n                    for (var i = 0; i < tbody.rows.length; i++) {\n                        _this.emit('row:attach', comp, tbody.rows[i].cells[index], i);\n                    }\n                }\n            });\n        }\n    };\n    TbodyComponent.prototype.attach = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                this.attachListeners();\n                this.attachComponents();\n                return [2 /*return*/];\n            });\n        });\n    };\n    TbodyComponent = __decorate([\n        (0, core_1.ArrayComponent)({\n            type: 'tbody',\n            schema: {\n                cellMaxWidth: '',\n                clipCells: false,\n                showEditBtn: true,\n                showDeleteBtn: true,\n                showDeleteAllBtn: false\n            },\n            template: 'tbody'\n        })\n    ], TbodyComponent);\n    return TbodyComponent;\n}(core_1.DataTable));\nexports.TbodyComponent = TbodyComponent;\ncore_1.Components.addComponent(TbodyComponent, 'tbody');\n\n\n//# sourceURL=webpack://FormioGrid/./lib/components/tbody/tbody.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GridTemplates = exports.GridComponents = exports.FormioGrid = void 0;\n__webpack_require__(/*! ./styles.scss */ \"./lib/styles.scss\");\nvar core_1 = __webpack_require__(/*! @formio/core */ \"@formio/core\");\nvar templates_1 = __importDefault(__webpack_require__(/*! ./templates */ \"./lib/templates/index.js\"));\nexports.GridTemplates = templates_1.default;\ncore_1.Template.addTemplates(templates_1.default);\nvar components_1 = __importDefault(__webpack_require__(/*! ./components */ \"./lib/components/index.js\"));\nexports.GridComponents = components_1.default;\nvar FormioGrid = /** @class */ (function () {\n    function FormioGrid() {\n    }\n    FormioGrid.render = function (element, component, options, data) {\n        if (options === void 0) { options = {}; }\n        if (data === void 0) { data = {}; }\n        return __awaiter(this, void 0, void 0, function () {\n            var formio, grid;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!(typeof component === 'string')) return [3 /*break*/, 2];\n                        formio = new core_1.Formio(component);\n                        return [4 /*yield*/, formio.loadForm()];\n                    case 1:\n                        component = _a.sent();\n                        _a.label = 2;\n                    case 2:\n                        component.type = 'grid';\n                        grid = core_1.Components.create(component, options, data);\n                        return [4 /*yield*/, grid.attach(element)];\n                    case 3:\n                        _a.sent();\n                        return [2 /*return*/, grid];\n                }\n            });\n        });\n    };\n    return FormioGrid;\n}());\nexports.FormioGrid = FormioGrid;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/column-menu/html.ejs.js":
/*!*********************************************************!*\
  !*** ./lib/templates/bootstrap/column-menu/html.ejs.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '', __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, ''); }\n    __p += '<div class=\"dropdown\" ref=\"menu\">\\r\\n  <ul class=\"dropdown-menu\" ref=\"dropdown\">\\r\\n    ';\n    if (ctx.options.sortable && ctx.component && ctx.component.sortable) {\n        ;\n        __p += '\\r\\n    <li class=\"dropdown-item\" ref=\"sortAscending\">↑ Sort Ascending</li>\\r\\n    <li class=\"dropdown-item\" ref=\"sortDescending\">↓ Sort Descending</li>\\r\\n    <li ref=\"rootItem\" class=\"dropdown-divider\"></li>\\r\\n    ';\n    }\n    ;\n    __p += '\\r\\n    <li ref=\"rootItem\" class=\"dropdown-item\">\\r\\n      Columns <span class=\"arrow-right\">›</span>\\r\\n      <ul ref=\"nestedDropdown\" class=\"dropdown-menu\">\\r\\n        ';\n    ctx.components.forEach(function (comp) {\n        ;\n        __p += '\\r\\n        <li class=\"dropdown-item\">\\r\\n          <label class=\"form-check form-check-label\">\\r\\n            <input \\r\\n                ref=\"checkbox\"\\r\\n                ' +\n            ((__t = (comp.show ? 'checked' : '')) == null ? '' : __t) +\n            '\\r\\n                ' +\n            ((__t = (ctx.lastColumn && comp.show ? 'disabled' : '')) == null ? '' : __t) +\n            '\\r\\n                type=\"checkbox\"\\r\\n                class=\"form-check-input\">\\r\\n            <span class=\"form-check-label\">\\r\\n              ' +\n            ((__t = (comp.label)) == null ? '' : __t) +\n            '\\r\\n            </span>\\r\\n          </label>\\r\\n        </li>\\r\\n        ';\n    });\n    ;\n    __p += '\\r\\n      </ul>\\r\\n    </li>\\r\\n    ';\n    if (ctx.options.filterable && ctx.component && ctx.component.filterable) {\n        ;\n        __p += '\\r\\n    <li ref=\"rootItem\" class=\"dropdown-divider\"></li>\\r\\n    <li ref=\"rootItem\" class=\"dropdown-item\">\\r\\n      Filter <span class=\"arrow-right\">›</span>\\r\\n      <ul ref=\"nestedDropdown\" class=\"dropdown-menu\">\\r\\n        <form ref=\"filterForm\" class=\"px-3 py-2\">\\r\\n          Show items with value that:\\r\\n          <div class=\"form-group\">\\r\\n            <select ref=\"filterType\" class=\"form-control\">\\r\\n              ';\n        ctx.filterTypes.forEach(function (filterType) {\n            ;\n            __p += '\\r\\n                ';\n            if (!(ctx.hideFilters.includes(ctx.component.key) && (['startsWith', 'contain', 'notContain', 'endsWith', 'matches'].includes(filterType.type)))) {\n                ;\n                __p += '\\r\\n                  <option value=\"' +\n                    ((__t = (filterType.type)) == null ? '' : __t) +\n                    '\">' +\n                    ((__t = (filterType.label)) == null ? '' : __t) +\n                    '</option>\\r\\n                ';\n            }\n            ;\n            __p += '\\r\\n              ';\n        });\n        ;\n        __p += '\\r\\n            </select>\\r\\n          </div>\\r\\n          <div class=\"form-group\">\\r\\n            <input type=\"text\" ref=\"filterInput\" name=\"' +\n            ((__t = (ctx.component && ctx.component.key)) == null ? '' : __t) +\n            '\" class=\"form-control\" placeholder=\"Filter\">\\r\\n          </div>\\r\\n          <div class=\"form-row mx-0\">\\r\\n            <button ref=\"filterButton\" type=\"button\" class=\"btn btn-primary\">Filter</button>\\r\\n            <button ref=\"clearBtn\" type=\"button\" class=\"btn btn-secondary ml-1\">Clear</button>\\r\\n          </div>\\r\\n        </form>\\r\\n      </ul>\\r\\n    </li>\\r\\n    ';\n    }\n    ;\n    __p += '\\r\\n  </ul>\\r\\n</div>\\r\\n';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/column-menu/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/column-menu/index.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap/column-menu/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap/column-menu/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/column-menu/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/grid/html.ejs.js":
/*!**************************************************!*\
  !*** ./lib/templates/bootstrap/grid/html.ejs.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '', __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, ''); }\n    __p += '<div class=\"data-grid-wrapper\">\\r\\n  <div class=\"data-grid\" ' +\n        ((__t = (ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn ? 'style=\"margin-right: 3.5em;\"' : '')) == null ? '' : __t) +\n        '>\\r\\n    <span class=\"menu-container\">\\r\\n      <div class=\"dropdown\" ref=\"menu\"></div>\\r\\n    </span>\\r\\n    <div class=\"responsive-table\">\\r\\n      <div class=\"spinner-wrapper\" ref=\"loader\">\\r\\n        <div class=\"spinner-grow\"></div>\\r\\n      </div>\\r\\n      <table class=\"table' +\n        ((__t = (ctx.classes)) == null ? '' : __t) +\n        ' formio-grid\">\\r\\n        <thead>\\r\\n          <tr>\\r\\n            ';\n    if (!ctx.component.components.length) {\n        ;\n        __p += '\\r\\n              <th>No components have been set up to display in the Data Table. \"Table View\" must be checked for components to render.</th>\\r\\n            ';\n    }\n    ;\n    __p += '\\r\\n            ';\n    ctx.component.components.forEach(function (comp, i) {\n        ;\n        __p += '\\r\\n              ';\n        if (comp.show) {\n            ;\n            __p += '\\r\\n              <th>\\r\\n                <span>' +\n                ((__t = (comp.label || comp.key)) == null ? '' : __t) +\n                '</span>\\r\\n                ';\n            if (ctx.options.sortable && comp.sortable) {\n                ;\n                __p += '\\r\\n                <span class=\"sort-btn ' +\n                    ((__t = ((ctx.component.sort.key === comp.key || ctx.component.sort.key === comp.columnQueryProperty) ? 'sorted' : '')) == null ? '' : __t) +\n                    '\" ref=\"sort\">\\r\\n                  ' +\n                    ((__t = (ctx.component.sort.isAsc ? '↑' : '↓')) == null ? '' : __t) +\n                    '\\r\\n                </span>\\r\\n                ';\n            }\n            ;\n            __p += '\\r\\n                <span class=\"menu\">\\r\\n                  <div class=\"menu-container\">\\r\\n                    <span class=\"menu-btn' +\n                ((__t = ((ctx.component.filters[comp.key] || ctx.component.filters[comp.columnQueryProperty]) ? ' filters-applied' : '')) == null ? '' : __t) +\n                '\" ref=\"menuBtn\">⋮</span>\\r\\n                  </div>\\r\\n                </span>\\r\\n              </th>\\r\\n              ';\n        }\n        ;\n        __p += '\\r\\n            ';\n    });\n    ;\n    __p += '\\r\\n            ';\n    if ((ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) && ctx.data.length) {\n        ;\n        __p += '\\r\\n            <th class=\"formio-grid-ops position-sticky p-0 border-left-0\" style=\"background-color: white; \">\\r\\n              <div class=\"border-left border-right\" style=\"height: 48px; padding: 12px 1px;\">\\r\\n                <span>Actions</span>\\r\\n                ';\n        if (ctx.component.showDeleteAllBtn && ctx.data.length) {\n            ;\n            __p += '\\r\\n                <button class=\"btn p-0 delete-all-btn formio-grid-ops-button ' +\n                ((__t = (ctx.options.readOnly ? 'disabled' : '')) == null ? '' : __t) +\n                '\" ref=\"deleteAll\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\\r\\n                ';\n        }\n        ;\n        __p += '\\r\\n              </div>\\r\\n            </th>\\r\\n            ';\n    }\n    ;\n    __p += '\\r\\n          </tr>\\r\\n        </thead>\\r\\n        <tbody ref=\"tbody\"></tbody>\\r\\n      </table>\\r\\n    </div>\\r\\n    <div class=\"d-flex mt-2\">\\r\\n      <div ref=\"pagination\" class=\"formio-pagination\"></div>\\r\\n      ';\n    if (ctx.component.showAddBtn) {\n        ;\n        __p += '\\r\\n      <div class=\"btn btn-primary formio-new-button ' +\n            ((__t = (ctx.options.readOnly ? 'disabled' : '')) == null ? '' : __t) +\n            '\" ref=\"addRow\">+</div>\\r\\n      ';\n    }\n    ;\n    __p += '\\r\\n    </div>\\r\\n  </div>\\r\\n</div>';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/grid/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/grid/index.js":
/*!***********************************************!*\
  !*** ./lib/templates/bootstrap/grid/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap/grid/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/grid/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tbody = exports.columnMenu = exports.pagination = exports.grid = void 0;\nexports.grid = __importStar(__webpack_require__(/*! ./grid */ \"./lib/templates/bootstrap/grid/index.js\"));\nexports.pagination = __importStar(__webpack_require__(/*! ./pagination */ \"./lib/templates/bootstrap/pagination/index.js\"));\nexports.columnMenu = __importStar(__webpack_require__(/*! ./column-menu */ \"./lib/templates/bootstrap/column-menu/index.js\"));\nexports.tbody = __importStar(__webpack_require__(/*! ./tbody */ \"./lib/templates/bootstrap/tbody/index.js\"));\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/pagination/html.ejs.js":
/*!********************************************************!*\
  !*** ./lib/templates/bootstrap/pagination/html.ejs.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '';\n    __p += '<div class=\"btn-toolbar mb-3 align-items-center\" role=\"toolbar\" aria-label=\"Pagination\" ' +\n        ((__t = (ctx.component.showAddBtn ? 'style=\"width: 95%;\"' : 'style=\"width: 100%;\"')) == null ? '' : __t) +\n        '>\\n  <button ref=\"firstPage\" type=\"button\" class=\"btn btn-outline-secondary mr-1\">\\n    <span aria-hidden=\"true\">&laquo;</span>\\n  </button>\\n  <button ref=\"prevPage\" type=\"button\" class=\"btn btn-outline-secondary mr-1\">\\n    <span aria-hidden=\"true\">&lsaquo;</span>\\n  </button>\\n  <div class=\"input-group mr-1\">\\n    <div class=\"input-group-prepend\">\\n      <span class=\"input-group-text\">Page</span>\\n    </div>\\n    <input ref=\"pageNum\" type=\"number\" class=\"form-control\" value=\"1\" style=\"width: 5em;\">\\n    <div class=\"input-group-append\">\\n      <span class=\"input-group-text\">of&nbsp;<span ref=\"pageCount\">' +\n        ((__t = (ctx.pages)) == null ? '' : __t) +\n        '</span></span>\\n    </div>\\n  </div>\\n  <button ref=\"nextPage\" type=\"button\" class=\"btn btn-outline-secondary mr-1\">\\n    <span aria-hidden=\"true\">&rsaquo;</span>\\n  </button>\\n  <button ref=\"lastPage\" type=\"button\" class=\"btn btn-outline-secondary mr-5\">\\n    <span aria-hidden=\"true\">&raquo;</span>\\n  </button>\\n  <span ref=\"itemsCount\" class=\"ml-auto p-1\">\\n    ' +\n        ((__t = (ctx.itemsCount)) == null ? '' : __t) +\n        '\\n  </span>\\n  <div class=\"input-group mr-1 ml-2\">\\n    <select ref=\"itemsPerPage\" class=\"form-control\">\\n      <option value=\"5\">5</option>\\n      <option value=\"10\">10</option>\\n      <option value=\"25\">25</option>\\n      <option value=\"50\">50</option>\\n      <option value=\"100\">100</option>\\n      <option value=\"-1\">All</option>\\n    </select>\\n    <div class=\"input-group-append\">\\n      <span class=\"input-group-text\">items per page</span>\\n    </div>\\n  </div>\\n</div>\\n';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/pagination/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/pagination/index.js":
/*!*****************************************************!*\
  !*** ./lib/templates/bootstrap/pagination/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap/pagination/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/pagination/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/tbody/html.ejs.js":
/*!***************************************************!*\
  !*** ./lib/templates/bootstrap/tbody/html.ejs.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '', __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, ''); }\n    __p += '<table>\\n<tbody ref=\"tbody\">\\n  ';\n    ctx.eachRow(function (row) {\n        ;\n        __p += '\\n  <tr ref=\"row\">\\n    ';\n        row.forEach(function (rowComp) {\n            ;\n            __p += '\\n      ';\n            if (rowComp.component.show) {\n                ;\n                __p += '\\n      <td \\n        ' +\n                    ((__t = (ctx.component.cellMaxWidth ? 'style=\"max-width:' + ctx.component.cellMaxWidth + ';\"' : '')) == null ? '' : __t) +\n                    '\\n        ' +\n                    ((__t = (ctx.component.clipCells ? 'class=\"clip\"' : '')) == null ? '' : __t) +\n                    '>\\n          ' +\n                    ((__t = (ctx.instance.hook('format', rowComp.component.key, rowComp.dataValue))) == null ? '' : __t) +\n                    '\\n      </td>\\n      ';\n            }\n            ;\n            __p += '\\n    ';\n        });\n        ;\n        __p += '\\n    ';\n        if (ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) {\n            ;\n            __p += '\\n    <th class=\"formio-grid-ops formio-actions-col position-sticky p-0 border-0\" style=\"height: inherit;\">\\n      <div class=\"row-menu-btn border-left border-right\" style=\"height: 100%;\">\\n        <div class=\"dropdown\" ref=\"menu\">\\n          <ul class=\"dropdown-menu p-0\" ref=\"dropdown\">\\n            ';\n            if (ctx.component.showEditBtn) {\n                ;\n                __p += '\\n            <li class=\"dropdown-item\" ref=\"editRow\">\\n              <span class=\"btn formio-grid-ops-button\" style=\"padding: 2px; font-size: 10px; line-height: 1.2em; width: 18px;\">&#9999;</span>\\n              Edit row\\n            </li>\\n            ';\n            }\n            ;\n            __p += '\\n            ';\n            if (ctx.component.showDeleteBtn) {\n                ;\n                __p += '\\n            <li class=\"dropdown-item ' +\n                    ((__t = (ctx.options.readOnly ? 'disabled' : '')) == null ? '' : __t) +\n                    '\" ref=\"deleteRow\">\\n              <span class=\"btn formio-grid-ops-button\" style=\"padding: 2px; font-size: 14px; line-height: 1.2em; width: 18px;\">\\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\\n              </span>\\n              Delete row\\n            </li>\\n            ';\n            }\n            ;\n            __p += '\\n          </ul>\\n        </div>\\n        ⋮\\n      </div>\\n    </th>\\n    ';\n        }\n        ;\n        __p += '\\n  </tr>\\n  ';\n    });\n    ;\n    __p += '\\n</tbody>\\n</table>';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/tbody/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/tbody/index.js":
/*!************************************************!*\
  !*** ./lib/templates/bootstrap/tbody/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap/tbody/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap/tbody/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/column-menu/html.ejs.js":
/*!**********************************************************!*\
  !*** ./lib/templates/bootstrap3/column-menu/html.ejs.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '', __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, ''); }\n    __p += '<div ref=\"menu\">\\r\\n  <ul class=\"dropdown-menu checkbox-menu allow-focus\" ref=\"dropdown\">\\r\\n    ';\n    if (ctx.options.sortable && ctx.component && ctx.component.sortable) {\n        ;\n        __p += '\\r\\n    <li class=\"dropdown-item\" ref=\"sortAscending\">↑ Sort Ascending</li>\\r\\n    <li class=\"dropdown-item\" ref=\"sortDescending\">↓ Sort Descending</li>\\r\\n    <li ref=\"rootItem\" role=\"separator\" class=\"divider\"></li>\\r\\n    ';\n    }\n    ;\n    __p += '\\r\\n    <li ref=\"rootItem\" class=\"dropdown-item\">\\r\\n      Columns <span class=\"arrow-right\">›</span>\\r\\n      <ul ref=\"nestedDropdown\" class=\"dropdown-menu checkbox-menu allow-focus\">\\r\\n        ';\n    ctx.components.forEach(function (comp) {\n        ;\n        __p += '\\r\\n        <li class=\"dropdown-item\">\\r\\n          <label class=\"radio-btn\">\\r\\n            <input \\r\\n                ref=\"checkbox\"\\r\\n                ' +\n            ((__t = (comp.show ? 'checked' : '')) == null ? '' : __t) +\n            '\\r\\n                ' +\n            ((__t = (ctx.lastColumn && comp.show ? 'disabled' : '')) == null ? '' : __t) +\n            '\\r\\n                type=\"checkbox\"\\r\\n                class=\"form-check-input\">\\r\\n            <span class=\"form-check-label\">\\r\\n              ' +\n            ((__t = (comp.label)) == null ? '' : __t) +\n            '\\r\\n            </span>\\r\\n          </label>\\r\\n        </li>\\r\\n        ';\n    });\n    ;\n    __p += '\\r\\n      </ul>\\r\\n    </li>\\r\\n    ';\n    if (ctx.options.filterable && ctx.component && ctx.component.filterable) {\n        ;\n        __p += '\\r\\n    <li ref=\"rootItem\" role=\"separator\" class=\"divider\"></li>\\r\\n    <li ref=\"rootItem\" class=\"dropdown-item\">\\r\\n      Filter <span class=\"arrow-right\">›</span>\\r\\n      <ul ref=\"nestedDropdown\" class=\"dropdown-menu\">\\r\\n        <form ref=\"filterForm\" class=\"px-3 py-2\">\\r\\n          Show items with value that:\\r\\n          <div class=\"form-group\">\\r\\n            <select ref=\"filterType\" class=\"form-control\">\\r\\n              ';\n        ctx.filterTypes.forEach(function (filterType) {\n            ;\n            __p += '\\r\\n                ';\n            if (!(ctx.hideFilters.includes(ctx.component.key) && (['startsWith', 'contain', 'notContain', 'endsWith', 'matches'].includes(filterType.type)))) {\n                ;\n                __p += '\\r\\n                  <option value=\"' +\n                    ((__t = (filterType.type)) == null ? '' : __t) +\n                    '\">' +\n                    ((__t = (filterType.label)) == null ? '' : __t) +\n                    '</option>\\r\\n                ';\n            }\n            ;\n            __p += '\\r\\n              ';\n        });\n        ;\n        __p += '\\r\\n            </select>\\r\\n          </div>\\r\\n          <div class=\"form-group\">\\r\\n            <input type=\"text\" ref=\"filterInput\" name=\"' +\n            ((__t = (ctx.component && ctx.component.key)) == null ? '' : __t) +\n            '\" class=\"form-control\" placeholder=\"Filter\">\\r\\n          </div>\\r\\n          <div class=\"form-row btn-toolbar\">\\r\\n            <button ref=\"filterButton\" type=\"button\" class=\"btn btn-primary\">Filter</button>\\r\\n            <button ref=\"clearBtn\" type=\"button\" class=\"btn btn-secondary\">Clear</button>\\r\\n          </div>\\r\\n        </form>\\r\\n      </ul>\\r\\n    </li>\\r\\n    ';\n    }\n    ;\n    __p += '\\r\\n  </ul>\\r\\n</div>\\r\\n';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/column-menu/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/column-menu/index.js":
/*!*******************************************************!*\
  !*** ./lib/templates/bootstrap3/column-menu/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap3/column-menu/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/column-menu/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/grid/html.ejs.js":
/*!***************************************************!*\
  !*** ./lib/templates/bootstrap3/grid/html.ejs.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '', __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, ''); }\n    __p += '<div class=\"data-grid-wrapper\">\\n  <div class=\"data-grid\" ' +\n        ((__t = (ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn ? 'style=\"margin-right: 3.5em;\"' : '')) == null ? '' : __t) +\n        '>\\n    <span class=\"menu-container\">\\n      <div class=\"dropdown\" ref=\"menu\"></div>\\n    </span>\\n    <div class=\"responsive-table\">\\n      <div class=\"spinner-wrapper\" ref=\"loader\">\\n        <div class=\"spinner-grow\"></div>\\n      </div>\\n      <table class=\"table' +\n        ((__t = (ctx.classes)) == null ? '' : __t) +\n        ' formio-grid\">\\n        <thead>\\n          <tr>\\n            ';\n    if (!ctx.component.components.length) {\n        ;\n        __p += '\\n              <th>No components have been set up to display in the Data Table. \"Table View\" must be checked for components to render.</th>\\n            ';\n    }\n    ;\n    __p += '\\n            ';\n    ctx.component.components.forEach(function (comp, i) {\n        ;\n        __p += '\\n              ';\n        if (comp.show) {\n            ;\n            __p += '\\n              <th>\\n                <span>' +\n                ((__t = (comp.label || comp.key)) == null ? '' : __t) +\n                '</span>\\n                ';\n            if (ctx.options.sortable && comp.sortable) {\n                ;\n                __p += '\\n                <span class=\"sort-btn ' +\n                    ((__t = (ctx.component.sort.key === comp.key ? 'sorted' : '')) == null ? '' : __t) +\n                    '\" ref=\"sort\">\\n                  ' +\n                    ((__t = (ctx.component.sort.isAsc ? '↑' : '↓')) == null ? '' : __t) +\n                    '\\n                </span>\\n                ';\n            }\n            ;\n            __p += '\\n                <span class=\"menu\">\\n                  <div class=\"menu-container\">\\n                    <span class=\"menu-btn' +\n                ((__t = ((ctx.component.filters[comp.key] || ctx.component.filters[comp.columnQueryProperty]) ? ' filters-applied' : '')) == null ? '' : __t) +\n                '\" ref=\"menuBtn\">⋮</span>\\n                  </div>\\n                </span>\\n              </th>\\n              ';\n        }\n        ;\n        __p += '\\n            ';\n    });\n    ;\n    __p += '\\n            ';\n    if ((ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) && ctx.data.length) {\n        ;\n        __p += '\\n            <th class=\"formio-grid-ops border-left-0\" style=\"background-color: white; position: sticky; padding: 0;\">\\n              <div class=\"formio-actions-header\">\\n                <span>Actions</span>\\n                ';\n        if (ctx.component.showDeleteAllBtn && ctx.data.length) {\n            ;\n            __p += '\\n                <button class=\"btn btn p-0 delete-all-btn delete-all-btn formio-grid-ops-button ' +\n                ((__t = (ctx.options.readOnly ? 'disabled' : '')) == null ? '' : __t) +\n                '\" ref=\"deleteAll\" style=\"padding: 0;\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\\n                ';\n        }\n        ;\n        __p += '\\n              </div>\\n            </th>\\n            ';\n    }\n    ;\n    __p += '\\n          </tr>\\n        </thead>\\n        <tbody ref=\"tbody\"></tbody>\\n      </table>\\n    </div>\\n    <div style=\"display: flex; margin-top: 10px;\">\\n      <div ref=\"pagination\" class=\"formio-pagination\"></div>\\n      ';\n    if (ctx.component.showAddBtn) {\n        ;\n        __p += '\\n      <div class=\"btn btn-primary formio-new-button ' +\n            ((__t = (ctx.options.readOnly ? 'disabled' : '')) == null ? '' : __t) +\n            '\" ref=\"addRow\">+</div>\\n      ';\n    }\n    ;\n    __p += '\\n    </div>\\n  </div>\\n</div>\\n';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/grid/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/grid/index.js":
/*!************************************************!*\
  !*** ./lib/templates/bootstrap3/grid/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap3/grid/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/grid/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/index.js":
/*!*******************************************!*\
  !*** ./lib/templates/bootstrap3/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tbody = exports.columnMenu = exports.pagination = exports.grid = void 0;\nexports.grid = __importStar(__webpack_require__(/*! ./grid */ \"./lib/templates/bootstrap3/grid/index.js\"));\nexports.pagination = __importStar(__webpack_require__(/*! ./pagination */ \"./lib/templates/bootstrap3/pagination/index.js\"));\nexports.columnMenu = __importStar(__webpack_require__(/*! ./column-menu */ \"./lib/templates/bootstrap3/column-menu/index.js\"));\nexports.tbody = __importStar(__webpack_require__(/*! ./tbody */ \"./lib/templates/bootstrap3/tbody/index.js\"));\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/pagination/html.ejs.js":
/*!*********************************************************!*\
  !*** ./lib/templates/bootstrap3/pagination/html.ejs.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '';\n    __p += '<form class=\"form-inline\" ' +\n        ((__t = (ctx.component.showAddBtn ? 'style=\"width: 95%;\"' : 'style=\"width: 100%;\"')) == null ? '' : __t) +\n        '>\\n  <div class=\"btn-group\" role=\"group\">\\n    <button ref=\"firstPage\" type=\"button\" class=\"btn btn-primary\">\\n      <span aria-hidden=\"true\">&laquo;</span>\\n    </button>\\n  </div>\\n  <div class=\"btn-group\" role=\"group\">\\n    <button ref=\"prevPage\" type=\"button\" class=\"btn btn-primary\">\\n      <span aria-hidden=\"true\">&lsaquo;</span>\\n    </button>\\n  </div>\\n  <div class=\"btn-group\" role=\"group\">\\n    <div class=\"input-group\">\\n      <div class=\"input-group-addon\">\\n        <span class=\"input-group-text\">Page</span>\\n      </div>\\n      <input ref=\"pageNum\" type=\"number\" class=\"form-control\" value=\"1\" style=\"width: 5em;\">\\n      <div class=\"input-group-addon\">\\n      <span class=\"input-group-text\">of&nbsp;<span ref=\"pageCount\">' +\n        ((__t = (ctx.pages)) == null ? '' : __t) +\n        '</span></span>\\n      </div>\\n    </div>\\n  </div>\\n  <div class=\"btn-group\" role=\"group\">\\n    <button ref=\"nextPage\" type=\"button\" class=\"btn btn-primary\">\\n      <span aria-hidden=\"true\">&rsaquo;</span>\\n    </button>\\n  </div>\\n  <div class=\"btn-group\" role=\"group\" style=\"margin-right: 3rem;\">\\n    <button ref=\"lastPage\" type=\"button\" class=\"btn btn-primary\">\\n      <span aria-hidden=\"true\">&raquo;</span>\\n    </button>\\n  </div>\\n  <div class=\"btn-group pull-right\" role=\"group\" style=\"margin-left: 15px;\">\\n    <div class=\"input-group\">\\n      <select ref=\"itemsPerPage\" class=\"form-control\">\\n        <option value=\"5\">5</option>\\n        <option value=\"10\">10</option>\\n        <option value=\"25\">25</option>\\n        <option value=\"50\">50</option>\\n        <option value=\"100\">100</option>\\n        <option value=\"-1\">All</option>\\n      </select>\\n      <div class=\"input-group-addon\">\\n        <span class=\"input-group-text\">items per page</span>\\n      </div>\\n    </div>\\n  </div>\\n  <div ref=\"itemsCount\" class=\"input-group pull-right\" role=\"group\" style=\"line-height: 2.5;\">\\n    ' +\n        ((__t = (ctx.itemsCount)) == null ? '' : __t) +\n        ' \\n  </div>\\n</form>\\n';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/pagination/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/pagination/index.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap3/pagination/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap3/pagination/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/pagination/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/tbody/html.ejs.js":
/*!****************************************************!*\
  !*** ./lib/templates/bootstrap3/tbody/html.ejs.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = function (ctx) {\n    var __t, __p = '', __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, ''); }\n    __p += '<table>\\n<tbody ref=\"tbody\">\\n  ';\n    ctx.eachRow(function (row) {\n        ;\n        __p += '\\n  <tr ref=\"row\">\\n    ';\n        row.forEach(function (rowComp) {\n            ;\n            __p += '\\n      ';\n            if (rowComp.component.show) {\n                ;\n                __p += '\\n      <td \\n        ' +\n                    ((__t = (ctx.component.cellMaxWidth ? 'style=\"max-width:' + ctx.component.cellMaxWidth + ';\"' : '')) == null ? '' : __t) +\n                    '\\n        ' +\n                    ((__t = (ctx.component.clipCells ? 'class=\"clip\"' : '')) == null ? '' : __t) +\n                    '>\\n          ' +\n                    ((__t = (ctx.instance.hook('format', rowComp.component.key, rowComp.dataValue))) == null ? '' : __t) +\n                    '\\n      </td>\\n      ';\n            }\n            ;\n            __p += '\\n    ';\n        });\n        ;\n        __p += '\\n    ';\n        if (ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) {\n            ;\n            __p += '\\n    <th class=\"formio-grid-ops formio-actions-col-b3\" style=\"border: none; padding: 0; position: sticky; height: inherit;\">\\n      <div class=\"row-menu-btn\" style=\"height: 100%; border-left: 1px solid #ccc; border-right: 1px solid #ccc;\">\\n        <div class=\"dropdown\" ref=\"menu\">\\n          <ul class=\"dropdown-menu checkbox-menu allow-focus\" ref=\"dropdown\">\\n            ';\n            if (ctx.component.showEditBtn) {\n                ;\n                __p += '\\n            <li class=\"dropdown-item\" ref=\"editRow\">\\n              <span class=\"btn btn-xxs formio-grid-ops-button\">&#9999;</span>\\n              Edit row\\n            </li>\\n            ';\n            }\n            ;\n            __p += '\\n            ';\n            if (ctx.component.showDeleteBtn) {\n                ;\n                __p += '\\n            <li class=\"dropdown-item ' +\n                    ((__t = (ctx.options.readOnly ? 'disabled' : '')) == null ? '' : __t) +\n                    '\" ref=\"deleteRow\">\\n              <span class=\"btn btn-xxs formio-grid-ops-button\">\\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\\n              </span>\\n              Delete row\\n            </li>\\n            ';\n            }\n            ;\n            __p += '\\n          </ul>\\n        </div>\\n        ⋮\\n      </div>\\n    </th>\\n    ';\n        }\n        ;\n        __p += '\\n  </tr>\\n  ';\n    });\n    ;\n    __p += '\\n</tbody>\\n</table>';\n    return __p;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/tbody/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap3/tbody/index.js":
/*!*************************************************!*\
  !*** ./lib/templates/bootstrap3/tbody/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nvar html_ejs_js_1 = __importDefault(__webpack_require__(/*! ./html.ejs.js */ \"./lib/templates/bootstrap3/tbody/html.ejs.js\"));\nexports.html = html_ejs_js_1.default;\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/bootstrap3/tbody/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar bootstrap = __importStar(__webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\"));\nvar bootstrap3 = __importStar(__webpack_require__(/*! ./bootstrap3 */ \"./lib/templates/bootstrap3/index.js\"));\nexports[\"default\"] = {\n    bootstrap: bootstrap,\n    bootstrap3: bootstrap3\n};\n\n\n//# sourceURL=webpack://FormioGrid/./lib/templates/index.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/array.js":
/*!**************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/array.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.intersection = exports.map = exports.head = exports.last = exports.filter = exports.findEach = exports.matches = exports.findIndex = exports.find = exports.each = exports.dropRight = exports.drop = exports.difference = exports.concat = exports.compact = exports.chunk = void 0;\nvar lang_1 = __webpack_require__(/*! ./lang */ \"./node_modules/@formio/lodash/lib/lang.js\");\nvar object_1 = __webpack_require__(/*! ./object */ \"./node_modules/@formio/lodash/lib/object.js\");\n// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk\nfunction chunk(input, size) {\n    return input.reduce(function (arr, item, idx) {\n        return idx % size === 0\n            ? __spreadArray(__spreadArray([], arr, true), [[item]], false) : __spreadArray(__spreadArray([], arr.slice(0, -1), true), [__spreadArray(__spreadArray([], arr.slice(-1)[0], true), [item], false)], false);\n    }, []);\n}\nexports.chunk = chunk;\n;\n// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_compact\nfunction compact(input) {\n    return input.filter(Boolean);\n}\nexports.compact = compact;\n/**\n * @link https://lodash.com/docs/4.17.15#concat\n * @param input\n * @param args\n * @returns\n */\nfunction concat(input) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    return input.concat.apply(input, args);\n}\nexports.concat = concat;\n// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference\nfunction difference() {\n    var arrays = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        arrays[_i] = arguments[_i];\n    }\n    return arrays.reduce(function (a, b) {\n        return a.filter(function (value) {\n            return !b.includes(value);\n        });\n    });\n}\nexports.difference = difference;\n// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_drop\nfunction drop(arr, index) {\n    if (index === void 0) { index = 1; }\n    return (index > 0) ? arr.slice(index) : arr;\n}\nexports.drop = drop;\n// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_dropright\nfunction dropRight(arr, index) {\n    if (index === void 0) { index = 1; }\n    return (index > 0) ? arr.slice(0, -index) : arr;\n}\nexports.dropRight = dropRight;\n/**\n * Iterate through a collection or array.\n * @param collection\n * @param _each\n */\nfunction each(collection, _each) {\n    var isArray = Array.isArray(collection);\n    for (var i in collection) {\n        if (collection.hasOwnProperty(i)) {\n            if (_each(collection[i], isArray ? Number(i) : i) === true) {\n                break;\n            }\n            ;\n        }\n    }\n}\nexports.each = each;\n/**\n * Perform a find operation.\n * @param arr\n * @param query\n */\nfunction find(arr, query, findIndex) {\n    if (findIndex === void 0) { findIndex = false; }\n    if (!arr) {\n        return undefined;\n    }\n    if (Array.isArray(arr) && typeof query === 'function') {\n        return findIndex ? arr.findIndex(query) : arr.find(query);\n    }\n    var found = undefined;\n    var foundIndex = 0;\n    findEach(arr, query, function (item, index) {\n        found = item;\n        foundIndex = index;\n        return true;\n    });\n    return findIndex ? foundIndex : found;\n}\nexports.find = find;\n/**\n * Find an index.\n *\n * @param arr\n * @param query\n * @returns\n */\nfunction findIndex(arr, query) {\n    return find(arr, query, true);\n}\nexports.findIndex = findIndex;\n/**\n * Returns a function to perform matches.\n * @param query\n * @returns\n */\nfunction matches(query) {\n    var keys = [];\n    var compare = {};\n    if (typeof query === 'string') {\n        keys = [query];\n        compare[query] = true;\n    }\n    else {\n        keys = Object.keys(query);\n        compare = query;\n    }\n    return function (comp) {\n        return (0, lang_1.isEqual)((0, object_1.pick)(comp, keys), compare);\n    };\n}\nexports.matches = matches;\n/**\n * Perform a find operation on each item in an array.\n * @param arr\n * @param query\n * @param fn\n */\nfunction findEach(arr, query, fn) {\n    each(arr, function (item, index) {\n        if (matches(query)(item)) {\n            if (fn(item, index) === true) {\n                return true;\n            }\n        }\n    });\n}\nexports.findEach = findEach;\n/**\n * Perform a filter operation.\n * @param arr\n * @param fn\n */\nfunction filter(arr, fn) {\n    if (!arr) {\n        return [];\n    }\n    if (!fn) {\n        fn = function (val) { return !!val; };\n    }\n    if (Array.isArray(arr) && typeof fn === 'function') {\n        return arr.filter(fn);\n    }\n    var found = [];\n    findEach(arr, fn, function (item, index) {\n        found.push(item);\n        if (Array.isArray(item)) {\n            arr.splice(index, 1);\n        }\n        else {\n            delete arr[index];\n        }\n    });\n    return found;\n}\nexports.filter = filter;\n/**\n * Get the last item in an array.\n * @param arr\n */\nfunction last(arr) {\n    return arr[arr.length - 1];\n}\nexports.last = last;\n/**\n * https://lodash.com/docs/4.17.15#head\n * @param arr\n * @returns\n */\nfunction head(arr) {\n    return arr[0];\n}\nexports.head = head;\n/**\n * https://lodash.com/docs/4.17.15#map\n * @param arr\n * @param fn\n * @returns\n */\nfunction map(arr, fn) {\n    return arr.map(fn);\n}\nexports.map = map;\n/**\n * Get the intersection of two objects.\n * @param a\n * @param b\n */\nfunction intersection(a, b) {\n    return a.filter(function (value) { return b.includes(value); });\n}\nexports.intersection = intersection;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/array.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/function.js":
/*!*****************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/function.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.debounce = void 0;\n/**\n * Debounc the call of a function for a given amount of time.\n *\n * @param func\n * @param wait\n * @returns\n */\nfunction debounce(func, wait) {\n    if (wait === void 0) { wait = 100; }\n    var timeout;\n    return function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        if (timeout) {\n            clearTimeout(timeout);\n        }\n        timeout = setTimeout(function () {\n            timeout = null;\n            func.apply(void 0, args);\n        }, wait);\n    };\n}\nexports.debounce = debounce;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/function.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.chain = void 0;\nvar ArrayFunctions = __importStar(__webpack_require__(/*! ./array */ \"./node_modules/@formio/lodash/lib/array.js\"));\nvar Chainable = /** @class */ (function () {\n    function Chainable(val) {\n        this.chain = [];\n        this.currentValue = [];\n        this.currentValue = val;\n    }\n    Chainable.prototype.value = function () {\n        return this.chain.reduce(function (current, func) {\n            var _a;\n            return (_a = ArrayFunctions)[func.method].apply(_a, __spreadArray([current], func.args, false));\n        }, this.currentValue);\n    };\n    return Chainable;\n}());\nvar _loop_1 = function (method) {\n    if (ArrayFunctions.hasOwnProperty(method)) {\n        Chainable.prototype[method] = function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            this.chain.push({ method: method, args: args });\n            return this;\n        };\n    }\n};\nfor (var method in ArrayFunctions) {\n    _loop_1(method);\n}\n/**\n * Create a chainable array of methods.\n * @param val\n * @returns\n */\nfunction chain(val) {\n    return new Chainable(val);\n}\nexports.chain = chain;\nexports[\"default\"] = chain;\n__exportStar(__webpack_require__(/*! ./array */ \"./node_modules/@formio/lodash/lib/array.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function */ \"./node_modules/@formio/lodash/lib/function.js\"), exports);\n__exportStar(__webpack_require__(/*! ./lang */ \"./node_modules/@formio/lodash/lib/lang.js\"), exports);\n__exportStar(__webpack_require__(/*! ./math */ \"./node_modules/@formio/lodash/lib/math.js\"), exports);\n__exportStar(__webpack_require__(/*! ./object */ \"./node_modules/@formio/lodash/lib/object.js\"), exports);\n__exportStar(__webpack_require__(/*! ./string */ \"./node_modules/@formio/lodash/lib/string.js\"), exports);\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/index.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/lang.js":
/*!*************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/lang.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isRegExp = exports.isBoolean = exports.isNumber = exports.isPlainObject = exports.isObject = exports.isObjectLike = exports.isArray = exports.isNull = exports.isNil = exports.isNaN = exports.isInteger = exports.isEmpty = exports.isString = exports.isEqual = exports.noop = void 0;\nvar array_1 = __webpack_require__(/*! ./array */ \"./node_modules/@formio/lodash/lib/array.js\");\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction getTag(value) {\n    if (value == null) {\n        return value === undefined ? '[object Undefined]' : '[object Null]';\n    }\n    return Object.prototype.toString.call(value);\n}\n/**\n * A no-operation function.\n */\nfunction noop() {\n    return;\n}\nexports.noop = noop;\n;\n/**\n * Determines equality of a value or complex object.\n * @param a\n * @param b\n */\nfunction isEqual(a, b) {\n    var equal = false;\n    if (a === b) {\n        return true;\n    }\n    if (a && b && (Array.isArray(a) || isObject(a))) {\n        equal = true;\n        (0, array_1.each)(a, function (val, key) {\n            if ((Array.isArray(val) || isObject(val)) && !isEqual(b[key], val)) {\n                equal = false;\n                return true;\n            }\n            if (b[key] !== val) {\n                equal = false;\n                return true;\n            }\n        });\n    }\n    return equal;\n}\nexports.isEqual = isEqual;\nfunction isString(val) {\n    return typeof val === 'string';\n}\nexports.isString = isString;\n// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isempty\nfunction isEmpty(obj) {\n    return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;\n}\nexports.isEmpty = isEmpty;\nfunction isInteger(val) {\n    return Number.isInteger(val);\n}\nexports.isInteger = isInteger;\nfunction isNaN(val) {\n    return Number.isNaN(val);\n}\nexports.isNaN = isNaN;\nfunction isNil(val) {\n    return val == null;\n}\nexports.isNil = isNil;\nfunction isNull(val) {\n    return val === null;\n}\nexports.isNull = isNull;\nfunction isArray(val) {\n    return Array.isArray(val);\n}\nexports.isArray = isArray;\nfunction isObjectLike(val) {\n    return typeof val === 'object' && (val !== null);\n}\nexports.isObjectLike = isObjectLike;\nfunction isObject(val) {\n    var type = typeof val;\n    return val != null && (type === 'object' || type === 'function');\n}\nexports.isObject = isObject;\nfunction isPlainObject(value) {\n    if (!isObjectLike(value) || getTag(value) != '[object Object]') {\n        return false;\n    }\n    if (Object.getPrototypeOf(value) === null) {\n        return true;\n    }\n    var proto = value;\n    while (Object.getPrototypeOf(proto) !== null) {\n        proto = Object.getPrototypeOf(proto);\n    }\n    return Object.getPrototypeOf(value) === proto;\n}\nexports.isPlainObject = isPlainObject;\nfunction isNumber(value) {\n    return typeof value === 'number' || (isObjectLike(value) && getTag(value) == '[object Number]');\n}\nexports.isNumber = isNumber;\nfunction isBoolean(value) {\n    return value === true || value === false || (isObjectLike(value) && getTag(value) == '[object Boolean]');\n}\nexports.isBoolean = isBoolean;\nfunction isRegExp(value) {\n    return isObjectLike(value) && getTag(value) == '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/lang.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/math.js":
/*!*************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/math.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sumBy = exports.sum = exports.mod = exports.subtract = exports.round = exports.multiply = exports.minBy = exports.min = exports.meanBy = exports.mean = exports.maxBy = exports.max = exports.floor = exports.divide = exports.ceil = exports.add = void 0;\nvar lang_1 = __webpack_require__(/*! ./lang */ \"./node_modules/@formio/lodash/lib/lang.js\");\nvar object_1 = __webpack_require__(/*! ./object */ \"./node_modules/@formio/lodash/lib/object.js\");\nfunction mathOp(a, op, precision) {\n    if (precision === void 0) { precision = 0; }\n    if (!precision) {\n        return op(a);\n    }\n    precision = Math.pow(10, precision);\n    return op(a * precision) / precision;\n}\nfunction compareBy(arr, fn, op) {\n    var first = arr[0];\n    if (arr.length <= 1) {\n        return first;\n    }\n    var fnString = (0, lang_1.isString)(fn);\n    return arr.slice(1).reduce(function (current, next) {\n        var currentValue = fnString ? (0, object_1.get)(current, fn) : fn(current);\n        var nextValue = fnString ? (0, object_1.get)(next, fn) : fn(next);\n        var result = op(currentValue, nextValue);\n        return (result === nextValue) ? next : current;\n    }, first);\n}\nfunction valueBy(arr, fn, op) {\n    var first = arr[0];\n    if (arr.length <= 1) {\n        return first;\n    }\n    var fnString = (0, lang_1.isString)(fn);\n    return arr.slice(1).reduce(function (current, next) { return op(current, fnString ? (0, object_1.get)(next, fn) : fn(next)); }, fnString ? (0, object_1.get)(first, fn) : fn(first));\n}\n/**\n * @link https://lodash.com/docs/4.17.15#add\n * @param augend\n * @param addend\n * @returns\n */\nfunction add(augend, addend) {\n    return augend + addend;\n}\nexports.add = add;\n/**\n * @link https://lodash.com/docs/4.17.15#ceil\n * @param num\n * @param precision\n * @returns\n */\nfunction ceil(num, precision) {\n    if (precision === void 0) { precision = 0; }\n    return mathOp(num, Math.ceil, precision);\n}\nexports.ceil = ceil;\n/**\n * https://lodash.com/docs/4.17.15#divide\n * @param dividend\n * @param divisor\n * @returns\n */\nfunction divide(dividend, divisor) {\n    return dividend / divisor;\n}\nexports.divide = divide;\n/**\n * @link https://lodash.com/docs/4.17.15#floor\n * @param num\n * @param precision\n * @returns\n */\nfunction floor(num, precision) {\n    if (precision === void 0) { precision = 0; }\n    return mathOp(num, Math.floor, precision);\n}\nexports.floor = floor;\n/**\n * @link https://lodash.com/docs/4.17.15#max\n * @param arr\n * @returns\n */\nfunction max(arr) {\n    return Math.max.apply(Math, arr);\n}\nexports.max = max;\n/**\n * @link https://lodash.com/docs/4.17.15#maxBy\n */\nfunction maxBy(arr, fn) {\n    return compareBy(arr, fn, Math.max);\n}\nexports.maxBy = maxBy;\n/**\n * @link https://lodash.com/docs/4.17.15#mean\n * @param arr\n * @returns\n */\nfunction mean(arr) {\n    return sum(arr) / arr.length;\n}\nexports.mean = mean;\n/**\n * @link https://lodash.com/docs/4.17.15#meanBy\n * @param arr\n * @param fn\n * @returns\n */\nfunction meanBy(arr, fn) {\n    return sumBy(arr, fn) / arr.length;\n}\nexports.meanBy = meanBy;\n/**\n * @link https://lodash.com/docs/4.17.15#min\n * @param arr\n * @returns\n */\nfunction min(arr) {\n    return Math.min.apply(Math, arr);\n}\nexports.min = min;\n/**\n * @link https://lodash.com/docs/4.17.15#minBy\n * @param arr\n * @param fn\n * @returns\n */\nfunction minBy(arr, fn) {\n    return compareBy(arr, fn, Math.min);\n}\nexports.minBy = minBy;\n/**\n * @link https://lodash.com/docs/4.17.15#multiply\n * @param multiplier\n * @param multiplicand\n * @returns\n */\nfunction multiply(multiplier, multiplicand) {\n    return multiplier * multiplicand;\n}\nexports.multiply = multiply;\n/**\n * @link https://lodash.com/docs/4.17.15#round\n * @param num\n * @param precision\n * @returns\n */\nfunction round(num, precision) {\n    if (precision === void 0) { precision = 0; }\n    return mathOp(num, Math.round, precision);\n}\nexports.round = round;\n/**\n * @link https://lodash.com/docs/4.17.15#subtract\n * @param a\n * @param b\n * @returns\n */\nfunction subtract(minuend, subtrahend) {\n    return minuend - subtrahend;\n}\nexports.subtract = subtract;\n/**\n * Perform a modulus operation between two numbers.\n * @param a\n * @param b\n * @returns\n */\nfunction mod(a, b) {\n    return a % b;\n}\nexports.mod = mod;\n/**\n * @link https://lodash.com/docs/4.17.15#sum\n * @param arr\n * @returns\n */\nfunction sum(arr) {\n    return arr.reduce(add, 0);\n}\nexports.sum = sum;\n/**\n * @link https://lodash.com/docs/4.17.15#sumBy\n * @param arr\n * @param fn\n * @returns\n */\nfunction sumBy(arr, fn) {\n    return valueBy(arr, fn, function (a, b) { return (a + b); });\n}\nexports.sumBy = sumBy;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/math.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/object.js":
/*!***************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/object.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pick = exports.defaults = exports.cloneDeep = exports.clone = exports.fastCloneDeep = exports.merge = exports.set = exports.has = exports.propertyOf = exports.property = exports.get = exports.pathParts = exports.values = exports.keys = void 0;\nvar lang_1 = __webpack_require__(/*! ./lang */ \"./node_modules/@formio/lodash/lib/lang.js\");\nvar array_1 = __webpack_require__(/*! ./array */ \"./node_modules/@formio/lodash/lib/array.js\");\n/**\n * Get the keys of an Object.\n * @param obj\n */\nfunction keys(obj) {\n    return Object.keys(obj);\n}\nexports.keys = keys;\n;\n/**\n * Return the values of an object or an array.\n * @param obj\n * @returns\n */\nfunction values(obj) {\n    return (0, lang_1.isArray)(obj) ? obj : Object.values(obj);\n}\nexports.values = values;\n/**\n * Retrieve the path parts provided a path string.\n * @param path\n */\nfunction pathParts(path) {\n    if (!path) {\n        return [];\n    }\n    if (path[0] === '[') {\n        path = path.replace(/^\\[([^\\]]+)\\]/, '$1');\n    }\n    return path.\n        replace(/\\[/g, '.').\n        replace(/\\]/g, '').\n        split('.');\n}\nexports.pathParts = pathParts;\n/**\n * Get the value from an object or an array provided a path.\n *\n * @param obj\n * @param path\n * @param def\n */\nfunction get(obj, path, def) {\n    var val = pathParts(path).reduce(function (o, k) { return (o || {})[k]; }, obj);\n    return (typeof def !== 'undefined' &&\n        typeof val === 'undefined') ? def : val;\n}\nexports.get = get;\nfunction property(path) {\n    return function (obj) { return get(obj, path); };\n}\nexports.property = property;\nfunction propertyOf(obj) {\n    return function (path) { return get(obj, path); };\n}\nexports.propertyOf = propertyOf;\n/**\n * Determine if a value is set.\n *\n * @param obj\n * @param path\n */\nfunction has(obj, path) {\n    return get(obj, path, undefined) !== undefined;\n}\nexports.has = has;\n/**\n * Sets the value of an item within an array or object.\n * @param obj\n * @param path\n * @param value\n */\nfunction set(obj, path, value) {\n    var parts = pathParts(path);\n    parts.reduce(function (o, k, i) {\n        if (!isNaN(Number(k))) {\n            k = Number(k);\n        }\n        if ((Array.isArray(o) ? (k >= o.length) : !o.hasOwnProperty(k)) ||\n            ((i < (parts.length - 1)) && !Array.isArray(o[k]) && !(0, lang_1.isObject)(o[k]))) {\n            o[k] = !isNaN(Number(parts[i + 1])) ? [] : {};\n        }\n        if (i === (parts.length - 1)) {\n            o[k] = value;\n        }\n        return o[k];\n    }, obj);\n    return obj;\n}\nexports.set = set;\n;\nfunction propertyIsOnObject(object, property) {\n    try {\n        return property in object;\n    }\n    catch (_) {\n        return false;\n    }\n}\n// Protects from prototype poisoning and unexpected merging up the prototype chain.\nfunction propertyIsUnsafe(target, key) {\n    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,\n        && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,\n            && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.\n}\n/**\n * Merge a single object.\n *\n * @param target\n * @param source\n * @returns\n */\nfunction mergeObject(target, source) {\n    for (var key in source) {\n        if (source.hasOwnProperty(key)) {\n            if (propertyIsUnsafe(target, key)) {\n                return;\n            }\n            if (propertyIsOnObject(target, key)) {\n                target[key] = merge(target[key], source[key]);\n            }\n            else {\n                target[key] = cloneDeep(source[key]);\n            }\n        }\n    }\n    return target;\n}\n/**\n * Merge two arrays.\n * @param target\n * @param source\n */\nfunction mergeArray(target, source) {\n    source.forEach(function (subSource, index) {\n        target[index] = merge(target[index], subSource);\n    });\n    return target;\n}\n/**\n * Merges a complex data object.\n *\n * @param a\n * @param b\n * @param options\n */\nfunction merge() {\n    var args = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        args[_i] = arguments[_i];\n    }\n    var first = args.shift();\n    return args.reduce(function (target, source, index) {\n        if (!target || (target === source)) {\n            return cloneDeep(source);\n        }\n        else if ((0, lang_1.isArray)(source)) {\n            // If there is no target array, then make it one.\n            if (!(0, lang_1.isArray)(target)) {\n                args[index] = target = [];\n            }\n            return mergeArray(target, source);\n        }\n        else if ((0, lang_1.isPlainObject)(source)) {\n            return mergeObject(target, source);\n        }\n        else {\n            return cloneDeep(source);\n        }\n    }, first);\n}\nexports.merge = merge;\n/**\n * Performs a fast clone deep operation.\n *\n * @param obj\n */\nfunction fastCloneDeep(obj) {\n    try {\n        return JSON.parse(JSON.stringify(obj));\n    }\n    catch (err) {\n        console.log(\"Clone Failed: \".concat(err.message));\n        return null;\n    }\n}\nexports.fastCloneDeep = fastCloneDeep;\n/**\n * Performs a shallow clone of an object.\n * @param src\n */\nfunction clone(src) {\n    if (Array.isArray(src)) { // for arrays\n        return __spreadArray([], src, true);\n    }\n    else {\n        return __assign({}, src);\n    }\n}\nexports.clone = clone;\n/**\n * Performs a recursive cloneDeep operation.\n * @param src\n * @returns\n */\nfunction cloneDeep(src) {\n    if (Array.isArray(src)) { // for arrays\n        return src.map(cloneDeep);\n    }\n    if (src === null || typeof src !== 'object') { // for primitives / functions / non-references/pointers\n        return src;\n    }\n    return Object.fromEntries(Object.entries(src).map(function (_a) {\n        var key = _a[0], val = _a[1];\n        return ([key, cloneDeep(val)]);\n    }));\n}\nexports.cloneDeep = cloneDeep;\n/**\n * Sets the defaults of an object.\n *\n * @param obj\n * @param defs\n */\nfunction defaults(obj, defs) {\n    (0, array_1.each)(defs, function (value, key) {\n        if (!obj.hasOwnProperty(key)) {\n            obj[key] = value;\n        }\n    });\n    return obj;\n}\nexports.defaults = defaults;\n/**\n * Pick an item in an object.\n * @param object\n * @param keys\n */\nfunction pick(object, keys) {\n    return keys.reduce(function (obj, key) {\n        if (object && object.hasOwnProperty(key)) {\n            obj[key] = object[key];\n        }\n        return obj;\n    }, {});\n}\nexports.pick = pick;\n;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/object.js?");

/***/ }),

/***/ "./node_modules/@formio/lodash/lib/string.js":
/*!***************************************************!*\
  !*** ./node_modules/@formio/lodash/lib/string.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.endsWith = exports.trim = void 0;\n// From https://youmightnotneed.com/lodash/#trim\nfunction trim(str, c) {\n    if (c === void 0) { c = '\\\\s'; }\n    return str.replace(new RegExp(\"^([\".concat(c, \"]*)(.*?)([\").concat(c, \"]*)$\")), '$2');\n}\nexports.trim = trim;\n// Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith\nif (!String.prototype.endsWith) {\n    String.prototype.endsWith = function (search, this_len) {\n        if (this_len === undefined || this_len > this.length) {\n            this_len = this.length;\n        }\n        // @ts-ignore: Object is possibly 'undefined'\n        return this.substring(this_len - search.length, this_len) === search;\n    };\n}\n// From https://youmightnotneed.com/lodash/#endsWith\nfunction endsWith(str, c) {\n    return str.endsWith(c);\n}\nexports.endsWith = endsWith;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/@formio/lodash/lib/string.js?");

/***/ }),

/***/ "./node_modules/core-js/actual/object/from-entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/actual/object/from-entries.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/from-entries */ \"./node_modules/core-js/stable/object/from-entries.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/actual/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/es/object/from-entries.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/es/object/from-entries.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../../modules/es.object.from-entries */ \"./node_modules/core-js/modules/es.object.from-entries.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js/internals/path.js\");\n\nmodule.exports = path.Object.fromEntries;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/es/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/features/object/from-entries.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/features/object/from-entries.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/from-entries */ \"./node_modules/core-js/full/object/from-entries.js\");\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/features/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/full/object/from-entries.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/full/object/from-entries.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/from-entries */ \"./node_modules/core-js/actual/object/from-entries.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/full/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument) {\n  if (typeof argument == 'object' || isCallable(argument)) return argument;\n  throw $TypeError(\"Can't set \" + $String(argument) + ' as a prototype');\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  defineProperty(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar $Object = Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iter-result-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iter-result-object.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("// `CreateIterResultObject` abstract operation\n// https://tc39.es/ecma262/#sec-createiterresultobject\nmodule.exports = function (value, done) {\n  return { value: value, done: done };\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/create-iter-result-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPropertyKey(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ \"./node_modules/core-js/internals/make-built-in.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\n\nmodule.exports = function (O, key, value, options) {\n  if (!options) options = {};\n  var simple = options.enumerable;\n  var name = options.name !== undefined ? options.name : key;\n  if (isCallable(value)) makeBuiltIn(value, name, options);\n  if (options.global) {\n    if (simple) O[key] = value;\n    else defineGlobalProperty(key, value);\n  } else {\n    try {\n      if (!options.unsafe) delete O[key];\n      else if (O[key]) simple = true;\n    } catch (error) { /* empty */ }\n    if (simple) O[key] = value;\n    else definePropertyModule.f(O, key, {\n      value: value,\n      enumerable: false,\n      configurable: !options.nonConfigurable,\n      writable: !options.nonWritable\n    });\n  } return O;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/define-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// eslint-disable-next-line es-x/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/define-global-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar classList = documentCreateElement('span').classList;\nvar DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;\n\nmodule.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/dom-token-list-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || defineGlobalProperty(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty == typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    defineBuiltIn(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar bind = FunctionPrototype.bind;\nvar call = FunctionPrototype.call;\nvar uncurryThis = NATIVE_BIND && bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? function (fn) {\n  return fn && uncurryThis(fn);\n} : function (fn) {\n  return fn && function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar aFunction = function (argument) {\n  return isCallable(argument) ? argument : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)\n    || getMethod(it, '@@iterator')\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument, usingIterator) {\n  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;\n  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));\n  throw $TypeError(tryToString(argument) + ' is not iterable');\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es-x/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es-x/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ \"./node_modules/core-js/internals/weak-map-basic-detection.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = uncurryThis(store.get);\n  var wmhas = uncurryThis(store.has);\n  var wmset = uncurryThis(store.set);\n  set = function (it, metadata) {\n    if (wmhas(store, it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ (function(module) {

eval("// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-null-or-undefined.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar documentAll = typeof document == 'object' && document.all;\n\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\nvar SPECIAL_DOCUMENT_ALL = typeof documentAll == 'undefined' && documentAll !== undefined;\n\nmodule.exports = SPECIAL_DOCUMENT_ALL ? function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;\n} : function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\nvar $TypeError = TypeError;\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar ResultPrototype = Result.prototype;\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_RECORD = !!(options && options.IS_RECORD);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator, 'normal', condition);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    } return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_RECORD) {\n    iterator = iterable.iterator;\n  } else if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && isPrototypeOf(ResultPrototype, result)) return result;\n      } return new Result(false);\n    }\n    iterator = getIterator(iterable, iterFn);\n  }\n\n  next = IS_RECORD ? iterable.next : iterator.next;\n  while (!(step = call(next, iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator, 'throw', error);\n    }\n    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;\n  } return new Result(false);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n  try {\n    innerResult = getMethod(iterator, 'return');\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-create-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-create-constructor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype);\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/iterator-create-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-define.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-define.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ \"./node_modules/core-js/internals/iterator-create-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {\n          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {\n      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);\n    } else {\n      INCORRECT_VALUES_NAME = true;\n      defaultIterator = function values() { return call(nativeIterator, this); };\n    }\n  }\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });\n  }\n  Iterators[NAME] = defaultIterator;\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/iterator-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es-x/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\nelse if (IS_PURE) IteratorPrototype = create(IteratorPrototype);\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif (!isCallable(IteratorPrototype[ITERATOR])) {\n  defineBuiltIn(IteratorPrototype, ITERATOR, function () {\n    return this;\n  });\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").CONFIGURABLE);\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar enforceInternalState = InternalStateModule.enforce;\nvar getInternalState = InternalStateModule.get;\n// eslint-disable-next-line es-x/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nvar CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {\n  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;\n});\n\nvar TEMPLATE = String(String).split('String');\n\nvar makeBuiltIn = module.exports = function (value, name, options) {\n  if (String(name).slice(0, 7) === 'Symbol(') {\n    name = '[' + String(name).replace(/^Symbol\\(([^)]*)\\)/, '$1') + ']';\n  }\n  if (options && options.getter) name = 'get ' + name;\n  if (options && options.setter) name = 'set ' + name;\n  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {\n    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });\n    else value.name = name;\n  }\n  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {\n    defineProperty(value, 'length', { value: options.arity });\n  }\n  try {\n    if (options && hasOwn(options, 'constructor') && options.constructor) {\n      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });\n    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable\n    } else if (value.prototype) value.prototype = undefined;\n  } catch (error) { /* empty */ }\n  var state = enforceInternalState(value);\n  if (!hasOwn(state, 'source')) {\n    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');\n  } return value;\n};\n\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n// eslint-disable-next-line no-extend-native -- required\nFunction.prototype.toString = makeBuiltIn(function toString() {\n  return isCallable(this) && getInternalState(this).source || inspectSource(this);\n}, 'toString');\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/make-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ (function(module) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `Math.trunc` method\n// https://tc39.es/ecma262/#sec-math.trunc\n// eslint-disable-next-line es-x/no-math-trunc -- safe\nmodule.exports = Math.trunc || function trunc(x) {\n  var n = +x;\n  return (n > 0 ? floor : ceil)(n);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/math-trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* global ActiveXObject -- old IE, WSH */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    activeXDocument = new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = typeof document != 'undefined'\n    ? document.domain && activeXDocument\n      ? NullProtoObjectViaActiveX(activeXDocument) // old IE\n      : NullProtoObjectViaIFrame()\n    : NullProtoObjectViaActiveX(activeXDocument); // WSH\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n// eslint-disable-next-line es-x/no-object-create -- safe\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es-x/no-object-defineproperties -- safe\nexports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var props = toIndexedObject(Properties);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es-x/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar $Object = Object;\nvar ObjectPrototype = $Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es-x/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  } return object instanceof $Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es-x/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable no-proto -- safe */\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es-x/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe\n    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat);\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (target, TAG, STATIC) {\n  if (target && !STATIC) target = target.prototype;\n  if (target && !hasOwn(target, TO_STRING_TAG)) {\n    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || defineGlobalProperty(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.25.1',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es-x/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/symbol-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var trunc = __webpack_require__(/*! ../internals/math-trunc */ \"./node_modules/core-js/internals/math-trunc.js\");\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return number !== number || number === 0 ? 0 : trunc(number);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("var $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es-x/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype != 42;\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/weak-map-basic-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar symbolFor = Symbol && Symbol['for'];\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    var description = 'Symbol.' + name;\n    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else if (USE_SYMBOL_AS_UID && symbolFor) {\n      WellKnownSymbolsStore[name] = symbolFor(description);\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar defineIterator = __webpack_require__(/*! ../internals/iterator-define */ \"./node_modules/core-js/internals/iterator-define.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js/internals/create-iter-result-object.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return createIterResultObject(undefined, true);\n  }\n  if (kind == 'keys') return createIterResultObject(index, false);\n  if (kind == 'values') return createIterResultObject(target[index], false);\n  return createIterResultObject([index, target[index]], false);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nvar values = Iterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n// V8 ~ Chrome 45- bug\nif (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {\n  defineProperty(values, 'name', { value: 'values' });\n} catch (error) { /* empty */ }\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.from-entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\n// `Object.fromEntries` method\n// https://github.com/tc39/proposal-object-from-entries\n$({ target: 'Object', stat: true }, {\n  fromEntries: function fromEntries(iterable) {\n    var obj = {};\n    iterate(iterable, function (k, v) {\n      createProperty(obj, k, v);\n    }, { AS_ENTRIES: true });\n    return obj;\n  }\n});\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/modules/es.object.from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nvar handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);\n}\n\nhandlePrototype(DOMTokenListPrototype, 'DOMTokenList');\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/stable/object/from-entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/stable/object/from-entries.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/from-entries */ \"./node_modules/core-js/es/object/from-entries.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://FormioGrid/./node_modules/core-js/stable/object/from-entries.js?");

/***/ }),

/***/ "./lib/styles.scss":
/*!*************************!*\
  !*** ./lib/styles.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://FormioGrid/./lib/styles.scss?");

/***/ }),

/***/ "@formio/core":
/*!*****************************!*\
  !*** external "FormioCore" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__formio_core__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__.FormioGrid;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});