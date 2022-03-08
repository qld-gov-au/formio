/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.js
 *
 */

import autocompleter from "autocompleter";
import _ from "lodash";

import PlsPlusAddressEditForm from "./PlsPlusAddress.form";

const ContainerComponent = Formio.Components.components.container;
const Field = Formio.Components.components.field;
const NestedComponent = Formio.Components.components.nested;
const GoogleAddressProvider = Formio.Providers.providers.address.google;

export const PlsPlusAddressMode = {
  Autocomplete: "autocomplete",
  Manual: "manual",
};

const RemoveValueIconHiddenClass =
  "address-autocomplete-remove-value-icon--hidden";
// const ChildConditional = "show = _.get(instance, 'parent.manualMode', false);";
// const ChildConditional = "show = true;";
// const ChildLogic = [
//   {
//     name: "Disable",
//     trigger: {
//       type: "javascript",
//       javascript:
//         "result = !_.get(instance, 'parent.manualMode');console.log('test333', _.get(instance, 'parent.manualMode'))",
//       // javascript: "result = true",
//       // javascript:
//       //   "result = true; console.log('test333', _.get(instance, 'parent.manualMode', false))",
//     },
//     actions: [
//       {
//         name: "Disable",
//         type: "property",
//         property: {
//           label: "Disabled",
//           value: "disabled",
//           type: "boolean",
//         },
//         state: true,
//       },
//       // {
//       //   name: "Not required",
//       //   type: "property",
//       //   property: {
//       //     label: "Required",
//       //     value: "validate.required",
//       //     type: "boolean",
//       //   },
//       //   state: "",
//       // },
//     ],
//   },
//   // {
//   //   name: "Enable",
//   //   trigger: {
//   //     type: "javascript",
//   //     javascript:
//   //       "result = !_.get(instance, 'parent.manualMode');console.log('test333', !_.get(instance, 'parent.manualMode', false))",
//   //     // javascript:
//   //     //   "result = true; console.log('test333', _.get(instance, 'parent.manualMode', false))",
//   //   },
//   //   actions: [
//   //     {
//   //       name: "Disable",
//   //       type: "property",
//   //       property: {
//   //         label: "Disabled",
//   //         value: "disabled",
//   //         type: "boolean",
//   //       },
//   //       state: false,
//   //     },
//   //     // {
//   //     //   name: "Not required",
//   //     //   type: "property",
//   //     //   property: {
//   //     //     label: "Required",
//   //     //     value: "validate.required",
//   //     //     type: "boolean",
//   //     //   },
//   //     //   state: "",
//   //     // },
//   //   ],
//   // },
// ];

