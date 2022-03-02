const HTMLComponent = Formio.Components.components.htmlelement;

export class CustomHeader extends HTMLComponent {
  /**
   * Define the default schema to change the type and tag and label. 
   */
  static schema(...extend) {
    return HTMLComponent.schema({
      label: 'CustomHeader',
      type: 'customheader',
      tag: 'h1'
    }, ...extend);
  }
  
  
  static get builderInfo() {
    return {
      title: 'CustomHeader',
      group: 'custom',
      icon: 'code',
      weight: 2,
      documentation: '/userguide/#html-element-component',
      schema: CustomHeader.schema()
    };
  }
}