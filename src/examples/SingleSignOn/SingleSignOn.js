export const createSSoForm = () => {
  const div = document.createElement("div");
  const oidcform = document.createElement("div");
  oidcform.setAttribute("id", "oidc_form");
  div.appendChild(oidcform);
  const formio = document.createElement("div");
  formio.setAttribute("id", "formio");
  oidcform.appendChild(formio);
  const spinner = document.createElement("img");
  // <div id="oidc_form"><div id="formio"><img src="https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"></div></div>
  spinner.setAttribute(
    "src",
    "https://www.qld.gov.au/__data/assets/image/0019/126703/Spinner-1s-200px.png"
  );
  formio.appendChild(spinner);

  setTimeout(() => {
    Formio.namespace = "auth";
    const formioProjectId = "ncwawujlwylhrfy"; // configure in squiz component
    const formioLoginFormId = "oidcsso"; // configure in squiz component
    const formioServiceFormId = "devauthform"; // configure in squiz component
    const formioBaseEndpoint = `https://api.forms.platforms.qld.gov.au/${formioProjectId}`;
    const formioLoginFormEndpoint = `${formioBaseEndpoint}/${formioLoginFormId}?live=1`;
    const formioServiceFormEndpoint = `${formioBaseEndpoint}/${formioServiceFormId}`;
    const user = Formio.getUser();
    console.info(user);
    if (user) {
      console.info("Found user, redirecting to the form...");
      Formio.createForm(
        document.getElementById("oidc_form"),
        formioServiceFormEndpoint
      ).then(function postSetup(form) {
        window.form = form;
        // This section of code is the "Form Controller"
        form.on("submitDone", function submitDoneCleanup(submission) {
          // remove form.io api tokens after submission for security
          localStorage.removeItem("authToken");
          localStorage.removeItem("authUser");
          const reloadTimeout = setTimeout(afterTimeout, 500);

          function afterTimeout() {
            // logout the user for security
            const logoutUrl =
              "https://uat.auth.qld.gov.au/auth/realms/tell-us-once/protocol/openid-connect/logout";
            // maintain login for office 365 accounts

            // add your own URL encoded confirmation page URL here in place of window.location.href.split('#')[0];
            const returnUiParams = "?submitted";
            let params = `?redirect_uri=${encodeURI(
              window.location.href.split("#")[0] + returnUiParams
            )}`;

            if (user.data.idp_type && user.data.idp_type === "employee") {
              params += "&initiating_idp=o365";
            }
            //clearTimeout(reloadTimeout);
            window.location.href = logoutUrl + params;
          }
        });
      });
    } else {
      console.info("No current user, rendering oidc sso form...");
      const oidcForm = Formio.createForm(
        document.getElementById("oidc_form"),
        formioLoginFormEndpoint
      );
      oidcForm.then((form) => {
        console.info(`Loaded form: ${form.formio.formId}`);
        // console.info(JSON.stringify(form.formio));
        form.on("submitDone", (submission) => {
          Formio.currentUser().then((userDetails) => {
            // clean up URL paramters from submission or logout redirect
            console.info(userDetails);

            const formioCleanURL = window.location.href.split("?")[0];

            // trigger post-login form to load
            window.location.href = formioCleanURL;
          });
        });
      });
    }
  }, 100);

  return div;
};
