import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { findByText } from "@testing-library/dom";
import * as FormioLoader from "../../helpers/FormioLoader";
import { formioRes } from "../../test/fixtures/simpleWizard";

// Functional test
test("SimpleWizard is functional", async () => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="formio" 
    class="qg-forms-v2"
    data-formio 
    data-formio-project-name="dev-svcwlpuksmwawwk" 
    data-formio-form-name="simpleWizard" 
    data-formio-env-url="api.forms.platforms.qld.gov.au" 
  ></div>
`;
  document.body.append(div);
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  const label1 = await findByText(div, "Text Field1");
  expect(label1).toBeVisible();

  const next1 = await findByText(div, "Next");
  expect(next1).toBeVisible();

  const page2 = await findByText(div, "Page 2");
  expect(page2).toBeVisible();
  await userEvent.click(page2);

  const next2 = await findByText(div, "Next");
  expect(next2).toBeVisible();

  const prev2 = await findByText(div, "Previous");
  expect(prev2).toBeVisible();

  const label2 = await findByText(div, "Text Field2");
  expect(label2).toBeVisible();

  const page3 = await findByText(div, "Page 3");
  expect(page3).toBeVisible();
  await userEvent.click(page3);

  const prev3 = await findByText(div, "Previous");
  expect(prev3).toBeVisible();

  const submit = await findByText(div, "Submit Form");
  expect(submit).toBeVisible();
});
