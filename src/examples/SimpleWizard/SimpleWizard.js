import * as FormioLoader from "../../helpers/FormioLoader";

export function SimpleWizard() {
  window.customFormController = ({ form }) => {
    // example to add custom form controller to the initiated form
    // refer to https://help.form.io/developers/form-renderer#form-events for form event
    form.on("change", (e) => {
      console.info("change", e);
    });
    form.on("nextPage", (e) => {
      console.info("nextPage", e);
    });
    form.on("prevPage", (e) => {
      console.info("prevPage", e);
    });
    form.on("submitError", (e) => {
      console.info("submitError", e);
    });
    form.on("submit", (e) => {
      console.info("submit", e);
    });
    form.on("submitDone", (e) => {
      console.info("submitDone", e);
    });
  };

  window.customFormOptions = () => {
    // example to add custom form options to initiate the form
    // refer to https://help.form.io/developers/form-renderer#form-renderer-options for form options
    return {
      buttonSettings: {
        showCancel: true,
        showPrevious: true,
        showNext: true,
        showSubmit: true,
      },
    };
  };

  const div = document.createElement("div");
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="dev-svcwlpuksmwawwk" 
          data-formio-form-name="simpleWizard" 
          data-formio-env-url="api.forms.platforms.qld.gov.au" 
          data-formio-createform-controller="customFormController"
          data-formio-createform-options="customFormOptions"
        ></div>
      `;

  setTimeout(() => {
    FormioLoader.initFormio();
  });

  return div;
}
