/* eslint-disable jest/expect-expect */
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { findByText, getByText, screen } from "@testing-library/dom";

import { createForm, testWait } from "../../utils";

import * as fixtures from "./fixtures";

const formSettings = {
  components: [
    {
      type: "plsplusaddress",
      key: "plsplusaddress",
      label: "PlsPlus Address field",
      providerOptions: {
        params: {
          apiKey: "formiotest",
        },
      },
    },
    {
      type: "button",
      key: "submit",
      label: "Submit",
      action: "submit",
    },
  ],
};

const functionTest = (caseName) => async () => {
  let data = {};
  const form = createForm({
    form: formSettings,
    controller: (formio) => {
      formio.on("submit", (e) => {
        data = e.data;
      });
    },
  });
  document.body.append(form);

  const label = await findByText(form, "PlsPlus Address field");
  expect(label).toBeVisible();
  const autocomplete = form.querySelector("input[name='data[plsplusaddress]']");
  expect(autocomplete).toBeVisible();

  // user focus on autocomplete
  userEvent.click(autocomplete);
  await testWait();
  // mock autocomplete data
  jest
    .spyOn(Formio, "makeStaticRequest")
    .mockResolvedValueOnce(fixtures[`autocompleteResult${caseName}`]);

  // user types in autocomplete
  await userEvent.type(autocomplete, fixtures[`autocompleteInput${caseName}`], {
    delay: 100,
  });
  expect(autocomplete).toHaveValue(fixtures[`autocompleteInput${caseName}`]);

  // autocomplete returns results
  const option = await screen.findByText(
    fixtures[`formData${caseName}`].plsplusaddress.address.autocompleteAddress
  );
  expect(option).toBeVisible();

  // mock parseAddress data
  jest
    .spyOn(Formio, "makeStaticRequest")
    .mockResolvedValueOnce(fixtures[`parseAddressResult${caseName}`]);

  // user clicks on an option
  userEvent.click(option);
  await testWait();

  // address1 automatically parsed and populated
  const address1 = form.querySelector(
    "input[name='data[plsplusaddress][address1]']"
  );
  expect(address1).toHaveValue(
    fixtures[`formData${caseName}`].plsplusaddress.address.address1
  );
  await testWait();

  // user submits form
  const button = getByText(form, "Submit");
  expect(button).toBeVisible();
  await userEvent.click(button);
  await testWait();

  // form submitted with expected data
  expect(data).toEqual(fixtures[`formData${caseName}`]);
};

// Smoke test
test("PlsPlusAddress is rendered", async () => {
  const form = createForm({
    form: formSettings,
  });
  document.body.append(form);
  const label = await findByText(form, "PlsPlus Address field");
  expect(label).toBeVisible();
  const autocomplete = form.querySelector("input[name='data[plsplusaddress]']");
  expect(autocomplete).toBeVisible();
  const checkbox = form.querySelector("input[ref='modeSwitcher']");
  expect(checkbox).toBeVisible();
  const address1 = form.querySelector(
    "input[name='data[plsplusaddress][address1]']"
  );
  expect(address1).toBeVisible();
  const address2 = form.querySelector(
    "input[name='data[plsplusaddress][address2]']"
  );
  expect(address2).toBeVisible();
  const address3 = form.querySelector(
    "input[name='data[plsplusaddress][address3]']"
  );
  expect(address3).toBeVisible();
  const city = form.querySelector("input[name='data[plsplusaddress][city]']");
  expect(city).toBeVisible();
  const state = form.querySelector("input[name='data[plsplusaddress][state]']");
  expect(state).toBeVisible();
  const postcode = form.querySelector(
    "input[name='data[plsplusaddress][postcode]']"
  );
  expect(postcode).toBeVisible();
});

// Functional test
test("PlsPlusAddress autocomplete mode is functional", functionTest("Case1"));

// Functional test
test(
  "PlsPlusAddress autocomplete mode with multiple parseAddress results is functional",
  functionTest("Case2")
);

