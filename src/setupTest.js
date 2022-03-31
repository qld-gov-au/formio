import "../lib/formio.full";
import * as components from "./components";
import providers from "./providers";
import templates from "./templates";
import { getComponents } from "./utils/getComponents";

global.window.scrollTo = jest.fn();

Formio.use({
  components: getComponents(components),
  templates,
  providers,
});
