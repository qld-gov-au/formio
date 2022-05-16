export class PdfDownload {
  constructor(event, form) {
    this.submitEvt = event;
    this.formInstance = form;
  }

  /**
   * isPdfDownloadEnabled function check needPdf field is marked as 'yes' in form.io
   * and then set PDF url as a session storage
   * @return {undefined}
   * */
  isPdfDownloadEnabled() {
    if (this.submitEvt.data && this.submitEvt.data.needPdf === "yes") {
      const pdfUrl = this.submitEvt.metadata.pdfUrl.DownloadUrl;
      window.sessionStorage.setItem("pdfUrl", pdfUrl);
      this.formInstance.root.nextPage().then(() => {
        document.getElementsByClassName(
          "formio-wizard-nav-container"
        )[0].style.visibility = "hidden";
      });
      this.onDownloadbtnClick();
    }
  }

  /**
   * onDownloadbtnClick function register a click event on 'pdf-download' button click
   * url is set from the session storage
   * @return {undefined}
   * */
  onDownloadbtnClick() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#pdf-download")) {
        console.info("clicked button v2");
        window.open(window.sessionStorage.getItem("pdfUrl"), "_blank");
      }
    });
  }
}
