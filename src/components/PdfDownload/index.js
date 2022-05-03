export class PdfDownload {
  constructor(event, pdfDownloadMessage, pdfDownload) {
    this.formData = event
    this.pdfDownloadMessage = pdfDownloadMessage
    this.pdfDownload = pdfDownload
  }
  isPdfDownloadEnabled() {
    let formData = this.formData;
    let pdfDownloadMatrixVal = this.pdfDownload;
    let pdfDownloadMessageMatrixVal = this.pdfDownloadMessage;
    // console.log(formData);
    // console.log(pdfDownloadMatrixVal);
    // console.log(pdfDownloadMessageMatrixVal);
    if (formData && pdfDownloadMatrixVal && pdfDownloadMessageMatrixVal) {
      //check PDF download option is checked in Matrix and PDF exist on forms.io for a particular form
      if (
          formData.metadata &&
          formData.metadata.PostToAPIGateway &&
          formData.metadata.PostToAPIGateway.DownloadUrl
      ) {
        return true;
      }
    }
  }
  getDownloadUrl() {
     if(this.isPdfDownloadEnabled()){
       return this.formData.metadata.PostToAPIGateway.DownloadUrl
     } else {
         console.info('Please check Pdf version is available')
     }
  }

  getDownloadMessage() {
    if(this.isPdfDownloadEnabled()){
      return this.pdfDownloadMessage
    } else {
      console.info('Add a download message in Squiz Metadata')
    }
  }

  submitLoaderIcon() {
    $("#download-pdf")
      .attr("disabled", true)
      .append('<i class="fa fa-circle-o-notch fa-spin ml-1"></i>');
  }

  feedbackMessageTemplate() {
    return `<div class="qg-formsio__thank-you-message alert alert-success mt-4" role="alert">
            ${this.getDownloadMessage()}
            ${
              sessionStorage.getItem("pdfUrl")
                ? `<button class="btn btn-primary" id="download-pdf">Download a PDF copy of your enquiry</button>`
                : ""
            }
       </div>`;
  }
}
