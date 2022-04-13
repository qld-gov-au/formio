import { indent } from "../../../../utils/indent";
import {
  CustomController,
  // eslint-disable-next-line import/no-unresolved, import/extensions
} from "!!./CustomController";
import { customControllerTemplate } from "./CustomController.template";

export const customControllerCode = `
${customControllerTemplate}
<script>
${indent(
  CustomController.toString().replaceAll(
    "___WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader"
  ),
  1
)}
  CustomController();
</script>
`;
