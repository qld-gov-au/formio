import {PdfDownload} from '../components/PdfDownload';

export default (props) => {
  // output what inside prop
  console.info("Default form controller", props);
  const { form, formConfirmation, pdfDownloadMessage, pdfDownload, elem } =
    props;
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

  form.on("submitDone", (event) => {
    let cPdfDownload = new PdfDownload(event, pdfDownloadMessage, pdfDownload);
    let pdfDownloadUrl = cPdfDownload.getDownloadUrl();
    let pdfDownloadMessageSquizMetadata = cPdfDownload.getDownloadMessage();
    if(pdfDownloadUrl && pdfDownloadMessage){
      sessionStorage.setItem("pdfUrl", pdfDownloadUrl);
      document.getElementByClassName("qg-forms-v2").innerHTML = pdfDownloadMessageSquizMetadata;
    }
    // for debugging pdf function
    // console.info("submitDone", event);
    // // to get pdf info, approach 1
    // console.info("pdfDownload #1", pdfDownload);
    // console.info("pdfDownloadMessage #1", pdfDownloadMessage);
    // // to get pdf info, approach 2
    // console.info("pdfDownload #2", elem.dataset.formioPdfDownload);
    // console.info(
    //   "pdfDownloadMessage #2",
    //   elem.dataset.formioPdfDownloadMessage
    // );

    // redirect after submit
    if (formConfirmation) window.location.href = formConfirmation;
  });
};
