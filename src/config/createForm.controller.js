// class PdfDownload {
//   // isPdfDownloadEnabled(submissionData) {
//   //   if (submissionData) {
//   //     // check PDF download option is checked and PDF exist on forms.io for a particular form
//   //     if (
//   //       formio_config.pdf_download &&
//   //       submissionData &&
//   //       submissionData.metadata &&
//   //       submissionData.metadata.PostToAPIGateway &&
//   //       submissionData.metadata.PostToAPIGateway.DownloadUrl
//   //     ) {
//   //       return submissionData.metadata.PostToAPIGateway.DownloadUrl;
//   //     }
//   //   }
//   // }
//
//   submitLoaderIcon() {
//     $("#download-pdf")
//       .attr("disabled", true)
//       .append('<i class="fa fa-circle-o-notch fa-spin ml-1"></i>');
//   }
//
//   feedbackMessageTemplate() {
//     return `<div class="qg-formsio__thank-you-message alert alert-success mt-4" role="alert">
//             <h2><i class="fa fa-check-circle"></i>Thank you for your feedback</h2>
//             <p><strong>Please note:</strong> It may take approximately 10 business days to receive a response.</p>
//             <p>If your enquiry is urgent, please contact us by phone:</p>
//             <ul><li>For COVID-19 enquiries, please visit <a href="http://www.covid19.qld.gov.au" target="_blank" rel="nofollow noopener" title="Opens in new window">www.covid19.qld.gov.au <span class="qg-blank-notice sr-only">(Opens in new window)</span> </a> or call 134 COVID (13 42 68).</li><li>For all other general enquiries, call 13 QGOV (13 74 68).</li></ul>
//             <p>If you have included your email, we will acknowledge your enquiry and send it to the appropriate Queensland Government department.</p>
//             <p>The Queensland Government is committed to protecting <a href="https://www.qld.gov.au/legal/privacy" target="_blank" rel="nofollow noopener" title="Opens in new window">your privacy <span class="qg-blank-notice sr-only">(Opens in new window)</span> </a>.</p>
//             ${
//               sessionStorage.getItem("pdfUrl")
//                 ? `<button class="btn btn-primary" id="download-pdf">Download a PDF copy of your enquiry</button>`
//                 : ""
//             }
//        </div>`;
//   }
// }

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

  // backward compatibility, for old forms that using this event to do submission
  form.on("applicationSubmit", () => {
    form.submit();
  });

  form.on("submitDone", (submissionData) => {
    console.log(submissionData, "submissionData");
    console.log(submissionData.metadata, "submissionData.metadata");
    if (formConfirmation) window.location.href = formConfirmation;
  });
};
