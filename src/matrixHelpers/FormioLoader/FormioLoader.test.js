import "@testing-library/jest-dom";
import { findByText } from "@testing-library/dom";
import * as FormioLoader from "./index";
import { testWait } from "../../utils";
import { formioRes } from "./fixtures";

// Smoke test
test("FormioLoader is initiated", async () => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="formio" 
    data-formio 
    data-project-name="dev-svcwlpuksmwawwk" 
    data-form-name="plsPlusFormDemo" 
    data-form-confirmation="" 
    data-form-revision="" 
    data-env-url="api.forms.platforms.qld.gov.au" 
    data-pdf-download="no" 
    data-namespace="" 
  ></div>
`;
  document.body.append(div);
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  const label = await findByText(div, "Address");
  expect(label).toBeVisible();
  expect(label.tagName.toLowerCase()).toEqual("label");
});

// Smoke test
test("FormioLoader is initiated with invalid div", async () => {
  const div = document.createElement("div");
  div.innerHTML = `<div id="formio" data-formio ></div>`;
  document.body.append(div);
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  await testWait();
  expect(div.innerHTML).toEqual(`<div id="formio" data-formio=""></div>`);
});
