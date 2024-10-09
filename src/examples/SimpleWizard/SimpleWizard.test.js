import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { findByText } from "@testing-library/dom";
import * as FormioLoader from "../../helpers/FormioLoader";
import { formioRes } from "../../test/fixtures/simpleWizard";
import { testWait } from "../../utils";

// Functional test
test("SimpleWizard is functional", async () => {
  let changed;
  let submitted;
  let changedData;
  let submittedData;
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="formio" 
    class="qg-forms-v2"
    data-formio 
    data-formio-project-name="dev-svcwlpuksmwawwk" 
    data-formio-form-name="simpleWizard" 
    data-formio-env-url="api.forms.platforms.qld.gov.au" 
    data-formio-createform-controller="customFormController"
  ></div>
`;
  document.body.append(div);
  window.customFormController = ({ form }) => {
    form.on("change", (e) => {
      changed = true;
      changedData = e.data;
    });
    
    form.on("submitDone", (e) => {
      submitted = true;
      submittedData = e.data;
    });

    form.on("submitError", (e) => {
      console.info("Testing form submitError", e);
    });
  };
  
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  const label1 = await findByText(div, "Text Field1");
  expect(label1).toBeVisible();

  const radio1 = div.querySelector('input[role="radio"]');
  expect(radio1).toBeVisible();
  await userEvent.click(radio1);

  const next1 = await findByText(div, "Next");
  expect(next1).toBeVisible();

  const page2 = await findByText(div, "Page 2");
  expect(page2).toBeVisible();

  /* Page 2 tests */
  // Wait before clicking "Page 2" panel.
  await testWait();
  await userEvent.click(page2);

  const next2 = await findByText(div, "Next");
  expect(next2).toBeVisible();

  const prev2 = await findByText(div, "Previous");
  expect(prev2).toBeVisible();

  const label2 = await findByText(div, "Text Field2");
  expect(label2).toBeVisible();

  // user enters input
  await userEvent.type(div.querySelector("input"), "Testing field 2", {
    delay: 100,
  });
  await testWait();
  expect(changed).toEqual(true);
  expect(changedData).toEqual({
    radio: "yes",
    textField1: "",
    textField2: "Testing field 2",
    textField3: "",
  });

  const page3 = await findByText(div, "Page 3");
  expect(page3).toBeVisible();
  /* End of: Page 2 tests */


  /* Page 3 tests */
  await testWait();
  await userEvent.click(page3);

  await userEvent.type(div.querySelector("input"), "Testing field 3", {
    delay: 100,
  });
  await testWait();

  const prev3 = await findByText(div, "Previous");
  expect(prev3).toBeVisible();

  const submit = await findByText(div, "Submit Form");
  expect(submit).toBeVisible();

  const submissionData = {
    radio: "yes",
    textField1: "",
    textField2: "Testing field 2",
    textField3: "Testing field 3",
  };
  expect(changedData).toEqual(submissionData);
  /* End of: Page 3 tests */


  /* Form Submit tests  */

  // mock submission response
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce({
    data: submissionData,
    state: "submitted",
  });

  // user submit the form
  await testWait();
  await userEvent.click(submit);
  await testWait();

  expect(submitted).toEqual(true);
  expect(submittedData).toEqual(submissionData);

  /* End of: Form Submit tests  */

});
