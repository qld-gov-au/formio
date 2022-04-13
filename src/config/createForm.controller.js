export default ({ form, formConfirmation }) => {
  // Change event/GTM
  form.on("click", (e) => {
    // eslint-disable-next-line no-underscore-dangle
    const formTitle = form._form.title;
    // eslint-disable-next-line no-underscore-dangle
    const formModified = form._form.modified;
    if (
      typeof e.changed !== "undefined" &&
      typeof e.changed.component !== "undefined"
    ) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "formio-interaction",
        "formio-name": formTitle,
        "formio-input-id": e.changed.component.id,
        "formio-input-type": e.changed.component.type,
        "formio-input-value": e.changed.component.value,
        "formio-input-key": e.changed.component.key,
        "formio-input-label-raw": e.changed.component.label,
        "formio-version": formModified,
        "formio-category": `Form: ${formTitle}`,
        "formio-action": "Value changed",
      });
    }
  });

  form.on("submitDone", () => {
    if (formConfirmation) window.location.href = formConfirmation;
  });
};
