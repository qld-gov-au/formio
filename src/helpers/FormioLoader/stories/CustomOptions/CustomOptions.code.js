import { indent } from "../../../../utils/indent";
import {
  CustomOptions,
  // eslint-disable-next-line import/no-unresolved, import/extensions
} from "!!./CustomOptions";
import { customOptionsTemplate } from "./CustomOptions.template";

export const customOptionsCode = `
${customOptionsTemplate}
<script>
${indent(
  CustomOptions.toString().replaceAll(
    "___WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader",
  ),
  1,
)}
  CustomOptions();
</script>
`;
