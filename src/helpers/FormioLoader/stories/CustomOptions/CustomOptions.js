import * as FormioLoader from "../..";

export function CustomOptions() {
  function customCtrl({ defaultOptions }) {
    // you can see the defaultOptions in the browser's inspector, and possible to manipulate and return it.
    console.info("defaultOptions:", defaultOptions);
    return {
      readOnly: true,
    };
  }
  const elem = document.getElementById("formio-options");
  FormioLoader.initFormioInstance(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "testing1",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
    createFormOptions: customCtrl,
  });
}
