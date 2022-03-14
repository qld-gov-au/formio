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

export const PlsPlusAddressMode = {
  Autocomplete: "autocomplete",
  Manual: "manual",
};

const RemoveValueIconHiddenClass =
  "address-autocomplete-remove-value-icon--hidden";

const addressValidation = {
  pattern: "^((?![<>\\{\\}]).)*$",
  customMessage:
    "You have exceeded the character limit or included html or special characters, e.g. <,>,{,},\\",
  maxLength: 40,
};
export class PlsPlusAddress extends ContainerComponent {
  static schema(...extend) {
    return ContainerComponent.schema(
      {
        type: "plsplusaddress",
        label: "Address",
        key: "plsplusaddress",
        switchToManualModeLabel: "Can't find address? Switch to manual mode.",
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
            validate: {
              required: true,
              ...addressValidation,
            },
          },
          {
            label: "Address line 2",
            tableView: true,
            key: "address2",
            type: "textfield",
            input: true,
            validate: addressValidation,
          },
          {
            label: "Address line 3",
            tableView: true,
            key: "address3",
            type: "textfield",
            input: true,
            validate: addressValidation,
          },
          {
            label: "Town, City or Suburb",
            tableView: true,
            key: "city",
            type: "textfield",
            input: true,
            validate: {
              required: true,
              ...addressValidation,
            },
          },
          {
            label: "State",
            tableView: true,
            key: "state",
            type: "textfield",
            input: true,
            disabled: true,
            defaultValue: "QLD",
          },
          {
            label: "Postcode",
            tableView: true,
            key: "postcode",
            type: "textfield",
            input: true,
            inputMask: "9999",
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

  get composedAddress() {
    const { address1, address2, address3, city, state, postcode } =
      this.address;
    return [address1, address2, address3, city, state, postcode]
      .join(" ")
      .replace(/ +/g, " ")
      .trim();
  }

  onChange(flags, fromRoot) {
    if (this.autocompleteMode) {
      this.dataValue.address.selectedAddress = this.address.autocompleteAddress;
    } else {
      this.dataValue.address.selectedAddress = this.composedAddress;
    }
    return super.onChange(flags, fromRoot);
  }

  init() {
    this.components = this.components || [];
    if (this.builderMode || this.manualModeEnabled) {
      NestedComponent.prototype.addComponents.call(this, this.address);
    }
    Field.prototype.init.call(this);

    if (!this.builderMode) {
      const { provider = "plsPlus", providerOptions } = this.component;

      if (provider) {
        this.provider = this.initializeProvider(provider, providerOptions);
      }
    }
  }

  initializeProvider(provider, options = {}) {
    const Provider = Formio.Providers.getProvider("address", provider);
    return new Provider({ ...options });
  }

  get emptyValue() {
    return this.manualModeEnabled
      ? {
          mode: PlsPlusAddressMode.Autocomplete,
          address: {
            address1: "",
            address2: "",
            address3: "",
            city: "",
            postcode: "",
            autocompleteAddress: "",
            selectedAddress: "",
            state: "QLD",
          },
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
        }
      : value;
  }

  setValue(value, flags = {}) {
    const changed = Field.prototype.setValue.call(this, value, flags);

    this.restoreComponentsContext();

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

  get searchInputAttributes() {
    const attr = {
      name: this.options.name,
      type: "text",
      class: "form-control",
      lang: this.options.language,
      tabindex: this.component.tabindex || 0,
    };

    if (this.component.placeholder) {
      attr.placeholder = this.t(this.component.placeholder);
    }

    if (
      this.disabled ||
      this.manualMode ||
      !this.component.providerOptions?.params?.apiKey
    ) {
      attr.disabled = "disabled";
    }

    _.defaults(attr, this.component.attributes);

    return attr;
  }

  get templateName() {
    return "plsPlusAddress";
  }

  get hasChildren() {
    return this.builderMode || this.manualModeEnabled;
  }

  renderElement(value) {
    this.getComponents().forEach((component) => {
      component.disabled = !this.manualMode;
      component.onChange = (flags, fromRoot) => {
        this.dataValue.address.selectedAddress = this.composedAddress;
        return super.onChange(flags, fromRoot);
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
        searchInput: PlsPlusAddress.searchInputRef,
      },
      displayValue: this.getDisplayValue(value),
      mode: {
        autocomplete: this.autocompleteMode,
        manual: this.manualMode,
      },
      hasApiKey: !!this.component.providerOptions?.params?.apiKey,
    });
  }

  render() {
    return super.render(this.renderElement());
  }

  onSelectAddress(address, element, index) {
    this.address.autocompleteAddress = address;

    this.triggerChange({
      modified: true,
    });

    if (element) {
      element.value = this.getDisplayValue(this.address);
    }

    this.updateRemoveIcon(index);
  }

  attach(element) {
    const result = (
      this.builderMode || this.manualMode
        ? super.attach
        : Field.prototype.attach
    ).call(this, element);

    if (!this.builderMode) {
      if (!this.provider && this.component.provider) {
        const { provider = "plsPlus", providerOptions } = this.component;
        this.provider = this.initializeProvider(provider, providerOptions);
      }
    }

    this.loadRefs(element, {
      [PlsPlusAddress.modeSwitcherRef]: "single",
      [PlsPlusAddress.removeValueIconRef]: "multiple",
      [PlsPlusAddress.searchInputRef]: "multiple",
    });

    this.searchInput.forEach((elem, index) => {
      if (!this.builderMode && elem && this.provider) {
        autocompleter({
          input: elem,
          debounceWaitMs: 300,
          fetch: (text, update) => {
            const query = text;
            const promise = this.provider.search(query);
            promise.then((response) => {
              update(response);
            });
          },
          render: (address) => {
            const div = this.ce("div");
            div.textContent = address;
            return div;
          },
          onSelect: (address) => {
            this.onSelectAddress(address, elem, index);
            this.provider.parseAddress(address).then((r) => {
              this.address = {
                ...this.address,
                ...this.provider.breakAddress(r),
              };
              this.triggerChange({
                modified: true,
              });
              // setTimeout(() => {
              //   this.restoreComponentsContext();
              // }, 1000);
              this.restoreComponentsContext();
              this.getComponents().forEach((component) => {
                const childElement = document.getElementById(
                  `${component.id}-${component.component.key}`
                );
                childElement.value = component.dataValue;
              });
            });
          },
        });

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

    if (this.modeSwitcher) {
      this.addEventListener(this.modeSwitcher, "change", () => {
        if (!this.modeSwitcher) {
          return;
        }

        this.mode = this.modeSwitcher.checked
          ? PlsPlusAddressMode.Manual
          : PlsPlusAddressMode.Autocomplete;

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
      this.address[index] = this.emptyValue.address;
    } else {
      this.address = this.emptyValue.address;
    }
    if (element) {
      element.value = "";
    }

    this.getComponents().forEach((component) => {
      const childElement = document.getElementById(
        `${component.id}-${component.component.key}`
      );
      if (childElement)
        childElement.value = this.address[component.component.key] || "";
    });

    this.updateRemoveIcon(index);
  }

  getDisplayValue(value = this.address) {
    return this.provider ? this.provider.getDisplayValue(value) : "";
  }

  updateRemoveIcon(index) {
    const removeValueIcon = this.removeValueIcon?.[index];
    if (removeValueIcon) {
      const value = this.address;
      if (
        this.manualMode ||
        this.isEmpty(value) ||
        _.isEmpty(value) ||
        this.disabled ||
        value.autocompleteAddress === ""
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
