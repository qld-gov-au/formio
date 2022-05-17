export class PdfDownload {
  /**
   * isNextPage function check needPdf field is marked as 'yes' in form.io
   * and then set PDF url as a session storage
   * @return {undefined}
   * */
  static isNextPage(form, event) {
    if (event && event.data && event.data.needPdf === "yes") {
      const pdfUrl = event.metadata.pdfUrl.DownloadUrl;
      window.sessionStorage.setItem("pdfUrl", pdfUrl);
    }
    form.root.nextPage();
  }

  /**
   * isLastPage
   * and then set PDF url as a session storage
   * @return {undefined}
   * */
  static isLastPage(form) {
    if (form.currentNextPage === -1) {
      if (window.sessionStorage.getItem("pdfUrl") !== null) {
        setTimeout(() => {
          document.getElementsByClassName(
            "formio-wizard-nav-container"
          )[0].style.visibility = "hidden";
        }, 0);
        this.onDownloadbtnClick();
      }
    }
  }

  /**
   * onDownloadbtnClick function register a click event on 'pdf-download' button click
   * url is set from the session storage
   * @return {undefined}
   * */
  static onDownloadbtnClick() {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".pdf-download")) {
        console.info("clicked button v2");
        window.open(window.sessionStorage.getItem("pdfUrl"), "_blank");
      }
    });
  }
}
