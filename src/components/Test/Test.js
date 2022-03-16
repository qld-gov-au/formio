const ContainerComponent = Formio.Components.components.container;

export class Test extends ContainerComponent {
  static schema(...extend) {
    return ContainerComponent.schema(
      {
        type: "test",
        label: "test",
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
