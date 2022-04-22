import * as FormioLoader from "../../helpers/FormioLoader";

export function PdfDownload() {
  const div = document.createElement("div");
  setTimeout(() => {
    FormioLoader.initFormio();
  });
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="for2-wuuyvpbiffyomhm" 
          data-formio-form-name="contactus" 
          data-formio-env-url="qol-formio-t-api.azurefd.net"
          data-formio-createForm-controller="customFn2"
        ></div>
      `;
  return div;
}
