import { indent } from "../../utils";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { DownloadPdfWizardRender } from "!!./DownloadPdfWizard";

export const downloadPdfWizardCode = `
<head>
  <script src="https://static.qgov.net.au/formio-qld/v2/v2.x.x-latest/formio-script.min.js"></script>
</head>
<body>
  <script>
${indent(
  DownloadPdfWizardRender.toString().replaceAll(
    "_helpers_FormioLoader__WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader"
  ),
  2
)}
    FormioScript.init().then(() => {
      const div = DownloadPdfWizard();
      document.body.append(div);
    });
  </script>
</body>
`;
