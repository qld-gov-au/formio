import * as FormioLoader from "../..";

export function InitFormioInstance() {
  const elem = document.getElementById("formio-alt");
  FormioLoader.initFormioInstance(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "plsPlusFormDemo",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
  });
}
