(globalThis["webpackChunkformio_qld"] = globalThis["webpackChunkformio_qld"] || []).push([[179],{

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/stories.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sbdocs pre code {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}", "",{"version":3,"sources":["webpack://./src/stories/stories.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,qBAAqB;AACvB","sourcesContent":[".sbdocs pre code {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.storybook/preview.js-generated-config-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "CustomHeader": () => (CustomHeader),
  "CustomTextfield": () => (CustomTextfield),
  "PlsPlusAddress": () => (PlsPlusAddress)
});

// NAMESPACE OBJECT: ./src/templates/bootstrap/index.js
var bootstrap_namespaceObject = {};
__webpack_require__.r(bootstrap_namespaceObject);
__webpack_require__.d(bootstrap_namespaceObject, {
  "plsPlusAddress": () => (plsPlusAddress)
});

// NAMESPACE OBJECT: ./.storybook/preview.js
var preview_namespaceObject = {};
__webpack_require__.r(preview_namespaceObject);
__webpack_require__.d(preview_namespaceObject, {
  "parameters": () => (parameters)
});

// EXTERNAL MODULE: ./node_modules/@storybook/client-api/dist/esm/ClientApi.js + 4 modules
var ClientApi = __webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js");
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var esm = __webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/stories.css
var stories = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/stories.css");
;// CONCATENATED MODULE: ./src/stories/stories.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(stories/* default */.Z, options);



/* harmony default export */ const stories_stories = (stories/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./src/config/storybook.options.js
var storybook_options = __webpack_require__("./src/config/storybook.options.js");
var storybook_options_default = /*#__PURE__*/__webpack_require__.n(storybook_options);
;// CONCATENATED MODULE: ./src/components/CustomHeader/CustomHeader.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HTMLComponent = Formio.Components.components.htmlelement;
var CustomHeader = /*#__PURE__*/function (_HTMLComponent) {
  _inherits(CustomHeader, _HTMLComponent);

  var _super = _createSuper(CustomHeader);

  function CustomHeader() {
    _classCallCheck(this, CustomHeader);

    return _super.apply(this, arguments);
  }

  _createClass(CustomHeader, null, [{
    key: "schema",
    value:
    /**
     * Define the default schema to change the type and tag and label.
     */
    function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return HTMLComponent.schema.apply(HTMLComponent, [{
        label: "CustomHeader",
        type: "customheader",
        tag: "h1"
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function () {
      return {
        title: "CustomHeader",
        group: "custom",
        icon: "code",
        weight: 2,
        documentation: "/userguide/#html-element-component",
        schema: CustomHeader.schema()
      };
    }
  }]);

  return CustomHeader;
}(HTMLComponent);
;// CONCATENATED MODULE: ./src/components/CustomHeader/index.js

;// CONCATENATED MODULE: ./src/components/CustomTextfield/CustomTextfield.js
function CustomTextfield_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CustomTextfield_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CustomTextfield_createClass(Constructor, protoProps, staticProps) { if (protoProps) CustomTextfield_defineProperties(Constructor.prototype, protoProps); if (staticProps) CustomTextfield_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function CustomTextfield_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) CustomTextfield_setPrototypeOf(subClass, superClass); }

function CustomTextfield_setPrototypeOf(o, p) { CustomTextfield_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CustomTextfield_setPrototypeOf(o, p); }

function CustomTextfield_createSuper(Derived) { var hasNativeReflectConstruct = CustomTextfield_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CustomTextfield_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CustomTextfield_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CustomTextfield_possibleConstructorReturn(this, result); }; }

function CustomTextfield_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return CustomTextfield_assertThisInitialized(self); }

function CustomTextfield_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CustomTextfield_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CustomTextfield_getPrototypeOf(o) { CustomTextfield_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CustomTextfield_getPrototypeOf(o); }

var TextfieldComponent = Formio.Components.components.textfield;
var CustomTextfield = /*#__PURE__*/function (_TextfieldComponent) {
  CustomTextfield_inherits(CustomTextfield, _TextfieldComponent);

  var _super = CustomTextfield_createSuper(CustomTextfield);

  function CustomTextfield() {
    CustomTextfield_classCallCheck(this, CustomTextfield);

    return _super.apply(this, arguments);
  }

  CustomTextfield_createClass(CustomTextfield, null, [{
    key: "schema",
    value:
    /**
     * Define the default schema to change the type and tag and label.
     */
    function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return TextfieldComponent.schema.apply(TextfieldComponent, [{
        label: "CustomTextfield",
        type: "customtextfield"
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function () {
      return {
        title: "CustomTextfield",
        group: "custom",
        icon: "terminal",
        weight: 2,
        documentation: "/userguide/#html-element-component",
        schema: CustomTextfield.schema()
      };
    }
  }]);

  return CustomTextfield;
}(TextfieldComponent);
;// CONCATENATED MODULE: ./src/components/CustomTextfield/index.js

// EXTERNAL MODULE: ./node_modules/autocompleter/autocomplete.js
var autocomplete = __webpack_require__("./node_modules/autocompleter/autocomplete.js");
var autocomplete_default = /*#__PURE__*/__webpack_require__.n(autocomplete);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("./node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/components/PlsPlusAddress/editForm/PlsPlusAddress.edit.data.js
/* harmony default export */ const PlsPlusAddress_edit_data = ([{
  key: "multiple",
  customConditional: function () {
    return false;
  }
}, {
  key: "defaultValue",
  customConditional: function () {
    return false;
  }
}]);
;// CONCATENATED MODULE: ./src/components/PlsPlusAddress/editForm/PlsPlusAddress.edit.display.js
/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/editForm/Address.edit.display.js
 *
 */
/* harmony default export */ const PlsPlusAddress_edit_display = ([{
  weight: 30,
  type: "textfield",
  input: true,
  key: "switchToManualModeLabel",
  label: "Switch To Manual Mode Label",
  placeholder: "Switch To Manual Mode Label",
  tooltip: "The label for the checkbox used to switch to manual mode.",
  validate: {
    required: true
  },
  customConditional: function (_ref) {
    var data = _ref.data;
    return Boolean(data.enableManualMode);
  }
}, {
  weight: 40,
  type: "checkbox",
  input: true,
  key: "disableClearIcon",
  label: "Disable Clear Icon",
  tooltip: "Clear Icon allows easily clear component's value."
}, {
  type: "textfield",
  label: "Add Another Text",
  key: "addAnother",
  tooltip: "Set the text of the Add Another button.",
  placeholder: "Add Another",
  weight: 410,
  input: true,
  customConditional: function (_ref2) {
    var data = _ref2.data;
    return data.multiple;
  }
}]);
;// CONCATENATED MODULE: ./src/components/PlsPlusAddress/editForm/PlsPlusAddress.edit.provider.js
/* harmony default export */ const PlsPlusAddress_edit_provider = ([{
  type: "textfield",
  input: true,
  key: "providerOptions.params['apiKey']",
  label: "Franchise API key",
  placeholder: "Enter Franchise API Key",
  weight: 10,
  tooltip: "You must have an API key in order to use this component.",
  description: "You must have a API key in order to use this component, please contact <a href='mailto:qol.development@smartservice.qld.gov.au' target='_blank'>qol.development@smartservice.qld.gov.au</a>(TBC) if you want to acquire an API key. (To be confirmed)",
  validate: {
    required: true
  }
}, {
  type: "textfield",
  input: true,
  key: "providerOptions.apiBase",
  label: "Custom API base URL",
  placeholder: "Enter base URL",
  weight: 10,
  tooltip: "Leave blank for using the default URL.",
  description: "The default PlsPlus API base URL is `https://www.address.services.qld.gov.au`, you can override that by providing a different base URL."
}]);
;// CONCATENATED MODULE: ./src/components/PlsPlusAddress/PlsPlusAddress.form.js
/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.form.js
 *
 */



var baseEditForm = Formio.Components.components.base.editForm;
/* harmony default export */ const PlsPlusAddress_form = (function () {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return baseEditForm.apply(void 0, [[{
    key: "data",
    components: PlsPlusAddress_edit_data
  }, {
    key: "display",
    components: PlsPlusAddress_edit_display
  }, {
    label: "Provider",
    key: "provider",
    weight: 15,
    components: PlsPlusAddress_edit_provider
  }]].concat(extend));
});
;// CONCATENATED MODULE: ./src/components/PlsPlusAddress/PlsPlusAddress.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PlsPlusAddress_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PlsPlusAddress_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PlsPlusAddress_createClass(Constructor, protoProps, staticProps) { if (protoProps) PlsPlusAddress_defineProperties(Constructor.prototype, protoProps); if (staticProps) PlsPlusAddress_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = PlsPlusAddress_getPrototypeOf(object); if (object === null) break; } return object; }

function PlsPlusAddress_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PlsPlusAddress_setPrototypeOf(subClass, superClass); }

function PlsPlusAddress_setPrototypeOf(o, p) { PlsPlusAddress_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PlsPlusAddress_setPrototypeOf(o, p); }

function PlsPlusAddress_createSuper(Derived) { var hasNativeReflectConstruct = PlsPlusAddress_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PlsPlusAddress_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PlsPlusAddress_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PlsPlusAddress_possibleConstructorReturn(this, result); }; }

function PlsPlusAddress_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PlsPlusAddress_assertThisInitialized(self); }

function PlsPlusAddress_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PlsPlusAddress_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PlsPlusAddress_getPrototypeOf(o) { PlsPlusAddress_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PlsPlusAddress_getPrototypeOf(o); }

/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.js
 *
 */



var ContainerComponent = Formio.Components.components.container;
var Field = Formio.Components.components.field;
var NestedComponent = Formio.Components.components.nested;
var PlsPlusAddressMode = {
  Autocomplete: "autocomplete",
  Manual: "manual"
};
var RemoveValueIconHiddenClass = "address-autocomplete-remove-value-icon--hidden";
var addressValidation = {
  pattern: "^((?![<>\\{\\}]).)*$",
  customMessage: "You have exceeded the character limit or included html or special characters, e.g. <,>,{,},\\",
  maxLength: 40
};
var PlsPlusAddress = /*#__PURE__*/function (_ContainerComponent) {
  PlsPlusAddress_inherits(PlsPlusAddress, _ContainerComponent);

  var _super = PlsPlusAddress_createSuper(PlsPlusAddress);

  function PlsPlusAddress() {
    PlsPlusAddress_classCallCheck(this, PlsPlusAddress);

    return _super.apply(this, arguments);
  }

  PlsPlusAddress_createClass(PlsPlusAddress, [{
    key: "mergeSchema",
    value: function mergeSchema() {
      var component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultSchema = this.defaultSchema;

      if (component.components) {
        defaultSchema = lodash_default().omit(defaultSchema, "components");
      }

      return lodash_default().defaultsDeep(component, defaultSchema);
    }
  }, {
    key: "composedAddress",
    get: function () {
      var _this$address = this.address,
          address1 = _this$address.address1,
          address2 = _this$address.address2,
          address3 = _this$address.address3,
          city = _this$address.city,
          state = _this$address.state,
          postcode = _this$address.postcode;
      return [address1, address2, address3, city, state, postcode].join(" ").replace(/ +/g, " ").trim();
    }
  }, {
    key: "onChange",
    value: function onChange(flags, fromRoot) {
      var _this$dataValue2;

      if (this.autocompleteMode) {
        var _this$dataValue;

        if ((_this$dataValue = this.dataValue) !== null && _this$dataValue !== void 0 && _this$dataValue.address) this.dataValue.address.selectedAddress = this.address.autocompleteAddress;
      } else if ((_this$dataValue2 = this.dataValue) !== null && _this$dataValue2 !== void 0 && _this$dataValue2.address) this.dataValue.address.selectedAddress = this.composedAddress;

      return _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "onChange", this).call(this, flags, fromRoot);
    }
  }, {
    key: "init",
    value: function init() {
      this.components = this.components || [];

      if (this.builderMode || this.manualModeEnabled) {
        NestedComponent.prototype.addComponents.call(this, this.address);
      }

      Field.prototype.init.call(this);

      if (!this.builderMode) {
        var _this$component = this.component,
            _this$component$provi = _this$component.provider,
            provider = _this$component$provi === void 0 ? "plsPlus" : _this$component$provi,
            providerOptions = _this$component.providerOptions;

        if (provider) {
          this.provider = this.initializeProvider(provider, providerOptions);
        }
      }
    }
  }, {
    key: "initializeProvider",
    value: function initializeProvider(provider) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var Provider = Formio.Providers.getProvider("address", provider);
      return new Provider(Object.assign({}, options));
    }
  }, {
    key: "emptyValue",
    get: function () {
      return this.manualModeEnabled ? {
        mode: PlsPlusAddressMode.Autocomplete,
        address: {
          address1: "",
          address2: "",
          address3: "",
          city: "",
          postcode: "",
          autocompleteAddress: "",
          selectedAddress: "",
          state: "QLD"
        }
      } : {};
    }
  }, {
    key: "mode",
    get: function () {
      var _this$dataValue$mode, _this$dataValue3;

      if (!this.manualModeEnabled) {
        return PlsPlusAddressMode.Autocomplete;
      }

      return (_this$dataValue$mode = (_this$dataValue3 = this.dataValue) === null || _this$dataValue3 === void 0 ? void 0 : _this$dataValue3.mode) !== null && _this$dataValue$mode !== void 0 ? _this$dataValue$mode : PlsPlusAddressMode.Autocomplete;
    },
    set: function (value) {
      if (this.manualModeEnabled) {
        this.dataValue.mode = value;
      }
    }
  }, {
    key: "autocompleteMode",
    get: function () {
      return this.mode === PlsPlusAddressMode.Autocomplete;
    }
  }, {
    key: "manualMode",
    get: function () {
      return this.mode === PlsPlusAddressMode.Manual;
    }
  }, {
    key: "manualModeEnabled",
    get: function () {
      return Boolean(this.component.enableManualMode);
    }
  }, {
    key: "restoreComponentsContext",
    value: function restoreComponentsContext() {
      var _this = this;

      this.getComponents().forEach(function (component) {
        component.data = _this.address;
        component.setValue(component.dataValue, {
          noUpdateEvent: true
        });
      });
    }
  }, {
    key: "isMultiple",
    get: function () {
      return Boolean(this.component.multiple);
    }
  }, {
    key: "address",
    get: function () {
      return this.manualModeEnabled && this.dataValue ? this.dataValue.address : this.dataValue;
    },
    set: function (value) {
      if (this.manualModeEnabled) {
        this.dataValue.address = value;
      } else {
        this.dataValue = value;
      }
    }
  }, {
    key: "defaultValue",
    get: function () {
      return _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "defaultValue", this);
    }
  }, {
    key: "defaultSchema",
    get: function () {
      return Object.assign({}, PlsPlusAddress.schema(), {
        tree: "true"
      });
    }
  }, {
    key: "isValueInLegacyFormat",
    value: function isValueInLegacyFormat(value) {
      return value && !value.mode;
    }
  }, {
    key: "normalizeValue",
    value: function normalizeValue(value) {
      return this.manualModeEnabled && this.isValueInLegacyFormat(value) ? {
        mode: PlsPlusAddressMode.Autocomplete,
        address: value
      } : value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var changed = Field.prototype.setValue.call(this, value, flags);
      this.restoreComponentsContext();

      if (changed || !lodash_default().isEmpty(value) && flags.fromSubmission) {
        this.redraw();
      }

      return changed;
    }
  }, {
    key: "modeSwitcher",
    get: function () {
      return this.refs ? this.refs[PlsPlusAddress.modeSwitcherRef] || null : null;
    }
  }, {
    key: "removeValueIcon",
    get: function () {
      return this.refs ? this.refs[PlsPlusAddress.removeValueIconRef] || null : null;
    }
  }, {
    key: "searchInput",
    get: function () {
      return this.refs ? this.refs[PlsPlusAddress.searchInputRef] || null : null;
    }
  }, {
    key: "searchInputAttributes",
    get: function () {
      var _this$component$provi2, _this$component$provi3;

      var attr = {
        name: this.options.name,
        type: "text",
        class: "form-control",
        lang: this.options.language,
        tabindex: this.component.tabindex || 0
      };

      if (this.component.placeholder) {
        attr.placeholder = this.t(this.component.placeholder);
      }

      if (this.disabled || this.manualMode || !((_this$component$provi2 = this.component.providerOptions) !== null && _this$component$provi2 !== void 0 && (_this$component$provi3 = _this$component$provi2.params) !== null && _this$component$provi3 !== void 0 && _this$component$provi3.apiKey)) {
        attr.disabled = "disabled";
      }

      lodash_default().defaults(attr, this.component.attributes);

      return attr;
    }
  }, {
    key: "templateName",
    get: function () {
      return "plsPlusAddress";
    }
  }, {
    key: "hasChildren",
    get: function () {
      return this.builderMode || this.manualModeEnabled;
    }
  }, {
    key: "renderElement",
    value: function renderElement(value) {
      var _this2 = this,
          _this$component$provi4,
          _this$component$provi5;

      this.getComponents().forEach(function (component) {
        component.disabled = !_this2.manualMode;

        component.onChange = function (flags, fromRoot) {
          _this2.dataValue.address.selectedAddress = _this2.composedAddress;
          return _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "onChange", _this2).call(_this2, flags, fromRoot);
        };
      });
      this.component.validate.required = !this.manualMode;
      return this.renderTemplate(this.templateName, {
        children: this.hasChildren ? this.renderComponents() : "",
        nestedKey: this.nestedKey,
        inputAttributes: this.searchInputAttributes,
        ref: {
          modeSwitcher: PlsPlusAddress.modeSwitcherRef,
          removeValueIcon: PlsPlusAddress.removeValueIconRef,
          searchInput: PlsPlusAddress.searchInputRef
        },
        displayValue: this.getDisplayValue(value),
        mode: {
          autocomplete: this.autocompleteMode,
          manual: this.manualMode
        },
        hasApiKey: !!((_this$component$provi4 = this.component.providerOptions) !== null && _this$component$provi4 !== void 0 && (_this$component$provi5 = _this$component$provi4.params) !== null && _this$component$provi5 !== void 0 && _this$component$provi5.apiKey)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "render", this).call(this, this.renderElement());
    }
  }, {
    key: "onSelectAddress",
    value: function onSelectAddress(address, element, index) {
      this.address.autocompleteAddress = address;
      this.triggerChange({
        modified: true
      });

      if (element) {
        element.value = this.getDisplayValue(this.address);
      }

      this.updateRemoveIcon(index);
    }
  }, {
    key: "attach",
    value: function attach(element) {
      var _this3 = this;

      var result = (this.builderMode || this.manualMode ? _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "attach", this) : Field.prototype.attach).call(this, element);

      if (!this.builderMode) {
        if (!this.provider && this.component.provider) {
          var _this$component2 = this.component,
              _this$component2$prov = _this$component2.provider,
              provider = _this$component2$prov === void 0 ? "plsPlus" : _this$component2$prov,
              providerOptions = _this$component2.providerOptions;
          this.provider = this.initializeProvider(provider, providerOptions);
        }
      }

      this.loadRefs(element, {
        [PlsPlusAddress.modeSwitcherRef]: "single",
        [PlsPlusAddress.removeValueIconRef]: "multiple",
        [PlsPlusAddress.searchInputRef]: "multiple"
      });
      this.searchInput.forEach(function (elem, index) {
        if (!_this3.builderMode && elem && _this3.provider) {
          autocomplete_default()({
            input: elem,
            debounceWaitMs: 300,
            fetch: function (text, update) {
              var query = text;

              var promise = _this3.provider.search(query);

              promise.then(function (response) {
                update(response);
              });
            },
            render: function (address) {
              var div = _this3.ce("div");

              div.textContent = address;
              return div;
            },
            onSelect: function (address) {
              _this3.onSelectAddress(address, elem, index);

              _this3.provider.parseAddress(address).then(function (r) {
                _this3.address = Object.assign({}, _this3.address, _this3.provider.breakAddress(r));

                _this3.triggerChange({
                  modified: true
                }); // setTimeout(() => {
                //   this.restoreComponentsContext();
                // }, 1000);


                _this3.restoreComponentsContext();

                _this3.getComponents().forEach(function (component) {
                  var childElement = document.getElementById(`${component.id}-${component.component.key}`);
                  childElement.value = component.dataValue;
                });
              });

              _this3.redraw();
            }
          });

          _this3.addEventListener(elem, "blur", function () {
            if (!elem) {
              return;
            }

            if (elem.value) {
              elem.value = _this3.getDisplayValue(_this3.address);
            }
          });

          _this3.addEventListener(elem, "keyup", function () {
            if (!elem) {
              return;
            }

            if (!elem.value) {
              _this3.clearAddress(elem, index);
            }
          });
        }
      });

      if (this.modeSwitcher) {
        this.addEventListener(this.modeSwitcher, "change", function () {
          if (!_this3.modeSwitcher) {
            return;
          }

          _this3.mode = _this3.modeSwitcher.checked ? PlsPlusAddressMode.Manual : PlsPlusAddressMode.Autocomplete;

          if (!_this3.builderMode) {
            if (_this3.manualMode) {
              _this3.restoreComponentsContext();
            }

            _this3.triggerChange({
              modified: true
            });
          }

          _this3.redraw();
        });
      }

      if (!this.builderMode) {
        this.removeValueIcon.forEach(function (removeValueIcon, index) {
          _this3.updateRemoveIcon(index);

          var removeValueHandler = function () {
            var _this3$searchInput;

            var searchInput = (_this3$searchInput = _this3.searchInput) === null || _this3$searchInput === void 0 ? void 0 : _this3$searchInput[index];

            _this3.clearAddress(searchInput, index);

            if (searchInput) {
              searchInput.focus();
            }
          };

          _this3.addEventListener(removeValueIcon, "click", removeValueHandler);

          _this3.addEventListener(removeValueIcon, "keydown", function (_ref) {
            var key = _ref.key;

            if (key === "Enter") {
              removeValueHandler();
            }
          });
        });
      }

      return result;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      var _this4 = this;

      var modeSwitcherInFocus = this.modeSwitcher && document.activeElement === this.modeSwitcher;
      return _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "redraw", this).call(this).then(function (result) {
        if (modeSwitcherInFocus && _this4.modeSwitcher) {
          _this4.modeSwitcher.focus();
        }

        return result;
      });
    }
  }, {
    key: "clearAddress",
    value: function clearAddress(element, index) {
      var _this$address2,
          _this5 = this;

      if (!this.isEmpty()) {
        this.triggerChange();
      }

      if ((_this$address2 = this.address) !== null && _this$address2 !== void 0 && _this$address2[index]) {
        this.address[index] = this.emptyValue.address;
      } else {
        this.address = this.emptyValue.address;
      }

      if (element) {
        element.value = "";
      }

      this.getComponents().forEach(function (component) {
        var childElement = document.getElementById(`${component.id}-${component.component.key}`);
        if (childElement) childElement.value = _this5.address[component.component.key] || "";
      });
      this.updateRemoveIcon(index);
      this.redraw();
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.address;
      return this.provider ? this.provider.getDisplayValue(value) : "";
    }
  }, {
    key: "updateRemoveIcon",
    value: function updateRemoveIcon(index) {
      var _this$removeValueIcon;

      var removeValueIcon = (_this$removeValueIcon = this.removeValueIcon) === null || _this$removeValueIcon === void 0 ? void 0 : _this$removeValueIcon[index];

      if (removeValueIcon) {
        var value = this.address;

        if (this.manualMode || this.isEmpty(value) || lodash_default().isEmpty(value) || this.disabled || value.autocompleteAddress === "") {
          this.addClass(removeValueIcon, RemoveValueIconHiddenClass);
        } else {
          this.removeClass(removeValueIcon, RemoveValueIconHiddenClass);
        }
      }
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(value, options) {
      if (!value) {
        return "";
      }

      var normalizedValue = this.normalizeValue(value);

      var _ref2 = this.manualModeEnabled ? normalizedValue : {
        address: normalizedValue,
        mode: PlsPlusAddressMode.Autocomplete
      },
          address = _ref2.address,
          mode = _ref2.mode;

      var valueInManualMode = mode === PlsPlusAddressMode.Manual;

      if (this.provider && !valueInManualMode) {
        return this.getDisplayValue(address);
      }

      if (valueInManualMode) {
        if (this.component.manualModeViewString) {
          return this.interpolate(this.component.manualModeViewString, {
            address: address,
            data: this.data,
            component: this.component
          });
        }

        return this.getComponents().filter(function (component) {
          return component.hasValue(address);
        }).map(function (component) {
          return [component, lodash_default().get(address, component.key)];
        }).filter(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              component = _ref4[0],
              componentValue = _ref4[1];

          return !component.isEmpty(componentValue);
        }).map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              component = _ref6[0],
              componentValue = _ref6[1];

          return component.getValueAsString(componentValue, options);
        }).join(", ");
      }

      return _get(PlsPlusAddress_getPrototypeOf(PlsPlusAddress.prototype), "getValueAsString", this).call(this, address, options);
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.searchInput && this.searchInput[0]) {
        this.searchInput[0].focus();
      }
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return ContainerComponent.schema.apply(ContainerComponent, [{
        type: "plsplusaddress",
        label: "Address",
        key: "address",
        switchToManualModeLabel: "Can't find address? Switch to manual mode.",
        providerOptions: {},
        manualModeViewString: "",
        hideLabel: false,
        disableClearIcon: false,
        enableManualMode: true,
        components: [{
          label: "Autocomplete address",
          persistent: false,
          tableView: false,
          key: "autocompleteAddress",
          type: "hidden"
        }, {
          label: "Selected address",
          persistent: false,
          tableView: false,
          key: "selectedAddress",
          type: "hidden"
        }, {
          label: "Address line 1 <i>(include unit number if needed)</i>",
          persistent: false,
          tableView: false,
          key: "address1",
          type: "textfield",
          input: true,
          validate: Object.assign({
            required: true
          }, addressValidation)
        }, {
          label: "Address line 2",
          persistent: false,
          tableView: false,
          key: "address2",
          type: "textfield",
          input: true,
          validate: addressValidation
        }, {
          label: "Address line 3",
          persistent: false,
          tableView: false,
          key: "address3",
          type: "textfield",
          input: true,
          validate: addressValidation
        }, {
          label: "Town, City or Suburb",
          persistent: false,
          tableView: false,
          key: "city",
          type: "textfield",
          input: true,
          validate: Object.assign({
            required: true
          }, addressValidation)
        }, {
          label: "State",
          persistent: false,
          tableView: false,
          key: "state",
          type: "textfield",
          input: true,
          disabled: true,
          defaultValue: "QLD"
        }, {
          label: "Postcode",
          persistent: false,
          tableView: false,
          key: "postcode",
          type: "textfield",
          input: true,
          inputMask: "9999",
          validate: {
            required: true,
            pattern: "^([0-9]{4})$",
            customMessage: "Invalid postcode format",
            minLength: 4,
            maxLength: 4
          }
        }]
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function () {
      return {
        title: "PlsPlusAddress",
        group: "custom",
        icon: "home",
        documentation: "/userguide/#address",
        weight: 2,
        // this is the tricky bit to get exception on duplicated keys in children components that belong to different nested components
        // `tree: true` is needed for the exception, if it is defined in the schema, it will not pass to the submission data because it will fail the isDirty test (comparing defaultSchema and builder schema)
        // as a solution `tree: true` need to define here instead
        // https://github.com/formio/formio.js/blob/master/src/utils/formUtils.js#L89-L90
        schema: Object.assign({}, PlsPlusAddress.schema(), {
          tree: true
        })
      };
    }
  }, {
    key: "modeSwitcherRef",
    get: function () {
      return "modeSwitcher";
    }
  }, {
    key: "removeValueIconRef",
    get: function () {
      return "removeValueIcon";
    }
  }, {
    key: "searchInputRef",
    get: function () {
      return "searchInput";
    }
  }]);

  return PlsPlusAddress;
}(ContainerComponent);
PlsPlusAddress.editForm = PlsPlusAddress_form;
;// CONCATENATED MODULE: ./src/components/PlsPlusAddress/index.js

