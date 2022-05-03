export class PdfDownload {
  constructor(event, pdfDownloadMessage, pdfDownload) {
    this.onDownloadbtnClick();
    this.formData = event;
    this.pdfDownloadMessage = pdfDownloadMessage;
    this.pdfDownload = pdfDownload;
  }

  isPdfDownloadEnabled() {
    return true;
  }

  getDownloadUrl() {
    if (this.isPdfDownloadEnabled()) {
      return this.formData.metadata.PostToAPIGateway.DownloadUrl;
    }
    return false;
  }

  getDownloadMessage() {
    if (this.isPdfDownloadEnabled()) {
      return this.pdfDownloadMessage;
    }
    return false;
  }

  onDownloadbtnClick() {
    // eslint-disable-next-line func-names
    $("body").on("click", "#download-pdf", function () {
      window.location.href = window.sessionStorage.getItem("pdfUrl");
    });
  }

  feedbackMessageTemplate() {
    return `<div class="qg-formsio__thank-you-message alert alert-success mt-4" role="alert">
            ${this.getDownloadMessage()} 
            ${
              window.sessionStorage.getItem("pdfUrl")
                ? `<button class="btn btn-primary" id="download-pdf">Download a PDF copy of your enquiry</button>`
                : ""
            }
       </div>`;
  }
}
