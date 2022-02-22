// Get the HTMLComponent from the components listing.
const HTMLComponent = Formio.Components.components.htmlelement;

/**
 * Create a Header compoennt and extend from the HTMLComponent.
 */
class HeaderComponent extends HTMLComponent {
  /**
   * Define the default schema to change the type and tag and label. 
   */
  static schema(...extend) {
    return HTMLComponent.schema({
      label: 'Header',
      type: 'header',
      tag: 'h1'
    }, ...extend);
  }
  
  static get builderInfo() {
    return {
      title: 'Header',
      group: 'layout',
      icon: 'code',
      weight: 2,
      documentation: '/userguide/#html-element-component',
      schema: HeaderComponent.schema()
    };
  }
}

/**
 * Change the edit form to make the "tag" component a select dropdown
 * instead of a textfield so that they can only configure the "h2" fields.
 */
HeaderComponent.editForm = (...args) => {
  const editForm = HTMLComponent.editForm(...args);
  const tagComponent = Formio.Utils.getComponent(editForm.components, 'tag');
  tagComponent.type = 'select';
  tagComponent.dataSrc = 'values';
  tagComponent.data = {
    values: [
      {label: 'H1', value: 'h1'},
      {label: 'H2', value: 'h2'},
      {label: 'H3', value: 'h3'},
      {label: 'H4', value: 'h4'},
      {label: 'H5', value: 'h5'}
    ]
  };
  return editForm;
};

Formio.Components.addComponent('header', HeaderComponent);