;// CONCATENATED MODULE: ./src/components/index.js



;// CONCATENATED MODULE: ./src/utils/getComponents.js
var getComponents = function (components) {
  var customComponents = {};
  Object.keys(components).forEach(function (key) {
    var componentName = key.toLowerCase();
    customComponents[componentName] = components[key];
  });
  return customComponents;
};
;// CONCATENATED MODULE: ./src/templates/bootstrap/plsPlusAddress/form.ejs
/* harmony default export */ const plsPlusAddress_form = ("<div class=\"address-autocomplete-container\">\n  <input\n    ref=\"{{ ctx.ref.searchInput }}\"\n    {% for (var attr in ctx.inputAttributes) { %}\n      {{attr}}=\"{{ctx.inputAttributes[attr]}}\"\n    {% } %}\n    value=\"{{ ctx.displayValue }}\"\n    autocomplete=\"off\"\n    aria-label=\"{{ctx.t('autocomplete')}}\"\n  >\n  {% if (!ctx.component.disableClearIcon) { %}\n    <i\n      class=\"address-autocomplete-remove-value-icon fa fa-times\"\n      tabindex=\"{{ ctx.inputAttributes.tabindex }}\"\n      ref=\"{{ ctx.ref.removeValueIcon }}\"\n    ></i>\n  {% } %}\n</div>\n{% if (!ctx.hasApiKey) { %}\n    <div class=\"form-text\">Please provide an API key in Provider to use the search function.</div>\n{% } %}\n{% if (ctx.self.manualModeEnabled) { %}\n  <div class=\"form-check checkbox\">\n    <label class=\"form-check-label\">\n      <input\n        ref=\"{{ ctx.ref.modeSwitcher }}\"\n        type=\"checkbox\"\n        class=\"form-check-input\"\n        tabindex=\"{{ ctx.inputAttributes.tabindex }}\"\n        {% if (ctx.mode.manual) { %}checked=true{% } %}\n        {% if (ctx.disabled) { %}disabled=true{% } %}\n      >\n      <span>{{ ctx.component.switchToManualModeLabel }}</span>\n    </label>\n  </div>\n{% } %}\n{% if (ctx.self.manualModeEnabled && ( ctx.mode.manual || ctx.displayValue)) { %}\n  <div ref=\"{{ ctx.nestedKey }}\">\n    {{ ctx.children }}\n  </div>\n{% } %}\n{% if (ctx.mode.manual) { %}\n<div>\n  <!-- Todo Link/function to improve the address database -->\n  <!-- <p><a href=\"#\" target=\"_blank\">Please take part to improve our address database if we couldn't find your address.</a></p> -->\n</div>\n{% } %}");
;// CONCATENATED MODULE: ./src/templates/bootstrap/plsPlusAddress/html.ejs
/* harmony default export */ const html = ("<div ref=\"value\">{% if (ctx.displayValue) { %}{{ctx.displayValue}}{% } else { %}-{% } %}</div>");
;// CONCATENATED MODULE: ./src/templates/bootstrap/plsPlusAddress/index.js
/*
 * use form.io Address template as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/templates/bootstrap/address/index.js
 *
 */


