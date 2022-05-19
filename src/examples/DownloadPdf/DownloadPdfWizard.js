import * as FormioLoader from "../../helpers/FormioLoader";

export function DownloadPdfWizard() {
  const div = document.createElement("div");
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="dev-svcwlpuksmwawwk" 
          data-formio-form-name="pdfDownloadDemo" 
          data-formio-env-url="api.forms.platforms.qld.gov.au" 
        ></div>
      `;

  setTimeout(() => {
    FormioLoader.initFormio();
  });

  return div;
}
