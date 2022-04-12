import * as FormioLoader from "../../matrixHelpers/FormioLoader";

export const createSSoForm = () => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="oidc_form"></div>
  <div id="formio"></div>
  `;

  const oidcform = div.querySelector("#oidc_form");
  const formioDiv = div.querySelector("#formio");

  function appendSpinner(parentElement) {
    parentElement.innerHTML = `<img src="https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"/>`;
  }

  setTimeout(() => {
    const formioApiDomain = "api.forms.platforms.qld.gov.au";
    const formioProjectId = "ncwawujlwylhrfy"; // configure in squiz component
    const formioLoginFormId = "oidcsso"; // configure in squiz component
    const formioServiceFormId = "devauthform"; // configure in squiz component
    const namespace = `formio_${formioProjectId}`;
    // const formioBaseEndpoint = `https://api.forms.platforms.qld.gov.au/${formioProjectId}`;
    // const formioLoginFormEndpoint = `${formioBaseEndpoint}/${formioLoginFormId}?live=1`;
    // const formioServiceFormEndpoint = `${formioBaseEndpoint}/${formioServiceFormId}`;
    let user = null;
    // let oidcForm = null;
    // const realForm = null;

    function realFormSetup() {
      console.info("Found user, redirecting to the form...");
      // realForm = Formio.createForm(
      //   document.getElementById("formio"),
      //   formioServiceFormEndpoint
      // );

      const createFormController = ({ form }) => {
        // window.form = form;
        // This section of code is the "Form Controller"
        form.on("submitDone", function submitDoneCleanup(submission) {
          console.info("submission", submission);

          Formio.logout(form.formio, {
            namespace,
          }).then(() => {
            window.location.reload();
          });
        });
      };

      FormioLoader.initFormioInstance(formioDiv, {
        projectName: formioProjectId,
        formName: formioServiceFormId,
        envUrl: formioApiDomain,
        namespace,
        createFormController,
      });
    }

    function loginFormSetup() {
      console.info("No current user, rendering oidc sso form...");
      // oidcForm = Formio.createForm(
      //   document.getElementById("oidc_form"),
      //   formioLoginFormEndpoint
      // );

      const createFormController = ({ form }) => {
        console.info(`Loaded form: ${form.formio.formUrl}`, form);
        // console.info(JSON.stringify(form.formio));
        form.on("submitDone", (submission) => {
          console.info("submission", submission);

          form.formio.currentUser({ namespace }).then((userDetails) => {
            // clean up URL paramters from submission or logout redirect
            console.info("userDetails", userDetails);
            // const parent = document.getElementById("oidc_form").parentElement;
            oidcform.remove();
            // const oidcformNew = document.createElement("div");
            // oidcformNew.setAttribute("id", "oidc_form");
            // parent.appendChild(oidcform);
            // eslint-disable-next-line no-use-before-define
            pickForm();
            // const formioCleanURL = window.location.href.split("?")[0];
            //
            // // trigger post-login form to load
            // window.location.href = formioCleanURL;
          });
        });
      };

      FormioLoader.initFormioInstance(oidcform, {
        projectName: formioProjectId,
        formName: formioLoginFormId,
        envUrl: formioApiDomain,
        namespace,
        createFormController,
      });
    }

    function pickForm() {
      user = Formio.getUser({ namespace });
      console.info("user", user);
      if (user) {
        appendSpinner(formioDiv);
        realFormSetup();
      } else {
        appendSpinner(oidcform);
        loginFormSetup();
      }
    }

    pickForm();
  }, 100);

  return div;
};
