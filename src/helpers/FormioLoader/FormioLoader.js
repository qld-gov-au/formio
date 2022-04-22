import defaultCreateFormOptions from "../../config/createForm.options";
import defaultCreateFormController from "../../config/createForm.controller";

// polyfill plugin function to fix the namespace option doesn't pass to Formio.makeRequest
const NamespacePlugin = {
  priority: 0,
  preRequest(requestArgs) {
    if (requestArgs.formio) {
      const formioInstance = document.querySelector(
        `[data-formio-form-url="${requestArgs.formio.formUrl}"]`
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

const initFormioInstance = (elem, opts) => {
  // if already initiated, reject
  if (elem.dataset.formioFormUrl) return;

  // if doesn't have required options, reject
  if (!opts.envUrl || !opts.projectName || !opts.formName) {
    console.warn(
      "Require envUrl, projectName, formName to initiate the form.",
      opts
    );
    return;
  }
  /*
   * setup config
   */
  const baseUrl = `https://${opts.envUrl.trim()}`;
  let formName = "";
  // Check if value is true/exists and is numeric
  if (opts.form_revision) {
    formName = `${opts.formName}/v/${opts.form_revision}`;
  } else {
    formName = opts.formName;
  }
  const { projectName } = opts;
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
  elem.dataset.formio = JSON.stringify(formio);
  elem.dataset.formioFormUrl = formUrl;

  /*
   * load formio form
   */
  const defaultOptions = {
    ...defaultCreateFormOptions,
    formio,
    namespace: formio.options.namespace,
  };

  const combinedOptions = {
    ...defaultOptions,
    // combine with hook options
    ...(typeof opts.createFormOptions === "function" &&
      opts.createFormOptions({
        ...opts,
        defaultOptions,
        elem,
      })),
  };

  // register plugin
  if (!Formio.getPlugin("namespacePolyfill"))
    Formio.registerPlugin(NamespacePlugin, "namespacePolyfill");

  Formio.createForm(elem, formUrl, combinedOptions).then((form) => {
    form.formio = formio;
    form.options.formio = formio;
    const callbackProps = {
      form,
      elem,
      ...opts,
    };

    if (typeof opts.createFormCallback === "function") {
      // call custom callback hook
      opts.createFormCallback(callbackProps);
    } else {
      // Force new tab on formlinks
      $(elem).on("click", `a`, (e) => {
        e.target.target = "_blank";
      });
    }

    // default controller
    defaultCreateFormController(callbackProps);

    // call custom hook controller
    if (typeof opts.createFormController === "function") {
      opts.createFormController(callbackProps);
    }
  });
};

const defaultInitFormioAction = () => {
  // customise error message
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
};

const initFormio = () => {
  // Init form
  Formio.icons = "fontawesome";
  if (premium) Formio.use(premium);

  // default callback after Formio is loaded
  if (typeof window.initFormioHook === "function") {
    window.initFormioHook();
  } else {
    defaultInitFormioAction();
  }

  document.querySelectorAll("[data-formio]").forEach((elem) => {
    const {
      formioProjectName,
      formioFormName,
      formioEnvUrl,
      formioPdfDownload,
      formioFormConfirmation,
      formioFormRevision,
      formioNamespace,
      formioCreateformOptions,
      formioCreateformController,
      formioCreateformCallback,
    } = elem.dataset;
    initFormioInstance(elem, {
      projectName: formioProjectName,
      formName: formioFormName,
      envUrl: formioEnvUrl,
      pdfDownload: formioPdfDownload,
      formConfirmation: formioFormConfirmation,
      formRevision: formioFormRevision,
      namespace: formioNamespace,
      createFormOptions: window[formioCreateformOptions],
      createFormController: window[formioCreateformController],
      createFormCallback: window[formioCreateformCallback],
    });
  });
};

export { initFormio, initFormioInstance };
