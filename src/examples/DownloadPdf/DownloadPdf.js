import * as FormioLoader from "../../helpers/FormioLoader";

export function DownloadPdf() {
  const div = document.createElement("div");
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="for2-oldkihhcwbdtwye" 
          data-formio-form-name="contactUsPdfCustom" 
          data-formio-env-url="api.forms.platforms.qld.gov.au" 
        ></div>
      `;

  setTimeout(() => {
    FormioLoader.initFormio();
  });

  return div;
}
