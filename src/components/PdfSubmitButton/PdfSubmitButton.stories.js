import { createForm, createBuilder } from "../../utils";

export default {
  title: "Components/Custom/PdfSubmitButton",
};

export const Renderer = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            type: "pdfsubmitbutton",
            key: "pdfsubmitbutton",
            label: "Submit",
            downloadSuccessMessage: "This is a download message.",
            debugMode: true,
            debugPdfUrl: "https://qld.gov.au",
            downloadSuccessMessageClass: "alert alert-success",
            downloadFailedMessageClass: "alert alert-warning",
          },
        ],
      },

      controller: (formio) => {
        formio.on("submit", (e) => {
          console.info("submit", e.data);
        });

        formio.on("change", (e) => {
          console.info("change", e.data);
        });
      },
    }),

  name: "Renderer",
};

export const RendererForMissingPdf = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            type: "pdfsubmitbutton",
            key: "pdfsubmitbutton",
            label: "Submit",
            downloadSuccessMessage: "This is a download message.",
            downloadFailedMessage: "No PDF available.",
            downloadSuccessMessageClass: "alert alert-success",
            downloadFailedMessageClass: "alert alert-warning",
            debugMode: true,
          },
        ],
      },

      controller: (formio) => {
        formio.on("submit", (e) => {
          console.info("submit", e.data);
        });

        formio.on("change", (e) => {
          console.info("change", e.data);
        });
      },
    }),

  name: "Renderer for missing PDF",
};

export const RendererForFormWizard = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            title: "Page 1",
            label: "Page 1",
            type: "panel",
            key: "page1",

            components: [
              {
                label: "Text Field1",
                tableView: true,
                key: "textField",
                type: "textfield",
                input: true,
              },
            ],

            input: false,
            tableView: false,
          },
          {
            title: "Page 2",
            label: "Page 2",
            type: "panel",
            key: "page2",

            buttonSettings: {
              previous: false,
            },

            components: [
              {
                label: "Text Field2",
                tableView: true,
                key: "textField1",
                type: "textfield",
                input: true,
              },
              {
                type: "pdfsubmitbutton",
                key: "pdfsubmitbutton",
                label: "Submit",
                downloadSuccessMessage: "This is a download message.",
                debugMode: true,
                debugPdfUrl: "https://qld.gov.au",
              },
            ],

            input: false,
            tableView: false,
          },
        ],

        display: "wizard",
      },

      controller: (formio) => {
        formio.on("submit", (e) => {
          console.info("submit", e.data);
        });

        formio.on("change", (e) => {
          console.info("change", e.data);
        });
      },
    }),

  name: "Renderer for form wizard",
};

export const Builder = {
  render: () =>
    createBuilder({
      form: {
        components: [
          {
            type: "pdfsubmitbutton",
            key: "pdfsubmitbutton",
            label: "Submit",
            downloadSuccessMessage: "This is a download message.",
            debugMode: true,
            debugPdfUrl: "https://qld.gov.au",
          },
        ],
      },
    }),

  name: "Builder",
};
