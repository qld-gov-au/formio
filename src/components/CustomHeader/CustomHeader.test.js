import "@testing-library/jest-dom";
import { findByText } from "@testing-library/dom";

import { createForm } from "../../utils";

// Smoke test for presentation component
test("CustomHeader is rendered", async () => {
  const form = createForm({
    form: {
      components: [
        {
          type: "customheader",
          key: "customheader",
          tag: "h1",
          content: "This is a custom header",
        },
      ],
    },
  });
  document.body.append(form);
  const header = await findByText(form, "This is a custom header");
  expect(header).toBeVisible();
  expect(header.tagName.toLowerCase()).toEqual("h1");
});