export class PlsPlusAddress extends ContainerComponent {
  static schema(...extend) {
    return ContainerComponent.schema(
      {
        type: "plsplusaddress",
        label: "PlsPlusAddress",
        key: "plsplusaddress",
        switchToManualModeLabel: "Can't find address? Switch to manual mode.",
        provider: "",
        providerOptions: {},
        manualModeViewString: "",
        hideLabel: false,
        disableClearIcon: false,
        enableManualMode: true,
        components: [
          {
            label: "Autocomplete address",
            tableView: true,
            key: "autocompleteAddress",
            type: "hidden",
          },
          {
            label: "Selected address",
            tableView: true,
            key: "selectedAddress",
            type: "hidden",
          },
          {
            label: "Address line 1 <i>(include unit number if needed)</i>",
            tableView: true,
            key: "address1",
            type: "textfield",
            input: true,
            // customConditional: ChildConditional,
            // logic: ChildLogic,
            validate: {
              required: true,
              pattern: "^((?![<>\\{\\}]).)*$",
              maxLength: 40,
            },
          },
          {
            label: "Address line 2",
            tableView: true,
            key: "address2",
            type: "textfield",
            input: true,
            // customConditional: ChildConditional,
            // logic: ChildLogic,
          },
          {
            label: "Address line 3",
            tableView: true,
            key: "address3",
            type: "textfield",
            input: true,
            // customConditional: ChildConditional,
            // logic: ChildLogic,
          },
          {
            label: "Town, City or Suburb",
            tableView: true,
            key: "city",
            type: "textfield",
            input: true,
            // customConditional: ChildConditional,
            // logic: ChildLogic,
          },
          {
            label: "State",
            tableView: true,
            key: "state",
            type: "textfield",
            input: true,
            // customConditional: ChildConditional,
            // logic: ChildLogic,
          },
          {
            label: "Postcode",
            tableView: true,
            key: "postcode",
            type: "textfield",
            input: true,
            inputMask: "9999",
            // customConditional: ChildConditional,
            // logic: ChildLogic,
            validate: {
              required: true,
              pattern: "^([0-9]{4})$",
              customMessage: "Invalid postcode format",
              minLength: 4,
              maxLength: 4,
            },
          },
        ],
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: "PlsPlusAddress",
      group: "custom",
      icon: "home",
      documentation: "/userguide/#address",
      weight: 2,
      schema: PlsPlusAddress.schema(),
    };
  }

  mergeSchema(component = {}) {
    let { defaultSchema } = this;

    if (component.components) {
      defaultSchema = _.omit(defaultSchema, "components");
    }

    return _.defaultsDeep(component, defaultSchema);
  }

  init() {
    this.components = this.components || [];
    if (this.builderMode || this.manualModeEnabled) {
      NestedComponent.prototype.addComponents.call(
        this,
        this.manualMode ? this.address : {}
      );
    }
    Field.prototype.init.call(this);

    if (!this.builderMode) {
      if (this.component.provider) {
        const { provider, providerOptions } = this.component;
        this.provider = this.initializeProvider(provider, providerOptions);
      } else if (this.component.map) {
        // Fallback to legacy version where Google Maps was the only provider.
        this.component.provider = GoogleAddressProvider.name;
        this.component.providerOptions = this.component.providerOptions || {};

        const { map, provider, providerOptions } = this.component;

        const { key, region } = map;

        if (key) {
          _.set(providerOptions, "params.key", key);
        }
        if (region) {
          _.set(providerOptions, "params.region", region);
        }

        this.provider = this.initializeProvider(provider, providerOptions);
      }
    }
  }

  initializeProvider(provider, options = {}) {
    const url = this.interpolate(options.url);
    const Provider = Formio.Providers.getProvider("address", provider);
    return new Provider({ ...options, url });
  }

  get emptyValue() {
    return this.manualModeEnabled
      ? {
          mode: PlsPlusAddressMode.Autocomplete,
          address: {},
        }
      : {};
  }

  get mode() {
    if (!this.manualModeEnabled) {
      return PlsPlusAddressMode.Autocomplete;
    }

    return this.dataValue?.mode ?? PlsPlusAddressMode.Autocomplete;
  }

  set mode(value) {
    if (this.manualModeEnabled) {
      this.dataValue.mode = value;
    }
  }

  get autocompleteMode() {
    return this.mode === PlsPlusAddressMode.Autocomplete;
  }

  get manualMode() {
    return this.mode === PlsPlusAddressMode.Manual;
  }

  get manualModeEnabled() {
    return Boolean(this.component.enableManualMode);
  }

  restoreComponentsContext() {
    console.log("test666", this.address);
    this.getComponents().forEach((component) => {
      component.data = this.address;
      component.setValue(component.dataValue, {
        noUpdateEvent: true,
      });
    });
  }

  get address() {
    return this.manualModeEnabled && this.dataValue
      ? this.dataValue.address
      : this.dataValue;
  }

  set address(value) {
    if (this.manualModeEnabled) {
      this.dataValue.address = value;
    } else {
      this.dataValue = value;
    }
  }

  // get autocompleteAddress() {
  //   return this.manualModeEnabled && this.dataValue
  //     ? this.dataValue.address
  //     : this.dataValue;
  // }

  // set autocompleteAddress(value) {
  //   if (this.manualModeEnabled) {
  //     this.dataValue.address = value;
  //   } else {
  //     this.dataValue = value;
  //   }
  // }

  get defaultValue() {
    return super.defaultValue;
  }

  get defaultSchema() {
    return PlsPlusAddress.schema();
  }

  isValueInLegacyFormat(value) {
    return value && !value.mode;
  }

  normalizeValue(value) {
    return this.manualModeEnabled && this.isValueInLegacyFormat(value)
      ? {
          mode: PlsPlusAddressMode.Autocomplete,
          address: value,
          // autoCompleteAddress: "test",
          // selectedAddress: "test",
        }
      : value;
  }

  setValue(value, flags = {}) {
    const changed = Field.prototype.setValue.call(this, value, flags);

    if (this.manualMode) {
      this.restoreComponentsContext();
    }

    if (changed || (!_.isEmpty(value) && flags.fromSubmission)) {
      this.redraw();
    }

    return changed;
  }

  static get modeSwitcherRef() {
    return "modeSwitcher";
  }

  static get removeValueIconRef() {
    return "removeValueIcon";
  }

  static get searchInputRef() {
    return "searchInput";
  }

  static get addRowButtonRef() {
    return "addButton";
  }

  static get removeRowButtonRef() {
    return "removeRow";
  }

  get modeSwitcher() {
    return this.refs ? this.refs[PlsPlusAddress.modeSwitcherRef] || null : null;
  }

  get removeValueIcon() {
    return this.refs
      ? this.refs[PlsPlusAddress.removeValueIconRef] || null
      : null;
  }

  get searchInput() {
    return this.refs ? this.refs[PlsPlusAddress.searchInputRef] || null : null;
  }

  get addRowButton() {
    return this.refs ? this.refs[PlsPlusAddress.addRowButtonRef] || null : null;
  }

  get removeRowButton() {
    return this.refs
      ? this.refs[PlsPlusAddress.removeRowButtonRef] || null
      : null;
  }

  get searchInputAttributes() {
    const attr = {
      name: this.options.name,
      type: "text",
      class: "form-control",
      lang: this.options.language,
      tabindex: this.component.tabindex || 0,
    };

    if (this.component.placeholder) {
      // (attr.placeholder = this.t(this.component.placeholder)),
      //   { _userInput: true };
      attr.placeholder = this.t(this.component.placeholder);
    }

    if (this.disabled || this.manualMode) {
      attr.disabled = "disabled";
    }

    _.defaults(attr, this.component.attributes);

    return attr;
  }

  get templateName() {
    return "plsPlusAddress";
  }

  get gridTemplateName() {
    return "multiValueTable";
  }

  get rowTemplateName() {
    return "multiValueRow";
  }

  get hasChildren() {
    return this.builderMode || this.manualModeEnabled;
  }

  get addAnother() {
    return this.t(this.component.addAnother || "Add Another");
  }

  renderElement(value) {
    this.getComponents().forEach((component) => {
      component.disabled = !this.manualMode;
    });
    return this.renderTemplate(this.templateName, {
      children: this.hasChildren ? this.renderComponents() : "",
      nestedKey: this.nestedKey,
      inputAttributes: this.searchInputAttributes,
      ref: {
        modeSwitcher: PlsPlusAddress.modeSwitcherRef,
        removeValueIcon: PlsPlusAddress.removeValueIconRef,
        searchInput: PlsPlusAddress.searchInputRef,
      },
      displayValue: this.getDisplayValue(value),
      mode: {
        autocomplete: this.autocompleteMode,
        manual: this.manualMode,
      },
    });
  }

  // renderRow(value, index) {
  //   return this.renderTemplate(this.rowTemplateName, {
  //     index,
  //     disabled: this.disabled,
  //     element: `${this.renderElement(value, index)}`,
  //   });
  // }

  // renderGrid() {
  //   return this.renderTemplate(this.gridTemplateName, {
  //     rows: this.address.map(this.renderRow.bind(this)).join(""),
  //     disabled: this.disabled,
  //     addAnother: this.addAnother,
  //   });
  // }

  render() {
    return super.render(this.renderElement());
  }

  onSelectAddress(address, element, index) {
    this.address = address;

    this.triggerChange({
      modified: true,
    });

    if (element) {
      element.value = this.getDisplayValue(this.address);
    }

    this.updateRemoveIcon(index);
  }

  // addRow() {
  //   this.address = this.address.concat(this.emptyValue);
  //   super.redraw();
  // }

  attach(element) {
    const result = (
      this.builderMode || this.manualMode
        ? super.attach
        : Field.prototype.attach
    ).call(this, element);

    if (!this.builderMode) {
      if (!this.provider && this.component.provider) {
        const { provider, providerOptions } = this.component;
        this.provider = this.initializeProvider(provider, providerOptions);
      }
    }

    this.loadRefs(element, {
      [PlsPlusAddress.addRowButtonRef]: "single",
      [PlsPlusAddress.modeSwitcherRef]: "single",
      [PlsPlusAddress.removeRowButtonRef]: "multiple",
      [PlsPlusAddress.removeValueIconRef]: "multiple",
      [PlsPlusAddress.searchInputRef]: "multiple",
    });

    this.searchInput.forEach((elem, index) => {
      if (!this.builderMode && elem && this.provider) {
        if (this.component.provider === "google") {
          this.provider.attachAutocomplete(
            elem,
            index,
            this.onSelectAddress.bind(this)
          );
        } else {
          autocompleter({
            input: elem,
            debounceWaitMs: 300,
            fetch: (text, update) => {
              const query = text;
              this.provider.search(query).then(update);
            },
            render: (address) => {
              const div = this.ce("div");
              div.textContent = this.getDisplayValue(address);
              return div;
            },
            onSelect: (address) => {
              this.onSelectAddress(address, elem, index);
            },
          });
        }

        this.addEventListener(elem, "blur", () => {
          if (!elem) {
            return;
          }

          if (elem.value) {
            elem.value = this.getDisplayValue(this.address);
          }
        });

        this.addEventListener(elem, "keyup", () => {
          if (!elem) {
            return;
          }

          if (!elem.value) {
            this.clearAddress(elem, index);
          }
        });
      }
    });
    // if (this.addRowButton) {
    //   this.addEventListener(this.addRowButton, "click", (event) => {
    //     event.preventDefault();
    //     this.addRow();
    //   });
    // }
    // this.removeRowButton.forEach((removeRowButton, index) => {
    //   this.addEventListener(removeRowButton, "click", (event) => {
    //     event.preventDefault();
    //     this.removeValue(index);
    //   });
    // });

    if (this.modeSwitcher) {
      this.addEventListener(this.modeSwitcher, "change", () => {
        if (!this.modeSwitcher) {
          return;
        }

        // this.dataValue = this.emptyValue;
        this.mode = this.modeSwitcher.checked
          ? PlsPlusAddressMode.Manual
          : PlsPlusAddressMode.Autocomplete;

        // this.address = { ...this.address, autocompleteAddress: "test" };

        if (!this.builderMode) {
          if (this.manualMode) {
            this.restoreComponentsContext();
          }

          this.triggerChange({
            modified: true,
          });
        }

        this.redraw();
      });
    }

    if (!this.builderMode) {
      this.removeValueIcon.forEach((removeValueIcon, index) => {
        this.updateRemoveIcon(index);

        const removeValueHandler = () => {
          const searchInput = this.searchInput?.[index];
          this.clearAddress(searchInput, index);

          if (searchInput) {
            searchInput.focus();
          }
        };

        this.addEventListener(removeValueIcon, "click", removeValueHandler);
        this.addEventListener(removeValueIcon, "keydown", ({ key }) => {
          if (key === "Enter") {
            removeValueHandler();
          }
        });
      });
    }

    return result;
  }

  addChildComponent(component) {
    // component.customConditional = ChildConditional;
    component.logic = ChildLogic;
  }

  redraw() {
    const modeSwitcherInFocus =
      this.modeSwitcher && document.activeElement === this.modeSwitcher;

    return super.redraw().then((result) => {
      if (modeSwitcherInFocus && this.modeSwitcher) {
        this.modeSwitcher.focus();
      }

      return result;
    });
  }

  clearAddress(element, index) {
    if (!this.isEmpty()) {
      this.triggerChange();
    }

    if (this.address?.[index]) {
      this.address[index] = this.emptyValue;
    } else {
      this.address = this.emptyValue;
    }
    if (element) {
      element.value = "";
    }
    this.updateRemoveIcon(index);
  }

  getDisplayValue(value = this.address) {
    return this.provider && !this.manualMode
      ? this.provider.getDisplayValue(value)
      : "";
  }

  updateRemoveIcon(index) {
    const removeValueIcon = this.removeValueIcon?.[index];
    if (removeValueIcon) {
      const value = this.address;
      console.log("updateRemoveIcon", value, this.manualMode);
      if (
        this.manualMode ||
        this.isEmpty(value) ||
        this.disabled ||
        _.isEmpty(value)
      ) {
        this.addClass(removeValueIcon, RemoveValueIconHiddenClass);
      } else {
        this.removeClass(removeValueIcon, RemoveValueIconHiddenClass);
      }
    }
  }

  getValueAsString(value, options) {
    if (!value) {
      return "";
    }

    const normalizedValue = this.normalizeValue(value);

    const { address, mode } = this.manualModeEnabled
      ? normalizedValue
      : {
          address: normalizedValue,
          mode: PlsPlusAddressMode.Autocomplete,
        };
    const valueInManualMode = mode === PlsPlusAddressMode.Manual;

    if (this.provider && !valueInManualMode) {
      return this.getDisplayValue(address);
    }

    if (valueInManualMode) {
      if (this.component.manualModeViewString) {
        return this.interpolate(this.component.manualModeViewString, {
          address,
          data: this.data,
          component: this.component,
        });
      }

      return this.getComponents()
        .filter((component) => component.hasValue(address))
        .map((component) => [component, _.get(address, component.key)])
        .filter(
          ([component, componentValue]) => !component.isEmpty(componentValue)
        )
        .map(([component, componentValue]) =>
          component.getValueAsString(componentValue, options)
        )
        .join(", ");
    }

    return super.getValueAsString(address, options);
  }

  focus() {
    if (this.searchInput && this.searchInput[0]) {
      this.searchInput[0].focus();
    }
  }
}

PlsPlusAddress.editForm = PlsPlusAddressEditForm;
