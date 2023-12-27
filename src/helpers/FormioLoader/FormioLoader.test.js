import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { findByText } from "@testing-library/dom";
import * as FormioLoader from "./index";
import { testWait } from "../../utils";
import { formioRes } from "../../test/fixtures/plsPlusAddress";

// Smoke test
test("FormioLoader is initiated", async () => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="formio"
    data-formio
    data-formio-project-name="dev-svcwlpuksmwawwk"
    data-formio-form-name="plsPlusFormDemo"
    data-formio-form-confirmation=""
    data-formio-form-revision=""
    data-formio-env-url="api.forms.platforms.qld.gov.au"
    data-formio-pdf-download="no"
    data-formio-namespace=""
  ></div>
`;
  document.body.append(div);
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  const label = await findByText(div, "PlsPlus Address");
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

// Smoke test
test("FormioLoader with custom option hook", async () => {
  window.customOptionsFn = () => {
    return {
      readOnly: true,
    };
  };

  const div = document.createElement("div");
  div.innerHTML = `
  <div id="formio"
    data-formio
    data-formio-project-name="dev-svcwlpuksmwawwk"
    data-formio-form-name="plsPlusFormDemo"
    data-formio-form-confirmation=""
    data-formio-form-revision=""
    data-formio-env-url="api.forms.platforms.qld.gov.au"
    data-formio-pdf-download="no"
    data-formio-namespace=""
    data-formio-createForm-options="customOptionsFn"
  ></div>
`;
  document.body.append(div);
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  const label = await findByText(div, "PlsPlus Address");
  expect(label).toBeVisible();

  const autocomplete = div.querySelector("input[name='data[plsplusaddress]']");
  expect(autocomplete).toBeVisible();
  expect(autocomplete).toBeDisabled();
});

// Smoke test
test("FormioLoader with custom controller hook", async () => {
  let data = {};
  window.customControllerFn = ({ form }) => {
    form.on("change", (e) => {
      data = e.data;
    });
  };

  const div = document.createElement("div");
  div.innerHTML = `
  <div id="formio"
    data-formio
    data-formio-project-name="dev-svcwlpuksmwawwk"
    data-formio-form-name="plsPlusFormDemo"
    data-formio-form-confirmation=""
    data-formio-form-revision=""
    data-formio-env-url="api.forms.platforms.qld.gov.au"
    data-formio-pdf-download="no"
    data-formio-namespace=""
    data-formio-createForm-controller="customControllerFn"
  ></div>
`;
  document.body.append(div);
  FormioLoader.initFormio();
  jest.spyOn(Formio, "makeRequest").mockResolvedValueOnce(formioRes);

  const label = await findByText(div, "PlsPlus Address");
  expect(label).toBeVisible();

  const checkbox = div.querySelector("input[ref='modeSwitcher']");
  expect(checkbox).not.toBeChecked();
  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  await testWait();
  expect(data).toEqual({
    addressData: {
      address1: "",
      address2: "",
      address3: "",
      autocompleteAddress: "",
      city: "",
      mode: "manual",
      postcode: "",
      selectedAddress: "QLD",
      state: "QLD",
    },
    plsplusaddress: {
      address1: "",
      address2: "",
      address3: "",
      autocompleteAddress: "",
      city: "",
      mode: "manual",
      postcode: "",
      selectedAddress: "QLD",
      state: "QLD",
    },
    submit: false,
  });
});
