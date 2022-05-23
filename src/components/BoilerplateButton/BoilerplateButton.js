/*
 * This component is used as a boilerplate for helping developers to create their own custom component.
 * Please refer to this guide for creating custom component https://help.form.io/developers/custom-components.
 * Always refer to the formio.js source code to find more information about the component you'd like to extend.
 * For example this component is extending from:
 * https://github.com/formio/formio.js/blob/master/src/components/button/Button.js
 *
 */

import BoilerplateButtonEditForm from "./BoilerplateButton.form";

const Button = Formio.Components.components.button;
const Field = Formio.Components.components.field;

export class BoilerplateButton extends Button {
  static schema(...extend) {
    return Button.schema({
      // customise the component properties
      type: "boilerplatebutton",
      label: "Boilerplate button",
      key: "boilerplatebutton",
      // new property i want to add to this custom component
      customDescription: "This is a custom description",
      ...extend,
    });
  }

  // you could extent any super class functions here, always refer to the source code in formio.js to see what available
  init() {
    // for example. you can add custom logic here when the component initiates
    super.init();
  }

  render() {
    // use custom boilerplateButton template
    return Field.prototype.render.call(
      this,
      this.renderTemplate("boilerplateButton", {
        component: this.component,
        input: this.inputInfo,
      })
    );
  }

  // customise builder settings
  static get builderInfo() {
    return {
      title: "BoilerplateButton",
      group: "custom",
      icon: "stop",
      documentation: "/userguide/#button",
      weight: 2,
      schema: {
        ...BoilerplateButton.schema(),
      },
    };
  }
}

// customise builder editor
BoilerplateButton.editForm = BoilerplateButtonEditForm;
