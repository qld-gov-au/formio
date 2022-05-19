/*
 * inherit button component
 * https://github.com/formio/formio.js/blob/master/src/components/button/Button.js
 *
 */

import BoilerplateEditForm from "./Boilerplate.form";

const Button = Formio.Components.components.button;
const Field = Formio.Components.components.field;

export class Boilerplate extends Button {
  static schema(...extend) {
    return Button.schema({
      // customise the component properties
      type: "pdfsubmitbutton",
      label: "Submit",
      key: "pdfsubmitbutton",
      // new property i want to add to this custom component
      customDescription: "This is a custom description",
      ...extend,
    });
  }

  // you could extent any super class functions here, always refer to the source code in formio.js to see what available
  init() {
    // eg. you can add custom logic here when the component initiates
    super.init();
  }

  render() {
    const renderElement = this.renderTemplate("button", {
      component: this.component,
      input: this.inputInfo,
    });
    return Field.prototype.render().call(this, renderElement);
  }

  // customise builder settings
  static get builderInfo() {
    return {
      title: "Boilerplate",
      group: "custom",
      icon: "fa-button",
      documentation: "/userguide/#button",
      weight: 2,
      schema: {
        ...Boilerplate.schema(),
      },
    };
  }
}

// customise builder editor settings
Boilerplate.editForm = BoilerplateEditForm;
