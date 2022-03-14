import Formio from "formiojs/dist/formio.full";
import * as components from "./components";
import providers from "./providers";
import templates from "./templates";
import { getComponents } from "./utils/getComponents";

Formio.use({
  components: getComponents(components),
  templates,
  providers,
});

global.Formio = Formio;

global.window.scrollTo = jest.fn();
