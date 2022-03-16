const ContainerComponent = Formio.Components.components.container;

export class Test extends ContainerComponent {
  static schema(...extend) {
    return ContainerComponent.schema(
      {
        type: "test",
        label: "test",
        key: "test",
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
      title: "test",
      group: "custom",
      icon: "home",
      documentation: "/userguide/#address",
      weight: 2,
      schema: Test.schema(),
    };
  }
}