var plsPlusAddress = {
  form: plsPlusAddress_form,
  html: html
};
;// CONCATENATED MODULE: ./src/templates/bootstrap/index.js

;// CONCATENATED MODULE: ./src/templates/index.js

/* harmony default export */ const templates = ({
  bootstrap: bootstrap_namespaceObject
});
;// CONCATENATED MODULE: ./src/providers/address/PlsPlusAddressProvider.js
function PlsPlusAddressProvider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PlsPlusAddressProvider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PlsPlusAddressProvider_createClass(Constructor, protoProps, staticProps) { if (protoProps) PlsPlusAddressProvider_defineProperties(Constructor.prototype, protoProps); if (staticProps) PlsPlusAddressProvider_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function PlsPlusAddressProvider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PlsPlusAddressProvider_setPrototypeOf(subClass, superClass); }

function PlsPlusAddressProvider_setPrototypeOf(o, p) { PlsPlusAddressProvider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PlsPlusAddressProvider_setPrototypeOf(o, p); }

function PlsPlusAddressProvider_createSuper(Derived) { var hasNativeReflectConstruct = PlsPlusAddressProvider_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PlsPlusAddressProvider_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PlsPlusAddressProvider_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PlsPlusAddressProvider_possibleConstructorReturn(this, result); }; }

function PlsPlusAddressProvider_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PlsPlusAddressProvider_assertThisInitialized(self); }

function PlsPlusAddressProvider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PlsPlusAddressProvider_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PlsPlusAddressProvider_getPrototypeOf(o) { PlsPlusAddressProvider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PlsPlusAddressProvider_getPrototypeOf(o); }


var CustomAddressProvider = Formio.Providers.providers.address.custom;
var defaultApiBase = "https://www.address.services.qld.gov.au";
var PlsPlusAddressProvider = /*#__PURE__*/function (_CustomAddressProvide) {
  PlsPlusAddressProvider_inherits(PlsPlusAddressProvider, _CustomAddressProvide);

  var _super = PlsPlusAddressProvider_createSuper(PlsPlusAddressProvider);

  function PlsPlusAddressProvider() {
    PlsPlusAddressProvider_classCallCheck(this, PlsPlusAddressProvider);

    return _super.apply(this, arguments);
  }

  PlsPlusAddressProvider_createClass(PlsPlusAddressProvider, [{
    key: "queryProperty",
    get: function () {
      return "query";
    }
  }, {
    key: "responseProperty",
    get: function () {
      return "AutoCompleteAddressResponse.AutoCompleteAddressResult.string";
    }
  }, {
    key: "displayValueProperty",
    get: function () {
      return "autocompleteAddress";
    }
  }, {
    key: "getAddress1",
    value: function getAddress1(addressLine) {
      if (addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.siteName;
      }

      if (!addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.complexDesc;
      }

      if (addressLine.siteName && !addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.siteName;
      }

      if (!addressLine.siteName && !addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.streetAddress;
      }

      return "";
    }
  }, {
    key: "getAddress2",
    value: function getAddress2(addressLine) {
      if (addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.complexDesc;
      }

      if (!addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.streetAddress;
      }

      if (addressLine.siteName && !addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.streetAddress;
      }

      return "";
    }
  }, {
    key: "getAddress3",
    value: function getAddress3(addressLine) {
      if (addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        return addressLine.streetAddress;
      }

      return "";
    }
  }, {
    key: "getCity",
    value: function getCity(addressLine) {
      return addressLine.Locality || "";
    }
  }, {
    key: "getState",
    value: function getState(addressLine) {
      return addressLine.State || "";
    }
  }, {
    key: "getPostcode",
    value: function getPostcode(addressLine) {
      return addressLine.Postcode || "";
    }
  }, {
    key: "breakAddress",
    value: function breakAddress(address) {
      var _address$Parcel, _address$Unit, _address$Unit2, _address$Level, _address$Level2, _address$RoadNumber, _address$RoadNumber2, _address$RoadNumber3, _address$Road, _address$Road2, _address$Road3;

      var siteName = address.SiteName || "";
      var lot = (_address$Parcel = address.Parcel) !== null && _address$Parcel !== void 0 && _address$Parcel.Lot ? `LOT ${address.Parcel.Lot}` : undefined;
      var complexDesc = [lot, (_address$Unit = address.Unit) === null || _address$Unit === void 0 ? void 0 : _address$Unit.TypeCode, (_address$Unit2 = address.Unit) === null || _address$Unit2 === void 0 ? void 0 : _address$Unit2.Number, (_address$Level = address.Level) === null || _address$Level === void 0 ? void 0 : _address$Level.TypeCode, (_address$Level2 = address.Level) === null || _address$Level2 === void 0 ? void 0 : _address$Level2.Number].filter(function (o) {
        return o !== undefined;
      }).join(" ");
      var roadNumberPart = [(_address$RoadNumber = address.RoadNumber) === null || _address$RoadNumber === void 0 ? void 0 : _address$RoadNumber.First, (_address$RoadNumber2 = address.RoadNumber) !== null && _address$RoadNumber2 !== void 0 && _address$RoadNumber2.Last ? "-" : undefined, (_address$RoadNumber3 = address.RoadNumber) === null || _address$RoadNumber3 === void 0 ? void 0 : _address$RoadNumber3.Last].filter(function (o) {
        return o !== undefined;
      }).join("");
      var streetAddress = [roadNumberPart, (_address$Road = address.Road) === null || _address$Road === void 0 ? void 0 : _address$Road.Name, (_address$Road2 = address.Road) === null || _address$Road2 === void 0 ? void 0 : _address$Road2.TypeCode, (_address$Road3 = address.Road) === null || _address$Road3 === void 0 ? void 0 : _address$Road3.Suffix].filter(function (o) {
        return o !== undefined;
      }).join(" ");
      var addressLine = {
        siteName: siteName,
        lot: lot,
        complexDesc: complexDesc,
        roadNumberPart: roadNumberPart,
        streetAddress: streetAddress,
        Locality: address.Locality,
        State: address.State,
        Postcode: address.Postcode
      };
      return {
        address1: this.getAddress1(addressLine),
        address2: this.getAddress2(addressLine),
        address3: this.getAddress3(addressLine),
        city: this.getCity(addressLine),
        state: this.getState(addressLine),
        postcode: this.getPostcode(addressLine)
      };
    }
  }, {
    key: "makeParseRequest",
    value: function makeParseRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Formio.makeStaticRequest(this.getParseRequestUrl(options), "GET", null, {
        noToken: true
      });
    }
  }, {
    key: "parseAddress",
    value: function parseAddress(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestOptions = this.getRequestOptions(options);
      var params = requestOptions.params || {};
      params[this.queryProperty] = query.trim();
      return this.makeParseRequest(requestOptions).then(function (response) {
        var resultCount = parseFloat(response.ParseAddressResponse.ParseAddressResult.ResultCount);
        if (resultCount === 0) return {};
        if (resultCount === 1) return response.ParseAddressResponse.ParseAddressResult.Results.Result.Address;
        return lodash_default().maxBy(response.ParseAddressResponse.ParseAddressResult.Results.Result, function (r) {
          return r.Confidence;
        }).Address;
      });
    }
  }, {
    key: "search",
    value: function search(query) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestOptions = this.getRequestOptions(options);
      var params = requestOptions.params || {};
      params[this.queryProperty] = query.trim();
      return this.makeRequest(requestOptions).then(function (result) {
        return _this.responseProperty ? lodash_default().get(result, _this.responseProperty, []) : result;
      });
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue(address) {
      return lodash_default().isEmpty(address) ? "" : lodash_default().get(address, this.displayValueProperty, "");
    }
  }, {
    key: "getRequestUrl",
    value: function getRequestUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = options.params,
          apiBase = options.apiBase;
      return `${apiBase || defaultApiBase}/pls-plus-qg/AutoCompleteAddress?${this.serialize(params)}`;
    }
  }, {
    key: "getParseRequestUrl",
    value: function getParseRequestUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = options.params,
          apiBase = options.apiBase;
      return `${apiBase || defaultApiBase}/pls-plus-qg/ParseAddress?${this.serialize(params)}`;
    }
  }], [{
    key: "name",
    get: function () {
      return "plsPlus";
    }
  }, {
    key: "displayName",
    get: function () {
      return "PLS Plus";
    }
  }]);

  return PlsPlusAddressProvider;
}(CustomAddressProvider);
;// CONCATENATED MODULE: ./src/providers/address/index.js

/* harmony default export */ const address = ({
  [PlsPlusAddressProvider.name]: PlsPlusAddressProvider
});
;// CONCATENATED MODULE: ./src/providers/index.js

/* harmony default export */ const providers = ({
  address: address
});
;// CONCATENATED MODULE: ./.storybook/preview.js
 // import "../src/style/formio-qld.scss";






Formio.use({
  components: getComponents(components_namespaceObject),
  templates: templates,
  providers: providers,
  options: (storybook_options_default())
});
var parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    source: {
      type: "code",
      language: "js"
    }
  }
};
;// CONCATENATED MODULE: ./.storybook/preview.js-generated-config-entry.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/* eslint-disable import/no-unresolved */





