import * as FormioLoader from "../../helpers/FormioLoader";

export const createSSoForm = () => {
  const formioApiDomain = "api.forms.platforms.qld.gov.au";
  const formioProjectId = "ncwawujlwylhrfy"; // configure in squiz component
  const formioLoginFormId = "oidcsso"; // configure in squiz component
  const formioServiceFormId = "devauthformstorybook"; // configure in squiz component
  const namespace = `formio_${formioProjectId}`;
  const div = document.createElement("div");
  let oidcform;
  let formioDiv;
  const resetDiv = () => {
    div.innerHTML = `
    <div id="oidc_form"></div>
    <div id="formio"></div>
    `;

    oidcform = div.querySelector("#oidc_form");
    formioDiv = div.querySelector("#formio");
  };

  const appendSpinner = (parentElement) => {
    parentElement.innerHTML = `<img src="https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"/>`;
  };

  const pickForm = () => {
    const user = Formio.getUser({ namespace });
    console.info("user", user);
    if (user) {
      appendSpinner(formioDiv);
      // eslint-disable-next-line no-use-before-define
      realFormSetup();
    } else {
      appendSpinner(oidcform);
      // eslint-disable-next-line no-use-before-define
      loginFormSetup();
    }
  };

  const logout = (form) => {
    // currently the logout endpoint has cors issue, otherwise could using the approach below without reload the page:
    // Formio.makeStaticRequest(
    //   "https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout",
    //   "GET",
    //   null,
    //   { namespace }
    // ).then(() => {
    //   Formio.logout(form.formio, {
    //     namespace,
    //   }).then(() => {
    //     resetDiv();
    //     pickForm();
    //   });
    // });
    const user = Formio.getUser({ namespace });
    let param = "";
    if (user?.data?.idp_type && user.data.idp_type === "employee") {
      param = "?initiating_idp=o365";
    }

    Formio.logout(form.formio, {
      namespace,
    }).then(() => {
      // window.location.reload();
      const popup = window.open(
        `https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout${param}`,
        "_logout",
        "location=no,height=100,width=100,scrollbars=no,status=no"
      );
      // can't use addEventListener to check pop is loaded if they are different domains due to CORS
      // popup.addEventListener(
      //   "load",
      //   () => {
      //     popup.close();
      //   },
      //   false
      // );
      // settle to use timeout for now
      setTimeout(() => {
        popup.close();
        resetDiv();
        pickForm();
      }, 2000);
    });
  };

  const realFormSetup = () => {
    console.info("Found user, redirecting to the form...");

    const createFormController = ({ form }) => {
      // This section of code is the "Form Controller"
      form.on("submitDone", function submitDoneCleanup(submission) {
        console.info("submission", submission);
        logout(form);
      });

      form.on("logout", () => {
        logout(form);
      });
    };
    FormioLoader.initFormioInstance(formioDiv, {
      projectName: formioProjectId,
      formName: formioServiceFormId,
      envUrl: formioApiDomain,
      namespace,
      createFormController,
    });
  };

  const loginFormSetup = () => {
    console.info("No current user, rendering oidc sso form...");

    const createFormController = ({ form }) => {
      console.info(`Loaded form: ${form.formio.formUrl}`, form);
      // console.info(JSON.stringify(form.formio));
      form.on("submitDone", (submission) => {
        console.info("submission", submission);

        form.formio.currentUser({ namespace }).then((userDetails) => {
          // clean up URL paramters from submission or logout redirect
          console.info("userDetails", userDetails);
          resetDiv();
          pickForm();
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
  };

  resetDiv();

  setTimeout(() => {
    pickForm();
  }, 100);

  return div;
};
