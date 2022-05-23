/* eslint-disable jest/expect-expect */
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { findByText } from "@testing-library/dom";
import { createForm, testWait } from "../../utils";

// Smoke test
test("BoilerplateButton is rendered", async () => {
  let submitted = false;
  const form = createForm({
    form: {
      components: [
        {
          type: "boilerplatebutton",
          key: "BoilerplateButton",
          label: "Boilerplate button",
          customDescription: "This is a custom description",
        },
      ],
    },
    controller: (formio) => {
      formio.on("submit", () => {
        submitted = true;
      });
    },
  });
  document.body.append(form);

  const label = await findByText(form, "This is a custom description");
  expect(label).toBeVisible();

  const button = await findByText(form, "Boilerplate button");
  expect(button).toBeVisible();

  // always wait a little bit after checking the element is rendered
  await testWait();
  await userEvent.click(button);
  // always wait a little bit after an event is emitted
  await testWait();
  expect(submitted).toEqual(true);
});