Object.keys(preview_namespaceObject).forEach(function (key) {
  var value = preview_namespaceObject[key];

  switch (key) {
    case 'args':
    case 'argTypes':
      {
        return esm/* logger.warn */.kg.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
      }

    case 'decorators':
      {
        return value.forEach(function (decorator) {
          return (0,ClientApi/* addDecorator */.$9)(decorator, false);
        });
      }

    case 'loaders':
      {
        return value.forEach(function (loader) {
          return (0,ClientApi/* addLoader */.HZ)(loader, false);
        });
      }

    case 'parameters':
      {
        return (0,ClientApi/* addParameters */.h1)(_objectSpread({}, value), false);
      }

    case 'argTypesEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgTypesEnhancer */.My)(enhancer);
        });
      }

    case 'argsEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgsEnhancer */._C)(enhancer);
        });
      }

    case 'render':
      {
        return (0,ClientApi/* setGlobalRender */.$P)(value);
      }

    case 'globals':
    case 'globalTypes':
      {
        var v = {};
        v[key] = value;
        return (0,ClientApi/* addParameters */.h1)(v, false);
      }

    case '__namedExportsOrder':
    case 'decorateStory':
    case 'renderToDOM':
      {
        return null; // This key is not handled directly in v6 mode.
      }

    default:
      {
        // eslint-disable-next-line prefer-template
        return console.log(key + ' was not supported :( !');
      }
  }
});

/***/ }),

/***/ "./generated-stories-entry.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _frameworkImportPath = __webpack_require__("./node_modules/@storybook/html/dist/esm/client/index.js");
/* eslint-disable import/no-unresolved */


(0, _frameworkImportPath.configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"), __webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")], module, false);

/***/ }),

/***/ "./src/config/createForm.controller.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var form = _ref.form,
      formConfirmation = _ref.formConfirmation;
  // Change event/GTM
  form.on("click", function (e) {
    // eslint-disable-next-line no-underscore-dangle
    var formTitle = form._form.title; // eslint-disable-next-line no-underscore-dangle

    var formModified = form._form.modified;

    if (typeof e.changed !== "undefined" && typeof e.changed.component !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "formio-interaction",
        "formio-name": formTitle,
        "formio-input-id": e.changed.component.id,
        "formio-input-type": e.changed.component.type,
        "formio-input-value": e.changed.component.value,
        "formio-input-key": e.changed.component.key,
        "formio-input-label-raw": e.changed.component.label,
        "formio-version": formModified,
        "formio-category": `Form: ${formTitle}`,
        "formio-action": "Value changed"
      });
    }
  });
  form.on("submitDone", function () {
    if (formConfirmation) window.location.href = formConfirmation;
  });
});

/***/ }),

/***/ "./src/config/createForm.options.js":
/***/ ((module) => {

module.exports = {
  // Turn off default buttons
  buttonSettings: {
    showCancel: false,
    showPrevious: true,
    showNext: true,
    showSubmit: true
  },
  i18n: {
    en: {
      pattern: "Must use the format shown",
      error: '<h2><span class="fa fa-exclamation-triangle"></span> Please check your answers</h2>'
    }
  }
};

/***/ }),

/***/ "./src/config/storybook.options.js":
/***/ ((module) => {

module.exports = {
  builder: {
    builder: {
      basic: {
        default: false
      },
      custom: {
        title: "Custom",
        default: true,
        weight: -10
      }
    }
  }
};

/***/ }),

/***/ "./src/helpers/FormioLoader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ initFormio),
  "D": () => (/* reexport */ initFormioInstance)
});

// EXTERNAL MODULE: ./src/config/createForm.options.js
var createForm_options = __webpack_require__("./src/config/createForm.options.js");
var createForm_options_default = /*#__PURE__*/__webpack_require__.n(createForm_options);
// EXTERNAL MODULE: ./src/config/createForm.controller.js
var createForm_controller = __webpack_require__("./src/config/createForm.controller.js");
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/FormioLoader.js

 // polyfill plugin function to fix the namespace option doesn't pass to Formio.makeRequest

var NamespacePlugin = {
  priority: 0,
  preRequest: function (requestArgs) {
    if (requestArgs.formio) {
      var formioInstance = document.querySelector(`[data-formio-form-url="${requestArgs.formio.formUrl}"]`);

      if (formioInstance) {
        requestArgs.formio = JSON.parse(formioInstance.dataset.formio);
        requestArgs.opts.formio = requestArgs.formio;
      }

      if (requestArgs.formio.options) requestArgs.opts.namespace = requestArgs.formio.options.namespace;
    }

    return Promise.resolve(null);
  }
};

var initFormioInstance = function (elem, opts) {
  // if already initiated, reject
  if (elem.dataset.formioFormUrl) return; // if doesn't have required options, reject

  if (!opts.envUrl || !opts.projectName || !opts.formName) {
    console.warn("Require envUrl, projectName, formName to initiate the form.", opts);
    return;
  }
  /*
   * setup config
   */


  var baseUrl = `https://${opts.envUrl.trim()}`;
  var formName = ""; // Check if value is true/exists and is numeric

  if (opts.form_revision) {
    formName = `${opts.formName}/v/${opts.form_revision}`;
  } else {
    formName = opts.formName;
  }

  var projectName = opts.projectName;
  var namespace = opts.namespace || `formio-${projectName}`;
  var formUrl = `${baseUrl}/${projectName}/${formName}`;
  /*
   * init formio instance
   */

  var formio = new Formio(formUrl, {
    base: baseUrl,
    project: `${baseUrl}/${projectName}`,
    namespace: namespace
  });
  elem.dataset.formio = JSON.stringify(formio);
  elem.dataset.formioFormUrl = formUrl;
  /*
   * load formio form
   */

  var defaultOptions = Object.assign({}, (createForm_options_default()), {
    formio: formio,
    namespace: formio.options.namespace
  });
  var combinedOptions = Object.assign({}, defaultOptions, typeof opts.createFormOptions === "function" && opts.createFormOptions({
    envUrl: opts.envUrl,
    projectName: opts.projectName,
    formName: opts.formName,
    defaultOptions: defaultOptions,
    elem: elem
  })); // register plugin

  if (!Formio.getPlugin("namespacePolyfill")) Formio.registerPlugin(NamespacePlugin, "namespacePolyfill");
  Formio.createForm(elem, formUrl, combinedOptions).then(function (form) {
    form.formio = formio;
    form.options.formio = formio;
    var callbackProps = {
      form: form,
      elem: elem,
      envUrl: opts.envUrl,
      projectName: opts.projectName,
      formName: opts.formName
    };

    if (typeof opts.createFormCallback === "function") {
      // call custom callback hook
      opts.createFormCallback(callbackProps);
    } else {
      // Force new tab on formlinks
      $(elem).on("click", `a`, function (e) {
        e.target.target = "_blank";
      });
    } // default controller


    (0,createForm_controller/* default */.Z)(callbackProps); // call custom hook controller

    if (typeof opts.createFormController === "function") {
      opts.createFormController(callbackProps);
    }
  });
};

var customiseErrorMessage = function () {
  var newFunc = Formio.Form.prototype.errorForm.bind({});

  Formio.Form.prototype.errorForm = function (err) {
    if (typeof err === "string" && err.indexOf("Could not connect to API server") !== -1 || typeof err === "object" && err.networkError) {
      console.warn("formio error: ", err);
      return newFunc("This form is currently unavailable due to maintenance. Please try again later.");
    }

    return newFunc(err);
  };
};

var initFormio = function () {
  // Init form
  Formio.icons = "fontawesome";
  if (premium) Formio.use(premium); // custom error message

  customiseErrorMessage();
  document.querySelectorAll("[data-formio]").forEach(function (elem) {
    var _elem$dataset = elem.dataset,
        formioProjectName = _elem$dataset.formioProjectName,
        formioFormName = _elem$dataset.formioFormName,
        formioEnvUrl = _elem$dataset.formioEnvUrl,
        formioPdfDownload = _elem$dataset.formioPdfDownload,
        formioFormConfirmation = _elem$dataset.formioFormConfirmation,
        formioFormRevision = _elem$dataset.formioFormRevision,
        formioNamespace = _elem$dataset.formioNamespace,
        formioCreateformOptions = _elem$dataset.formioCreateformOptions,
        formioCreateformController = _elem$dataset.formioCreateformController,
        formioCreateformCallback = _elem$dataset.formioCreateformCallback;
    initFormioInstance(elem, {
      projectName: formioProjectName,
      formName: formioFormName,
      envUrl: formioEnvUrl,
      pdfDownload: formioPdfDownload,
      formConfirmation: formioFormConfirmation,
      formRevision: formioFormRevision,
      namespace: formioNamespace,
      createFormOptions: window[formioCreateformOptions],
      createFormController: window[formioCreateformController],
      createFormCallback: window[formioCreateformCallback]
    });
  });
};


;// CONCATENATED MODULE: ./src/helpers/FormioLoader/index.js


/***/ }),

/***/ "./src/utils/indent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ indent)
/* harmony export */ });
function indent(str, numOfIndents) {
  var spacesPerIndent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var newStr = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join("\t"));
  var newNumOfIndents = new Array(spacesPerIndent + 1 || 0).join(" "); // re-use

  return spacesPerIndent ? newStr.replace(/\t+/g, function (tabs) {
    return tabs.replace(/./g, newNumOfIndents);
  }) : newStr;
}

/***/ }),

/***/ "./src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S$": () => (/* reexport */ createBuilder),
  "Np": () => (/* reexport */ createForm),
  "WY": () => (/* reexport */ indent/* indent */.W)
});

// UNUSED EXPORTS: getComponents, testWait

;// CONCATENATED MODULE: ./src/utils/createBuilder.js
var createBuilder = function (_ref) {
  var _ref$form = _ref.form,
      form = _ref$form === void 0 ? {} : _ref$form,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      controller = _ref.controller;
  var div = document.createElement("div");
  setTimeout(function () {
    Formio.builder(div, form, options).then(controller);
  }, 100);
  return div;
};
// EXTERNAL MODULE: ./src/config/createForm.options.js
var createForm_options = __webpack_require__("./src/config/createForm.options.js");
var createForm_options_default = /*#__PURE__*/__webpack_require__.n(createForm_options);
// EXTERNAL MODULE: ./src/config/createForm.controller.js
var createForm_controller = __webpack_require__("./src/config/createForm.controller.js");
;// CONCATENATED MODULE: ./src/utils/createForm.js


var createForm = function (_ref) {
  var _ref$form = _ref.form,
      form = _ref$form === void 0 ? {} : _ref$form,
      options = _ref.options,
      controller = _ref.controller;
  var div = document.createElement("div");
  div.className = "qg-forms-v2";
  setTimeout(function () {
    Formio.createForm(div, form, Object.assign({}, (createForm_options_default()), options)).then(function (thisForm) {
      (0,createForm_controller/* default */.Z)({
        form: thisForm,
        elem: div
      });
      if (typeof controller === "function") controller(thisForm);
    });
  }, 100);
  return div;
};
// EXTERNAL MODULE: ./src/utils/indent.js
var indent = __webpack_require__("./src/utils/indent.js");
;// CONCATENATED MODULE: ./src/utils/index.js






/***/ }),

/***/ "./storybook-init-framework-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _storybook_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@storybook/html/dist/esm/client/index.js");


/***/ }),

/***/ "./src/components/CustomHeader/CustomHeader.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "builder": () => (/* binding */ builder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/index.js");
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
    title: "Components/CustomHeader",
    mdxType: "Meta"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1", {
    "id": "customheader"
  }, `CustomHeader`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This is a demo component, will be removed before release to production.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "renderer"
  }, `Renderer`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Just a presentation component.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
    mdxType: "Canvas"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Story */ .oG, {
    name: "Renderer",
    mdxType: "Story"
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createForm */ .Np)({
      form: {
        components: [{
          type: "customheader",
          key: "customheader",
          tag: "h1",
          content: "This is a custom header"
        }]
      }
    });
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "builder"
  }, `Builder`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This component can be drag and drop from the Form.io builder sidebar `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `custom`), ` group.
You can preview the component's settings in the example below.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
    mdxType: "Canvas"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Story */ .oG, {
    name: "Builder",
    mdxType: "Story"
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createBuilder */ .S$)({
      form: {
        components: [{
          type: "customheader",
          key: "customheader",
          tag: "h1",
          content: "This is a custom header"
        }]
      }
    });
  })));
}

;
MDXContent.isMDXComponent = true;
var renderer = function () {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createForm */ .Np)({
    form: {
      components: [{
        type: "customheader",
        key: "customheader",
        tag: "h1",
        content: "This is a custom header"
      }]
    }
  });
};
renderer.storyName = 'Renderer';
renderer.parameters = {
  storySource: {
    source: '() => createForm({\n  form: {\n    components: [{\n      type: \"customheader\",\n      key: \"customheader\",\n      tag: \"h1\",\n      content: \"This is a custom header\"\n    }]\n  }\n})'
  }
};
var builder = function () {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createBuilder */ .S$)({
    form: {
      components: [{
        type: "customheader",
        key: "customheader",
        tag: "h1",
        content: "This is a custom header"
      }]
    }
  });
};
builder.storyName = 'Builder';
builder.parameters = {
  storySource: {
    source: '() => createBuilder({\n  form: {\n    components: [{\n      type: \"customheader\",\n      key: \"customheader\",\n      tag: \"h1\",\n      content: \"This is a custom header\"\n    }]\n  }\n})'
  }
};
var componentMeta = {
  title: 'Components/CustomHeader',
  includeStories: ["renderer", "builder"]
};
var mdxStoryNameToKey = {
  "Renderer": "renderer",
  "Builder": "builder"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .AddContext */ .aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXContent, null));
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ "./src/components/CustomTextfield/CustomTextfield.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "builder": () => (/* binding */ builder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/index.js");
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
    title: "Components/CustomTextfield",
    mdxType: "Meta"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1", {
    "id": "customtextfield"
  }, `CustomTextfield`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This is a demo component, will be removed before release to production.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "renderer"
  }, `Renderer`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Below is an interactive example, please check the form data output in the console log in browser's inspector.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
    mdxType: "Canvas"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Story */ .oG, {
    name: "Renderer",
    mdxType: "Story"
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createForm */ .Np)({
      form: {
        components: [{
          type: "customtextfield",
          key: "customtextfield",
          label: "Custom textfield label"
        }, {
          type: "button",
          key: "submit",
          label: "Submit",
          action: "submit"
        }]
      },
      controller: function (formio) {
        formio.on("submit", function (e) {
          console.info("submit", e.data);
        });
        formio.on("change", function (e) {
          console.info("change", e.data);
        });
      }
    });
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "builder"
  }, `Builder`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This component can be drag and drop from the Form.io builder sidebar `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `custom`), ` group.
