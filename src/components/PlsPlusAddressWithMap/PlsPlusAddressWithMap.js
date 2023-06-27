/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.js
 * need to extend from `container` to `fieldset` due to Formio app upgrade from 7.1.2 to 7.3.0
 * otherwise component data will get erase when submitted to the server
 *
 * This has templates stored under templates/plsPlusAddressWithMap
 */

import autocompleter from "autocompleter";
import _ from "lodash";

import PlsPlusAddressWithMapEditForm from "./PlsPlusAddressWithMap.form";

const FieldsetComponent = Formio.Components.components.fieldset;
const Field = Formio.Components.components.field;

const PlsPlusAddressMode = {
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

const addressKeys = [
  "autocompleteAddress",
  "selectedAddress",
  "mode",
  "address1",
  "address2",
  "address3",
  "city",
  "state",
  "postcode",
];
export class PlsPlusAddressWithMap extends FieldsetComponent {
  constructor(...args) {
    super(...args);
    this.noField = false;
  }

  static schema(...extend) {
    return FieldsetComponent.schema(
      {
        type: "plsplusaddresswithmap",
        label: "PlsPlus Address",
        key: "PlsPlusAddressWithMap",
        switchToManualModeLabel: "Can't find address? Switch to manual mode.",
        providerOptions: {},
        map: {
          key: "AIzaSyD7a5rQ1GSkJszPP76MXnvWFVBlYkzjFdc",
          region: "au",
          gmapId: "",
          autocompleteOptions: {},
        },
        hideLabel: false,
        disableClearIcon: false,
        enableManualMode: true,
        input: true,
        persistent: "client-only",
        validate: {
          required: true,
        },
        components: [
          {
            key: "addressData",
            type: "container",
            label: "Address data",
            tableView: true,
            tags: ["container"],
            components: [
              {
                label: "Autocomplete address",
                key: "autocompleteAddress",
                tags: ["autocompleteAddress"],
                type: "hidden",
              },
              {
                label: "Selected address",
                key: "selectedAddress",
                tags: ["selectedAddress"],
                type: "hidden",
              },
              {
                label: "Mode",
                key: "mode",
                tags: ["mode"],
                type: "hidden",
              },
              {
                label: "Address line 1 <i>(include unit number if needed)</i>",
                key: "address1",
                tags: ["address1"],
                type: "textfield",
                input: true,
                validate: {
                  required: true,
                  ...addressValidation,
                },
              },
              {
                label: "Address line 2",
                key: "address2",
                tags: ["address2"],
                type: "textfield",
                input: true,
                validate: addressValidation,
              },
              {
                label: "Address line 3",
                key: "address3",
                tags: ["address3"],
                type: "textfield",
                input: true,
                validate: addressValidation,
              },
              {
                label: "Town, City or Suburb",
                key: "city",
                tags: ["city"],
                type: "textfield",
                input: true,
                validate: {
                  required: true,
                  ...addressValidation,
                },
              },
              {
                label: "State",
                key: "state",
                tags: ["state"],
                type: "textfield",
                input: true,
                disabled: true,
                defaultValue: "QLD",
              },
              {
                label: "Postcode",
                key: "postcode",
                tags: ["postcode"],
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
              {
                label: "Google Maps data",
                key: "gmapElement",
                tags: ["gmapElement"],
                type: "hidden",
              },
            ],
          },
        ],
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: "PlsPlus Address With Map",
      group: "custom",
      icon: "home",
      documentation: "/userguide/#address",
      weight: 2,
      schema: {
        ...PlsPlusAddressWithMap.schema(),
      },
    };
  }

  getComponents() {
    return this.components || [];
  }

  mergeSchema(component = {}) {
    let { defaultSchema } = this;
    if (component.components) {
      defaultSchema = _.omit(defaultSchema, "components");
    }

    return _.defaultsDeep(component, defaultSchema);
  }

  get defaultSchema() {
    return {
      ...PlsPlusAddressWithMap.schema(),
    };
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
      if (this.address)
        this.setAddressProp(
          "selectedAddress",
          this.address.autocompleteAddress
        );
    } else if (this.address)
      this.setAddressProp("selectedAddress", this.composedAddress);
    return super.onChange(flags, fromRoot);
  }

  init() {
    this.components = this.components || [];

    Field.prototype.init.call(this);

    if (!this.builderMode) {
      const { provider = "plsPlus", providerOptions } = this.component;

      if (provider) {
        this.provider = this.initializeProvider(provider, providerOptions);
      }
    }
    // Get the source for Google Maps API
    let src =
      "https://maps.googleapis.com/maps/api/js?v=3&libraries=places&callback=googleMapsCallback";
    if (this.component.map && this.component.map.key) {
      src += `&key=${this.component.map.key}`;
    }
    if (this.component.map && this.component.map.region) {
      src += `&region=${this.component.map.region}`;
    }
    Formio.requireLibrary("googleMaps", "google.maps.places", src);
    return super.init();
  }

  initializeProvider(provider, options = {}) {
    const Provider = Formio.Providers.getProvider("address", provider);
    return new Provider({ ...options });
  }

  get manualModeEnabled() {
    return Boolean(this.component.enableManualMode);
  }

  get mode() {
    if (!this.manualModeEnabled) {
      return PlsPlusAddressMode.Autocomplete;
    }
    return this.address.mode || PlsPlusAddressMode.Autocomplete;
  }

  set mode(value) {
    this.setAddressProp("mode", value);
  }

  get emptyValue() {
    return this.manualModeEnabled
      ? {
          address: {
            address1: "",
            address2: "",
            address3: "",
            city: "",
            postcode: "",
            autocompleteAddress: "",
            selectedAddress: "",
            state: "QLD",
            mode: this.mode,
          },
        }
      : {};
  }

  get autocompleteMode() {
    return this.mode === PlsPlusAddressMode.Autocomplete;
  }

  get manualMode() {
    return this.mode === PlsPlusAddressMode.Manual;
  }

  get isMultiple() {
    return Boolean(this.component.multiple);
  }

  get container() {
    return this.getComponents().find((comp) =>
      comp.originalComponent.tags?.includes("container")
    );
  }

  get address() {
    const dataValue = this.container?.dataValue;
    const addressData = addressKeys.map((k) => {
      if (this.container) {
        const componentKey = this.container
          .getComponents()
          .find((comp) => comp.originalComponent.tags?.includes(k))
          ?.component.key;
        return {
          [k]: dataValue[componentKey],
        };
      }
      return {};
    });

    return Object.assign({}, ...addressData);
  }

  set address(value) {
    this.dataValue = value;
    let changed = false;
    if (this.container) {
      addressKeys.forEach((k) => {
        const componentKey = this.container
          .getComponents()
          .find((comp) => comp.originalComponent.tags?.includes(k))
          ?.component.key;
        if (this.container.dataValue[componentKey] !== value[k]) {
          this.container.dataValue[componentKey] = value[k];
          changed = true;
        }
      });
    }
    if (changed) this.onChange({ modified: true });
  }

  setAddressProp(prop, value) {
    if (this.address[prop] === value) return;
    this.address = { ...this.address, [prop]: value };
  }

  restoreComponentsContext() {
    this.container?.getComponents().forEach((component) => {
      component.data = this.container.dataValue;
      component.setValue(component.dataValue, {
        noUpdateEvent: true,
      });
    });
  }

  setValue(value, flags = {}) {
    // const changed = Field.prototype.setValue.call(this, value, flags);
    this.restoreComponentsContext();

    if (!_.isEmpty(value) && flags.fromSubmission) {
      setTimeout(() => {
        this.redraw();
      });
    }

    return super.setValue(value, flags);
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

  static get gmapElement() {
    return "gmapElement";
  }

  get modeSwitcher() {
    return this.refs
      ? this.refs[PlsPlusAddressWithMap.modeSwitcherRef] || null
      : null;
  }

  get removeValueIcon() {
    return this.refs
      ? this.refs[PlsPlusAddressWithMap.removeValueIconRef] || null
      : null;
  }

  get searchInput() {
    return this.refs
      ? this.refs[PlsPlusAddressWithMap.searchInputRef] || null
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
    return "plsPlusAddressWithMap";
  }

  get hasChildren() {
    return this.builderMode || this.manualModeEnabled;
  }

  renderElement(value) {
    this.container?.getComponents().forEach((component) => {
      if (!this.builderMode && this.attached) {
        component.disabled =
          component.originalComponent.disabled || !this.manualMode;
        component.component.validate = !this.manualMode
          ? {}
          : component.originalComponent.validate;
      }

      component.onChange = (flags, fromRoot) => {
        if (flags.modified && component.originalComponent.tags.length) {
          this.setAddressProp(
            component.originalComponent.tags[0],
            component.dataValue
          );
        }
        return this.onChange(flags, fromRoot);
      };
    });
    if (!this.builderMode && this.attached) {
      this.component.validate = {
        ...(this.originalComponent?.validate?.required && {
          custom: `valid = !!instance.address.selectedAddress;`,
          customMessage: `${this.component.label} is required.`,
          required: !this.manualMode,
        }),
      };
    }

    return this.renderTemplate(this.templateName, {
      children: this.hasChildren ? this.renderComponents() : "",
      nestedKey: this.nestedKey,
      inputAttributes: this.searchInputAttributes,
      ref: {
        modeSwitcher: PlsPlusAddressWithMap.modeSwitcherRef,
        removeValueIcon: PlsPlusAddressWithMap.removeValueIconRef,
        searchInput: PlsPlusAddressWithMap.searchInputRef,
      },
      displayValue: this.getDisplayValue(value),
      mode: {
        autocomplete: this.autocompleteMode,
        manual: this.manualMode,
      },
      hasApiKey: !!this.component.providerOptions?.params?.apiKey,
      mapId: this.component.map.gmapId,
    });
  }

  render() {
    return super.render(this.renderElement());
  }

  onSelectAddress(address, element, index) {
    this.setAddressProp("autocompleteAddress", address);

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
      [PlsPlusAddressWithMap.modeSwitcherRef]: "single",
      [PlsPlusAddressWithMap.removeValueIconRef]: "multiple",
      [PlsPlusAddressWithMap.searchInputRef]: "multiple",
      [PlsPlusAddressWithMap.gmapElement]: "multiple", // inside form.ejs template
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
                mode: this.mode,
              };
              this.restoreComponentsContext();
              this.container.getComponents().forEach((component) => {
                const childElement = document.getElementById(
                  `${component.id}-${component.component.key}`
                );
                if (childElement) childElement.value = component.dataValue;
              });
            });
            this.redraw();
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
          } else {
            this.clearAddress(this.searchInput);
          }
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
    const searchInputInFocus =
      this.searchInput && document.activeElement === this.searchInput;

    return super.redraw().then((result) => {
      if (modeSwitcherInFocus && this.modeSwitcher) {
        this.modeSwitcher.focus();
      }
      if (searchInputInFocus && this.searchInput) {
        this.searchInput.focus();
      }

      return result;
    });
  }

  clearAddress(element, index) {
    this.address = this.emptyValue.address;

    if (element) {
      element.value = "";
    }

    this.container?.getComponents().forEach((component) => {
      const childElement = document.getElementById(
        `${component.id}-${component.component.key}`
      );
      if (childElement) childElement.value = component.dataValue;
    });

    this.updateRemoveIcon(index);
    this.redraw();
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

  focus() {
    if (this.searchInput && this.searchInput[0]) {
      this.searchInput[0].focus();
    }
  }
}

PlsPlusAddressWithMap.editForm = PlsPlusAddressWithMapEditForm;

// Register the component to the Formio.Components registry.
Formio.Components.addComponent("PlsPlusAddressWithMap", PlsPlusAddressWithMap);
