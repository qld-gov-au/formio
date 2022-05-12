export class PdfDownload {
  constructor(event, form) {
    this.onDownloadbtnClick();
    this.submitEvt = event;
    this.formInstance = form;
  }

  isPdfDownloadEnabled() {
    if (this.submitEvt.data && this.submitEvt.data.needPdf === "yes") {
      const pdfUrl = this.submitEvt.metadata.pdfUrl.DownloadUrl;
      window.sessionStorage.setItem("pdfUrl", pdfUrl);
      this.formInstance.root.nextPage();
      this.onDownloadbtnClick();
    }
  }

  onDownloadbtnClick() {
    $("body").on("click", "#pdf-download", () => {
      window.open(window.sessionStorage.getItem("pdfUrl"), "_blank");
    });
  }
}