// Functional test
test("PlsPlusAddress remove button is functional", async () => {
  const caseName = "Case1";
  const form = createForm({
    form: formSettings,
  });
  document.body.append(form);

  const label = await findByText(form, "PlsPlus Address field");
  expect(label).toBeVisible();
  const autocomplete = form.querySelector("input[name='data[plsplusaddress]']");
  expect(autocomplete).toBeVisible();

  // removeButton should be hidden
  const removeButton = form.querySelector("i[ref='removeValueIcon']");
  expect(removeButton).toHaveClass(
    "address-autocomplete-remove-value-icon--hidden"
  );

  // user focus on autocomplete
  await userEvent.click(autocomplete);
  // mock autocomplete data
  jest
    .spyOn(Formio, "makeStaticRequest")
    .mockResolvedValueOnce(fixtures[`autocompleteResult${caseName}`]);

  // user types in autocomplete
  await userEvent.type(autocomplete, fixtures[`autocompleteInput${caseName}`], {
    delay: 100,
  });
  expect(autocomplete).toHaveValue(fixtures[`autocompleteInput${caseName}`]);

  // autocomplete returns results
  const option = await screen.findByText(
    fixtures[`formData${caseName}`].plsplusaddress.address.autocompleteAddress
  );
  expect(option).toBeVisible();

  // mock parseAddress data
  jest
    .spyOn(Formio, "makeStaticRequest")
    .mockResolvedValueOnce(fixtures[`parseAddressResult${caseName}`]);

  // user clicks on an option
  await userEvent.click(option);
  await testWait();

  // address1 automatically parsed and populated
  const address1 = form.querySelector(
    "input[name='data[plsplusaddress][address1]']"
  );
  expect(address1).toHaveValue(
    fixtures[`formData${caseName}`].plsplusaddress.address.address1
  );
  await testWait();

  // remove button should be visible
  expect(removeButton).not.toHaveClass(
    "address-autocomplete-remove-value-icon--hidden"
  );

  // user clicks on remove button
  await userEvent.click(removeButton);

  // fields should be cleared
  expect(address1).toHaveValue("");
  expect(autocomplete).toHaveValue("");

  // form should be invalid if submitted
  const button = getByText(form, "Submit");
  expect(button).toBeVisible();
  await userEvent.click(button);
  await testWait();

  // warning should be visible
  const warning = await findByText(
    form,
    `<span class="fa fa-exclamation-triangle"></span> Please check your answers`
  );
  expect(warning).toBeVisible();
});

// Functional test
test("PlsPlusAddress manual mode is functional", async () => {
  let data = {};
  const form = createForm({
    form: formSettings,
    controller: (formio) => {
      formio.on("submit", (e) => {
        data = e.data;
      });
      // formio.on("change", (e) => {
      //   data = e.data;
      // });
    },
  });
  document.body.append(form);

  const label = await findByText(form, "PlsPlus Address field");
  expect(label).toBeVisible();
  await testWait();

  // user clicks on the manual mode checkbox
  const checkbox = form.querySelector("input[ref='modeSwitcher']");
  // expect(checkbox).toBeVisible();
  expect(checkbox).not.toBeChecked();
  await userEvent.click(checkbox);
  await testWait();

  // autocomplete should be disabled
  const autocomplete = form.querySelector("input[ref='searchInput']");
  expect(autocomplete).toBeDisabled();

  // user enters address manually
  const address1 = form.querySelector(
    "input[name='data[plsplusaddress][address1]']"
  );
  expect(address1).not.toBeDisabled();
  await userEvent.click(address1);
  await userEvent.type(address1, "address1", {
    delay: 100,
  });

  const address2 = form.querySelector(
    "input[name='data[plsplusaddress][address2]']"
  );
  await userEvent.click(address2);
  await userEvent.type(address2, "address2", {
    delay: 100,
  });

  const address3 = form.querySelector(
    "input[name='data[plsplusaddress][address3]']"
  );
  await userEvent.click(address3);
  await userEvent.type(address3, "address3", {
    delay: 100,
  });

  const city = form.querySelector("input[name='data[plsplusaddress][city]']");
  await userEvent.click(city);
  await userEvent.type(city, "city", {
    delay: 100,
  });

  const postcode = form.querySelector(
    "input[name='data[plsplusaddress][postcode]']"
  );
  await userEvent.click(postcode);
  await userEvent.type(postcode, "1234", {
    delay: 100,
  });

  await testWait(200);

  // form submitted with expected data
  const button = getByText(form, "Submit");
  expect(button).toBeVisible();
  await userEvent.click(button);
  await testWait();
  expect(data).toEqual({
    plsplusaddress: {
      address: {
        address1: "address1",
        address2: "address2",
        address3: "address3",
        autocompleteAddress: "",
        city: "city",
        postcode: "1234",
        selectedAddress: "address1 address2 address3 city QLD 1234",
        state: "QLD",
      },
      mode: "manual",
    },
    submit: true,
  });
});
