import { indent } from "../../utils";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { SimpleWizardRender } from "!!./SimpleWizard";

export const simpleWizardCode = `
<head>
  <script src="https://static.qgov.net.au/formio-qld/v2/v2.x.x-latest/formio-script.min.js"></script>
</head>
<body>
  <script>
${indent(
  SimpleWizardRender.toString().replaceAll(
    "_helpers_FormioLoader__WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader",
  ),
  2,
)}
    FormioScript.init().then(() => {
      const div = SimpleWizard();
      document.body.append(div);
    });
  </script>
</body>
`;
