import * as FormioLoader from "../..";

export function CustomController() {
  const customCtrl = ({ form }) => {
    form.on("change", (e) => {
      // you can see the data object in the browser's inspector whenever you change the field value.
      console.info("onChange", e.data);
    });
  };
  const elem = document.getElementById("formio-controller");
  FormioLoader.initFormioInstance(elem, {
    projectName: "dev-svcwlpuksmwawwk",
    formName: "testing2",
    envUrl: "api.forms.platforms.qld.gov.au",
    pdfDownload: "no",
    createFormController: customCtrl,
  });
}
