import "../../lib/formio.full";
import * as components from "../components/index.dev";
import providers from "../providers";
import templates from "../templates/index.dev";
import { getComponents } from "../utils/getComponents";

global.window.scrollTo = jest.fn();
global.premium = {};
global.$ = require("jquery");

Formio.use({
  components: getComponents(components),
  templates,
  providers,
});
