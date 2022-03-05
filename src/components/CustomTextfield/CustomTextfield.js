const TextfieldComponent = Formio.Components.components.textfield;

export class CustomTextfield extends TextfieldComponent {
  /**
   * Define the default schema to change the type and tag and label.
   */
  static schema(...extend) {
    return TextfieldComponent.schema(
      {
        label: "CustomTextfield",
        type: "customtextfield",
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: "CustomTextfield",
      group: "custom",
      icon: "terminal",
      weight: 2,
      documentation: "/userguide/#html-element-component",
      schema: CustomTextfield.schema(),
    };
  }
}
