/*
 * inherit button component
 * https://github.com/formio/formio.js/blob/master/src/components/button/Button.js
 *
 */

import PdfSubmitButtonEditForm from "./PdfSubmitButton.form";

const Button = Formio.Components.components.button;

export class PdfSubmitButton extends Button {
  static schema(...extend) {
    return Button.schema({
      type: "pdfsubmitbutton",
      label: "Submit",
      key: "pdfsubmitbutton",
      downloadSuccessMessage: "",
      downloadFailedMessage: "",
      downloadButtonLabel: undefined,
      downloadButtonClass: undefined,
      downloadButtonTarget: undefined,
      downloadSuccessMessageClass: undefined,
      downloadFailedMessageClass: undefined,
      // props below are for debugging in storybook
      debugMode: false,
      debugPdfUrl: "",
      ...extend,
    });
  }

  init() {
    // hide the default submit button if it is a wizard
    if (this.root?.options?.buttonSettings)
      this.root.options.buttonSettings.showSubmit = false;
    super.init();
  }

  attachButton() {
    super.attachButton();
    if (this.component.action === "submit") {
      this.on(
        this.component.debugMode ? "submit" : "submitDone",
        (e) => {
          // get the pdf DownloadUrl from submission response, the action name setup in the form needed to be `pdfUrl`
          const pdfUrl = this.component.debugMode
            ? this.component.debugPdfUrl
            : e?.metadata?.pdfUrl?.DownloadUrl;

          const {
            downloadSuccessMessage,
            downloadFailedMessage,
            downloadButtonClass,
            downloadButtonLabel,
            downloadButtonTarget,
            downloadSuccessMessageClass,
            downloadFailedMessageClass,
          } = this.component;

          // setup default settings for download button
          const className =
            downloadButtonClass !== undefined
              ? downloadButtonClass
              : "btn btn-primary";

          const target =
            downloadButtonTarget !== undefined
              ? downloadButtonTarget
              : "_blank";

          const label =
            downloadButtonLabel !== undefined
              ? downloadButtonLabel
              : "Download";

          const successMessageClass = downloadSuccessMessageClass || "";
          const failedMessageClass = downloadFailedMessageClass || "";

          // replace form div container with downloadSuccessMessage

          if (pdfUrl) {
            this.root.element.innerHTML = `
              <div class="${successMessageClass}">
                ${
                  downloadSuccessMessage
                    ? `<div class="mb-3 download-success-message-container">${downloadSuccessMessage}</div>`
                    : ""
                }
                <div class="download-button-container">
                  <a href="${pdfUrl}" class="${className}" target="${target}" />
                    ${label}
                  </a>
                </div>
              </div>
            `;
          } else {
            this.root.element.innerHTML = `
              <div class="${failedMessageClass}">
                <div class="download-failed-message-container">
                  ${downloadFailedMessage}
                </div>
              </div>
            `;
          }
          this.root.element.scrollIntoView();
        },
        true,
      );
    }
  }

  static get builderInfo() {
    return {
      title: "PdfSubmitButton",
      group: "custom",
      icon: "fa-solid fa-file",
      documentation: "/userguide/#button",
      weight: 2,
      schema: {
        ...PdfSubmitButton.schema(),
      },
    };
  }
}

PdfSubmitButton.editForm = PdfSubmitButtonEditForm;
