export default ({ form, formConfirmation }) => {
  // Change event/GTM
  form.on("change", (e) => {
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
        "formio-input-value": e.changed.value,
        "formio-input-key": e.changed.component.key,
        "formio-input-label-raw": e.changed.component.label,
        "formio-version": formModified,
        "formio-category": `Form: ${formTitle}`,
        "formio-action": "filled in",
      });
    }
  });

  // backward compatibility, for old forms that using this event to do submission
  form.on("applicationSubmit", () => {
    form.submit();
  });

  form.on("submitDone", () => {
    if (formConfirmation) window.location.href = formConfirmation;
  });
};
