import Formio from "formiojs/dist/formio.full";
import * as components from "./components";
import { getComponents } from "./utils/getComponents";

Formio.use({
  components: getComponents(components),
});

global.Formio = Formio;