You can preview the component's settings in the example below.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
    mdxType: "Canvas"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Story */ .oG, {
    name: "Builder",
    mdxType: "Story"
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createBuilder */ .S$)({
      form: {
        components: [{
          type: "customtextfield",
          key: "customtextfield",
          label: "Custom textfield label"
        }]
      }
    });
  })));
}

;
MDXContent.isMDXComponent = true;
var renderer = function () {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createForm */ .Np)({
    form: {
      components: [{
        type: "customtextfield",
        key: "customtextfield",
        label: "Custom textfield label"
      }, {
        type: "button",
        key: "submit",
        label: "Submit",
        action: "submit"
      }]
    },
    controller: function (formio) {
      formio.on("submit", function (e) {
        console.info("submit", e.data);
      });
      formio.on("change", function (e) {
        console.info("change", e.data);
      });
    }
  });
};
renderer.storyName = 'Renderer';
renderer.parameters = {
  storySource: {
    source: '() => createForm({\n  form: {\n    components: [{\n      type: \"customtextfield\",\n      key: \"customtextfield\",\n      label: \"Custom textfield label\"\n    }, {\n      type: \"button\",\n      key: \"submit\",\n      label: \"Submit\",\n      action: \"submit\"\n    }]\n  },\n  controller: formio => {\n    formio.on(\"submit\", e => {\n      console.info(\"submit\", e.data);\n    });\n    formio.on(\"change\", e => {\n      console.info(\"change\", e.data);\n    });\n  }\n})'
  }
};
var builder = function () {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createBuilder */ .S$)({
    form: {
      components: [{
        type: "customtextfield",
        key: "customtextfield",
        label: "Custom textfield label"
      }]
    }
  });
};
builder.storyName = 'Builder';
builder.parameters = {
  storySource: {
    source: '() => createBuilder({\n  form: {\n    components: [{\n      type: \"customtextfield\",\n      key: \"customtextfield\",\n      label: \"Custom textfield label\"\n    }]\n  }\n})'
  }
};
var componentMeta = {
  title: 'Components/CustomTextfield',
  includeStories: ["renderer", "builder"]
};
var mdxStoryNameToKey = {
  "Renderer": "renderer",
  "Builder": "builder"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .AddContext */ .aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXContent, null));
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ "./src/components/PlsPlusAddress/PlsPlusAddress.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "builder": () => (/* binding */ builder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/index.js");
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
    title: "Components/PlsPlusAddress",
    mdxType: "Meta"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1", {
    "id": "plsplusaddress"
  }, `PlsPlusAddress`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This address component utilise the `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
    parentName: "p",
    "href": "https://servicesmadesimpler.govnet.qld.gov.au/wiki/display/PUB/DNRE+qld+only+address+lookup+service",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `Property Location Service Plus PLSPlus QG Version RESTFUL api`), `, provides a free of charge address lookup service.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `User needs to obtain a franchise API key for using this component, by entering it in the `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Provider`), ` options in the component builder, please contact `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
    parentName: "p",
    "href": "mailto:qol.development@smartservice.qld.gov.au"
  }, `qol.development@smartservice.qld.gov.au`), `(TBC) to request an API key.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "renderer"
  }, `Renderer`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Below is an interactive example, please check the form data output in the console log in browser's inspector.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
    mdxType: "Canvas"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Story */ .oG, {
    name: "Renderer",
    mdxType: "Story"
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createForm */ .Np)({
      form: {
        components: [{
          type: "plsplusaddress",
          key: "plsplusaddress",
          label: "PlsPlus Address field",
          providerOptions: {
            params: {
              apiKey: "formiotest"
            }
          }
        }, {
          type: "button",
          key: "submit",
          label: "Submit",
          action: "submit"
        }]
      },
      controller: function (formio) {
        formio.on("submit", function (e) {
          console.info("submit", e.data);
        });
        formio.on("change", function (e) {
          console.info("change", e.data);
        });
      }
    });
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "builder"
  }, `Builder`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This component can be drag and drop from the Form.io builder sidebar `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `custom`), ` group.
You can preview the component's settings in the example below.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
    mdxType: "Canvas"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Story */ .oG, {
    name: "Builder",
    mdxType: "Story"
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createBuilder */ .S$)({
      form: {
        components: [{
          type: "plsplusaddress",
          key: "plsplusaddress",
          label: "PlsPlus Address field",
          tree: true,
          providerOptions: {
            params: {
              apiKey: "formiotest"
            }
          }
        }, {
          type: "button",
          key: "submit",
          label: "Submit",
          action: "submit"
        }]
      }
    });
  })));
}

;
MDXContent.isMDXComponent = true;
var renderer = function () {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createForm */ .Np)({
    form: {
      components: [{
        type: "plsplusaddress",
        key: "plsplusaddress",
        label: "PlsPlus Address field",
        providerOptions: {
          params: {
            apiKey: "formiotest"
          }
        }
      }, {
        type: "button",
        key: "submit",
        label: "Submit",
        action: "submit"
      }]
    },
    controller: function (formio) {
      formio.on("submit", function (e) {
        console.info("submit", e.data);
      });
      formio.on("change", function (e) {
        console.info("change", e.data);
      });
    }
  });
};
renderer.storyName = 'Renderer';
renderer.parameters = {
  storySource: {
    source: '() => createForm({\n  form: {\n    components: [{\n      type: \"plsplusaddress\",\n      key: \"plsplusaddress\",\n      label: \"PlsPlus Address field\",\n      providerOptions: {\n        params: {\n          apiKey: \"formiotest\"\n        }\n      }\n    }, {\n      type: \"button\",\n      key: \"submit\",\n      label: \"Submit\",\n      action: \"submit\"\n    }]\n  },\n  controller: formio => {\n    formio.on(\"submit\", e => {\n      console.info(\"submit\", e.data);\n    });\n    formio.on(\"change\", e => {\n      console.info(\"change\", e.data);\n    });\n  }\n})'
  }
};
var builder = function () {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createBuilder */ .S$)({
    form: {
      components: [{
        type: "plsplusaddress",
        key: "plsplusaddress",
        label: "PlsPlus Address field",
        tree: true,
        providerOptions: {
          params: {
            apiKey: "formiotest"
          }
        }
      }, {
        type: "button",
        key: "submit",
        label: "Submit",
        action: "submit"
      }]
    }
  });
};
builder.storyName = 'Builder';
builder.parameters = {
  storySource: {
    source: '() => createBuilder({\n  form: {\n    components: [{\n      type: \"plsplusaddress\",\n      key: \"plsplusaddress\",\n      label: \"PlsPlus Address field\",\n      tree: true,\n      providerOptions: {\n        params: {\n          apiKey: \"formiotest\"\n        }\n      }\n    }, {\n      type: \"button\",\n      key: \"submit\",\n      label: \"Submit\",\n      action: \"submit\"\n    }]\n  }\n})'
  }
};
var componentMeta = {
  title: 'Components/PlsPlusAddress',
  includeStories: ["renderer", "builder"]
};
var mdxStoryNameToKey = {
  "Renderer": "renderer",
  "Builder": "builder"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .AddContext */ .aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXContent, null));
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ "./src/examples/SimpleWizard/SimpleWizard.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SimpleWizard_stories),
  "simpleWizard": () => (/* binding */ simpleWizard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/esm/index.js
var dist_esm = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
// EXTERNAL MODULE: ./src/helpers/FormioLoader/index.js + 1 modules
var FormioLoader = __webpack_require__("./src/helpers/FormioLoader/index.js");
;// CONCATENATED MODULE: ./src/examples/SimpleWizard/SimpleWizard.js

function SimpleWizard() {
  var div = document.createElement("div");
  setTimeout(function () {
    FormioLoader/* initFormio */.x();
  });
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="dev-svcwlpuksmwawwk" 
          data-formio-form-name="simpleWizard" 
          data-formio-env-url="api.forms.platforms.qld.gov.au" 
        ></div>
      `;
  return div;
}
// EXTERNAL MODULE: ./src/utils/index.js + 2 modules
var utils = __webpack_require__("./src/utils/index.js");
;// CONCATENATED MODULE: ./src/examples/SimpleWizard/SimpleWizard.js


function SimpleWizard_SimpleWizard() {
  const div = document.createElement("div");
  setTimeout(() => {
    FormioLoader/* initFormio */.x();
  });
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="dev-svcwlpuksmwawwk" 
          data-formio-form-name="simpleWizard" 
          data-formio-env-url="api.forms.platforms.qld.gov.au" 
        ></div>
      `;
  return div;
}

;// CONCATENATED MODULE: ./src/examples/SimpleWizard/SimpleWizard.code.js
 // eslint-disable-next-line import/no-unresolved, import/extensions


var simpleWizardCode = `
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
</head>
<body>
  <script>
${(0,utils/* indent */.WY)(SimpleWizard_SimpleWizard.toString().replaceAll("_helpers_FormioLoader__WEBPACK_IMPORTED_MODULE_0__", "FormLoader"), 2)}
    FormioScript.init().then(() => {
      const div = createSimpleWizard();
      document.body.append(div);
    });
  </script>
</body>
`;
;// CONCATENATED MODULE: ./src/examples/SimpleWizard/SimpleWizard.stories.mdx
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,esm/* mdx */.kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,esm/* mdx */.kt)(dist_esm/* Meta */.h_, {
    title: "Examples/SimpleWizard",
    mdxType: "Meta"
  }), (0,esm/* mdx */.kt)("h1", {
    "id": "simple-wizard-example"
  }, `Simple wizard example`), (0,esm/* mdx */.kt)("p", null, `This example show the default presentation of a wizard form.`), (0,esm/* mdx */.kt)("p", null, `The demo can be reproduced with `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "?path=/docs/helpers-formioscript--page"
  }, `FormioScript`), ` to lazy-load the Formio library and scripts.`), (0,esm/* mdx */.kt)(dist_esm/* Canvas */.Xz, {
    withSource: "open",
    mdxType: "Canvas"
  }, (0,esm/* mdx */.kt)(dist_esm/* Story */.oG, {
    name: "simpleWizard",
    parameters: {
      docs: {
        source: {
          code: simpleWizardCode
        }
      }
    },
    mdxType: "Story"
  }, function () {
    return SimpleWizard();
  })));
}

;
MDXContent.isMDXComponent = true;
var simpleWizard = function () {
  return SimpleWizard();
};
simpleWizard.storyName = 'simpleWizard';
simpleWizard.parameters = Object.assign({
  storySource: {
    source: '() => SimpleWizard()'
  }
}, {
  docs: {
    source: {
      code: simpleWizardCode
    }
  }
});
var componentMeta = {
  title: 'Examples/SimpleWizard',
  includeStories: ["simpleWizard"]
};
var mdxStoryNameToKey = {
  "simpleWizard": "simpleWizard"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,esm/* mdx */.kt)(dist_esm/* AddContext */.aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,esm/* mdx */.kt)(MDXContent, null));
  }
});
/* harmony default export */ const SimpleWizard_stories = (componentMeta);

/***/ }),

/***/ "./src/examples/SingleSignOn/SingleSignOn.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SingleSignOn_stories),
  "ssoDemo": () => (/* binding */ ssoDemo)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/esm/index.js
var dist_esm = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
// EXTERNAL MODULE: ./src/stories/assets/SSO-HighLevel.png
var SSO_HighLevel = __webpack_require__("./src/stories/assets/SSO-HighLevel.png");
// EXTERNAL MODULE: ./src/stories/assets/SSO-UserFlow.png
var SSO_UserFlow = __webpack_require__("./src/stories/assets/SSO-UserFlow.png");
// EXTERNAL MODULE: ./src/helpers/FormioLoader/index.js + 1 modules
var FormioLoader = __webpack_require__("./src/helpers/FormioLoader/index.js");
;// CONCATENATED MODULE: ./src/examples/SingleSignOn/SingleSignOn.js

