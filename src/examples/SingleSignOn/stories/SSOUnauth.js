import * as FormioLoader from "../../../helpers/FormioLoader";

export function SSOUnauth() {
  const formioApiDomain = "api.forms.platforms.qld.gov.au";
  const formioProjectId = "ncwawujlwylhrfy";
  const formioServiceFormId = "devauthformstorybook";
  const div = document.createElement("div");
  div.innerHTML = `
    <div id="formio">
      <img src="https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"/>
    </div>
    `;
  const formioDiv = div.querySelector("#formio");

  FormioLoader.initFormioInstance(formioDiv, {
    projectName: formioProjectId,
    formName: formioServiceFormId,
    envUrl: formioApiDomain,
  });

  return div;
}
