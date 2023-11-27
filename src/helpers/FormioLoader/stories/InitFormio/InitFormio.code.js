import { indent } from "../../../../utils/indent";
import {
  InitFormio,
  // eslint-disable-next-line import/no-unresolved, import/extensions
} from "!!./InitFormio";
import { initFormioTemplate } from "./InitFormio.template";

export const initFormioCode = `
${initFormioTemplate}
<script>
${indent(
  InitFormio.toString().replaceAll(
    "___WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader",
  ),
  1,
)}
  InitFormio();
</script>
`;
