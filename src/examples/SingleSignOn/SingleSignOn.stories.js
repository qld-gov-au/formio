// import SSOHighLevel from '../../stories/assets/SSO-HighLevel.png';
// import SSOUserFlow from '../../stories/assets/SSO-UserFlow.png';
import { SingleSignOn } from "./stories/SingleSignOn";
import { singleSignOnCode } from "./stories/SingleSignOn.code";
import { SSOUnauth } from "./stories/SSOUnauth";
import { SSOUnauthCode } from "./stories/SSOUnauth.code";

export default {
  title: "Examples/SingleSignOn",
};

export const SsoDemo = {
  render: () => SingleSignOn(),
  name: "ssoDemo",

  parameters: {
    docs: {
      source: {
        code: singleSignOnCode,
        language: "html",
      },
    },
  },
};

export const SsoUnauth = {
  render: () => SSOUnauth(),
  name: "ssoUnauth",

  parameters: {
    docs: {
      source: {
        code: SSOUnauthCode,
        language: "html",
      },
    },
  },
};