function SingleSignOn() {
  var formioApiDomain = "api.forms.platforms.qld.gov.au";
  var formioProjectId = "ncwawujlwylhrfy"; // configure in squiz component

  var formioLoginFormId = "oidcsso"; // configure in squiz component

  var formioServiceFormId = "devauthformstorybook"; // configure in squiz component

  var namespace = `formio_${formioProjectId}`;
  var div = document.createElement("div");
  var oidcform;
  var formioDiv;

  var resetDiv = function () {
    div.innerHTML = `
    <div id="oidc_form"></div>
    <div id="formio"></div>
    `;
    oidcform = div.querySelector("#oidc_form");
    formioDiv = div.querySelector("#formio");
  };

  var appendSpinner = function (parentElement) {
    parentElement.innerHTML = `<img src="https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"/>`;
  };

  var pickForm = function () {
    var user = Formio.getUser({
      namespace: namespace
    });
    console.info("user", user);

    if (user) {
      appendSpinner(formioDiv); // eslint-disable-next-line no-use-before-define

      realFormSetup();
    } else {
      appendSpinner(oidcform); // eslint-disable-next-line no-use-before-define

      loginFormSetup();
    }
  };

  var logout = function (form) {
    var _user$data;

    // currently the logout endpoint has cors issue, otherwise could using the approach below without reload the page:
    // Formio.makeStaticRequest(
    //   "https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout",
    //   "GET",
    //   null,
    //   { namespace }
    // ).then(() => {
    //   Formio.logout(form.formio, {
    //     namespace,
    //   }).then(() => {
    //     resetDiv();
    //     pickForm();
    //   });
    // });
    var user = Formio.getUser({
      namespace: namespace
    });
    var param = "";

    if (user !== null && user !== void 0 && (_user$data = user.data) !== null && _user$data !== void 0 && _user$data.idp_type && user.data.idp_type === "employee") {
      param = "?initiating_idp=o365";
    }

    Formio.logout(form.formio, {
      namespace: namespace
    }).then(function () {
      // window.location.reload();
      var popup = window.open(`https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout${param}`, "_logout", "location=no,height=100,width=100,scrollbars=no,status=no"); // can't use addEventListener to check pop is loaded if they are different domains due to CORS
      // popup.addEventListener(
      //   "load",
      //   () => {
      //     popup.close();
      //   },
      //   false
      // );
      // settle to use timeout for now

      setTimeout(function () {
        popup.close();
        resetDiv();
        pickForm();
      }, 2000);
    });
  };

  var realFormSetup = function () {
    console.info("Found user, redirecting to the form...");

    var createFormController = function (_ref) {
      var form = _ref.form;
      // This section of code is the "Form Controller"
      form.on("submitDone", function submitDoneCleanup(submission) {
        console.info("submission", submission);
        logout(form);
      });
      form.on("logout", function () {
        logout(form);
      });
    };

    FormioLoader/* initFormioInstance */.D(formioDiv, {
      projectName: formioProjectId,
      formName: formioServiceFormId,
      envUrl: formioApiDomain,
      namespace: namespace,
      createFormController: createFormController
    });
  };

  var loginFormSetup = function () {
    console.info("No current user, rendering oidc sso form...");

    var createFormController = function (_ref2) {
      var form = _ref2.form;
      console.info(`Loaded form: ${form.formio.formUrl}`, form); // console.info(JSON.stringify(form.formio));

      form.on("submitDone", function (submission) {
        console.info("submission", submission);
        form.formio.currentUser({
          namespace: namespace
        }).then(function (userDetails) {
          // clean up URL paramters from submission or logout redirect
          console.info("userDetails", userDetails);
          resetDiv();
          pickForm();
        });
      });
    };

    FormioLoader/* initFormioInstance */.D(oidcform, {
      projectName: formioProjectId,
      formName: formioLoginFormId,
      envUrl: formioApiDomain,
      namespace: namespace,
      createFormController: createFormController
    });
  };

  resetDiv();
  setTimeout(function () {
    pickForm();
  });
  return div;
}
// EXTERNAL MODULE: ./src/utils/index.js + 2 modules
var utils = __webpack_require__("./src/utils/index.js");
;// CONCATENATED MODULE: ./src/examples/SingleSignOn/SingleSignOn.js


function SingleSignOn_SingleSignOn() {
  const formioApiDomain = "api.forms.platforms.qld.gov.au";
  const formioProjectId = "ncwawujlwylhrfy"; // configure in squiz component
  const formioLoginFormId = "oidcsso"; // configure in squiz component
  const formioServiceFormId = "devauthformstorybook"; // configure in squiz component
  const namespace = `formio_${formioProjectId}`;
  const div = document.createElement("div");
  let oidcform;
  let formioDiv;
  const resetDiv = () => {
    div.innerHTML = `
    <div id="oidc_form"></div>
    <div id="formio"></div>
    `;

    oidcform = div.querySelector("#oidc_form");
    formioDiv = div.querySelector("#formio");
  };

  const appendSpinner = (parentElement) => {
    parentElement.innerHTML = `<img src="https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"/>`;
  };

  const pickForm = () => {
    const user = Formio.getUser({ namespace });
    console.info("user", user);
    if (user) {
      appendSpinner(formioDiv);
      // eslint-disable-next-line no-use-before-define
      realFormSetup();
    } else {
      appendSpinner(oidcform);
      // eslint-disable-next-line no-use-before-define
      loginFormSetup();
    }
  };

  const logout = (form) => {
    // currently the logout endpoint has cors issue, otherwise could using the approach below without reload the page:
    // Formio.makeStaticRequest(
    //   "https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout",
    //   "GET",
    //   null,
    //   { namespace }
    // ).then(() => {
    //   Formio.logout(form.formio, {
    //     namespace,
    //   }).then(() => {
    //     resetDiv();
    //     pickForm();
    //   });
    // });
    const user = Formio.getUser({ namespace });
    let param = "";
    if (user?.data?.idp_type && user.data.idp_type === "employee") {
      param = "?initiating_idp=o365";
    }

    Formio.logout(form.formio, {
      namespace,
    }).then(() => {
      // window.location.reload();
      const popup = window.open(
        `https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout${param}`,
        "_logout",
        "location=no,height=100,width=100,scrollbars=no,status=no"
      );
      // can't use addEventListener to check pop is loaded if they are different domains due to CORS
      // popup.addEventListener(
      //   "load",
      //   () => {
      //     popup.close();
      //   },
      //   false
      // );
      // settle to use timeout for now
      setTimeout(() => {
        popup.close();
        resetDiv();
        pickForm();
      }, 2000);
    });
  };

  const realFormSetup = () => {
    console.info("Found user, redirecting to the form...");

    const createFormController = ({ form }) => {
      // This section of code is the "Form Controller"
      form.on("submitDone", function submitDoneCleanup(submission) {
        console.info("submission", submission);
        logout(form);
      });

      form.on("logout", () => {
        logout(form);
      });
    };
    FormioLoader/* initFormioInstance */.D(formioDiv, {
      projectName: formioProjectId,
      formName: formioServiceFormId,
      envUrl: formioApiDomain,
      namespace,
      createFormController,
    });
  };

  const loginFormSetup = () => {
    console.info("No current user, rendering oidc sso form...");

    const createFormController = ({ form }) => {
      console.info(`Loaded form: ${form.formio.formUrl}`, form);
      // console.info(JSON.stringify(form.formio));
      form.on("submitDone", (submission) => {
        console.info("submission", submission);

        form.formio.currentUser({ namespace }).then((userDetails) => {
          // clean up URL paramters from submission or logout redirect
          console.info("userDetails", userDetails);
          resetDiv();
          pickForm();
        });
      });
    };

    FormioLoader/* initFormioInstance */.D(oidcform, {
      projectName: formioProjectId,
      formName: formioLoginFormId,
      envUrl: formioApiDomain,
      namespace,
      createFormController,
    });
  };

  resetDiv();

  setTimeout(() => {
    pickForm();
  });

  return div;
}

;// CONCATENATED MODULE: ./src/examples/SingleSignOn/SingleSignOn.code.js
 // eslint-disable-next-line import/no-unresolved, import/extensions


var singleSignOnCode = `
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
</head>
<body>
  <script>
${(0,utils/* indent */.WY)(SingleSignOn_SingleSignOn.toString().replaceAll("_helpers_FormioLoader__WEBPACK_IMPORTED_MODULE_0__", "FormLoader"), 2)}
    FormioScript.init().then(() => {
      const div = createSSoForm();
      document.body.append(div);
    });
  </script>
</body>
`;
;// CONCATENATED MODULE: ./src/examples/SingleSignOn/SingleSignOn.stories.mdx
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */







var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,esm/* mdx */.kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,esm/* mdx */.kt)(dist_esm/* Meta */.h_, {
    title: "Examples/SingleSignOn",
    mdxType: "Meta"
  }), (0,esm/* mdx */.kt)("h1", {
    "id": "single-signon"
  }, `Single SignOn`), (0,esm/* mdx */.kt)("p", null, `To allow sso on FormIO, there are some extra hoops you need to jump through, there may also be a way to have it half way through your form.`), (0,esm/* mdx */.kt)("p", null, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://servicesmadesimpler.govnet.qld.gov.au/wiki/display/QOL/Form.io+OICD+IDB+integration+POC+with+Freight+Pass",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `https://servicesmadesimpler.govnet.qld.gov.au/wiki/display/QOL/Form.io+OICD+IDB+integration+POC+with+Freight+Pass`)), (0,esm/* mdx */.kt)("h2", {
    "id": "high-level-architecture"
  }, `High Level Architecture`), (0,esm/* mdx */.kt)("p", null, `Below is a high level diagram of Form.io integrating with the IDB and Freight Pass`), (0,esm/* mdx */.kt)("img", {
    src: SSO_HighLevel,
    alt: "SSO High Level",
    width: "680"
  }), (0,esm/* mdx */.kt)("h2", {
    "id": "process-flow"
  }, `Process Flow`), (0,esm/* mdx */.kt)("p", null, `Below is a high level process flow of Form.io integrating with the IDB and Freight Pass`), (0,esm/* mdx */.kt)("h3", {
    "id": "definitions"
  }, `Definitions`), (0,esm/* mdx */.kt)("p", null, `Login Form : `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://www.qld.gov.au/dev/steve/idb-poc-dev-use-only-login-to-freight-and-logistics-f-pass",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `https://www.qld.gov.au/dev/steve/idb-poc-dev-use-only-login-to-freight-and-logistics-f-pass`)), (0,esm/* mdx */.kt)("p", null, `Main Form : `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://www.qld.gov.au/dev/steve/idb-poc-dev-use-only-queensland-border-declaration-pass-freight-and-logistics-f-pass",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `https://www.qld.gov.au/dev/steve/idb-poc-dev-use-only-queensland-border-declaration-pass-freight-and-logistics-f-pass`)), (0,esm/* mdx */.kt)("img", {
    src: SSO_UserFlow,
    alt: "SSO User Flow",
    width: "1680"
  }), (0,esm/* mdx */.kt)("h2", {
    "id": "demo"
  }, `Demo`), (0,esm/* mdx */.kt)("p", null, `The following demo shows the SSO form in a single page application.`), (0,esm/* mdx */.kt)("p", null, `The demo can be reproduced with `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "?path=/docs/helpers-formioscript--page"
  }, `FormioScript`), ` to lazy-load the Formio library and scripts.`), (0,esm/* mdx */.kt)(dist_esm/* Canvas */.Xz, {
    withSource: "open",
    mdxType: "Canvas"
  }, (0,esm/* mdx */.kt)(dist_esm/* Story */.oG, {
    name: "ssoDemo",
    parameters: {
      docs: {
        source: {
          code: singleSignOnCode,
          language: "html"
        }
      }
    },
    mdxType: "Story"
  }, function () {
    return SingleSignOn();
  })));
}

;
MDXContent.isMDXComponent = true;
var ssoDemo = function () {
  return SingleSignOn();
};
ssoDemo.storyName = 'ssoDemo';
ssoDemo.parameters = Object.assign({
  storySource: {
    source: '() => SingleSignOn()'
  }
}, {
  docs: {
    source: {
      code: singleSignOnCode,
      language: "html"
    }
  }
});
var componentMeta = {
  title: 'Examples/SingleSignOn',
  includeStories: ["ssoDemo"]
};
var mdxStoryNameToKey = {
  "ssoDemo": "ssoDemo"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,esm/* mdx */.kt)(dist_esm/* AddContext */.aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,esm/* mdx */.kt)(MDXContent, null));
  }
});
/* harmony default export */ const SingleSignOn_stories = (componentMeta);

/***/ }),

/***/ "./src/helpers/FormioLoader/FormioLoader.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "customCreateFormController": () => (/* binding */ customCreateFormController),
  "customCreateFormOptions": () => (/* binding */ customCreateFormOptions),
  "default": () => (/* binding */ FormioLoader_stories),
  "initFormio": () => (/* binding */ initFormio),
  "initFormioInstance": () => (/* binding */ initFormioInstance)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/esm/index.js
var dist_esm = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
// EXTERNAL MODULE: ./src/utils/indent.js
var indent = __webpack_require__("./src/utils/indent.js");
// EXTERNAL MODULE: ./src/helpers/FormioLoader/index.js + 1 modules
var FormioLoader = __webpack_require__("./src/helpers/FormioLoader/index.js");
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomController/CustomController.js


function CustomController() {
  const customCtrl = ({ form }) => {
    form.on("change", (e) => {
      // you can see the data object in the browser's inspector whenever you change the field value.
      console.info("onChange", e.data);
    });
  };
  const elem = document.getElementById("formio-controller");
  FormioLoader/* initFormioInstance */.D(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "testing2",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
    createFormController: customCtrl,
  });
}

;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomController/CustomController.template.js
var customControllerTemplate = `
<div id="formio-controller" class="qg-forms-v2" ></div>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomController/CustomController.code.js



var customControllerCode = `
${customControllerTemplate}
<script>
${(0,indent/* indent */.W)(CustomController.toString().replaceAll("___WEBPACK_IMPORTED_MODULE_0__", "FormioLoader"), 1)}
  CustomController();
</script>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomController/CustomController.js

function CustomController_CustomController() {
  var customCtrl = function (_ref) {
    var form = _ref.form;
    form.on("change", function (e) {
      // you can see the data object in the browser's inspector whenever you change the field value.
      console.info("onChange", e.data);
    });
  };

  var elem = document.getElementById("formio-controller");
  FormioLoader/* initFormioInstance */.D(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "testing2",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
    createFormController: customCtrl
  });
}
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomController/index.js



;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomOptions/CustomOptions.js


