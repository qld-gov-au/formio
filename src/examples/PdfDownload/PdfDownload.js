import * as FormioLoader from "../../helpers/FormioLoader";

export function PdfDownload() {
  const div = document.createElement("div");
  setTimeout(() => {
    FormioLoader.initFormio();
  });
  // emulate Squiz Matrix render the formio container in asset #249261
  // please note that in the template asset, i've add the ^htmlentities to render pdf-download-message
  // ie. data-formio-pdf-download-message="%asset_metadata_pdf-download-message^htmlentities%"
  // so the rich text value is htmlentities encoded and can be passed as data attribute with double quotes
  div.innerHTML = `
        <div id="formio" 
          class="qg-forms-v2"
          data-formio 
          data-formio-project-name="for2-wuuyvpbiffyomhm" 
          data-formio-form-name="contactus" 
          data-formio-env-url="qol-formio-t-api.azurefd.net"
          data-formio-createForm-controller="customFn2"
          data-formio-pdf-download="true"
          data-formio-pdf-download-message="&lt;p class=&quot;m1&quot;&gt;Test message&lt;/p&gt;"
        ></div>
      `;
  return div;
}
