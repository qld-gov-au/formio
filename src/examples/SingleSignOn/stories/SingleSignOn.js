import * as FormioLoader from "../../../helpers/FormioLoader";

export function SingleSignOn() {
  const formioApiDomain = "api.forms.platforms.qld.gov.au";
  const formioProjectId = "ncwawujlwylhrfy"; // configure in squiz component
  const formioLoginFormId = "oidcsso"; // configure in squiz component https://api.forms.platforms.qld.gov.au/#/project/612eeb800db6b412a3f37e1f/form/6155606df3e22ac39ba18542/edit
  const formioServiceFormId = "devauthformstorybook"; // configure in squiz component
  const namespace = `formio_${formioProjectId}`;
  const div = document.createElement("div");
  let oidcform;
  let formioDiv;
  let loadingLayer;
  const resetDiv = () => {
    div.innerHTML = `
    <div id="oidc_form"></div>
    <div id="formio"></div>
    <div id="loading-layer" style="background-image: url(https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png); width: 100%; height: 100%; min-height:200px; display: block; top: 0; position: fixed; background-repeat: no-repeat; background-position: center; opacity: 0.5; background-color: white;"></div>
    `;

    oidcform = div.querySelector("#oidc_form");
    formioDiv = div.querySelector("#formio");
    loadingLayer = div.querySelector("#loading-layer");
  };

  const setLoading = (loading) => {
    if (loadingLayer) loadingLayer.style.display = loading ? "block" : "none";
  };

  const pickForm = () => {
    const user = Formio.getUser({ namespace });
    console.info("user", user);
    setLoading(true);
    if (user) {
      // eslint-disable-next-line no-use-before-define
      realFormSetup();
    } else {
      // eslint-disable-next-line no-use-before-define
      loginFormSetup();
    }
  };

  const logout = (form) => {
    const user = Formio.getUser({ namespace });
    let param = "";
    if (user?.data?.idp_type && user.data.idp_type === "employee") {
      param = "&initiating_idp=o365";
    }

    Formio.logout(form.formio, {
      namespace,
    }).then(() => {
      const { origin, pathname } = window.location;
      // window.location.href = `https://www.uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout?redirect_uri=${origin}${pathname}${param}`;
      // return;
      // Formio.makeStaticRequest(
      //   `https://www.uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout?${param}`,
      //   "GET"
      // );
      // return;
      // popup is the only available approach due to the logout endpoint has the following rules:
      // x-frame-options: SAMEORIGIN, x-xss-protection: 1; mode=block
      // iframe/ajax approaches only available if the rule can be removed.
      // the cons of popup approach is the user may need to disable the pop-up blocker in their browser.
      const popup = window.open(
        `https://www.uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout?redirect_uri=${origin}${pathname}${param}`,
        "_logout",
        "location=no,height=100,width=100,scrollbars=no,status=no",
      );
      window.popup = popup;
      const timer = setInterval(() => {
        let popupOrigin;
        try {
          popupOrigin = popup.location.origin;
        } catch (Error) {
          popupOrigin = "";
        }
        // if popup has been success and redirected
        if (popupOrigin) {
          clearInterval(timer);
          popup.close();
          resetDiv();
          pickForm();
        }
      }, 500);
    });
  };

  const realFormSetup = () => {
    console.info("Found user, redirecting to the form...");

    const createFormController = ({ form }) => {
      // This section of code is the "Form Controller"
      form.on("submitDone", function submitDoneCleanup(submission) {
        console.info("submission", submission);
        setLoading(true);
        logout(form);
      });

      form.on("logout", () => {
        logout(form);
        setLoading(true);
      });

      form.on("initialized", () => {
        setLoading(false);
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

      form.on("submitDone", (submission) => {
        console.info("submission", submission);
        setLoading(true);

        form.formio.currentUser({ namespace }).then((userDetails) => {
          // clean up URL paramters from submission or logout redirect
          console.info("userDetails", userDetails);
          resetDiv();
          pickForm();
        });
      });

      form.on("error", () => {
        setLoading(false);
      });

      form.on("submitError", () => {
        logout(form);
      });

      form.on("initialized", () => {
        setLoading(false);
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
  });

  return div;
}