function CustomOptions() {
  function customCtrl({ defaultOptions }) {
    // you can see the defaultOptions in the browser's inspector, and possible to manipulate and return it.
    console.info("defaultOptions:", defaultOptions);
    return {
      readOnly: true,
    };
  }
  const elem = document.getElementById("formio-options");
  FormioLoader/* initFormioInstance */.D(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "testing1",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
    createFormOptions: customCtrl,
  });
}

;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomOptions/CustomOptions.template.js
var customOptionsTemplate = `
<div id="formio-options" class="qg-forms-v2" ></div>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomOptions/CustomOptions.code.js



var customOptionsCode = `
${customOptionsTemplate}
<script>
${(0,indent/* indent */.W)(CustomOptions.toString().replaceAll("___WEBPACK_IMPORTED_MODULE_0__", "FormioLoader"), 1)}
  CustomOptions();
</script>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomOptions/CustomOptions.js

function CustomOptions_CustomOptions() {
  function customCtrl(_ref) {
    var defaultOptions = _ref.defaultOptions;
    // you can see the defaultOptions in the browser's inspector, and possible to manipulate and return it.
    console.info("defaultOptions:", defaultOptions);
    return {
      readOnly: true
    };
  }

  var elem = document.getElementById("formio-options");
  FormioLoader/* initFormioInstance */.D(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "testing1",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
    createFormOptions: customCtrl
  });
}
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/CustomOptions/index.js



;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormio/InitFormio.js


function InitFormio() {
  FormioLoader/* initFormio */.x();
}

;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormio/InitFormio.template.js
var initFormioTemplate = `
<div id="formio" 
  class="qg-forms-v2"
  data-formio 
  data-formio-project-name="dev-svcwlpuksmwawwk" 
  data-formio-form-name="plsPlusFormDemo" 
  data-formio-form-confirmation="" 
  data-formio-form-revision="" 
  data-formio-env-url="api.forms.platforms.qld.gov.au" 
  data-formio-pdf-download="no" 
  data-formio-namespace="" 
></div>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormio/InitFormio.code.js



var initFormioCode = `
${initFormioTemplate}
<script>
${(0,indent/* indent */.W)(InitFormio.toString().replaceAll("___WEBPACK_IMPORTED_MODULE_0__", "FormioLoader"), 1)}
  InitFormio();
</script>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormio/InitFormio.js

function InitFormio_InitFormio() {
  FormioLoader/* initFormio */.x();
}
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormio/index.js



;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormioInstance/InitFormioInstance.js


function InitFormioInstance() {
  const elem = document.getElementById("formio-alt");
  FormioLoader/* initFormioInstance */.D(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "plsPlusFormDemo",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
  });
}

;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormioInstance/InitFormioInstance.template.js
var initFormioInstanceTemplate = `
<div id="formio-alt" class="qg-forms-v2" ></div>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormioInstance/InitFormioInstance.code.js



var initFormioInstanceCode = `
${initFormioInstanceTemplate}
<script>
${(0,indent/* indent */.W)(InitFormioInstance.toString().replaceAll("___WEBPACK_IMPORTED_MODULE_0__", "FormioLoader"), 1)}
  InitFormioInstance();
</script>
`;
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormioInstance/InitFormioInstance.js

function InitFormioInstance_InitFormioInstance() {
  var elem = document.getElementById("formio-alt");
  FormioLoader/* initFormioInstance */.D(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "plsPlusFormDemo",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no"
  });
}
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/InitFormioInstance/index.js



;// CONCATENATED MODULE: ./src/helpers/FormioLoader/stories/index.js




;// CONCATENATED MODULE: ./src/helpers/FormioLoader/FormioLoader.stories.mdx
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,esm/* mdx */.kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,esm/* mdx */.kt)(dist_esm/* Meta */.h_, {
    title: "Helpers/FormioLoader",
    mdxType: "Meta"
  }), (0,esm/* mdx */.kt)("h1", {
    "id": "formioloader"
  }, `FormioLoader`), (0,esm/* mdx */.kt)("p", null, `FormioLoader provide function for you to initiate Formio instance.
To use it, simply include the script and run `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `FormioLoader.initFormio()`), ` in your webpage, it will initiate Formio instance with the div that contains `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `data-formio`), ` attribute.`), (0,esm/* mdx */.kt)("pre", null, (0,esm/* mdx */.kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-loader.min.js"></script>
<script>
  FormioLoader.initFormio();
</script>
`)), (0,esm/* mdx */.kt)("p", null, `Sample Formio div placeholder:`), (0,esm/* mdx */.kt)("pre", null, (0,esm/* mdx */.kt)("code", {
    parentName: "pre",
    "className": "language-jsx"
  }, `<div
  id="formio"
  class="qg-forms-v2"
  data-formio
  data-formio-project-name="dev-svcwlpuksmwawwk"
  data-formio-form-name="plsPlusFormDemo"
  data-formio-form-confirmation=""
  data-formio-form-revision=""
  data-formio-env-url="api.forms.platforms.qld.gov.au"
  data-formio-pdf-download="no"
  data-formio-namespace=""
></div>
`)), (0,esm/* mdx */.kt)("p", null, `Please note that you'll need to include `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `formio.full.js`), `/`, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `formio.full.min.js`), `, and other necessary formio scripts/libraries before using this script.
You may want to use `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "?path=/docs/helpers-formioscript--page"
  }, `FormioScript`), ` to lazy-load all Formio related scripts/libraries.`), (0,esm/* mdx */.kt)("h2", {
    "id": "initiate-formio-instance"
  }, `Initiate Formio instance`), (0,esm/* mdx */.kt)("p", null, `To initiate Formio instance, simply include and run the script in your webpage.`), (0,esm/* mdx */.kt)(dist_esm/* Canvas */.Xz, {
    withSource: "open",
    mdxType: "Canvas"
  }, (0,esm/* mdx */.kt)(dist_esm/* Story */.oG, {
    name: "initFormio",
    parameters: {
      docs: {
        source: {
          code: initFormioCode,
          language: "html"
        }
      }
    },
    mdxType: "Story"
  }, function () {
    setTimeout(function () {
      InitFormio_InitFormio();
    });
    return initFormioTemplate;
  })), (0,esm/* mdx */.kt)("h2", {
    "id": "alternate-init-method"
  }, `Alternate init method`), (0,esm/* mdx */.kt)("p", null, `If the script is already loaded, you could init the form with an alternate method `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `FormioLoader.initFormioInstance`), `.
This is useful if you want to dynamically inject a form element. (Although the `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `FormioLoader.initFormio()`), ` method will work the same)`), (0,esm/* mdx */.kt)("h3", {
    "id": "options"
  }, `Options:`), (0,esm/* mdx */.kt)("table", null, (0,esm/* mdx */.kt)("thead", {
    parentName: "table"
  }, (0,esm/* mdx */.kt)("tr", {
    parentName: "thead"
  }, (0,esm/* mdx */.kt)("th", {
    parentName: "tr",
    "align": null
  }, `Option`), (0,esm/* mdx */.kt)("th", {
    parentName: "tr",
    "align": null
  }, `Description`), (0,esm/* mdx */.kt)("th", {
    parentName: "tr",
    "align": null
  }, `Example`))), (0,esm/* mdx */.kt)("tbody", {
    parentName: "table"
  }, (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `projectName`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `Formio project name`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `dev-svcwlpuksmwawwk`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `formName`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `Formio form name`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `plsPlusFormDemo`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `envUrl`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `domain name of the Formio endpoint`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `api.forms.platforms.qld.gov.au`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `formConfirmation`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `redirect page for wizard after submission`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `/`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `formRevision`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `form revision number`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `1`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `pdfDownload`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `Does the form involve pdf download`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `no`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `namespace`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `Namespace of the form for creating key for token, user, etc`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `any string`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `createFormOptions`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `function that returns `, (0,esm/* mdx */.kt)("a", {
    parentName: "td",
    "href": "https://help.form.io/developers/form-renderer#form-renderer-options",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `options`), ` to be passed to the createForm function`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `({ envUrl, projectName, formName, defaultOptions, elem }) => object`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `createFormController`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `custom form controller function`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `({ envUrl, projectName, formName, form, elem }) => void)`)), (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `createFormCallback`), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `custom callback function after a form is created by `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "td"
  }, `Formio.createForm`)), (0,esm/* mdx */.kt)("td", {
    parentName: "tr",
    "align": null
  }, `({ envUrl, projectName, formName, form, elem }) => void)`)))), (0,esm/* mdx */.kt)(dist_esm/* Canvas */.Xz, {
    withSource: "open",
    mdxType: "Canvas"
  }, (0,esm/* mdx */.kt)(dist_esm/* Story */.oG, {
    name: "initFormioInstance",
    parameters: {
      docs: {
        source: {
          code: initFormioInstanceCode,
          language: "html"
        }
      }
    },
    mdxType: "Story"
  }, function () {
    setTimeout(function () {
      InitFormioInstance_InitFormioInstance();
    });
    return initFormioInstanceTemplate;
  })), (0,esm/* mdx */.kt)("h2", {
    "id": "custom-createform-options-with-createformoptions"
  }, `Custom createForm options with `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "h2"
  }, `createFormOptions`)), (0,esm/* mdx */.kt)("p", null, `You can create a hook function `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `createFormOptions`), ` to customise the `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://help.form.io/developers/form-renderer#form-renderer-options",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `options`), `.
Within the function you could pass different options base on different project or form.`), (0,esm/* mdx */.kt)("p", null, `The example below will add the custom options to every forms in the page.`), (0,esm/* mdx */.kt)("pre", null, (0,esm/* mdx */.kt)("code", {
    parentName: "pre",
    "className": "language-jsx"
  }, `const customFn = () => {
  return {
    readOnly: true,
  };
};
FormioLoader.initFormioInstance(elem, {
  projectName: "dev-svcwlpuksmwawwk",
  formName: "plsPlusFormDemo",
  envUrl: "api.forms.platforms.qld.gov.au",
  pdfDownload: "no",
  createFormOptions: customFn,
});
`)), (0,esm/* mdx */.kt)("p", null, `The example below only add the custom options to certain project or form with a single hook function.`), (0,esm/* mdx */.kt)("pre", null, (0,esm/* mdx */.kt)("code", {
    parentName: "pre",
    "className": "language-jsx"
  }, `const customFn = ({ envUrl, projectName, formName, defaultOptions, elem }) => {
  if ({ envUrl === "api.forms.platforms.qld.gov.au") {
    return {
      readOnly: true,
    };
  }
  if (projectName === "project1") {
    return {
      readOnly: true,
    };
  }
  if (projectName === "project2" && formName === "form2") {
    return {
      readOnly: true,
    };
  }
  return {};
};
FormioLoader.initFormioInstance(elem1, {
  projectName: "project1",
  formName: "form1",
  envUrl: "api.forms.platforms.qld.gov.au",
  pdfDownload: "no",
  createFormOptions: customFn
});
FormioLoader.initFormioInstance(elem2, {
  projectName: "project2",
  formName: "form2",
  envUrl: "api.forms.platforms.qld.gov.au",
  pdfDownload: "no",
  createFormOptions: customFn
});
`)), (0,esm/* mdx */.kt)("p", null, `Please refer to `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://help.form.io/developers/form-renderer#form-renderer-options",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `https://help.form.io/developers/form-renderer#form-renderer-options`), ` for available options.`), (0,esm/* mdx */.kt)("p", null, `Below is a full example:`), (0,esm/* mdx */.kt)(dist_esm/* Canvas */.Xz, {
    withSource: "open",
    mdxType: "Canvas"
  }, (0,esm/* mdx */.kt)(dist_esm/* Story */.oG, {
    name: "custom CreateForm Options",
    parameters: {
      docs: {
        source: {
          code: customOptionsCode,
          language: "html"
        }
      }
    },
    mdxType: "Story"
  }, function () {
    setTimeout(function () {
      CustomOptions_CustomOptions();
    });
    return customOptionsTemplate;
  })), (0,esm/* mdx */.kt)("h2", {
    "id": "controlling-the-form-with-javascript-with-createformcontroller"
  }, `Controlling the Form with JavaScript with `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "h2"
  }, `createFormController`)), (0,esm/* mdx */.kt)("p", null, `You can create a hook function `, (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `createFormController`), ` to customise the `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://help.form.io/developers/form-renderer#controlling-the-form-with-javascript",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `form controller`), `.
Within the function you could customise the controller base on different project or form.`), (0,esm/* mdx */.kt)("pre", null, (0,esm/* mdx */.kt)("code", {
    parentName: "pre",
    "className": "language-jsx"
  }, `const customFn = ({ form }) => {
  form.on("change", (e) => {
    console.info("onChange", e);
  });
};
FormioLoader.initFormioInstance(elem, {
  projectName: "dev-svcwlpuksmwawwk",
  formName: "plsPlusFormDemo",
  envUrl: "api.forms.platforms.qld.gov.au",
  pdfDownload: "no",
  createFormController: customFn,
});
`)), (0,esm/* mdx */.kt)("p", null, `The example below only control the form to certain project or form.`), (0,esm/* mdx */.kt)("pre", null, (0,esm/* mdx */.kt)("code", {
    parentName: "pre",
    "className": "language-jsx"
  }, `const customFn = ({ envUrl, projectName, formName, form, elem }) => {
  if (projectName === "project2" && formName === "form2") {
    form.on("change", (e) => {
      console.info("onChange", e);
    });
  }
};
FormioLoader.initFormioInstance(elem1, {
  projectName: "project1",
  formName: "form1",
  envUrl: "api.forms.platforms.qld.gov.au",
  pdfDownload: "no",
  createFormOptions: customFn,
});
FormioLoader.initFormioInstance(elem2, {
  projectName: "project2",
  formName: "form2",
  envUrl: "api.forms.platforms.qld.gov.au",
  pdfDownload: "no",
  createFormOptions: customFn,
});
`)), (0,esm/* mdx */.kt)("p", null, `Please refer to `, (0,esm/* mdx */.kt)("a", {
    parentName: "p",
    "href": "https://help.form.io/developers/form-renderer#controlling-the-form-with-javascript",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `https://help.form.io/developers/form-renderer#controlling-the-form-with-javascript`), ` for more examples.`), (0,esm/* mdx */.kt)("p", null, `Below is a full example:`), (0,esm/* mdx */.kt)(dist_esm/* Canvas */.Xz, {
    withSource: "open",
    mdxType: "Canvas"
  }, (0,esm/* mdx */.kt)(dist_esm/* Story */.oG, {
    name: "custom CreateForm controller",
    parameters: {
      docs: {
        source: {
          code: customControllerCode,
          language: "html"
        }
      }
    },
    mdxType: "Story"
  }, function () {
    setTimeout(function () {
      CustomController_CustomController();
    });
    return customControllerTemplate;
  })));
}

