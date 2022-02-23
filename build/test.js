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

const FieldComponent = Formio.Components.components.field;
const editForm = Formio.Components.components.nested.editForm;

/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
class CheckMatrix extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.checks = [];
  }

  static schema() {
    return FieldComponent.schema({
      type: 'checkmatrix',
      numRows: 3,
      numCols: 3
    });
  }

  static get builderInfo() {
    return {
      title: 'Check Matrix',
      group: 'basic',
      icon: 'fa fa-table',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#table',
      schema: CheckMatrix.schema()
    };
  }

  get tableClass() {
    let tableClass = 'table ';
    ['striped', 'bordered', 'hover', 'condensed'].forEach((prop) => {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    });
    return tableClass;
  }

  renderCell(row, col) {
    return this.renderTemplate('input', {
      input: {
        type: 'input',
        ref: `${this.component.key}-${row}`,
        attr: {
          id: `${this.component.key}-${row}-${col}`,
          class: 'form-control',
          type: 'checkbox',
        }
      }
    });
  }

  render(children) {
    let table = '<table class="table table-compressed"><tbody>';
    for (let i = 0; i < this.component.numRows; i++) {
    	table += '<tr>';
      for (let j = 0; j < this.component.numCols; j++) {
      	table += '<td>';
        table += this.renderCell(i, j);
        table += '</td>';
      }
      table += '</tr>';
    }
    table += '</tbody></table>';
    return super.render(table);
  }

  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    const refs = {};

    for (let i = 0; i < this.component.numRows; i++) {
      refs[`${this.component.key}-${i}`] = 'multiple';
    }

    this.loadRefs(element, refs);
    this.checks = [];
    for (let i = 0; i < this.component.numRows; i++) {
      this.checks[i] = Array.prototype.slice.call(this.refs[`${this.component.key}-${i}`], 0);

      // Attach click events to each input in the row
      this.checks[i].forEach(input => {
        this.addEventListener(input, 'click', () => this.updateValue())
      });
    }

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  /**
   * Get the value of the component from the dom elements.
   *
   * @returns {Array}
   */
  getValue() {
    var value = [];
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      value[rowIndex] = [];
      for (var colIndex in row) {
        var col = row[colIndex];
        value[rowIndex][colIndex] = !!col.checked;
      }
    }
    return value;
  }

  /**
   * Set the value of the component into the dom elements.
   *
   * @param value
   * @returns {boolean}
   */
  setValue(value) {
    if (!value) {
      return;
    }
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      if (!value[rowIndex]) {
        break;
      }
      for (var colIndex in row) {
        var col = row[colIndex];
        if (!value[rowIndex][colIndex]) {
          return false;
        }
        let checked = value[rowIndex][colIndex] ? 1 : 0;
        col.value = checked;
        col.checked = checked;
      }
    }
  }
}

Formio.Components.addComponent('checkmatrix', CheckMatrix);
Formio.Components.addComponent('header', HeaderComponent);
