import * as FormioLoader from "../../helpers/FormioLoader";

export function SimpleWizard() {
  const div = document.createElement("div");
  setTimeout(() => {
    FormioLoader.initFormio();
  });
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="dev-svcwlpuksmwawwk" 
          data-formio-form-name="simpleWizard" 
          data-formio-env-url="api.forms.platforms.qld.gov.au" 
        ></div>
      `;
  return div;
}
