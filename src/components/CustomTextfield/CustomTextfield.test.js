import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { findByText, getByText } from "@testing-library/dom";

import { createForm, testWait } from "../../utils";

// Smoke test
test("CustomTextfield is rendered", async () => {
  const form = createForm({
    form: {
      components: [
        {
          type: "customtextfield",
          key: "customtextfield",
          label: "First Name",
        },
      ],
    },
  });
  document.body.append(form);
  const label = await findByText(form, "First Name");
  expect(label).toBeVisible();
  const input = form.querySelector("input[name='data[customtextfield]']");
  expect(input).toBeVisible();
});

// Functional test
test("CustomTextfield submitted correct data", async () => {
  let data = {};
  const form = createForm({
    form: {
      components: [
        {
          type: "customtextfield",
          key: "firstName",
          label: "First Name",
        },
        {
          type: "button",
          key: "submit",
          label: "Submit",
          action: "submit",
        },
      ],
    },
    controller: (formio) => {
      formio.on("submit", (e) => {
        data = e.data;
      });
    },
  });
  document.body.append(form);
  const label = await findByText(form, "First Name");
  expect(label).toBeVisible();
  const input = form.querySelector("input[name='data[firstName]']");
  expect(input).toBeVisible();
  const button = getByText(form, "Submit");
  expect(button).toBeVisible();
  // user focus on input
  userEvent.click(input);
  await testWait();
  // user typing
  await userEvent.type(input, "test", { delay: 100 });
  expect(input).toHaveValue("test");
  // user click on submit
  userEvent.click(button);
  await testWait();
  expect(data).toEqual({ firstName: "test", submit: true });
});
