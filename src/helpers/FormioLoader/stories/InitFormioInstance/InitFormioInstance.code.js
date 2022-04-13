import { indent } from "../../../../utils/indent";
import {
  InitFormioInstance,
  // eslint-disable-next-line import/no-unresolved, import/extensions
} from "!!./InitFormioInstance";
import { initFormioInstanceTemplate } from "./InitFormioInstance.template";

export const initFormioInstanceCode = `
${initFormioInstanceTemplate}
<script>
${indent(
  InitFormioInstance.toString().replaceAll(
    "___WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader"
  ),
  1
)}
  InitFormioInstance();
</script>
`;
