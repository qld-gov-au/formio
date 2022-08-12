/*
 * This component is used for SSO solution.
 * Inherit the Button component and only customise the openOauth function, in order to support QG SSO solution.
 * This component is extending from:
 * https://github.com/formio/formio.js/blob/master/src/components/button/Button.js
 *
 */

import _ from "lodash";
import NativePromise from "native-promise-only";

const Button = Formio.Components.components.button;

export class SSOButton extends Button {
  static schema(...extend) {
    return Button.schema({
      type: "ssobutton",
      label: "SSO button",
      key: "ssobutton",
      ...extend,
    });
  }

  openOauth(settings) {
    if (!this.root.formio) {
      console.warn(
        "You must attach a Form API url to your form in order to use OAuth buttons."
      );
      return;
    }

    /* eslint-disable camelcase */
    let params = {
      response_type: "code",
      client_id: settings.clientId,
      redirect_uri:
        settings.redirectURI ||
        window.location.origin ||
        `${window.location.protocol}//${window.location.host}`,
      state: settings.state,
      scope: settings.scope,
    };
    /* eslint-enable camelcase */

    // Needs for the correct redirection URI for the OpenID
    const originalRedirectUri = params.redirect_uri;

    // Make display optional.
    if (settings.display) {
      params.display = settings.display;
    }

    params = Object.keys(params)
      .map((key) => {
        return `${key}=${encodeURIComponent(params[key])}`;
      })
      .join("&");

    const separator = settings.authURI.indexOf("?") !== -1 ? "&" : "?";
    const url = `${settings.authURI}${separator}${params}`;
    const popup = window.open(url, settings.provider, "width=1020,height=618");

    const interval = setInterval(() => {
      try {
        // This is the condition need to be customised
        // const popupHost = popup.location.host;
        // const currentHost = window.location.host;
        // if (
        //   popup &&
        //   !popup.closed &&
        //   popupHost === currentHost &&
        //   popup.location.search
        // ) {
        if (popup && !popup.closed && popup.location.search) {
          popup.close();
          const thisParams = popup.location.search
            .substr(1)
            .split("&")
            .reduce((innerParams, param) => {
              const split = param.split("=");
              // eslint-disable-next-line prefer-destructuring
              innerParams[split[0]] = split[1];
              return innerParams;
            }, {});
          if (thisParams.error) {
            // eslint-disable-next-line no-alert
            window.alert(thisParams.error_description || thisParams.error);
            this.root.setAlert(
              "danger",
              thisParams.error_description || thisParams.error
            );
            return;
          }
          // TODO: check for error response here
          if (settings.state !== thisParams.state) {
            this.root.setAlert(
              "danger",
              "OAuth state does not match. Please try logging in again."
            );
            return;
          }
          // Depending on where the settings came from, submit to either the submission endpoint (old) or oauth endpoint (new).
          let requestPromise = NativePromise.resolve();

          if (
            _.has(this, "root.form.config.oauth") &&
            this.root.form.config.oauth[this.component.oauthProvider]
          ) {
            thisParams.provider = settings.provider;
            thisParams.redirectURI = originalRedirectUri;

            // Needs for the exclude oAuth Actions that not related to this button
            thisParams.triggeredBy = this.key;
            requestPromise = this.root.formio.makeRequest(
              "oauth",
              `${this.root.formio.projectUrl}/oauth2`,
              "POST",
              thisParams
            );
          } else {
            const submission = { data: {}, oauth: {} };
            submission.oauth[settings.provider] = thisParams;
            submission.oauth[settings.provider].redirectURI =
              originalRedirectUri;

            // Needs for the exclude oAuth Actions that not related to this button
            submission.oauth[settings.provider].triggeredBy = this.key;
            requestPromise = this.root.formio.saveSubmission(submission);
          }
          requestPromise
            .then((result) => {
              this.root.onSubmit(result, true);
            })
            .catch((err) => {
              this.root.onSubmissionError(err);
            });
        }
      } catch (error) {
        if (
          error.name !== "SecurityError" &&
          (error.name !== "Error" || error.message !== "Permission denied")
        ) {
          this.root.setAlert("danger", error.message || error);
        }
      }
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(interval);
      }
    }, 100);
  }

  // customise builder settings
  static get builderInfo() {
    return {
      title: "SSOButton",
      group: "custom",
      documentation: "/userguide/#button",
      weight: 2,
      schema: {
        ...SSOButton.schema(),
      },
    };
  }
}
