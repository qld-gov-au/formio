/* eslint-disable no-underscore-dangle */
import { pushDataLayer } from "../utils/pushDataLayer";

export default ({ form, formConfirmation }) => {
  // Change event/GTM
  form.on("change", (e) => {
    if (
      typeof e.changed !== "undefined" &&
      typeof e.changed.component !== "undefined"
    ) {
      pushDataLayer({
        event: "formio-interaction",
        "formio-input-id": e.changed.component.id,
        "formio-input-type": e.changed.component.type,
        "formio-input-value": e.changed.value,
        "formio-input-key": e.changed.component.key,
        "formio-input-label-raw": e.changed.component.label,
        "formio-name": form._form.title,
        "formio-version": form._form.modified,
        "formio-category": `Form: ${form._form.title}`,
        "formio-action": "filled in",
      });
    }
  });

  // backward compatibility, for old forms that using this event to do submission
  form.on("applicationSubmit", () => {
    form.submit();
  });

  form.on("submitDone", () => {
    pushDataLayer({
      event: "formio-submission",
      submissionsUrl: `form.io: ${form.formio.submissionsUrl}`,
      "formio-name": form._form.title,
      "formio-version": form._form.modified,
    });

    if (formConfirmation) window.location.href = formConfirmation;
  });

  form.on("submitError", (error) => {
    pushDataLayer({
      event: "ngErrorEvent",
      ngErrorLocation: form._form.title,
      ngErrorMsg: "submission error",
      ngErrorStack: error.message || error,
    });
  });
};
