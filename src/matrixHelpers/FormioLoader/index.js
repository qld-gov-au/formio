const initFormioInstance = (formioElem, opts) => {
  const bodyContainer = $("body");
  const defaultRedirect = "contact-us/response/";
  /*
   * setup config
   */
  const baseUrl = `https://${opts.envUrl.trim()}`;
  const formioContainerId = formioElem.getAttribute("id");
  const submitBtn = $(`#${formioContainerId} button[name='data[submit]']`);
  let formName = "";
  // Check if value is true/exists and is numeric
  if (opts.form_revision && $.isNumeric(opts.form_revision)) {
    formName = `${opts.formName}/v/${opts.form_revision}`;
  } else {
    console.info(`Revision fallback for ${formioContainerId}`);
    formName = opts.formName;
  }
  const { projectName } = opts;
  const formConfirmation = opts.formConfirmation || defaultRedirect;
  const namespace = opts.namespace || `formio-${projectName}`;
  const formUrl = `${baseUrl}/${projectName}/${formName}`;

  /*
   * init formio instance
   */
  const formio = new Formio(formUrl, {
    base: baseUrl,
    project: `${baseUrl}/${projectName}`,
    namespace,
  });
  formioElem.dataset.formio = JSON.stringify(formio);
  formioElem.dataset.formUrl = formUrl;

  /*
   * load formio form
   */
  Formio.createForm(
    formioElem,
    formUrl,
    // form,
    {
      // Turn off default buttons
      buttonSettings: {
        showCancel: false,
        showPrevious: false,
        showNext: false,
        showSubmit: false,
      },
      i18n: {
        en: { pattern: "Must use the format shown" },
      },
      formio,
      namespace: formio.options.namespace,
    }
  ).then((wizard) => {
    wizard.formio = formio;
    wizard.options.formio = formio;

    // eslint-disable-next-line no-underscore-dangle
    const formTitle = wizard._form.title;
    // eslint-disable-next-line no-underscore-dangle
    const formModified = wizard._form.modified;

    // Force new tab on formlinks
    bodyContainer.on("click", `#${formioContainerId} a`, (e) => {
      e.target.target = "_blank";
    });

    // Change event/GTM
    wizard.on("click", (change) => {
      const changeObj = change;
      if (
        typeof changeObj.changed !== "undefined" &&
        typeof changeObj.changed.component !== "undefined"
      ) {
        window.dataLayer.push({
          event: "formio-interaction",
          "formio-name": formTitle,
          "formio-input-id": changeObj.changed.component.id,
          "formio-input-type": changeObj.changed.component.type,
          "formio-input-value": changeObj.changed.component.value,
          "formio-input-key": changeObj.changed.component.key,
          "formio-input-label-raw": changeObj.changed.component.label,
          "formio-version": formModified,
          "formio-category": `Form: ${formTitle}`,
          "formio-action": "Value changed",
        });
      }
    });

    // Must use 'applicationSubmit' custom event on primary submit
    wizard.on("applicationSubmit", () => {
      submitBtn.attr("disabled", true);
      wizard
        .submit()
        .then(() => {
          if (formConfirmation) {
            window.location.href = `/${formConfirmation}`;
          } else {
            // No confirmation set. Using generic redirection
            window.location.href = defaultRedirect;
          }
        })
        .catch(() => {
          console.debug("Submission error");
        });
    });
  });
};

// polyfill plugin function to fix the namespace option doesn't pass to Formio.makeRequest
const NamespacePolyfillPlugin = {
  priority: 0,
  preRequest(requestArgs) {
    if (requestArgs.formio) {
      const formioInstance = document.querySelector(
        `[data-form-url="${requestArgs.formio.formUrl}"]`
      );
      if (formioInstance) {
        requestArgs.formio = JSON.parse(formioInstance.dataset.formio);
        requestArgs.opts.formio = requestArgs.formio;
      }
      if (requestArgs.formio.options)
        requestArgs.opts.namespace = requestArgs.formio.options.namespace;
    }
    return Promise.resolve(null);
  },
};

window.onload = () => {
  window.dataLayer = window.dataLayer || [];

  // Init form
  Formio.icons = "fontawesome";
  Formio.use(premium);

  // custom error message
  const newFunc = Formio.Form.prototype.errorForm.bind({});
  Formio.Form.prototype.errorForm = (err) => {
    if (
      (typeof err === "string" &&
        err.indexOf("Could not connect to API server") !== -1) ||
      (typeof err === "object" && err.networkError)
    ) {
      console.warn("formio error: ", err);
      return newFunc(
        "This form is currently unavailable due to maintenance. Please try again later."
      );
    }
    return newFunc(err);
  };

  // register plugin
  Formio.registerPlugin(NamespacePolyfillPlugin, "namespacePolyfill");

  document.querySelectorAll("[data-formio]").forEach((formioElem) => {
    initFormioInstance(formioElem, formioElem.dataset);
  });
};

// Persistent fix for iPhone/Safari
window.onpageshow = (event) => {
  if (event.persisted) {
    window.location.reload();
  }
};
