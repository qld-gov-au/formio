import { DownloadPdfRender } from "./DownloadPdf";
import { downloadPdfCode } from "./DownloadPdf.code";
import { DownloadPdfWizardRender } from "./DownloadPdfWizard";
import { downloadPdfWizardCode } from "./DownloadPdfWizard.code";

export default {
  title: "Examples/DownloadPdf",
};

export const DownloadPdfStory = {
  render: () => DownloadPdfRender(),
  name: "downloadPdf",

  parameters: {
    docs: {
      source: {
        code: downloadPdfCode,
      },
    },
  },
};

export const DownloadPdfWizardStory = {
  render: () => DownloadPdfWizardRender(),
  name: "downloadPdfWizard",

  parameters: {
    docs: {
      source: {
        code: downloadPdfWizardCode,
      },
    },
  },
};
