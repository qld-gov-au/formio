const AddressComponent = Formio.Components.components.address;

export class Test1 extends AddressComponent {
  static schema(...extend) {
    return AddressComponent.schema(
      {
        type: "test1",
        label: "test1",
        key: "test1",
        components: [
          {
            label: "Address line 1 <i>(include unit number if needed)</i>",
            persistent: false,
            tableView: false,
            key: "address1",
            type: "textfield",
            input: true,
          },
        ],
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: "test1",
      group: "custom",
      icon: "home",
      documentation: "/userguide/#address",
      weight: 2,
      schema: Test1.schema(),
    };
  }
}
