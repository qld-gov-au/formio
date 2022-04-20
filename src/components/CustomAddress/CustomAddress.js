const AddressComponent = Formio.Components.components.address;

export class CustomAddress extends AddressComponent {
  /**
   * Define the default schema to change the type and tag and label.
   */
  static schema(...extend) {
    return AddressComponent.schema(
      {
        label: "CustomAddress",
        type: "customaddress",
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: "CustomAddress",
      group: "custom",
      icon: "terminal",
      weight: 2,
      documentation: "/userguide/#html-element-component",
      schema: CustomAddress.schema(),
    };
  }
}