;
MDXContent.isMDXComponent = true;
var initFormio = function () {
  setTimeout(function () {
    InitFormio_InitFormio();
  });
  return initFormioTemplate;
};
initFormio.storyName = 'initFormio';
initFormio.parameters = Object.assign({
  storySource: {
    source: '() => {\n  setTimeout(() => {\n    InitFormio();\n  });\n  return initFormioTemplate;\n}'
  }
}, {
  docs: {
    source: {
      code: initFormioCode,
      language: "html"
    }
  }
});
var initFormioInstance = function () {
  setTimeout(function () {
    InitFormioInstance_InitFormioInstance();
  });
  return initFormioInstanceTemplate;
};
initFormioInstance.storyName = 'initFormioInstance';
initFormioInstance.parameters = Object.assign({
  storySource: {
    source: '() => {\n  setTimeout(() => {\n    InitFormioInstance();\n  });\n  return initFormioInstanceTemplate;\n}'
  }
}, {
  docs: {
    source: {
      code: initFormioInstanceCode,
      language: "html"
    }
  }
});
var customCreateFormOptions = function () {
  setTimeout(function () {
    CustomOptions_CustomOptions();
  });
  return customOptionsTemplate;
};
customCreateFormOptions.storyName = 'custom CreateForm Options';
customCreateFormOptions.parameters = Object.assign({
  storySource: {
    source: '() => {\n  setTimeout(() => {\n    CustomOptions();\n  });\n  return customOptionsTemplate;\n}'
  }
}, {
  docs: {
    source: {
      code: customOptionsCode,
      language: "html"
    }
  }
});
var customCreateFormController = function () {
  setTimeout(function () {
    CustomController_CustomController();
  });
  return customControllerTemplate;
};
customCreateFormController.storyName = 'custom CreateForm controller';
customCreateFormController.parameters = Object.assign({
  storySource: {
    source: '() => {\n  setTimeout(() => {\n    CustomController();\n  });\n  return customControllerTemplate;\n}'
  }
}, {
  docs: {
    source: {
      code: customControllerCode,
      language: "html"
    }
  }
});
var componentMeta = {
  title: 'Helpers/FormioLoader',
  includeStories: ["initFormio", "initFormioInstance", "customCreateFormOptions", "customCreateFormController"]
};
var mdxStoryNameToKey = {
  "initFormio": "initFormio",
  "initFormioInstance": "initFormioInstance",
  "custom CreateForm Options": "customCreateFormOptions",
  "custom CreateForm controller": "customCreateFormController"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,esm/* mdx */.kt)(dist_esm/* AddContext */.aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,esm/* mdx */.kt)(MDXContent, null));
  }
});
/* harmony default export */ const FormioLoader_stories = (componentMeta);

/***/ }),

/***/ "./src/helpers/FormioScript/FormioScript.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__page": () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
    title: "Helpers/FormioScript",
    mdxType: "Meta"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1", {
    "id": "formioscript"
  }, `FormioScript`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `FormioScript provides a shorthand implementation to lazy-load the necessary libraries and scripts to initiate a Formio form in your application.
Simply include it in your application and it will search through the page with Formio div container and initiated the Formio instances.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Benefits`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `One script and for all, reduce the chance of missing dependency.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Enforce the scripts are loading in certain order, wrong order will break the application, which is prone to error if insert manually.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Always point to the correct source of scripts.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Encapsulated, avoid consumer input in case we need to change the composition of scripts.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Before using FormioScript:`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<script
  async="false"
  src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.js"
></script>
<script
  async="false"
  src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.min.js"
></script>
<script
  async="false"
  src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.js"
></script>
<link
  href="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.min.css"
  rel="stylesheet"
/>
<link
  href="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.css"
  rel="stylesheet"
/>
<div id="formio1" class="qg-forms-v2"></div>
<div id="formio2" class="qg-forms-v2"></div>
<script>
  Formio.createForm(
    document.getElementById("formio1"),
    "https://api.forms.platforms.qld.gov.au/dev-svcwlpuksmwawwk/plsPlusFormDemo",
    {readOnly: true}
  ).then((form) {
    form.on("change", (e) => {
      console.info("onChange", e);
    });
  });
  Formio.createForm(
    document.getElementById("formio2"),
    "https://api.forms.platforms.qld.gov.au/dev-svcwlpuksmwawwk/testing"
  );
</script>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `After using FormioScript:`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div
  class="qg-forms-v2"
  data-formio
  data-formio-project-name="dev-svcwlpuksmwawwk"
  data-formio-form-name="plsPlusFormDemo"
  data-formio-env-url="api.forms.platforms.qld.gov.au"
  data-formio-createForm-options="customFn1"
  data-formio-createForm-controller="customFn2"
  data-formio-createForm-callback="customFn3"
></div>
<div
  class="qg-forms-v2"
  data-formio
  data-formio-project-name="dev-svcwlpuksmwawwk"
  data-formio-form-name="testing"
  data-formio-env-url="api.forms.platforms.qld.gov.au"
></div>
<script>
  window.customFn1 = () => ({
    readOnly: true,
  });
  window.customFn2 = ({ form }) => {
    form.on("change", (e) => {
      console.info("onChange", e);
    });
  };
  window.customFn3 = () => {};
</script>
<script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
<script>
  FormioScript.init();
</script>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can replace `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `prod`), ` in the `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `src`), ` with `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `test`), ` / `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `staging`), ` / `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `dev`), ` / `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gitbridge`), ` to load assets from different environments.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This script will load the following scripts into the page:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
    parentName: "tr",
    "align": null
  }, `Script`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
    parentName: "tr",
    "align": null
  }, `Description`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `formio.full.min.js`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `Main Formio library`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `premium.min.js`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `Premium component library`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `formio-qld.min.js`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `QG custom component library`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `formio-loader.min.js`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
    parentName: "td",
    "href": "?path=/docs/helpers-formioloader--page"
  }, `FormioLoader`), ` helper script`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `formio.full.min.css`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `Style for the main Formio library`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `premium.css`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `Style for the premium components`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `formio-qld.min.css`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
    parentName: "tr",
    "align": null
  }, `Style for Formio form in Squiz`)))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "usage-in-squiz-matrix"
  }, `Usage in Squiz Matrix`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Please refer to Squiz Matrix asset #249261.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "create-form-dynamically"
  }, `Create form dynamically`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You could create form dynamically after all the scripts are loaded.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
<script>
  FormioScript.init().then(() => {
    const div = document.createElement("div");
    FormioLoader.initFormioInstance(div, {
      projectName: "project1",
      formName: "form1",
      envUrl: "api.forms.platforms.qld.gov.au",
    });
  });
</script>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `or using `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FormioLoader.initFormio()`), ` instead:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
<script>
  FormioScript.init().then(() => {
    const div = document.createElement("div");
    div.innerHtml = \`
    <div
      class="qg-forms-v2"
      data-formio
      data-formio-project-name="project1"
      data-formio-form-name="form1"
      data-formio-env-url="api.forms.platforms.qld.gov.au"
    ></div>
    \`;
    FormioLoader.initFormio();
  });
</script>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "faqs"
  }, `FAQs`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
    "id": "how-to-pass-custom-createform-options"
  }, `How to pass custom createForm options?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can add `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `data-formio-createForm-options`), ` in the div's data attribute with the function name you want to return the custom options.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div
  class="qg-forms-v2"
  data-formio
  data-formio-project-name="dev-svcwlpuksmwawwk"
  data-formio-form-name="plsPlusFormDemo"
  data-formio-env-url="api.forms.platforms.qld.gov.au"
  data-formio-createForm-options="customFn1"
></div>
<script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
<script>
  window.customFn1 = ({
    envUrl,
    projectName,
    formName,
    defaultOptions,
    elem,
  }) => {
    return {
      readOnly: true,
    };
  };
  FormioScript.init();
</script>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
    "id": "how-to-customise-createform-form-controller"
  }, `How to customise createForm form controller?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can add `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `data-formio-createForm-controller`), ` in the div's data attribute with the function name you want to customise the form controller.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div
  class="qg-forms-v2"
  data-formio
  data-formio-project-name="dev-svcwlpuksmwawwk"
  data-formio-form-name="plsPlusFormDemo"
  data-formio-env-url="api.forms.platforms.qld.gov.au"
  data-formio-createForm-controller="customFn2"
></div>
<script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
<script>
  window.customFn2 = ({ envUrl, projectName, formName, form, elem }) => {
    form.on("change", (e) => {
      console.info("onChange", e);
    });
  };
  FormioScript.init();
</script>
`)));
}

;
MDXContent.isMDXComponent = true;
var __page = function () {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Helpers/FormioScript',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .AddContext */ .aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXContent, null));
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ "./src/stories/Welcome.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__page": () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");
/* harmony import */ var _assets_formio_custom_component_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/stories/assets/formio custom component.png");
/* harmony import */ var _assets_formioSettings_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/stories/assets/formioSettings.png");
var _excluded = ["components"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h_, {
    title: "Welcome",
    mdxType: "Meta"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1", {
    "id": "queensland-government-formio-custom-component-library"
  }, `Queensland Government Form.io custom component library`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This repository provides a bundled JS custom component library to form.io builder / form.io renderer / Squiz Matrix form application.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
    src: _assets_formio_custom_component_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "share diagram",
    width: "480"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
    "id": "usage"
  }, `Usage`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can consume this library either in Form.io Builder or Form.io Renderer.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
    "id": "formio-platform-builder"
  }, `Form.io platform builder`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To use custom components in the Form.io platform builder, please go to the `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
    parentName: "p",
    "href": "https://help.form.io/userguide/projects#custom-js-and-css",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `Project stage settings`), ` and update the `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Custom javascript`), ` URL with the CDN URL of this library:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre"
  }, `https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.min.js
(This is a temporary URL for POC purpose, actual CDN URL still needs to be confirmed in production.)
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
    src: _assets_formioSettings_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "share diagram",
    width: "640"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
    "id": "formio-js-renderer-or-builder"
  }, `Form.io JS renderer or builder`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To use custom components in the Form.io JS renderer, please include the script `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `AFTER`), ` the formio script.
Pleaser refer to `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
    parentName: "p",
    "href": "https://help.form.io/developers/form-renderer#getting-started",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, `Form.io doc`), ` for how to initiate your form application in a HTML page.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<script src="https://unpkg.com/formiojs@latest/dist/formio.full.js"></script>
...
<script src="https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.min.js"></script>
(This is a temporary URL for POC purpose, actual CDN URL still needs to be
confirmed in production.)
`)));
}

;
MDXContent.isMDXComponent = true;
var __page = function () {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Welcome',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function () {
    return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__/* .AddContext */ .aT, {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentAnnotations: componentMeta
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXContent, null));
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/CustomHeader/CustomHeader.stories.mdx": "./src/components/CustomHeader/CustomHeader.stories.mdx",
	"./components/CustomTextfield/CustomTextfield.stories.mdx": "./src/components/CustomTextfield/CustomTextfield.stories.mdx",
	"./components/PlsPlusAddress/PlsPlusAddress.stories.mdx": "./src/components/PlsPlusAddress/PlsPlusAddress.stories.mdx",
	"./examples/SimpleWizard/SimpleWizard.stories.mdx": "./src/examples/SimpleWizard/SimpleWizard.stories.mdx",
	"./examples/SingleSignOn/SingleSignOn.stories.mdx": "./src/examples/SingleSignOn/SingleSignOn.stories.mdx",
	"./helpers/FormioLoader/FormioLoader.stories.mdx": "./src/helpers/FormioLoader/FormioLoader.stories.mdx",
	"./helpers/FormioScript/FormioScript.stories.mdx": "./src/helpers/FormioScript/FormioScript.stories.mdx",
	"./stories/Welcome.stories.mdx": "./src/stories/Welcome.stories.mdx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$";

/***/ }),

/***/ "./src/stories/assets/SSO-HighLevel.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/SSO-HighLevel.42d8c1f3.png";

/***/ }),

/***/ "./src/stories/assets/SSO-UserFlow.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/SSO-UserFlow.9b224f64.png";

/***/ }),

/***/ "./src/stories/assets/formio custom component.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/formio custom component.5f82e1bf.png";

/***/ }),

/***/ "./src/stories/assets/formioSettings.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/formioSettings.fbfb01cf.png";

/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [608], () => (__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"), __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"), __webpack_exec__("./storybook-init-framework-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/html/config.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./.storybook/preview.js-generated-config-entry.js"), __webpack_exec__("./generated-stories-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.b770cb41.iframe.bundle.js.map